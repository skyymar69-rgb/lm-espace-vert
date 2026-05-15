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
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md p-8"
        style={{
          animation: 'exitPopupIn 0.3s ease-out forwards',
        }}
      >
        <style>{`
          @keyframes exitPopupIn {
            from { opacity: 0; transform: translateY(-20px); }
            to   { opacity: 1; transform: translateY(0); }
          }
        `}</style>

        {/* Bouton fermeture */}
        <button
          onClick={close}
          className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Fermer"
        >
          <X size={18} style={{ color: '#8C8F94' }} />
        </button>

        {/* Badge */}
        <span
          className="inline-block rounded-full px-3 py-1 text-xs font-semibold mb-4"
          style={{ backgroundColor: 'rgba(128,188,0,0.12)', color: '#425D07' }}
        >
          Offre exclusive
        </span>

        {/* Titre */}
        <h2 id="exit-popup-title" className="font-display text-2xl font-bold mb-2" style={{ color: '#0B3D2C' }}>
          Avant de partir...
        </h2>
        <p className="text-sm mb-6 leading-relaxed" style={{ color: '#8C8F94' }}>
          Obtenez votre <strong style={{ color: '#2F2F2F' }}>estimation gratuite en 30 secondes</strong>. Entrez votre email et nous vous envoyons une fourchette de prix personnalisée.
        </p>

        {status === 'success' ? (
          <div
            className="rounded-xl p-4 text-center"
            style={{ backgroundColor: 'rgba(128,188,0,0.1)', color: '#425D07' }}
          >
            <p className="font-semibold text-sm">Parfait ! Vérifiez votre boîte mail.</p>
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
              className="w-full rounded-xl border px-4 py-3 text-sm outline-none focus:ring-2"
              style={{
                borderColor: '#EDEDED',
                color: '#2F2F2F',
                // @ts-expect-error CSS custom property
                '--tw-ring-color': '#80BC00',
              }}
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-opacity hover:opacity-90 disabled:opacity-70"
              style={{ backgroundColor: '#80BC00', color: '#ffffff' }}
            >
              {status === 'loading' ? (
                <Loader2 size={16} className="animate-spin" />
              ) : (
                <>Recevoir mon estimation <ArrowRight size={14} /></>
              )}
            </button>
            {status === 'error' && (
              <p className="text-xs text-red-500 text-center">Une erreur est survenue. Réessayez.</p>
            )}
          </form>
        )}

        {/* Lien Non merci */}
        <button
          onClick={close}
          className="block w-full text-center text-xs mt-4 hover:underline"
          style={{ color: '#8C8F94' }}
        >
          Non merci, je quitte sans mon estimation
        </button>
      </div>
    </div>
  )
}
