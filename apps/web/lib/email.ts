/**
 * Envoi d'emails transactionnels (Resend).
 *
 * Toutes les demandes du site (contact, devis, newsletter, popup) arrivent
 * dans la boîte définie par CONTACT_TO — par défaut lmespacevert069@gmail.com.
 */

/** Destinataire de toutes les notifications du site. */
export const CONTACT_TO = process.env['CONTACT_TO'] ?? 'lmespacevert069@gmail.com'

/**
 * Expéditeur. `onboarding@resend.dev` fonctionne sans configuration DNS mais
 * n'autorise l'envoi que vers l'adresse du compte Resend. Une fois le domaine
 * lm-espace-vert.fr vérifié dans Resend, mettre :
 * CONTACT_FROM="LM Espace Vert <contact@lm-espace-vert.fr>"
 */
export const CONTACT_FROM = process.env['CONTACT_FROM'] ?? 'LM Espace Vert <onboarding@resend.dev>'

export type SendMailResult =
  | { ok: true }
  | { ok: false; reason: 'not-configured' | 'provider-error'; detail?: string }

/**
 * Envoie un email. Ne lève jamais : renvoie toujours un résultat exploitable
 * par la route appelante.
 */
export async function sendMail(options: {
  subject: string
  text: string
  replyTo?: string | undefined
}): Promise<SendMailResult> {
  const apiKey = process.env['RESEND_API_KEY']

  if (!apiKey) {
    return { ok: false, reason: 'not-configured' }
  }

  try {
    const { Resend } = await import('resend')
    const resend = new Resend(apiKey)

    const { error } = await resend.emails.send({
      from: CONTACT_FROM,
      to: [CONTACT_TO],
      ...(options.replyTo ? { replyTo: options.replyTo } : {}),
      subject: options.subject,
      text: options.text,
    })

    if (error) {
      console.error('[email] Resend a refusé l’envoi :', error)
      return { ok: false, reason: 'provider-error', detail: error.message }
    }

    return { ok: true }
  } catch (err) {
    console.error('[email] Échec de l’appel à Resend :', err)
    return {
      ok: false,
      reason: 'provider-error',
      detail: err instanceof Error ? err.message : String(err),
    }
  }
}

/**
 * Lit le corps d'une requête quel que soit son format : JSON,
 * multipart/form-data ou application/x-www-form-urlencoded.
 *
 * Les formulaires du site n'utilisent pas tous le même encodage ; cette
 * fonction évite qu'une requête JSON ne fasse planter `req.formData()`.
 */
export async function readRequestBody(req: Request): Promise<Record<string, unknown>> {
  const contentType = req.headers.get('content-type') ?? ''

  if (contentType.includes('application/json')) {
    const json: unknown = await req.json()
    return json && typeof json === 'object' ? (json as Record<string, unknown>) : {}
  }

  const formData = await req.formData()
  return Object.fromEntries(formData)
}
