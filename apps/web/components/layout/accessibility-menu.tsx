'use client'

import { useState, useEffect, useRef } from 'react'
import { ALargeSmall, X } from 'lucide-react'

type FontSize = 'normal' | 'large' | 'xlarge'

const SIZES: { key: FontSize; label: string; px: string }[] = [
  { key: 'normal',  label: 'A',   px: '16px' },
  { key: 'large',   label: 'A+',  px: '18px' },
  { key: 'xlarge',  label: 'A++', px: '20px' },
]

export function AccessibilityMenu() {
  const [open, setOpen]         = useState(false)
  const [fontSize, setFontSize] = useState<FontSize>('normal')
  const panelRef                = useRef<HTMLDivElement>(null)
  const btnRef                  = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const stored = localStorage.getItem('a11y-font') as FontSize | null
    if (stored && SIZES.find(s => s.key === stored)) applySize(stored, false)
  }, [])

  // Close on click-outside
  useEffect(() => {
    if (!open) return
    function onDown(e: MouseEvent) {
      if (panelRef.current && !panelRef.current.contains(e.target as Node) &&
          btnRef.current && !btnRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', onDown)
    return () => document.removeEventListener('mousedown', onDown)
  }, [open])

  // Close on Escape
  useEffect(() => {
    if (!open) return
    function onKey(e: KeyboardEvent) { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  function applySize(key: FontSize, save = true) {
    const entry = SIZES.find(s => s.key === key)!
    document.documentElement.style.fontSize = entry.px
    setFontSize(key)
    if (save) localStorage.setItem('a11y-font', key)
  }

  return (
    <div className="relative">
      <button
        ref={btnRef}
        onClick={() => setOpen(v => !v)}
        aria-label="Options d'accessibilité"
        aria-expanded={open}
        aria-haspopup="dialog"
        className="h-9 w-9 flex items-center justify-center rounded-md text-[#8C8F94] hover:bg-[#F4F1E9] hover:text-[#2F2F2F] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#749A30]"
      >
        <ALargeSmall size={18} aria-hidden="true" />
      </button>

      {open && (
        <div
          ref={panelRef}
          role="dialog"
          aria-label="Options d'accessibilité"
          className="absolute right-0 top-full mt-2 z-50 bg-white border border-[#EDEDED] rounded-2xl shadow-[rgba(0,0,0,0.10)_0px_8px_32px_0px] p-4 w-56"
        >
          <div className="flex items-center justify-between mb-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#8C8F94]">
              Accessibilité
            </p>
            <button
              onClick={() => setOpen(false)}
              aria-label="Fermer"
              className="h-6 w-6 flex items-center justify-center rounded text-[#AAAAAA] hover:text-[#2F2F2F] transition-colors"
            >
              <X size={14} aria-hidden="true" />
            </button>
          </div>

          <p className="text-xs text-[#8C8F94] mb-2">Taille du texte</p>
          <div className="flex gap-2">
            {SIZES.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => applySize(key)}
                aria-pressed={fontSize === key}
                className="flex-1 rounded-lg py-2 text-sm font-semibold transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#749A30]"
                style={
                  fontSize === key
                    ? { backgroundColor: '#749A30', color: '#ffffff', boxShadow: 'rgb(128,188,0) 0px 0px 20px -10px' }
                    : { backgroundColor: '#F4F1E9', color: '#2F2F2F' }
                }
              >
                {label}
              </button>
            ))}
          </div>

          {fontSize !== 'normal' && (
            <button
              onClick={() => applySize('normal')}
              className="mt-3 w-full text-xs text-[#8C8F94] hover:text-[#4A6320] transition-colors text-center"
            >
              Réinitialiser
            </button>
          )}
        </div>
      )}
    </div>
  )
}
