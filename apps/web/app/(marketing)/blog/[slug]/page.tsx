import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, ChevronLeft, User, Tag, ArrowRight, Phone } from 'lucide-react'
import { articles } from '@/lib/articles'
import { ShareButtons } from '@/components/ui/share-buttons'
import { ReadingProgress } from '@/components/ui/reading-progress'
import { TableOfContents } from '@/components/ui/table-of-contents'
import { SeasonalTip } from '@/components/ui/seasonal-tip'

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

  const others = related.length < 3
    ? [...related, ...articles.filter((a) => a.slug !== article.slug && a.category !== article.category).slice(0, 3 - related.length)]
    : related

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
      worksFor: { '@type': 'LocalBusiness', name: 'LM Espace Vert', url: 'https://www.lmespacevert.fr' },
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ReadingProgress targetId="article-content" />

      {/* Breadcrumb */}
      <nav aria-label="Fil d'Ariane" className="border-b border-[--color-border] bg-[--color-bg-subtle]">
        <div className="container mx-auto max-w-7xl px-4 py-3 sm:px-6">
          <ol role="list" className="flex items-center gap-2 text-sm text-[--color-fg-subtle]">
            <li><Link href="/" className="hover:text-[--color-fg]">Accueil</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href="/blog" className="hover:text-[--color-fg]">Blog</Link></li>
            <li aria-hidden="true">/</li>
            <li><span aria-current="page" className="line-clamp-1 text-[--color-fg]">{article.title}</span></li>
          </ol>
        </div>
      </nav>

      <div className="bg-white py-12 px-4">
        <div className="container mx-auto max-w-7xl sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[1fr_300px]">

            {/* Main content */}
            <div className="max-w-4xl">
              <Link
                href="/blog"
                className="inline-flex items-center gap-1 text-sm text-[--color-fg-muted] hover:text-[#275524] mb-8 transition-colors"
              >
                <ChevronLeft size={16} aria-hidden="true" />
                Retour au blog
              </Link>

              {/* Hero image */}
              <div className="relative mb-8 h-80 sm:h-96 overflow-hidden rounded-2xl bg-[--color-bg-subtle]">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  priority
                  sizes="(max-width: 896px) 100vw, 840px"
                  className="object-cover"
                />
              </div>

              {/* Header */}
              <header className="mb-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span
                    className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold"
                    style={{ backgroundColor: '#EEF4EE', color: '#275524' }}
                  >
                    {article.category}
                  </span>
                  {article.keywords.slice(0, 2).map((kw) => (
                    <span key={kw} className="inline-flex items-center gap-1 rounded-full border border-[--color-border] px-3 py-1 text-xs text-[--color-fg-muted]">
                      <Tag size={9} aria-hidden="true" /> {kw}
                    </span>
                  ))}
                </div>

                <h1 className="font-display text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-tight text-[--color-fg]">
                  {article.title}
                </h1>
                <p className="mt-4 text-lg text-[--color-fg-muted] leading-relaxed">{article.excerpt}</p>

                <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-[--color-fg-subtle] border-b border-[--color-border] pb-6">
                  <span className="flex items-center gap-1.5">
                    <User size={14} aria-hidden="true" />
                    <span className="font-medium text-[--color-fg]">{article.author}</span>
                    <span>· Paysagiste LM Espace Vert</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} aria-hidden="true" />
                    <time dateTime={article.date}>
                      {new Date(article.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </time>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={14} aria-hidden="true" />
                    {article.readingTime} de lecture
                  </span>
                </div>
              </header>

              {/* TOC (mobile) */}
              <div className="mb-8 lg:hidden">
                <TableOfContents contentId="article-content" />
              </div>

              {/* Article content */}
              <article id="article-content" className="prose-article">
                <div dangerouslySetInnerHTML={{ __html: article.content }} />
              </article>

              {/* Tags */}
              <div className="mt-10 pt-6 border-t border-[--color-border]">
                <p className="text-xs font-semibold uppercase tracking-wider text-[--color-fg-subtle] mb-3 flex items-center gap-1.5">
                  <Tag size={12} aria-hidden="true" /> Mots-clés
                </p>
                <div className="flex flex-wrap gap-2">
                  {article.keywords.map((kw) => (
                    <span
                      key={kw}
                      className="rounded-full border border-[--color-border] px-3 py-1 text-xs text-[--color-fg-muted]"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </div>

              {/* Share */}
              <div className="mt-8 pt-6 border-t border-[--color-border]">
                <ShareButtons
                  title={article.title}
                  url={`https://www.lmespacevert.fr/blog/${article.slug}`}
                  text={article.excerpt}
                />
              </div>

              {/* Author bio */}
              <div className="mt-10 rounded-2xl border border-[--color-border] bg-[--color-bg-subtle] p-6 flex gap-5 items-start">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-white font-display font-bold text-xl flex-shrink-0"
                  style={{ backgroundColor: '#275524' }}
                >
                  LM
                </div>
                <div>
                  <p className="font-bold text-[--color-fg]">{article.author}</p>
                  <p className="text-sm font-medium" style={{ color: '#275524' }}>Paysagiste — LM Espace Vert</p>
                  <p className="mt-2 text-sm text-[--color-fg-muted] leading-relaxed">
                    Artisan paysagiste passionné basé à Saint-Didier-au-Mont-d&apos;Or. Spécialisé en création,
                    entretien et aménagement paysager dans le nord-ouest lyonnais depuis plus de 5 ans.
                  </p>
                  <div className="mt-3 flex gap-2 flex-wrap">
                    <Link
                      href="/a-propos"
                      className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold border transition-colors"
                      style={{ borderColor: '#275524', color: '#275524' }}
                    >
                      Profil complet
                    </Link>
                    <a
                      href="tel:+33674734698"
                      className="inline-flex items-center gap-1 rounded-full border border-[--color-border] px-3 py-1 text-xs text-[--color-fg-muted] hover:border-[--color-fg] transition-colors"
                    >
                      <Phone size={11} aria-hidden="true" />
                      Contacter Léo
                    </a>
                  </div>
                </div>
              </div>

              {/* CTA box */}
              <div
                className="mt-12 rounded-2xl p-8 text-white text-center"
                style={{ backgroundColor: '#275524' }}
              >
                <h2 className="font-display text-xl font-bold">Besoin d&apos;un paysagiste près de chez vous ?</h2>
                <p className="mt-2 text-white/80 text-sm">
                  LM Espace Vert intervient dans un rayon de 20 km autour de Saint-Didier-au-Mont-d&apos;Or.
                </p>
                <div className="mt-5 flex flex-wrap justify-center gap-3">
                  <a
                    href="tel:+33674734698"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 font-bold text-sm hover:bg-white/90 transition-colors"
                    style={{ color: '#275524' }}
                  >
                    <Phone size={14} aria-hidden="true" />
                    06 74 73 46 98
                  </a>
                  <Link
                    href="/devis"
                    className="inline-flex items-center gap-2 rounded-full border-2 border-white px-5 py-2.5 font-bold text-sm text-white hover:bg-white/10 transition-colors"
                  >
                    Devis gratuit
                  </Link>
                </div>
              </div>

              {/* Related articles */}
              {others.length > 0 && (
                <section className="mt-14" aria-labelledby="related-heading">
                  <h2 id="related-heading" className="font-display text-xl font-bold text-[--color-fg] mb-6">
                    Articles qui pourraient vous intéresser
                  </h2>
                  <ul role="list" className="grid gap-5 sm:grid-cols-3">
                    {others.map((rel) => (
                      <li key={rel.slug}>
                        <article className="rounded-2xl overflow-hidden bg-[--color-bg-elevated] border border-[--color-border] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                          <Link
                            href={`/blog/${rel.slug}`}
                            className="group block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--color-focus]"
                          >
                            <div className="relative h-40 overflow-hidden bg-[--color-bg-subtle]">
                              <Image
                                src={rel.image}
                                alt={rel.title}
                                fill
                                sizes="30vw"
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                              />
                            </div>
                            <div className="p-4">
                              <span
                                className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold mb-2"
                                style={{ backgroundColor: '#EEF4EE', color: '#275524' }}
                              >
                                {rel.category}
                              </span>
                              <h3 className="font-display font-semibold text-[--color-fg] text-sm leading-snug mb-3 line-clamp-2">
                                {rel.title}
                              </h3>
                              <div className="flex items-center justify-between">
                                <span className="text-xs text-[--color-fg-subtle]">{rel.readingTime}</span>
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
                </section>
              )}
            </div>

            {/* Sidebar */}
            <aside className="hidden lg:block space-y-6 sticky top-24 self-start">
              <TableOfContents contentId="article-content" />

              {/* CTA encart */}
              <div className="rounded-2xl p-6" style={{ backgroundColor: '#EEF4EE' }}>
                <h3 className="font-display font-bold text-base text-[--color-fg] mb-2">Besoin d&apos;un paysagiste ?</h3>
                <p className="text-sm text-[--color-fg-muted] mb-4 leading-relaxed">
                  Devis gratuit sous 48h. Intervention dans le nord-ouest lyonnais.
                </p>
                <div className="space-y-2.5">
                  <a
                    href="tel:+33674734698"
                    className="flex w-full items-center justify-center gap-2 rounded-full px-4 py-2.5 font-bold text-sm text-white transition-colors hover:opacity-90"
                    style={{ backgroundColor: '#275524' }}
                  >
                    <Phone size={14} aria-hidden="true" />
                    Appeler Léo
                  </a>
                  <Link
                    href="/devis"
                    className="flex w-full items-center justify-center rounded-full border-2 px-4 py-2.5 font-bold text-sm transition-colors hover:bg-[#275524] hover:text-white"
                    style={{ borderColor: '#275524', color: '#275524' }}
                  >
                    Devis gratuit
                  </Link>
                </div>
              </div>

              <div className="rounded-xl border border-[--color-border] bg-[--color-bg-elevated] p-5">
                <h3 className="font-bold text-sm text-[--color-fg] mb-4">Conseil du mois</h3>
                <SeasonalTip />
              </div>

              <div className="rounded-xl border border-[--color-border] bg-[--color-bg-elevated] p-5">
                <h3 className="font-bold text-sm text-[--color-fg] mb-3">Catégories</h3>
                <div className="space-y-1.5">
                  {[...new Set(articles.map((a) => a.category))].slice(0, 6).map((cat) => (
                    <Link
                      key={cat}
                      href={`/blog?categorie=${encodeURIComponent(cat)}`}
                      className="flex items-center justify-between text-sm text-[--color-fg-muted] hover:text-[#275524] py-1 transition-colors"
                    >
                      <span>{cat}</span>
                      <span className="text-xs bg-[--color-bg-subtle] px-2 py-0.5 rounded-full">
                        {articles.filter((a) => a.category === cat).length}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  )
}
