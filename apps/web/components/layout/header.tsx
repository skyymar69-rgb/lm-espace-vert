'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import {
  Phone,
  Sun,
  Moon,
  ChevronDown,
  Scissors,
  TreePine,
  Sprout,
  Layers,
  Droplets,
  Flower2,
} from 'lucide-react'
import { MobileMenu } from './mobile-menu'

const navItems = [
  { href: '/services',     label: 'Services',     hasMega: true },
  { href: '/realisations', label: 'Réalisations',  hasMega: false },
  { href: '/blog',         label: 'Blog',          hasMega: false },
  { href: '/a-propos',     label: 'À propos',      hasMega: false },
  { href: '/contact',      label: 'Contact',       hasMega: false },
] as const

const megaServices = [
  {
    href: '/services',
    label: 'Création de jardins',
    desc: 'Conception paysagère sur-mesure',
    Icon: Sprout,
  },
  {
    href: '/services',
    label: 'Entretien régulier',
    desc: 'Tonte, taille et désherbage',
    Icon: Scissors,
  },
  {
    href: '/services',
    label: 'Élagage & Abattage',
    desc: 'Arbres remarquables & sécurité',
    Icon: TreePine,
  },
  {
    href: '/services',
    label: 'Maçonnerie paysagère',
    desc: 'Terrasses, allées et murets',
    Icon: Layers,
  },
  {
    href: '/services',
    label: 'Arrosage automatique',
    desc: 'Installation & programmation',
    Icon: Droplets,
  },
  {
    href: '/services',
    label: 'Engazonnement',
    desc: 'Semis, rouleaux, prairie fleurie',
    Icon: Flower2,
  },
]

export function Header() {
  const [scrolled, setScrolled]     = useState(false)
  const [theme, setTheme]           = useState<'light' | 'dark'>('light')
  const [megaOpen, setMegaOpen]     = useState(false)
  const pathname                     = usePathname()
  const megaTimerRef                 = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Initialise theme from data-theme attribute set by the no-flash script
  useEffect(() => {
    const stored = document.documentElement.dataset.theme as 'light' | 'dark' | undefined
    setTheme(stored === 'dark' ? 'dark' : 'light')
  }, [])

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

  const toggleTheme = useCallback(() => {
    const next = theme === 'light' ? 'dark' : 'light'
    document.documentElement.dataset.theme = next
    localStorage.setItem('theme', next)
    setTheme(next)
  }, [theme])

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
      <header
        className={`sticky top-0 z-40 bg-white dark:bg-[#0D0D0D] border-b border-[--color-border] transition-shadow ${scrolled ? 'shadow-md' : ''}`}
      >
        <div className="container mx-auto max-w-7xl flex items-center justify-between h-[72px] px-4 sm:px-6">

          {/* ── Logo ── */}
          <Link
            href="/"
            className="flex-shrink-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[--color-focus]"
            aria-label="LM Espace Vert — retour à l'accueil"
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
                      className={`flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[--color-focus] ${
                        active || megaOpen
                          ? 'text-[#275524] font-semibold dark:text-green-400'
                          : 'text-[--color-fg-muted] hover:text-[#275524] dark:hover:text-green-400'
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
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[--color-focus] ${
                    active
                      ? 'text-[#275524] font-semibold dark:text-green-400'
                      : 'text-[--color-fg-muted] hover:text-[#275524] dark:hover:text-green-400'
                  }`}
                  aria-current={active ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          {/* ── Droite ── */}
          <div className="flex items-center gap-2">
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="h-9 w-9 flex items-center justify-center rounded-full hover:bg-[--color-bg-subtle] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[--color-focus] text-[--color-fg-muted]"
              aria-label={theme === 'light' ? 'Passer en mode sombre' : 'Passer en mode clair'}
            >
              {theme === 'light'
                ? <Moon size={16} aria-hidden="true" />
                : <Sun size={16} aria-hidden="true" />
              }
            </button>

            {/* Téléphone (md+) */}
            <a
              href="tel:+33674734698"
              className="hidden md:flex items-center gap-1.5 text-sm font-medium text-[--color-fg] hover:text-[#275524] transition-colors"
              aria-label="Appeler LM Espace Vert au 06 74 73 46 98"
            >
              <Phone size={14} aria-hidden="true" />
              06 74 73 46 98
            </a>

            {/* Devis gratuit */}
            <Link
              href="/devis"
              className="hidden sm:inline-flex items-center rounded-full px-5 py-2 text-sm font-semibold transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#275524]"
              style={{ backgroundColor: '#275524', color: '#fff' }}
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
              <div className="max-w-2xl mx-auto bg-white dark:bg-[#1A1A1A] shadow-xl rounded-2xl border border-[--color-border] p-6 mt-1">
                {/* 3×2 grid */}
                <div className="grid grid-cols-3 gap-3">
                  {megaServices.map(({ href, label, desc, Icon }) => (
                    <Link
                      key={label}
                      href={href}
                      onClick={() => setMegaOpen(false)}
                      className="flex flex-col gap-1 rounded-xl p-3 hover:bg-[--color-green-light] transition-colors cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-[--color-focus]"
                    >
                      <Icon size={18} style={{ color: '#275524' }} aria-hidden="true" />
                      <span className="text-sm font-semibold text-[--color-fg] leading-snug">{label}</span>
                      <span className="text-xs text-[--color-fg-muted]">{desc}</span>
                    </Link>
                  ))}
                </div>

                {/* Footer link */}
                <div className="mt-4 pt-4 border-t border-[--color-border]">
                  <Link
                    href="/services"
                    onClick={() => setMegaOpen(false)}
                    className="text-sm font-semibold hover:underline"
                    style={{ color: '#275524' }}
                  >
                    Voir toutes nos prestations →
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
