'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { X, Sprout } from 'lucide-react'

const STORAGE_KEY = 'lm-seasonal-banner-dismissed'

export function SeasonalCtaBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      const dismissed = localStorage.getItem(STORAGE_KEY)
      if (!dismissed) setVisible(true)
    } catch {
      setVisible(true)
    }
  }, [])

  function dismiss() {
    setVisible(false)
    try {
      localStorage.setItem(STORAGE_KEY, '1')
    } catch {
      // ignore
    }
  }

  if (!visible) return null

  return (
    <div
      role="banner"
      aria-label="Offre saisonnière printemps 2026"
      className="relative flex items-center justify-center gap-3 px-4 py-2.5 text-sm font-medium text-white animate-fade-in"
      style={{ backgroundColor: '#243238' }}
    >
      <Link
        href="/devis"
        className="flex items-center gap-2 hover:underline underline-offset-2"
        style={{ color: '#ffffff' }}
      >
        <Sprout size={15} aria-hidden="true" style={{ color: '#749A30', flexShrink: 0 }} />
        <span>
          <strong>Printemps 2026</strong> — Offre création jardin : -10% sur tous les devis acceptés avant le 30 juin
        </span>
        <span
          className="ml-1 hidden rounded-full px-2.5 py-0.5 text-xs font-bold sm:inline-block"
          style={{ backgroundColor: '#749A30', color: '#ffffff' }}
        >
          En savoir plus →
        </span>
      </Link>

      <button
        onClick={dismiss}
        aria-label="Fermer l'annonce saisonnière"
        className="absolute right-3 top-1/2 -translate-y-1/2 flex h-6 w-6 items-center justify-center rounded-full transition-colors hover:bg-white/20"
      >
        <X size={13} aria-hidden="true" />
      </button>
    </div>
  )
}
