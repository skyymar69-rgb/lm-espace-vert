'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect, useCallback } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { realisationsPhotos, beforeAfterPairs, catLabel } from '@/lib/realisations-photos'

type Realisation = {
  title: string
  category: string
  image: string
  year: string
  beforeAfter?: { before: string; after: string }
}

// Photos déjà utilisées dans les paires avant/après — exclues des vignettes simples (zéro doublon).
const pairSrcs = new Set(beforeAfterPairs.flatMap((p) => [p.avant, p.apres]))

const beforeAfterCats: Record<string, string> = {
  'Engazonnement': 'Engazonnement',
  'Plantation & massifs': 'Plantation',
}

const years = ['2025', '2024', '2023']

const realisations: Realisation[] = [
  // Transformations avant / après (mises en avant)
  ...beforeAfterPairs.map((p) => ({
    title: `${p.title} — ${p.ville}`,
    category: beforeAfterCats[p.tag] ?? 'Création',
    image: p.apres,
    year: '2025',
    beforeAfter: { before: p.avant, after: p.apres },
  })),
  // Réalisations individuelles
  ...realisationsPhotos
    .filter((p) => !pairSrcs.has(p.src))
    .map((p, i) => ({
      title: `${p.title} — ${p.ville}`,
      category: catLabel[p.cat],
      image: p.src,
      year: years[i % years.length],
    })),
]

const categories = ['Tout', 'Création', 'Maçonnerie', 'Engazonnement', 'Plantation', 'Élagage', 'Entretien']

