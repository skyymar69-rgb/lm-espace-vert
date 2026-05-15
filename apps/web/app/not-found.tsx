import type { Metadata } from 'next'
import Link from 'next/link'
import { Home, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Page introuvable (404) — LM Espace Vert',
  robots: { index: false },
}

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center" style={{ backgroundColor: '#F7F5F0' }}>
      <p className="font-display text-9xl font-bold leading-none" style={{ color: 'rgba(66,93,7,0.12)' }} aria-hidden="true">
        404
      </p>
      <h1 className="mt-2 font-display text-3xl font-bold" style={{ color: '#425D07' }}>
        Page introuvable
      </h1>
      <p className="mx-auto mt-4 max-w-md text-[#8C8F94]">
        La page que vous cherchez n&apos;existe pas ou a été déplacée.
        Vérifiez l&apos;adresse ou revenez à l&apos;accueil.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#80BC00]"
          style={{ backgroundColor: '#80BC00', color: '#ffffff', boxShadow: 'rgb(128, 188, 0) 0px 0px 25px -14px' }}
        >
          <Home size={15} aria-hidden="true" />
          Retour à l&apos;accueil
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-full border border-[#EDEDED] bg-white px-6 py-3 text-sm font-semibold text-[#2F2F2F] transition-colors hover:border-[#80BC00] hover:text-[#425D07] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#80BC00]"
        >
          Nous contacter <ArrowRight size={14} aria-hidden="true" />
        </Link>
      </div>
      <div className="mt-10">
        <p className="text-sm text-[#8C8F94] mb-4">Pages populaires :</p>
        <div className="flex flex-wrap justify-center gap-2">
          {[
            { href: '/services', label: 'Nos services' },
            { href: '/realisations', label: 'Réalisations' },
            { href: '/devis', label: 'Devis gratuit' },
            { href: '/blog', label: 'Blog' },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="rounded-full border border-[#EDEDED] bg-white px-4 py-1.5 text-xs font-medium text-[#8C8F94] hover:border-[#80BC00] hover:text-[#425D07] transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
