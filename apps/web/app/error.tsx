'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Home, RefreshCw } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="relative min-h-[calc(100vh-144px)] flex items-center justify-center overflow-hidden">
      {/* Photo de fond */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/realisations/lm-29.webp"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
          aria-hidden="true"
        />
        {/* Overlay — teinte rouge-brun subtile pour signaler l'erreur sans agressivité */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, rgba(11,61,44,0.86) 0%, rgba(47,25,10,0.75) 50%, rgba(11,61,44,0.90) 100%)',
          }}
          aria-hidden="true"
        />
      </div>

      {/* Contenu centré */}
      <div className="relative z-10 w-full max-w-xl mx-auto px-6 py-20 text-center">
        {/* Icône d'alerte premium */}
        <div
          className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6"
          style={{
            background: 'rgba(228,4,32,0.18)',
            border: '1.5px solid rgba(228,4,32,0.45)',
          }}
          aria-hidden="true"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E40420" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
            <line x1="12" y1="9" x2="12" y2="13"/>
            <line x1="12" y1="17" x2="12.01" y2="17"/>
          </svg>
        </div>

        {/* Eyebrow */}
        <p
          className="text-xs font-bold uppercase tracking-widest mb-4"
          style={{ color: '#80BC00' }}
        >
          Erreur 500
        </p>

        {/* Titre */}
        <h1
          className="font-display text-4xl sm:text-5xl font-bold mb-5 leading-tight"
          style={{ color: '#FFFFFF', letterSpacing: '-0.03em' }}
        >
          Une erreur est survenue
        </h1>

        {/* Message */}
        <p
          className="text-base sm:text-lg mb-3 leading-relaxed"
          style={{ color: 'rgba(247,245,240,0.88)' }}
        >
          Quelque chose ne s&apos;est pas passé comme prévu. Vous pouvez
          réessayer ou revenir à l&apos;accueil — nos équipes sont déjà
          informées.
        </p>

        {/* Séparateur décoratif */}
        <div className="flex items-center justify-center gap-3 my-8" aria-hidden="true">
          <div style={{ flex: 1, height: 1, background: 'rgba(128,188,0,0.4)' }} />
          <span style={{ color: '#80BC00', fontSize: '1.1rem' }}>&#9632;</span>
          <div style={{ flex: 1, height: 1, background: 'rgba(128,188,0,0.4)' }} />
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-bold transition-all hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#80BC00]"
            style={{
              backgroundColor: '#80BC00',
              color: '#ffffff',
              boxShadow: '0 0 28px rgba(128,188,0,0.40), 0 4px 12px rgba(0,0,0,0.18)',
            }}
          >
            <RefreshCw size={15} aria-hidden="true" />
            Réessayer
          </button>

          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-all hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#80BC00]"
            style={{
              border: '1.5px solid rgba(255,255,255,0.55)',
              color: '#FFFFFF',
              backdropFilter: 'blur(8px)',
              backgroundColor: 'rgba(255,255,255,0.10)',
            }}
          >
            <Home size={15} aria-hidden="true" />
            Retour à l&apos;accueil
          </Link>
        </div>
      </div>
    </div>
  )
}
