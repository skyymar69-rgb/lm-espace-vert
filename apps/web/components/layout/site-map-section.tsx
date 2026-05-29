import Link from 'next/link'
import Image from 'next/image'

const mainPages = [
  {
    label: 'Accueil',
    href: '/',
    photo: '/images/realisations/lm-09.webp',
  },
  {
    label: 'Nos Services',
    href: '/services',
    photo: '/images/realisations/lm-30.webp',
  },
  {
    label: 'Réalisations',
    href: '/realisations',
    photo: '/images/realisations/lm-34.webp',
  },
  {
    label: 'Galerie',
    href: '/galerie',
    photo: '/images/realisations/lm-18.webp',
  },
  {
    label: 'Blog & Conseils',
    href: '/blog',
    photo: '/images/realisations/lm-20.webp',
  },
  {
    label: 'À propos',
    href: '/a-propos',
    photo: '/images/realisations/lm-16.webp',
  },
]

const subLinkColumns = [
  {
    title: 'Prestations',
    links: [
      { label: 'Création de jardins',    href: '/services' },
      { label: 'Entretien régulier',     href: '/services' },
      { label: 'Élagage & Abattage',     href: '/services' },
      { label: 'Maçonnerie paysagère',   href: '/services' },
      { label: 'Arrosage automatique',   href: '/services' },
      { label: 'Engazonnement',          href: '/services' },
    ],
  },
  {
    title: 'Secteurs',
    links: [
      { label: 'Caluire',                        href: '/secteur/caluire' },
      { label: 'Limonest',                       href: '/secteur/limonest' },
      { label: 'Écully',                         href: '/secteur/ecuelly' },
      { label: 'Dardilly',                       href: '/secteur/dardilly' },
      { label: "Champagne-au-Mont-d'Or",         href: '/secteur/champagne' },
      { label: '→ Voir toutes les zones',        href: '/secteurs' },
    ],
  },
  {
    title: 'Informations',
    links: [
      { label: 'Blog',             href: '/blog' },
      { label: 'À propos',         href: '/a-propos' },
      { label: 'Tarifs',           href: '/tarifs' },
      { label: 'Réalisations',     href: '/realisations' },
      { label: 'Galerie photos',   href: '/galerie' },
      { label: 'Avant/Après',      href: '/avant-apres' },
      { label: 'Notre processus',  href: '/a-propos' },
    ],
  },
  {
    title: 'Légal',
    links: [
      { label: 'Mentions légales',   href: '/mentions-legales' },
      { label: 'Confidentialité',    href: '/politique-confidentialite' },
      { label: 'CGU',                href: '/cgu' },
      { label: 'CGV',                href: '/cgv' },
      { label: 'Accessibilité',      href: '/accessibilite' },
      { label: 'Contact',            href: '/contact' },
    ],
  },
]

export function SiteMapSection() {
  return (
    <section style={{ backgroundColor: '#F7F5F0' }} className="py-16 border-t border-[#EDEDED]" aria-label="Plan du site">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">

        {/* Titre */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold font-display tracking-tight" style={{ color: '#0B3D2C' }}>
            Plan du site
          </h2>
          <p className="text-sm mt-1" style={{ color: '#5C606B' }}>
            Explorez toutes les pages de LM Espace Vert
          </p>
        </div>

        {/* Grille de cartes photo */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {mainPages.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="group relative overflow-hidden rounded-2xl block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#80BC00]"
              style={{ height: '160px' }}
            >
              <Image
                src={page.photo}
                alt=""
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay gradient — renforcé au hover */}
              <div
                className="absolute inset-0 transition-opacity duration-300"
                style={{
                  background: 'linear-gradient(to top, rgba(11,61,44,0.75) 0%, rgba(11,61,44,0.15) 60%, transparent 100%)',
                }}
              />
              {/* Hover overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: 'rgba(128,188,0,0.12)' }}
                aria-hidden="true"
              />
              {/* Titre de la page */}
              <span
                className="absolute bottom-3 left-3 text-sm font-semibold text-white transition-transform duration-300 group-hover:-translate-y-0.5"
                style={{ textShadow: '0 1px 4px rgba(0,0,0,0.6)' }}
              >
                {page.label}
              </span>
            </Link>
          ))}
        </div>

        {/* Sous-liens rapides — 4 colonnes */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t" style={{ borderColor: '#EDEDED' }}>
          {subLinkColumns.map((col) => (
            <div key={col.title}>
              <p
                className="text-[11px] font-bold uppercase tracking-[0.12em] mb-4 pb-2 border-b"
                style={{ color: '#425D07', borderColor: 'rgba(128,188,0,0.3)' }}
              >
                {col.title}
              </p>
              <ul className="space-y-0.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="sitemap-link text-sm py-1 block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
