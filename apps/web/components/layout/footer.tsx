'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Mail, MapPin, Clock, Facebook, Instagram, MessageCircle, Leaf } from 'lucide-react'

// #1 — Liens vers les pages de service individuelles
const serviceLinks = [
  { href: '/services/creation-jardins',        label: 'Création de jardins' },
  { href: '/services/entretien-espaces-verts', label: 'Entretien régulier' },
  { href: '/services/elagage-abattage',        label: 'Élagage & Abattage' },
  { href: '/services/maconnerie-paysagere',    label: 'Maçonnerie paysagère' },
  { href: '/services/arrosage-automatique',    label: 'Arrosage automatique' },
  { href: '/services/engazonnement',           label: 'Engazonnement' },
]

const zones = [
  { label: "Saint-Didier-au-Mont-d'Or",  href: null },
  { label: "Champagne-au-Mont-d'Or",     href: '/secteur/champagne' },
  { label: 'Limonest',                   href: '/secteur/limonest' },
  { label: 'Dardilly',                   href: '/secteur/dardilly' },
  { label: 'Caluire-et-Cuire',           href: '/secteur/caluire' },
  { label: 'Écully',                     href: '/secteur/ecuelly' },
  { label: "Saint-Cyr-au-Mont-d'Or",    href: '/secteur/saint-cyr' },
  { label: "Curis-au-Mont-d'Or",        href: '/secteur/curis' },
  { label: 'Tassin-la-Demi-Lune',       href: '/secteur/tassin' },
  { label: "Collonges-au-Mont-d'Or",    href: '/secteur/collonges' },
  { label: 'Francheville',              href: '/secteur/francheville' },
  { label: 'Neuville-sur-Saône',        href: '/secteur/neuville' },
  { label: 'Craponne',                  href: '/secteur/craponne' },
]

// #2 — Icônes réseaux sociaux avec URL réelle Google Maps
const socialLinks = [
  {
    href: 'https://www.facebook.com/people/LM-Paysage-et-jardin/61584572046303/',
    label: 'Facebook LM Espace Vert',
    icon: <Facebook size={16} aria-hidden="true" />,
  },
  {
    href: 'https://www.instagram.com/lm_espace_vert/',
    label: 'Instagram LM Espace Vert',
    icon: <Instagram size={16} aria-hidden="true" />,
  },
  {
    href: 'https://maps.app.goo.gl/rA4sfge3evAuVJLC9',
    label: 'LM Espace Vert sur Google Maps',
    icon: <MapPin size={16} aria-hidden="true" />,
  },
  {
    href: 'https://wa.me/33672587353',
    label: 'Contacter via WhatsApp',
    icon: <MessageCircle size={16} aria-hidden="true" />,
  },
]

