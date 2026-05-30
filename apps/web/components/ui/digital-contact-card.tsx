'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Image from 'next/image'
import { X, Download, Share2, Phone, Mail, Globe, MapPin, MessageCircle, CreditCard } from 'lucide-react'
import QRCode from 'qrcode'
import { WHATSAPP } from '@/lib/social'

type QrTab = 'site' | 'maps' | 'avis'

interface QRData {
  site: string
  maps: string
  avis: string
}

const QR_TABS: { key: QrTab; label: string; icon: string }[] = [
  { key: 'site',  label: 'Site web',        icon: '🌿' },
  { key: 'maps',  label: 'Google Maps',     icon: '📍' },
  { key: 'avis',  label: 'Laisser un avis', icon: '⭐' },
]

const QR_OPTIONS = {
  width: 256,
  margin: 2,
  color: { dark: '#243238', light: '#ffffff' },
}

export function DigitalContactCard() {
  const [open, setOpen]         = useState(false)
  const [qr, setQr]             = useState<QRData | null>(null)
  const [activeQr, setActiveQr] = useState<QrTab>('site')
  const [canShare, setCanShare] = useState(false)
  const closeRef                = useRef<HTMLButtonElement>(null)
  const triggerRef              = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    setCanShare(typeof navigator !== 'undefined' && !!navigator.share)
  }, [])

  // Generate QR codes on first open
  useEffect(() => {
    if (!open || qr) return
    Promise.all([
      QRCode.toDataURL('https://www.lmespacevert.fr', QR_OPTIONS),
      QRCode.toDataURL('https://maps.google.com/?q=LM+Espace+Vert+Saint-Didier-au-Mont-d%27Or', QR_OPTIONS),
      QRCode.toDataURL('https://search.google.com/local/writereview?placeid=ChIJN1t_tDeuEmsRUsic12J56jE', QR_OPTIONS),
    ]).then(([site, maps, avis]) => setQr({ site, maps, avis }))
  }, [open, qr])

  // Focus the close button when dialog opens; restore focus on close
  useEffect(() => {
    if (open) {
      closeRef.current?.focus()
    } else {
      triggerRef.current?.focus()
    }
  }, [open])

  // Escape key + scroll lock
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
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
      {/* ── Trigger ── */}
      <button
        ref={triggerRef}
        onClick={() => setOpen(true)}
        aria-label="Carte de contact numérique"
        title="Carte de contact numérique"
        className="flex items-center justify-center w-9 h-9 rounded-lg transition-colors hover:bg-[#F4F9E8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#749A30]"
        style={{ color: '#4A6320' }}
      >
        <CreditCard size={18} aria-hidden="true" />
      </button>

      {/* ── Dialog ── */}
      {open && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(6px)' }}
          onClick={(e) => { if (e.target === e.currentTarget) setOpen(false) }}
          role="dialog"
          aria-modal="true"
          aria-label="Carte de contact numérique LM Espace Vert"
          aria-describedby="dcc-desc"
        >
          <div
            className="relative w-full max-w-sm max-h-[90vh] overflow-y-auto rounded-[24px] bg-white shadow-2xl"
            style={{ border: '1px solid #EDEDED' }}
          >
            {/* Close */}
            <button
              ref={closeRef}
              onClick={() => setOpen(false)}
              aria-label="Fermer la carte de contact"
              className="absolute top-3 right-3 z-10 flex items-center justify-center w-8 h-8 rounded-full transition-colors hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#749A30]"
              style={{ color: 'rgba(255,255,255,0.9)' }}
            >
              <X size={16} aria-hidden="true" />
            </button>

            {/* Header band */}
            <div
              className="flex items-center gap-4 px-6 py-5 rounded-t-[24px]"
              style={{ background: 'linear-gradient(135deg, #243238 0%, #2E4138 100%)' }}
            >
              <div
                className="relative w-16 h-16 rounded-full flex-shrink-0 overflow-hidden"
                style={{ border: '2.5px solid rgba(116,154,48,0.6)', backgroundColor: 'rgba(255,255,255,0.1)' }}
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
                <p className="text-white font-bold text-lg leading-tight">
                  LM Espace Vert
                </p>
                <p className="text-sm mt-0.5" style={{ color: '#749A30' }}>Léo Maurice · Paysagiste créateur</p>
                <p id="dcc-desc" className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.55)' }}>Lyon &amp; Région — Saint-Didier-au-Mont-d&apos;Or</p>
              </div>
            </div>

            {/* Contact info */}
            <div className="px-6 py-4 flex flex-col gap-2.5">
              <a
                href="tel:+33672587353"
                className="flex items-center gap-3 text-sm font-semibold rounded-xl px-3 py-2 transition-colors hover:bg-[#F4F1E9] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#749A30]"
                style={{ color: '#243238' }}
              >
                <span className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(116,154,48,0.12)' }}>
                  <Phone size={14} aria-hidden="true" style={{ color: '#4A6320' }} />
                </span>
                06 72 58 73 53
              </a>
              <a
                href="mailto:contact@lmespacevert.fr"
                className="flex items-center gap-3 text-sm font-semibold rounded-xl px-3 py-2 transition-colors hover:bg-[#F4F1E9] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#749A30]"
                style={{ color: '#243238' }}
              >
                <span className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(116,154,48,0.12)' }}>
                  <Mail size={14} aria-hidden="true" style={{ color: '#4A6320' }} />
                </span>
                contact@lmespacevert.fr
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm font-semibold rounded-xl px-3 py-2 transition-colors hover:bg-[#F4F1E9] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#749A30]"
                style={{ color: '#243238' }}
              >
                <span className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(37,211,102,0.12)' }}>
                  <MessageCircle size={14} aria-hidden="true" style={{ color: '#25D366' }} />
                </span>
                WhatsApp — 06 72 58 73 53
              </a>
              <a
                href="https://www.lmespacevert.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm font-semibold rounded-xl px-3 py-2 transition-colors hover:bg-[#F4F1E9] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#749A30]"
                style={{ color: '#243238' }}
              >
                <span className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(116,154,48,0.12)' }}>
                  <Globe size={14} aria-hidden="true" style={{ color: '#4A6320' }} />
                </span>
                www.lmespacevert.fr
              </a>
              <div className="flex items-center gap-3 text-sm px-3 py-1" style={{ color: '#5C606B' }}>
                <span className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(116,154,48,0.12)' }}>
                  <MapPin size={14} aria-hidden="true" style={{ color: '#4A6320' }} />
                </span>
                Saint-Didier-au-Mont-d&apos;Or, 69370
              </div>
            </div>

            {/* Divider */}
            <div className="mx-6 border-t" style={{ borderColor: '#EDEDED' }} />

            {/* QR Code tabs */}
            <div className="px-6 py-4">
              <div
                className="flex rounded-xl p-1 mb-4"
                style={{ backgroundColor: '#F4F1E9' }}
                role="tablist"
                aria-label="Choisir le QR code"
              >
                {QR_TABS.map(({ key, label, icon }) => (
                  <button
                    key={key}
                    role="tab"
                    aria-selected={activeQr === key}
                    onClick={() => setActiveQr(key)}
                    className="flex-1 flex flex-col items-center gap-0.5 py-2 px-1 rounded-lg text-xs font-semibold transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#749A30]"
                    style={
                      activeQr === key
                        ? { backgroundColor: '#ffffff', color: '#243238', boxShadow: '0 1px 4px rgba(0,0,0,0.10)' }
                        : { color: '#5C606B' }
                    }
                  >
                    <span className="text-base leading-none" aria-hidden="true">{icon}</span>
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
                  border: '2px solid #243238',
                  backgroundColor: '#ffffff',
                  padding: '10px',
                }}
              >
                {qr ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={qr[activeQr]}
                    alt={`QR Code ${QR_TABS.find(t => t.key === activeQr)?.label ?? activeQr}`}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <div className="w-full h-full rounded-xl animate-pulse" style={{ backgroundColor: '#F4F9E8' }} />
                )}
              </div>

              <p className="text-center text-xs mt-2 font-medium" style={{ color: '#5C606B' }}>
                Scanner pour accéder — {QR_TABS.find(t => t.key === activeQr)?.label}
              </p>
            </div>

            {/* Divider */}
            <div className="mx-6 border-t" style={{ borderColor: '#EDEDED' }} />

            {/* Actions */}
            <div className="px-6 py-4 flex gap-3">
              <a
                href="/contact/vcard"
                download="lm-espace-vert.vcf"
                className="flex-1 flex items-center justify-center gap-2 rounded-full py-3 text-sm font-bold transition-all hover:brightness-110 hover:shadow-[0_4px_16px_rgba(158,75,71,0.35)] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9E4B47]"
                style={{ backgroundColor: '#9E4B47', color: '#ffffff' }}
              >
                <Download size={15} aria-hidden="true" />
                Enregistrer le contact
              </a>
              {canShare && (
                <button
                  onClick={handleShare}
                  className="flex items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-bold transition-colors hover:bg-[#E8EDE4] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#749A30]"
                  style={{ backgroundColor: '#F4F1E9', color: '#243238', border: '1.5px solid rgba(36,50,56,0.15)' }}
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
