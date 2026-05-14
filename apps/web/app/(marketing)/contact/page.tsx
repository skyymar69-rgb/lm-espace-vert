import type { Metadata } from 'next'
import Link from 'next/link'
import { ContactForm } from '@/components/forms/contact-form'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { JsonLd } from '@/components/seo/json-ld'

export const metadata: Metadata = {
  title: 'Nous contacter — LM Espace Vert',
  description:
    'Contactez LM Espace Vert pour un devis gratuit ou toute question. Paysagiste à Lyon, disponible du lundi au vendredi.',
  alternates: { canonical: 'https://www.lmespacevert.fr/contact' },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.lmespacevert.fr' },
    { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://www.lmespacevert.fr/contact' },
  ],
}

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      {/* Breadcrumb */}
      <nav aria-label="Fil d'Ariane" className="border-b border-[--color-border] bg-[--color-bg-subtle]">
        <div className="container mx-auto max-w-7xl px-4 py-3 sm:px-6">
          <ol role="list" className="flex items-center gap-2 text-sm text-[--color-fg-subtle]">
            <li><Link href="/" className="hover:text-[--color-fg] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[--color-focus]">Accueil</Link></li>
            <li aria-hidden="true">/</li>
            <li><span aria-current="page" className="text-[--color-fg]">Contact</span></li>
          </ol>
        </div>
      </nav>

      <div className="container mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Info */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[--color-accent]">
              Parlons de votre projet
            </p>
            <h1 className="mt-2 font-display text-[clamp(2.25rem,5vw,3.75rem)] text-[--color-fg]">
              Nous contacter
            </h1>
            <p className="mt-4 text-lg text-[--color-fg-muted]">
              Une question, un projet, une demande de devis ? Nous vous répondons sous 48h.
            </p>

            <address className="mt-8 space-y-4 not-italic">
              <p className="flex items-start gap-3">
                <Phone size={20} aria-hidden="true" className="mt-0.5 shrink-0 text-[--color-accent]" />
                <span>
                  <strong className="block text-[--color-fg]">Téléphone</strong>
                  <a
                    href="tel:+33XXXXXXXXX"
                    className="text-[--color-fg-muted] hover:text-[--color-fg] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[--color-focus]"
                  >
                    +33 (0)X XX XX XX XX
                  </a>
                </span>
              </p>
              <p className="flex items-start gap-3">
                <Mail size={20} aria-hidden="true" className="mt-0.5 shrink-0 text-[--color-accent]" />
                <span>
                  <strong className="block text-[--color-fg]">Email</strong>
                  <a
                    href="mailto:contact@lmespacevert.fr"
                    className="text-[--color-fg-muted] hover:text-[--color-fg] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[--color-focus]"
                  >
                    contact@lmespacevert.fr
                  </a>
                </span>
              </p>
              <p className="flex items-start gap-3">
                <MapPin size={20} aria-hidden="true" className="mt-0.5 shrink-0 text-[--color-accent]" />
                <span>
                  <strong className="block text-[--color-fg]">Adresse</strong>
                  <span className="text-[--color-fg-muted]">[À compléter — adresse complète]</span>
                </span>
              </p>
              <p className="flex items-start gap-3">
                <Clock size={20} aria-hidden="true" className="mt-0.5 shrink-0 text-[--color-accent]" />
                <span>
                  <strong className="block text-[--color-fg]">Horaires</strong>
                  <span className="text-[--color-fg-muted]">Lundi – Vendredi : 8h00 – 18h00</span>
                </span>
              </p>
            </address>

            {/* vCard download */}
            <div className="mt-8 rounded-xl border border-[--color-border] bg-[--color-bg-elevated] p-6">
              <h2 className="font-semibold text-[--color-fg]">Carte de contact numérique</h2>
              <p className="mt-1 text-sm text-[--color-fg-muted]">
                Téléchargez notre fiche contact au format vCard pour l'ajouter directement à vos contacts.
              </p>
              <a
                href="/contact/vcard"
                download="lm-espace-vert.vcf"
                className="mt-4 inline-flex items-center gap-2 rounded-md bg-[--color-accent] px-4 py-2 text-sm font-semibold text-[--color-accent-fg] transition-colors hover:bg-[--color-gold-500] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[--color-focus]"
              >
                Télécharger (.vcf)
              </a>
            </div>
          </div>

          {/* Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  )
}
