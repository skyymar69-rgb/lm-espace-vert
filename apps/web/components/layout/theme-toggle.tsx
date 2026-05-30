'use client'

import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

type Theme = 'light' | 'dark'

export function ThemeToggle() {
  const [theme, setTheme]   = useState<Theme>('light')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Lit uniquement localStorage — jamais prefers-color-scheme
    // Le site est toujours clair par défaut, le dark mode est opt-in
    const stored = localStorage.getItem('theme') as Theme | null
    const initial: Theme = stored === 'dark' ? 'dark' : 'light'
    setTheme(initial)
    document.documentElement.dataset.theme = initial
  }, [])

  function toggleTheme() {
    const next: Theme = theme === 'light' ? 'dark' : 'light'
    setTheme(next)
    document.documentElement.dataset.theme = next
    localStorage.setItem('theme', next)
  }

  if (!mounted) return <div className="h-9 w-9 rounded-md" aria-hidden="true" />

  return (
    <button
      onClick={toggleTheme}
      aria-label={theme === 'light' ? 'Activer le thème sombre' : 'Activer le thème clair'}
      aria-pressed={theme === 'dark'}
      className="h-9 w-9 flex items-center justify-center rounded-md text-[#8C8F94] hover:bg-[#F4F1E9] hover:text-[#2F2F2F] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#749A30]"
    >
      {theme === 'light'
        ? <Moon size={18} aria-hidden="true" />
        : <Sun  size={18} aria-hidden="true" />
      }
    </button>
  )
}
