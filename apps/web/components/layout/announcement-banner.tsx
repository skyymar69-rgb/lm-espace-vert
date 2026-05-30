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
    <div className="announcement-banner" role="region" aria-label="Annonce" aria-live="polite">
      <div className="container mx-auto max-w-7xl px-10 sm:px-16 flex items-center justify-center gap-3">
        <span className="text-white/85 leading-relaxed">{message}</span>
        {href && cta && (
          <Link
            href={href}
            className="shrink-0 rounded-full px-3.5 py-1 text-[11px] font-bold text-white tracking-wide min-h-[44px] inline-flex items-center transition-all hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            style={{ backgroundColor: '#9E4B47', boxShadow: '0 1px 8px rgba(158,75,71,0.45)' }}
          >
            {cta} →
          </Link>
        )}
      </div>
      <button
        onClick={dismiss}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50 hover:text-white/90 transition-colors duration-150 p-1.5 rounded-full hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#749A30]"
        aria-label="Fermer l'annonce"
      >
        <X size={13} aria-hidden="true" />
      </button>
    </div>
  )
}
