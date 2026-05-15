import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { articles } from '@/lib/articles'

interface RelatedArticlesProps {
  currentSlug: string
  category: string
}

export function RelatedArticles({ currentSlug, category }: RelatedArticlesProps) {
  // Filtre par même catégorie, exclut l'article courant
  const sameCategory = articles.filter(
    (a) => a.slug !== currentSlug && a.category === category,
  )

  // Complète avec d'autres articles si nécessaire
  const related =
    sameCategory.length >= 3
      ? sameCategory.slice(0, 3)
      : [
          ...sameCategory,
          ...articles
            .filter((a) => a.slug !== currentSlug && a.category !== category)
            .slice(0, 3 - sameCategory.length),
        ]

  if (related.length === 0) return null

  return (
    <section aria-labelledby="related-articles-heading" style={{ backgroundColor: '#F7F5F0' }} className="rounded-2xl p-6 sm:p-8">
      <h2
        id="related-articles-heading"
        className="font-display text-xl font-bold mb-6"
        style={{ color: '#425D07' }}
      >
        Articles similaires
      </h2>
      <div className="grid gap-4 sm:grid-cols-3">
        {related.map((article) => (
          <article
            key={article.slug}
            className="rounded-xl overflow-hidden bg-white border border-[#EDEDED] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
          >
            <Link
              href={`/blog/${article.slug}`}
              className="group block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#80BC00]"
            >
              <div className="relative h-36 overflow-hidden" style={{ backgroundColor: '#F7F5F0' }}>
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 30vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <span
                  className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold mb-2"
                  style={{ backgroundColor: 'rgba(128,188,0,0.12)', color: '#425D07' }}
                >
                  {article.category}
                </span>
                <h3
                  className="font-display font-semibold text-sm leading-snug mb-3 line-clamp-2"
                  style={{ color: '#2F2F2F' }}
                >
                  {article.title}
                </h3>
                <p
                  className="text-xs leading-relaxed mb-3 line-clamp-2"
                  style={{ color: '#8C8F94' }}
                >
                  {article.excerpt}
                </p>
                <span
                  className="inline-flex items-center gap-1 text-xs font-semibold"
                  style={{ color: '#425D07' }}
                >
                  Lire l&apos;article
                  <ArrowRight size={11} aria-hidden="true" />
                </span>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}
