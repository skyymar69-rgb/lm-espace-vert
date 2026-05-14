import Link from 'next/link'
import { ThemeToggle } from './theme-toggle'
import { MobileMenu } from './mobile-menu'
import { DigitalContactCard } from '@/components/digital-contact-card'
import { Leaf } from 'lucide-react'

const navItems = [
  { href: '/services', label: 'Services' },
  { href: '/realisations', label: 'Réalisations' },
  { href: '/blog', label: 'Blog' },
  { href: '/conseils', label: 'Conseils' },
  { href: '/a-propos', label: 'À propos' },
] as const

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-[--color-border] bg-[--color-bg]/95 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-[--color-primary] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--color-focus]"
          aria-label="LM Espace Vert — retour à l'accueil"
        >
          <Leaf size={28} aria-hidden="true" className="text-[--color-accent]" />
          <span className="font-display text-xl font-semibold tracking-tight">
            LM Espace Vert
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav aria-label="Navigation principale" className="hidden md:block">
          <ul role="list" className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-md px-3 py-2 text-sm font-medium text-[--color-fg-muted] transition-colors hover:bg-[--color-bg-subtle] hover:text-[--color-fg] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--color-focus]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          <DigitalContactCard />
          <ThemeToggle />
          <Link
            href="/devis"
            className="hidden rounded-md bg-[--color-accent] px-4 py-2 text-sm font-semibold text-[--color-accent-fg] transition-colors hover:bg-[--color-gold-500] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--color-focus] sm:inline-flex"
          >
            Devis gratuit
          </Link>
          <MobileMenu items={navItems} />
        </div>
      </div>
    </header>
  )
}
