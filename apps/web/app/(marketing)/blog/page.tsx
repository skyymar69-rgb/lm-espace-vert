import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react'
import { articles, categories } from '@/lib/articles'

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
  },
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
      {/* Breadcrumb */}
      <nav aria-label="Fil d'Ariane" className="border-b border-[--color-border] bg-[--color-bg-subtle]">
        <div className="container mx-auto max-w-7xl px-4 py-3 sm:px-6">
          <ol role="list" className="flex items-center gap-2 text-sm text-[--color-fg-subtle]">
            <li>
              <Link href="/" className="hover:text-[--color-fg] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[--color-focus]">
                Accueil
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li><span aria-current="page" className="text-[--color-fg]">Blog</span></li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-[--color-bg-subtle] py-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold mb-4" style={{ backgroundColor: '#EEF4EE', color: '#275524' }}>
              <BookOpen size={14} aria-hidden="true" />
              Conseils & Actualités
            </div>
            <h1 className="font-display text-[clamp(2.25rem,5vw,3.75rem)] font-bold text-[--color-fg]">
              Blog &amp; Conseils Jardinage
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-[--color-fg-muted]">
              Conseils de paysagiste, guides saisonniers et tendances pour votre jardin.
            </p>
          </div>

          {/* Category filters */}
          <div className="mt-10 flex flex-wrap justify-center gap-2" role="navigation" aria-label="Filtrer par catégorie">
            <Link
              href="/blog"
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                !activeCategory
                  ? ''
                  : 'border border-[--color-border] text-[--color-fg-muted] hover:border-[#275524] hover:text-[#275524]'
              }`}
              style={!activeCategory ? { backgroundColor: '#275524', color: '#fff' } : undefined}
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
                    : 'border border-[--color-border] text-[--color-fg-muted] hover:border-[#275524] hover:text-[#275524]'
                }`}
                style={activeCategory === cat ? { backgroundColor: '#275524', color: '#fff' } : undefined}
              >
                {cat} ({articles.filter((a) => a.category === cat).length})
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured article */}
      {featuredArticle && (
        <section className="bg-white py-12">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6">
            <Link
              href={`/blog/${featuredArticle.slug}`}
              className="group block overflow-hidden rounded-2xl border border-[--color-border] bg-[--color-bg-elevated] shadow-sm hover:shadow-lg transition-all duration-300 lg:flex"
            >
              <div className="relative h-72 overflow-hidden bg-[--color-bg-subtle] lg:h-auto lg:w-1/2 flex-shrink-0">
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
                  style={{ backgroundColor: '#EEF4EE', color: '#275524' }}
                >
                  {featuredArticle.category}
                </span>
                <h2 className="font-display text-2xl font-bold leading-tight text-[--color-fg] lg:text-3xl group-hover:text-[#275524] transition-colors">
                  {featuredArticle.title}
                </h2>
                <p className="mt-3 text-[--color-fg-muted] leading-relaxed line-clamp-3">
                  {featuredArticle.excerpt}
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-[--color-fg-subtle]">
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
                    className="inline-flex items-center gap-1.5 text-sm font-semibold"
                    style={{ color: '#275524' }}
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
      <section className="bg-[--color-bg-subtle] py-12">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          {restArticles.length > 0 && (
            <ul role="list" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {restArticles.map((article) => (
                <li key={article.slug}>
                  <article className="rounded-2xl overflow-hidden bg-[--color-bg-elevated] border border-[--color-border] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 h-full">
                    <Link href={`/blog/${article.slug}`} className="block h-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--color-focus]">
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
                          style={{ backgroundColor: '#EEF4EE', color: '#275524' }}
                        >
                          {article.category}
                        </span>
                        <h3 className="font-display font-semibold text-[--color-fg] text-base leading-snug mb-2 line-clamp-2">
                          {article.title}
                        </h3>
                        <p className="text-xs text-[--color-fg-muted] leading-relaxed line-clamp-2 mb-4">
                          {article.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-[--color-fg-subtle]">
                            <time dateTime={article.date}>
                              {new Date(article.date).toLocaleDateString('fr-FR', {
                                day: 'numeric',
                                month: 'long',
                                year: 'numeric',
                              })}
                            </time>
                          </span>
                          <span
                            className="text-xs font-semibold flex items-center gap-1"
                            style={{ color: '#275524' }}
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
            <p className="mt-16 text-center text-[--color-fg-muted]">
              Aucun article dans cette catégorie.
            </p>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="rounded-2xl px-8 py-12 text-center text-white" style={{ backgroundColor: '#275524' }}>
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
                style={{ color: '#275524' }}
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
