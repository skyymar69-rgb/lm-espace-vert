'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Mail, MapPin, Clock, Facebook, Instagram, MessageCircle } from 'lucide-react'

const serviceLinks = [
  { href: '/services', label: 'Création de jardins' },
  { href: '/services', label: 'Entretien régulier' },
  { href: '/services', label: 'Élagage & Abattage' },
  { href: '/services', label: 'Maçonnerie paysagère' },
  { href: '/services', label: 'Arrosage automatique' },
  { href: '/services', label: 'Engazonnement' },
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

export function Footer() {
  return (
    <footer>

      {/* ZONE A — Bandeau pré-footer vert */}
      <div style={{ backgroundColor: '#0B3D2C', color: '#ffffff' }}>
        <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="font-display text-2xl font-bold" style={{ color: '#ffffff' }}>
                Votre jardin mérite le meilleur soin
              </h2>
              <p className="text-sm mt-1" style={{ color: 'rgba(255,255,255,0.75)' }}>
                Devis gratuit sous 24h — Réponse rapide par WhatsApp
              </p>
            </div>
            <div className="flex gap-3 flex-wrap">
              <Link
                href="/devis"
                className="rounded-full px-6 py-2.5 text-sm font-semibold transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#ffffff', color: '#0B3D2C' }}
              >
                Demander un devis
              </Link>
              <a
                href="https://wa.me/33672587353"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full px-5 py-2.5 text-sm font-semibold flex items-center gap-2 transition-colors hover:opacity-90"
                style={{ border: '1px solid rgba(255,255,255,0.35)', color: '#ffffff' }}
              >
                <MessageCircle size={14} aria-hidden="true" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ZONE B — Corps du footer */}
      <div style={{ backgroundColor: '#0B3D2C', color: '#ffffff' }}>
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
              <p className="text-sm leading-relaxed mb-4 max-w-[240px]" style={{ color: 'rgba(255,255,255,0.7)' }}>
                Paysagiste créateur basé à Saint-Didier-au-Mont-d&apos;Or. Nous transformons vos espaces extérieurs depuis 2019.
              </p>

              {/* Réseaux sociaux */}
              <div className="flex gap-2">
                <a
                  href="https://www.facebook.com/people/LM-Paysage-et-jardin/61584572046303/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="rounded-full w-10 h-10 flex items-center justify-center transition-all"
                  style={{ border: '1px solid rgba(255,255,255,0.25)', color: 'rgba(255,255,255,0.7)' }}
                  onMouseOver={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#80BC00'; (e.currentTarget as HTMLAnchorElement).style.borderColor = '#80BC00' }}
                  onMouseOut={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.7)'; (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.25)' }}
                >
                  <Facebook size={16} aria-hidden="true" />
                </a>
                <a
                  href="https://www.instagram.com/lm_espacevert"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="rounded-full w-10 h-10 flex items-center justify-center transition-all"
                  style={{ border: '1px solid rgba(255,255,255,0.25)', color: 'rgba(255,255,255,0.7)' }}
                  onMouseOver={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#80BC00'; (e.currentTarget as HTMLAnchorElement).style.borderColor = '#80BC00' }}
                  onMouseOut={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.7)'; (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.25)' }}
                >
                  <Instagram size={16} aria-hidden="true" />
                </a>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Google Maps"
                  className="rounded-full w-10 h-10 flex items-center justify-center transition-all"
                  style={{ border: '1px solid rgba(255,255,255,0.25)', color: 'rgba(255,255,255,0.7)' }}
                  onMouseOver={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#80BC00'; (e.currentTarget as HTMLAnchorElement).style.borderColor = '#80BC00' }}
                  onMouseOut={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.7)'; (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.25)' }}
                >
                  <MapPin size={16} aria-hidden="true" />
                </a>
                <a
                  href="https://wa.me/33672587353"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="rounded-full w-10 h-10 flex items-center justify-center transition-all"
                  style={{ border: '1px solid rgba(255,255,255,0.25)', color: 'rgba(255,255,255,0.7)' }}
                  onMouseOver={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#80BC00'; (e.currentTarget as HTMLAnchorElement).style.borderColor = '#80BC00' }}
                  onMouseOut={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.7)'; (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.25)' }}
                >
                  <MessageCircle size={16} aria-hidden="true" />
                </a>
              </div>

              {/* Badge éco */}
              <p className="mt-3 text-xs" style={{ color: '#86efac' }}>♻ Pratiques éco-responsables</p>
            </div>

            {/* Colonne 2 — Nos Services */}
            <div aria-label="Footer navigation — Services">
              <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#ffffff' }}>Nos Services</p>
              <ul className="space-y-0.5">
                {serviceLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm block py-0.5 transition-colors"
                      style={{ color: 'rgba(255,255,255,0.7)' }}
                      onMouseOver={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#80BC00' }}
                      onMouseOut={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.7)' }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Colonne 3 — Zone d'intervention */}
            <div aria-label="Footer navigation — Zone d'intervention">
              <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#ffffff' }}>Zone d&apos;intervention</p>
              <p className="text-sm mb-3" style={{ color: 'rgba(255,255,255,0.7)' }}>
                Rayon 20 km autour de Saint-Didier-au-Mont-d&apos;Or
              </p>
              <ul className="space-y-0.5">
                {zones.map((zone) => (
                  <li key={zone.label} className="text-sm py-0.5">
                    {zone.href ? (
                      <Link
                        href={zone.href}
                        className="transition-colors"
                        style={{ color: 'rgba(255,255,255,0.7)' }}
                        onMouseOver={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#80BC00' }}
                        onMouseOut={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.7)' }}
                      >
                        {zone.label}
                      </Link>
                    ) : (
                      <span style={{ color: 'rgba(255,255,255,0.7)' }}>{zone.label}</span>
                    )}
                  </li>
                ))}
                <li className="text-sm py-0.5 mt-1">
                  <Link
                    href="/secteurs"
                    className="transition-colors font-semibold"
                    style={{ color: '#80BC00' }}
                    onMouseOver={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#ffffff' }}
                    onMouseOut={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#80BC00' }}
                  >
                    → Voir toutes nos zones
                  </Link>
                </li>
              </ul>
            </div>

            {/* Colonne 4 — Contact */}
            <div aria-label="Footer navigation — Contact">
              <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#ffffff' }}>Contact</p>
              <ul className="space-y-0.5">
                <li>
                  <a
                    href="https://wa.me/33672587353"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-2 py-1 text-sm transition-colors"
                    style={{ color: 'rgba(255,255,255,0.7)' }}
                    onMouseOver={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#80BC00' }}
                    onMouseOut={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.7)' }}
                  >
                    <MessageCircle size={14} className="mt-0.5 shrink-0" aria-hidden="true" />
                    WhatsApp — 06 72 58 73 53
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:contact@lmespacevert.fr"
                    className="flex items-start gap-2 py-1 text-sm transition-colors"
                    style={{ color: 'rgba(255,255,255,0.7)' }}
                    onMouseOver={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#80BC00' }}
                    onMouseOut={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.7)' }}
                  >
                    <Mail size={14} className="mt-0.5 shrink-0" aria-hidden="true" />
                    contact@lmespacevert.fr
                  </a>
                </li>
                <li className="flex items-start gap-2 py-1 text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>
                  <MapPin size={14} className="mt-0.5 shrink-0" aria-hidden="true" />
                  Saint-Didier-au-Mont-d&apos;Or, 69370 Rhône
                </li>
                <li className="flex items-start gap-2 py-1 text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>
                  <Clock size={14} className="mt-0.5 shrink-0" aria-hidden="true" />
                  Lun–Ven : 8h–18h / Sam : 8h–12h
                </li>
              </ul>

              <Link
                href="/devis"
                className="mt-4 block w-full text-center rounded-full py-2.5 text-sm font-semibold transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#80BC00', color: '#ffffff', boxShadow: 'rgb(128, 188, 0) 0px 0px 25px -14px' }}
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
        style={{ backgroundColor: '#071f16', borderTop: '1px solid rgba(255,255,255,0.15)' }}
      >
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            {/* Copyright */}
            <p style={{ color: 'rgba(255,255,255,0.8)' }}>© 2026 LM Espace Vert <span style={{ color: 'rgba(255,255,255,0.3)' }}>·</span> Paysagiste Lyon nord</p>

            {/* Liens légaux — flex-wrap pour mobile */}
            <div className="flex flex-wrap justify-center sm:justify-end gap-x-4 gap-y-2">
              <Link
                href="/mentions-legales"
                className="transition-colors"
                style={{ color: 'rgba(255,255,255,0.8)' }}
                onMouseOver={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#80BC00' }}
                onMouseOut={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.8)' }}
              >
                Mentions légales
              </Link>
              <span style={{ color: 'rgba(255,255,255,0.3)' }}>|</span>
              <Link
                href="/politique-confidentialite"
                className="transition-colors"
                style={{ color: 'rgba(255,255,255,0.8)' }}
                onMouseOver={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#80BC00' }}
                onMouseOut={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.8)' }}
              >
                Confidentialité
              </Link>
              <span style={{ color: 'rgba(255,255,255,0.3)' }}>|</span>
              <Link
                href="/cgu"
                className="transition-colors"
                style={{ color: 'rgba(255,255,255,0.8)' }}
                onMouseOver={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#80BC00' }}
                onMouseOut={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.8)' }}
              >
                CGU
              </Link>
              <span style={{ color: 'rgba(255,255,255,0.3)' }}>|</span>
              <Link
                href="/cgv"
                className="transition-colors"
                style={{ color: 'rgba(255,255,255,0.8)' }}
                onMouseOver={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#80BC00' }}
                onMouseOut={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.8)' }}
              >
                CGV
              </Link>
              <span style={{ color: 'rgba(255,255,255,0.3)' }}>|</span>
              <Link
                href="/accessibilite"
                className="transition-colors"
                style={{ color: 'rgba(255,255,255,0.8)' }}
                onMouseOver={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#80BC00' }}
                onMouseOut={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.8)' }}
              >
                Accessibilité
              </Link>
              <span style={{ color: 'rgba(255,255,255,0.3)' }}>|</span>
              <Link
                href="/plan-du-site"
                className="transition-colors"
                style={{ color: 'rgba(255,255,255,0.8)' }}
                onMouseOver={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#80BC00' }}
                onMouseOut={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.8)' }}
              >
                Plan du site
              </Link>
            </div>

            {/* Crédit agence */}
            <a
              href="https://internet.kayzen-lyon.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors text-xs whitespace-nowrap"
              style={{ color: 'rgba(255,255,255,0.8)' }}
              onMouseOver={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#80BC00' }}
              onMouseOut={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.8)' }}
            >
              Fièrement réalisé par <span style={{ color: '#80BC00' }}>Kayzen Web</span>
            </a>
          </div>
        </div>
      </div>

    </footer>
  )
}
