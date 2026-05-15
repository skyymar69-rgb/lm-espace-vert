'use client'

import { useState } from 'react'
import { ArrowRight, RotateCcw } from 'lucide-react'
import Link from 'next/link'

type Service = 'entretien' | 'haies' | 'creation' | 'elagage' | 'arrosage' | 'terrassement'
type Surface = 'xs' | 'sm' | 'md' | 'lg'
type Freq = 'hebdo' | 'bimensuel' | 'mensuel' | 'ponctuel'

const services: { id: Service; label: string; emoji: string }[] = [
  { id: 'entretien',     label: 'Entretien régulier',    emoji: '✂️' },
  { id: 'haies',         label: 'Taille de haies',        emoji: '🌿' },
  { id: 'creation',      label: 'Création de jardin',     emoji: '🌱' },
  { id: 'elagage',       label: 'Élagage / Abattage',     emoji: '🌳' },
  { id: 'arrosage',      label: 'Arrosage automatique',   emoji: '💧' },
  { id: 'terrassement',  label: 'Terrassement / Maçon.',  emoji: '🧱' },
]

const surfaces: { id: Surface; label: string }[] = [
  { id: 'xs', label: '< 100 m²' },
  { id: 'sm', label: '100 – 300 m²' },
  { id: 'md', label: '300 – 600 m²' },
  { id: 'lg', label: '> 600 m²' },
]

const freqs: { id: Freq; label: string }[] = [
  { id: 'hebdo',     label: 'Hebdomadaire' },
  { id: 'bimensuel', label: 'Bimensuel' },
  { id: 'mensuel',   label: 'Mensuel' },
  { id: 'ponctuel',  label: 'Ponctuel' },
]

// Tableau de tarifs indicatifs [min, max] en €
const pricing: Record<Service, Partial<Record<Surface, Partial<Record<Freq, [number, number]>>>>> = {
  entretien: {
    xs: { hebdo: [55,80],  bimensuel: [55,80],  mensuel: [50,75],  ponctuel: [60,90]  },
    sm: { hebdo: [80,120], bimensuel: [80,120], mensuel: [70,110], ponctuel: [90,140] },
    md: { hebdo: [120,180],bimensuel: [110,160],mensuel: [100,150],ponctuel: [130,200]},
    lg: { hebdo: [180,280],bimensuel: [160,250],mensuel: [140,220],ponctuel: [200,320]},
  },
  haies: {
    xs: { ponctuel: [80,140]  },
    sm: { ponctuel: [150,250] },
    md: { ponctuel: [250,400] },
    lg: { ponctuel: [400,700] },
  },
  creation: {
    xs: { ponctuel: [1500,3500]  },
    sm: { ponctuel: [3500,7000]  },
    md: { ponctuel: [7000,15000] },
    lg: { ponctuel: [15000,30000]},
  },
  elagage: {
    xs: { ponctuel: [200,400]  },
    sm: { ponctuel: [350,600]  },
    md: { ponctuel: [600,1200] },
    lg: { ponctuel: [1200,2500]},
  },
  arrosage: {
    xs: { ponctuel: [800,1500]  },
    sm: { ponctuel: [1500,3000] },
    md: { ponctuel: [3000,5500] },
    lg: { ponctuel: [5500,10000]},
  },
  terrassement: {
    xs: { ponctuel: [2000,4000]  },
    sm: { ponctuel: [4000,8000]  },
    md: { ponctuel: [8000,16000] },
    lg: { ponctuel: [16000,35000]},
  },
}

const serviceNeedsFreq: Service[] = ['entretien']

function formatPrice(min: number, max: number, isRecurring: boolean) {
  const suffix = isRecurring ? '/passage' : ''
  if (min >= 1000) {
    return `${(min/1000).toFixed(1).replace('.0','')} – ${(max/1000).toFixed(1).replace('.0','')} k€${suffix}`
  }
  return `${min} – ${max} €${suffix}`
}

