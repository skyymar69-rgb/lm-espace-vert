import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, MessageCircle } from 'lucide-react'

const serviceLinks = [
  { href: '/services', label: 'Création de jardins' },
  { href: '/services', label: 'Entretien régulier' },
  { href: '/services', label: 'Élagage & Abattage' },
  { href: '/services', label: 'Maçonnerie paysagère' },
  { href: '/services', label: 'Arrosage automatique' },
  { href: '/services', label: 'Engazonnement' },
]

const zones = [
  "Saint-Didier-au-Mont-d'Or",
  'Caluire-et-Cuire',
  'Écully',
  'Tassin-la-Demi-Lune',
  'Charbonnières-les-Bains',
  'Limonest',
  'Dardilly',
  "Champagne-au-Mont-d'Or",
]

export function Footer() {
  return (
    <footer>

      {/* ZONE A — Bandeau pré-footer vert */}
      <div style={{ backgroundColor: '#0B3D2C', color: '#ffffff' }}>
        <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="font-display text-2xl font-bold text-white">
                Votre jardin mérite le meilleur soin
              </h2>
              <p className="text-sm mt-1" style={{ color: 'rgba(255,255,255,0.75)' }}>
                Devis gratuit sous 24h — Réponse rapide par WhatsApp
              </p>
            </div>
            <div className="flex gap-3 flex-wrap">
              <Link
                href="/devis"
                className="rounded-full px-6 py-2.5 text-sm font-semibold bg-white hover:opacity-90 transition-opacity"
                style={{ color: '#0B3D2C' }}
              >
                Demander un devis
              </Link>
              <a
                href="tel:+33674734698"
                className="rounded-full px-5 py-2.5 text-sm font-semibold border flex items-center gap-2 hover:bg-white/10 transition-colors text-white"
                style={{ borderColor: 'rgba(255,255,255,0.35)' }}
              >
                <Phone size={14} aria-hidden="true" />
                06 74 73 46 98
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ZONE B — Corps du footer */}
      <div style={{ backgroundColor: '#111827', color: '#F0F0EE' }}>
        <div className="container mx-auto max-w-7xl px-4 py-14 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

            {/* Colonne 1 — Brand */}
            <div>
              <Image
                src="/logo.png"
                alt="LM Espace Vert"
                width={130}
                height={52}
                className="h-10 w-auto mb-4"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
              <p className="text-sm text-gray-400 leading-relaxed mb-4">
                Paysagiste créateur basé à Saint-Didier-au-Mont-d&apos;Or. Nous transformons vos espaces extérieurs depuis 2019.
              </p>

              {/* Réseaux sociaux */}
              <div className="flex gap-2">
                <a
                  href="https://www.facebook.com/lmespacevert"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="rounded-full w-9 h-9 flex items-center justify-center border border-gray-700 text-gray-400 hover:text-white hover:border-gray-400 transition-all"
                >
                  <Facebook size={16} aria-hidden="true" />
                </a>
                <a
                  href="https://www.instagram.com/lmespacevert"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="rounded-full w-9 h-9 flex items-center justify-center border border-gray-700 text-gray-400 hover:text-white hover:border-gray-400 transition-all"
                >
                  <Instagram size={16} aria-hidden="true" />
                </a>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Google Maps"
                  className="rounded-full w-9 h-9 flex items-center justify-center border border-gray-700 text-gray-400 hover:text-white hover:border-gray-400 transition-all"
                >
                  <MapPin size={16} aria-hidden="true" />
                </a>
                <a
                  href="https://wa.me/33674734698"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="rounded-full w-9 h-9 flex items-center justify-center border border-gray-700 text-gray-400 hover:text-white hover:border-gray-400 transition-all"
                >
                  <MessageCircle size={16} aria-hidden="true" />
                </a>
              </div>

              {/* Badge éco */}
              <p className="mt-3 text-xs" style={{ color: '#86efac' }}>♻ Pratiques éco-responsables</p>
            </div>

            {/* Colonne 2 — Nos Services */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4">Nos Services</p>
              <ul className="space-y-0.5">
                {serviceLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors block py-0.5"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Colonne 3 — Zone d'intervention */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4">Zone d&apos;intervention</p>
              <p className="text-sm text-gray-400 mb-3">
                Rayon 20 km autour de Saint-Didier-au-Mont-d&apos;Or
              </p>
              <ul className="space-y-0.5">
                {zones.map((zone) => (
                  <li key={zone} className="text-sm text-gray-400 py-0.5">
                    {zone}
                  </li>
                ))}
                <li className="text-sm text-gray-500 py-0.5">+ autres communes</li>
              </ul>
            </div>

            {/* Colonne 4 — Contact */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4">Contact</p>
              <ul className="space-y-0.5">
                <li>
                  <a
                    href="tel:+33674734698"
                    className="flex items-start gap-2 py-1 text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    <Phone size={14} className="mt-0.5 shrink-0" aria-hidden="true" />
                    06 74 73 46 98
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:contact@lmespacevert.fr"
                    className="flex items-start gap-2 py-1 text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    <Mail size={14} className="mt-0.5 shrink-0" aria-hidden="true" />
                    contact@lmespacevert.fr
                  </a>
                </li>
                <li className="flex items-start gap-2 py-1 text-sm text-gray-400">
                  <MapPin size={14} className="mt-0.5 shrink-0" aria-hidden="true" />
                  Saint-Didier-au-Mont-d&apos;Or, 69370 Rhône
                </li>
                <li className="flex items-start gap-2 py-1 text-sm text-gray-400">
                  <Clock size={14} className="mt-0.5 shrink-0" aria-hidden="true" />
                  Lun–Ven : 8h–18h / Sam : 8h–12h
                </li>
              </ul>

              <Link
                href="/devis"
                className="mt-4 block w-full text-center rounded-full py-2.5 text-sm font-semibold hover:opacity-90 transition-opacity"
                style={{ backgroundColor: '#80BC00', color: '#fff', boxShadow: 'rgb(128, 188, 0) 0px 0px 25px -14px' }}
              >
                Devis gratuit
              </Link>
            </div>

          </div>
        </div>
      </div>

      {/* ZONE C — Barre du bas */}
      <div
        className="border-t border-gray-800 py-5"
        style={{ backgroundColor: '#0D0D0D', color: '#6B7280' }}
      >
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
            <p>© 2025 LM Espace Vert — Paysagiste à Saint-Didier-au-Mont-d&apos;Or</p>
            <div className="flex gap-4">
              <a
                href="https://kayzen-lyon.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Site créé par Kayzen
              </a>
              <Link href="/mentions-legales" className="hover:text-white transition-colors">
                Mentions légales
              </Link>
              <Link href="/confidentialite" className="hover:text-white transition-colors">
                Politique de confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>

    </footer>
  )
}
