import Link from 'next/link'
import { Leaf, Phone, Mail, MapPin } from 'lucide-react'

const legalLinks = [
  { href: '/mentions-legales', label: 'Mentions légales' },
  { href: '/cgu', label: 'CGU' },
  { href: '/cgv', label: 'CGV' },
  { href: '/politique-confidentialite', label: 'Confidentialité' },
  { href: '/politique-cookies', label: 'Cookies' },
  { href: '/accessibilite', label: 'Accessibilité' },
  { href: '/plan-du-site', label: 'Plan du site' },
] as const

const serviceLinks = [
  { href: '/services/creation', label: 'Création de jardins' },
  { href: '/services/entretien', label: 'Entretien régulier' },
  { href: '/services/elagage', label: 'Élagage / Abattage' },
  { href: '/services/maconnerie', label: 'Maçonnerie paysagère' },
  { href: '/services/arrosage', label: 'Arrosage automatique' },
] as const

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-24 border-t border-[--color-border] bg-[--color-bg-subtle]">
      <div className="container mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[--color-primary] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[--color-focus]"
              aria-label="LM Espace Vert — retour à l'accueil"
            >
              <Leaf size={24} aria-hidden="true" className="text-[--color-accent]" />
              <span className="font-display text-lg font-semibold">LM Espace Vert</span>
            </Link>
            <p className="mt-3 text-sm text-[--color-fg-subtle]">
              Paysagiste créateur. Nous transformons vos extérieurs en lieux de vie.
            </p>
            <address className="mt-4 space-y-2 not-italic text-sm text-[--color-fg-muted]">
              <p className="flex items-start gap-2">
                <MapPin size={16} aria-hidden="true" className="mt-0.5 shrink-0 text-[--color-accent]" />
                <span>[Adresse] — [Ville], France</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone size={16} aria-hidden="true" className="shrink-0 text-[--color-accent]" />
                <a
                  href="tel:+33XXXXXXXXX"
                  className="hover:text-[--color-fg] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[--color-focus]"
                >
                  +33 (0)X XX XX XX XX
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail size={16} aria-hidden="true" className="shrink-0 text-[--color-accent]" />
                <a
                  href="mailto:contact@lmespacevert.fr"
                  className="hover:text-[--color-fg] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[--color-focus]"
                >
                  contact@lmespacevert.fr
                </a>
              </p>
            </address>
          </div>

          {/* Services */}
          <nav aria-label="Nos services">
            <h3 className="mb-4 font-semibold text-[--color-fg]">Nos services</h3>
            <ul role="list" className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[--color-fg-muted] transition-colors hover:text-[--color-fg] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[--color-focus]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Ressources */}
          <nav aria-label="Ressources">
            <h3 className="mb-4 font-semibold text-[--color-fg]">Ressources</h3>
            <ul role="list" className="space-y-2">
              {[
                { href: '/blog', label: 'Blog & Actualités' },
                { href: '/conseils', label: 'Conseils jardinage' },
                { href: '/realisations', label: 'Nos réalisations' },
                { href: '/a-propos', label: 'Notre entreprise' },
                { href: '/contact', label: 'Nous contacter' },
                { href: '/devis', label: 'Demander un devis' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[--color-fg-muted] transition-colors hover:text-[--color-fg] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[--color-focus]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Zone d'intervention & CTA */}
          <div>
            <h3 className="mb-4 font-semibold text-[--color-fg]">Zone d'intervention</h3>
            <p className="text-sm text-[--color-fg-muted]">
              Lyon et agglomération — Ain — Isère — Rhône
            </p>
            <p className="mt-2 text-sm text-[--color-fg-subtle]">
              Nous intervenons dans un rayon de 50 km autour de Lyon.
            </p>
            <Link
              href="/devis"
              className="mt-6 inline-flex items-center rounded-md bg-[--color-accent] px-5 py-2.5 text-sm font-semibold text-[--color-accent-fg] transition-colors hover:bg-[--color-gold-500] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[--color-focus]"
            >
              Devis gratuit
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[--color-border]">
        <div className="container mx-auto max-w-7xl px-4 py-5 sm:px-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="text-sm text-[--color-fg-subtle]">
              © {year} LM Espace Vert — Tous droits réservés.
            </p>
            <p className="text-sm text-[--color-fg-subtle]">
              Fièrement réalisé par{' '}
              <a
                href="https://internet.kayzen-lyon.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 transition-colors hover:text-[--color-accent] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[--color-focus]"
              >
                Kayzen Web
              </a>
            </p>
            <nav aria-label="Liens légaux">
              <ul role="list" className="flex flex-wrap gap-3">
                {legalLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-xs text-[--color-fg-subtle] transition-colors hover:text-[--color-fg] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[--color-focus]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <button
                    id="cookie-manage"
                    className="text-xs text-[--color-fg-subtle] transition-colors hover:text-[--color-fg] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[--color-focus]"
                    aria-label="Gérer mes préférences cookies"
                  >
                    Gérer mes cookies
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}