export function Footer() {
  return (
    // #3 — Balise footer sémantique avec aria-label
    <footer aria-label="Pied de page LM Espace Vert">

      {/* ZONE A — Bandeau pré-footer vert */}
      <div style={{ backgroundColor: '#0B3D2C', color: '#ffffff' }}>
        <div className="container mx-auto max-w-7xl px-4 pt-14 pb-12 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white leading-tight">
                Votre jardin mérite le meilleur soin
              </h2>
              <p className="text-sm mt-2 tracking-wide" style={{ color: 'rgba(255,255,255,0.65)' }}>
                Devis gratuit sous 24h — Réponse rapide par WhatsApp
              </p>
            </div>
            <div className="flex gap-3 flex-wrap sm:flex-nowrap">
              <Link
                href="/devis"
                className="rounded-full px-7 py-3 text-sm font-semibold tracking-wide transition-all hover:brightness-105 hover:shadow-[0_4px_20px_rgba(255,255,255,0.15)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#80BC00]"
                style={{ backgroundColor: '#ffffff', color: '#0B3D2C' }}
              >
                Demander un devis
              </Link>
              <a
                href="https://wa.me/33672587353"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full px-6 py-3 text-sm font-semibold flex items-center gap-2 transition-all hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#80BC00]"
                style={{ border: '1px solid rgba(255,255,255,0.35)', color: '#ffffff' }}
              >
                <MessageCircle size={14} aria-hidden="true" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
        {/* Séparateur raffiné entre CTA et corps */}
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.10)' }} />
        </div>
      </div>

      {/* ZONE B — Corps du footer */}
      <div style={{ backgroundColor: '#0B3D2C', color: '#ffffff' }}>
        <div className="container mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

            {/* Colonne 1 — Brand */}
            <div>
              <Image
                src="/logo.png"
                alt="LM Espace Vert — Paysagiste Saint-Didier-au-Mont-d'Or"
                width={130}
                height={52}
                className="h-10 w-auto mb-5"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
              <p className="text-sm leading-loose mb-5 max-w-[220px]" style={{ color: 'rgba(255,255,255,0.60)' }}>
                Paysagiste créateur basé à Saint-Didier-au-Mont-d&apos;Or. Nous transformons vos espaces extérieurs depuis 2019.
              </p>

              {/* #4 — Réseaux sociaux avec CSS hover, sans JS events */}
              <div className="flex gap-2" role="list" aria-label="Réseaux sociaux">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    role="listitem"
                    className="rounded-full w-9 h-9 flex items-center justify-center transition-all duration-200 hover:text-[#80BC00] hover:border-[#80BC00] hover:bg-[#80BC00]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#80BC00]"
                    style={{ border: '1px solid rgba(255,255,255,0.20)', color: 'rgba(255,255,255,0.60)' }}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>

              {/* #5 — Badge éco avec icône Leaf au lieu de l'emoji ♻ */}
              <p className="mt-4 text-xs flex items-center gap-1.5" style={{ color: 'rgba(134,239,172,0.80)' }}>
                <Leaf size={11} aria-hidden="true" /> Pratiques éco-responsables
              </p>
            </div>

            {/* Colonne 2 — Nos Services */}
            {/* #6 — nav sémantique avec aria-label */}
            <nav aria-label="Services paysagisme">
              <p className="text-[10px] font-bold uppercase tracking-[0.15em] mb-5" style={{ color: 'rgba(128,188,0,0.85)' }}>Nos Services</p>
              <ul className="space-y-1">
                {serviceLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm block py-0.5 transition-colors duration-150 hover:text-[#80BC00] focus-visible:text-[#80BC00]"
                      style={{ color: 'rgba(255,255,255,0.65)' }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Colonne 3 — Zone d'intervention */}
            <nav aria-label="Zone d'intervention">
              <p className="text-[10px] font-bold uppercase tracking-[0.15em] mb-5" style={{ color: 'rgba(128,188,0,0.85)' }}>Zone d&apos;intervention</p>
              <p className="text-xs mb-4 leading-relaxed" style={{ color: 'rgba(255,255,255,0.50)' }}>
                Rayon 20 km autour de Saint-Didier-au-Mont-d&apos;Or
              </p>
              <ul className="space-y-1">
                {zones.map((zone) => (
                  <li key={zone.label} className="text-sm py-0.5">
                    {zone.href ? (
                      <Link
                        href={zone.href}
                        className="transition-colors duration-150 hover:text-[#80BC00] focus-visible:text-[#80BC00]"
                        style={{ color: 'rgba(255,255,255,0.65)' }}
                      >
                        {zone.label}
                      </Link>
                    ) : (
                      <span style={{ color: 'rgba(255,255,255,0.65)' }}>{zone.label}</span>
                    )}
                  </li>
                ))}
                <li className="text-sm py-0.5 mt-2">
                  <Link
                    href="/secteurs"
                    className="transition-colors duration-150 font-semibold hover:text-white focus-visible:text-white"
                    style={{ color: '#80BC00' }}
                  >
                    → Voir toutes nos zones
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Colonne 4 — Contact */}
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.15em] mb-5" style={{ color: 'rgba(128,188,0,0.85)' }}>Contact</p>
              {/* #7 — Balise <address> sémantique */}
              <address className="not-italic">
                <ul className="space-y-1">
                  <li>
                    <a
                      href="https://wa.me/33672587353"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-2.5 py-1 text-sm transition-colors duration-150 hover:text-[#80BC00] focus-visible:text-[#80BC00]"
                      style={{ color: 'rgba(255,255,255,0.65)' }}
                    >
                      <MessageCircle size={14} className="mt-0.5 shrink-0" aria-hidden="true" />
                      WhatsApp — 06 72 58 73 53
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:contact@lmespacevert.fr"
                      className="flex items-start gap-2.5 py-1 text-sm transition-colors duration-150 hover:text-[#80BC00] focus-visible:text-[#80BC00]"
                      style={{ color: 'rgba(255,255,255,0.65)' }}
                    >
                      <Mail size={14} className="mt-0.5 shrink-0" aria-hidden="true" />
                      contact@lmespacevert.fr
                    </a>
                  </li>
                  <li className="flex items-start gap-2.5 py-1 text-sm" style={{ color: 'rgba(255,255,255,0.65)' }}>
                    <MapPin size={14} className="mt-0.5 shrink-0" aria-hidden="true" />
                    Saint-Didier-au-Mont-d&apos;Or, 69370 Rhône
                  </li>
                  <li className="flex items-start gap-2.5 py-1 text-sm" style={{ color: 'rgba(255,255,255,0.65)' }}>
                    <Clock size={14} className="mt-0.5 shrink-0" aria-hidden="true" />
                    <time>Lun–Ven : 8h–18h / Sam : 8h–12h</time>
                  </li>
                </ul>
              </address>

              {/* #8 — Lien Contact page */}
              <Link
                href="/contact"
                className="mt-5 block w-full text-center rounded-full py-2.5 text-sm font-medium transition-all hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#80BC00]"
                style={{ border: '1px solid rgba(255,255,255,0.20)', color: 'rgba(255,255,255,0.80)' }}
              >
                Formulaire de contact
              </Link>
              <Link
                href="/devis"
                className="mt-2.5 block w-full text-center rounded-full py-2.5 text-sm font-semibold transition-all hover:brightness-110 hover:shadow-[0_4px_16px_rgba(128,188,0,0.35)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#80BC00]"
                style={{ backgroundColor: '#80BC00', color: '#0B3D2C', boxShadow: '0 2px 12px rgba(128,188,0,0.25)' }}
              >
                Devis gratuit
              </Link>
            </div>

          </div>
        </div>
      </div>

      {/* ZONE C — Barre du bas */}
      <div
        className="py-5"
        style={{ backgroundColor: '#071f16', borderTop: '1px solid rgba(255,255,255,0.08)' }}
      >
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px]">
            <p style={{ color: 'rgba(255,255,255,0.45)' }}>
              © {new Date().getFullYear()} LM Espace Vert
              <span className="mx-2" style={{ color: 'rgba(255,255,255,0.20)' }}>·</span>
              Paysagiste Lyon nord
            </p>

            {/* #9 — Liens légaux avec CSS hover */}
            <nav aria-label="Liens légaux" className="flex flex-wrap justify-center sm:justify-end gap-x-3 gap-y-2">
              {[
                { href: '/mentions-legales',          label: 'Mentions légales' },
                { href: '/politique-confidentialite', label: 'Confidentialité' },
                { href: '/cgu',                       label: 'CGU' },
                { href: '/cgv',                       label: 'CGV' },
                { href: '/accessibilite',             label: 'Accessibilité' },
                { href: '/plan-du-site',              label: 'Plan du site' },
              ].map((l, i, arr) => (
                <span key={l.href} className="flex items-center gap-3">
                  <Link
                    href={l.href}
                    className="transition-colors duration-150 hover:text-[#80BC00] focus-visible:text-[#80BC00]"
                    style={{ color: 'rgba(255,255,255,0.45)' }}
                  >
                    {l.label}
                  </Link>
                  {i < arr.length - 1 && (
                    <span aria-hidden="true" style={{ color: 'rgba(255,255,255,0.18)' }}>·</span>
                  )}
                </span>
              ))}
            </nav>

            <a
              href="https://internet.kayzen-lyon.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors text-[11px] whitespace-nowrap hover:text-[#80BC00] focus-visible:text-[#80BC00]"
              style={{ color: 'rgba(255,255,255,0.45)' }}
            >
              Réalisé par <span style={{ color: 'rgba(128,188,0,0.80)' }}>Kayzen Web</span>
            </a>
          </div>
        </div>
      </div>

    </footer>
  )
}
