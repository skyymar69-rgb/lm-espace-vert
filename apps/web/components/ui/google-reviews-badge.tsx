import Link from 'next/link'

interface GoogleReviewsBadgeProps {
  rating?: number
  count?: number
  className?: string
}

export function GoogleReviewsBadge({
  rating = 5.0,
  count = 20,
  className = '',
}: GoogleReviewsBadgeProps) {
  const stars = Math.round(rating)

  return (
    <Link
      href="https://maps.app.goo.gl/KkB9EVAchidTC4G59"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Voir nos ${count} avis Google — Note : ${rating}/5`}
      className={`inline-flex items-center gap-2.5 rounded-full border bg-white px-4 py-2 text-sm shadow-sm transition-shadow hover:shadow-md ${className}`}
      style={{ borderColor: '#EDEDED' }}
    >
      {/* Icône Google stylisée */}
      <span
        className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
        style={{
          background:
            'linear-gradient(135deg, #4285F4 0%, #EA4335 33%, #FBBC05 66%, #34A853 100%)',
        }}
        aria-hidden="true"
      >
        G
      </span>

      {/* Étoiles */}
      <span className="flex items-center gap-0.5" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill={i < stars ? '#FBBF24' : '#E5E7EB'}
            aria-hidden="true"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
      </span>

      {/* Note + nombre d'avis */}
      <span style={{ color: '#2F2F2F' }}>
        <span className="font-bold">{rating.toFixed(1)}</span>
        <span style={{ color: '#8C8F94' }}> · {count} avis Google</span>
      </span>
    </Link>
  )
}
