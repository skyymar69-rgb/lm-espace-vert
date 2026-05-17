'use client'

import { useState } from 'react'
import Link from 'next/link'
import { X } from 'lucide-react'

type Props = {
  message: string
  href?: string
  cta?: string
  dismissKey?: string
}

export function AnnouncementBanner({ message, href, cta, dismissKey = 'banner-v1' }: Props) {
  const [dismissed, setDismissed] = useState(() => {
    if (typeof window === 'undefined') return false
    return localStorage.getItem(dismissKey) === '1'
  })

  const dismiss = () => {
    localStorage.setItem(dismissKey, '1')
    setDismissed(true)
  }

  if (dismissed) return null

  return (
    <div className="announcement-banner" role="banner" aria-live="polite">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 flex items-center justify-center gap-3">
        <span className="text-white/90">{message}</span>
        {href && cta && (
          <Link
            href={href}
            className="shrink-0 rounded-full bg-white/20 hover:bg-white/30 px-3 py-0.5 text-xs font-bold text-white transition-colors"
          >
            {cta} →
          </Link>
        )}
      </div>
      <button
        onClick={dismiss}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-1"
        aria-label="Fermer l'annonce"
      >
        <X size={14} aria-hidden="true" />
      </button>
    </div>
  )
}
