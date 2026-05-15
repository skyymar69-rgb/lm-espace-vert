import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Wrench, BookOpen, FileText, ChevronRight } from 'lucide-react'
import { articles } from '@/lib/articles'

export const metadata: Metadata = {
  title: 'Plan du site — LM Espace Vert',
  description: "Plan du site de LM Espace Vert, paysagiste à Saint-Didier-au-Mont-d'Or. Retrouvez toutes les pages : services, zones, blog, légal.",
  alternates: { canonical: 'https://www.lmespacevert.fr/plan-du-site' },
  robots: { index: true, follow: true },
}

const mainPages = [
  { href: '/', label: 'Accueil' },
  { href: '/services', label: 'Nos services' },
  { href: '/realisations', label: 'Nos réalisations' },
  { href: '/a-propos', label: 'À propos' },
  { href: '/contact', label: 'Contact' },
  { href: '/devis', label: 'Devis gratuit' },
  { href: '/blog', label: 'Blog & Conseils jardinage' },
]

const servicePages = [
  { href: '/services/creation-jardins', label: 'Création de jardins paysagers' },
  { href: '/services/entretien-espaces-verts', label: "Entretien d'espaces verts" },
  { href: '/services/elagage-abattage', label: 'Élagage & Abattage' },
  { href: '/services/maconnerie-paysagere', label: 'Maçonnerie paysagère' },
  { href: '/services/arrosage-automatique', label: 'Arrosage automatique' },
  { href: '/services/engazonnement', label: 'Engazonnement' },
]

const zonePages = [
  { href: '/secteur/caluire', label: 'Paysagiste Caluire-et-Cuire' },
  { href: '/secteur/ecuelly', label: 'Paysagiste Écully' },
  { href: '/secteur/tassin', label: 'Paysagiste Tassin-la-Demi-Lune' },
  { href: '/secteur/limonest', label: 'Paysagiste Limonest' },
  { href: '/secteur/dardilly', label: 'Paysagiste Dardilly' },
  { href: '/secteur/champagne', label: "Paysagiste Champagne-au-Mont-d'Or" },
]

const legalPages = [
  { href: '/mentions-legales', label: 'Mentions légales' },
  { href: '/politique-confidentialite', label: 'Politique de confidentialité' },
  { href: '/politique-cookies', label: 'Politique de cookies' },
  { href: '/accessibilite', label: 'Accessibilité' },
  { href: '/cgu', label: "Conditions générales d'utilisation" },
  { href: '/cgv', label: 'Conditions générales de vente' },
]

const recentArticles = articles.slice(0, 5)

export default function PlanDuSitePage() {
  return (
    <>
      {/* Breadcrumb */}
      <nav aria-label="Fil d'Ariane" className="border-b border-[#EDEDED] bg-white">
        <div className="container mx-auto max-w-7xl px-4 py-3 sm:px-6">
          <ol role="list" className="flex items-center gap-2 text-sm text-[#8C8F94]">
            <li><Link href="/" className="hover:text-[#2F2F2F] transition-colors">Accueil</Link></li>
            <li aria-hidden="true">/</li>
            <li><span aria-current="page" className="text-[#2F2F2F]">Plan du site</span></li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-14" style={{ backgroundColor: '#F7F5F0' }}>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <h1 className="font-display text-3xl sm:text-4xl font-bold" style={{ color: '#425D07' }}>
            Plan du site
          </h1>
          <p className="mt-3 text-[#8C8F94] max-w-xl">
            Retrouvez ici toutes les pages du site LM Espace Vert, paysagiste à Saint-Didier-au-Mont-d&apos;Or.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

            {/* Pages principales */}
            <div>
              <div className="flex items-center gap-2 mb-5">
                <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(128,188,0,0.12)' }}>
                  <ChevronRight size={14} style={{ color: '#425D07' }} aria-hidden="true" />
                </div>
                <h2 className="font-display font-bold text-base" style={{ color: '#425D07' }}>Pages principales</h2>
              </div>
              <ul className="space-y-2">
                {mainPages.map((page) => (
                  <li key={page.href}>
                    <Link
                      href={page.href}
                      className="text-sm flex items-center gap-1.5 text-[#8C8F94] hover:text-[#425D07] transition-colors py-0.5"
                    >
                      <ChevronRight size={11} aria-hidden="true" />
                      {page.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <div className="flex items-center gap-2 mb-5">
                <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(128,188,0,0.12)' }}>
                  <Wrench size={14} style={{ color: '#425D07' }} aria-hidden="true" />
                </div>
                <h2 className="font-display font-bold text-base" style={{ color: '#425D07' }}>Nos services</h2>
              </div>
              <ul className="space-y-2">
                {servicePages.map((page) => (
                  <li key={page.href}>
                    <Link
                      href={page.href}
                      className="text-sm flex items-center gap-1.5 text-[#8C8F94] hover:text-[#425D07] transition-colors py-0.5"
                    >
                      <ChevronRight size={11} aria-hidden="true" />
                      {page.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Zones d'intervention */}
            <div>
              <div className="flex items-center gap-2 mb-5">
                <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(128,188,0,0.12)' }}>
                  <MapPin size={14} style={{ color: '#425D07' }} aria-hidden="true" />
                </div>
                <h2 className="font-display font-bold text-base" style={{ color: '#425D07' }}>Zones d&apos;intervention</h2>
              </div>
              <ul className="space-y-2">
                {zonePages.map((page) => (
                  <li key={page.href}>
                    <Link
                      href={page.href}
                      className="text-sm flex items-center gap-1.5 text-[#8C8F94] hover:text-[#425D07] transition-colors py-0.5"
                    >
                      <ChevronRight size={11} aria-hidden="true" />
                      {page.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Blog */}
            <div>
              <div className="flex items-center gap-2 mb-5">
                <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(128,188,0,0.12)' }}>
                  <BookOpen size={14} style={{ color: '#425D07' }} aria-hidden="true" />
                </div>
                <h2 className="font-display font-bold text-base" style={{ color: '#425D07' }}>Blog — articles récents</h2>
              </div>
              <ul className="space-y-2">
                {recentArticles.map((article) => (
                  <li key={article.slug}>
                    <Link
                      href={`/blog/${article.slug}`}
                      className="text-sm flex items-start gap-1.5 text-[#8C8F94] hover:text-[#425D07] transition-colors py-0.5"
                    >
                      <ChevronRight size={11} className="mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span className="line-clamp-2">{article.title}</span>
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/blog"
                    className="text-sm font-semibold flex items-center gap-1.5 mt-1 transition-colors"
                    style={{ color: '#425D07' }}
                  >
                    <ChevronRight size={11} aria-hidden="true" />
                    Voir tous les articles
                  </Link>
                </li>
              </ul>
            </div>

            {/* Légal */}
            <div>
              <div className="flex items-center gap-2 mb-5">
                <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(128,188,0,0.12)' }}>
                  <FileText size={14} style={{ color: '#425D07' }} aria-hidden="true" />
                </div>
                <h2 className="font-display font-bold text-base" style={{ color: '#425D07' }}>Pages légales</h2>
              </div>
              <ul className="space-y-2">
                {legalPages.map((page) => (
                  <li key={page.href}>
                    <Link
                      href={page.href}
                      className="text-sm flex items-center gap-1.5 text-[#8C8F94] hover:text-[#425D07] transition-colors py-0.5"
                    >
                      <ChevronRight size={11} aria-hidden="true" />
                      {page.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
