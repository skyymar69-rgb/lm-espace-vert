'use client'

import { useRef, useState, useCallback } from 'react'
import Image from 'next/image'

type Props = {
  before: { src: string; alt: string }
  after:  { src: string; alt: string }
  label?: string
  height?: number
}

export function BeforeAfterSlider({ before, after, label, height = 400 }: Props) {
  const [pos, setPos] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const dragging = useRef(false)

  const updatePos = useCallback((clientX: number) => {
    const el = containerRef.current
    if (!el) return
    const { left, width } = el.getBoundingClientRect()
    const newPos = Math.max(5, Math.min(95, ((clientX - left) / width) * 100))
    setPos(newPos)
  }, [])

  return (
    <div>
      {label && <p className="text-sm font-semibold text-[--color-fg-subtle] mb-3 text-center">{label}</p>}
      <div
        ref={containerRef}
        className="before-after-container select-none"
        style={{ height }}
        onMouseDown={(e) => { dragging.current = true; updatePos(e.clientX) }}
        onMouseMove={(e) => { if (dragging.current) updatePos(e.clientX) }}
        onMouseUp={() => { dragging.current = false }}
        onMouseLeave={() => { dragging.current = false }}
        onTouchStart={(e) => { dragging.current = true; updatePos(e.touches[0].clientX) }}
        onTouchMove={(e) => { if (dragging.current) updatePos(e.touches[0].clientX) }}
        onTouchEnd={() => { dragging.current = false }}
        role="img"
        aria-label={`Comparaison avant/après${label ? ` — ${label}` : ''}`}
      >
        {/* After (full) */}
        <Image src={after.src} alt={after.alt} fill sizes="100vw" className="object-cover" />

        {/* Before (clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        >
          <Image src={before.src} alt={before.alt} fill sizes="100vw" className="object-cover" />
        </div>

        {/* Labels */}
        <span className="absolute top-3 left-3 bg-black/60 text-white text-xs font-bold px-2 py-1 rounded-md pointer-events-none">
          AVANT
        </span>
        <span className="absolute top-3 right-3 bg-[--color-green-primary] text-white text-xs font-bold px-2 py-1 rounded-md pointer-events-none">
          APRÈS
        </span>

        {/* Handle */}
        <div
          className="before-after-handle"
          style={{ left: `${pos}%` }}
          aria-hidden="true"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M7 5l-4 5 4 5M13 5l4 5-4 5" stroke="#275524" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