export function PriceEstimator() {
  const [step, setStep] = useState<1 | 2 | 3>(1)
  const [service, setService] = useState<Service | null>(null)
  const [surface, setSurface] = useState<Surface | null>(null)
  const [freq, setFreq] = useState<Freq | null>(null)

  const needsFreq = service ? serviceNeedsFreq.includes(service) : false

  const getResult = (): [number, number] | null => {
    if (!service || !surface) return null
    const s = pricing[service]
    const bySurface = s[surface]
    if (!bySurface) return null
    if (needsFreq && freq) return bySurface[freq] ?? null
    if (!needsFreq) return bySurface['ponctuel'] ?? null
    return null
  }

  const result = getResult()
  const showResult = step === 3 && result !== null

  const reset = () => {
    setStep(1)
    setService(null)
    setSurface(null)
    setFreq(null)
  }

  return (
    <div className="rounded-2xl border bg-white overflow-hidden" style={{ borderColor: '#EDEDED' }}>
      {/* Header */}
      <div className="px-6 py-4 border-b" style={{ backgroundColor: '#F7F5F0', borderColor: '#EDEDED' }}>
        <p className="text-xs font-semibold uppercase tracking-widest mb-0.5" style={{ color: '#80BC00' }}>
          Outil gratuit
        </p>
        <h3 className="font-display text-lg font-bold" style={{ color: '#0B3D2C' }}>
          Estimez votre budget
        </h3>
      </div>

      {/* Steps indicator */}
      <div className="flex px-6 pt-5 gap-3">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center gap-1.5">
            <div
              className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
              style={{
                backgroundColor: step >= s ? '#80BC00' : '#EDEDED',
                color: step >= s ? '#ffffff' : '#8C8F94',
              }}
            >
              {s}
            </div>
            {s < 3 && (
              <div
                className="h-px w-8 flex-shrink-0"
                style={{ backgroundColor: step > s ? '#80BC00' : '#EDEDED' }}
              />
            )}
          </div>
        ))}
      </div>

      <div className="p-6">
        {/* STEP 1 — Type de service */}
        {step === 1 && (
          <div>
            <p className="text-sm font-semibold mb-4" style={{ color: '#2F2F2F' }}>
              Quel type de service ?
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {services.map((svc) => (
                <button
                  key={svc.id}
                  onClick={() => {
                    setService(svc.id)
                    setFreq(serviceNeedsFreq.includes(svc.id) ? null : 'ponctuel')
                    setStep(2)
                  }}
                  className="flex flex-col items-center gap-1.5 rounded-xl border p-3 text-center text-xs font-medium transition-all hover:border-[#80BC00] hover:bg-[rgba(128,188,0,0.05)]"
                  style={{ borderColor: service === svc.id ? '#80BC00' : '#EDEDED', color: '#2F2F2F' }}
                >
                  <span className="text-xl">{svc.emoji}</span>
                  {svc.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* STEP 2 — Superficie */}
        {step === 2 && (
          <div>
            <p className="text-sm font-semibold mb-4" style={{ color: '#2F2F2F' }}>
              Superficie à traiter ?
            </p>
            <div className="grid grid-cols-2 gap-2 mb-4">
              {surfaces.map((s) => (
                <button
                  key={s.id}
                  onClick={() => {
                    setSurface(s.id)
                    if (needsFreq) {
                      setStep(3)
                    } else {
                      setFreq('ponctuel')
                      setStep(3)
                    }
                  }}
                  className="rounded-xl border px-4 py-3 text-sm font-medium transition-all hover:border-[#80BC00] hover:bg-[rgba(128,188,0,0.05)]"
                  style={{ borderColor: surface === s.id ? '#80BC00' : '#EDEDED', color: '#2F2F2F' }}
                >
                  {s.label}
                </button>
              ))}
            </div>
            <button
              onClick={() => setStep(1)}
              className="text-xs flex items-center gap-1 hover:underline"
              style={{ color: '#8C8F94' }}
            >
              ← Retour
            </button>
          </div>
        )}

        {/* STEP 3 — Fréquence (si entretien) OU résultat */}
        {step === 3 && needsFreq && !freq && (
          <div>
            <p className="text-sm font-semibold mb-4" style={{ color: '#2F2F2F' }}>
              Quelle fréquence d&apos;entretien ?
            </p>
            <div className="grid grid-cols-2 gap-2 mb-4">
              {freqs.map((f) => (
                <button
                  key={f.id}
                  onClick={() => setFreq(f.id)}
                  className="rounded-xl border px-4 py-3 text-sm font-medium transition-all hover:border-[#80BC00] hover:bg-[rgba(128,188,0,0.05)]"
                  style={{ borderColor: freq === f.id ? '#80BC00' : '#EDEDED', color: '#2F2F2F' }}
                >
                  {f.label}
                </button>
              ))}
            </div>
            <button
              onClick={() => setStep(2)}
              className="text-xs flex items-center gap-1 hover:underline"
              style={{ color: '#8C8F94' }}
            >
              ← Retour
            </button>
          </div>
        )}

        {/* Résultat */}
        {step === 3 && (showResult || (needsFreq && freq && result)) && (
          <div>
            {/* Card résultat */}
            <div
              className="rounded-xl p-5 mb-4"
              style={{ backgroundColor: '#F7F5F0', border: '1px solid #EDEDED' }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: '#8C8F94' }}>
                    Estimation indicative
                  </p>
                  <p className="font-display text-2xl font-bold" style={{ color: '#0B3D2C' }}>
                    {result ? formatPrice(result[0], result[1], needsFreq && freq !== 'ponctuel') : '–'}
                  </p>
                  <p className="text-xs mt-1" style={{ color: '#8C8F94' }}>
                    Prix TTC indicatifs · Rayon 20 km
                  </p>
                </div>
                <span
                  className="flex-shrink-0 rounded-full px-3 py-1 text-xs font-bold"
                  style={{ backgroundColor: '#80BC00', color: '#ffffff' }}
                >
                  Estimation
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2">
              <Link
                href="/devis"
                className="flex-1 flex items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#80BC00', color: '#ffffff' }}
              >
                Obtenir un devis précis <ArrowRight size={14} />
              </Link>
              <button
                onClick={reset}
                className="flex items-center justify-center gap-1.5 rounded-xl border px-4 py-3 text-sm font-medium hover:bg-gray-50 transition-colors"
                style={{ borderColor: '#EDEDED', color: '#2F2F2F' }}
              >
                <RotateCcw size={13} /> Recommencer
              </button>
            </div>

            <p className="text-[11px] mt-3 text-center" style={{ color: '#8C8F94' }}>
              Estimation non contractuelle. Devis gratuit et précis sur demande.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
