'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect, useCallback } from 'react'
import { X, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'

type Photo = {
  src: string
  titre: string
  cat: string
  ville: string
}

const categories = [
  { id: 'tout', label: 'Toutes nos réalisations' },
  { id: 'creation', label: 'Création de jardins' },
  { id: 'entretien', label: 'Entretien' },
  { id: 'elagage', label: 'Élagage' },
  { id: 'maconnerie', label: 'Maçonnerie paysagère' },
  { id: 'arrosage', label: 'Arrosage' },
  { id: 'avant-apres', label: 'Avant / Après' },
]

const photos: Photo[] = [
  // Réalisations
  { src: '/images/realisation-1.webp', titre: 'Création jardin complet', cat: 'creation', ville: "Saint-Didier-au-Mont-d'Or" },
  { src: '/images/realisation-3.webp', titre: 'Aménagement terrasse et jardin', cat: 'maconnerie', ville: 'Caluire-et-Cuire' },
  { src: '/images/realisation-4.webp', titre: 'Jardin paysager résidentiel', cat: 'creation', ville: 'Limonest' },
  { src: '/images/realisation-5.webp', titre: 'Terrasse et espace de vie', cat: 'maconnerie', ville: 'Limonest' },
  { src: '/images/realisation-6.webp', titre: 'Création espaces extérieurs', cat: 'creation', ville: 'Limonest' },
  { src: '/images/realisation-7.webp', titre: 'Conception jardin sur mesure', cat: 'creation', ville: 'Limonest' },
  { src: '/images/realisation-9.webp', titre: 'Aménagement cour et jardin', cat: 'creation', ville: 'Caluire-et-Cuire' },
  { src: '/images/realisation-10.webp', titre: 'Terrasse moderne et jardin', cat: 'maconnerie', ville: 'Écully' },
  // Services / Prestations
  { src: '/images/entretien-espaces-verts.webp', titre: 'Entretien espaces verts', cat: 'entretien', ville: "Saint-Didier-au-Mont-d'Or" },
  { src: '/images/taille-haies-1.webp', titre: 'Taille de haies professionnelle', cat: 'entretien', ville: 'Limonest' },
  { src: '/images/elagage-abattage.webp', titre: 'Élagage raisonné', cat: 'elagage', ville: "Saint-Didier-au-Mont-d'Or" },
  { src: '/images/arrosage-automatique.webp', titre: 'Pose arrosage automatique', cat: 'arrosage', ville: "Saint-Didier-au-Mont-d'Or" },
  { src: '/images/travaux-paysagers.webp', titre: 'Aménagement paysager', cat: 'creation', ville: 'Tassin-la-Demi-Lune' },
  { src: '/images/vente-vegetaux.webp', titre: 'Plantation et végétalisation', cat: 'creation', ville: 'Dardilly' },
  // Avant / Après
  { src: '/images/avant1.webp', titre: 'Avant — Transformation jardin', cat: 'avant-apres', ville: "Saint-Didier-au-Mont-d'Or" },
  { src: '/images/apres1.webp', titre: 'Après — Jardin transformé', cat: 'avant-apres', ville: "Saint-Didier-au-Mont-d'Or" },
  { src: '/images/avant2.webp', titre: 'Avant — Aménagement extérieur', cat: 'avant-apres', ville: 'Limonest' },
  { src: '/images/apres2.webp', titre: 'Après — Aménagement réalisé', cat: 'avant-apres', ville: 'Limonest' },
  // Blog / contexte
  { src: '/images/blog-creation-jardin.webp', titre: 'Création jardin contemporain', cat: 'creation', ville: 'Écully' },
  { src: '/images/blog-allee-jardin.webp', titre: 'Allée jardin en pierre', cat: 'maconnerie', ville: 'Charbonnières-les-Bains' },
  { src: '/images/blog-massif-fleurs.webp', titre: 'Massif de fleurs coloré', cat: 'creation', ville: 'Francheville' },
  { src: '/images/blog-haie-verte.webp', titre: 'Entretien haie verte', cat: 'entretien', ville: 'Craponne' },
  { src: '/images/blog-pelouse.webp', titre: 'Pelouse verdoyante', cat: 'entretien', ville: "Collonges-au-Mont-d'Or" },
  { src: '/images/blog-gazon-rouleau.webp', titre: 'Engazonnement en rouleaux', cat: 'creation', ville: 'Neuville-sur-Saône' },
  { src: '/images/blog-taille-haies.webp', titre: 'Taille haies et arbustes', cat: 'entretien', ville: 'Tassin-la-Demi-Lune' },
  { src: '/images/blog-arrosage-jardin.webp', titre: 'Système arrosage intelligent', cat: 'arrosage', ville: 'Dardilly' },
  { src: '/images/blog-elagage-arbre.webp', titre: 'Élagage arbre remarquable', cat: 'elagage', ville: 'Limonest' },
  { src: '/images/blog-jardin-sec.webp', titre: 'Jardin sec méditerranéen', cat: 'creation', ville: 'Écully' },
  { src: '/images/blog-rosiers.webp', titre: 'Plantation rosiers et vivaces', cat: 'creation', ville: "Saint-Didier-au-Mont-d'Or" },
  { src: '/images/blog-jardin-printemps.webp', titre: 'Jardin au printemps', cat: 'creation', ville: 'Francheville' },
  { src: '/images/blog-automne.webp', titre: 'Entretien jardin automne', cat: 'entretien', ville: 'Caluire-et-Cuire' },
  { src: '/images/blog-compostage.webp', titre: 'Compostage et éco-jardinage', cat: 'entretien', ville: "Saint-Didier-au-Mont-d'Or" },
  { src: '/images/presentation.webp', titre: "Présentation de l'équipe", cat: 'creation', ville: "Saint-Didier-au-Mont-d'Or" },
  { src: '/images/illusra1.webp', titre: 'Aménagement paysager soigné', cat: 'creation', ville: "Saint-Didier-au-Mont-d'Or" },
]

export const photoCount = photos.length

export function GalerieClient() {
  const [activeCat, setActiveCat] = useState('tout')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const [lightboxVisible, setLightboxVisible] = useState(false)

  const filtered =
    activeCat === 'tout'
      ? photos
      : photos.filter((p) => p.cat === activeCat)

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
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

  const currentPhoto = lightboxIndex !== null ? filtered[lightboxIndex] : null

  return (
    <>
      {/* ── FILTRES ── */}
      <div
        style={{
          backgroundColor: '#ffffff',
          borderBottom: '1px solid #EDEDED',
          position: 'sticky',
          top: '72px',
          zIndex: 10,
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
                    padding: '0.5rem 1.125rem',
                    fontSize: '0.8125rem',
                    fontWeight: 600,
                    border: isActive ? 'none' : '1px solid #D8D8D8',
                    backgroundColor: isActive ? '#80BC00' : 'transparent',
                    color: isActive ? '#0B3D2C' : '#5C606B',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                    whiteSpace: 'nowrap',
                    outline: 'none',
                  }}
                >
                  {cat.label}
                  <span
                    style={{
                      marginLeft: '0.375rem',
                      fontSize: '0.7rem',
                      opacity: isActive ? 0.65 : 0.45,
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
        style={{ backgroundColor: '#F7F5F0', padding: '3rem 0 5rem' }}
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
                gap: '0.75rem',
                listStyle: 'none',
                padding: 0,
                margin: 0,
              }}
            >
              {filtered.map((photo, index) => (
                <li key={`${photo.src}-${index}`}>
                  <button
                    type="button"
                    onClick={() => openLightbox(index)}
                    aria-label={`Agrandir — ${photo.titre}, ${photo.ville}`}
                    className="group"
                    style={{
                      display: 'block',
                      width: '100%',
                      position: 'relative',
                      aspectRatio: '1 / 1',
                      overflow: 'hidden',
                      borderRadius: '0.75rem',
                      cursor: 'zoom-in',
                      border: 'none',
                      padding: 0,
                      backgroundColor: '#EDEDED',
                    }}
                  >
                    <Image
                      src={photo.src}
                      alt={`${photo.titre} — ${photo.ville}`}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                      quality={80}
                    />
                    {/* Overlay hover */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: 'linear-gradient(to top, rgba(11,61,44,0.92) 0%, rgba(11,61,44,0.4) 55%, transparent 100%)',
                      }}
                      aria-hidden="true"
                    />
                    {/* Infos hover */}
                    <div
                      className="absolute bottom-0 left-0 right-0 p-3 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
                    >
                      <p
                        style={{
                          color: '#ffffff',
                          fontWeight: 700,
                          fontSize: '0.8125rem',
                          lineHeight: 1.3,
                          textShadow: '0 1px 4px rgba(0,0,0,0.5)',
                        }}
                      >
                        {photo.titre}
                      </p>
                      <p
                        style={{
                          color: 'rgba(255,255,255,0.75)',
                          fontSize: '0.7rem',
                          marginTop: '0.2rem',
                          fontWeight: 500,
                        }}
                      >
                        📍 {photo.ville}
                      </p>
                    </div>
                    {/* Badge catégorie */}
                    <div className="absolute top-2 left-2">
                      <span
                        style={{
                          display: 'inline-block',
                          backgroundColor: 'rgba(11,61,44,0.72)',
                          backdropFilter: 'blur(4px)',
                          color: '#80BC00',
                          fontSize: '0.65rem',
                          fontWeight: 700,
                          padding: '0.2rem 0.5rem',
                          borderRadius: '9999px',
                          textTransform: 'uppercase',
                          letterSpacing: '0.04em',
                        }}
                      >
                        {categories.find((c) => c.id === photo.cat)?.label.split(' ')[0]}
                      </span>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {/* ── CTA BAS DE PAGE ── */}
      <section
        style={{
          background: 'linear-gradient(135deg, #0B3D2C 0%, #425D07 100%)',
          borderTop: '4px solid #80BC00',
          padding: '5rem 0',
        }}
        aria-label="Appel à l'action galerie"
      >
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 text-center">
          <p
            style={{
              color: '#80BC00',
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
              fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
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
              color: 'rgba(255,255,255,0.7)',
              fontSize: '1rem',
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
                backgroundColor: '#80BC00',
                color: '#0B3D2C',
                borderRadius: '9999px',
                padding: '0.875rem 1.75rem',
                fontSize: '0.9375rem',
                fontWeight: 700,
                textDecoration: 'none',
                boxShadow: '0 0 30px rgba(128,188,0,0.35)',
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
          role="dialog"
          aria-modal="true"
          aria-label={`Lightbox — ${currentPhoto.titre}`}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0,0,0,0.94)',
            opacity: lightboxVisible ? 1 : 0,
            transition: 'opacity 0.2s ease',
          }}
          onClick={closeLightbox}
        >
          {/* Fermer */}
          <button
            type="button"
            onClick={closeLightbox}
            aria-label="Fermer la lightbox"
            style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              zIndex: 10,
              width: '2.5rem',
              height: '2.5rem',
              borderRadius: '9999px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              backgroundColor: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.2)',
              cursor: 'pointer',
            }}
          >
            <X size={20} aria-hidden="true" />
          </button>

          {/* Précédent */}
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); goPrev() }}
            aria-label="Photo précédente"
            style={{
              position: 'absolute',
              left: '1rem',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
              width: '2.75rem',
              height: '2.75rem',
              borderRadius: '9999px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              backgroundColor: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.2)',
              cursor: 'pointer',
            }}
          >
            <ChevronLeft size={26} aria-hidden="true" />
          </button>

          {/* Suivant */}
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); goNext() }}
            aria-label="Photo suivante"
            style={{
              position: 'absolute',
              right: '1rem',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
              width: '2.75rem',
              height: '2.75rem',
              borderRadius: '9999px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              backgroundColor: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.2)',
              cursor: 'pointer',
            }}
          >
            <ChevronRight size={26} aria-hidden="true" />
          </button>

          {/* Contenu */}
          <div
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', padding: '0 4rem', maxWidth: '100vw' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              style={{
                position: 'relative',
                borderRadius: '0.75rem',
                overflow: 'hidden',
                maxHeight: '82vh',
                maxWidth: '90vw',
                width: 'min(860px, 88vw)',
                aspectRatio: '4 / 3',
              }}
            >
              <Image
                src={currentPhoto.src}
                alt={`${currentPhoto.titre} — ${currentPhoto.ville}`}
                fill
                sizes="min(860px, 88vw)"
                className="object-cover"
                priority
              />
            </div>

            <div style={{ textAlign: 'center' }}>
              <p
                style={{
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '1rem',
                  lineHeight: 1.3,
                  marginBottom: '0.25rem',
                }}
              >
                {currentPhoto.titre}
              </p>
              <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.875rem' }}>
                📍 {currentPhoto.ville} ·{' '}
                <span style={{ color: '#80BC00' }}>
                  {categories.find((c) => c.id === currentPhoto.cat)?.label}
                </span>
              </p>
              {filtered.length > 1 && (
                <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.75rem', marginTop: '0.375rem' }}>
                  {(lightboxIndex ?? 0) + 1} / {filtered.length} — ← → pour naviguer · Échap pour fermer
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
