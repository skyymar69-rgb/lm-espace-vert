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
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  }

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
            <p className="text-sm font-semibold uppercase tracking-widest text-[--color-accent] mb-2">
              {subtitle}
            </p>
          )}
          {title && (
            <h2 id="faq-heading" className="font-display text-[clamp(1.75rem,4vw,2.5rem)] font-bold text-[--color-fg]">
              {title}
            </h2>
          )}
        </div>
      )}

      <div className="space-y-3 max-w-3xl mx-auto">
        {items.map((item, i) => (
          <details key={i} className="faq-item">
            <summary>
              <span className="flex-1 text-left">{item.question}</span>
              <ChevronDown size={18} className="faq-icon ml-3" aria-hidden="true" />
            </summary>
            <div className="faq-body">
              <p>{item.answer}</p>
            </div>
          </details>
        ))}
      </div>
    </section>
  )
}
