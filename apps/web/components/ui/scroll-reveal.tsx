'use client'

import { useEffect } from 'react'

/**
 * Révèle en fondu/montée les éléments porteurs de l'attribut [data-reveal]
 * lorsqu'ils entrent dans le viewport. Sans JS, tout reste visible (la classe
 * .reveal-ready n'est ajoutée que par ce composant). Respecte prefers-reduced-motion.
 */
export function ScrollReveal() {
  useEffect(() => {
    const root = document.documentElement
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    root.classList.add('reveal-ready')

    const els = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))
    if (!('IntersectionObserver' in window) || els.length === 0) {
      els.forEach((el) => el.classList.add('revealed'))
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return null
}
