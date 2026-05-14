'use client'

import { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactSchema, type ContactFormData } from '@lm/schemas/contact'
import { AlertCircle, CheckCircle2, Loader2 } from 'lucide-react'
import Link from 'next/link'

export function ContactForm() {
  const startedAtRef = useRef<number>(Date.now())
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      website: '',
      newsletter: false,
      sujet: 'devis',
    },
  })

  useEffect(() => {
    startedAtRef.current = Date.now()
  }, [])

  async function onSubmit(data: ContactFormData) {
    setStatus('loading')
    setErrorMessage('')

    const formData = new FormData()
    Object.entries({ ...data, startedAt: startedAtRef.current }).forEach(([key, value]) => {
      formData.append(key, String(value))
    })

    try {
      const res = await fetch('/api/contact', { method: 'POST', body: formData })
      const json = await res.json() as { ok?: boolean; error?: string }
      if (json.ok) {
        setStatus('success')
        reset()
      } else {
        setStatus('error')
        setErrorMessage(json.error ?? 'Une erreur est survenue.')
      }
    } catch {
      setStatus('error')
      setErrorMessage("Impossible d'envoyer votre message. Vérifiez votre connexion.")
    }
  }

  if (status === 'success') {
    return (
      <div
        role="alert"
        aria-live="polite"
        className="flex flex-col items-center gap-4 rounded-xl border border-[--color-success] bg-[--color-bg-elevated] p-8 text-center"
      >
        <CheckCircle2 size={48} className="text-[--color-success]" aria-hidden="true" />
        <h2 className="font-display text-xl font-semibold text-[--color-fg]">
          Message envoyé !
        </h2>
        <p className="text-[--color-fg-muted]">
          Nous avons bien reçu votre demande et vous répondrons sous 48h.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="rounded-md border border-[--color-border] px-4 py-2 text-sm font-medium text-[--color-fg] hover:bg-[--color-bg-subtle] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[--color-focus]"
        >
          Envoyer un autre message
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      aria-label="Formulaire de contact"
      className="space-y-5"
    >
      {/* Honeypot — masqué visuellement et pour les lecteurs d'écran */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website">Ne remplissez pas ce champ</label>
        <input
          type="text"
          id="website"
          tabIndex={-1}
          autoComplete="off"
          {...register('website')}
        />
      </div>

      {/* Error global */}
      {status === 'error' && (
        <div
          role="alert"
          className="flex items-start gap-2 rounded-md border border-[--color-danger] bg-red-50 p-3 text-sm text-[--color-danger] dark:bg-red-950"
        >
          <AlertCircle size={16} aria-hidden="true" className="mt-0.5 shrink-0" />
          {errorMessage}
        </div>
      )}

      {/* Row: Prénom + Nom */}
      <div className="grid gap-4 sm:grid-cols-2">
        <FormField
          id="prenom"
          label="Prénom"
          required
          error={errors.prenom?.message}
          {...register('prenom')}
          autoComplete="given-name"
        />
        <FormField
          id="nom"
          label="Nom"
          required
          error={errors.nom?.message}
          {...register('nom')}
          autoComplete="family-name"
        />
      </div>

      {/* Email */}
      <FormField
        id="email"
        label="Email"
        type="email"
        required
        error={errors.email?.message}
        {...register('email')}
        autoComplete="email"
      />

      {/* Téléphone */}
      <FormField
        id="telephone"
        label="Téléphone"
        type="tel"
        error={errors.telephone?.message}
        hint="Facultatif — format 0X XX XX XX XX"
        {...register('telephone')}
        autoComplete="tel"
      />

      {/* Code postal */}
      <FormField
        id="codePostal"
        label="Code postal"
        required
        error={errors.codePostal?.message}
        hint="Nous vérifions que nous intervenons dans votre zone"
        {...register('codePostal')}
        autoComplete="postal-code"
        maxLength={5}
      />

      {/* Sujet */}
      <div>
        <label htmlFor="sujet" className="block text-sm font-medium text-[--color-fg]">
          Sujet <span aria-label="obligatoire">*</span>
        </label>
        <select
          id="sujet"
          required
          aria-required="true"
          aria-describedby={errors.sujet ? 'sujet-error' : undefined}
          aria-invalid={errors.sujet ? 'true' : undefined}
          className="mt-1.5 block w-full rounded-md border border-[--color-border] bg-[--color-bg-elevated] px-3 py-2.5 text-sm text-[--color-fg] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[--color-focus]"
          {...register('sujet')}
        >
          <option value="devis">Demande de devis</option>
          <option value="entretien">Contrat d'entretien</option>
          <option value="question">Question générale</option>
          <option value="autre">Autre</option>
        </select>
        {errors.sujet && (
          <p id="sujet-error" role="alert" className="mt-1 text-xs text-[--color-danger]">
            {errors.sujet.message}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-[--color-fg]">
          Message <span aria-label="obligatoire">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          required
          aria-required="true"
          aria-describedby={errors.message ? 'message-error' : 'message-hint'}
          aria-invalid={errors.message ? 'true' : undefined}
          placeholder="Décrivez votre projet ou votre demande..."
          className="mt-1.5 block w-full resize-y rounded-md border border-[--color-border] bg-[--color-bg-elevated] px-3 py-2.5 text-sm text-[--color-fg] placeholder-[--color-fg-subtle] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[--color-focus]"
          {...register('message')}
        />
        <p id="message-hint" className="mt-1 text-xs text-[--color-fg-subtle]">Minimum 20 caractères</p>
        {errors.message && (
          <p id="message-error" role="alert" className="mt-1 text-xs text-[--color-danger]">
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Newsletter */}
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="newsletter"
          className="mt-0.5 h-4 w-4 rounded border-[--color-border] accent-[--color-primary] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[--color-focus]"
          {...register('newsletter')}
        />
        <label htmlFor="newsletter" className="text-sm text-[--color-fg-muted]">
          J'accepte de recevoir les actualités et conseils de LM Espace Vert (optionnel).
        </label>
      </div>

      {/* Consentement RGPD */}
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="consentement"
          required
          aria-required="true"
          aria-describedby={errors.consentement ? 'consentement-error' : undefined}
          aria-invalid={errors.consentement ? 'true' : undefined}
          className="mt-0.5 h-4 w-4 rounded border-[--color-border] accent-[--color-primary] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[--color-focus]"
          {...register('consentement')}
        />
        <div>
          <label htmlFor="consentement" className="text-sm text-[--color-fg-muted]">
            J'accepte que mes données soient traitées pour répondre à ma demande, conformément à la{' '}
            <Link
              href="/politique-confidentialite"
              className="underline underline-offset-2 hover:text-[--color-fg] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[--color-focus]"
              target="_blank"
            >
              politique de confidentialité
            </Link>. <span aria-label="obligatoire">*</span>
          </label>
          {errors.consentement && (
            <p id="consentement-error" role="alert" className="mt-1 text-xs text-[--color-danger]">
              {errors.consentement.message}
            </p>
          )}
        </div>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === 'loading'}
        aria-busy={status === 'loading'}
        className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-[--color-accent] px-6 py-3.5 font-semibold text-[--color-accent-fg] transition-colors hover:bg-[--color-gold-500] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--color-focus] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === 'loading' ? (
          <>
            <Loader2 size={18} className="animate-spin" aria-hidden="true" />
            Envoi en cours…
          </>
        ) : (
          'Envoyer ma demande'
        )}
      </button>

      <p className="text-xs text-[--color-fg-subtle]">
        * Champs obligatoires. Vos données ne seront jamais revendues.
      </p>
    </form>
  )
}

// Field component
import { forwardRef, InputHTMLAttributes } from 'react'

type FormFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  id: string
  label: string
  error?: string
  hint?: string
  required?: boolean
}

