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
      className="fixed inset-x-0 bottom-0 z-50 border-t border-[--color-border] bg-[--color-bg-elevated] shadow-lg"
      ref={bannerRef}
    >
      <div className="container mx-auto max-w-7xl px-4 py-5 sm:px-6">
        {!showCustomize ? (
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="max-w-2xl">
              <h2 id="cookie-banner-title" className="text-base font-semibold text-[--color-fg]">
                Vos préférences de cookies
              </h2>
              <p id="cookie-banner-desc" className="mt-1 text-sm text-[--color-fg-muted]">
                Nous utilisons des cookies essentiels au fonctionnement du site. Avec votre
                accord, nous pouvons aussi mesurer l'audience.{' '}
                <Link
                  href="/politique-cookies"
                  className="underline underline-offset-2 hover:text-[--color-fg] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[--color-focus]"
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
                className="rounded-md border border-[--color-border] px-4 py-2 text-sm font-medium text-[--color-fg] transition-colors hover:bg-[--color-bg-subtle] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--color-focus]"
              >
                Tout refuser
              </button>
              <button
                onClick={() => setShowCustomize(true)}
                className="rounded-md border border-[--color-border] px-4 py-2 text-sm font-medium text-[--color-fg] transition-colors hover:bg-[--color-bg-subtle] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--color-focus]"
              >
                Personnaliser
              </button>
              <button
                onClick={acceptAll}
                className="rounded-md border border-[--color-border] px-4 py-2 text-sm font-medium text-[--color-fg] transition-colors hover:bg-[--color-bg-subtle] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--color-focus]"
              >
                Tout accepter
              </button>
            </div>
          </div>
        ) : (
          /* Personnalisation */
          <div>
            <div className="flex items-center justify-between">
              <h2 id="cookie-banner-title" className="text-base font-semibold text-[--color-fg]">
                Personnaliser mes cookies
              </h2>
              <button
                onClick={() => setShowCustomize(false)}
                aria-label="Fermer la personnalisation"
                className="rounded-md p-1 text-[--color-fg-subtle] hover:text-[--color-fg] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[--color-focus]"
              >
                <X size={18} aria-hidden="true" />
              </button>
            </div>

            <div className="mt-4 space-y-4">
              {/* Essentiels — toujours actifs */}
              <CookieToggle
                id="cookie-essential"
                label="Cookies essentiels"
                description="Nécessaires au fonctionnement du site (session, sécurité, préférences d'affichage). Ne peuvent pas être désactivés."
                checked={true}
                disabled
                onChange={() => {}}
              />
              {/* Audience */}
              <CookieToggle
                id="cookie-analytics"
                label="Mesure d'audience"
                description="Statistiques anonymisées (Plausible Analytics, exempt de consentement selon CNIL). Aucun cookie tiers."
                checked={consent.analytics}
                onChange={(v) => setConsent((c) => ({ ...c, analytics: v }))}
              />
              {/* Marketing */}
              <CookieToggle
                id="cookie-marketing"
                label="Marketing / Réseaux sociaux"
                description="Pixels publicitaires (Facebook, etc.). Aucun traceur de ce type n'est actuellement utilisé."
                checked={consent.marketing}
                onChange={(v) => setConsent((c) => ({ ...c, marketing: v }))}
              />
              {/* Personnalisation */}
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
                className="rounded-md border border-[--color-border] px-4 py-2 text-sm font-medium text-[--color-fg] transition-colors hover:bg-[--color-bg-subtle] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--color-focus]"
              >
                Tout refuser
              </button>
              <button
                onClick={saveCustom}
                className="rounded-md border border-[--color-border] px-4 py-2 text-sm font-medium text-[--color-fg] transition-colors hover:bg-[--color-bg-subtle] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--color-focus]"
              >
                Enregistrer mes choix
              </button>
              <button
                onClick={acceptAll}
                className="rounded-md border border-[--color-border] px-4 py-2 text-sm font-medium text-[--color-fg] transition-colors hover:bg-[--color-bg-subtle] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--color-focus]"
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
    <div className="flex items-start justify-between gap-4 rounded-lg border border-[--color-border] p-4">
      <div>
        <label htmlFor={id} className="text-sm font-medium text-[--color-fg]">
          {label}
          {disabled && (
            <span className="ml-2 rounded-full bg-[--color-bg-subtle] px-2 py-0.5 text-xs text-[--color-fg-subtle]">
              Toujours actif
            </span>
          )}
        </label>
        <p className="mt-1 text-xs text-[--color-fg-subtle]">{description}</p>
      </div>
      <button
        id={id}
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        onClick={() => onChange(!checked)}
        className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--color-focus] disabled:cursor-not-allowed disabled:opacity-60 ${
          checked ? 'bg-[--color-primary]' : 'bg-[--color-border-strong]'
        }`}
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
