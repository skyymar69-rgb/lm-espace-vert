import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { JsonLd } from '@/components/seo/json-ld'
import { GOOGLE_RATING, GOOGLE_RATING_NUM, GOOGLE_REVIEWS } from '@/lib/business'

interface Props {
  params: Promise<{ cat: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { cat } = await params
  const label = decodeURIComponent(cat)
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase())

  return {
    title: `Catégorie ${label} — Conseils jardinage | LM Espace Vert`,
    description: `Retrouvez tous nos articles et conseils jardinage sur la thématique "${label}". LM Espace Vert, paysagiste à Saint-Didier-au-Mont-d'Or, partage son expertise pour vous aider à entretenir et créer de beaux jardins.`,
    alternates: {
      canonical: `https://www.lm-espace-vert.fr/blog/categorie/${cat}`,
    },
    openGraph: {
      title: `Catégorie ${label} — Conseils jardinage | LM Espace Vert`,
      description: `Articles et conseils jardinage sur "${label}" par LM Espace Vert, paysagiste professionnel dans le nord-ouest lyonnais.`,
      url: `https://www.lm-espace-vert.fr/blog/categorie/${cat}`,
      type: 'website',
    },
  }
}

export default async function CategoriePageWrapper({ params }: Props) {
  const { cat } = await params
  return <CategoriePage cat={cat} />
}

function CategoriePage({ cat }: { cat: string }) {
  const label = decodeURIComponent(cat)
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase())

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.lm-espace-vert.fr' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.lm-espace-vert.fr/blog' },
      { '@type': 'ListItem', position: 3, name: label, item: `https://www.lm-espace-vert.fr/blog/categorie/${cat}` },
    ],
  }

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://www.lm-espace-vert.fr/#business',
    name: 'LM Espace Vert',
    url: 'https://www.lm-espace-vert.fr',
    telephone: '+33672587353',
    address: {
      '@type': 'PostalAddress',
      addressLocality: "Saint-Didier-au-Mont-d'Or",
      postalCode: '69370',
      addressCountry: 'FR',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: GOOGLE_RATING_NUM,
      reviewCount: String(GOOGLE_REVIEWS),
      bestRating: '5',
      worstRating: '1',
    },
  }

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={localBusinessSchema} />

      {/* Hero */}
      <section className="py-16" style={{ backgroundColor: '#F4F1E9' }}>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <nav aria-label="Fil d'Ariane" className="mb-6">
            <ol role="list" className="flex items-center gap-2 text-sm text-[#8C8F94]">
              <li><Link href="/" className="hover:text-[#2F2F2F] transition-colors">Accueil</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/blog" className="hover:text-[#2F2F2F] transition-colors">Blog</Link></li>
              <li aria-hidden="true">/</li>
              <li><span aria-current="page" className="text-[#2F2F2F]">{label}</span></li>
            </ol>
          </nav>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#749A30' }}>
              CATÉGORIE
            </p>
            <h1 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight" style={{ color: '#4A6320' }}>
              {label}
            </h1>
            <p className="mt-4 text-lg text-[#8C8F94]">
              Conseils jardinage et paysagisme par LM Espace Vert — {GOOGLE_RATING}/5 · {GOOGLE_REVIEWS} avis Google
            </p>
          </div>
        </div>
      </section>

      {/* Placeholder articles list */}
      <section className="bg-white py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <p className="text-center text-[#8C8F94]">
            Aucun article dans cette catégorie pour le moment. Revenez bientôt !
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#243238', color: '#ffffff' }}
            >
              Voir tous les articles
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
