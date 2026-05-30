'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect, useCallback, useRef } from 'react'
import { X, ChevronLeft, ChevronRight, ArrowRight, FileText, MapPin } from 'lucide-react'
import { realisationsPhotos, photoCategories, catLabel } from '@/lib/realisations-photos'

const categories = photoCategories
const photos = realisationsPhotos

export const photoCount = photos.length

export function GalerieClient() {
  const [activeCat, setActiveCat] = useState('tout')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const [lightboxVisible, setLightboxVisible] = useState(false)

  // Focus management — WCAG 2.4.3
  const triggerRef = useRef<HTMLElement | null>(null)
  const closeButtonRef = useRef<HTMLButtonElement | null>(null)
  const dialogRef = useRef<HTMLDivElement | null>(null)

  const filtered =
    activeCat === 'tout'
      ? photos
      : photos.filter((p) => p.cat === activeCat)

  const openLightbox = (index: number) => {
    // Memorise the element that triggered the lightbox so we can restore focus on close
    triggerRef.current = document.activeElement as HTMLElement
    setLightboxIndex(index)
    requestAnimationFrame(() => {
      setLightboxVisible(true)
      // Move focus into the dialog (close button) after the next paint
      requestAnimationFrame(() => closeButtonRef.current?.focus())
    })
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = useCallback(() => {
    setLightboxVisible(false)
    setTimeout(() => {
      setLightboxIndex(null)
      document.body.style.overflow = ''
      // Restore focus to the element that opened the lightbox — WCAG 2.4.3
      triggerRef.current?.focus()
      triggerRef.current = null
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

  useEffect(() => {
    if (lightboxIndex === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { closeLightbox(); return }
      if (e.key === 'ArrowLeft') { goPrev(); return }
      if (e.key === 'ArrowRight') { goNext(); return }

      // Focus trap — confine Tab/Shift+Tab to focusable elements inside the dialog
      if (e.key === 'Tab' && dialogRef.current) {
        const focusable = Array.from(
          dialogRef.current.querySelectorAll<HTMLElement>(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          )
        ).filter((el) => !el.hasAttribute('disabled') && el.tabIndex !== -1)

        if (focusable.length === 0) { e.preventDefault(); return }

        const first = focusable[0]
        const last = focusable[focusable.length - 1]

        if (e.shiftKey) {
          // Shift+Tab: if focus is on first, wrap to last
          if (document.activeElement === first) {
            e.preventDefault()
            last.focus()
          }
        } else {
          // Tab: if focus is on last, wrap to first
          if (document.activeElement === last) {
            e.preventDefault()
            first.focus()
          }
        }
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [lightboxIndex, closeLightbox, goPrev, goNext])

  const currentPhoto = lightboxIndex !== null ? filtered[lightboxIndex] : null

  return (
    <>
      {/* ── FILTRES ── */}
      <div
        style={{
          backgroundColor: 'rgba(255,255,255,0.95)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(0,0,0,0.07)',
          position: 'sticky',
          top: '72px',
          zIndex: 10,
          boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
        }}
      >
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div
            style={{
              display: 'flex',
              gap: '0.5rem',
              overflowX: 'auto',
              padding: '1rem 0',
              scrollbarWidth: 'none',
            }}
            role="tablist"
            aria-label="Filtrer la galerie par catégorie"
          >
            {categories.map((cat) => {
              const isActive = activeCat === cat.id
              const count = cat.id === 'tout' ? photos.length : photos.filter((p) => p.cat === cat.id).length
              return (
                <button
                  key={cat.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCat(cat.id)}
                  style={{
                    flexShrink: 0,
                    borderRadius: '9999px',
                    padding: '0.4375rem 1.125rem',
                    fontSize: '0.8125rem',
                    fontWeight: 600,
                    border: isActive ? '1.5px solid #749A30' : '1.5px solid #E0E0E0',
                    backgroundColor: isActive ? '#749A30' : 'transparent',
                    color: isActive ? '#243238' : '#5C606B',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    whiteSpace: 'nowrap',
                    outline: 'none',
                    letterSpacing: '0.01em',
                    boxShadow: isActive ? '0 2px 12px rgba(116,154,48,0.30)' : 'none',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      (e.currentTarget as HTMLButtonElement).style.borderColor = '#749A30'
                      ;(e.currentTarget as HTMLButtonElement).style.color = '#4A6320'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      (e.currentTarget as HTMLButtonElement).style.borderColor = '#E0E0E0'
                      ;(e.currentTarget as HTMLButtonElement).style.color = '#5C606B'
                    }
                  }}
                >
                  {cat.label}
                  <span
                    style={{
                      marginLeft: '0.375rem',
                      fontSize: '0.7rem',
                      opacity: isActive ? 0.7 : 0.45,
                      fontWeight: 500,
                    }}
                  >
                    ({count})
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* ── GRILLE PHOTOS ── */}
      <section
        style={{ backgroundColor: '#F4F1E9', padding: '3rem 0 5rem' }}
        aria-label={`Galerie — ${categories.find((c) => c.id === activeCat)?.label}`}
      >
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          {/* Compteur résultats */}
          <p
            style={{
              color: '#8C8F94',
              fontSize: '0.8125rem',
              marginBottom: '1.5rem',
              fontWeight: 500,
            }}
          >
            {filtered.length} photo{filtered.length > 1 ? 's' : ''}{' '}
            {activeCat !== 'tout'
              ? `— ${categories.find((c) => c.id === activeCat)?.label}`
              : '— toutes catégories'}
          </p>

          {filtered.length === 0 ? (
            <p style={{ textAlign: 'center', color: '#8C8F94', padding: '4rem 0' }}>
              Aucune photo dans cette catégorie.
            </p>
          ) : (
            <ul
              role="list"
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
              style={{
                gap: '1rem',
                listStyle: 'none',
                padding: 0,
                margin: 0,
              }}
            >
              {filtered.map((photo, index) => {
                const isPortrait = photo.orient === 'portrait'
                return (
                  <li
                    key={`${photo.src}-${index}`}
                    style={isPortrait ? { gridRow: 'span 2' } : undefined}
                  >
                    <button
                      type="button"
                      onClick={() => openLightbox(index)}
                      aria-label={`Agrandir — ${photo.title}, ${photo.ville}`}
                      className="group"
                      style={{
                        display: 'block',
                        width: '100%',
                        height: '100%',
                        minHeight: isPortrait ? '360px' : '180px',
                        position: 'relative',
                        overflow: 'hidden',
                        borderRadius: '1rem',
                        cursor: 'zoom-in',
                        border: 'none',
                        padding: 0,
                        backgroundColor: '#E8EDE8',
                        boxShadow: '0 2px 16px rgba(36,50,56,0.08)',
                        transition: 'box-shadow 0.3s ease, transform 0.3s ease',
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 8px 40px rgba(36,50,56,0.18)'
                        ;(e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px)'
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 2px 16px rgba(36,50,56,0.08)'
                        ;(e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)'
                      }}
                    >
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.07]"
                        loading="lazy"
                        quality={80}
                      />
                      {/* Overlay hover — dégradé deux tons */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                        style={{
                          background: 'linear-gradient(160deg, rgba(36,50,56,0.18) 0%, rgba(36,50,56,0.78) 65%, rgba(74,99,32,0.92) 100%)',
                        }}
                        aria-hidden="true"
                      />
                      {/* Infos hover */}
                      <div
                        className="absolute bottom-0 left-0 right-0 p-3 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-350"
                      >
                        <p
                          style={{
                            color: '#ffffff',
                            fontWeight: 700,
                            fontSize: '0.8125rem',
                            lineHeight: 1.35,
                            textShadow: '0 1px 6px rgba(0,0,0,0.45)',
                            letterSpacing: '0.01em',
                          }}
                        >
                          {photo.title}
                        </p>
                        <p
                          style={{
                            color: 'rgba(255,255,255,0.72)',
                            fontSize: '0.6875rem',
                            marginTop: '0.25rem',
                            fontWeight: 500,
                            letterSpacing: '0.02em',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.25rem',
                          }}
                        >
                          <MapPin size={10} aria-hidden="true" /> {photo.ville}
                        </p>
                        <span
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.25rem',
                            marginTop: '0.45rem',
                            fontSize: '0.6rem',
                            fontWeight: 700,
                            color: '#749A30',
                            letterSpacing: '0.06em',
                            textTransform: 'uppercase',
                          }}
                          aria-hidden="true"
                        >
                          <FileText size={10} /> Devis similaire
                        </span>
                      </div>
                      {/* Badge catégorie */}
                      <div className="absolute top-2.5 left-2.5">
                        <span
                          style={{
                            display: 'inline-block',
                            backgroundColor: 'rgba(36,50,56,0.78)',
                            backdropFilter: 'blur(6px)',
                            WebkitBackdropFilter: 'blur(6px)',
                            color: '#749A30',
                            fontSize: '0.625rem',
                            fontWeight: 700,
                            padding: '0.2rem 0.55rem',
                            borderRadius: '9999px',
                            textTransform: 'uppercase',
                            letterSpacing: '0.06em',
                            border: '1px solid rgba(116,154,48,0.22)',
                          }}
                        >
                          {catLabel[photo.cat]}
                        </span>
                      </div>
                    </button>
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      </section>

      {/* ── CTA BAS DE PAGE ── */}
      <section
        style={{
          background: 'linear-gradient(135deg, #243238 0%, #4A6320 100%)',
          borderTop: '4px solid #749A30',
          padding: '5rem 0',
        }}
        aria-label="Appel à l'action galerie"
      >
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 text-center">
          <p
            style={{
              color: '#9E4B47',
              fontSize: '0.7rem',
              fontWeight: 700,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginBottom: '1rem',
            }}
          >
            Passez à l&apos;action
          </p>
          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 800,
              color: '#ffffff',
              lineHeight: 1.2,
              marginBottom: '1rem',
            }}
          >
            Votre projet sera notre prochaine réalisation
          </h2>
          <p
            style={{
              color: 'rgba(255,255,255,0.75)',
              fontSize: '1.0625rem',
              marginBottom: '2.5rem',
              maxWidth: '32rem',
              marginLeft: 'auto',
              marginRight: 'auto',
              lineHeight: 1.6,
            }}
          >
            Devis gratuit et sans engagement — réponse sous 24h. Nous intervenons dans un rayon de 20 km autour de Saint-Didier-au-Mont-d&apos;Or.
          </p>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '0.75rem',
            }}
          >
            <Link
              href="/devis"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: '#9E4B47',
                color: '#ffffff',
                borderRadius: '9999px',
                padding: '0.875rem 1.75rem',
                fontSize: '0.9375rem',
                fontWeight: 700,
                textDecoration: 'none',
                boxShadow: '0 0 30px rgba(158,75,71,0.35)',
              }}
            >
              Demander mon devis gratuit <ArrowRight size={15} aria-hidden="true" />
            </Link>
            <Link
              href="/realisations"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                border: '1px solid rgba(255,255,255,0.3)',
                color: '#ffffff',
                borderRadius: '9999px',
                padding: '0.875rem 1.5rem',
                fontSize: '0.9375rem',
                fontWeight: 600,
                textDecoration: 'none',
              }}
            >
              Voir toutes nos réalisations <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── LIGHTBOX ── */}
      {lightboxIndex !== null && currentPhoto && (
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label={`Lightbox — ${currentPhoto.title}`}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(5,20,14,0.92)',
            backdropFilter: 'blur(18px)',
            WebkitBackdropFilter: 'blur(18px)',
            opacity: lightboxVisible ? 1 : 0,
            transition: 'opacity 0.25s ease',
          }}
          onClick={closeLightbox}
        >
          {/* Fermer */}
          <button
            ref={closeButtonRef}
            type="button"
            onClick={closeLightbox}
            aria-label="Fermer la lightbox"
            style={{
              position: 'absolute',
              top: '1.25rem',
              right: '1.25rem',
              zIndex: 10,
              width: '2.75rem',
              height: '2.75rem',
              borderRadius: '9999px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              backgroundColor: 'rgba(255,255,255,0.12)',
              border: '1px solid rgba(255,255,255,0.18)',
              cursor: 'pointer',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              transition: 'background-color 0.2s ease',
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'rgba(255,255,255,0.22)' }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'rgba(255,255,255,0.12)' }}
          >
            <X size={18} aria-hidden="true" />
          </button>

          {/* Précédent */}
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); goPrev() }}
            aria-label="Photo précédente"
            style={{
              position: 'absolute',
              left: '1.25rem',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
              width: '3rem',
              height: '3rem',
              borderRadius: '9999px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              backgroundColor: 'rgba(255,255,255,0.10)',
              border: '1px solid rgba(255,255,255,0.18)',
              cursor: 'pointer',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              transition: 'background-color 0.2s ease, transform 0.2s ease',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLButtonElement
              el.style.backgroundColor = 'rgba(116,154,48,0.22)'
              el.style.borderColor = 'rgba(116,154,48,0.5)'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLButtonElement
              el.style.backgroundColor = 'rgba(255,255,255,0.10)'
              el.style.borderColor = 'rgba(255,255,255,0.18)'
            }}
          >
            <ChevronLeft size={24} aria-hidden="true" />
          </button>

          {/* Suivant */}
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); goNext() }}
            aria-label="Photo suivante"
            style={{
              position: 'absolute',
              right: '1.25rem',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
              width: '3rem',
              height: '3rem',
              borderRadius: '9999px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              backgroundColor: 'rgba(255,255,255,0.10)',
              border: '1px solid rgba(255,255,255,0.18)',
              cursor: 'pointer',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              transition: 'background-color 0.2s ease, border-color 0.2s ease',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLButtonElement
              el.style.backgroundColor = 'rgba(116,154,48,0.22)'
              el.style.borderColor = 'rgba(116,154,48,0.5)'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLButtonElement
              el.style.backgroundColor = 'rgba(255,255,255,0.10)'
              el.style.borderColor = 'rgba(255,255,255,0.18)'
            }}
          >
            <ChevronRight size={24} aria-hidden="true" />
          </button>

          {/* Contenu */}
          <div
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem', padding: '0 4.5rem', maxWidth: '100vw' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              style={{
                position: 'relative',
                borderRadius: '1rem',
                overflow: 'hidden',
                maxHeight: '80vh',
                maxWidth: '90vw',
                width: 'min(860px, 88vw)',
                aspectRatio: '4 / 3',
                boxShadow: '0 24px 64px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.06)',
              }}
            >
              <Image
                src={currentPhoto.src}
                alt={currentPhoto.alt}
                fill
                sizes="min(860px, 88vw)"
                className="object-contain"
                priority
              />
            </div>

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
                minWidth: '280px',
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
                {currentPhoto.title}
              </p>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8125rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}><MapPin size={12} aria-hidden="true" /> {currentPhoto.ville}</span>
                <span style={{ color: 'rgba(255,255,255,0.25)' }}>·</span>
                <span style={{ color: '#749A30', fontWeight: 600 }}>
                  {categories.find((c) => c.id === currentPhoto.cat)?.label}
                </span>
              </p>
              {filtered.length > 1 && (
                <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.7rem', marginTop: '0.4rem', letterSpacing: '0.02em' }}>
                  {(lightboxIndex ?? 0) + 1} / {filtered.length} — ← → pour naviguer · Échap pour fermer
                </p>
              )}
              {/* CTA lightbox */}
              <div style={{ marginTop: '0.875rem' }}>
                <Link
                  href="/devis"
                  onClick={closeLightbox}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    backgroundColor: '#9E4B47',
                    color: '#ffffff',
                    borderRadius: '9999px',
                    padding: '0.5rem 1.125rem',
                    fontSize: '0.8125rem',
                    fontWeight: 700,
                    textDecoration: 'none',
                    boxShadow: '0 4px 18px rgba(158,75,71,0.35)',
                    letterSpacing: '0.01em',
                    transition: 'opacity 0.2s ease',
                  }}
                >
                  <FileText size={14} aria-hidden="true" />
                  Demander un projet similaire
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
