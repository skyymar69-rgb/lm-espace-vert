import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react'
import { BusinessHours } from '@/components/ui/business-hours'
import { articles } from '@/lib/articles'

const legalLinks = [
  { href: '/mentions-legales',          label: 'Mentions légales' },
  { href: '/politique-confidentialite', label: 'Confidentialité' },
  { href: '/politique-cookies',         label: 'Cookies' },
  { href: '/accessibilite',             label: 'Accessibilité' },
] as const

const serviceLinks = [
  { href: '/services', label: 'Création de jardins' },
  { href: '/services', label: 'Entretien régulier' },
  { href: '/services', label: 'Élagage / Abattage' },
  { href: '/services', label: 'Maçonnerie paysagère' },
  { href: '/services', label: 'Arrosage automatique' },
  { href: '/services', label: 'Engazonnement' },
] as const

const zones = [
  "Saint-Didier-au-Mont-d'Or",
  'Caluire-et-Cuire',
  'Écully',
  'Tassin-la-Demi-Lune',
  'Charbonnières-les-Bains',
  'Limonest',
  'Dardilly',
  'Craponne',
  'Francheville',
  "Collonges-au-Mont-d'Or",
]

const recentArticles = articles.slice(0, 3)

export function Footer() {
  const year = new Date().getFullYear()

  return (
    /* Footer hardcodé — fond sombre fixe — toujours lisible */
    <footer style={{ backgroundColor: '#111827', color: '#f9fafb' }}>

      {/* Pre-footer CTA — vert foncé FIXE */}
      <div style={{ backgroundColor: '#275524' }}>
        <div className="container mx-auto max-w-7xl px-4 py-10 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="font-display text-xl font-bold" style={{ color: '#ffffff' }}>
                Votre jardin mérite le meilleur soin
              </h2>
              <p className="text-sm mt-1" style={{ color: 'rgba(255,255,255,0.8)' }}>
                Devis gratuit sous 24h — Réponse rapide par WhatsApp
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="tel:+33674734698"
                className="inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors"
                style={{ borderColor: 'rgba(255,255,255,0.35)', color: '#ffffff', backgroundColor: 'transparent' }}
              >
                <Phone size={15} aria-hidden="true" />
                06 74 73 46 98
              </a>
              <Link
                href="/devis"
                className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-bold text-sm transition-colors"
                style={{ backgroundColor: '#ffffff', color: '#275524' }}
              >
                Demander un devis
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer body */}
      <div style={{ backgroundColor: '#111827' }} className="container mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">

          {/* Brand (2 cols) */}
          <div className="lg:col-span-2">
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
            <p className="mt-4 text-sm leading-relaxed max-w-xs" style={{ color: '#d1d5db' }}>
              Paysagiste créateur basé à Saint-Didier-au-Mont-d&apos;Or.
              Nous transformons vos extérieurs en espaces de vie à l&apos;image de vos envies, depuis 2019.
            </p>

            {/* Eco badge */}
            <div
              className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold"
              style={{ backgroundColor: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)', color: '#86efac' }}
            >
              🌿 Pratiques éco-responsables
            </div>

            {/* Social */}
            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://www.facebook.com/people/LM-Paysage-et-jardin/61584572046303/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LM Espace Vert sur Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full transition-colors"
                style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: '#ffffff' }}
              >
                <Facebook size={18} aria-hidden="true" />
              </a>
              <a
                href="https://www.instagram.com/lm_espacevert"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LM Espace Vert sur Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full transition-colors"
                style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: '#ffffff' }}
              >
                <Instagram size={18} aria-hidden="true" />
              </a>
              <a
                href="https://maps.app.goo.gl/rA4sfge3evAuVJLC9"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LM Espace Vert sur Google Maps"
                className="flex h-10 w-10 items-center justify-center rounded-full transition-colors"
                style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: '#ffffff' }}
              >
                <MapPin size={18} aria-hidden="true" />
              </a>
              <a
                href="https://wa.me/33674734698"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contacter sur WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full transition-colors"
                style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: '#ffffff' }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </a>
            </div>

            <address className="mt-5 space-y-2 not-italic text-sm" style={{ color: '#d1d5db' }}>
              <p className="flex items-start gap-2">
                <MapPin size={15} aria-hidden="true" className="mt-0.5 shrink-0" style={{ color: '#86efac' }} />
                <span>Saint-Didier-au-Mont-d&apos;Or, 69370 — Rhône</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone size={15} aria-hidden="true" className="shrink-0" style={{ color: '#86efac' }} />
                <a href="tel:+33674734698" className="transition-colors hover:text-white">06 74 73 46 98</a>
              </p>
              <p className="flex items-center gap-2">
                <Mail size={15} aria-hidden="true" className="shrink-0" style={{ color: '#86efac' }} />
                <a href="mailto:contact@lmespacevert.fr" className="transition-colors hover:text-white">contact@lmespacevert.fr</a>
              </p>
            </address>
          </div>

          {/* Services */}
          <nav aria-label="Nos services">
            <h3 className="mb-5 text-xs font-bold uppercase tracking-widest" style={{ color: '#86efac' }}>Nos services</h3>
            <ul role="list" className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-sm transition-colors hover:text-white"
                    style={{ color: '#d1d5db' }}
                  >
                    <span className="h-1 w-1 rounded-full flex-shrink-0" style={{ backgroundColor: '#86efac' }} aria-hidden="true" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Horaires */}
            <div className="mt-8">
              <h3 className="mb-4 text-xs font-bold uppercase tracking-widest" style={{ color: '#86efac' }}>Horaires</h3>
              <div className="text-sm space-y-1" style={{ color: '#d1d5db' }}>
                <BusinessHours compact />
                <p className="mt-2">Lun–Ven : 8h–18h</p>
                <p>Samedi : 8h–12h</p>
              </div>
            </div>
          </nav>

          {/* Zone + Articles */}
          <div>
            <h3 className="mb-5 text-xs font-bold uppercase tracking-widest" style={{ color: '#86efac' }}>Zone d&apos;intervention</h3>
            <p className="mb-3 text-sm" style={{ color: '#d1d5db' }}>
              Rayon <strong style={{ color: '#ffffff' }}>20 km</strong> autour de Saint-Didier-au-Mont-d&apos;Or&nbsp;:
            </p>
            <ul role="list" className="space-y-1.5 mb-6">
              {zones.slice(0, 7).map((zone) => (
                <li key={zone} className="flex items-center gap-2 text-sm" style={{ color: '#d1d5db' }}>
                  <span className="h-1 w-1 rounded-full flex-shrink-0" style={{ backgroundColor: '#86efac' }} aria-hidden="true" />
                  {zone}
                </li>
              ))}
              <li className="text-sm" style={{ color: '#6b7280' }}>+ autres communes…</li>
            </ul>

            {/* Recent articles */}
            <h3 className="mb-4 text-xs font-bold uppercase tracking-widest" style={{ color: '#86efac' }}>Derniers conseils</h3>
            <ul className="space-y-2">
              {recentArticles.map((a) => (
                <li key={a.slug}>
                  <Link
                    href={`/blog/${a.slug}`}
                    className="text-sm transition-colors hover:text-white line-clamp-1 block"
                    style={{ color: '#9ca3af' }}
                  >
                    → {a.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Liens utiles + CTA */}
          <div>
            <h3 className="mb-5 text-xs font-bold uppercase tracking-widest" style={{ color: '#86efac' }}>Liens utiles</h3>
            <ul role="list" className="space-y-2.5 mb-8">
              {[
                { href: '/blog',         label: 'Blog & Conseils' },
                { href: '/realisations', label: 'Nos réalisations' },
                { href: '/a-propos',     label: 'Notre entreprise' },
                { href: '/devis',        label: 'Demande de devis' },
                { href: '/contact',      label: 'Nous contacter' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-sm transition-colors hover:text-white"
                    style={{ color: '#d1d5db' }}
                  >
                    <span className="h-1 w-1 rounded-full flex-shrink-0" style={{ backgroundColor: '#86efac' }} aria-hidden="true" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href="/devis"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full py-2.5 font-bold text-sm transition-colors"
              style={{ backgroundColor: '#275524', color: '#ffffff' }}
            >
              Devis gratuit
            </Link>
            <a
              href="tel:+33674734698"
              className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full border py-2.5 text-sm font-semibold transition-colors hover:text-white"
              style={{ borderColor: 'rgba(255,255,255,0.2)', color: '#d1d5db', backgroundColor: 'transparent' }}
            >
              <Phone size={15} aria-hidden="true" />
              Appeler maintenant
            </a>

            {/* Trust mini-badges */}
            <div className="mt-6 grid grid-cols-2 gap-2">
              {[
                { icon: '⭐', text: '5/5 Google' },
                { icon: '🔒', text: 'RC Pro' },
                { icon: '📋', text: 'Devis gratuit' },
                { icon: '🌿', text: 'Éco-responsable' },
              ].map((b) => (
                <div key={b.text} className="flex items-center gap-1.5 text-xs" style={{ color: '#9ca3af' }}>
                  <span aria-hidden="true">{b.icon}</span>
                  {b.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid #374151', backgroundColor: '#111827' }}>
        <div className="container mx-auto max-w-7xl px-4 py-4 sm:px-6">
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs" style={{ color: '#9ca3af' }}>
            <p>© {year} LM Espace Vert — Tous droits réservés.</p>
            <p>
              Réalisé par{' '}
              <a
                href="https://internet.kayzen-lyon.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-white transition-colors"
                style={{ color: '#86efac' }}
              >
                Kayzen Web
              </a>
            </p>
            <nav aria-label="Liens légaux">
              <ul role="list" className="flex flex-wrap gap-3">
                {legalLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="transition-colors hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <button
                    id="cookie-manage"
                    className="transition-colors hover:text-white"
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
