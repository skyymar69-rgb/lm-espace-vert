import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { RealisationsGallery } from './gallery'

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

export default function RealisationsPage() {
  return (
    <>
      {/* Breadcrumb */}
      <nav aria-label="Fil d'Ariane" className="border-b border-[#EDEDED] bg-white">
        <div className="container mx-auto max-w-7xl px-4 py-3 sm:px-6">
          <ol role="list" className="flex items-center gap-2 text-sm text-[#8C8F94]">
            <li>
              <Link href="/" className="hover:text-[#2F2F2F]">Accueil</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li><span aria-current="page" className="text-[#2F2F2F]">Réalisations</span></li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-16" style={{ backgroundColor: '#F7F5F0' }}>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 text-center">
          <h1 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold" style={{ color: '#425D07' }}>
            Nos Réalisations
          </h1>
          <p className="mt-4 max-w-xl mx-auto text-lg text-[#8C8F94]">
            Découvrez quelques-uns de nos projets paysagers réalisés dans le nord-ouest lyonnais.
          </p>
        </div>
      </section>

      {/* Interactive filters + gallery (client component) */}
      <RealisationsGallery />

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="rounded-2xl p-10 text-center text-white" style={{ backgroundColor: '#0B3D2C' }}>
            <h2 className="font-display text-2xl font-bold mb-2">
              Votre projet sera notre prochaine réalisation
            </h2>
            <p className="text-green-100 text-sm mb-6">
              Devis gratuit et sans engagement — réponse sous 24h.
            </p>
            <Link
              href="/devis"
              className="inline-flex items-center gap-2 rounded-full font-bold px-6 py-3 hover:bg-white/90 transition-colors"
              style={{ backgroundColor: '#ffffff', color: '#0B3D2C' }}
            >
              Demander mon devis <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
