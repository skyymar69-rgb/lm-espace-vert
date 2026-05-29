'use client'

import { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import {
  ChevronDown,
} from 'lucide-react'
import { MobileMenu } from './mobile-menu'
import { AccessibilityMenu } from './accessibility-menu'
import { WeatherWidget } from '@/components/ui/weather-widget'

const navItems = [
  { href: '/services',     label: 'Services',     hasMega: true },
  { href: '/realisations', label: 'Réalisations',  hasMega: false },
  { href: '/galerie',      label: 'Galerie',        hasMega: false },
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
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-white/96 backdrop-blur-md shadow-[0_2px_24px_rgba(11,61,44,0.10)] border-b border-[#E8E8E8]'
            : 'bg-white border-b border-[#EDEDED]'
        }`}
      >
        <div className="container mx-auto max-w-7xl flex items-center justify-between h-[76px] px-4 sm:px-6">

          {/* ── Logo ── */}
          <Link
            href="/"
            className="flex-shrink-0 transition-all duration-200 hover:opacity-85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#80BC00] rounded-sm"
            aria-label="LM Espace Vert — Retour à l'accueil"
          >
            <Image
              src="/logo.png"
              alt="LM Espace Vert"
              width={148}
              height={56}
              priority
              className="h-11 w-auto object-contain"
            />
          </Link>

          {/* ── Nav centre (desktop) ── */}
          <nav role="navigation" aria-label="Navigation principale" className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const active = pathname === item.href || pathname.startsWith(item.href + '/')
              if (item.hasMega) {
                return (
                  <div key={item.href} onMouseEnter={openMega} onMouseLeave={closeMega}>
                    <button
                      className={`group relative flex items-center gap-1 px-3.5 py-2 text-sm font-medium tracking-wide transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#80BC00] focus-visible:rounded-md ${
                        active || megaOpen
                          ? 'text-[#425D07] font-semibold'
                          : 'text-[#2F2F2F] hover:text-[#425D07]'
                      }`}
                      aria-expanded={megaOpen}
                      aria-haspopup="true"
                      aria-controls="mega-menu-services"
                      onClick={() => setMegaOpen((v) => !v)}
                    >
                      {item.label}
                      <ChevronDown
                        size={13}
                        aria-hidden="true"
                        className={`transition-transform duration-200 ${megaOpen ? 'rotate-180' : ''}`}
                      />
                      {/* Underline indicator */}
                      <span
                        className={`absolute bottom-0 left-2 right-2 h-[2px] rounded-full bg-[#80BC00] transition-transform duration-200 origin-left ${
                          active || megaOpen ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                )
              }
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group relative px-3.5 py-2 text-sm font-medium tracking-wide transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#80BC00] focus-visible:rounded-md ${
                    active
                      ? 'text-[#425D07] font-semibold'
                      : 'text-[#2F2F2F] hover:text-[#425D07]'
                  }`}
                  aria-current={active ? 'page' : undefined}
                >
                  {item.label}
                  {/* Underline indicator */}
                  <span
                    className={`absolute bottom-0 left-2 right-2 h-[2px] rounded-full bg-[#80BC00] transition-transform duration-200 origin-left ${
                      active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                    aria-hidden="true"
                  />
                </Link>
              )
            })}
          </nav>

          {/* ── Droite ── */}
          <div className="flex items-center gap-1.5">
            {/* Météo Lyon */}
            <WeatherWidget />

            {/* Accessibilité */}
            <AccessibilityMenu />

            {/* Séparateur vertical discret */}
            <span className="hidden sm:block w-px h-5 bg-[#E0E0E0] mx-1" aria-hidden="true" />

            {/* Devis gratuit */}
            <Link
              href="/devis"
              className="hidden sm:inline-flex items-center rounded-full px-5 py-2.5 text-sm font-semibold tracking-wide transition-all duration-200 hover:brightness-110 hover:shadow-[0_4px_16px_rgba(128,188,0,0.35)] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#80BC00]"
              style={{ backgroundColor: '#80BC00', color: '#0B3D2C', boxShadow: '0 2px 12px rgba(128,188,0,0.25)' }}
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
              <div className="max-w-2xl mx-auto bg-white/98 backdrop-blur-sm shadow-[0_8px_40px_rgba(11,61,44,0.12),0_2px_8px_rgba(0,0,0,0.06)] rounded-2xl border border-[#E8EDE4] p-6 mt-2">
                {/* 3×2 grid */}
                <div className="grid grid-cols-3 gap-3">
                  {megaServices.map(({ href, label, desc, photo }) => (
                    <Link
                      key={label}
                      href={href}
                      onClick={() => setMegaOpen(false)}
                      className="group flex flex-col gap-2 rounded-xl p-3 hover:bg-[#F2F8E7] transition-colors duration-150 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#80BC00]"
                    >
                      <div className="relative w-full h-12 rounded-lg overflow-hidden">
                        <Image
                          src={photo}
                          alt=""
                          fill
                          sizes="160px"
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <span className="text-sm font-semibold text-[#2F2F2F] leading-snug group-hover:text-[#425D07] transition-colors">{label}</span>
                      <span className="text-xs text-[#6B6B6B] leading-snug">{desc}</span>
                    </Link>
                  ))}
                </div>

                {/* Footer link */}
                <div className="mt-5 pt-4 border-t border-[#EBEBEB] flex items-center justify-between gap-4 flex-wrap">
                  <Link
                    href="/services"
                    onClick={() => setMegaOpen(false)}
                    className="text-sm font-semibold transition-colors hover:text-[#80BC00]"
                    style={{ color: '#425D07' }}
                  >
                    Voir toutes nos prestations →
                  </Link>
                  <Link
                    href="/processus"
                    onClick={() => setMegaOpen(false)}
                    className="text-xs font-medium transition-colors hover:text-[#425D07]"
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
