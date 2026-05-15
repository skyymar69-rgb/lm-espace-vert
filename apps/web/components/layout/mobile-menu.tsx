'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone, FileText, Facebook, Instagram, MapPin, ChevronRight } from 'lucide-react'

type NavItem = { href: string; label: string }

const serviceDescriptions: Record<string, string> = {
  '/services': 'Entretien, création, élagage…',
  '/realisations': 'Nos projets réalisés',
  '/a-propos': 'Notre histoire & valeurs',
  '/contact': 'Nous écrire',
  '/devis': 'Devis gratuit en 24h',
  '/blog': 'Conseils jardin',
}

const zones = [
  "Saint-Didier-au-Mont-d'Or",
  'Caluire-et-Cuire',
  'Écully',
  'Tassin-la-Demi-Lune',
  'Limonest',
  'Dardilly',
]

export function MobileMenu({ items }: { items: readonly NavItem[] }) {
  const [open, setOpen] = useState(false)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setOpen(false); triggerRef.current?.focus() }
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <div className="lg:hidden">
      <button
        ref={triggerRef}
        onClick={() => setOpen(true)}
        aria-label="Ouvrir le menu"
        aria-expanded={open}
        aria-controls="mobile-menu-drawer"
        className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-[#2F2F2F] hover:bg-[#F7F5F0] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#80BC00]"
      >
        <Menu size={20} aria-hidden="true" />
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-label="Menu navigation"
          id="mobile-menu-drawer"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer */}
          <div
            className="absolute right-0 top-0 h-full w-80 bg-white shadow-2xl flex flex-col"
            style={{ animation: 'slideInRight 0.3s cubic-bezier(0.25, 1, 0.5, 1) both' }}
          >
            {/* Bandeau téléphone */}
            <a
              href="tel:+33672587353"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#0B3D2C' }}
            >
              <Phone size={14} aria-hidden="true" />
              06 72 58 73 53 — Appelez Léo
            </a>

            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#EDEDED]">
              <span className="font-display font-bold" style={{ color: '#2F2F2F' }}>Menu</span>
              <button
                onClick={() => { setOpen(false); triggerRef.current?.focus() }}
                aria-label="Fermer le menu"
                className="h-9 w-9 flex items-center justify-center rounded-lg text-[#2F2F2F] hover:bg-[#F7F5F0] transition-colors"
              >
                <X size={18} aria-hidden="true" />
              </button>
            </div>

            {/* Nav */}
            <nav aria-label="Navigation mobile" className="flex-1 overflow-y-auto px-4 py-4">
              <ul role="list" className="space-y-1">
                {items.map((item) => {
                  const active = pathname === item.href || pathname.startsWith(item.href + '/')
                  const desc = serviceDescriptions[item.href]
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={`flex items-center justify-between rounded-xl px-4 py-3 transition-colors ${
                          active
                            ? 'font-semibold'
                            : 'text-[#2F2F2F] hover:bg-[rgba(128,188,0,0.08)]'
                        }`}
                        style={active ? { backgroundColor: 'rgba(128,188,0,0.08)', color: '#425D07' } : undefined}
                        aria-current={active ? 'page' : undefined}
                      >
                        <span>
                          <span className="block text-sm font-semibold">{item.label}</span>
                          {desc && (
                            <span className="block text-xs mt-0.5" style={{ color: '#8C8F94' }}>{desc}</span>
                          )}
                        </span>
                        {active
                          ? <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#80BC00' }} aria-hidden="true" />
                          : <ChevronRight size={14} className="flex-shrink-0" style={{ color: '#8C8F94' }} aria-hidden="true" />
                        }
                      </Link>
                    </li>
                  )
                })}
              </ul>

              {/* Section zones */}
              <div className="mt-6 pt-5 border-t" style={{ borderColor: '#EDEDED' }}>
                <p className="px-4 text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#8C8F94' }}>
                  Nos zones d&apos;intervention
                </p>
                <ul className="flex flex-wrap gap-2 px-4">
                  {zones.map((zone) => (
                    <li
                      key={zone}
                      className="flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs"
                      style={{ borderColor: '#EDEDED', color: '#425D07', backgroundColor: '#F7F5F0' }}
                    >
                      <MapPin size={10} aria-hidden="true" style={{ color: '#80BC00' }} />
                      {zone}
                    </li>
                  ))}
                </ul>
              </div>
            </nav>

            {/* Bottom CTAs */}
            <div className="border-t border-[#EDEDED] p-5 space-y-3">
              <Link
                href="/devis"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center gap-2 w-full rounded-full px-5 py-3 text-sm font-bold transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#80BC00', color: '#ffffff', boxShadow: 'rgb(128, 188, 0) 0px 0px 25px -14px' }}
              >
                <FileText size={16} aria-hidden="true" />
                Devis gratuit — Réponse sous 24h
              </Link>

              {/* Social links */}
              <div className="flex justify-center gap-3 pt-1">
                <a href="https://www.facebook.com/people/LM-Paysage-et-jardin/61584572046303/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="h-9 w-9 flex items-center justify-center rounded-full bg-[#F7F5F0] text-[#2F2F2F] hover:bg-[#1877F2] hover:text-white transition-colors">
                  <Facebook size={16} aria-hidden="true" />
                </a>
                <a href="https://www.instagram.com/lm_espacevert" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="h-9 w-9 flex items-center justify-center rounded-full bg-[#F7F5F0] text-[#2F2F2F] hover:bg-[#E1306C] hover:text-white transition-colors">
                  <Instagram size={16} aria-hidden="true" />
                </a>
                <a href="https://wa.me/33672587353" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="h-9 w-9 flex items-center justify-center rounded-full bg-[#F7F5F0] text-[#2F2F2F] hover:bg-[#25D366] hover:text-white transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
