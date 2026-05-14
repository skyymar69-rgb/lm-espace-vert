'use client'

import { useEffect, useState } from 'react'

type Props = {
  targetId: string
}

export function ReadingProgress({ targetId }: Props) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const update = () => {
      const el = document.getElementById(targetId)
      if (!el) return
      const rect = el.getBoundingClientRect()
      const total = el.offsetHeight - window.innerHeight
      const scrolled = Math.max(0, -rect.top)
      setProgress(total > 0 ? Math.min((scrolled / total) * 100, 100) : 0)
    }
    window.addEventListener('scroll', update, { passive: true })
    update()
    return () => window.removeEventListener('scroll', update)
  }, [targetId])

  return (
    <div className="reading-progress" role="progressbar" aria-valuenow={Math.round(progress)} aria-valuemin={0} aria-valuemax={100} aria-label="Progression de lecture">
      <div className="reading-progress-fill" style={{ transform: `scaleX(${progress / 100})` }} />
    </div>
  )
}
