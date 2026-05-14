import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const navLinks = [
  { href: '/services',    label: 'Nos Services' },
  { href: '/realisations', label: 'Réalisations' },
  { href: '/blog',        label: 'Blog & Conseils' },
  { href: '/a-propos',    label: 'Notre Histoire' },
  { href: '/devis',       label: 'Devis Gratuit' },
]

export function SiteMapSection() {
  return (
    <section className="bg-[--color-bg-subtle] border-t border-[--color-border] py-12">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">

        {/* Nav links grid */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group flex items-center gap-2 text-sm font-medium text-[--color-fg-muted] hover:text-[#80BC00] transition-colors"
            >
              {link.label}
              <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: '#425D07' }} />
            </Link>
          ))}
        </div>

        {/* CTA strip */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-8 pt-8 border-t border-[--color-border] gap-4">
          <div>
            <p className="text-sm text-[--color-fg-muted]">Vous avez un projet ?</p>
            <p className="font-semibold text-[--color-fg]">Devis gratuit · Réponse en 24h · Zone 20 km</p>
          </div>
          <div className="flex gap-3 flex-wrap">
            <Link
              href="/contact"
              className="rounded-full border border-[--color-border] px-4 py-2 text-sm text-[--color-fg] hover:border-[#80BC00] hover:text-[#80BC00] transition-colors"
            >
              Nous contacter
            </Link>
            <Link
              href="/devis"
              className="rounded-full px-4 py-2 text-sm font-semibold transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#80BC00', color: '#fff', boxShadow: 'rgb(128, 188, 0) 0px 0px 25px -14px' }}
            >
              Devis gratuit
            </Link>
          </div>
        </div>

      </div>
    </section>
  )
}
