import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, MapPin, Maximize2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Nos réalisations — Portfolio paysagiste Lyon | LM Espace Vert',
  description:
    'Découvrez les créations de LM Espace Vert : jardins contemporains, terrasses en pierre, parcs de résidence. Portfolio photos et études de cas dans le nord-ouest lyonnais.',
  alternates: { canonical: 'https://www.lmespacevert.fr/realisations' },
  openGraph: {
    title: 'Réalisations LM Espace Vert — Paysagiste Lyon',
    description: 'Portfolio de jardins, terrasses et aménagements paysagers dans le Rhône.',
    url: 'https://www.lmespacevert.fr/realisations',
  },
}

const realisations = [
  {
    slug: 'jardin-contemporain-caluire',
    title: 'Jardin contemporain',
    location: 'Caluire-et-Cuire',
    surface: '450 m²',
    year: 2025,
    services: ['Création', 'Maçonnerie'],
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4aaae?w=800&q=80',
    description: 'Transformation complète d\'un terrain en friche en un jardin contemporain avec terrasse en pierre naturelle et massifs vivaces.',
  },
  {
    slug: 'terrasse-pierre-tassin',
    title: 'Terrasse en pierre naturelle',
    location: 'Tassin-la-Demi-Lune',
    surface: '80 m²',
    year: 2025,
    services: ['Maçonnerie'],
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80',
    description: 'Pose d\'une terrasse en pierre calcaire avec allée dallée et escalier d\'accès. Finition soignée avec joints sable.',
  },
  {
    slug: 'parc-residence-ecully',
    title: 'Parc de résidence',
    location: 'Écully',
    surface: '2 500 m²',
    year: 2024,
    services: ['Création', 'Entretien'],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    description: 'Réaménagement complet du parc d\'une résidence privée avec création de massifs, engazonnement et système d\'arrosage automatique.',
  },
  {
    slug: 'jardin-japonais-saint-didier',
    title: 'Jardin japonais',
    location: "Saint-Didier-au-Mont-d'Or",
    surface: '120 m²',
    year: 2024,
    services: ['Création', 'Taille spécialisée'],
    image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=80',
    description: 'Création d\'un espace zen avec niwaki, bambous, gravier blanc et bassin ornemental.',
  },
  {
    slug: 'entretien-propriete-limonest',
    title: 'Entretien propriété privée',
    location: 'Limonest',
    surface: '800 m²',
    year: 2023,
    services: ['Entretien', 'Élagage'],
    image: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?w=800&q=80',
    description: 'Contrat d\'entretien annuel comprenant la tonte hebdomadaire, la taille de haies et l\'élagage des grands arbres.',
  },
  {
    slug: 'cloture-bois-dardilly',
    title: 'Clôture & portail bois',
    location: 'Dardilly',
    surface: '60 ml',
    year: 2023,
    services: ['Maçonnerie', 'Clôture'],
    image: 'https://images.unsplash.com/photo-1628352081506-83c43123e54d?w=800&q=80',
    description: 'Pose d\'une clôture en bois composite avec portail motorisé et muret en pierre sèche.',
  },
] as const

const categories = ['Tous', 'Création', 'Maçonnerie', 'Entretien', 'Élagage'] as const

export default function RealisationsPage() {
  return (
    <>
      <nav aria-label="Fil d'Ariane" className="border-b border-[--color-border] bg-[--color-bg-subtle]">
        <div className="container mx-auto max-w-7xl px-4 py-3 sm:px-6">
          <ol role="list" className="flex items-center gap-2 text-sm text-[--color-fg-subtle]">
            <li><Link href="/" className="hover:text-[--color-fg]">Accueil</Link></li>
            <li aria-hidden="true">/</li>
            <li><span aria-current="page" className="text-[--color-fg]">Réalisations</span></li>
          </ol>
        </div>
      </nav>

      {/* Header */}
      <div className="py-16 text-center bg-[--color-bg-subtle]">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <p className="badge badge-light mb-4">Portfolio</p>
          <h1 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold text-[--color-fg]">
            Nos réalisations
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-[--color-fg-muted] text-lg">
            Chaque projet raconte une histoire. Découvrez nos créations les plus marquantes
            dans le nord-ouest lyonnais.
          </p>
        </div>
      </div>

      {/* Filter tabs */}
      <div className="border-b border-[--color-border] bg-[--color-bg-elevated] sticky top-[73px] z-10">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex gap-1 overflow-x-auto py-3 scrollbar-none" role="tablist" aria-label="Filtrer par service">
            {categories.map((cat) => (
              <button
                key={cat}
                role="tab"
                className={`flex-shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  cat === 'Tous'
                    ? 'bg-[--color-green-primary] text-white'
                    : 'text-[--color-fg-muted] hover:bg-[--color-bg-subtle]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mb-12 rounded-2xl bg-[--color-green-primary] p-6">
          {[
            { num: '200+', label: 'Projets réalisés' },
            { num: '5★', label: 'Note Google' },
            { num: '5 ans', label: "D'expérience" },
          ].map((s) => (
            <div key={s.label} className="text-center text-white">
              <p className="font-display text-2xl font-extrabold">{s.num}</p>
              <p className="text-xs text-green-200 mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Gallery */}
        <ul role="list" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {realisations.map((r) => (
            <li key={r.slug}>
              <article className="group block overflow-hidden rounded-2xl border border-[--color-border] bg-[--color-bg-elevated] shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                <div className="relative aspect-[4/3] overflow-hidden bg-[--color-bg-subtle]">
                  <Image
                    src={r.image}
                    alt={r.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center shadow">
                      <Maximize2 size={14} className="text-[--color-primary]" aria-hidden="true" />
                    </div>
                  </div>
                  {/* Service tags */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                    {r.services.map((s) => (
                      <span key={s} className="text-xs font-semibold bg-white/90 text-[--color-primary] px-2 py-0.5 rounded-full">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-5">
                  <h2 className="font-display font-bold text-lg text-[--color-fg] group-hover:text-[--color-primary] transition-colors">
                    {r.title}
                  </h2>
                  <p className="text-sm text-[--color-fg-muted] mt-1 line-clamp-2 leading-relaxed">
                    {r.description}
                  </p>
                  <div className="mt-3 flex items-center justify-between text-xs text-[--color-fg-subtle]">
                    <span className="flex items-center gap-1">
                      <MapPin size={11} aria-hidden="true" /> {r.location}
                    </span>
                    <span className="flex items-center gap-2">
                      <span>{r.surface}</span>
                      <span>·</span>
                      <span>{r.year}</span>
                    </span>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="mt-16 rounded-2xl bg-[--color-green-primary] p-8 text-center text-white">
          <h2 className="font-display text-xl font-bold mb-2">Votre projet sera notre prochaine réalisation</h2>
          <p className="text-green-100 text-sm mb-5">Devis gratuit et sans engagement — réponse sous 24h.</p>
          <Link href="/devis" className="inline-flex items-center gap-2 rounded-full bg-white text-[--color-primary] font-bold px-6 py-3 hover:bg-white/90 transition-colors">
            Demander mon devis <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </>
  )
}
