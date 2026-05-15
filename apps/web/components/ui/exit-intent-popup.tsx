'use client'

import { useState, useEffect, useCallback } from 'react'
import { X, ArrowRight, Loader2 } from 'lucide-react'

export function ExitIntentPopup() {
  const [visible, setVisible] = useState(false)
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const openPopup = useCallback(() => {
    if (typeof window === 'undefined') return
    const shown = sessionStorage.getItem('exit_popup_shown')
    if (shown) return
    sessionStorage.setItem('exit_popup_shown', '1')
    setVisible(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        openPopup()
      }
    }

    document.addEventListener('mouseleave', handleMouseLeave)
    return () => document.removeEventListener('mouseleave', handleMouseLeave)
  }, [mounted, openPopup])

  useEffect(() => {
    if (!visible) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [visible])

  const close = () => setVisible(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'exit_popup' }),
      })
      if (res.ok) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (!visible) return null

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}
      onClick={(e) => { if (e.target === e.currentTarget) close() }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="exit-popup-title"
    >
      <div
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden"
        style={{
          animation: 'exitPopupIn 0.35s cubic-bezier(0.34,1.56,0.64,1) forwards',
        }}
      >
        <style>{`
          @keyframes exitPopupIn {
            from { opacity: 0; transform: translateY(-24px) scale(0.97); }
            to   { opacity: 1; transform: translateY(0) scale(1); }
          }
        `}</style>

        {/* Gradient header */}
        <div
          className="relative px-8 pt-8 pb-6"
          style={{ background: 'linear-gradient(135deg, #0B3D2C 0%, #1a5c3a 60%, #425D07 100%)' }}
        >
          {/* Decorative circle */}
          <div
            className="absolute -top-8 -right-8 w-32 h-32 rounded-full opacity-20 pointer-events-none"
            style={{ background: 'radial-gradient(circle, #80BC00, transparent)' }}
            aria-hidden="true"
          />

          {/* Bouton fermeture */}
          <button
            onClick={close}
            className="absolute top-4 right-4 p-1.5 rounded-full transition-colors"
            style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#ffffff' }}
            aria-label="Fermer"
          >
            <X size={16} />
          </button>

          {/* Badge */}
          <span
            className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold mb-3"
            style={{ backgroundColor: 'rgba(128,188,0,0.25)', color: '#80BC00' }}
          >
            🌿 Offre exclusive
          </span>

          {/* Titre */}
          <h2 id="exit-popup-title" className="font-display text-2xl font-bold text-white mb-1">
            Avant de partir...
          </h2>
          <p className="text-sm" style={{ color: 'rgba(255,255,255,0.75)' }}>
            Estimation gratuite en 30 secondes
          </p>
        </div>

        {/* Body */}
        <div className="px-8 py-6">
          <p className="text-sm mb-5 leading-relaxed" style={{ color: '#8C8F94' }}>
            Entrez votre email et nous vous envoyons une <strong style={{ color: '#2F2F2F' }}>fourchette de prix personnalisée</strong> pour votre projet.
          </p>

          <div aria-live="polite" aria-atomic="true">
            {status === 'success' ? (
              <div
                className="rounded-xl p-4 text-center"
                style={{ backgroundColor: 'rgba(128,188,0,0.1)', color: '#425D07' }}
              >
                <p className="font-semibold text-sm">✅ Parfait ! Vérifiez votre boîte mail.</p>
                <p className="text-xs mt-1" style={{ color: '#8C8F94' }}>Vous recevrez votre estimation sous peu.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="votre@email.fr"
                  required
                  className="w-full rounded-xl border px-4 py-3 text-sm outline-none transition-all"
                  style={{
                    borderColor: '#EDEDED',
                    color: '#2F2F2F',
                  }}
                  onFocus={(e) => { e.currentTarget.style.borderColor = '#80BC00'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(128,188,0,0.15)' }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = '#EDEDED'; e.currentTarget.style.boxShadow = 'none' }}
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-bold transition-all duration-200 hover:scale-[1.02] hover:shadow-md disabled:opacity-70"
                  style={{ backgroundColor: '#80BC00', color: '#ffffff', boxShadow: '0 4px 14px rgba(128,188,0,0.35)' }}
                >
                  {status === 'loading' ? (
                    <Loader2 size={16} className="animate-spin" />
                  ) : (
                    <>Recevoir mon estimation <ArrowRight size={14} /></>
                  )}
                </button>
                {status === 'error' && (
                  <p className="text-xs text-red-500 text-center" role="alert">Une erreur est survenue. Réessayez.</p>
                )}
              </form>
            )}
          </div>

          {/* Lien Non merci */}
          <button
            onClick={close}
            className="block w-full text-center text-xs mt-4 hover:underline transition-colors"
            style={{ color: '#8C8F94' }}
          >
            Non merci, je quitte sans mon estimation
          </button>
        </div>
      </div>
    </div>
  )
}
