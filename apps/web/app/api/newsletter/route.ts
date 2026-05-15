import { NextRequest } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const email = typeof body?.email === 'string' ? body.email.trim() : ''

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json({ error: 'Email invalide.' }, { status: 400 })
    }

    // En production : connecter à Brevo / Mailchimp / Resend audience
    console.info('[Newsletter] Nouvelle inscription :', email)

    return Response.json({ ok: true })
  } catch {
    return Response.json({ error: 'Erreur serveur.' }, { status: 500 })
  }
}
