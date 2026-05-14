'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Search, X, Clock } from 'lucide-react'
import { articles } from '@/lib/articles'

type Props = {
  open: boolean
  onClose: () => void
}

export function SearchModal({ open, onClose }: Props) {
  const [query, setQuery] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const results = query.trim().length > 1
    ? articles.filter((a) =>
        a.title.toLowerCase().includes(query.toLowerCase()) ||
        a.excerpt.toLowerCase().includes(query.toLowerCase()) ||
        a.category.toLowerCase().includes(query.toLowerCase()) ||
        a.keywords.some((k) => k.toLowerCase().includes(query.toLowerCase()))
      ).slice(0, 8)
    : []

  useEffect(() => {
    if (open) {
      setQuery('')
      setTimeout(() => inputRef.current?.focus(), 50)
    }
  }, [open])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[300] flex items-start justify-center pt-[10vh] px-4"
      role="dialog"
      aria-modal="true"
      aria-label="Rechercher dans le blog"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div className="relative w-full max-w-2xl bg-[--color-bg-elevated] rounded-2xl shadow-[--shadow-xl] border border-[--color-border] overflow-hidden animate-scale-in">
        <div className="relative flex items-center px-4 py-3 border-b border-[--color-border]">
          <Search size={18} className="text-[--color-fg-subtle] mr-3 flex-shrink-0" aria-hidden="true" />
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rechercher un article, une catégorie…"
            className="flex-1 bg-transparent text-[--color-fg] placeholder-[--color-fg-subtle] outline-none text-base"
            autoComplete="off"
          />
          <button
            onClick={onClose}
            className="ml-3 p-1 rounded-md text-[--color-fg-subtle] hover:text-[--color-fg] hover:bg-[--color-bg-subtle]"
            aria-label="Fermer la recherche"
          >
            <X size={18} aria-hidden="true" />
          </button>
        </div>

        <div className="max-h-[60vh] overflow-y-auto">
          {results.length > 0 ? (
            <ul role="list" className="p-2">
              {results.map((article) => (
                <li key={article.slug}>
                  <Link
                    href={`/blog/${article.slug}`}
                    onClick={onClose}
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-[--color-bg-subtle] transition-colors group"
                  >
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-sm text-[--color-fg] group-hover:text-[--color-primary] transition-colors line-clamp-1">
                        {article.title}
                      </p>
                      <p className="text-xs text-[--color-fg-subtle] mt-0.5 line-clamp-1">{article.excerpt}</p>
                    </div>
                    <div className="flex flex-col items-end gap-1 flex-shrink-0">
                      <span className="chip chip-green">{article.category}</span>
                      <span className="flex items-center gap-1 text-xs text-[--color-fg-subtle]">
                        <Clock size={10} aria-hidden="true" /> {article.readingTime}
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          ) : query.trim().length > 1 ? (
            <p className="p-8 text-center text-[--color-fg-muted] text-sm">
              Aucun résultat pour «{query}». Essayez «taille», «entretien» ou «création».
            </p>
          ) : (
            <div className="p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-[--color-fg-subtle] mb-3">
                Catégories populaires
              </p>
              <div className="flex flex-wrap gap-2">
                {['Entretien saisonnier', 'Taille & coupe', 'Création jardins', 'Élagage', 'Plantes'].map((cat) => (
                  <Link
                    key={cat}
                    href={`/blog?categorie=${encodeURIComponent(cat)}`}
                    onClick={onClose}
                    className="chip chip-green hover:bg-[--color-green-primary] hover:text-white transition-colors"
                  >
                    {cat}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="px-4 py-2.5 border-t border-[--color-border] bg-[--color-bg-subtle] flex items-center justify-between text-xs text-[--color-fg-subtle]">
          <span>{articles.length} articles disponibles</span>
          <span>ESC pour fermer</span>
        </div>
      </div>
    </div>
  )
}
