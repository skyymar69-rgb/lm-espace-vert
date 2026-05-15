import { GoogleReviewsBadge } from '@/components/ui/google-reviews-badge'

const testimonials = [
  {
    stars: 5,
    text: "Léo a transformé notre jardin en un espace magnifique. Travail soigné, respect des délais et des conseils vraiment utiles pour l'entretien. Je recommande vivement !",
    name: 'Sophie M.',
    city: 'Caluire-et-Cuire',
  },
  {
    stars: 5,
    text: "Excellent travail pour la création de notre terrasse et l'installation du système d'arrosage automatique. Léo est professionnel, ponctuel et très à l'écoute. Résultat impeccable.",
    name: 'Thomas B.',
    city: 'Écully',
  },
  {
    stars: 5,
    text: "Nous faisons appel à LM Espace Vert pour l'entretien régulier de notre jardin depuis 2 ans. Sérieux, compétent et toujours disponible. Notre jardin n'a jamais été aussi beau !",
    name: 'Marie-Claire D.',
    city: "Saint-Didier-au-Mont-d'Or",
  },
]

export function TestimonialsSection() {
  return (
    <section aria-labelledby="testimonials-heading" className="py-20 lg:py-24" style={{ backgroundColor: '#F7F5F0' }}>
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#80BC00' }}>
            AVIS CLIENTS
          </p>
          <h2 id="testimonials-heading" className="font-display text-3xl font-bold sm:text-4xl mb-4" style={{ color: '#425D07' }}>
            Ce que disent nos clients
          </h2>
          <div className="flex justify-center">
            <GoogleReviewsBadge rating={5.0} count={28} />
          </div>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="rounded-2xl border bg-white p-7 shadow-sm transition-all hover:shadow-md hover:-translate-y-1"
              style={{ borderColor: '#EDEDED' }}
            >
              {/* Étoiles */}
              <div className="mb-4 flex items-center gap-0.5" aria-label={`${t.stars} étoiles sur 5`}>
                {Array.from({ length: t.stars }).map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#FBBF24" aria-hidden="true">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Texte */}
              <blockquote className="mb-5 text-sm leading-relaxed" style={{ color: '#8C8F94' }}>
                &ldquo;{t.text}&rdquo;
              </blockquote>

              {/* Footer */}
              <footer className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold" style={{ color: '#2F2F2F' }}>{t.name}</p>
                  <p className="text-xs" style={{ color: '#8C8F94' }}>{t.city}</p>
                </div>
                <span
                  className="flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold"
                  style={{ backgroundColor: 'rgba(128,188,0,0.1)', color: '#425D07' }}
                >
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Vérifié Google
                </span>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
