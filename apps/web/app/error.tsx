'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { AlertTriangle } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <AlertTriangle size={48} className="text-[--color-danger]" aria-hidden="true" />
      <h1 className="mt-4 font-display text-3xl text-[--color-fg]">
        Une erreur est survenue
      </h1>
      <p className="mx-auto mt-4 max-w-md text-[--color-fg-muted]">
        Désolé, quelque chose s'est mal passé. L'équipe a été notifiée.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <button
          onClick={reset}
          className="rounded-md bg-[--color-accent] px-5 py-2.5 font-semibold text-[--color-accent-fg] transition-colors hover:bg-[--color-gold-500] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[--color-focus]"
        >
          Réessayer
        </button>
        <Link
          href="/"
          className="rounded-md border border-[--color-border] px-5 py-2.5 font-medium text-[--color-fg] transition-colors hover:bg-[--color-bg-subtle] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[--color-focus]"
        >
          Retour à l'accueil
        </Link>
      </div>
    </div>
  )
}
