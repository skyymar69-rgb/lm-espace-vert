'use client'

import * as Dialog from '@radix-ui/react-dialog'
import { ContactRound, Download, Share2, Phone, Mail, MapPin, X } from 'lucide-react'

export function DigitalContactCard() {
  async function share() {
    const data = {
      title: 'LM Espace Vert',
      text: 'Paysagiste créateur — LM Espace Vert',
      url: 'https://www.lmespacevert.fr',
    }
    if ('share' in navigator && typeof (navigator as Navigator).share === 'function') {
      await (navigator as Navigator).share(data)
    } else {
      await (navigator as Navigator).clipboard.writeText('https://www.lmespacevert.fr')
    }
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button
          aria-label="Ouvrir la carte de contact"
          className="inline-flex h-9 items-center gap-1.5 rounded-md px-2.5 text-sm font-medium text-[--color-fg-muted] transition-colors hover:bg-[--color-bg-subtle] hover:text-[--color-fg] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--color-focus]"
        >
          <ContactRound size={16} aria-hidden="true" />
          <span className="hidden sm:inline">Contact</span>
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content
          className="fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-xl bg-[--color-bg-elevated] p-6 shadow-xl focus:outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95"
          aria-describedby="dcc-desc"
        >
          {/* Header */}
          <div className="flex items-start justify-between">
            <div>
              <Dialog.Title className="font-display text-2xl font-semibold text-[--color-fg]">
                LM Espace Vert
              </Dialog.Title>
              <p id="dcc-desc" className="text-sm text-[--color-fg-subtle]">
                Paysagiste créateur · Lyon & Région
              </p>
            </div>
            <Dialog.Close asChild>
              <button
                aria-label="Fermer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md text-[--color-fg-subtle] hover:bg-[--color-bg-subtle] hover:text-[--color-fg] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[--color-focus]"
              >
                <X size={18} aria-hidden="true" />
              </button>
            </Dialog.Close>
          </div>

          {/* Contact info */}
          <ul role="list" className="mt-5 space-y-3">
            <li>
              <a
                href="tel:+33XXXXXXXXX"
                className="flex items-center gap-3 rounded-md p-2 text-sm text-[--color-fg-muted] transition-colors hover:bg-[--color-bg-subtle] hover:text-[--color-fg] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[--color-focus]"
              >
                <Phone size={16} aria-hidden="true" className="text-[--color-accent]" />
                +33 (0)X XX XX XX XX
              </a>
            </li>
            <li>
              <a
                href="mailto:contact@lmespacevert.fr"
                className="flex items-center gap-3 rounded-md p-2 text-sm text-[--color-fg-muted] transition-colors hover:bg-[--color-bg-subtle] hover:text-[--color-fg] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[--color-focus]"
              >
                <Mail size={16} aria-hidden="true" className="text-[--color-accent]" />
                contact@lmespacevert.fr
              </a>
            </li>
            <li>
              <a
                href="https://www.google.com/maps/search/LM+Espace+Vert+Lyon"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-md p-2 text-sm text-[--color-fg-muted] transition-colors hover:bg-[--color-bg-subtle] hover:text-[--color-fg] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[--color-focus]"
              >
                <MapPin size={16} aria-hidden="true" className="text-[--color-accent]" />
                [Adresse], [Ville]
              </a>
            </li>
          </ul>

          {/* QR codes */}
          <div className="mt-6 grid grid-cols-3 gap-3">
            <figure className="text-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/qr/site.svg"
                alt="QR code du site web lmespacevert.fr"
                width={100}
                height={100}
                className="mx-auto rounded-md"
              />
              <figcaption className="mt-1 text-xs text-[--color-fg-subtle]">Site web</figcaption>
            </figure>
            <figure className="text-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/qr/maps.svg"
                alt="QR code Google Maps pour l'itinéraire"
                width={100}
                height={100}
                className="mx-auto rounded-md"
              />
              <figcaption className="mt-1 text-xs text-[--color-fg-subtle]">Itinéraire</figcaption>
            </figure>
            <figure className="text-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/qr/avis.svg"
                alt="QR code pour laisser un avis Google"
                width={100}
                height={100}
                className="mx-auto rounded-md"
              />
              <figcaption className="mt-1 text-xs text-[--color-fg-subtle]">Avis Google</figcaption>
            </figure>
          </div>

          {/* Actions */}
          <div className="mt-6 flex gap-3">
            <a
              href="/contact/vcard"
              download="lm-espace-vert.vcf"
              className="flex flex-1 items-center justify-center gap-2 rounded-md bg-[--color-accent] px-4 py-2.5 text-sm font-semibold text-[--color-accent-fg] transition-colors hover:bg-[--color-gold-500] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--color-focus]"
            >
              <Download size={15} aria-hidden="true" />
              Fiche contact (.vcf)
            </a>
            <button
              onClick={share}
              className="flex items-center gap-2 rounded-md border border-[--color-border] px-4 py-2.5 text-sm font-medium text-[--color-fg] transition-colors hover:bg-[--color-bg-subtle] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--color-focus]"
            >
              <Share2 size={15} aria-hidden="true" />
              Partager
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
