'use client'

import { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import {
  Phone,
  ChevronDown,
} from 'lucide-react'
import { MobileMenu } from './mobile-menu'
import { ThemeToggle } from './theme-toggle'
import { AccessibilityMenu } from './accessibility-menu'
import { DigitalContactCard } from '@/components/ui/digital-contact-card'

const navItems = [
  { href: '/services',     label: 'Services',     hasMega: true },
  { href: '/realisations', label: 'Réalisations',  hasMega: false },
  { href: '/blog',         label: 'Blog',          hasMega: false },
  { href: '/a-propos',     label: 'À propos',      hasMega: false },
  { href: '/contact',      label: 'Contact',       hasMega: false },
] as const

const megaServices = [
  {
    href: '/services/creation-jardins',
    label: 'Création de jardins',
    desc: 'Conception paysagère sur-mesure',
    photo: '/images/blog-creation-jardin.webp',
  },
  {
    href: '/services/entretien-espaces-verts',
    label: 'Entretien régulier',
    desc: 'Tonte, taille et désherbage',
    photo: '/images/entretien-espaces-verts.webp',
  },
  {
    href: '/services/elagage-abattage',
    label: 'Élagage & Abattage',
    desc: 'Arbres remarquables & sécurité',
    photo: '/images/elagage-abattage.webp',
  },
  {
    href: '/services/maconnerie-paysagere',
    label: 'Maçonnerie paysagère',
    desc: 'Terrasses, allées et murets',
    photo: '/images/travaux-paysagers.webp',
  },
  {
    href: '/services/arrosage-automatique',
    label: 'Arrosage automatique',
    desc: 'Installation & programmation',
    photo: '/images/arrosage-automatique.webp',
  },
  {
    href: '/services/engazonnement',
    label: 'Engazonnement',
    desc: 'Semis, rouleaux, prairie fleurie',
    photo: '/images/blog-gazon-rouleau.webp',
  },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)
  const pathname                 = usePathname()
  const megaTimerRef             = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Scroll shadow
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Escape closes mega-menu
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMegaOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  // Close mega-menu on route change
  useEffect(() => { setMegaOpen(false) }, [pathname])

  const openMega = () => {
    if (megaTimerRef.current) clearTimeout(megaTimerRef.current)
    setMegaOpen(true)
  }
  const closeMega = () => {
    megaTimerRef.current = setTimeout(() => setMegaOpen(false), 120)
  }
  const keepMega = () => {
    if (megaTimerRef.current) clearTimeout(megaTimerRef.current)
  }

  return (
    <>
      {/* Skip link RGAA */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-[9999] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-[#425D07] focus:font-semibold focus:text-sm focus:outline focus:outline-2 focus:outline-[#80BC00] focus:shadow-lg"
      >
        Aller au contenu
      </a>

      <header
        className={`sticky top-0 z-40 bg-white border-b border-[#EDEDED] transition-shadow ${scrolled ? 'shadow-[rgba(0,0,0,0.06)_0px_4px_20px_0px]' : ''}`}
      >
        <div className="container mx-auto max-w-7xl flex items-center justify-between h-[72px] px-4 sm:px-6">

          {/* ── Logo ── */}
          <Link
            href="/"
            className="flex-shrink-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#80BC00]"
            aria-label="LM Espace Vert — Retour à l'accueil"
          >
            <Image
              src="/logo.png"
              alt="LM Espace Vert"
              width={140}
              height={56}
              priority
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* ── Nav centre (desktop) ── */}
          <nav role="navigation" aria-label="Navigation principale" className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item) => {
              const active = pathname === item.href || pathname.startsWith(item.href + '/')
              if (item.hasMega) {
                return (
                  <div key={item.href} onMouseEnter={openMega} onMouseLeave={closeMega}>
                    <button
                      className={`flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#80BC00] ${
                        active || megaOpen
                          ? 'text-[#425D07] font-semibold'
                          : 'text-[#2F2F2F] hover:text-[#80BC00]'
                      }`}
                      aria-expanded={megaOpen}
                      aria-haspopup="true"
                      aria-controls="mega-menu-services"
                      onClick={() => setMegaOpen((v) => !v)}
                    >
                      {item.label}
                      <ChevronDown
                        size={14}
                        aria-hidden="true"
                        className={`transition-transform duration-200 ${megaOpen ? 'rotate-180' : ''}`}
                      />
                    </button>
                  </div>
                )
              }
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#80BC00] ${
                    active
                      ? 'text-[#425D07] font-semibold'
                      : 'text-[#2F2F2F] hover:text-[#80BC00]'
                  }`}
                  aria-current={active ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          {/* ── Droite ── */}
          <div className="flex items-center gap-1">
            {/* Accessibilité */}
            <AccessibilityMenu />

            {/* Thème clair/sombre */}
            <ThemeToggle />

            {/* Carte de contact numérique */}
            <DigitalContactCard />

            {/* Téléphone (md+) */}
            <a
              href="tel:+33672587353"
              className="hidden md:flex items-center gap-1.5 text-sm font-medium text-[#2F2F2F] hover:text-[#80BC00] transition-colors"
              aria-label="Appeler LM Espace Vert au 06 72 58 73 53"
            >
              <Phone size={14} aria-hidden="true" />
              06 72 58 73 53
            </a>

            {/* Devis gratuit */}
            <Link
              href="/devis"
              className="hidden sm:inline-flex items-center rounded-full px-5 py-2 text-sm font-semibold transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#80BC00]"
              style={{ backgroundColor: '#80BC00', color: '#ffffff', boxShadow: 'rgb(128, 188, 0) 0px 0px 25px -14px' }}
            >
              Devis gratuit
            </Link>

            {/* Hamburger (mobile) — MobileMenu contient son propre bouton déclencheur */}
            <MobileMenu items={navItems} />
          </div>
        </div>

        {/* ── Mega-menu Services ── */}
        {megaOpen && (
          <div
            id="mega-menu-services"
            role="region"
            aria-label="Menu services"
            className="absolute left-0 right-0 z-50 hidden lg:block"
            onMouseEnter={keepMega}
            onMouseLeave={closeMega}
          >
            {/* Centred panel */}
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 pb-6">
              <div className="max-w-2xl mx-auto bg-white shadow-[rgba(0,0,0,0.06)_0px_4px_30px_0px] rounded-2xl border border-[#EDEDED] p-6 mt-1">
                {/* 3×2 grid */}
                <div className="grid grid-cols-3 gap-3">
                  {megaServices.map(({ href, label, desc, photo }) => (
                    <Link
                      key={label}
                      href={href}
                      onClick={() => setMegaOpen(false)}
                      className="flex flex-col gap-1.5 rounded-xl p-3 hover:bg-[#F4F9E8] transition-colors cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#80BC00]"
                    >
                      <div className="relative w-full h-10 rounded-lg overflow-hidden">
                        <Image
                          src={photo}
                          alt=""
                          fill
                          sizes="160px"
                          className="object-cover"
                        />
                      </div>
                      <span className="text-sm font-semibold text-[#2F2F2F] leading-snug">{label}</span>
                      <span className="text-xs text-[#6B6B6B]">{desc}</span>
                    </Link>
                  ))}
                </div>

                {/* Footer link */}
                <div className="mt-4 pt-4 border-t border-[#EDEDED] flex items-center justify-between gap-4 flex-wrap">
                  <Link
                    href="/services"
                    onClick={() => setMegaOpen(false)}
                    className="text-sm font-semibold hover:underline"
                    style={{ color: '#425D07' }}
                  >
                    Voir toutes nos prestations →
                  </Link>
                  <Link
                    href="/processus"
                    onClick={() => setMegaOpen(false)}
                    className="text-xs font-medium hover:underline"
                    style={{ color: '#5C606B' }}
                  >
                    Notre processus
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Backdrop */}
      {megaOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/20 backdrop-blur-[1px] hidden lg:block"
          onClick={() => setMegaOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  )
}
