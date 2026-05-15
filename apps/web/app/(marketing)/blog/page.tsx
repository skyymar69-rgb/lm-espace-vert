import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react'
import { articles, categories } from '@/lib/articles'
import { JsonLd } from '@/components/seo/json-ld'

export const metadata: Metadata = {
  title: 'Blog jardinage & paysagisme — Conseils de votre paysagiste Lyon nord',
  description:
    'Conseils de taille, entretien, création de jardin et aménagement paysager par LM Espace Vert, paysagiste à Saint-Didier-au-Mont-d\'Or. 30+ articles pratiques.',
  alternates: { canonical: 'https://www.lmespacevert.fr/blog' },
  openGraph: {
    title: 'Blog — Conseils jardinage par LM Espace Vert',
    description: 'Conseils pratiques de votre paysagiste : taille, entretien, création de jardin, plantes...',
    url: 'https://www.lmespacevert.fr/blog',
    type: 'website',
    images: [{ url: '/images/blog-jardin-printemps.webp', width: 1200, height: 630, alt: 'Blog jardinage LM Espace Vert' }],
  },
}

// #19 — ItemList schema liste des articles du blog
const blogItemListJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Conseils jardinage — LM Espace Vert',
  itemListElement: articles.slice(0, 5).map((article, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: article.title,
    url: `https://www.lmespacevert.fr/blog/${article.slug}`,
  })),
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ categorie?: string }>
}) {
  const { categorie } = await searchParams
  const activeCategory = categorie ?? null
  const filtered = activeCategory
    ? articles.filter((a) => a.category === activeCategory)
    : articles

  const [featuredArticle, ...restArticles] = filtered

  return (
    <>
      <JsonLd data={blogItemListJsonLd} />
      {/* Breadcrumb */}
      <nav aria-label="Fil d'Ariane" className="border-b border-[#EDEDED] bg-white">
        <div className="container mx-auto max-w-7xl px-4 py-3 sm:px-6">
          <ol role="list" className="flex items-center gap-2 text-sm text-[#8C8F94]">
            <li>
              <Link href="/" className="hover:text-[#2F2F2F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#80BC00]">
                Accueil
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li><span aria-current="page" className="text-[#2F2F2F]">Blog</span></li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-16" style={{ backgroundColor: '#F7F5F0' }}>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold mb-4" style={{ backgroundColor: 'rgba(128, 188, 0, 0.12)', color: '#425D07' }}>
              <BookOpen size={14} aria-hidden="true" />
              Conseils & Actualités
            </div>
            <h1 className="font-display text-[clamp(2.25rem,5vw,3.75rem)] font-bold" style={{ color: '#425D07' }}>
              Blog &amp; Conseils Jardinage
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-[#8C8F94]">
              Conseils de paysagiste, guides saisonniers et tendances pour votre jardin.
            </p>
          </div>

          {/* Category filters — filtre rapide par query param */}
          <div className="mt-10 flex flex-wrap justify-center gap-2" role="navigation" aria-label="Filtrer par catégorie">
            <Link
              href="/blog"
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                !activeCategory
                  ? ''
                  : 'border border-[#D8D8D8] text-[#8C8F94] hover:border-[#80BC00] hover:text-[#80BC00]'
              }`}
              style={!activeCategory ? { backgroundColor: '#80BC00', color: '#ffffff', boxShadow: 'rgb(128, 188, 0) 0px 0px 25px -14px' } : undefined}
            >
              Tout ({articles.length})
            </Link>
            {categories.map((cat) => (
              <Link
                key={cat}
                href={`/blog?categorie=${encodeURIComponent(cat)}`}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? ''
                    : 'border border-[#D8D8D8] text-[#8C8F94] hover:border-[#80BC00] hover:text-[#80BC00]'
                }`}
                style={activeCategory === cat ? { backgroundColor: '#80BC00', color: '#ffffff', boxShadow: 'rgb(128, 188, 0) 0px 0px 25px -14px' } : undefined}
              >
                {cat} ({articles.filter((a) => a.category === cat).length})
              </Link>
            ))}
          </div>

          {/* Liens vers les pages catégories dédiées (pour le SEO) */}
          <div className="mt-4 flex flex-wrap justify-center gap-2" aria-label="Pages catégories">
            {[
              { slug: 'conseils', label: 'Conseils' },
              { slug: 'travaux', label: 'Travaux' },
              { slug: 'zones', label: 'Zones' },
              { slug: 'actualites', label: 'Actualités' },
            ].map(({ slug, label }) => {
              const count = articles.filter((a) => a.category.toLowerCase() === label.toLowerCase()).length
              return (
                <Link
                  key={slug}
                  href={`/blog/categorie/${slug}`}
                  className="rounded-full border border-[#EDEDED] px-3 py-1 text-xs font-medium text-[#8C8F94] hover:border-[#80BC00] hover:text-[#80BC00] transition-colors"
                >
                  → {label} ({count})
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured article */}
      {featuredArticle && (
        <section className="bg-white py-12">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6">
            <Link
              href={`/blog/${featuredArticle.slug}`}
              className="group block overflow-hidden rounded-2xl border border-[#EDEDED] bg-white shadow-sm hover:shadow-lg transition-all duration-300 lg:flex"
            >
              <div className="relative h-72 overflow-hidden bg-[#F7F5F0] lg:h-auto lg:w-1/2 flex-shrink-0">
                <Image
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col justify-center p-8 lg:p-10">
                <span
                  className="inline-flex items-center self-start rounded-full px-3 py-1 text-xs font-semibold mb-4"
                  style={{ backgroundColor: 'rgba(128,188,0,0.12)', color: '#425D07' }}
                >
                  {featuredArticle.category}
                </span>
                <h2 className="font-display text-2xl font-bold leading-tight lg:text-3xl group-hover:text-[#80BC00] transition-colors" style={{ color: '#425D07' }}>
                  {featuredArticle.title}
                </h2>
                <p className="mt-3 text-[#8C8F94] leading-relaxed line-clamp-3">
                  {featuredArticle.excerpt}
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-[#8C8F94]">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} aria-hidden="true" />
                    <time dateTime={featuredArticle.date}>
                      {new Date(featuredArticle.date).toLocaleDateString('fr-FR', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      })}
                    </time>
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} aria-hidden="true" />
                    {featuredArticle.readingTime}
                  </span>
                </div>
                <div className="mt-5">
                  <span
                    className="inline-flex items-center gap-1.5 text-sm font-semibold hover:text-[#80BC00] transition-colors"
                    style={{ color: '#425D07' }}
                  >
                    Lire l&apos;article <ArrowRight size={14} aria-hidden="true" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Articles grid */}
      <section className="py-12" style={{ backgroundColor: '#F7F5F0' }}>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          {restArticles.length > 0 && (
            <ul role="list" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {restArticles.map((article) => (
                <li key={article.slug}>
                  <article className="bg-white border border-[#EDEDED] rounded-2xl overflow-hidden shadow-[rgba(0,0,0,0.06)_0px_4px_30px_0px] hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 h-full">
                    <Link href={`/blog/${article.slug}`} className="block h-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#80BC00]">
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
                        <h3 className="font-display font-semibold text-base leading-snug mb-2 line-clamp-2" style={{ color: '#425D07' }}>
                          {article.title}
                        </h3>
                        <p className="text-xs text-[#8C8F94] leading-relaxed line-clamp-2 mb-4">
                          {article.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-[#8C8F94]">
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
                            Lire <ArrowRight size={11} aria-hidden="true" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </article>
                </li>
              ))}
            </ul>
          )}

          {filtered.length === 0 && (
            <p className="mt-16 text-center text-[#8C8F94]">
              Aucun article dans cette catégorie.
            </p>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="rounded-2xl px-8 py-12 text-center text-white" style={{ backgroundColor: '#0B3D2C' }}>
            <h2 className="font-display text-2xl font-bold sm:text-3xl">
              Restez informé des conseils jardinage
            </h2>
            <p className="mt-3 text-white/80 max-w-xl mx-auto">
              Découvrez nos guides pratiques, astuces saisonnières et inspirations paysagères directement.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-sm hover:bg-white/90 transition-colors"
                style={{ color: '#0B3D2C' }}
              >
                Nous contacter
              </Link>
              <Link
                href="/devis"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white px-6 py-3 font-bold text-sm text-white hover:bg-white/10 transition-colors"
              >
                Devis gratuit
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
