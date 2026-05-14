'use client'

import Image from 'next/image'
import { useState } from 'react'

const realisations = [
  {
    title: 'Jardin de demeure - Saint-Didier',
    category: 'Création',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80',
    year: '2024',
  },
  {
    title: 'Terrasse en pierre - Caluire',
    category: 'Maçonnerie',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80',
    year: '2024',
  },
  {
    title: 'Élagage parc résidentiel - Écully',
    category: 'Élagage',
    image: 'https://images.unsplash.com/photo-1590682680695-43b964a3ae17?w=600&q=80',
    year: '2024',
  },
  {
    title: 'Entretien villa - Tassin',
    category: 'Entretien',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    year: '2023',
  },
  {
    title: 'Création massifs - Charbonnières',
    category: 'Création',
    image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=600&q=80',
    year: '2023',
  },
  {
    title: 'Allée et parking - Dardilly',
    category: 'Maçonnerie',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&q=80',
    year: '2023',
  },
  {
    title: 'Jardin contemporain - Limonest',
    category: 'Création',
    image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600&q=80',
    year: '2023',
  },
  {
    title: 'Engazonnement villa - Saint-Didier',
    category: 'Engazonnement',
    image: 'https://images.unsplash.com/photo-1628352081506-83c43123e54d?w=600&q=80',
    year: '2022',
  },
  {
    title: 'Taille haies copropriété - Caluire',
    category: 'Entretien',
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&q=80',
    year: '2022',
  },
]

const categories = ['Tout', 'Création', 'Entretien', 'Élagage', 'Maçonnerie', 'Engazonnement']

export function RealisationsGallery() {
  const [activeCategory, setActiveCategory] = useState('Tout')

  const filtered =
    activeCategory === 'Tout'
      ? realisations
      : realisations.filter((r) => r.category === activeCategory)

  return (
    <>
      {/* Filters */}
      <div className="border-b border-[--color-border] bg-white sticky top-[73px] z-10">
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
                  className="flex-shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#275524]"
                  style={
                    isActive
                      ? { backgroundColor: '#275524', color: '#fff' }
                      : {
                          borderWidth: 1,
                          borderStyle: 'solid',
                          borderColor: 'var(--color-border)',
                          color: 'var(--color-fg-muted)',
                        }
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
                <article className="group rounded-2xl overflow-hidden border border-[--color-border] bg-[--color-bg-elevated] shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                  <div className="relative h-60 overflow-hidden bg-[--color-bg-subtle]">
                    <Image
                      src={r.image}
                      alt={r.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {/* Category badge */}
                    <div className="absolute top-3 left-3">
                      <span
                        className="text-xs font-semibold bg-white/90 px-2.5 py-1 rounded-full"
                        style={{ color: '#275524' }}
                      >
                        {r.category}
                      </span>
                    </div>
                    {/* Title / year on hover */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <p className="text-white font-semibold text-sm leading-snug">{r.title}</p>
                      <p className="text-white/70 text-xs mt-0.5">{r.year}</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <h2 className="font-semibold text-[--color-fg] text-sm leading-snug group-hover:text-[#275524] transition-colors">
                      {r.title}
                    </h2>
                    <div className="mt-1.5 flex items-center justify-between text-xs text-[--color-fg-subtle]">
                      <span>{r.category}</span>
                      <span>{r.year}</span>
                    </div>
                  </div>
                </article>
              </li>
            ))}
          </ul>

          {filtered.length === 0 && (
            <p className="text-center text-[--color-fg-muted] py-16">
              Aucune réalisation dans cette catégorie pour le moment.
            </p>
          )}
        </div>
      </section>
    </>
  )
}
