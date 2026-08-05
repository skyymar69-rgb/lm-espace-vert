import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, ArrowRight, BookOpen, Leaf } from 'lucide-react'
import { articles, categories } from '@/lib/articles'
import { JsonLd } from '@/components/seo/json-ld'

export const metadata: Metadata = {
  title: 'Blog jardinage & paysagisme — Conseils de votre paysagiste Lyon nord',
  description:
    'Découvrez nos conseils d\'expert en jardinage et paysagisme : taille, entretien saisonnier, création de jardin et aménagements paysagers. Paysagiste LM Espace Vert à Saint-Didier-au-Mont-d\'Or — 30+ articles pratiques, guides et inspirations.',
  alternates: { canonical: 'https://www.lm-espace-vert.fr/blog' },
  openGraph: {
    title: 'Blog — Conseils jardinage par LM Espace Vert',
    description: 'Conseils pratiques de votre paysagiste : taille, entretien, création de jardin, plantes...',
    url: 'https://www.lm-espace-vert.fr/blog',
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
    url: `https://www.lm-espace-vert.fr/blog/${article.slug}`,
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
          <ol role="list" className="flex items-center gap-1.5 text-sm" style={{ color: '#8C8F94' }}>
            <li>
              <Link
                href="/"
                className="transition-colors hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#749A30]"
                style={{ color: '#8C8F94' }}
              >
                Accueil
              </Link>
            </li>
            <li aria-hidden="true" className="select-none">›</li>
            <li>
              <span aria-current="page" className="font-medium" style={{ color: '#2F2F2F' }}>
                Blog &amp; Conseils
              </span>
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-16" style={{ backgroundColor: '#F4F1E9' }}>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold mb-4" style={{ backgroundColor: 'rgba(116,154,48, 0.12)', color: '#4A6320' }}>
              <Leaf size={14} aria-hidden="true" />
              Conseils &amp; Actualités Jardinage
            </div>
            <h1 className="font-display text-[clamp(2.25rem,5vw,3.75rem)] font-bold" style={{ color: '#4A6320' }}>
              📝 Blog &amp; Conseils Jardinage
            </h1>
            <p className="mx-auto mt-4 max-w-2xl leading-relaxed" style={{ color: '#8C8F94' }}>
              Conseils de paysagiste, guides saisonniers et inspirations pour sublimer votre jardin — par l&apos;équipe LM Espace Vert.
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-4 text-sm" style={{ color: '#8C8F94' }}>
              <span className="flex items-center gap-1.5">
                <BookOpen size={14} aria-hidden="true" />
                {articles.length} articles
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar size={14} aria-hidden="true" />
                Mis à jour régulièrement
              </span>
            </div>
          </div>

          {/* Category filters — filtre rapide par query param */}
          <div className="mt-10 flex flex-wrap justify-center gap-2" role="navigation" aria-label="Filtrer par catégorie">
            <Link
              href="/blog"
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200 ${
                !activeCategory
                  ? ''
                  : 'border border-[#D8D8D8] hover:border-[#749A30] hover:scale-[1.03]'
              }`}
              style={
                !activeCategory
                  ? { backgroundColor: '#749A30', color: '#ffffff', boxShadow: '0 4px 14px rgba(116,154,48,0.35)' }
                  : { color: '#8C8F94' }
              }
            >
              Tout ({articles.length})
            </Link>
            {categories.map((cat) => (
              <Link
                key={cat}
                href={`/blog?categorie=${encodeURIComponent(cat)}`}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat
                    ? ''
                    : 'border border-[#D8D8D8] hover:border-[#749A30] hover:scale-[1.03]'
                }`}
                style={
                  activeCategory === cat
                    ? { backgroundColor: '#749A30', color: '#ffffff', boxShadow: '0 4px 14px rgba(116,154,48,0.35)' }
                    : { color: '#8C8F94' }
                }
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
                  className="rounded-full border border-[#EDEDED] px-3 py-1 text-xs font-medium text-[#8C8F94] hover:border-[#749A30] hover:text-[#749A30] transition-colors"
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
              <div className="relative h-72 overflow-hidden bg-[#F4F1E9] lg:h-auto lg:w-1/2 flex-shrink-0">
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
                  style={{ backgroundColor: 'rgba(116,154,48,0.12)', color: '#4A6320' }}
                >
                  {featuredArticle.category}
                </span>
                <h2 className="font-display text-2xl font-bold leading-tight lg:text-3xl group-hover:text-[#749A30] transition-colors" style={{ color: '#4A6320' }}>
                  {featuredArticle.title}
                </h2>
                <p className="mt-3 text-[#8C8F94] leading-relaxed line-clamp-3">
                  {featuredArticle.excerpt}
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4 text-xs" style={{ color: '#8C8F94' }}>
                  <span className="flex items-center gap-1.5">
                    📅&nbsp;
                    <time dateTime={featuredArticle.date}>
                      {new Date(featuredArticle.date).toLocaleDateString('fr-FR', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      })}
                    </time>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={12} aria-hidden="true" />
                    {featuredArticle.readingTime}
                  </span>
                </div>
                <div className="mt-5">
                  <span
                    className="inline-flex items-center gap-1.5 text-sm font-semibold transition-all duration-200 group-hover:gap-3"
                    style={{ color: '#4A6320' }}
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
      <section className="py-12" style={{ backgroundColor: '#F4F1E9' }}>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          {restArticles.length > 0 && (
            <ul role="list" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {restArticles.map((article) => (
                <li key={article.slug}>
                  <article className="group bg-white border border-[#EDEDED] rounded-2xl overflow-hidden shadow-[rgba(0,0,0,0.06)_0px_4px_30px_0px] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">
                    <Link href={`/blog/${article.slug}`} className="block h-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#749A30]">
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={article.image}
                          alt={article.title}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        {/* Overlay léger au hover */}
                        <div
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          style={{ background: 'linear-gradient(to top, rgba(36,50,56,0.3) 0%, transparent 60%)' }}
                          aria-hidden="true"
                        />
                      </div>
                      <div className="p-5">
                        <span
                          className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold mb-3 border"
                          style={{ backgroundColor: 'rgba(116,154,48,0.10)', color: '#4A6320', borderColor: 'rgba(116,154,48,0.25)' }}
                        >
                          {article.category}
                        </span>
                        <h3 className="font-display font-semibold text-base leading-snug mb-2 line-clamp-2 group-hover:text-[#749A30] transition-colors" style={{ color: '#4A6320' }}>
                          {article.title}
                        </h3>
                        <p className="text-xs leading-relaxed line-clamp-2 mb-4" style={{ color: '#8C8F94' }}>
                          {article.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="flex items-center gap-1 text-xs" style={{ color: '#8C8F94' }}>
                            📅&nbsp;
                            <time dateTime={article.date}>
                              {new Date(article.date).toLocaleDateString('fr-FR', {
                                day: 'numeric',
                                month: 'long',
                                year: 'numeric',
                              })}
                            </time>
                          </span>
                          <span
                            className="text-xs font-semibold flex items-center gap-1 transition-all duration-200 group-hover:gap-2"
                            style={{ color: '#4A6320' }}
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
          <div className="rounded-2xl px-8 py-12 text-center text-white" style={{ backgroundColor: '#243238' }}>
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
                style={{ color: '#243238' }}
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
