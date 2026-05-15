'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import {
  Sprout,
  Scissors,
  TreePine,
  Layers,
  Droplets,
  HelpCircle,
  ChevronRight,
  ChevronLeft,
  Check,
  Loader2,
  MessageCircle,
} from 'lucide-react'

// ─── Types ────────────────────────────────────────────────────────────────────

type ProjectType =
  | 'Création de jardin'
  | 'Entretien régulier'
  | 'Élagage / Abattage'
  | 'Maçonnerie paysagère'
  | 'Arrosage automatique'
  | 'Autre / Je ne sais pas'

type Superficie = '< 200 m²' | '200-500 m²' | '500-1000 m²' | '> 1000 m²'
type Urgence = 'Pas pressé' | 'Dans 1 mois' | 'Dans 2 semaines' | 'Urgent'

interface FormState {
  projectType: ProjectType | ''
  superficie: Superficie | ''
  commune: string
  urgence: Urgence | ''
  prenom: string
  telephone: string
  email: string
  message: string
}

// ─── Constants ────────────────────────────────────────────────────────────────

const PROJECT_TYPES: { label: ProjectType; icon: React.ElementType }[] = [
  { label: 'Création de jardin', icon: Sprout },
  { label: 'Entretien régulier', icon: Scissors },
  { label: 'Élagage / Abattage', icon: TreePine },
  { label: 'Maçonnerie paysagère', icon: Layers },
  { label: 'Arrosage automatique', icon: Droplets },
  { label: 'Autre / Je ne sais pas', icon: HelpCircle },
]

const SUPERFICIES: Superficie[] = ['< 200 m²', '200-500 m²', '500-1000 m²', '> 1000 m²']
const URGENCES: Urgence[] = ['Pas pressé', 'Dans 1 mois', 'Dans 2 semaines', 'Urgent']

// ─── Helpers ──────────────────────────────────────────────────────────────────

function formatPhone(raw: string): string {
  // Strip all non-digits
  const digits = raw.replace(/\D/g, '')
  // Group by 2s: "06 12 34 56 78"
  const parts = digits.match(/.{1,2}/g) ?? []
  return parts.slice(0, 5).join(' ')
}

