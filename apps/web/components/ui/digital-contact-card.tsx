'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { X, Download, Share2, Phone, Mail, Globe, MapPin, CreditCard } from 'lucide-react'
import QRCode from 'qrcode'

type QrTab = 'site' | 'maps' | 'avis'

interface QRData {
  site: string
  maps: string
  avis: string
}

const QR_TABS: { key: QrTab; label: string; emoji: string }[] = [
  { key: 'site',  label: 'Site web',        emoji: '🌿' },
  { key: 'maps',  label: 'Google Maps',     emoji: '📍' },
  { key: 'avis',  label: 'Laisser un avis', emoji: '⭐' },
]

const QR_OPTIONS = {
  width: 256,
  margin: 2,
  color: { dark: '#1A2E03', light: '#ffffff' },
}

export function DigitalContactCard() {
  const [open, setOpen]           = useState(false)
  const [qr, setQr]               = useState<QRData | null>(null)
  const [activeQr, setActiveQr]   = useState<QrTab>('site')
  const [canShare, setCanShare]   = useState(false)

  useEffect(() => {
    setCanShare(typeof navigator !== 'undefined' && !!navigator.share)
  }, [])

  useEffect(() => {
    if (!open || qr) return
    Promise.all([
      QRCode.toDataURL('https://www.lmespacevert.fr', QR_OPTIONS),
      QRCode.toDataURL('https://maps.google.com/?q=LM+Espace+Vert+Saint-Didier-au-Mont-d%27Or', QR_OPTIONS),
      QRCode.toDataURL('https://search.google.com/local/writereview?placeid=ChIJN1t_tDeuEmsRUsic12J56jE', QR_OPTIONS),
    ]).then(([site, maps, avis]) => setQr({ site, maps, avis }))
  }, [open, qr])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const handleShare = useCallback(async () => {
    if (!navigator.share) return
    try {
      await navigator.share({
        title: 'LM Espace Vert — Léo Maurice, paysagiste',
        text: "Contactez Léo Maurice, paysagiste créateur à Saint-Didier-au-Mont-d'Or.",
        url: 'https://www.lmespacevert.fr',
      })
    } catch { /* user cancelled */ }
  }, [])

  return (
    <>
      {/* Trigger */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Carte de contact numérique"
        title="Carte de contact numérique"
        className="flex items-center justify-center w-9 h-9 rounded-lg transition-colors hover:bg-[#F4F9E8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#80BC00]"
        style={{ color: '#425D07' }}
      >
        <CreditCard size={18} aria-hidden="true" />
      </button>

      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(6px)' }}
          onClick={(e) => { if (e.target === e.currentTarget) setOpen(false) }}
          role="dialog"
          aria-modal="true"
          aria-label="Carte de contact numérique"
        >
          <div
            className="relative w-full max-w-sm max-h-[90vh] overflow-y-auto rounded-[24px] bg-white shadow-2xl"
            style={{ border: '1px solid #EDEDED' }}
          >
            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              aria-label="Fermer"
              className="absolute top-3 right-3 z-10 flex items-center justify-center w-8 h-8 rounded-full transition-colors hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#80BC00]"
              style={{ color: 'rgba(255,255,255,0.8)' }}
            >
              <X size={16} aria-hidden="true" />
            </button>

            {/* Header band */}
            <div
              className="flex items-center gap-4 px-6 py-5 rounded-t-[24px]"
              style={{ background: 'linear-gradient(135deg, #0B3D2C 0%, #1A5C3A 100%)' }}
            >
              <div
                className="relative w-16 h-16 rounded-full flex-shrink-0 overflow-hidden"
                style={{ border: '2.5px solid rgba(128,188,0,0.6)', backgroundColor: 'rgba(255,255,255,0.1)' }}
              >
                <Image
                  src="/logo.png"
                  alt="LM Espace Vert"
                  fill
                  sizes="64px"
                  style={{ objectFit: 'contain', padding: '6px' }}
                />
              </div>
              <div>
                <p className="text-white font-bold text-lg leading-tight" style={{ fontFamily: 'var(--font-raleway, sans-serif)' }}>
                  Léo Maurice
                </p>
                <p className="text-sm mt-0.5" style={{ color: '#80BC00' }}>Paysagiste créateur</p>
                <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.55)' }}>LM Espace Vert</p>
              </div>
            </div>

            {/* Contact info */}
            <div className="px-6 py-4 flex flex-col gap-3">
              <a
                href="tel:+33672587353"
                className="flex items-center gap-3 text-sm font-semibold transition-opacity hover:opacity-70"
                style={{ color: '#1A2E03' }}
              >
                <span className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(128,188,0,0.12)' }}>
                  <Phone size={14} aria-hidden="true" style={{ color: '#425D07' }} />
                </span>
                06 72 58 73 53
              </a>
              <a
                href="mailto:contact@lmespacevert.fr"
                className="flex items-center gap-3 text-sm font-semibold transition-opacity hover:opacity-70"
                style={{ color: '#1A2E03' }}
              >
                <span className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(128,188,0,0.12)' }}>
                  <Mail size={14} aria-hidden="true" style={{ color: '#425D07' }} />
                </span>
                contact@lmespacevert.fr
              </a>
              <a
                href="https://www.lmespacevert.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm font-semibold transition-opacity hover:opacity-70"
                style={{ color: '#1A2E03' }}
              >
                <span className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(128,188,0,0.12)' }}>
                  <Globe size={14} aria-hidden="true" style={{ color: '#425D07' }} />
                </span>
                www.lmespacevert.fr
              </a>
              <div className="flex items-center gap-3 text-sm" style={{ color: '#5C606B' }}>
                <span className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(128,188,0,0.12)' }}>
                  <MapPin size={14} aria-hidden="true" style={{ color: '#425D07' }} />
                </span>
                Saint-Didier-au-Mont-d&apos;Or, 69370
              </div>
            </div>

            {/* Divider */}
            <div className="mx-6 border-t" style={{ borderColor: '#EDEDED' }} />

            {/* QR Code — onglet unique */}
            <div className="px-6 py-4">
              {/* Tab bar */}
              <div
                className="flex rounded-xl p-1 mb-4"
                style={{ backgroundColor: '#F7F5F0' }}
                role="tablist"
                aria-label="Choisir le QR code"
              >
                {QR_TABS.map(({ key, label, emoji }) => (
                  <button
                    key={key}
                    role="tab"
                    aria-selected={activeQr === key}
                    onClick={() => setActiveQr(key)}
                    className="flex-1 flex flex-col items-center gap-0.5 py-2 px-1 rounded-lg text-xs font-semibold transition-all"
                    style={
                      activeQr === key
                        ? { backgroundColor: '#ffffff', color: '#1A2E03', boxShadow: '0 1px 4px rgba(0,0,0,0.10)' }
                        : { color: '#5C606B' }
                    }
                  >
                    <span className="text-base leading-none">{emoji}</span>
                    <span className="leading-tight text-center" style={{ fontSize: '10px' }}>{label}</span>
                  </button>
                ))}
              </div>

              {/* QR display */}
              <div
                className="flex items-center justify-center rounded-2xl overflow-hidden mx-auto"
                style={{
                  width: 220,
                  height: 220,
                  border: '2px solid #1A2E03',
                  backgroundColor: '#ffffff',
                  padding: '10px',
                }}
              >
                {qr ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={qr[activeQr]}
                    alt={`QR Code ${QR_TABS.find(t => t.key === activeQr)?.label}`}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <div className="w-full h-full rounded-xl animate-pulse" style={{ backgroundColor: '#F4F9E8' }} />
                )}
              </div>

              <p className="text-center text-xs mt-2 font-medium" style={{ color: '#5C606B' }}>
                {QR_TABS.find(t => t.key === activeQr)?.emoji}{' '}
                Scanner pour accéder — {QR_TABS.find(t => t.key === activeQr)?.label}
              </p>
            </div>

            {/* Divider */}
            <div className="mx-6 border-t" style={{ borderColor: '#EDEDED' }} />

            {/* Actions */}
            <div className="px-6 py-4 flex gap-3">
              <a
                href="/api/vcard"
                download="leo-maurice-lm-espace-vert.vcf"
                className="flex-1 flex items-center justify-center gap-2 rounded-full py-3 text-sm font-bold transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#80BC00]"
                style={{ background: 'linear-gradient(135deg, #0B3D2C, #1A5C3A)', color: '#ffffff' }}
              >
                <Download size={15} aria-hidden="true" />
                Ajouter aux contacts
              </a>
              {canShare && (
                <button
                  onClick={handleShare}
                  className="flex items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-bold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#80BC00]"
                  style={{ backgroundColor: '#F4F9E8', color: '#1A2E03', border: '1.5px solid rgba(26,46,3,0.2)' }}
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
