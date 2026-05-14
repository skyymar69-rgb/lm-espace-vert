import Link from 'next/link'
import Image from 'next/image'
import { Phone } from 'lucide-react'
import { MobileMenu } from './mobile-menu'

const navItems = [
  { href: '/services', label: 'Services' },
  { href: '/realisations', label: 'Réalisations' },
  { href: '/blog', label: 'Blog' },
  { href: '/a-propos', label: 'À propos' },
  { href: '/contact', label: 'Contact' },
] as const

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white border-b border-[--color-border] shadow-sm">
      {/* Top bar */}
      <div className="bg-[--color-primary] text-white text-sm py-1.5">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 flex items-center justify-between gap-2">
          <p className="hidden sm:block text-xs font-medium tracking-wide">
            Paysagiste — Saint-Didier-au-Mont-d&apos;Or &amp; rayon 20 km
          </p>
          <a
            href="tel:+33674734698"
            className="flex items-center gap-1.5 text-white font-semibold hover:text-green-200 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-white ml-auto"
          >
            <Phone size={14} aria-hidden="true" />
            06 74 73 46 98
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="container mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
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
            className="h-14 w-auto object-contain"
          />
        </Link>

        {/* Desktop navigation */}
        <nav aria-label="Navigation principale" className="hidden lg:block">
          <ul role="list" className="flex items-center gap-0.5">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-md px-4 py-2 text-sm font-semibold text-[--color-fg] transition-colors hover:bg-[--color-bg-subtle] hover:text-[--color-primary] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[--color-focus]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <Link
            href="/devis"
            className="btn-primary hidden sm:inline-flex"
          >
            Devis gratuit
          </Link>
          <MobileMenu items={navItems} />
        </div>
      </div>
    </header>
  )
}
