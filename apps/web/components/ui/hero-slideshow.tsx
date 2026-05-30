'use client'

import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'

// 3 photos HD du jardin (défilement type carrousel, comme le site d'origine).
const SLIDES = [
  { src: '/images/realisations/lm-04.webp', alt: 'Jardin avec pelouse fraîche et clôture soignée — LM Espace Vert' },
  { src: '/images/realisations/lm-30.webp', alt: 'Terrasse en bois et bassin paysager réalisés par LM Espace Vert' },
  { src: '/images/realisations/lm-41.webp', alt: 'Massif fleuri et pelouse soignée — création paysagère LM Espace Vert' },
]

export function HeroSlideshow() {
  const [active, setActive] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  // Défilement automatique (désactivé si l'utilisateur préfère moins de mouvement)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = setInterval(() => setActive((a) => (a + 1) % SLIDES.length), 5500)
    return () => clearInterval(id)
  }, [])

  // Curseur rond transparent qui suit la souris dans le héro
  useEffect(() => {
    const el = containerRef.current
    const ring = ringRef.current
    if (!el || !ring) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let raf = 0
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        ring.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`
        ring.style.opacity = '1'
      })
    }
    const onLeave = () => { ring.style.opacity = '0' }
    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    return () => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {SLIDES.map((slide, i) => (
        <div
          key={slide.src}
          className="absolute inset-0 hero-slide"
          style={{ opacity: i === active ? 1 : 0, zIndex: i === active ? 1 : 0 }}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={i === 0}
            fetchPriority={i === 0 ? 'high' : undefined}
            quality={82}
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
      ))}

      {/* Curseur rond transparent */}
      <div ref={ringRef} className="hero-cursor-ring" />

      {/* Indicateurs de slide */}
      <div className="absolute left-1/2 -translate-x-1/2 flex gap-2.5 z-20" style={{ bottom: 26 }}>
        {SLIDES.map((_, i) => (
          <span
            key={i}
            className="hero-dot"
            style={{
              width: i === active ? 26 : 9,
              height: 9,
              borderRadius: 9999,
              backgroundColor: i === active ? '#9E4B47' : 'rgba(255,255,255,0.55)',
            }}
          />
        ))}
      </div>
    </div>
  )
}
