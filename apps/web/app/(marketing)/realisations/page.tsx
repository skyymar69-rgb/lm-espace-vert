import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { RealisationsGallery } from './gallery'
import { GoogleReviewsBadge } from '@/components/ui/google-reviews-badge'
import { JsonLd } from '@/components/seo/json-ld'

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.lmespacevert.fr' },
    { '@type': 'ListItem', position: 2, name: 'Réalisations', item: 'https://www.lmespacevert.fr/realisations' },
  ],
}

export const metadata: Metadata = {
  title: 'Nos réalisations — Portfolio paysagiste Lyon | LM Espace Vert',
  description: 'Découvrez le portfolio de LM Espace Vert : jardins contemporains, terrasses en pierre naturelle, engazonnements et parcs dans le nord-ouest lyonnais. Plus de 200 projets réalisés depuis 2019.',
  alternates: { canonical: 'https://www.lmespacevert.fr/realisations' },
  openGraph: {
    title: 'Réalisations LM Espace Vert — Portfolio paysagiste Lyon nord',
    description: 'Découvrez le portfolio de LM Espace Vert : jardins, terrasses en pierre, engazonnements et parcs dans le nord-ouest lyonnais. Plus de 200 projets réalisés depuis 2019.',
    url: 'https://www.lmespacevert.fr/realisations',
    type: 'website',
    images: [{ url: 'https://www.lmespacevert.fr/images/realisation-1.webp', width: 1200, height: 630, alt: 'Portfolio réalisations paysagiste LM Espace Vert Lyon' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Réalisations LM Espace Vert — Portfolio paysagiste Lyon nord',
    description: 'Jardins, terrasses et aménagements paysagers dans le nord-ouest lyonnais. Plus de 200 projets depuis 2019.',
    images: ['https://www.lmespacevert.fr/images/realisation-1.webp'],
  },
}

export default function RealisationsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />

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
          <div className="mt-6 flex justify-center">
            <GoogleReviewsBadge rating={5.0} count={28} />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section aria-label="Chiffres clés" className="border-b bg-white" style={{ borderColor: '#EDEDED' }}>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <dl className="grid grid-cols-3 divide-x py-8" style={{ borderColor: '#EDEDED' }}>
            {[
              { value: '200+', label: 'Projets réalisés' },
              { value: '20 km', label: 'Rayon d\'intervention' },
              { value: '5 ans', label: 'D\'expérience' },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className="flex flex-col items-center gap-1 px-4 text-center"
                style={{ borderLeft: i > 0 ? '1px solid #EDEDED' : 'none' }}
              >
                <dt className="font-display text-2xl font-bold sm:text-3xl" style={{ color: '#425D07' }}>
                  {stat.value}
                </dt>
                <dd className="text-xs sm:text-sm" style={{ color: '#8C8F94' }}>{stat.label}</dd>
              </div>
            ))}
          </dl>
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
