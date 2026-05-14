import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog — Actualités jardinage & paysagisme',
  description:
    'Le blog de LM Espace Vert : actualités, projets, coulisses et conseils saisonniers pour votre jardin.',
  alternates: { canonical: 'https://www.lmespacevert.fr/blog' },
}

// Placeholder — will come from Strapi
const articles = [
  {
    slug: 'preparer-jardin-printemps',
    category: 'Entretien',
    title: 'Comment préparer votre jardin au printemps',
    excerpt: 'Le retour des beaux jours est le moment idéal pour remettre votre jardin en forme. Voici nos conseils pour bien démarrer la saison.',
    date: '2026-03-15',
    readingTime: '5 min',
  },
  {
    slug: 'tendances-jardins-2026',
    category: 'Inspiration',
    title: 'Les grandes tendances des jardins en 2026',
    excerpt: "Naturel, biodiversité, économie d'eau, espaces de vie outdoor… Découvrez les tendances qui façonnent les jardins de demain.",
    date: '2026-02-20',
    readingTime: '7 min',
  },
  {
    slug: 'choisir-plantes-ombre',
    category: 'Conseils',
    title: "Quelles plantes choisir pour un jardin à l'ombre ?",
    excerpt: "Un coin ombragé n'est pas une fatalité — c'est une opportunité de créer un espace luxuriant et frais.",
    date: '2026-01-10',
    readingTime: '4 min',
  },
] as const

export default function BlogPage() {
  return (
    <>
      <nav aria-label="Fil d'Ariane" className="border-b border-[--color-border] bg-[--color-bg-subtle]">
        <div className="container mx-auto max-w-7xl px-4 py-3 sm:px-6">
          <ol role="list" className="flex items-center gap-2 text-sm text-[--color-fg-subtle]">
            <li><Link href="/" className="hover:text-[--color-fg] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[--color-focus]">Accueil</Link></li>
            <li aria-hidden="true">/</li>
            <li><span aria-current="page" className="text-[--color-fg]">Blog</span></li>
          </ol>
        </div>
      </nav>

      <div className="container mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[--color-accent]">Actualités & Conseils</p>
          <h1 className="mt-2 font-display text-[clamp(2.25rem,5vw,3.75rem)] text-[--color-fg]">
            Le blog de LM Espace Vert
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-[--color-fg-muted]">
            Actualités, coulisses de nos chantiers et conseils saisonniers.
          </p>
        </div>

        <ul role="list" className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <li key={article.slug}>
              <article>
                <Link
                  href={`/blog/${article.slug}`}
                  className="card-hover group block overflow-hidden rounded-xl border border-[--color-border] bg-[--color-bg-elevated] shadow-[--shadow-sm] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--color-focus]"
                >
                  {/* Image placeholder */}
                  <div className="aspect-[16/9] bg-[--color-bg-subtle]" aria-hidden="true" />
                  <div className="p-5">
                    <span className="rounded-full bg-[--color-bg-subtle] px-2.5 py-0.5 text-xs font-medium text-[--color-accent]">
                      {article.category}
                    </span>
                    <h2 className="mt-2 font-display text-lg text-[--color-fg] leading-snug">
                      {article.title}
                    </h2>
                    <p className="mt-2 text-sm text-[--color-fg-muted] line-clamp-2">
                      {article.excerpt}
                    </p>
                    <div className="mt-3 flex items-center gap-4 text-xs text-[--color-fg-subtle]">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} aria-hidden="true" />
                        <time dateTime={article.date}>
                          {new Date(article.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
                        </time>
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={12} aria-hidden="true" />
                        {article.readingTime}
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
