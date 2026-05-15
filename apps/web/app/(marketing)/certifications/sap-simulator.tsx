'use client'

import { useState } from 'react'
import { Calculator } from 'lucide-react'

export function SapSimulator() {
  const [montant, setMontant] = useState('')

  const valeur = parseFloat(montant.replace(',', '.')) || 0
  const credit = Math.min(valeur * 0.5, 6000)
  const aVotreBCharge = Math.max(valeur - credit, 0)

  return (
    <div className="rounded-2xl border p-8" style={{ backgroundColor: '#F7F5F0', borderColor: '#EDEDED' }}>
      <div className="flex items-center gap-3 mb-6">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center text-white flex-shrink-0"
          style={{ backgroundColor: '#425D07' }}
        >
          <Calculator size={22} aria-hidden="true" />
        </div>
        <div>
          <h3 className="font-bold text-lg" style={{ color: '#2F2F2F' }}>
            Simulateur crédit d&apos;impôt SAP
          </h3>
          <p className="text-sm" style={{ color: '#8C8F94' }}>
            Estimez votre avantage fiscal en quelques secondes
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label htmlFor="montant-travaux" className="block text-sm font-semibold mb-2" style={{ color: '#2F2F2F' }}>
            Montant total de vos travaux de jardinage (€ TTC)
          </label>
          <input
            id="montant-travaux"
            type="number"
            min="0"
            max="12000"
            step="100"
            value={montant}
            onChange={(e) => setMontant(e.target.value)}
            placeholder="Ex : 1 200"
            className="w-full rounded-xl border border-[#EDEDED] bg-white px-4 py-3 text-base focus:outline-none focus:ring-2"
            style={{ color: '#2F2F2F' }}
          />
          <p className="text-xs mt-1" style={{ color: '#8C8F94' }}>
            Plafond annuel d&apos;éligibilité SAP : 12 000 €
          </p>
        </div>

        {valeur > 0 && (
          <div className="rounded-xl border p-5 space-y-3" style={{ backgroundColor: 'rgba(128,188,0,0.08)', borderColor: 'rgba(128,188,0,0.3)' }}>
            <div className="flex justify-between items-center">
              <span className="text-sm" style={{ color: '#8C8F94' }}>Montant total des travaux</span>
              <span className="font-bold" style={{ color: '#2F2F2F' }}>{valeur.toFixed(0)} €</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm" style={{ color: '#8C8F94' }}>Crédit d&apos;impôt 50%</span>
              <span className="font-bold" style={{ color: '#425D07' }}>− {credit.toFixed(0)} €</span>
            </div>
            <div className="border-t pt-3" style={{ borderColor: 'rgba(128,188,0,0.3)' }}>
              <div className="flex justify-between items-center">
                <span className="font-semibold" style={{ color: '#2F2F2F' }}>Vous payez seulement</span>
                <span className="font-display text-2xl font-bold" style={{ color: '#425D07' }}>{aVotreBCharge.toFixed(0)} €</span>
              </div>
              <p className="text-xs mt-1" style={{ color: '#8C8F94' }}>
                Après déduction fiscale — avance immédiate disponible
              </p>
            </div>
          </div>
        )}
      </div>

      <p className="text-xs mt-4" style={{ color: '#8C8F94' }}>
        Simulation indicative. Le crédit d&apos;impôt est accordé par l&apos;administration fiscale sous conditions.{' '}
        <a href="https://www.impots.gouv.fr" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: '#425D07' }}>
          En savoir plus sur impots.gouv.fr
        </a>
      </p>
    </div>
  )
}
