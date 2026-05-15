'use client'

import { useState } from 'react'
import { ArrowRight, Loader2, CheckCircle } from 'lucide-react'
import Link from 'next/link'

interface NewsletterSignupProps {
  variant?: 'compact' | 'full'
}

export function NewsletterSignup({ variant = 'compact' }: NewsletterSignupProps) {
  const [email, setEmail] = useState('')
  const [optIn, setOptIn] = useState(false)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !optIn) {
      setErrorMsg('Merci de cocher la case de consentement.')
      return
    }
    setErrorMsg('')
    setStatus('loading')
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (res.ok) {
        setStatus('success')
      } else {
        setStatus('error')
        setErrorMsg('Une erreur est survenue. Réessayez.')
      }
    } catch {
      setStatus('error')
      setErrorMsg('Une erreur est survenue. Réessayez.')
    }
  }

  if (status === 'success') {
    return (
      <div
        className="rounded-xl p-4 flex items-center gap-3"
        style={{ backgroundColor: 'rgba(128,188,0,0.1)' }}
      >
        <CheckCircle size={20} style={{ color: '#80BC00' }} />
        <div>
          <p className="text-sm font-semibold" style={{ color: '#425D07' }}>
            Parfait ! Vérifiez votre boîte mail.
          </p>
          <p className="text-xs mt-0.5" style={{ color: '#8C8F94' }}>
            Vous recevrez nos conseils jardinage chaque mois.
          </p>
        </div>
      </div>
    )
  }

  if (variant === 'full') {
    return (
      <div
        className="rounded-2xl border p-6"
        style={{ backgroundColor: '#F7F5F0', borderColor: '#EDEDED' }}
      >
        <h3 className="font-display text-xl font-bold mb-1" style={{ color: '#0B3D2C' }}>
          Conseils jardinage &amp; offres saisonnières
        </h3>
        <p className="text-sm mb-5" style={{ color: '#8C8F94' }}>
          1 email/mois, désabonnement facile à tout moment.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="votre@email.fr"
            required
            className="w-full rounded-xl border px-4 py-3 text-sm outline-none bg-white"
            style={{ borderColor: '#EDEDED', color: '#2F2F2F' }}
          />

          <label className="flex items-start gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={optIn}
              onChange={(e) => setOptIn(e.target.checked)}
              className="mt-0.5 h-4 w-4 flex-shrink-0 rounded"
              style={{ accentColor: '#80BC00' }}
            />
            <span className="text-xs" style={{ color: '#8C8F94' }}>
              J&apos;accepte de recevoir les conseils et offres de LM Espace Vert. Voir nos{' '}
              <Link href="/cgv" className="underline hover:no-underline" style={{ color: '#425D07' }}>
                CGV
              </Link>
              .
            </span>
          </label>

          {errorMsg && (
            <p className="text-xs text-red-500">{errorMsg}</p>
          )}

          <button
            type="submit"
            disabled={status === 'loading'}
            className="flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-opacity hover:opacity-90 disabled:opacity-70"
            style={{ backgroundColor: '#80BC00', color: '#ffffff' }}
          >
            {status === 'loading' ? (
              <Loader2 size={16} className="animate-spin" />
            ) : (
              <>Je m&apos;abonne gratuitement <ArrowRight size={14} /></>
            )}
          </button>
        </form>
      </div>
    )
  }

  // Variant compact
  return (
    <div
      className="rounded-xl border p-4"
      style={{ backgroundColor: '#F7F5F0', borderColor: '#EDEDED' }}
    >
      <p className="text-sm font-semibold mb-3" style={{ color: '#0B3D2C' }}>
        Conseils jardinage gratuits chaque mois
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <div className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="votre@email.fr"
            required
            className="flex-1 min-w-0 rounded-lg border px-3 py-2 text-sm outline-none bg-white"
            style={{ borderColor: '#EDEDED', color: '#2F2F2F' }}
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="flex-shrink-0 flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-semibold transition-opacity hover:opacity-90 disabled:opacity-70"
            style={{ backgroundColor: '#80BC00', color: '#ffffff' }}
          >
            {status === 'loading' ? (
              <Loader2 size={14} className="animate-spin" />
            ) : (
              <ArrowRight size={14} />
            )}
          </button>
        </div>

        <label className="flex items-start gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={optIn}
            onChange={(e) => setOptIn(e.target.checked)}
            className="mt-0.5 h-3.5 w-3.5 flex-shrink-0"
            style={{ accentColor: '#80BC00' }}
          />
          <span className="text-[11px]" style={{ color: '#8C8F94' }}>
            Consentement RGPD —{' '}
            <Link href="/cgv" className="underline hover:no-underline" style={{ color: '#425D07' }}>
              CGV
            </Link>
          </span>
        </label>

        {errorMsg && (
          <p className="text-[11px] text-red-500">{errorMsg}</p>
        )}
      </form>
    </div>
  )
}
