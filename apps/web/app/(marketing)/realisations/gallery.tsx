'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect, useCallback } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

type Realisation = {
  title: string
  category: string
  image: string
  year: string
  beforeAfter?: { before: string; after: string }
}

const realisations: Realisation[] = [
  {
    title: 'Aménagement de cour et jardin — Limonest',
    category: 'Création',
    image: '/images/scraped/Aménagement de cour et jardin extérieur près de Limonest.jpeg',
    year: '2025',
  },
  {
    title: 'Taille de haies professionnelle — Limonest',
    category: 'Élagage',
    image: '/images/scraped/Service professionnel de taille de haies à Limonest.jpeg',
    year: '2025',
  },
  {
    title: "Pose d'arrosage automatique — Saint-Didier",
    category: 'Arrosage',
    image: "/images/scraped/Pose d'arrosage automatique à Saint-Didier-au-Mont-d'Or.webp",
    year: '2025',
  },
  {
    title: 'Entretien des haies — Limonest',
    category: 'Entretien',
    image: '/images/scraped/Entretien des haies près de Limonest .webp',
    year: '2025',
    beforeAfter: {
      before: '/images/scraped/avant1.webp',
      after: '/images/scraped/apres1.webp',
    },
  },
  {
    title: 'Jardin avec terrasse moderne — Limonest',
    category: 'Création',
    image: '/images/scraped/Aménagement extérieur de jardin près de Limonest avec terrasse moderne.jpeg',
    year: '2025',
  },
  {
    title: 'Élagage toutes hauteurs — Limonest',
    category: 'Élagage',
    image: '/images/scraped/Élagage toutes hauteurs près de Limonest .webp',
    year: '2025',
  },
  {
    title: "Réseau d'irrigation enterré — Limonest",
    category: 'Arrosage',
    image: "/images/scraped/Pose du réseau d'irrigation enterré près de Limonest.webp",
    year: '2025',
  },
  {
    title: 'Création paysagère sur mesure — Limonest',
    category: 'Création',
    image: '/images/scraped/Aménagement extérieur avec création paysagère sur mesure près de Limonest.jpeg',
    year: '2024',
    beforeAfter: {
      before: '/images/scraped/avant2.webp',
      after: '/images/scraped/apres2.webp',
    },
  },
  {
    title: "Entretien d'espaces verts — Limonest",
    category: 'Entretien',
    image: "/images/scraped/Entretien d'espaces verts et jardins près de Limones.jpeg",
    year: '2024',
  },
  {
    title: "Élagage sécurisé — Limonest",
    category: 'Élagage',
    image: '/images/scraped/Élagage sécurisé et taille de haies sur mesure près de Limonest2.jpeg',
    year: '2024',
  },
  {
    title: "Réglage du système d'arrosage — Limonest",
    category: 'Arrosage',
    image: "/images/scraped/Réglage du système d'arrosage près de Limonest.webp",
    year: '2024',
  },
  {
    title: 'Conception de jardin paysager — Limonest',
    category: 'Création',
    image: "/images/scraped/Conception de jardin paysager et aménagement extérieur à Limonest.jpeg",
    year: '2024',
  },
  {
    title: "Tonte de pelouse et entretien — Limonest",
    category: 'Entretien',
    image: '/images/scraped/Tonte de pelouse et entretien d\'espaces verts près de Limonest.jpeg',
    year: '2024',
  },
  {
    title: "Travaux d'élagage — Saint-Didier",
    category: 'Élagage',
    image: "/images/scraped/Travaux d'élagage à Saint-Didier-au-Mont-d'Or.webp",
    year: '2024',
  },
  {
    title: "Maintenance arrosage automatique — Limonest",
    category: 'Arrosage',
    image: "/images/scraped/Maintenance du système d'arrosage près de Limonest.webp",
    year: '2023',
  },
  {
    title: "Allée de gravier et jardin — Limonest",
    category: 'Création',
    image: '/images/scraped/Allée de gravier dans un jardin avec arbres élagués et un panier de basket Limonest.webp',
    year: '2023',
  },
  {
    title: "Taille de haies et arbustes — Limonest",
    category: 'Élagage',
    image: "/images/scraped/Coupe et entretien de haies et arbustes à Limonest.jpeg",
    year: '2023',
  },
  {
    title: "Service d'entretien de jardin — Limonest",
    category: 'Entretien',
    image: "/images/scraped/Service d'entretien de jardin et espaces verts à Limonest.jpeg",
    year: '2023',
  },
]

