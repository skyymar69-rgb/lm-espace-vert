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
      <div className="container mx-auto max-w-7xl px-10 sm:px-16 flex items-center justify-center gap-3">
        <span className="text-white/85 leading-relaxed">{message}</span>
        {href && cta && (
          <Link
            href={href}
            className="shrink-0 rounded-full px-3.5 py-0.5 text-[11px] font-bold text-white tracking-wide transition-all hover:bg-white/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#80BC00]"
            style={{ backgroundColor: 'rgba(128,188,0,0.30)', border: '1px solid rgba(128,188,0,0.50)' }}
          >
            {cta} →
          </Link>
        )}
      </div>
      <button
        onClick={dismiss}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50 hover:text-white/90 transition-colors duration-150 p-1.5 rounded-full hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#80BC00]"
        aria-label="Fermer l'annonce"
      >
        <X size={13} aria-hidden="true" />
      </button>
    </div>
  )
}
