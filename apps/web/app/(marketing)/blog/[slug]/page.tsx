import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { ArrowRight, Clock, User, Tag } from 'lucide-react'
import { JsonLd } from '@/components/seo/json-ld'
import { ReadingProgress } from '@/components/ui/reading-progress'
import { articles } from '@/lib/articles'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const article = articles.find((a) => a.slug === slug)
  if (!article) return {}

  const description = article.excerpt.length > 160
    ? article.excerpt.slice(0, 157) + '...'
    : article.excerpt

  return {
    title: `${article.title} | LM Espace Vert`,
    description,
    alternates: { canonical: `https://www.lmespacevert.fr/blog/${article.slug}` },
    openGraph: {
      title: article.title,
      description,
      url: `https://www.lmespacevert.fr/blog/${article.slug}`,
      type: 'article',
      publishedTime: article.date,
      modifiedTime: article.updatedAt ?? article.date,
      authors: ['Léo Maurice'],
      images: [
        {
          url: `https://www.lmespacevert.fr${article.image}`,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description,
      images: [`https://www.lmespacevert.fr${article.image}`],
    },
  }
}

export default async function BlogArticlePage({ params }: PageProps) {
  const { slug } = await params
  const article = articles.find((a) => a.slug === slug)
  if (!article) notFound()

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.lmespacevert.fr' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.lmespacevert.fr/blog' },
      { '@type': 'ListItem', position: 3, name: article.title, item: `https://www.lmespacevert.fr/blog/${article.slug}` },
    ],
  }

  const blogPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.excerpt,
    image: `https://www.lmespacevert.fr${article.image}`,
    url: `https://www.lmespacevert.fr/blog/${article.slug}`,
    datePublished: article.date,
    dateModified: article.updatedAt ?? article.date,
    inLanguage: 'fr-FR',
    author: {
      '@type': 'Person',
      name: 'Léo Maurice',
      jobTitle: 'Paysagiste fondateur',
      url: 'https://www.lmespacevert.fr/a-propos',
    },
    publisher: {
      '@type': 'LocalBusiness',
      '@id': 'https://www.lmespacevert.fr/#business',
      name: 'LM Espace Vert',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.lmespacevert.fr/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.lmespacevert.fr/blog/${article.slug}`,
    },
    keywords: article.keywords.join(', '),
  }

  const relatedArticles = articles
    .filter((a) => a.slug !== article.slug)
    .slice(0, 3)

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={blogPostingSchema} />

      {/* Progress bar de lecture */}
      <ReadingProgress targetId="article-body" />

      {/* Breadcrumb */}
      <nav aria-label="Fil d'Ariane" className="border-b border-[#EDEDED] bg-white">
        <div className="container mx-auto max-w-7xl px-4 py-3 sm:px-6">
          <ol role="list" className="flex items-center gap-1.5 text-sm" style={{ color: '#8C8F94' }}>
            <li>
              <Link href="/" className="transition-colors hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#80BC00]" style={{ color: '#8C8F94' }}>
                Accueil
              </Link>
            </li>
            <li aria-hidden="true" className="select-none">›</li>
            <li>
              <Link href="/blog" className="transition-colors hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#80BC00]" style={{ color: '#8C8F94' }}>
                Blog
              </Link>
            </li>
            <li aria-hidden="true" className="select-none">›</li>
            <li className="min-w-0 flex-1">
              <span aria-current="page" className="line-clamp-1 font-medium" style={{ color: '#2F2F2F' }}>
                {article.title}
              </span>
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero image */}
      <div className="relative h-72 sm:h-96 md:h-[28rem] w-full overflow-hidden">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Multi-stop gradient overlay pour meilleure lisibilité */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(11,61,44,0.92) 0%, rgba(11,61,44,0.55) 40%, rgba(11,61,44,0.15) 70%, transparent 100%)' }}
        />
        <div className="absolute bottom-0 left-0 right-0 container mx-auto max-w-4xl px-4 sm:px-6 pb-10">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span
              className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold text-white"
              style={{ backgroundColor: '#80BC00' }}
            >
              {article.category}
            </span>
            {article.readingTime && (
              <span
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold"
                style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#ffffff', backdropFilter: 'blur(4px)' }}
              >
                <Clock size={11} aria-hidden="true" />
                {article.readingTime}
              </span>
            )}
          </div>
          <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
            {article.title}
          </h1>
        </div>
      </div>

      {/* Meta bar */}
      <div className="border-b border-[#EDEDED] bg-white">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 py-4">
          <div className="flex flex-wrap items-center gap-4 text-sm" style={{ color: '#8C8F94' }}>
            <span className="flex items-center gap-1.5">
              <User size={14} aria-hidden="true" />
              <span className="font-medium" style={{ color: '#2F2F2F' }}>{article.author}</span>
            </span>
            <span className="flex items-center gap-1.5">
              📅&nbsp;
              <time dateTime={article.date}>
                {new Date(article.date).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
              </time>
            </span>
            <span
              className="inline-flex items-center gap-1.5 rounded-full px-3 py-0.5 text-xs font-semibold"
              style={{ backgroundColor: 'rgba(128,188,0,0.12)', color: '#425D07' }}
            >
              <Clock size={12} aria-hidden="true" />
              {article.readingTime} de lecture
            </span>
          </div>
        </div>
      </div>

      {/* Article content */}
      <article id="article-body" className="bg-white py-12">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6">
          {/* Lead */}
          <p className="text-lg leading-relaxed mb-8 font-medium" style={{ color: '#425D07' }}>
            {article.excerpt}
          </p>

          {/* Body HTML */}
          <div
            className="prose prose-green max-w-none text-[#2F2F2F] leading-relaxed
              [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-10 [&_h2]:mb-4
              [&_h3]:font-display [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:mt-8 [&_h3]:mb-3
              [&_p]:mb-4 [&_p]:text-[#2F2F2F]
              [&_ul]:pl-5 [&_ul]:mb-4 [&_li]:mb-1 [&_li]:list-disc
              [&_ol]:pl-5 [&_ol]:mb-4 [&_ol>li]:mb-1 [&_ol>li]:list-decimal
              [&_a]:underline [&_a]:font-medium
              [&_strong]:font-semibold"
            style={{'--tw-prose-links': '#425D07'} as React.CSSProperties}
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Keywords */}
          {article.keywords.length > 0 && (
            <div className="mt-10 pt-8 border-t border-[#EDEDED]">
              <div className="flex flex-wrap items-center gap-2">
                <Tag size={14} style={{ color: '#8C8F94' }} aria-hidden="true" />
                {article.keywords.map((kw) => (
                  <span
                    key={kw}
                    className="rounded-full px-3 py-1 text-xs font-medium border border-[#EDEDED]"
                    style={{ color: '#425D07', backgroundColor: '#F7F5F0' }}
                  >
                    {kw}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      {/* Author card */}
      <section className="bg-white pb-12">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6">
          <div
            className="rounded-2xl border p-6 flex items-start gap-5"
            style={{ backgroundColor: '#F7F5F0', borderColor: 'rgba(128,188,0,0.25)' }}
          >
            <div
              className="flex-shrink-0 w-16 h-16 rounded-full border-2 overflow-hidden shadow-md"
              style={{ borderColor: '#80BC00' }}
            >
              <Image
                src="/images/leo-portrait.webp"
                alt="Léo Maurice, fondateur de LM Espace Vert"
                width={64}
                height={64}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-0.5">
                <p className="font-bold text-sm" style={{ color: '#2F2F2F' }}>{article.author}</p>
                <span
                  className="rounded-full px-2 py-0.5 text-[10px] font-semibold"
                  style={{ backgroundColor: 'rgba(128,188,0,0.15)', color: '#425D07' }}
                >
                  Auteur
                </span>
              </div>
              <p className="text-xs mb-2 font-medium" style={{ color: '#425D07' }}>Fondateur &amp; paysagiste — LM Espace Vert</p>
              <p className="text-sm leading-relaxed" style={{ color: '#8C8F94' }}>
                Paysagiste professionnel à Saint-Didier-au-Mont-d&apos;Or depuis 2019. Certifié CERTIPHYTO, agréé SAP. Spécialiste des jardins dans le nord-ouest lyonnais, il partage ici son expertise au fil des saisons.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-14 text-center relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0B3D2C 0%, #1a5c3a 50%, #425D07 100%)' }}
      >
        {/* Decorative circles */}
        <div
          className="absolute -top-16 -right-16 w-64 h-64 rounded-full opacity-10 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #80BC00, transparent)' }}
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full opacity-10 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #80BC00, transparent)' }}
          aria-hidden="true"
        />
        <div className="container relative mx-auto max-w-xl px-4 sm:px-6">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-4"
            style={{ backgroundColor: 'rgba(128,188,0,0.2)', color: '#80BC00' }}
          >
            ✅ Gratuit &amp; sans engagement
          </div>
          <h2 className="font-display text-2xl font-bold text-white mb-2">
            Un projet de jardin à Lyon nord ?
          </h2>
          <p className="mb-6 text-sm" style={{ color: 'rgba(255,255,255,0.75)' }}>
            Devis gratuit · Visite sur place offerte · Réponse sous 24h · Rayon 20 km
          </p>
          <Link
            href="/devis"
            className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-bold transition-all duration-200 hover:scale-105 hover:shadow-lg"
            style={{ backgroundColor: '#80BC00', color: '#ffffff', boxShadow: '0 4px 20px rgba(128,188,0,0.4)' }}
          >
            Demander un devis gratuit <ArrowRight size={14} aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* Related articles */}
      {relatedArticles.length > 0 && (
        <section className="py-16" style={{ backgroundColor: '#F7F5F0' }}>
          <div className="container mx-auto max-w-7xl px-4 sm:px-6">
            <div className="flex items-center gap-3 mb-8">
              <div
                className="w-1 h-8 rounded-full"
                style={{ backgroundColor: '#80BC00' }}
                aria-hidden="true"
              />
              <h2 className="font-display text-2xl font-bold" style={{ color: '#425D07' }}>
                À lire aussi
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedArticles.map((a) => (
                <Link
                  key={a.slug}
                  href={`/blog/${a.slug}`}
                  className="group rounded-2xl border border-[#EDEDED] overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={a.image}
                      alt={a.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: 'linear-gradient(to top, rgba(11,61,44,0.25) 0%, transparent 60%)' }}
                      aria-hidden="true"
                    />
                  </div>
                  <div className="p-5">
                    <span
                      className="inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider mb-2"
                      style={{ backgroundColor: 'rgba(128,188,0,0.10)', color: '#425D07' }}
                    >
                      {a.category}
                    </span>
                    <h3
                      className="font-bold text-base mt-1 mb-2 line-clamp-2 group-hover:text-[#80BC00] transition-colors"
                      style={{ color: '#2F2F2F' }}
                    >
                      {a.title}
                    </h3>
                    <p className="text-sm line-clamp-2 mb-3" style={{ color: '#8C8F94' }}>{a.excerpt}</p>
                    <span
                      className="inline-flex items-center gap-1.5 text-xs font-semibold transition-all duration-200 group-hover:gap-2.5"
                      style={{ color: '#425D07' }}
                    >
                      Lire l&apos;article <ArrowRight size={12} aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
