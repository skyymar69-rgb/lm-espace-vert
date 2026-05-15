import Link from 'next/link'
import Image from 'next/image'

const mainPages = [
  {
    label: 'Accueil',
    href: '/',
    photo: '/images/hero.webp',
  },
  {
    label: 'Nos Services',
    href: '/services',
    photo: '/images/travaux-paysagers.webp',
  },
  {
    label: 'Réalisations',
    href: '/realisations',
    photo: '/images/realisation-1.webp',
  },
  {
    label: 'Blog & Conseils',
    href: '/blog',
    photo: '/images/blog-jardin-printemps.webp',
  },
  {
    label: 'À propos',
    href: '/a-propos',
    photo: '/images/photo-equipe.webp',
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
      { label: 'Avant/Après',      href: '/realisations' },
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
    <section style={{ backgroundColor: '#ffffff' }} className="py-16 border-t" aria-label="Plan du site">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">

        {/* Titre */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold font-display" style={{ color: '#1a1a1a' }}>
            Plan du site
          </h2>
          <p className="text-sm mt-1" style={{ color: '#555B68' }}>
            Explorez toutes les pages de LM Espace Vert
          </p>
        </div>

        {/* Grille de cartes photo */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          {mainPages.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="group relative overflow-hidden rounded-2xl block"
              style={{ height: '160px' }}
            >
              <Image
                src={page.photo}
                alt={page.label}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Overlay dégradé du bas */}
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)',
                }}
              />
              {/* Titre de la page */}
              <span
                className="absolute bottom-3 left-3 text-sm font-semibold text-white"
                style={{ textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}
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
                className="text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ color: '#1a1a1a' }}
              >
                {col.title}
              </p>
              <ul>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="sitemap-link text-sm py-0.5 block"
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
