import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock } from 'lucide-react'
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

      <div className="container mx-auto max-w-7xl px-4 py-16 sm:px-6">
        {/* Header */}
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[--color-accent]">
            Conseils & Actualités
          </p>
          <h1 className="mt-2 font-display text-[clamp(2.25rem,5vw,3.75rem)] font-bold text-[--color-fg]">
            Le blog de LM Espace Vert
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-[--color-fg-muted]">
            Conseils pratiques de taille, entretien, création de jardin et aménagement paysager
            par votre paysagiste à Saint-Didier-au-Mont-d'Or.
          </p>
        </div>

        {/* Category filters */}
        <div className="mt-10 flex flex-wrap justify-center gap-2" role="navigation" aria-label="Filtrer par catégorie">
          <Link
            href="/blog"
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              !activeCategory
                ? 'bg-[--color-green-primary] text-white'
                : 'bg-[--color-bg-subtle] text-[--color-fg-muted] hover:bg-[--color-border]'
            }`}
          >
            Tous ({articles.length})
          </Link>
          {categories.map((cat) => (
            <Link
              key={cat}
              href={`/blog?categorie=${encodeURIComponent(cat)}`}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                activeCategory === cat
                  ? 'bg-[--color-green-primary] text-white'
                  : 'bg-[--color-bg-subtle] text-[--color-fg-muted] hover:bg-[--color-border]'
              }`}
            >
              {cat} ({articles.filter((a) => a.category === cat).length})
            </Link>
          ))}
        </div>

        {/* Articles grid */}
        <ul role="list" className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((article) => (
            <li key={article.slug}>
              <article>
                <Link
                  href={`/blog/${article.slug}`}
                  className="group block overflow-hidden rounded-xl border border-[--color-border] bg-[--color-bg-elevated] shadow-sm transition-shadow hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--color-focus]"
                >
                  <div className="relative aspect-[16/9] overflow-hidden bg-[--color-bg-subtle]">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <span className="inline-block rounded-full bg-[--color-bg-subtle] px-2.5 py-0.5 text-xs font-medium text-[--color-accent]">
                      {article.category}
                    </span>
                    <h2 className="mt-2 font-display text-lg font-semibold leading-snug text-[--color-fg] group-hover:text-[--color-green-primary] transition-colors">
                      {article.title}
                    </h2>
                    <p className="mt-2 line-clamp-2 text-sm text-[--color-fg-muted]">
                      {article.excerpt}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center gap-4 text-xs text-[--color-fg-subtle]">
                        <span className="flex items-center gap-1">
                          <Calendar size={12} aria-hidden="true" />
                          <time dateTime={article.date}>
                            {new Date(article.date).toLocaleDateString('fr-FR', {
                              day: 'numeric',
                              month: 'long',
                              year: 'numeric',
                            })}
                          </time>
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={12} aria-hidden="true" />
                          {article.readingTime}
                        </span>
                      </div>
                      <span className="text-xs font-medium text-[--color-accent] group-hover:underline">
                        Lire →
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            </li>
          ))}
        </ul>

        {filtered.length === 0 && (
          <p className="mt-16 text-center text-[--color-fg-muted]">
            Aucun article dans cette catégorie.
          </p>
        )}
      </div>
    </>
  )
}
