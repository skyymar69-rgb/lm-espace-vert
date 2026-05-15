import { contactSchema } from '@lm/schemas/contact'
import { headers } from 'next/headers'
import { NextRequest } from 'next/server'

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

export async function POST(req: NextRequest) {
  const hdrs = await headers()
  const ip = hdrs.get('x-forwarded-for') ?? hdrs.get('x-real-ip') ?? 'unknown'

  if (!checkRateLimit(ip)) {
    return Response.json({ error: 'Trop de tentatives. Réessayez dans une heure.' }, { status: 429 })
  }

  const formData = await req.formData()
  const raw = Object.fromEntries(formData)

  // Convert types
  const data = {
    ...raw,
    newsletter: raw['newsletter'] === 'true',
    consentement: raw['consentement'] === 'true' ? true : undefined,
    startedAt: Number(raw['startedAt'] ?? 0),
  }

  const parsed = contactSchema.safeParse(data)

  if (!parsed.success) {
    return Response.json(
      { error: 'Données invalides.', issues: parsed.error.issues },
      { status: 400 }
    )
  }

  // Extract optional extra fields (not part of the validated schema)
  const projectType = typeof raw['projectType'] === 'string' ? raw['projectType'].trim() : ''
  const commune = typeof raw['commune'] === 'string' ? raw['commune'].trim() : ''

  // Send email (only if RESEND_API_KEY is configured)
  const resendKey = process.env['RESEND_API_KEY']
  if (resendKey) {
    try {
      const { Resend } = await import('resend')
      const resend = new Resend(resendKey)

      const extraLines = [
        projectType ? `Type de projet : ${projectType}` : '',
        commune ? `Commune : ${commune}` : '',
      ]
        .filter(Boolean)
        .join('\n')

      await resend.emails.send({
        from: 'contact@lmespacevert.fr',
        to: ['devis@lmespacevert.fr'],
        subject: `[Site] Demande de ${parsed.data.sujet} – CP ${parsed.data.codePostal}`,
        text: `
Nouveau message depuis le site lmespacevert.fr

De : ${parsed.data.prenom} ${parsed.data.nom}
Email : ${parsed.data.email}
Téléphone : ${parsed.data.telephone ?? 'Non renseigné'}
Code postal : ${parsed.data.codePostal}
Sujet : ${parsed.data.sujet}
Newsletter : ${parsed.data.newsletter ? 'Oui' : 'Non'}
${extraLines ? `\n${extraLines}` : ''}

Message :
${parsed.data.message}
        `.trim(),
      })
    } catch (err) {
      console.error('Resend error:', err)
      return Response.json({ error: 'Erreur lors de l\'envoi de l\'email.' }, { status: 500 })
    }
  } else {
    // Dev mode: log to console
    console.info('[Contact form]', { ...parsed.data, projectType, commune })
  }

  return Response.json({ ok: true })
}
