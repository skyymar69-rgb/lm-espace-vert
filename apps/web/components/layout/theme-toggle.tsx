'use client'

import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

type Theme = 'light' | 'dark'

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('light')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const stored = localStorage.getItem('theme') as Theme | null
    const system = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    setTheme(stored ?? system)
  }, [])

  function toggleTheme() {
    const next: Theme = theme === 'light' ? 'dark' : 'light'
    setTheme(next)
    document.documentElement.dataset['theme'] = next
    localStorage.setItem('theme', next)
  }

  if (!mounted) {
    return (
      <div className="h-9 w-9 rounded-md" aria-hidden="true" />
    )
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label={theme === 'light' ? 'Activer le thème sombre' : 'Activer le thème clair'}
      aria-pressed={theme === 'dark'}
      className="inline-flex h-9 w-9 items-center justify-center rounded-md text-[--color-fg-muted] transition-colors hover:bg-[--color-bg-subtle] hover:text-[--color-fg] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--color-focus]"
    >
      {theme === 'light' ? (
        <Moon size={18} aria-hidden="true" />
      ) : (
        <Sun size={18} aria-hidden="true" />
      )}
    </button>
  )
}
