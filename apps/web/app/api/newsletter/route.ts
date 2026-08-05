import { NextRequest } from 'next/server'
import { CONTACT_TO, readRequestBody, sendMail } from '@/lib/email'

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>
  try {
    body = await readRequestBody(req)
  } catch {
    return Response.json({ error: 'Requête illisible.' }, { status: 400 })
  }

  const email = typeof body['email'] === 'string' ? body['email'].trim() : ''
  const source = typeof body['source'] === 'string' ? body['source'].trim() : 'newsletter'

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: 'Email invalide.' }, { status: 400 })
  }

  const text = [
    'Nouvelle inscription depuis le site lm-espace-vert.fr',
    '',
    `Email : ${email}`,
    `Origine : ${source}`,
  ].join('\n')

  const result = await sendMail({
    subject: `[Site] Nouvelle inscription newsletter – ${email}`,
    text,
    replyTo: email,
  })

  if (!result.ok) {
    if (result.reason === 'not-configured') {
      if (process.env.NODE_ENV === 'production') {
        console.error('[Newsletter] RESEND_API_KEY manquante en production — email non envoyé.')
        return Response.json({ error: 'Service momentanément indisponible.' }, { status: 500 })
      }
      console.info(`[Newsletter — DEV, aucun email envoyé vers ${CONTACT_TO}]\n${text}`)
      return Response.json({ ok: true, dev: true })
    }

    return Response.json({ error: 'Erreur serveur.' }, { status: 500 })
  }

  return Response.json({ ok: true })
}
