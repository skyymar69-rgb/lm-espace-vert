'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

type NavItem = { href: string; label: string }

export function MobileMenu({ items }: { items: readonly NavItem[] }) {
  const [open, setOpen] = useState(false)
  const dialogRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return

    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setOpen(false)
        triggerRef.current?.focus()
      }
    }

    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [open])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <div className="md:hidden">
      <button
        ref={triggerRef}
        onClick={() => setOpen(true)}
        aria-label="Ouvrir le menu"
        aria-expanded={open}
        aria-controls="mobile-menu"
        className="inline-flex h-9 w-9 items-center justify-center rounded-md text-[--color-fg-muted] transition-colors hover:bg-[--color-bg-subtle] hover:text-[--color-fg] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--color-focus]"
      >
        <Menu size={20} aria-hidden="true" />
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50"
          role="dialog"
          aria-modal="true"
          aria-label="Menu navigation"
          id="mobile-menu"
          ref={dialogRef}
        >
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer */}
          <div className="absolute right-0 top-0 h-full w-72 bg-[--color-bg-elevated] p-6 shadow-xl">
            <div className="flex items-center justify-between">
              <span className="font-display text-lg font-semibold">Menu</span>
              <button
                onClick={() => { setOpen(false); triggerRef.current?.focus() }}
                aria-label="Fermer le menu"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md text-[--color-fg-muted] hover:bg-[--color-bg-subtle] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[--color-focus]"
              >
                <X size={20} aria-hidden="true" />
              </button>
            </div>

            <nav aria-label="Navigation mobile" className="mt-8">
              <ul role="list" className="space-y-1">
                {items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-md px-3 py-3 text-base font-medium text-[--color-fg-muted] transition-colors hover:bg-[--color-bg-subtle] hover:text-[--color-fg] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[--color-focus]"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mt-8 border-t border-[--color-border] pt-6">
              <Link
                href="/devis"
                onClick={() => setOpen(false)}
                className="block w-full rounded-md bg-[--color-accent] px-4 py-3 text-center font-semibold text-[--color-accent-fg] transition-colors hover:bg-[--color-gold-500] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[--color-focus]"
              >
                Devis gratuit
              </Link>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-3 block w-full rounded-md border border-[--color-border] px-4 py-3 text-center font-medium text-[--color-fg] transition-colors hover:bg-[--color-bg-subtle] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[--color-focus]"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