function isValidFrenchPhone(value: string): boolean {
  const digits = value.replace(/\D/g, '')
  return /^0[1-9]\d{8}$/.test(digits)
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function ProgressBar({ step }: { step: number }) {
  return (
    <div className="flex items-center justify-center gap-0 mb-8" role="progressbar" aria-valuenow={step} aria-valuemin={1} aria-valuemax={3}>
      {[1, 2, 3].map((n, idx) => (
        <div key={n} className="flex items-center">
          {/* Connector line before (not on first) */}
          {idx > 0 && (
            <div
              className="h-0.5 w-10 sm:w-16 transition-colors duration-300"
              style={{ backgroundColor: n <= step ? '#80BC00' : '#EDEDED' }}
            />
          )}
          {/* Step circle */}
          <div
            className="relative flex items-center justify-center w-9 h-9 rounded-full text-sm font-bold transition-all duration-300"
            style={{
              backgroundColor: n < step ? '#80BC00' : n === step ? '#80BC00' : '#EDEDED',
              color: n <= step ? '#ffffff' : '#8C8F94',
            }}
          >
            {n < step ? <Check size={16} /> : n}
          </div>
        </div>
      ))}
    </div>
  )
}

// ─── Main component ───────────────────────────────────────────────────────────

export function DevisForm() {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState<FormState>({
    projectType: '',
    superficie: '',
    commune: '',
    urgence: '',
    prenom: '',
    telephone: '',
    email: '',
    message: '',
  })
  const [phoneError, setPhoneError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const startedAtRef = useRef<number>(Date.now())

  // ── Handlers ────────────────────────────────────────────────────────────────

  function handlePhoneChange(e: React.ChangeEvent<HTMLInputElement>) {
    const formatted = formatPhone(e.target.value)
    setForm((f) => ({ ...f, telephone: formatted }))
    if (formatted.length > 0 && !isValidFrenchPhone(formatted)) {
      setPhoneError('Numéro invalide – format attendu : 06 XX XX XX XX')
    } else {
      setPhoneError('')
    }
  }

  function handlePhoneBlur() {
    if (form.telephone && !isValidFrenchPhone(form.telephone)) {
      setPhoneError('Numéro invalide – format attendu : 06 XX XX XX XX')
    }
  }

  function canProceedStep1() {
    return form.projectType !== ''
  }

  function canProceedStep2() {
    return form.superficie !== '' && form.commune.trim().length >= 2 && form.urgence !== ''
  }

  function canSubmitStep3() {
    return (
      form.prenom.trim().length >= 2 &&
      form.telephone.trim().length > 0 &&
      isValidFrenchPhone(form.telephone) &&
      phoneError === ''
    )
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!canSubmitStep3()) return

    setIsLoading(true)

    // Build a message that includes project info
    const fullMessage = [
      `Type de projet : ${form.projectType}`,
      `Superficie : ${form.superficie}`,
      `Urgence : ${form.urgence}`,
      form.message ? `\nMessage : ${form.message}` : '',
    ]
      .filter(Boolean)
      .join('\n')

    const body = new URLSearchParams({
      prenom: form.prenom,
      nom: '—',
      email: form.email || 'non@renseigne.fr',
      telephone: form.telephone.replace(/\D/g, ''),
      codePostal: '69000',
      sujet: 'devis',
      message: fullMessage,
      consentement: 'true',
      newsletter: 'false',
      startedAt: String(startedAtRef.current),
      projectType: form.projectType,
      commune: form.commune,
    })

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      })
      if (res.ok) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    } finally {
      setIsLoading(false)
    }
  }

  // ── Styles ──────────────────────────────────────────────────────────────────

  const inputClass =
    'w-full px-5 py-3.5 rounded-full border border-[#D8D8D8] text-[#2F2F2F] placeholder-[#8C8F94] bg-white text-sm focus:outline-none focus:border-[#80BC00] focus:ring-2 transition-all'
  const labelClass = 'block text-xs font-semibold uppercase tracking-wider mb-2'

  // ── Success screen ───────────────────────────────────────────────────────────

  if (status === 'success') {
    return (
      <div className="text-center py-12 px-6">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
          style={{ backgroundColor: 'rgba(128,188,0,0.12)' }}
        >
          <Check size={32} style={{ color: '#80BC00' }} />
        </div>
        <h3 className="font-display text-2xl font-bold mb-2" style={{ color: '#425D07' }}>
          Merci {form.prenom}&nbsp;!
        </h3>
        <p className="text-base mb-1" style={{ color: '#2F2F2F' }}>
          Léo vous contacte sous 24h.
        </p>
        <p className="text-sm mb-8" style={{ color: '#8C8F94' }}>
          Vous recevrez un appel ou un SMS au {form.telephone}.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          style={{ backgroundColor: '#0B3D2C' }}
        >
          Retour à l&apos;accueil
        </Link>
      </div>
    )
  }

  // ── Error screen ─────────────────────────────────────────────────────────────

  if (status === 'error') {
    return (
      <div className="text-center py-12 px-6">
        <p className="text-base font-semibold mb-4" style={{ color: '#2F2F2F' }}>
          Une erreur s&apos;est produite. Veuillez réessayer ou nous contacter directement :
        </p>
        <a
          href="https://wa.me/33674734698?text=Bonjour%20LM%20Espace%20Vert%2C%20je%20souhaite%20un%20devis%20gratuit."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          style={{ backgroundColor: '#25D366' }}
        >
          <MessageCircle size={18} />
          Envoyer via WhatsApp
        </a>
        <button
          onClick={() => setStatus('idle')}
          className="block mx-auto mt-4 text-sm underline"
          style={{ color: '#8C8F94' }}
        >
          Réessayer
        </button>
      </div>
    )
  }

  // ── Form ─────────────────────────────────────────────────────────────────────

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Formulaire de devis en 3 étapes">
      <ProgressBar step={step} />

      {/* ── STEP 1 — Type de projet ─────────────────────────────────────────── */}
      {step === 1 && (
        <div>
          <h2 className="font-display text-xl font-bold mb-1" style={{ color: '#2F2F2F' }}>
            Quel type de projet&nbsp;?
          </h2>
          <p className="text-sm mb-6" style={{ color: '#8C8F94' }}>
            Gratuit &amp; sans engagement
          </p>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {PROJECT_TYPES.map(({ label, icon: Icon }) => {
              const selected = form.projectType === label
              return (
                <button
                  key={label}
                  type="button"
                  onClick={() => setForm((f) => ({ ...f, projectType: label }))}
                  className="flex flex-col items-center gap-2 rounded-2xl border p-4 text-center text-sm font-medium transition-all cursor-pointer"
                  style={{
                    backgroundColor: selected ? 'rgba(128,188,0,0.10)' : '#ffffff',
                    borderColor: selected ? '#80BC00' : '#EDEDED',
                    color: selected ? '#425D07' : '#2F2F2F',
                    boxShadow: selected ? '0 0 0 2px rgba(128,188,0,0.25)' : 'none',
                  }}
                  aria-pressed={selected}
                >
                  <Icon
                    size={24}
                    aria-hidden="true"
                    style={{ color: selected ? '#80BC00' : '#8C8F94' }}
                  />
                  {label}
                </button>
              )
            })}
          </div>

          <div className="mt-8 flex justify-end">
            <button
              type="button"
              disabled={!canProceedStep1()}
              onClick={() => setStep(2)}
              className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white transition-opacity disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-90"
              style={{ backgroundColor: '#80BC00' }}
            >
              Étape suivante
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      )}

      {/* ── STEP 2 — Votre espace ───────────────────────────────────────────── */}
      {step === 2 && (
        <div>
          <h2 className="font-display text-xl font-bold mb-1" style={{ color: '#2F2F2F' }}>
            Votre espace
          </h2>
          <p className="text-sm mb-6" style={{ color: '#8C8F94' }}>
            Ces informations nous permettent d&apos;affiner votre devis.
          </p>

          {/* Superficie */}
          <fieldset className="mb-6">
            <legend className={labelClass} style={{ color: '#2F2F2F' }}>
              Superficie approximative
            </legend>
            <div className="grid grid-cols-2 gap-3">
              {SUPERFICIES.map((s) => {
                const selected = form.superficie === s
                return (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setForm((f) => ({ ...f, superficie: s }))}
                    className="rounded-full border px-4 py-2.5 text-sm font-medium transition-all cursor-pointer"
                    style={{
                      backgroundColor: selected ? 'rgba(128,188,0,0.10)' : '#ffffff',
                      borderColor: selected ? '#80BC00' : '#D8D8D8',
                      color: selected ? '#425D07' : '#2F2F2F',
                    }}
                    aria-pressed={selected}
                  >
                    {s}
                  </button>
                )
              })}
            </div>
          </fieldset>

          {/* Commune */}
          <div className="mb-6">
            <label htmlFor="commune" className={labelClass} style={{ color: '#2F2F2F' }}>
              Commune <span aria-label="obligatoire" style={{ color: '#80BC00' }}>*</span>
            </label>
            <input
              id="commune"
              type="text"
              placeholder="Ex: Caluire-et-Cuire, Écully..."
              value={form.commune}
              onChange={(e) => setForm((f) => ({ ...f, commune: e.target.value }))}
              className={inputClass}
              autoComplete="address-level2"
              required
            />
          </div>

          {/* Urgence */}
          <fieldset className="mb-8">
            <legend className={labelClass} style={{ color: '#2F2F2F' }}>
              Urgence
            </legend>
            <div className="grid grid-cols-2 gap-3">
              {URGENCES.map((u) => {
                const selected = form.urgence === u
                return (
                  <button
                    key={u}
                    type="button"
                    onClick={() => setForm((f) => ({ ...f, urgence: u }))}
                    className="rounded-full border px-4 py-2.5 text-sm font-medium transition-all cursor-pointer"
                    style={{
                      backgroundColor: selected ? 'rgba(128,188,0,0.10)' : '#ffffff',
                      borderColor: selected ? '#80BC00' : '#D8D8D8',
                      color: selected ? '#425D07' : '#2F2F2F',
                    }}
                    aria-pressed={selected}
                  >
                    {u}
                  </button>
                )
              })}
            </div>
          </fieldset>

          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="inline-flex items-center gap-1.5 rounded-full border border-[#EDEDED] bg-white px-5 py-3 text-sm font-medium transition-colors hover:border-[#D8D8D8]"
              style={{ color: '#2F2F2F' }}
            >
              <ChevronLeft size={15} />
              Retour
            </button>
            <button
              type="button"
              disabled={!canProceedStep2()}
              onClick={() => setStep(3)}
              className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white transition-opacity disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-90"
              style={{ backgroundColor: '#80BC00' }}
            >
              Étape suivante
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      )}

      {/* ── STEP 3 — Vos coordonnées ────────────────────────────────────────── */}
      {step === 3 && (
        <div>
          <h2 className="font-display text-xl font-bold mb-1" style={{ color: '#2F2F2F' }}>
            Vos coordonnées
          </h2>
          <p className="text-sm mb-6" style={{ color: '#8C8F94' }}>
            Pour que Léo puisse vous rappeler.
          </p>

          {/* Prénom */}
          <div className="mb-4">
            <label htmlFor="prenom-devis" className={labelClass} style={{ color: '#2F2F2F' }}>
              Prénom <span aria-label="obligatoire" style={{ color: '#80BC00' }}>*</span>
            </label>
            <input
              id="prenom-devis"
              type="text"
              placeholder="Jean"
              value={form.prenom}
              onChange={(e) => setForm((f) => ({ ...f, prenom: e.target.value }))}
              className={inputClass}
              autoComplete="given-name"
              required
            />
          </div>

          {/* Téléphone */}
          <div className="mb-4">
            <label htmlFor="telephone-devis" className={labelClass} style={{ color: '#2F2F2F' }}>
              Téléphone <span aria-label="obligatoire" style={{ color: '#80BC00' }}>*</span>
            </label>
            <input
              id="telephone-devis"
              type="tel"
              placeholder="06 XX XX XX XX"
              value={form.telephone}
              onChange={handlePhoneChange}
              onBlur={handlePhoneBlur}
              className={inputClass}
              autoComplete="tel"
              inputMode="tel"
              required
              aria-describedby={phoneError ? 'phone-error' : undefined}
              style={{
                borderColor: phoneError ? '#ef4444' : undefined,
              }}
            />
            {phoneError && (
              <p id="phone-error" className="mt-1.5 text-xs" style={{ color: '#ef4444' }} role="alert">
                {phoneError}
              </p>
            )}
          </div>

          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email-devis" className={labelClass} style={{ color: '#2F2F2F' }}>
              Email{' '}
              <span className="normal-case font-normal" style={{ color: '#8C8F94' }}>
                (optionnel)
              </span>
            </label>
            <input
              id="email-devis"
              type="email"
              placeholder="jean@exemple.fr"
              value={form.email}
              onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
              className={inputClass}
              autoComplete="email"
            />
          </div>

          {/* Message */}
          <div className="mb-6">
            <label htmlFor="message-devis" className={labelClass} style={{ color: '#2F2F2F' }}>
              Message libre{' '}
              <span className="normal-case font-normal" style={{ color: '#8C8F94' }}>
                (optionnel)
              </span>
            </label>
            <textarea
              id="message-devis"
              rows={3}
              maxLength={500}
              placeholder="Décrivez votre projet, vos contraintes, vos souhaits..."
              value={form.message}
              onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
              className="w-full px-5 py-3.5 rounded-2xl border border-[#D8D8D8] text-[#2F2F2F] placeholder-[#8C8F94] bg-white text-sm focus:outline-none focus:border-[#80BC00] focus:ring-2 transition-all resize-y min-h-[90px]"
            />
            <p className="text-right text-xs mt-1" style={{ color: '#8C8F94' }}>
              {form.message.length}/500
            </p>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isLoading || !canSubmitStep3()}
            className="w-full inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ backgroundColor: '#80BC00', boxShadow: 'rgb(128, 188, 0) 0px 0px 25px -14px' }}
          >
            {isLoading ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                Envoi en cours…
              </>
            ) : (
              'Envoyer ma demande de devis gratuit'
            )}
          </button>

          {/* Trust signals below button */}
          <p className="text-xs text-center mt-3" style={{ color: '#8C8F94' }}>
            🔒 Vos données sont 100% confidentielles
          </p>

          <div className="flex items-center justify-between mt-4">
            <button
              type="button"
              onClick={() => setStep(2)}
              className="inline-flex items-center gap-1.5 rounded-full border border-[#EDEDED] bg-white px-5 py-3 text-sm font-medium transition-colors hover:border-[#D8D8D8]"
              style={{ color: '#2F2F2F' }}
            >
              <ChevronLeft size={15} />
              Retour
            </button>
            <p className="text-xs" style={{ color: '#8C8F94' }}>
              Réponse sous 24h garantie
            </p>
          </div>
        </div>
      )}
    </form>
  )
}
