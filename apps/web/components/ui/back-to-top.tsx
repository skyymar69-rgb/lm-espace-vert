'use client'

import { useEffect, useState } from 'react'
import { ChevronUp } from 'lucide-react'

export function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Retour en haut de page"
      title="Retour en haut"
      className="group"
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        left: 'auto',
        zIndex: 40,
        width: '44px',
        height: '44px',
        borderRadius: '50%',
        backgroundColor: '#425D07',
        border: '1.5px solid #425D07',
        color: '#ffffff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: 'rgba(0,0,0,0.12) 0px 4px 16px 0px',
        cursor: 'pointer',
        transition: 'opacity 0.3s, transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), background-color 0.2s',
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? 'auto' : 'none',
        transform: visible ? 'translateY(0)' : 'translateY(12px)',
      }}
    >
      <ChevronUp size={20} aria-hidden="true" />
    </button>
  )
}
