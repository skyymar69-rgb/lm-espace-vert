import { z } from 'zod'
import { headers } from 'next/headers'
import { NextRequest } from 'next/server'
import { CONTACT_TO, readRequestBody, sendMail } from '@/lib/email'

// Simple in-memory rate limiter (use Upstash Redis in production)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>()

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const entry = rateLimitMap.get(ip)

  if (!entry || entry.resetAt < now) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + 3600000 }) // 1 hour
    return true
  }

  if (entry.count >= 5) return false
  entry.count++
  return true
}

/**
 * Schéma serveur — volontairement plus permissif que `contactSchema`.
 *
 * Le site expose plusieurs formulaires qui ne collectent pas les mêmes champs :
 * le formulaire de contact demande nom + code postal, le formulaire de devis en
 * 3 étapes demande prénom + téléphone + commune. Le serveur accepte donc le
 * dénominateur commun (un moyen de recontact + un consentement) et laisse
 * chaque formulaire appliquer ses propres règles côté client.
 */
const leadSchema = z
  .object({
    // Honeypot — doit rester vide
    website: z.string().max(0, 'Spam détecté').optional().default(''),

    prenom: z.string().min(2, '2 caractères minimum').max(60),
    nom: z.string().max(60).optional().default(''),
    email: z.string().email('Email invalide').max(120).optional().or(z.literal('')),
    telephone: z
      .string()
      .regex(/^(\+33|0)[1-9](\d{2}){4}$/, 'Numéro français invalide')
      .optional()
      .or(z.literal('')),
    codePostal: z.string().regex(/^\d{5}$/, 'Code postal invalide').optional().or(z.literal('')),
    commune: z.string().max(80).optional().default(''),
    projectType: z.string().max(80).optional().default(''),
    sujet: z.enum(['devis', 'entretien', 'question', 'autre']).default('devis'),
    message: z.string().max(2000).optional().default(''),
    consentement: z.literal(true, {
      errorMap: () => ({ message: 'Vous devez accepter la politique de confidentialité' }),
    }),
    newsletter: z.boolean().default(false),
    // Anti-bot : formulaire rempli en moins de 3 s = robot
    startedAt: z.number().optional(),
  })
  // Il faut au moins un moyen de recontacter la personne.
  .refine((d) => Boolean(d.email) || Boolean(d.telephone), {
    message: 'Renseignez un email ou un téléphone',
    path: ['email'],
  })
  .refine((d) => d.startedAt === undefined || Date.now() - d.startedAt > 3000, {
    message: 'Soumission trop rapide',
    path: ['startedAt'],
  })

function toBoolean(value: unknown): boolean {
  return value === true || value === 'true' || value === 'on' || value === '1'
}

function toOptionalString(value: unknown): string | undefined {
  return typeof value === 'string' && value.trim() !== '' ? value.trim() : undefined
}

export async function POST(req: NextRequest) {
  const hdrs = await headers()
  const ip = hdrs.get('x-forwarded-for') ?? hdrs.get('x-real-ip') ?? 'unknown'

  if (!checkRateLimit(ip)) {
    return Response.json({ error: 'Trop de tentatives. Réessayez dans une heure.' }, { status: 429 })
  }

  let raw: Record<string, unknown>
  try {
    raw = await readRequestBody(req)
  } catch {
    return Response.json({ error: 'Requête illisible.' }, { status: 400 })
  }

  // Normalisation : les corps form-data / urlencoded n'ont que des chaînes.
  const data = {
    ...raw,
    website: typeof raw['website'] === 'string' ? raw['website'] : '',
    newsletter: toBoolean(raw['newsletter']),
    consentement: toBoolean(raw['consentement']) ? true : undefined,
    email: toOptionalString(raw['email']) ?? '',
    telephone: toOptionalString(raw['telephone']) ?? '',
    codePostal: toOptionalString(raw['codePostal']) ?? '',
    nom: toOptionalString(raw['nom']) ?? '',
    startedAt: raw['startedAt'] === undefined ? undefined : Number(raw['startedAt']),
  }

  const parsed = leadSchema.safeParse(data)

  if (!parsed.success) {
    console.warn(
      '[Contact] Données rejetées :',
      parsed.error.issues.map((i) => `${i.path.join('.')}: ${i.message}`).join(' | ')
    )
    return Response.json(
      {
        error: parsed.error.issues[0]?.message ?? 'Données invalides.',
        issues: parsed.error.issues,
      },
      { status: 400 }
    )
  }

  const lead = parsed.data
  const nomComplet = [lead.prenom, lead.nom].filter(Boolean).join(' ')

  const emailText = [
    'Nouveau message depuis le site lmespacevert.fr',
    '',
    `De : ${nomComplet}`,
    `Email : ${lead.email || 'Non renseigné'}`,
    `Téléphone : ${lead.telephone || 'Non renseigné'}`,
    lead.codePostal ? `Code postal : ${lead.codePostal}` : '',
    lead.commune ? `Commune : ${lead.commune}` : '',
    lead.projectType ? `Type de projet : ${lead.projectType}` : '',
    `Sujet : ${lead.sujet}`,
    `Newsletter : ${lead.newsletter ? 'Oui' : 'Non'}`,
    '',
    'Message :',
    lead.message || '(aucun message)',
  ]
    .filter((line) => line !== '')
    .join('\n')

  // Libellés rédigés à la main : « Demande de entretien » passerait mal dans
  // la boîte du client.
  const sujetLabels: Record<typeof lead.sujet, string> = {
    devis: 'Demande de devis',
    entretien: "Demande de contrat d'entretien",
    question: 'Question',
    autre: 'Demande',
  }

  const subjectLocation = lead.codePostal || lead.commune
  const result = await sendMail({
    subject: `[Site] ${sujetLabels[lead.sujet]}${subjectLocation ? ` – ${subjectLocation}` : ''}`,
    text: emailText,
    replyTo: lead.email || undefined,
  })

  if (!result.ok) {
    if (result.reason === 'not-configured') {
      // En production, une clé manquante est une vraie erreur : on ne doit
      // JAMAIS afficher « Message envoyé » alors qu'aucun email n'est parti.
      if (process.env.NODE_ENV === 'production') {
        console.error('[Contact] RESEND_API_KEY manquante en production — email non envoyé.')
        return Response.json(
          { error: "Le service d'envoi est momentanément indisponible. Contactez-nous par téléphone." },
          { status: 500 }
        )
      }
      console.info(`[Contact — DEV, aucun email envoyé vers ${CONTACT_TO}]\n${emailText}`)
      return Response.json({ ok: true, dev: true })
    }

    return Response.json({ error: "Erreur lors de l'envoi de l'email." }, { status: 500 })
  }

  return Response.json({ ok: true })
}
