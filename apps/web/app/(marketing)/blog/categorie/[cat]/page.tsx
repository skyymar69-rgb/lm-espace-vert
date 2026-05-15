import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, ArrowRight, BookOpen, ChevronRight } from 'lucide-react'
import { notFound } from 'next/navigation'
import { articles } from '@/lib/articles'
import { JsonLd } from '@/components/seo/json-ld'

type Props = { params: Promise<{ cat: string }> }

const categoryLabels: Record<string, string> = {
  conseils: 'Conseils',
  travaux: 'Travaux',
  zones: 'Zones',
  actualites: 'Actualités',
}

const categoryDescriptions: Record<string, string> = {
  conseils: "Guides pratiques et conseils de paysagiste pour l'entretien et la création de votre jardin dans la région lyonnaise.",
  travaux: "Articles sur les travaux de paysagisme : terrassement, maçonnerie, rénovation et création d'espaces extérieurs à Lyon.",
  zones: "Conseils de paysagisme adaptés aux communes du nord-ouest lyonnais : Saint-Didier, Caluire, Dardilly, Neuville, Francheville...",
  actualites: "Actualités du jardinage et du paysagisme dans la région lyonnaise — tendances, nouveautés, événements.",
}

export async function generateStaticParams() {
  return Object.keys(categoryLabels).map((cat) => ({ cat }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { cat } = await params
  const label = categoryLabels[cat.toLowerCase()]
  if (!label) return {}
  return {
    title: `Articles ${label} — Blog LM Espace Vert`,
    description: categoryDescriptions[cat.toLowerCase()] ?? `Tous les articles de la catégorie ${label} sur le blog de LM Espace Vert, paysagiste à Saint-Didier-au-Mont-d'Or.`,
    alternates: { canonical: `https://www.lmespacevert.fr/blog/categorie/${cat}` },
    openGraph: {
      title: `Articles ${label} — Blog LM Espace Vert`,
      description: categoryDescriptions[cat.toLowerCase()],
      url: `https://www.lmespacevert.fr/blog/categorie/${cat}`,
      type: 'website',
    },
  }
}

export default async function CategoryPage({ params }: Props) {
  const { cat } = await params
  const label = categoryLabels[cat.toLowerCase()]
  if (!label) notFound()

  // Filter articles whose category (lowercased) matches
  const filtered = articles.filter(
    (a) => a.category.toLowerCase() === label.toLowerCase()
  )

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.lmespacevert.fr' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.lmespacevert.fr/blog' },
      { '@type': 'ListItem', position: 3, name: label, item: `https://www.lmespacevert.fr/blog/categorie/${cat}` },
    ],
  }

  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />

      {/* Breadcrumb */}
      <nav aria-label="Fil d'Ariane" className="border-b border-[#EDEDED] bg-white">
        <div className="container mx-auto max-w-7xl px-4 py-3 sm:px-6">
          <ol role="list" className="flex items-center gap-2 text-sm text-[#8C8F94]">
            <li>
              <Link href="/" className="hover:text-[#2F2F2F] transition-colors">Accueil</Link>
            </li>
            <li aria-hidden="true"><ChevronRight size={12} /></li>
            <li>
              <Link href="/blog" className="hover:text-[#2F2F2F] transition-colors">Blog</Link>
            </li>
            <li aria-hidden="true"><ChevronRight size={12} /></li>
            <li><span aria-current="page" className="text-[#2F2F2F]">{label}</span></li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-16" style={{ backgroundColor: '#F7F5F0' }}>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center">
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold mb-4"
              style={{ backgroundColor: 'rgba(128, 188, 0, 0.12)', color: '#425D07' }}
            >
              <BookOpen size={14} aria-hidden="true" />
              Catégorie
            </div>
            <h1
              className="font-display text-[clamp(2rem,4vw,3rem)] font-bold"
              style={{ color: '#425D07' }}
            >
              {label}
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-[#8C8F94]">
              {categoryDescriptions[cat.toLowerCase()] ?? `Tous nos articles dans la catégorie ${label}.`}
            </p>
            <p className="mt-2 text-sm font-semibold" style={{ color: '#80BC00' }}>
              {filtered.length} article{filtered.length !== 1 ? 's' : ''}
            </p>
          </div>

          {/* Navigation vers autres catégories */}
          <nav
            className="mt-10 flex flex-wrap justify-center gap-2"
            aria-label="Autres catégories"
          >
            <Link
              href="/blog"
              className="rounded-full border border-[#D8D8D8] px-4 py-1.5 text-sm font-medium text-[#8C8F94] hover:border-[#80BC00] hover:text-[#80BC00] transition-colors"
            >
              Tout
            </Link>
            {Object.entries(categoryLabels).map(([slug, lbl]) => (
              <Link
                key={slug}
                href={`/blog/categorie/${slug}`}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  slug === cat.toLowerCase()
                    ? ''
                    : 'border border-[#D8D8D8] text-[#8C8F94] hover:border-[#80BC00] hover:text-[#80BC00]'
                }`}
                style={
                  slug === cat.toLowerCase()
                    ? { backgroundColor: '#80BC00', color: '#ffffff' }
                    : undefined
                }
                aria-current={slug === cat.toLowerCase() ? 'page' : undefined}
              >
                {lbl} ({articles.filter((a) => a.category.toLowerCase() === lbl.toLowerCase()).length})
              </Link>
            ))}
          </nav>
        </div>
      </section>

      {/* Articles grid */}
      <section className="py-14 bg-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          {filtered.length > 0 ? (
            <ul role="list" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((article) => (
                <li key={article.slug}>
                  <article className="bg-white border border-[#EDEDED] rounded-2xl overflow-hidden shadow-[rgba(0,0,0,0.06)_0px_4px_30px_0px] hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 h-full">
                    <Link
                      href={`/blog/${article.slug}`}
                      className="block h-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#80BC00]"
                    >
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={article.image}
                          alt={article.title}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-5">
                        <span
                          className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold mb-3"
                          style={{ backgroundColor: 'rgba(128,188,0,0.12)', color: '#425D07' }}
                        >
                          {article.category}
                        </span>
                        <h2
                          className="font-display font-semibold text-base leading-snug mb-2 line-clamp-2"
                          style={{ color: '#425D07' }}
                        >
                          {article.title}
                        </h2>
                        <p className="text-xs text-[#8C8F94] leading-relaxed line-clamp-2 mb-4">
                          {article.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="flex items-center gap-1 text-xs text-[#8C8F94]">
                            <Calendar size={11} aria-hidden="true" />
                            <time dateTime={article.date}>
                              {new Date(article.date).toLocaleDateString('fr-FR', {
                                day: 'numeric',
                                month: 'long',
                                year: 'numeric',
                              })}
                            </time>
                          </span>
                          <span
                            className="text-xs font-semibold flex items-center gap-1 hover:text-[#80BC00] transition-colors"
                            style={{ color: '#425D07' }}
                          >
                            <Clock size={11} aria-hidden="true" />
                            {article.readingTime}
                          </span>
                        </div>
                        <div className="mt-3 pt-3 border-t border-[#EDEDED]">
                          <span
                            className="text-xs font-semibold flex items-center gap-1"
                            style={{ color: '#425D07' }}
                          >
                            Lire l&apos;article <ArrowRight size={11} aria-hidden="true" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </article>
                </li>
              ))}
            </ul>
          ) : (
            <div className="text-center py-16">
              <p className="text-[#8C8F94] text-lg">Aucun article dans cette catégorie pour le moment.</p>
              <Link
                href="/blog"
                className="mt-6 inline-flex items-center gap-2 rounded-full px-6 py-3 font-bold text-sm text-white transition-colors hover:opacity-90"
                style={{ backgroundColor: '#80BC00' }}
              >
                <ArrowRight size={14} aria-hidden="true" />
                Voir tous les articles
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="rounded-2xl px-8 py-12 text-center text-white" style={{ backgroundColor: '#0B3D2C' }}>
            <h2 className="font-display text-2xl font-bold sm:text-3xl">
              Besoin d&apos;un paysagiste dans le nord lyonnais ?
            </h2>
            <p className="mt-3 text-white/80 max-w-xl mx-auto">
              LM Espace Vert intervient à Saint-Didier-au-Mont-d&apos;Or et dans un rayon de 20 km.
              Devis gratuit sous 48h.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Link
                href="/devis"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-sm hover:bg-white/90 transition-colors"
                style={{ color: '#0B3D2C' }}
              >
                Devis gratuit
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white px-6 py-3 font-bold text-sm text-white hover:bg-white/10 transition-colors"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
