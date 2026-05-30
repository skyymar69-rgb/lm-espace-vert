'use client'

import { useEffect, useState } from 'react'
import { List } from 'lucide-react'

type Heading = {
  id: string
  text: string
  level: 2 | 3
}

type Props = {
  contentId: string
}

export function TableOfContents({ contentId }: Props) {
  const [headings, setHeadings] = useState<Heading[]>([])
  const [active, setActive] = useState<string>('')

  useEffect(() => {
    const container = document.getElementById(contentId)
    if (!container) return

    const els = Array.from(container.querySelectorAll('h2, h3')) as HTMLElement[]
    const parsed: Heading[] = els.map((el, i) => {
      if (!el.id) el.id = `heading-${i}`
      return {
        id: el.id,
        text: el.textContent ?? '',
        level: el.tagName === 'H2' ? 2 : 3,
      }
    })
    setHeadings(parsed)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting)
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: '0px 0px -60% 0px' }
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [contentId])

  if (headings.length < 3) return null

  return (
    <nav className="toc" aria-label="Sommaire de l'article">
      <p className="flex items-center gap-2 font-bold text-sm mb-3" style={{ color: '#2F2F2F' }}>
        <List size={15} aria-hidden="true" />
        Sommaire
      </p>
      <ol className="space-y-0.5" role="list">
        {headings.map((h) => (
          <li key={h.id}>
            <a
              href={`#${h.id}`}
              className={`toc${h.level === 3 ? ' toc-h3' : ''}${active === h.id ? ' font-semibold' : ''}`}
              style={active === h.id ? { color: '#4A6320' } : undefined}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}