export function RealisationsGallery() {
  const [activeCategory, setActiveCategory] = useState('Tout')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const [lightboxVisible, setLightboxVisible] = useState(false)

  const filtered =
    activeCategory === 'Tout'
      ? realisations
      : realisations.filter((r) => r.category === activeCategory)

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    // trigger opacity animation on next tick
    requestAnimationFrame(() => setLightboxVisible(true))
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = useCallback(() => {
    setLightboxVisible(false)
    setTimeout(() => {
      setLightboxIndex(null)
      document.body.style.overflow = ''
    }, 200)
  }, [])

  const goPrev = useCallback(() => {
    if (lightboxIndex === null) return
    setLightboxIndex((prev) => (prev === null ? null : (prev - 1 + filtered.length) % filtered.length))
  }, [lightboxIndex, filtered.length])

  const goNext = useCallback(() => {
    if (lightboxIndex === null) return
    setLightboxIndex((prev) => (prev === null ? null : (prev + 1) % filtered.length))
  }, [lightboxIndex, filtered.length])

  // Keyboard navigation
  useEffect(() => {
    if (lightboxIndex === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft') goPrev()
      if (e.key === 'ArrowRight') goNext()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [lightboxIndex, closeLightbox, goPrev, goNext])

  const currentItem = lightboxIndex !== null ? filtered[lightboxIndex] : null

  return (
    <>
      {/* Filters */}
      <div
        className="sticky top-[73px] z-10"
        style={{
          backgroundColor: 'rgba(255,255,255,0.95)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(0,0,0,0.07)',
          boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
        }}
      >
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div
            className="flex gap-2 overflow-x-auto py-4 scrollbar-none"
            role="tablist"
            aria-label="Filtrer par catégorie"
          >
            {categories.map((cat) => {
              const isActive = activeCategory === cat
              return (
                <button
                  key={cat}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(cat)}
                  className="flex-shrink-0 rounded-full text-sm font-semibold transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#80BC00]"
                  style={{
                    padding: '0.4375rem 1.125rem',
                    border: isActive ? '1.5px solid #80BC00' : '1.5px solid #E0E0E0',
                    backgroundColor: isActive ? '#80BC00' : 'transparent',
                    color: isActive ? '#0B3D2C' : '#5C606B',
                    boxShadow: isActive ? '0 2px 12px rgba(128,188,0,0.30)' : 'none',
                    letterSpacing: '0.01em',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {cat}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Gallery */}
      <section style={{ backgroundColor: '#F7F5F0', padding: '4rem 0 5rem' }}>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <ul
            role="list"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            style={{ gap: '1.5rem' }}
          >
            {filtered.map((r, index) => (
              <li key={r.title}>
                <article
                  className="group"
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '1.25rem',
                    overflow: 'hidden',
                    boxShadow: '0 2px 20px rgba(11,61,44,0.07)',
                    transition: 'box-shadow 0.3s ease, transform 0.3s ease',
                    border: '1px solid rgba(11,61,44,0.05)',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement
                    el.style.boxShadow = '0 10px 48px rgba(11,61,44,0.14)'
                    el.style.transform = 'translateY(-3px)'
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement
                    el.style.boxShadow = '0 2px 20px rgba(11,61,44,0.07)'
                    el.style.transform = 'translateY(0)'
                  }}
                >
                  {r.beforeAfter ? (
                    /* Before / After layout */
                    <button
                      type="button"
                      className="relative overflow-hidden flex w-full text-left cursor-zoom-in"
                      style={{ height: '14rem' }}
                      onClick={() => openLightbox(index)}
                      aria-label={`Agrandir — ${r.title}`}
                    >
                      <div className="relative flex-1 overflow-hidden">
                        <Image
                          src={r.beforeAfter.before}
                          alt={`Avant — ${r.title}`}
                          fill
                          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 17vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute bottom-2.5 left-2.5">
                          <span
                            className="text-xs font-bold px-2.5 py-1 rounded-full"
                            style={{
                              backgroundColor: 'rgba(0,0,0,0.65)',
                              backdropFilter: 'blur(4px)',
                              WebkitBackdropFilter: 'blur(4px)',
                              color: 'rgba(255,255,255,0.9)',
                              letterSpacing: '0.03em',
                            }}
                          >
                            Avant
                          </span>
                        </div>
                      </div>
                      {/* Séparateur central */}
                      <div
                        className="z-10 self-stretch"
                        style={{ width: '2px', backgroundColor: 'rgba(255,255,255,0.7)', boxShadow: '0 0 8px rgba(0,0,0,0.3)' }}
                      />
                      <div className="relative flex-1 overflow-hidden">
                        <Image
                          src={r.beforeAfter.after}
                          alt={`Après — ${r.title}`}
                          fill
                          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 17vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute bottom-2.5 right-2.5">
                          <span
                            className="text-xs font-bold px-2.5 py-1 rounded-full"
                            style={{
                              backgroundColor: 'rgba(128,188,0,0.90)',
                              backdropFilter: 'blur(4px)',
                              WebkitBackdropFilter: 'blur(4px)',
                              color: '#ffffff',
                              letterSpacing: '0.03em',
                            }}
                          >
                            Après
                          </span>
                        </div>
                      </div>
                      {/* Overlay hover */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-350"
                        style={{ background: 'linear-gradient(160deg, rgba(11,61,44,0.12) 0%, rgba(11,61,44,0.72) 100%)' }}
                        aria-hidden="true"
                      />
                      {/* Badge catégorie */}
                      <div className="absolute top-3 left-3">
                        <span
                          style={{
                            display: 'inline-block',
                            backgroundColor: 'rgba(11,61,44,0.80)',
                            backdropFilter: 'blur(6px)',
                            WebkitBackdropFilter: 'blur(6px)',
                            color: '#80BC00',
                            fontSize: '0.625rem',
                            fontWeight: 700,
                            padding: '0.22rem 0.6rem',
                            borderRadius: '9999px',
                            textTransform: 'uppercase',
                            letterSpacing: '0.06em',
                            border: '1px solid rgba(128,188,0,0.25)',
                          }}
                        >
                          {r.category}
                        </span>
                      </div>
                      {/* Titre hover */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        <p className="text-white font-semibold text-sm leading-snug" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>{r.title}</p>
                        <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.65)' }}>{r.year}</p>
                      </div>
                    </button>
                  ) : (
                    /* Standard single-image layout */
                    <button
                      type="button"
                      className="relative overflow-hidden w-full cursor-zoom-in"
                      style={{ height: '14rem' }}
                      onClick={() => openLightbox(index)}
                      aria-label={`Agrandir — ${r.title}`}
                    >
                      <Image
                        src={r.image}
                        alt={r.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-107"
                        loading="lazy"
                      />
                      {/* Overlay hover */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-350"
                        style={{ background: 'linear-gradient(160deg, rgba(11,61,44,0.18) 0%, rgba(11,61,44,0.82) 100%)' }}
                        aria-hidden="true"
                      />
                      {/* Badge catégorie */}
                      <div className="absolute top-3 left-3">
                        <span
                          style={{
                            display: 'inline-block',
                            backgroundColor: 'rgba(11,61,44,0.80)',
                            backdropFilter: 'blur(6px)',
                            WebkitBackdropFilter: 'blur(6px)',
                            color: '#80BC00',
                            fontSize: '0.625rem',
                            fontWeight: 700,
                            padding: '0.22rem 0.6rem',
                            borderRadius: '9999px',
                            textTransform: 'uppercase',
                            letterSpacing: '0.06em',
                            border: '1px solid rgba(128,188,0,0.25)',
                          }}
                        >
                          {r.category}
                        </span>
                      </div>
                      {/* Titre hover */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        <p className="text-white font-semibold text-sm leading-snug" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>{r.title}</p>
                        <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.65)' }}>{r.year}</p>
                      </div>
                    </button>
                  )}
                  {/* Footer carte */}
                  <div style={{ padding: '1rem 1.25rem 1.25rem' }}>
                    <h2
                      className="font-display"
                      style={{
                        fontWeight: 700,
                        color: '#2F2F2F',
                        fontSize: '0.875rem',
                        lineHeight: 1.4,
                        transition: 'color 0.2s ease',
                      }}
                    >
                      {r.title}
                    </h2>
                    <div
                      style={{
                        marginTop: '0.625rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}
                    >
                      <span
                        style={{
                          display: 'inline-block',
                          backgroundColor: 'rgba(128,188,0,0.10)',
                          color: '#425D07',
                          fontSize: '0.6875rem',
                          fontWeight: 600,
                          padding: '0.2rem 0.65rem',
                          borderRadius: '9999px',
                          border: '1px solid rgba(66,93,7,0.15)',
                          letterSpacing: '0.02em',
                        }}
                      >
                        {r.category}
                      </span>
                      <span
                        style={{
                          fontSize: '0.75rem',
                          color: '#8C8F94',
                          fontWeight: 500,
                        }}
                      >
                        {r.year}
                      </span>
                    </div>
                    <Link
                      href="/devis"
                      style={{
                        marginTop: '0.875rem',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.375rem',
                        borderRadius: '9999px',
                        padding: '0.4rem 0.875rem',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        textDecoration: 'none',
                        backgroundColor: '#80BC00',
                        color: '#0B3D2C',
                        transition: 'opacity 0.2s ease, box-shadow 0.2s ease',
                        boxShadow: '0 2px 10px rgba(128,188,0,0.25)',
                        letterSpacing: '0.01em',
                      }}
                    >
                      Demander un projet similaire →
                    </Link>
                  </div>
                </article>
              </li>
            ))}
          </ul>

          {filtered.length === 0 && (
            <p style={{ textAlign: 'center', color: '#8C8F94', padding: '4rem 0' }}>
              Aucune réalisation dans cette catégorie pour le moment.
            </p>
          )}
        </div>
      </section>

      {/* ── LIGHTBOX ── */}
      {lightboxIndex !== null && currentItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Image agrandie — ${currentItem.title}`}
          className="fixed inset-0 z-[9000] flex items-center justify-center"
          style={{
            backgroundColor: 'rgba(5,20,14,0.92)',
            backdropFilter: 'blur(18px)',
            WebkitBackdropFilter: 'blur(18px)',
            opacity: lightboxVisible ? 1 : 0,
            transition: 'opacity 0.25s ease',
          }}
          onClick={closeLightbox}
        >
          {/* Bouton fermer */}
          <button
            type="button"
            onClick={closeLightbox}
            aria-label="Fermer la lightbox"
            className="absolute top-5 right-5 z-10 w-11 h-11 rounded-full flex items-center justify-center text-white transition-colors"
            style={{
              backgroundColor: 'rgba(255,255,255,0.12)',
              border: '1px solid rgba(255,255,255,0.18)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
            }}
          >
            <X size={18} aria-hidden="true" />
          </button>

          {/* Navigation précédent */}
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); goPrev() }}
            aria-label="Image précédente"
            className="absolute left-5 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full flex items-center justify-center text-white transition-all"
            style={{
              backgroundColor: 'rgba(255,255,255,0.10)',
              border: '1px solid rgba(255,255,255,0.18)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
            }}
          >
            <ChevronLeft size={26} aria-hidden="true" />
          </button>

          {/* Navigation suivant */}
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); goNext() }}
            aria-label="Image suivante"
            className="absolute right-5 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full flex items-center justify-center text-white transition-all"
            style={{
              backgroundColor: 'rgba(255,255,255,0.10)',
              border: '1px solid rgba(255,255,255,0.18)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
            }}
          >
            <ChevronRight size={26} aria-hidden="true" />
          </button>

          {/* Contenu centré */}
          <div
            className="relative flex flex-col items-center gap-5 px-16"
            onClick={(e) => e.stopPropagation()}
          >
            {currentItem.beforeAfter ? (
              /* Avant/après côte à côte en lightbox */
              <div
                style={{
                  display: 'flex',
                  gap: '3px',
                  borderRadius: '1rem',
                  overflow: 'hidden',
                  maxHeight: '80vh',
                  maxWidth: '90vw',
                  boxShadow: '0 24px 64px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.06)',
                }}
              >
                <div className="relative flex-1" style={{ minWidth: 0 }}>
                  <div className="relative" style={{ width: '40vw', maxWidth: '500px', aspectRatio: '4/3' }}>
                    <Image
                      src={currentItem.beforeAfter.before}
                      alt={`Avant — ${currentItem.title}`}
                      fill
                      sizes="40vw"
                      className="object-cover"
                      priority
                    />
                    <span
                      className="absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-full"
                      style={{
                        backgroundColor: 'rgba(0,0,0,0.65)',
                        backdropFilter: 'blur(4px)',
                        WebkitBackdropFilter: 'blur(4px)',
                        color: 'rgba(255,255,255,0.9)',
                        letterSpacing: '0.03em',
                      }}
                    >
                      Avant
                    </span>
                  </div>
                </div>
                <div className="relative flex-1" style={{ minWidth: 0 }}>
                  <div className="relative" style={{ width: '40vw', maxWidth: '500px', aspectRatio: '4/3' }}>
                    <Image
                      src={currentItem.beforeAfter.after}
                      alt={`Après — ${currentItem.title}`}
                      fill
                      sizes="40vw"
                      className="object-cover"
                      priority
                    />
                    <span
                      className="absolute top-3 right-3 text-xs font-bold px-3 py-1 rounded-full"
                      style={{
                        backgroundColor: 'rgba(128,188,0,0.90)',
                        backdropFilter: 'blur(4px)',
                        WebkitBackdropFilter: 'blur(4px)',
                        color: '#ffffff',
                        letterSpacing: '0.03em',
                      }}
                    >
                      Après
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              /* Image simple */
              <div
                style={{
                  position: 'relative',
                  borderRadius: '1rem',
                  overflow: 'hidden',
                  maxHeight: '80vh',
                  maxWidth: '90vw',
                  width: 'min(900px, 90vw)',
                  aspectRatio: '16/10',
                  boxShadow: '0 24px 64px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.06)',
                }}
              >
                <Image
                  src={currentItem.image}
                  alt={currentItem.title}
                  fill
                  sizes="min(900px, 90vw)"
                  className="object-contain"
                  priority
                />
              </div>
            )}

            {/* Légende */}
            <div
              style={{
                textAlign: 'center',
                backgroundColor: 'rgba(255,255,255,0.05)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '0.75rem',
                padding: '0.75rem 1.5rem',
                minWidth: '260px',
              }}
            >
              <p
                style={{
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '1rem',
                  lineHeight: 1.3,
                  marginBottom: '0.3rem',
                  letterSpacing: '0.01em',
                }}
              >
                {currentItem.title}
              </p>
              <p
                style={{
                  fontSize: '0.8125rem',
                  color: 'rgba(255,255,255,0.5)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                }}
              >
                <span style={{ color: '#80BC00', fontWeight: 600 }}>{currentItem.category}</span>
                <span style={{ color: 'rgba(255,255,255,0.25)' }}>·</span>
                <span>{currentItem.year}</span>
              </p>
              {filtered.length > 1 && (
                <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.7rem', marginTop: '0.4rem', letterSpacing: '0.02em' }}>
                  {(lightboxIndex ?? 0) + 1} / {filtered.length} — Utilisez ← → pour naviguer
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
