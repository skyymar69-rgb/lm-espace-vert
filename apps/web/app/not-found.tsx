import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Home, ArrowRight, ImageIcon } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Page introuvable (404) — LM Espace Vert',
  robots: { index: false },
}

export default function NotFound() {
  return (
    <div className="relative min-h-[calc(100vh-144px)] flex items-center justify-center overflow-hidden">
      {/* Photo de fond */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/realisations/lm-18.webp"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
          aria-hidden="true"
        />
        {/* Overlay dégradé premium — conserve la lisibilité du texte */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, rgba(36,50,56,0.82) 0%, rgba(74,99,32,0.72) 50%, rgba(36,50,56,0.88) 100%)',
          }}
          aria-hidden="true"
        />
      </div>

      {/* Contenu centré */}
      <div className="relative z-10 w-full max-w-2xl mx-auto px-6 py-20 text-center">
        {/* Eyebrow */}
        <p
          className="text-xs font-bold uppercase tracking-widest mb-4"
          style={{ color: '#749A30' }}
        >
          Erreur 404
        </p>

        {/* Titre */}
        <h1
          className="font-display text-4xl sm:text-5xl font-bold mb-5 leading-tight"
          style={{ color: '#FFFFFF', letterSpacing: '-0.03em' }}
        >
          Cette page s&apos;est&nbsp;égarée&hellip;
        </h1>

        {/* Sous-titre */}
        <p
          className="text-base sm:text-lg mb-3 leading-relaxed"
          style={{ color: 'rgba(247,245,240,0.88)' }}
        >
          Peut-être a-t-elle été taillée de travers, ou emportée comme une
          feuille morte. Pas d&apos;inquiétude&nbsp;: voici de quoi retrouver
          votre chemin.
        </p>

        {/* Séparateur décoratif */}
        <div className="flex items-center justify-center gap-3 my-8" aria-hidden="true">
          <div style={{ flex: 1, height: 1, background: 'rgba(116,154,48,0.4)' }} />
          <span style={{ color: '#749A30', fontSize: '1.1rem' }}>&#9632;</span>
          <div style={{ flex: 1, height: 1, background: 'rgba(116,154,48,0.4)' }} />
        </div>

        {/* CTAs principaux */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-bold transition-all hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#749A30]"
            style={{
              backgroundColor: '#749A30',
              color: '#ffffff',
              boxShadow: '0 0 28px rgba(116,154,48,0.40), 0 4px 12px rgba(0,0,0,0.18)',
            }}
          >
            <Home size={15} aria-hidden="true" />
            Retour à l&apos;accueil
          </Link>

          <Link
            href="/realisations"
            className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-all hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#749A30]"
            style={{
              border: '1.5px solid rgba(255,255,255,0.55)',
              color: '#FFFFFF',
              backdropFilter: 'blur(8px)',
              backgroundColor: 'rgba(255,255,255,0.10)',
            }}
          >
            <ImageIcon size={15} aria-hidden="true" />
            Voir nos réalisations
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-all hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#749A30]"
            style={{
              border: '1.5px solid rgba(255,255,255,0.55)',
              color: '#FFFFFF',
              backdropFilter: 'blur(8px)',
              backgroundColor: 'rgba(255,255,255,0.10)',
            }}
          >
            Nous contacter <ArrowRight size={14} aria-hidden="true" />
          </Link>
        </div>

        {/* WhatsApp */}
        <div
          className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold"
          style={{
            background: 'rgba(37,211,102,0.15)',
            border: '1px solid rgba(37,211,102,0.40)',
            color: '#FFFFFF',
          }}
        >
          <a
            href="https://wa.me/33672587353"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#25D366] rounded"
            style={{ color: '#FFFFFF' }}
            aria-label="Contacter LM Espace Vert sur WhatsApp"
          >
            💬 Besoin d&apos;aide&nbsp;? WhatsApp — Réponse rapide
          </a>
        </div>
      </div>
    </div>
  )
}
