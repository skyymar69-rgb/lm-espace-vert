import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, ChevronLeft, User } from 'lucide-react'
import { articles } from '@/lib/articles'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = articles.find((a) => a.slug === slug)
  if (!article) return {}
  return {
    title: article.title,
    description: article.excerpt,
    keywords: article.keywords,
    authors: [{ name: article.author }],
    alternates: { canonical: `https://www.lmespacevert.fr/blog/${article.slug}` },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: `https://www.lmespacevert.fr/blog/${article.slug}`,
      type: 'article',
      publishedTime: article.date,
      authors: [article.author],
      images: [{ url: article.image, alt: article.title }],
    },
  }
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params
  const article = articles.find((a) => a.slug === slug)
  if (!article) notFound()

  const related = articles
    .filter((a) => a.slug !== article.slug && a.category === article.category)
    .slice(0, 3)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.excerpt,
    image: article.image,
    datePublished: article.date,
    author: {
      '@type': 'Person',
      name: article.author,
      jobTitle: 'Paysagiste',
      worksFor: {
        '@type': 'LocalBusiness',
        name: 'LM Espace Vert',
        url: 'https://www.lmespacevert.fr',
      },
    },
    publisher: {
      '@type': 'Organization',
      name: 'LM Espace Vert',
      logo: { '@type': 'ImageObject', url: 'https://www.lmespacevert.fr/logo.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://www.lmespacevert.fr/blog/${article.slug}` },
    keywords: article.keywords.join(', '),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb */}
      <nav aria-label="Fil d'Ariane" className="border-b border-[--color-border] bg-[--color-bg-subtle]">
        <div className="container mx-auto max-w-7xl px-4 py-3 sm:px-6">
          <ol role="list" className="flex items-center gap-2 text-sm text-[--color-fg-subtle]">
            <li>
              <Link href="/" className="hover:text-[--color-fg]">Accueil</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/blog" className="hover:text-[--color-fg]">Blog</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <span aria-current="page" className="line-clamp-1 text-[--color-fg]">
                {article.title}
              </span>
            </li>
          </ol>
        </div>
      </nav>

      <div className="container mx-auto max-w-4xl px-4 py-12 sm:px-6">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-1 text-sm text-[--color-fg-muted] hover:text-[--color-green-primary] mb-8"
        >
          <ChevronLeft size={16} aria-hidden="true" />
          Retour au blog
        </Link>

        {/* Header */}
        <header className="mb-8">
          <span className="inline-block rounded-full bg-[--color-bg-subtle] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[--color-accent]">
            {article.category}
          </span>
          <h1 className="mt-4 font-display text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-tight text-[--color-fg]">
            {article.title}
          </h1>
          <p className="mt-4 text-lg text-[--color-fg-muted] leading-relaxed">
            {article.excerpt}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-[--color-fg-subtle] border-b border-[--color-border] pb-6">
            <span className="flex items-center gap-1.5">
              <User size={14} aria-hidden="true" />
              {article.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar size={14} aria-hidden="true" />
              <time dateTime={article.date}>
                {new Date(article.date).toLocaleDateString('fr-FR', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </time>
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} aria-hidden="true" />
              {article.readingTime} de lecture
            </span>
          </div>
        </header>

        {/* Hero image */}
        <div className="relative mb-10 aspect-[21/9] overflow-hidden rounded-2xl bg-[--color-bg-subtle]">
          <Image
            src={article.image}
            alt={article.title}
            fill
            priority
            sizes="(max-width: 896px) 100vw, 896px"
            className="object-cover"
          />
        </div>

        {/* Article content */}
        <div
          className="prose prose-green max-w-none prose-headings:font-display prose-headings:font-bold prose-headings:text-[--color-fg] prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3 prose-p:text-[--color-fg-muted] prose-p:leading-relaxed prose-p:mb-4 prose-ul:text-[--color-fg-muted] prose-li:mb-1 prose-strong:text-[--color-fg]"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        {/* CTA box */}
        <div className="mt-14 rounded-2xl bg-[--color-green-primary] p-8 text-white text-center">
          <h2 className="font-display text-2xl font-bold">
            Besoin d'un paysagiste près de chez vous ?
          </h2>
          <p className="mt-3 text-white/80">
            LM Espace Vert intervient dans un rayon de 20 km autour de Saint-Didier-au-Mont-d'Or.
            Devis gratuit, réponse rapide.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href="tel:+33674734698"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-[--color-green-primary] hover:bg-white/90 transition-colors"
            >
              06 74 73 46 98
            </a>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white px-6 py-3 font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Devis gratuit
            </Link>
          </div>
        </div>

        {/* Related articles */}
        {related.length > 0 && (
          <section className="mt-16" aria-labelledby="related-heading">
            <h2 id="related-heading" className="font-display text-2xl font-bold text-[--color-fg] mb-8">
              Articles similaires
            </h2>
            <ul role="list" className="grid gap-6 sm:grid-cols-3">
              {related.map((rel) => (
                <li key={rel.slug}>
                  <Link
                    href={`/blog/${rel.slug}`}
                    className="group block overflow-hidden rounded-xl border border-[--color-border] bg-[--color-bg-elevated] shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="relative aspect-[16/9] overflow-hidden bg-[--color-bg-subtle]">
                      <Image
                        src={rel.image}
                        alt={rel.title}
                        fill
                        sizes="(max-width: 640px) 100vw, 30vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-xs text-[--color-accent] font-medium">{rel.category}</p>
                      <h3 className="mt-1 font-semibold text-sm leading-snug text-[--color-fg] group-hover:text-[--color-green-primary] transition-colors line-clamp-2">
                        {rel.title}
                      </h3>
                      <p className="mt-1 text-xs text-[--color-fg-subtle]">{rel.readingTime}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </>
  )
}
