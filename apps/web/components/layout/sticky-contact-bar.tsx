'use client'

import Link from 'next/link'
import { Phone, FileText, MessageCircle } from 'lucide-react'
import { useEffect, useState } from 'react'

export function StickyContactBar() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!show) return null

  return (
    <div
      className="animate-slide-down md:hidden"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 49,
        backgroundColor: '#FFFFFF',
        borderTop: '1px solid #EDEDED',
        boxShadow: '0 -4px 16px rgba(0,0,0,0.07)',
        padding: '6px 12px',
        display: 'flex',
        gap: '8px',
        height: '44px',
        alignItems: 'center',
      }}
      role="complementary"
      aria-label="Contact rapide"
    >
      {/* WhatsApp */}
      <a
        href="https://wa.me/33672587353"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '6px',
          borderRadius: '12px',
          backgroundColor: '#25D366',
          padding: '0 8px',
          height: '30px',
          fontWeight: 600,
          fontSize: '12px',
          color: '#FFFFFF',
          textDecoration: 'none',
        }}
        aria-label="Contacter par WhatsApp"
      >
        <MessageCircle size={15} aria-hidden="true" />
        WhatsApp
      </a>

      {/* Appeler */}
      <a
        href="tel:+33672587353"
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '6px',
          borderRadius: '12px',
          backgroundColor: '#425D07',
          padding: '0 8px',
          height: '30px',
          fontWeight: 600,
          fontSize: '12px',
          color: '#FFFFFF',
          textDecoration: 'none',
        }}
        aria-label="Appeler LM Espace Vert"
      >
        <Phone size={15} aria-hidden="true" />
        Appeler
      </a>

      {/* Devis */}
      <Link
        href="/devis"
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '6px',
          borderRadius: '12px',
          backgroundColor: '#80BC00',
          padding: '0 8px',
          height: '30px',
          fontWeight: 600,
          fontSize: '12px',
          color: '#FFFFFF',
          textDecoration: 'none',
        }}
      >
        <FileText size={15} aria-hidden="true" />
        Devis
      </Link>
    </div>
  )
}
