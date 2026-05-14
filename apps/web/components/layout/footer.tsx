import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react'

const legalLinks = [
  { href: '/mentions-legales', label: 'Mentions légales' },
  { href: '/politique-confidentialite', label: 'Confidentialité' },
  { href: '/politique-cookies', label: 'Cookies' },
  { href: '/accessibilite', label: 'Accessibilité' },
] as const

const serviceLinks = [
  { href: '/services/creation', label: 'Création de jardins' },
  { href: '/services/entretien', label: 'Entretien régulier' },
  { href: '/services/elagage', label: 'Élagage / Abattage' },
  { href: '/services/maconnerie', label: 'Maçonnerie paysagère' },
  { href: '/services/arrosage', label: 'Arrosage automatique' },
  { href: '/services/engazonnement', label: 'Engazonnement' },
] as const

const zones = [
  'Saint-Didier-au-Mont-d\'Or',
  'Caluire-et-Cuire',
  'Écully',
  'Tassin-la-Demi-Lune',
  'Charbonnières-les-Bains',
  'Limonest',
  'Dardilly',
  'Craponne',
  'Francheville',
  'Collonges-au-Mont-d\'Or',
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-0 border-t-4 border-[--color-primary] bg-[--color-charcoal] text-white">
      <div className="container mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <Link
              href="/"
              className="inline-block focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
              aria-label="LM Espace Vert — retour à l'accueil"
            >
              <Image
                src="/logo.png"
                alt="LM Espace Vert"
                width={160}
                height={60}
                className="h-14 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="mt-4 text-sm text-gray-300 leading-relaxed">
              Paysagiste créateur basé à Saint-Didier-au-Mont-d&apos;Or.
              Nous transformons vos extérieurs en espaces de vie à l&apos;image de vos envies.
            </p>

            {/* Social links */}
            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://www.facebook.com/people/LM-Paysage-et-jardin/61584572046303/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LM Espace Vert sur Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#1877F2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
              >
                <Facebook size={18} aria-hidden="true" />
              </a>
              <a
                href="https://www.instagram.com/lm_espacevert"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LM Espace Vert sur Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-gradient-to-br hover:from-[#E1306C] hover:to-[#833AB4] focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
              >
                <Instagram size={18} aria-hidden="true" />
              </a>
              <a
                href="https://maps.app.goo.gl/rA4sfge3evAuVJLC9"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LM Espace Vert sur Google Maps"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#4285F4] focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
              >
                <MapPin size={18} aria-hidden="true" />
              </a>
              <a
                href="https://wa.me/33674734698"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contacter LM Espace Vert sur WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#25D366] focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </a>
            </div>

            <address className="mt-5 space-y-2 not-italic text-sm text-gray-300">
              <p className="flex items-start gap-2">
                <MapPin size={16} aria-hidden="true" className="mt-0.5 shrink-0 text-green-400" />
                <span>Saint-Didier-au-Mont-d&apos;Or, 69370 — Rhône</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone size={16} aria-hidden="true" className="shrink-0 text-green-400" />
                <a href="tel:+33674734698" className="hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-white">
                  06 74 73 46 98
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail size={16} aria-hidden="true" className="shrink-0 text-green-400" />
                <a href="mailto:contact@lmespacevert.fr" className="hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-white">
                  contact@lmespacevert.fr
                </a>
              </p>
            </address>
          </div>

          {/* Services */}
          <nav aria-label="Nos services">
            <h3 className="mb-5 text-sm font-bold uppercase tracking-widest text-green-400">Nos services</h3>
            <ul role="list" className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-sm text-gray-300 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
                  >
                    <span className="h-1 w-1 rounded-full bg-green-400 flex-shrink-0" aria-hidden="true" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Zone d'intervention */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-widest text-green-400">Zone d&apos;intervention</h3>
            <p className="mb-3 text-sm text-gray-300">
              Nous intervenons dans un rayon de <strong className="text-white">20 km</strong> autour de Saint-Didier-au-Mont-d&apos;Or&nbsp;:
            </p>
            <ul role="list" className="space-y-1.5">
              {zones.map((zone) => (
                <li key={zone} className="flex items-center gap-2 text-sm text-gray-300">
                  <span className="h-1 w-1 rounded-full bg-green-400 flex-shrink-0" aria-hidden="true" />
                  {zone}
                </li>
              ))}
            </ul>
          </div>

          {/* Liens utiles + CTA */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-widest text-green-400">Liens utiles</h3>
            <ul role="list" className="space-y-2.5 mb-8">
              {[
                { href: '/blog', label: 'Blog & Conseils' },
                { href: '/realisations', label: 'Nos réalisations' },
                { href: '/a-propos', label: 'Notre entreprise' },
                { href: '/devis', label: 'Demande de devis' },
                { href: '/contact', label: 'Nous contacter' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-sm text-gray-300 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
                  >
                    <span className="h-1 w-1 rounded-full bg-green-400 flex-shrink-0" aria-hidden="true" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href="/devis"
              className="btn-primary w-full justify-center"
            >
              Devis gratuit
            </Link>
            <a
              href="tel:+33674734698"
              className="btn-secondary mt-3 w-full justify-center border-white/20 text-white hover:bg-white/10"
            >
              <Phone size={15} aria-hidden="true" />
              Appeler maintenant
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto max-w-7xl px-4 py-4 sm:px-6">
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-gray-400">
            <p>© {year} LM Espace Vert — Tous droits réservés.</p>
            <p>
              Fièrement réalisé par{' '}
              <a
                href="https://internet.kayzen-lyon.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 underline underline-offset-2 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
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
                      className="transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <button
                    id="cookie-manage"
                    className="transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
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
