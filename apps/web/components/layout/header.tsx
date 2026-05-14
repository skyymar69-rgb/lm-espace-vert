'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { Phone, Search, Sun, Moon } from 'lucide-react'
import { SearchModal } from '@/components/ui/search-modal'
import { MobileMenu } from './mobile-menu'

const navItems = [
  { href: '/services',     label: 'Services' },
  { href: '/realisations', label: 'Réalisations' },
  { href: '/blog',         label: 'Blog' },
  { href: '/a-propos',     label: 'À propos' },
  { href: '/contact',      label: 'Contact' },
] as const

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [searchOpen, setSearchOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const stored = document.documentElement.dataset.theme as 'light' | 'dark' | undefined
    setTheme(stored === 'dark' ? 'dark' : 'light')
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Keyboard shortcut: Cmd/Ctrl+K opens search
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setSearchOpen(true)
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  const toggleTheme = useCallback(() => {
    const next = theme === 'light' ? 'dark' : 'light'
    document.documentElement.dataset.theme = next
    localStorage.setItem('theme', next)
    setTheme(next)
  }, [theme])

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
            {/* Search button */}
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

            {/* Theme toggle */}
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
      </header>

      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  )
}
