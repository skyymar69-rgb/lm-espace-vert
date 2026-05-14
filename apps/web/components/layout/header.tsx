'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Phone, Search, Sun, Moon, ChevronDown, ArrowRight } from 'lucide-react'
import { SearchModal } from '@/components/ui/search-modal'
import { MobileMenu } from './mobile-menu'

const navItems = [
  { href: '/services',     label: 'Services',    hasMega: true },
  { href: '/realisations', label: 'Réalisations', hasMega: false },
  { href: '/blog',         label: 'Blog',         hasMega: false },
  { href: '/a-propos',     label: 'À propos',     hasMega: false },
  { href: '/contact',      label: 'Contact',      hasMega: false },
] as const

const megaServices = [
  {
    href: '/services',
    label: 'Création de jardins',
    desc: 'Conception paysagère sur-mesure',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=360&h=200&fit=crop&q=80',
    emoji: '🌱',
  },
  {
    href: '/services',
    label: 'Entretien régulier',
    desc: 'Tonte, taille et désherbage',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=360&h=200&fit=crop&q=80',
    emoji: '✂️',
  },
  {
    href: '/services',
    label: 'Élagage & Abattage',
    desc: 'Arbres remarquables & sécurité',
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=360&h=200&fit=crop&q=80',
    emoji: '🌳',
  },
  {
    href: '/services',
    label: 'Maçonnerie paysagère',
    desc: 'Terrasses, allées et murets',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=360&h=200&fit=crop&q=80',
    emoji: '🏗️',
  },
  {
    href: '/services',
    label: 'Arrosage automatique',
    desc: 'Installation & programmation',
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=360&h=200&fit=crop&q=80',
    emoji: '💧',
  },
  {
    href: '/services',
    label: 'Engazonnement',
    desc: 'Semis, rouleaux, prairie fleurie',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=360&h=200&fit=crop&q=80',
    emoji: '🌿',
  },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [searchOpen, setSearchOpen] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)
  const pathname = usePathname()
  const megaRef = useRef<HTMLDivElement>(null)
  const megaTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const stored = document.documentElement.dataset.theme as 'light' | 'dark' | undefined
    setTheme(stored === 'dark' ? 'dark' : 'light')
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setSearchOpen(true)
      }
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
        className={`sticky top-0 z-40 bg-[--color-bg] border-b border-[--color-border] header-shrink${scrolled ? ' scrolled' : ''}`}
      >
        {/* Top bar */}
        <div className="bg-[--color-primary] text-white text-sm py-1.5">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 flex items-center justify-between gap-2">
            <p className="hidden sm:block text-xs font-medium tracking-wide text-white/90">
              🌿 Paysagiste — Saint-Didier-au-Mont-d&apos;Or &amp; rayon 20 km
            </p>
            <div className="flex items-center gap-4 ml-auto">
              <a
                href="mailto:contact@lmespacevert.fr"
                className="hidden md:block text-xs text-white/80 hover:text-white transition-colors"
              >
                contact@lmespacevert.fr
              </a>
              <a
                href="tel:+33674734698"
                className="flex items-center gap-1.5 text-white font-semibold hover:text-green-200 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
                aria-label="Appeler LM Espace Vert au 06 74 73 46 98"
              >
                <Phone size={13} aria-hidden="true" />
                <span>06 74 73 46 98</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main nav */}
        <div
          className={`container mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 transition-all duration-300 ${scrolled ? 'h-16' : 'h-20'}`}
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[--color-focus]"
            aria-label="LM Espace Vert — retour à l'accueil"
          >
            <Image
              src="/logo.png"
              alt="LM Espace Vert"
              width={160}
              height={64}
              priority
              className={`w-auto object-contain transition-all duration-300 ${scrolled ? 'h-10' : 'h-14'}`}
            />
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Navigation principale" className="hidden lg:block">
            <ul role="list" className="flex items-center gap-0.5">
              {navItems.map((item) => {
                const active = pathname === item.href || pathname.startsWith(item.href + '/')
                if (item.hasMega) {
                  return (
                    <li key={item.href} onMouseEnter={openMega} onMouseLeave={closeMega}>
                      <button
                        className={`relative flex items-center gap-1 rounded-md px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[--color-focus] ${
                          active || megaOpen
                            ? 'text-[--color-primary] bg-[--color-green-pale]'
                            : 'text-[--color-fg] hover:bg-[--color-bg-subtle] hover:text-[--color-primary]'
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
                        {active && (
                          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-[--color-primary]" aria-hidden="true" />
                        )}
                      </button>
                    </li>
                  )
                }
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`relative rounded-md px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[--color-focus] ${
                        active
                          ? 'text-[--color-primary] bg-[--color-green-pale]'
                          : 'text-[--color-fg] hover:bg-[--color-bg-subtle] hover:text-[--color-primary]'
                      }`}
                      aria-current={active ? 'page' : undefined}
                    >
                      {item.label}
                      {active && (
                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-[--color-primary]" aria-hidden="true" />
                      )}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setSearchOpen(true)}
              className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full border border-[--color-border] bg-[--color-bg-subtle] text-[--color-fg-subtle] text-xs hover:border-[--color-primary] hover:text-[--color-primary] transition-colors"
              aria-label="Rechercher"
              title="Rechercher (Ctrl+K)"
            >
              <Search size={13} aria-hidden="true" />
              <span className="hidden md:inline">Rechercher…</span>
              <kbd className="hidden lg:inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-[--color-border] text-[10px] font-mono">
                ⌘K
              </kbd>
            </button>

            <button
              onClick={toggleTheme}
              className="hidden sm:flex h-9 w-9 items-center justify-center rounded-full border border-[--color-border] text-[--color-fg-subtle] hover:text-[--color-primary] hover:border-[--color-primary] hover:bg-[--color-green-pale] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[--color-focus]"
              aria-label={theme === 'light' ? 'Passer en mode sombre' : 'Passer en mode clair'}
              data-tooltip={theme === 'light' ? 'Mode sombre' : 'Mode clair'}
            >
              {theme === 'light'
                ? <Moon size={15} aria-hidden="true" />
                : <Sun size={15} aria-hidden="true" />
              }
            </button>

            <Link href="/devis" className="btn-primary hidden sm:inline-flex btn-sm">
              Devis gratuit
            </Link>

            <MobileMenu items={navItems} />
          </div>
        </div>

        {/* ── Mega-menu panel ── */}
        {megaOpen && (
          <div
            id="mega-menu-services"
            ref={megaRef}
            role="region"
            aria-label="Menu services"
            className="absolute left-0 right-0 top-full z-50 border-b border-[--color-border] bg-[--color-bg] shadow-2xl animate-fade-in hidden lg:block"
            onMouseEnter={keepMega}
            onMouseLeave={closeMega}
          >
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 py-8">
              <div className="flex gap-6">
                {/* Service cards grid */}
                <div className="flex-1 grid grid-cols-3 gap-4">
                  {megaServices.map((service) => (
                    <Link
                      key={service.label}
                      href={service.href}
                      className="group flex flex-col overflow-hidden rounded-xl border border-[--color-border] bg-[--color-bg-elevated] hover:border-[--color-primary] hover:shadow-lg transition-all duration-200"
                    >
                      <div className="relative h-36 overflow-hidden bg-[--color-bg-subtle]">
                        <Image
                          src={service.image}
                          alt={service.label}
                          fill
                          sizes="200px"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                        <span className="absolute bottom-2 left-2 text-lg" aria-hidden="true">{service.emoji}</span>
                      </div>
                      <div className="p-3 flex-1 flex flex-col">
                        <p className="font-semibold text-[--color-fg] text-sm group-hover:text-[--color-primary] transition-colors leading-snug">
                          {service.label}
                        </p>
                        <p className="text-xs text-[--color-fg-muted] mt-0.5">{service.desc}</p>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Right sidebar */}
                <div className="w-56 flex-shrink-0 flex flex-col gap-4 rounded-2xl bg-[--color-green-pale] border border-[--color-border] p-5">
                  <div>
                    <p className="font-display font-bold text-[--color-fg] text-base leading-snug">
                      Votre projet<br />extérieur
                    </p>
                    <p className="mt-1.5 text-xs text-[--color-fg-muted] leading-relaxed">
                      Paysagiste créateur dans un rayon de 20 km autour de Lyon.
                    </p>
                  </div>

                  <Link
                    href="/services"
                    className="flex items-center justify-between gap-2 rounded-lg border border-[--color-border] bg-[--color-bg-elevated] px-4 py-2.5 text-sm font-semibold text-[--color-fg] hover:border-[--color-primary] hover:text-[--color-primary] transition-colors"
                  >
                    Tous les services
                    <ArrowRight size={14} aria-hidden="true" />
                  </Link>

                  <Link href="/devis" className="btn-primary text-sm justify-center">
                    Devis gratuit
                  </Link>

                  <div className="mt-auto pt-4 border-t border-[--color-border] space-y-1.5">
                    {[
                      '⭐ 5/5 sur Google',
                      '✅ 200+ clients',
                      '🌿 Éco-responsable',
                    ].map((t) => (
                      <p key={t} className="text-xs text-[--color-fg-subtle]">{t}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Backdrop when mega-menu is open */}
      {megaOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/20 backdrop-blur-[1px] hidden lg:block"
          onClick={() => setMegaOpen(false)}
          aria-hidden="true"
        />
      )}

      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  )
}
