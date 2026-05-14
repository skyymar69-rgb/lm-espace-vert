import type { Metadata } from 'next'
import Link from 'next/link'
import { Home } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Page introuvable (404) — LM Espace Vert',
  robots: { index: false },
}

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <p className="font-display text-8xl font-light text-[--color-accent] opacity-50" aria-hidden="true">
        404
      </p>
      <h1 className="mt-4 font-display text-3xl text-[--color-fg]">
        Page introuvable
      </h1>
      <p className="mx-auto mt-4 max-w-md text-[--color-fg-muted]">
        La page que vous cherchez n'existe pas ou a été déplacée.
        Vérifiez l'adresse ou revenez à l'accueil.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-md bg-[--color-accent] px-5 py-2.5 font-semibold text-[--color-accent-fg] transition-colors hover:bg-[--color-gold-500] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[--color-focus]"
        >
          <Home size={16} aria-hidden="true" />
          Retour à l'accueil
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-md border border-[--color-border] px-5 py-2.5 font-medium text-[--color-fg] transition-colors hover:bg-[--color-bg-subtle] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[--color-focus]"
        >
          Nous contacter
        </Link>
      </div>
    </div>
  )
}
