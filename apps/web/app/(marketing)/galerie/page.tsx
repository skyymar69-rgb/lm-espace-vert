import type { Metadata } from 'next'
import Link from 'next/link'
import { Camera, ArrowRight } from 'lucide-react'
import { GalerieClient } from './gallery-client'

export const metadata: Metadata = {
  title: 'Galerie Photos — Réalisations LM Espace Vert Lyon',
  description:
    "Parcourez la galerie photo de LM Espace Vert : jardins créés, entretien d'espaces verts, élagage, maçonnerie paysagère et transformations avant/après dans le nord-ouest lyonnais. 42 photos de réalisations authentiques.",
  alternates: { canonical: 'https://www.lmespacevert.fr/galerie' },
  openGraph: {
    title: 'Galerie Photos — Réalisations LM Espace Vert Lyon',
    description:
      "Découvrez en images les réalisations de votre paysagiste : création de jardins, entretien, élagage et maçonnerie paysagère autour de Lyon.",
    url: 'https://www.lmespacevert.fr/galerie',
    type: 'website',
    images: [
      {
        url: 'https://www.lmespacevert.fr/images/realisations/lm-09.webp',
        width: 1200,
        height: 630,
        alt: 'Galerie réalisations paysagiste LM Espace Vert Lyon',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Galerie Photos — Réalisations LM Espace Vert Lyon',
    description: 'Jardins, terrasses et aménagements paysagers dans le nord-ouest lyonnais.',
    images: ['https://www.lmespacevert.fr/images/realisations/lm-09.webp'],
  },
}

export default function GaleriePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        style={{
          background: 'linear-gradient(135deg, #243238 0%, #2E4138 60%, #4A6320 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
        className="py-24 lg:py-32"
        aria-label="Galerie photos LM Espace Vert"
      >
        {/* Background glow */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'radial-gradient(circle at 20% 50%, rgba(116,154,48,0.12) 0%, transparent 60%), radial-gradient(circle at 80% 20%, rgba(116,154,48,0.08) 0%, transparent 50%)',
            pointerEvents: 'none',
          }}
          aria-hidden="true"
        />
        <div className="relative container mx-auto max-w-7xl px-4 sm:px-6 text-center">
          {/* Breadcrumb */}
          <nav aria-label="Fil d'Ariane" style={{ marginBottom: '1.5rem' }}>
            <ol
              role="list"
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.75rem',
                color: 'rgba(255,255,255,0.5)',
                listStyle: 'none',
                padding: 0,
                margin: 0,
              }}
            >
              <li>
                <Link href="/" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>
                  Accueil
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <span aria-current="page" style={{ color: '#749A30' }}>
                  Galerie
                </span>
              </li>
            </ol>
          </nav>

          {/* Eyebrow */}
          <p
            style={{
              color: '#9E4B47',
              fontSize: '0.7rem',
              fontWeight: 700,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
            }}
          >
            <span
              style={{
                display: 'inline-block',
                width: '2rem',
                height: '1px',
                backgroundColor: '#9E4B47',
              }}
            />
            Paysagiste Lyon — Nord-Ouest
            <span
              style={{
                display: 'inline-block',
                width: '2rem',
                height: '1px',
                backgroundColor: '#9E4B47',
              }}
            />
          </p>

          {/* Title */}
          <h1
            className="font-display"
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              fontWeight: 800,
              color: '#ffffff',
              lineHeight: 1.1,
              marginBottom: '1.25rem',
              textShadow: '0 2px 20px rgba(0,0,0,0.3)',
            }}
          >
            Galerie Photos —
            <br />
            <span style={{ color: '#749A30' }}>Nos Réalisations</span>
          </h1>

          <p
            style={{
              color: 'rgba(255,255,255,0.80)',
              fontSize: '1.0625rem',
              maxWidth: '38rem',
              margin: '0 auto 2rem',
              lineHeight: 1.6,
            }}
          >
            Créations de jardins, entretien, élagage, maçonnerie paysagère et transformations
            avant/après — toutes nos réalisations dans le nord-ouest lyonnais.
          </p>

          {/* Badges */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '0.75rem',
              flexWrap: 'wrap',
            }}
          >
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: 'rgba(116,154,48,0.15)',
                border: '1px solid rgba(116,154,48,0.4)',
                borderRadius: '9999px',
                padding: '0.5rem 1.25rem',
                color: '#749A30',
                fontSize: '0.875rem',
                fontWeight: 700,
              }}
            >
              <Camera size={15} aria-hidden="true" />
                          42 photos
            </span>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: '9999px',
                padding: '0.5rem 1.25rem',
                color: 'rgba(255,255,255,0.8)',
                fontSize: '0.875rem',
                fontWeight: 600,
              }}
            >
              200+ projets depuis 2019
            </span>
            <Link
              href="/devis"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: '#9E4B47',
                borderRadius: '9999px',
                padding: '0.5rem 1.25rem',
                color: '#ffffff',
                fontSize: '0.875rem',
                fontWeight: 700,
                textDecoration: 'none',
              }}
            >
              Devis gratuit <ArrowRight size={13} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── GALERIE INTERACTIVE (client) ── */}
      <GalerieClient />
    </>
  )
}
