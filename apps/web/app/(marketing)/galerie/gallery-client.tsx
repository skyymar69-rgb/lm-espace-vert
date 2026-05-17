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
  { id: 'arrosage', label: 'Arrosage' },
]

const photos: Photo[] = [
  // Création & Aménagement
  { src: '/images/scraped/Aménagement de cour et jardin extérieur près de Limonest.jpeg', titre: 'Aménagement de cour et jardin', cat: 'creation', ville: 'Limonest' },
  { src: '/images/scraped/Aménagement extérieur avec création paysagère sur mesure près de Limonest.jpeg', titre: 'Création paysagère sur mesure', cat: 'creation', ville: 'Limonest' },
  { src: '/images/scraped/Aménagement extérieur de jardin près de Limonest avec terrasse moderne.jpeg', titre: 'Jardin avec terrasse moderne', cat: 'creation', ville: 'Limonest' },
  { src: '/images/scraped/Aménagements extérieurs.jpeg', titre: 'Aménagements extérieurs', cat: 'creation', ville: 'Limonest' },
  { src: "/images/scraped/Conception de jardin paysager et aménagement extérieur à Limonest.jpeg", titre: 'Conception de jardin paysager', cat: 'creation', ville: 'Limonest' },
  { src: "/images/scraped/conception d'espace extérieur sur mesure à Limonest.jpeg", titre: "Espace extérieur sur mesure", cat: 'creation', ville: 'Limonest' },
  { src: "/images/scraped/Conception d'espaces verts et aménagement paysager à Limonest.jpeg", titre: "Espaces verts et aménagement paysager", cat: 'creation', ville: 'Limonest' },
  { src: "/images/scraped/Création d'espace extérieur paysager près de Limonest.jpeg", titre: "Espace extérieur paysager", cat: 'creation', ville: 'Limonest' },
  { src: "/images/scraped/Création d'espaces extérieurs paysagers près de Limonest.jpeg", titre: "Espaces extérieurs paysagers", cat: 'creation', ville: 'Limonest' },
  { src: "/images/scraped/Création paysagère et aménagement extérieur de jardin près de Limonest.jpeg", titre: "Création paysagère et aménagement", cat: 'creation', ville: 'Limonest' },
  { src: "/images/scraped/Réalisation de jardin paysager et aménagement extérieur à Limonest.jpeg", titre: "Jardin paysager réalisé", cat: 'creation', ville: 'Limonest' },
  { src: "/images/scraped/Travaux de création paysagère pour espaces extérieurs près de Limonest.jpeg", titre: "Création paysagère extérieure", cat: 'creation', ville: 'Limonest' },
  { src: "/images/scraped/Travaux de création paysagère pour extérieur près de Limonest.jpeg", titre: "Travaux paysagers extérieurs", cat: 'creation', ville: 'Limonest' },
  { src: "/images/scraped/Travaux d'aménagement extérieur avec allée et plantations à Limonest.jpeg", titre: "Allée et plantations", cat: 'creation', ville: 'Limonest' },
  { src: "/images/scraped/Allée de gravier dans un jardin avec arbres élagués et un panier de basket Limonest.webp", titre: "Allée de gravier aménagée", cat: 'creation', ville: 'Limonest' },
  { src: '/images/scraped/Chemin de gravier bordé de pelouse menant à des maisons modernes à Limonest.webp', titre: "Chemin de gravier et pelouse", cat: 'creation', ville: 'Limonest' },
  { src: "/images/scraped/Escalier en bois et gravier Limonest.webp", titre: "Escalier en bois et gravier", cat: 'creation', ville: 'Limonest' },
  { src: "/images/scraped/Espace extérieur en gravier avec mur de soutènement à Limonest.webp", titre: "Espace gravier avec mur de soutènement", cat: 'creation', ville: 'Limonest' },
  { src: "/images/scraped/Conception d'un projet de création paysagère près de Limonest.webp", titre: "Projet de création paysagère", cat: 'creation', ville: 'Limonest' },
  { src: "/images/scraped/Plantation de végétaux près de Limonest.webp", titre: "Plantation de végétaux", cat: 'creation', ville: 'Limonest' },
  { src: '/images/scraped/Pose de gazon près de Limonest.webp', titre: "Pose de gazon", cat: 'creation', ville: 'Limonest' },
  { src: "/images/scraped/Vente de végétaux à Saint-Didier-au-Mont-d'Or.webp", titre: "Végétaux et plantations", cat: 'creation', ville: "Saint-Didier-au-Mont-d'Or" },
  { src: "/images/scraped/Déroulement d'un projet d'aménagement paysager près de Limonest.webp", titre: "Suivi de chantier paysager", cat: 'creation', ville: 'Limonest' },
  { src: "/images/scraped/Étude du terrain près de Limonest.webp", titre: "Étude de terrain", cat: 'creation', ville: 'Limonest' },
  { src: '/images/scraped/Travaux paysagers à Saint-Didier-au-Mont-d\'Or.webp', titre: "Travaux paysagers", cat: 'creation', ville: "Saint-Didier-au-Mont-d'Or" },
  // Entretien
  { src: "/images/scraped/Entretien d'espaces verts et jardins près de Limones.jpeg", titre: "Entretien d'espaces verts", cat: 'entretien', ville: 'Limonest' },
  { src: "/images/scraped/Entretien d'espaces verts1.jpeg", titre: "Entretien de jardin", cat: 'entretien', ville: 'Limonest' },
  { src: "/images/scraped/Service d'entretien de jardin et espaces verts à Limonest.jpeg", titre: "Service d'entretien de jardin", cat: 'entretien', ville: 'Limonest' },
  { src: '/images/scraped/Tonte de pelouse et entretien d\'espaces verts près de Limonest.jpeg', titre: "Tonte de pelouse", cat: 'entretien', ville: 'Limonest' },
  { src: "/images/scraped/Maintenance et nettoyage d'espaces verts à Limonest.jpeg", titre: "Nettoyage d'espaces verts", cat: 'entretien', ville: 'Limonest' },
  { src: "/images/scraped/Un paysagiste a nettoyé un jardin à Limonest.webp", titre: "Nettoyage de jardin", cat: 'entretien', ville: 'Limonest' },
  { src: "/images/scraped/Entretien des haies près de Limonest .webp", titre: "Entretien des haies", cat: 'entretien', ville: 'Limonest' },
  { src: "/images/scraped/Entretien d'espaces verts à Saint-Didier-au-Mont-d'Or.webp", titre: "Entretien espaces verts", cat: 'entretien', ville: "Saint-Didier-au-Mont-d'Or" },
  // Élagage
  { src: '/images/scraped/Élagage et taille de haies.jpeg', titre: 'Élagage et taille de haies', cat: 'elagage', ville: 'Limonest' },
  { src: '/images/scraped/Élagage sécurisé et taille de haies sur mesure près de Limonest2.jpeg', titre: 'Élagage sécurisé sur mesure', cat: 'elagage', ville: 'Limonest' },
  { src: '/images/scraped/Élagage toutes hauteurs près de Limonest .webp', titre: 'Élagage toutes hauteurs', cat: 'elagage', ville: 'Limonest' },
  { src: "/images/scraped/Travaux d'élagage pour entretien de jardin près de Limonest.jpeg", titre: "Travaux d'élagage", cat: 'elagage', ville: 'Limonest' },
  { src: "/images/scraped/Coupe et entretien de haies et arbustes à Limonest.jpeg", titre: 'Taille de haies et arbustes', cat: 'elagage', ville: 'Limonest' },
  { src: "/images/scraped/Coupe et entretien de haies et arbustes à Limonest1.jpeg", titre: 'Entretien de haies et arbustes', cat: 'elagage', ville: 'Limonest' },
  { src: "/images/scraped/Service professionnel de taille de haies à Limonest.jpeg", titre: 'Taille de haies professionnelle', cat: 'elagage', ville: 'Limonest' },
  { src: "/images/scraped/Travaux d'élagage à Saint-Didier-au-Mont-d'Or.webp", titre: "Élagage à Saint-Didier", cat: 'elagage', ville: "Saint-Didier-au-Mont-d'Or" },
  { src: "/images/scraped/Sécurisation des arbres près de Limonest.webp", titre: "Sécurisation des arbres", cat: 'elagage', ville: 'Limonest' },
  { src: "/images/scraped/Matériel utilisé pour l'élagage près de Limonest.webp", titre: "Matériel d'élagage professionnel", cat: 'elagage', ville: 'Limonest' },
  // Arrosage
  { src: "/images/scraped/Pose d'arrosage automatique à Saint-Didier-au-Mont-d'Or.webp", titre: "Pose d'arrosage automatique", cat: 'arrosage', ville: "Saint-Didier-au-Mont-d'Or" },
  { src: "/images/scraped/Pose du réseau d'irrigation enterré près de Limonest.webp", titre: "Réseau d'irrigation enterré", cat: 'arrosage', ville: 'Limonest' },
  { src: "/images/scraped/Réglage du système d'arrosage près de Limonest.webp", titre: "Réglage du système d'arrosage", cat: 'arrosage', ville: 'Limonest' },
  { src: "/images/scraped/Maintenance du système d'arrosage près de Limonest.webp", titre: "Maintenance arrosage automatique", cat: 'arrosage', ville: 'Limonest' },
  { src: "/images/scraped/Un paysagiste utilise des arroseurs pour un gazon fraîchement taillé à Limonest.webp", titre: "Arrosage automatique en action", cat: 'arrosage', ville: 'Limonest' },
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
