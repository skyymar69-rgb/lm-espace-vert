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
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center" style={{ backgroundColor: '#F7F5F0' }}>
      <AlertTriangle size={48} style={{ color: '#E53E3E' }} aria-hidden="true" />
      <h1 className="mt-4 font-display text-3xl font-bold" style={{ color: '#425D07' }}>
        Une erreur est survenue
      </h1>
      <p className="mx-auto mt-4 max-w-md text-[#8C8F94]">
        Désolé, quelque chose s&apos;est mal passé. Réessayez ou revenez à l&apos;accueil.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <button
          onClick={reset}
          className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#80BC00]"
          style={{ backgroundColor: '#80BC00', color: '#ffffff', boxShadow: 'rgb(128, 188, 0) 0px 0px 25px -14px' }}
        >
          Réessayer
        </button>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-[#EDEDED] bg-white px-6 py-3 text-sm font-semibold text-[#2F2F2F] transition-colors hover:border-[#80BC00] hover:text-[#425D07] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#80BC00]"
        >
          Retour à l&apos;accueil
        </Link>
      </div>
    </div>
  )
}
