import type { Metadata } from 'next'
import Link from 'next/link'
import { ContactForm } from '@/components/forms/contact-form'
import { CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Demander un devis gratuit — LM Espace Vert',
  description:
    'Obtenez un devis gratuit et sans engagement de LM Espace Vert pour votre projet de jardin. Réponse sous 48h.',
  alternates: { canonical: 'https://www.lmespacevert.fr/devis' },
}

const guarantees = [
  'Devis gratuit et sans engagement',
  'Réponse sous 48h',
  'Visite sur site incluse',
  'Conseils personnalisés',
]

export default function DevisPage() {
  return (
    <>
      <nav aria-label="Fil d'Ariane" className="border-b border-[--color-border] bg-[--color-bg-subtle]">
        <div className="container mx-auto max-w-7xl px-4 py-3 sm:px-6">
          <ol role="list" className="flex items-center gap-2 text-sm text-[--color-fg-subtle]">
            <li><Link href="/" className="hover:text-[--color-fg] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[--color-focus]">Accueil</Link></li>
            <li aria-hidden="true">/</li>
            <li><span aria-current="page" className="text-[--color-fg]">Devis gratuit</span></li>
          </ol>
        </div>
      </nav>

      <div className="container mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[--color-accent]">
              Sans engagement
            </p>
            <h1 className="mt-2 font-display text-[clamp(2.25rem,5vw,3.75rem)] text-[--color-fg]">
              Demandez votre devis gratuit
            </h1>
            <p className="mt-4 text-lg text-[--color-fg-muted]">
              Décrivez votre projet ci-dessous. Nous vous contactons sous 48h pour organiser
              une visite et vous remettre un devis détaillé.
            </p>

            <ul role="list" className="mt-8 space-y-3">
              {guarantees.map((g) => (
                <li key={g} className="flex items-center gap-3 text-[--color-fg-muted]">
                  <CheckCircle size={18} aria-hidden="true" className="shrink-0 text-[--color-success]" />
                  {g}
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-xl bg-[--color-forest-800] p-6 text-[--color-forest-200]">
              <p className="font-semibold text-white">Préférez-vous appeler ?</p>
              <p className="mt-1 text-sm">Notre équipe vous reçoit du lundi au vendredi, 8h-18h.</p>
              <a
                href="tel:+33XXXXXXXXX"
                className="mt-3 inline-block text-[--color-gold-300] font-semibold hover:text-[--color-gold-200] focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
              >
                +33 (0)X XX XX XX XX
              </a>
            </div>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  )
}
