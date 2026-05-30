'use client'

import { useState } from 'react'
import { Loader2, CheckCircle, Mail } from 'lucide-react'
import Link from 'next/link'

interface NewsletterSignupProps {
  variant?: 'compact' | 'full'
}

const focusStyle = {
  onFocus: (e: React.FocusEvent<HTMLInputElement>) => {
    e.currentTarget.style.borderColor = '#749A30'
    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(116,154,48,0.15)'
    e.currentTarget.style.outline = 'none'
  },
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => {
    e.currentTarget.style.borderColor = '#EDEDED'
    e.currentTarget.style.boxShadow = 'none'
  },
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
        style={{ backgroundColor: 'rgba(116,154,48,0.1)' }}
        role="status"
        aria-live="polite"
      >
        <CheckCircle size={20} style={{ color: '#749A30' }} aria-hidden="true" />
        <div>
          <p className="text-sm font-semibold inline-flex items-center gap-1.5" style={{ color: '#4A6320' }}>
            <Mail size={15} aria-hidden="true" /> Parfait ! Vérifiez votre boîte mail.
          </p>
          <p className="text-xs mt-0.5" style={{ color: '#5C606B' }}>
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
        style={{ backgroundColor: '#F4F1E9', borderColor: '#EDEDED' }}
      >
        <h3 className="font-display text-xl font-bold mb-1" style={{ color: '#243238' }}>
          Conseils jardinage &amp; offres saisonnières
        </h3>
        <p className="text-sm mb-5" style={{ color: '#5C606B' }}>
          1 email/mois, désabonnement facile à tout moment.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="votre@email.fr"
            required
            className="w-full rounded-xl border px-4 py-3 text-sm bg-white transition-all"
            style={{ borderColor: '#EDEDED', color: '#2F2F2F', outline: 'none' }}
            {...focusStyle}
          />

          <label className="flex items-start gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={optIn}
              onChange={(e) => setOptIn(e.target.checked)}
              className="mt-0.5 h-4 w-4 flex-shrink-0 rounded focus-visible:ring-2"
              style={{ accentColor: '#749A30' }}
            />
            <span className="text-xs" style={{ color: '#5C606B' }}>
              J&apos;accepte de recevoir les conseils et offres de LM Espace Vert. Voir nos{' '}
              <Link href="/cgv" className="underline hover:no-underline" style={{ color: '#4A6320' }}>
                CGV
              </Link>
              .
            </span>
          </label>

          <div aria-live="polite" aria-atomic="true">
            {errorMsg && (
              <p className="text-xs text-red-500" role="alert">{errorMsg}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition-colors hover:bg-[#7E3A37] disabled:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#9E4B47]"
            style={{ backgroundColor: '#9E4B47', color: '#ffffff', boxShadow: '0 4px 14px rgba(158,75,71,0.3)' }}
          >
            {status === 'loading' ? (
              <Loader2 size={16} className="animate-spin" />
            ) : (
              <><Mail size={15} aria-hidden="true" /> Je m&apos;abonne gratuitement</>
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
      style={{ backgroundColor: '#F4F1E9', borderColor: '#EDEDED' }}
    >
      <p className="text-sm font-semibold mb-3" style={{ color: '#243238' }}>
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
            className="flex-1 min-w-0 rounded-lg border px-3 py-2 text-sm bg-white transition-all"
            style={{ borderColor: '#EDEDED', color: '#2F2F2F', outline: 'none' }}
            {...focusStyle}
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="flex-shrink-0 flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-bold transition-colors hover:bg-[#7E3A37] disabled:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#9E4B47]"
            style={{ backgroundColor: '#9E4B47', color: '#ffffff' }}
            aria-label="S'abonner à la newsletter"
          >
            {status === 'loading' ? (
              <Loader2 size={14} className="animate-spin" />
            ) : (
              <Mail size={14} aria-hidden="true" />
            )}
          </button>
        </div>

        <label className="flex items-start gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={optIn}
            onChange={(e) => setOptIn(e.target.checked)}
            className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 focus-visible:ring-2"
            style={{ accentColor: '#749A30' }}
          />
          <span className="text-[11px]" style={{ color: '#5C606B' }}>
            Consentement RGPD —{' '}
            <Link href="/cgv" className="underline hover:no-underline" style={{ color: '#4A6320' }}>
              CGV
            </Link>
          </span>
        </label>

        <div aria-live="polite" aria-atomic="true">
          {errorMsg && (
            <p className="text-[11px] text-red-500" role="alert">{errorMsg}</p>
          )}
        </div>
      </form>
    </div>
  )
}
