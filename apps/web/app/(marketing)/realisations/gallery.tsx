'use client'

import Image from 'next/image'
import { useState } from 'react'

type Realisation = {
  title: string
  category: string
  image: string
  year: string
  beforeAfter?: { before: string; after: string }
}

const realisations: Realisation[] = [
  {
    title: 'Création jardin contemporain — Limonest',
    category: 'Création',
    image: '/images/realisation-1.jpg',
    year: '2025',
  },
  {
    title: 'Aménagement extérieur sur mesure — Limonest',
    category: 'Création',
    image: '/images/realisation-3.jpg',
    year: '2025',
  },
  {
    title: 'Taille de haies copropriété — Limonest',
    category: 'Entretien',
    image: '/images/taille-haies-1.jpg',
    year: '2025',
  },
  {
    title: 'Entretien espaces verts — Saint-Didier',
    category: 'Entretien',
    image: '/images/entretien-espaces-verts.webp',
    year: '2025',
  },
  {
    title: 'Élagage raisonné — Saint-Didier',
    category: 'Élagage',
    image: '/images/elagage-abattage.webp',
    year: '2025',
  },
  {
    title: 'Jardin paysager résidentiel — Limonest',
    category: 'Création',
    image: '/images/realisation-4.jpg',
    year: '2024',
  },
  {
    title: 'Terrasse et espace de vie — Limonest',
    category: 'Maçonnerie',
    image: '/images/realisation-5.jpg',
    year: '2024',
  },
  {
    title: 'Création espaces extérieurs — Limonest',
    category: 'Création',
    image: '/images/realisation-6.jpg',
    year: '2024',
  },
  {
    title: 'Aménagement paysager — Saint-Didier',
    category: 'Création',
    image: '/images/travaux-paysagers.webp',
    year: '2024',
  },
  {
    title: 'Pose arrosage automatique — Saint-Didier',
    category: 'Arrosage',
    image: '/images/arrosage-automatique.webp',
    year: '2024',
  },
  {
    title: 'Conception jardin sur mesure — Limonest',
    category: 'Création',
    image: '/images/realisation-7.jpg',
    year: '2024',
  },
  {
    title: 'Aménagement cour et jardin — Limonest',
    category: 'Création',
    image: '/images/realisation-9.jpg',
    year: '2023',
  },
  {
    title: 'Terrasse moderne et jardin — Limonest',
    category: 'Maçonnerie',
    image: '/images/realisation-10.jpg',
    year: '2023',
  },
  {
    title: 'Transformation jardin — Limonest',
    category: 'Avant/Après',
    image: '/images/apres1.webp',
    year: '2025',
    beforeAfter: { before: '/images/avant1.webp', after: '/images/apres1.webp' },
  },
  {
    title: 'Rénovation aménagement extérieur — Limonest',
    category: 'Avant/Après',
    image: '/images/apres2.webp',
    year: '2024',
    beforeAfter: { before: '/images/avant2.webp', after: '/images/apres2.webp' },
  },
]

const categories = ['Tout', 'Création', 'Entretien', 'Élagage', 'Maçonnerie', 'Arrosage', 'Avant/Après']

export function RealisationsGallery() {
  const [activeCategory, setActiveCategory] = useState('Tout')

  const filtered =
    activeCategory === 'Tout'
      ? realisations
      : realisations.filter((r) => r.category === activeCategory)

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
            {filtered.map((r) => (
              <li key={r.title}>
                <article className="group bg-white rounded-2xl overflow-hidden shadow-[rgba(0,0,0,0.06)_0px_4px_30px_0px] hover:shadow-[rgba(0,0,0,0.12)_0px_8px_40px_0px] transition-shadow">
                  {r.beforeAfter ? (
                    /* Before / After layout */
                    <div className="relative h-60 overflow-hidden flex">
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
                    </div>
                  ) : (
                    /* Standard single-image layout */
                    <div className="relative h-60 overflow-hidden">
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
                    </div>
                  )}
                  <div className="p-4">
                    <h2 className="font-semibold text-[#2F2F2F] text-sm leading-snug group-hover:text-[#80BC00] transition-colors">
                      {r.title}
                    </h2>
                    <div className="mt-1.5 flex items-center justify-between text-xs text-[#8C8F94]">
                      <span>{r.category}</span>
                      <span>{r.year}</span>
                    </div>
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
    </>
  )
}