const FormField = forwardRef<HTMLInputElement, FormFieldProps>(
  ({ id, label, error, hint, required, ...props }, ref) => {
    const hintId = hint ? `${id}-hint` : undefined
    const errorId = error ? `${id}-error` : undefined
    const describedBy = [hintId, errorId].filter(Boolean).join(' ') || undefined

    return (
      <div>
        <label htmlFor={id} className="block text-sm font-medium text-[--color-fg]">
          {label}
          {required && <span aria-label="obligatoire"> *</span>}
        </label>
        <input
          ref={ref}
          id={id}
          required={required}
          aria-required={required}
          aria-describedby={describedBy}
          aria-invalid={error ? 'true' : undefined}
          className="mt-1.5 block w-full rounded-md border border-[--color-border] bg-[--color-bg-elevated] px-3 py-2.5 text-sm text-[--color-fg] placeholder-[--color-fg-subtle] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[--color-focus] aria-invalid:border-[--color-danger]"
          {...props}
        />
        {hint && (
          <p id={hintId} className="mt-1 text-xs text-[--color-fg-subtle]">{hint}</p>
        )}
        {error && (
          <p id={errorId} role="alert" className="mt-1 text-xs text-[--color-danger]">{error}</p>
        )}
      </div>
    )
  }
)
FormField.displayName = 'FormField'
