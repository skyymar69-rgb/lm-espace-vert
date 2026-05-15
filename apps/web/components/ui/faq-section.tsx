'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export type FAQItem = {
  question: string
  answer: string
}

type Props = {
  items: FAQItem[]
  title?: string
  subtitle?: string
  withJsonLd?: boolean
}

export function FAQSection({ items, title, subtitle, withJsonLd = true }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  }

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section aria-labelledby="faq-heading">
      {withJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}

      {(title || subtitle) && (
        <div className="text-center mb-10">
          {subtitle && (
            <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: '#80BC00' }}>
              {subtitle}
            </p>
          )}
          {title && (
            <h2 id="faq-heading" className="font-display text-[clamp(1.75rem,4vw,2.5rem)] font-bold" style={{ color: '#425D07' }}>
              {title}
            </h2>
          )}
        </div>
      )}

      <div className="space-y-3 max-w-3xl mx-auto">
        {items.map((item, i) => {
          const isOpen = openIndex === i
          return (
            <div
              key={i}
              className="rounded-2xl border overflow-hidden transition-all duration-200"
              style={{
                borderColor: isOpen ? 'rgba(128,188,0,0.4)' : '#EDEDED',
                boxShadow: isOpen ? '0 4px 20px rgba(128,188,0,0.10)' : undefined,
              }}
            >
              <button
                type="button"
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-sm transition-colors"
                style={{
                  backgroundColor: isOpen ? 'rgba(128,188,0,0.06)' : '#ffffff',
                  color: isOpen ? '#425D07' : '#2F2F2F',
                }}
                onClick={() => toggle(i)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${i}`}
                id={`faq-question-${i}`}
              >
                <span className="flex-1">{item.question}</span>
                <ChevronDown
                  size={18}
                  aria-hidden="true"
                  style={{
                    color: isOpen ? '#80BC00' : '#8C8F94',
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s cubic-bezier(0.4,0,0.2,1), color 0.2s ease',
                    flexShrink: 0,
                  }}
                />
              </button>
              <div
                id={`faq-answer-${i}`}
                role="region"
                aria-labelledby={`faq-question-${i}`}
                style={{
                  maxHeight: isOpen ? '600px' : '0',
                  overflow: 'hidden',
                  transition: 'max-height 0.35s cubic-bezier(0.4,0,0.2,1)',
                }}
              >
                <div
                  className="px-5 pb-5 text-sm leading-relaxed"
                  style={{ color: '#5C606B' }}
                >
                  <div
                    className="pt-1 border-t"
                    style={{ borderColor: 'rgba(128,188,0,0.15)' }}
                  />
                  <p className="mt-4">{item.answer}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
