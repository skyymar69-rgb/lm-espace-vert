'use client'

import Link from 'next/link'
import { Phone, FileText } from 'lucide-react'
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
    <div className="sticky-contact-bar lg:hidden animate-slide-down" role="complementary" aria-label="Contact rapide">
      <a
        href="tel:+33674734698"
        className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-[--color-bg-subtle] border border-[--color-border] py-2.5 font-semibold text-sm text-[--color-fg] transition-colors hover:bg-[--color-green-light] hover:text-[--color-primary]"
        aria-label="Appeler LM Espace Vert"
      >
        <Phone size={16} aria-hidden="true" />
        Appeler
      </a>
      <Link
        href="/devis"
        className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-[--color-green-primary] py-2.5 font-semibold text-sm text-white transition-colors hover:bg-[--color-green-hover]"
      >
        <FileText size={16} aria-hidden="true" />
        Devis gratuit
      </Link>
    </div>
  )
}
