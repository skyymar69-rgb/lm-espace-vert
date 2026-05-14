import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Nos réalisations — Portfolio paysagiste Lyon',
  description:
    'Découvrez les créations et réalisations de LM Espace Vert : jardins contemporains, terrasses, parcs. Portfolio photos avant/après.',
  alternates: { canonical: 'https://www.lmespacevert.fr/realisations' },
}

// Placeholder data — will be replaced by Strapi CMS
const realisations = [
  { slug: 'jardin-contemporain-caluire', title: 'Jardin contemporain', location: 'Caluire-et-Cuire', surface: '450 m²', year: 2025, services: ['Création', 'Maçonnerie'] },
  { slug: 'terrasse-pierre-tassin', title: 'Terrasse en pierre naturelle', location: 'Tassin-la-Demi-Lune', surface: '80 m²', year: 2025, services: ['Maçonnerie'] },
  { slug: 'parc-residence-ecully', title: 'Parc de résidence', location: 'Écully', surface: '2 500 m²', year: 2024, services: ['Création', 'Entretien'] },
] as const

export default function RealisationsPage() {
  return (
    <>
      <nav aria-label="Fil d'Ariane" className="border-b border-[--color-border] bg-[--color-bg-subtle]">
        <div className="container mx-auto max-w-7xl px-4 py-3 sm:px-6">
          <ol role="list" className="flex items-center gap-2 text-sm text-[--color-fg-subtle]">
            <li><Link href="/" className="hover:text-[--color-fg] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[--color-focus]">Accueil</Link></li>
            <li aria-hidden="true">/</li>
            <li><span aria-current="page" className="text-[--color-fg]">Réalisations</span></li>
          </ol>
        </div>
      </nav>

      <div className="container mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[--color-accent]">Portfolio</p>
          <h1 className="mt-2 font-display text-[clamp(2.25rem,5vw,3.75rem)] text-[--color-fg]">
            Nos réalisations
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-[--color-fg-muted]">
            Chaque projet raconte une histoire. Découvrez nos créations les plus marquantes.
          </p>
        </div>

        <ul role="list" className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {realisations.map((r) => (
            <li key={r.slug}>
              <Link
                href={`/realisations/${r.slug}`}
                className="card-hover group block overflow-hidden rounded-xl border border-[--color-border] bg-[--color-bg-elevated] shadow-[--shadow-sm] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--color-focus]"
              >
                {/* Image placeholder */}
                <div className="aspect-[16/10] bg-[--color-bg-subtle]" aria-hidden="true" />
                <div className="p-5">
                  <div className="flex flex-wrap gap-1.5">
                    {r.services.map((s) => (
                      <span key={s} className="rounded-full bg-[--color-bg-subtle] px-2.5 py-0.5 text-xs font-medium text-[--color-fg-muted]">
                        {s}
                      </span>
                    ))}
                  </div>
                  <h2 className="mt-2 font-display text-lg text-[--color-fg]">{r.title}</h2>
                  <p className="mt-1 text-sm text-[--color-fg-subtle]">
                    {r.location} — {r.surface} — {r.year}
                  </p>
                  <span className="mt-3 flex items-center gap-1 text-sm font-medium text-[--color-accent]">
                    Voir l'étude de cas <ArrowRight size={14} aria-hidden="true" />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
