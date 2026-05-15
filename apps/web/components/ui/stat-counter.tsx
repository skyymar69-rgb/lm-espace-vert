'use client'

import { useEffect, useRef, useState } from 'react'

type Props = {
  value: number
  suffix?: string
  prefix?: string
  duration?: number
}

export function StatCounter({ value, suffix = '', prefix = '', duration = 1800 }: Props) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const start = Date.now()
          const tick = () => {
            const elapsed = Date.now() - start
            const rawProgress = Math.min(elapsed / duration, 1)
            // Ease-out quart — smooth deceleration
            const eased = 1 - Math.pow(1 - rawProgress, 4)
            setCount(Math.round(eased * value))
            if (rawProgress < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [value, duration])

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  )
}