const categories = ['Tout', 'Création', 'Entretien', 'Élagage', 'Arrosage']

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
      <div className="border-b border-[#EDEDED] bg-white sticky top-[73px] z-10">
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
                  className={
                    isActive
                      ? 'flex-shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#80BC00]'
                      : 'flex-shrink-0 rounded-full px-4 py-2 text-sm font-medium border border-[#D8D8D8] text-[#8C8F94] hover:border-[#80BC00] hover:text-[#80BC00] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#80BC00]'
                  }
                  style={
                    isActive
                      ? { backgroundColor: '#80BC00', color: '#ffffff' }
                      : undefined
                  }
                >
                  {cat}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Gallery */}
      <section className="bg-white py-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <ul
            role="list"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((r, index) => (
              <li key={r.title}>
                <article className="group bg-white rounded-2xl overflow-hidden shadow-[rgba(0,0,0,0.06)_0px_4px_30px_0px] hover:shadow-[rgba(0,0,0,0.12)_0px_8px_40px_0px] transition-shadow">
                  {r.beforeAfter ? (
                    /* Before / After layout */
                    <button
                      type="button"
                      className="relative h-60 overflow-hidden flex w-full text-left cursor-zoom-in"
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
                        <div className="absolute bottom-2 left-2">
                          <span
                            className="text-xs font-bold px-2 py-0.5 rounded-full"
                            style={{ backgroundColor: 'rgba(0,0,0,0.55)', color: '#ffffff' }}
                          >
                            Avant
                          </span>
                        </div>
                      </div>
                      <div className="w-px bg-white/60 z-10 self-stretch" />
                      <div className="relative flex-1 overflow-hidden">
                        <Image
                          src={r.beforeAfter.after}
                          alt={`Après — ${r.title}`}
                          fill
                          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 17vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute bottom-2 right-2">
                          <span
                            className="text-xs font-bold px-2 py-0.5 rounded-full"
                            style={{ backgroundColor: 'rgba(128,188,0,0.85)', color: '#ffffff' }}
                          >
                            Après
                          </span>
                        </div>
                      </div>
                      {/* Overlay */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundColor: 'rgba(11,61,44,0.72)' }} />
                      {/* Category badge */}
                      <div className="absolute top-3 left-3">
                        <span
                          className="text-xs font-semibold px-2.5 py-1 rounded-full"
                          style={{ backgroundColor: 'rgba(128,188,0,0.15)', color: '#425D07' }}
                        >
                          {r.category}
                        </span>
                      </div>
                      {/* Title / year on hover */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        <p className="text-white font-semibold text-sm leading-snug">{r.title}</p>
                        <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.70)' }}>{r.year}</p>
                      </div>
                    </button>
                  ) : (
                    /* Standard single-image layout */
                    <button
                      type="button"
                      className="relative h-60 overflow-hidden w-full cursor-zoom-in"
                      onClick={() => openLightbox(index)}
                      aria-label={`Agrandir — ${r.title}`}
                    >
                      <Image
                        src={r.image}
                        alt={r.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundColor: 'rgba(11,61,44,0.88)' }} />
                      {/* Category badge */}
                      <div className="absolute top-3 left-3">
                        <span
                          className="text-xs font-semibold px-2.5 py-1 rounded-full"
                          style={{ backgroundColor: 'rgba(128,188,0,0.15)', color: '#425D07' }}
                        >
                          {r.category}
                        </span>
                      </div>
                      {/* Title / year on hover */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        <p className="text-white font-semibold text-sm leading-snug">{r.title}</p>
                        <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.70)' }}>{r.year}</p>
                      </div>
                    </button>
                  )}
                  <div className="p-4">
                    <h2 className="font-semibold text-[#2F2F2F] text-sm leading-snug group-hover:text-[#80BC00] transition-colors">
                      {r.title}
                    </h2>
                    <div className="mt-1.5 flex items-center justify-between text-xs text-[#8C8F94]">
                      <span>{r.category}</span>
                      <span>{r.year}</span>
                    </div>
                    <Link
                      href="/devis"
                      className="mt-3 inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition-all hover:opacity-90"
                      style={{ backgroundColor: '#80BC00', color: '#ffffff' }}
                    >
                      Demander un projet similaire →
                    </Link>
                  </div>
                </article>
              </li>
            ))}
          </ul>

          {filtered.length === 0 && (
            <p className="text-center text-[#8C8F94] py-16">
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
            backgroundColor: 'rgba(0,0,0,0.92)',
            opacity: lightboxVisible ? 1 : 0,
            transition: 'opacity 0.2s ease',
          }}
          onClick={closeLightbox}
        >
          {/* Bouton fermer */}
          <button
            type="button"
            onClick={closeLightbox}
            aria-label="Fermer la lightbox"
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            <X size={22} aria-hidden="true" />
          </button>

          {/* Navigation précédent */}
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); goPrev() }}
            aria-label="Image précédente"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            <ChevronLeft size={28} aria-hidden="true" />
          </button>

          {/* Navigation suivant */}
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); goNext() }}
            aria-label="Image suivante"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            <ChevronRight size={28} aria-hidden="true" />
          </button>

          {/* Contenu centré */}
          <div
            className="relative flex flex-col items-center gap-4 px-16"
            onClick={(e) => e.stopPropagation()}
          >
            {currentItem.beforeAfter ? (
              /* Avant/après côte à côte en lightbox */
              <div className="flex gap-1 rounded-xl overflow-hidden" style={{ maxHeight: '90vh', maxWidth: '90vw' }}>
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
                      style={{ backgroundColor: 'rgba(0,0,0,0.6)', color: '#ffffff' }}
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
                      style={{ backgroundColor: 'rgba(128,188,0,0.85)', color: '#ffffff' }}
                    >
                      Après
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              /* Image simple */
              <div
                className="relative rounded-xl overflow-hidden"
                style={{ maxHeight: '90vh', maxWidth: '90vw', width: 'min(900px, 90vw)', aspectRatio: '16/10' }}
              >
                <Image
                  src={currentItem.image}
                  alt={currentItem.title}
                  fill
                  sizes="min(900px, 90vw)"
                  className="object-cover"
                  priority
                />
              </div>
            )}

            {/* Titre en bas */}
            <div className="text-center">
              <p className="text-white font-semibold text-base leading-snug">{currentItem.title}</p>
              <p className="text-sm mt-1" style={{ color: 'rgba(255,255,255,0.55)' }}>
                {currentItem.category} · {currentItem.year}
              </p>
              {filtered.length > 1 && (
                <p className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.35)' }}>
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
