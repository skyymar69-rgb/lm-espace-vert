'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { X, Download, Share2, Phone, Mail, Globe, MapPin, CreditCard } from 'lucide-react'
import QRCode from 'qrcode'

interface QRData {
  site: string
  maps: string
  avis: string
}

export function DigitalContactCard() {
  const [open, setOpen] = useState(false)
  const [qr, setQr] = useState<QRData | null>(null)
  const [canShare, setCanShare] = useState(false)

  useEffect(() => {
    setCanShare(typeof navigator !== 'undefined' && !!navigator.share)
  }, [])

  // Generate QR codes on open
  useEffect(() => {
    if (!open || qr) return
    const qrOptions = {
      width: 160,
      margin: 1,
      color: { dark: '#425D07', light: '#ffffff' },
    }
    Promise.all([
      QRCode.toDataURL('https://www.lmespacevert.fr', qrOptions),
      QRCode.toDataURL('https://maps.google.com/?q=LM+Espace+Vert+Saint-Didier-au-Mont-d%27Or', qrOptions),
      QRCode.toDataURL(
        'https://search.google.com/local/writereview?placeid=ChIJN1t_tDeuEmsRUsic12J56jE',
        qrOptions,
      ),
    ]).then(([site, maps, avis]) => {
      setQr({ site, maps, avis })
    })
  }, [open, qr])

  // Close on Escape
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  // Lock body scroll when modal open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  const handleShare = useCallback(async () => {
    if (!navigator.share) return
    try {
      await navigator.share({
        title: 'LM Espace Vert — Léo Maurice, paysagiste',
        text: 'Contactez Léo Maurice, paysagiste créateur à Saint-Didier-au-Mont-d\'Or.',
        url: 'https://www.lmespacevert.fr',
      })
    } catch {
      // user cancelled or not supported
    }
  }, [])

  return (
    <>
      {/* Trigger button */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Carte de contact numérique"
        title="Carte de contact numérique"
        className="flex items-center justify-center w-9 h-9 rounded-lg transition-colors hover:bg-[#F4F9E8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#80BC00]"
        style={{ color: '#425D07' }}
      >
        <CreditCard size={18} aria-hidden="true" />
      </button>

      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)' }}
          onClick={(e) => { if (e.target === e.currentTarget) setOpen(false) }}
          role="dialog"
          aria-modal="true"
          aria-label="Carte de contact numérique"
        >
          {/* Card */}
          <div
            className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-[20px] bg-white shadow-2xl"
            style={{ border: '1px solid #EDEDED' }}
          >
            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              aria-label="Fermer"
              className="absolute top-4 right-4 z-10 flex items-center justify-center w-8 h-8 rounded-full transition-colors hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#80BC00]"
              style={{ color: '#6B6B6B' }}
            >
              <X size={16} aria-hidden="true" />
            </button>

            {/* Header band */}
            <div
              className="flex items-center gap-4 px-6 py-5 rounded-t-[20px]"
              style={{ backgroundColor: '#0B3D2C' }}
            >
              <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white/30 flex-shrink-0 bg-white/10">
                <Image
                  src="/images/leo-portrait.webp"
                  alt="Léo Maurice"
                  fill
                  className="object-cover"
                  onError={() => {/* fallback silently */}}
                />
              </div>
              <div>
                <p className="text-white font-bold text-lg leading-tight" style={{ fontFamily: 'var(--font-raleway, sans-serif)' }}>
                  Léo Maurice
                </p>
                <p className="text-white/80 text-sm mt-0.5">Paysagiste créateur</p>
                <p className="text-white/60 text-xs mt-0.5">LM Espace Vert</p>
              </div>
            </div>

            {/* Contact info */}
            <div className="px-6 py-4 flex flex-col gap-2.5">
              <a
                href="tel:+33672587353"
                className="flex items-center gap-3 text-sm font-medium transition-colors hover:opacity-80"
                style={{ color: '#0B3D2C' }}
              >
                <Phone size={15} aria-hidden="true" style={{ color: '#80BC00' }} />
                06 72 58 73 53
              </a>
              <a
                href="mailto:contact@lmespacevert.fr"
                className="flex items-center gap-3 text-sm font-medium transition-colors hover:opacity-80"
                style={{ color: '#0B3D2C' }}
              >
                <Mail size={15} aria-hidden="true" style={{ color: '#80BC00' }} />
                contact@lmespacevert.fr
              </a>
              <a
                href="https://www.lmespacevert.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm font-medium transition-colors hover:opacity-80"
                style={{ color: '#0B3D2C' }}
              >
                <Globe size={15} aria-hidden="true" style={{ color: '#80BC00' }} />
                www.lmespacevert.fr
              </a>
              <div className="flex items-center gap-3 text-sm" style={{ color: '#6B6B6B' }}>
                <MapPin size={15} aria-hidden="true" style={{ color: '#80BC00' }} />
                Saint-Didier-au-Mont-d&apos;Or, 69370
              </div>
            </div>

            {/* Divider */}
            <div className="mx-6 border-t" style={{ borderColor: '#EDEDED' }} />

            {/* QR Codes grid */}
            <div className="px-6 py-4">
              <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: '#6B6B6B' }}>
                Codes QR
              </p>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: 'Site web', key: 'site' as const },
                  { label: 'Google Maps', key: 'maps' as const },
                  { label: 'Laisser un avis', key: 'avis' as const },
                ].map(({ label, key }) => (
                  <div key={key} className="flex flex-col items-center gap-1.5">
                    <div
                      className="w-full aspect-square rounded-xl flex items-center justify-center overflow-hidden"
                      style={{ border: '1px solid #EDEDED', padding: '6px' }}
                    >
                      {qr ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={qr[key]}
                          alt={`QR Code ${label}`}
                          className="w-full h-full object-contain"
                        />
                      ) : (
                        <div
                          className="w-full h-full rounded-lg animate-pulse"
                          style={{ backgroundColor: '#F4F9E8' }}
                        />
                      )}
                    </div>
                    <span className="text-xs text-center leading-tight" style={{ color: '#6B6B6B' }}>
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="mx-6 border-t" style={{ borderColor: '#EDEDED' }} />

            {/* Actions */}
            <div className="px-6 py-4 flex gap-3">
              <a
                href="/api/vcard"
                download="leo-maurice-lm-espace-vert.vcf"
                className="flex-1 flex items-center justify-center gap-2 rounded-full py-2.5 text-sm font-semibold transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#80BC00]"
                style={{ backgroundColor: '#0B3D2C', color: '#ffffff' }}
              >
                <Download size={15} aria-hidden="true" />
                Ajouter aux contacts
              </a>
              {canShare && (
                <button
                  onClick={handleShare}
                  className="flex items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#80BC00]"
                  style={{ backgroundColor: '#F4F9E8', color: '#425D07', border: '1px solid #EDEDED' }}
                >
                  <Share2 size={15} aria-hidden="true" />
                  Partager
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
