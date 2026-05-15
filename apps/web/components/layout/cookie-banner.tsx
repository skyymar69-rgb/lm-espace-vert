'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { X } from 'lucide-react'

type ConsentState = {
  analytics: boolean
  marketing: boolean
  personalization: boolean
}

const CONSENT_KEY = 'cookie-consent'
const CONSENT_VERSION = '1'

export function CookieBanner() {
  const [show, setShow] = useState(false)
  const [showCustomize, setShowCustomize] = useState(false)
  const [consent, setConsent] = useState<ConsentState>({
    analytics: false,
    marketing: false,
    personalization: false,
  })
  const bannerRef = useRef<HTMLDivElement>(null)
  const firstFocusRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY)
    if (!stored) {
      setShow(true)
    } else {
      try {
        const parsed = JSON.parse(stored) as { version: string }
        if (parsed.version !== CONSENT_VERSION) setShow(true)
      } catch {
        setShow(true)
      }
    }

    // "Gérer mes cookies" button in footer
    function handleManage() { setShow(true) }
    const btn = document.getElementById('cookie-manage')
    btn?.addEventListener('click', handleManage)
    return () => btn?.removeEventListener('click', handleManage)
  }, [])

  useEffect(() => {
    if (show) firstFocusRef.current?.focus()
  }, [show])

  function saveConsent(choices: ConsentState) {
    localStorage.setItem(CONSENT_KEY, JSON.stringify({ version: CONSENT_VERSION, ...choices }))
    setShow(false)
    setShowCustomize(false)
  }

  function acceptAll() {
    saveConsent({ analytics: true, marketing: true, personalization: true })
  }

  function rejectAll() {
    saveConsent({ analytics: false, marketing: false, personalization: false })
  }

  function saveCustom() {
    saveConsent(consent)
  }

  if (!show) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-banner-title"
      aria-describedby="cookie-banner-desc"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-[#EDEDED] bg-white shadow-[rgba(0,0,0,0.10)_0px_-4px_24px_0px]"
      ref={bannerRef}
    >
      <div className="container mx-auto max-w-7xl px-4 py-5 sm:px-6">
        {!showCustomize ? (
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="max-w-2xl">
              <h2 id="cookie-banner-title" className="text-base font-semibold text-[#2F2F2F]">
                Vos préférences de cookies
              </h2>
              <p id="cookie-banner-desc" className="mt-1 text-sm text-[#8C8F94]">
                Nous utilisons des cookies essentiels au fonctionnement du site. Avec votre
                accord, nous pouvons aussi mesurer l'audience.{' '}
                <Link
                  href="/politique-cookies"
                  className="underline underline-offset-2 hover:text-[#2F2F2F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#80BC00]"
                >
                  En savoir plus
                </Link>
              </p>
            </div>

            {/* CNIL : même poids visuel pour Accepter / Refuser */}
            <div className="flex shrink-0 flex-wrap gap-2">
              <button
                ref={firstFocusRef}
                onClick={rejectAll}
                className="rounded-full border border-[#D8D8D8] px-4 py-2 text-sm font-medium text-[#2F2F2F] transition-colors hover:bg-[#F7F5F0] hover:border-[#80BC00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#80BC00]"
              >
                Tout refuser
              </button>
              <button
                onClick={() => setShowCustomize(true)}
                className="rounded-full border border-[#D8D8D8] px-4 py-2 text-sm font-medium text-[#2F2F2F] transition-colors hover:bg-[#F7F5F0] hover:border-[#80BC00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#80BC00]"
              >
                Personnaliser
              </button>
              <button
                onClick={acceptAll}
                className="rounded-full px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#80BC00]"
                style={{ backgroundColor: '#80BC00', boxShadow: 'rgb(128, 188, 0) 0px 0px 25px -14px' }}
              >
                Tout accepter
              </button>
            </div>
          </div>
        ) : (
          /* Personnalisation */
          <div>
            <div className="flex items-center justify-between">
              <h2 id="cookie-banner-title" className="text-base font-semibold text-[#2F2F2F]">
                Personnaliser mes cookies
              </h2>
              <button
                onClick={() => setShowCustomize(false)}
                aria-label="Fermer la personnalisation"
                className="rounded-md p-1 text-[#AAAAAA] hover:text-[#2F2F2F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#80BC00]"
              >
                <X size={18} aria-hidden="true" />
              </button>
            </div>

            <div className="mt-4 space-y-4">
              <CookieToggle
                id="cookie-essential"
                label="Cookies essentiels"
                description="Nécessaires au fonctionnement du site (session, sécurité, préférences d'affichage). Ne peuvent pas être désactivés."
                checked={true}
                disabled
                onChange={() => {}}
              />
              <CookieToggle
                id="cookie-analytics"
                label="Mesure d'audience"
                description="Statistiques anonymisées (Plausible Analytics, exempt de consentement selon CNIL). Aucun cookie tiers."
                checked={consent.analytics}
                onChange={(v) => setConsent((c) => ({ ...c, analytics: v }))}
              />
              <CookieToggle
                id="cookie-marketing"
                label="Marketing / Réseaux sociaux"
                description="Pixels publicitaires (Facebook, etc.). Aucun traceur de ce type n'est actuellement utilisé."
                checked={consent.marketing}
                onChange={(v) => setConsent((c) => ({ ...c, marketing: v }))}
              />
              <CookieToggle
                id="cookie-personalization"
                label="Personnalisation"
                description="Mémorisation de vos préférences d'affichage avancées."
                checked={consent.personalization}
                onChange={(v) => setConsent((c) => ({ ...c, personalization: v }))}
              />
            </div>

            <div className="mt-6 flex gap-2">
              <button
                onClick={rejectAll}
                className="rounded-full border border-[#D8D8D8] px-4 py-2 text-sm font-medium text-[#2F2F2F] transition-colors hover:bg-[#F7F5F0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#80BC00]"
              >
                Tout refuser
              </button>
              <button
                onClick={saveCustom}
                className="rounded-full border border-[#D8D8D8] px-4 py-2 text-sm font-medium text-[#2F2F2F] transition-colors hover:bg-[#F7F5F0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#80BC00]"
              >
                Enregistrer mes choix
              </button>
              <button
                onClick={acceptAll}
                className="rounded-full px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#80BC00]"
                style={{ backgroundColor: '#80BC00', boxShadow: 'rgb(128, 188, 0) 0px 0px 25px -14px' }}
              >
                Tout accepter
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function CookieToggle({
  id,
  label,
  description,
  checked,
  disabled = false,
  onChange,
}: {
  id: string
  label: string
  description: string
  checked: boolean
  disabled?: boolean
  onChange: (v: boolean) => void
}) {
  return (
    <div className="flex items-start justify-between gap-4 rounded-xl border border-[#EDEDED] bg-[#F7F5F0] p-4">
      <div>
        <label htmlFor={id} className="text-sm font-medium text-[#2F2F2F]">
          {label}
          {disabled && (
            <span className="ml-2 rounded-full bg-[rgba(128,188,0,0.12)] px-2 py-0.5 text-xs font-semibold text-[#425D07]">
              Toujours actif
            </span>
          )}
        </label>
        <p className="mt-1 text-xs text-[#8C8F94]">{description}</p>
      </div>
      <button
        id={id}
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        onClick={() => onChange(!checked)}
        className="relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#80BC00] disabled:cursor-not-allowed disabled:opacity-60"
        style={{ backgroundColor: checked ? '#425D07' : '#D8D8D8' }}
        aria-label={`${checked ? 'Désactiver' : 'Activer'} ${label}`}
      >
        <span
          className={`inline-block h-4 w-4 rounded-full bg-white shadow transition-transform ${
            checked ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </button>
    </div>
  )
}
