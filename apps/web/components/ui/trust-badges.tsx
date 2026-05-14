type Badge = {
  icon: string
  title: string
  subtitle: string
}

const DEFAULT_BADGES: Badge[] = [
  { icon: '🏆', title: '5 ans d\'expérience', subtitle: 'Artisan qualifié' },
  { icon: '⭐', title: '5/5 sur Google', subtitle: '28 avis vérifiés' },
  { icon: '🌿', title: 'Produits éco-responsables', subtitle: 'Respect de la biodiversité' },
  { icon: '📋', title: 'Devis gratuit', subtitle: 'Réponse en 24h' },
  { icon: '🔒', title: 'Assuré & garanti', subtitle: 'RC professionnelle' },
  { icon: '📍', title: 'Local & de confiance', subtitle: 'Basé à Saint-Didier' },
]

type Props = {
  badges?: Badge[]
  columns?: 2 | 3 | 4 | 6
}

export function TrustBadges({ badges = DEFAULT_BADGES, columns = 3 }: Props) {
  const gridClass = {
    2: 'grid-cols-2',
    3: 'grid-cols-2 sm:grid-cols-3',
    4: 'grid-cols-2 sm:grid-cols-4',
    6: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-6',
  }[columns]

  return (
    <div className={`grid ${gridClass} gap-4`}>
      {badges.map((badge) => (
        <div key={badge.title} className="trust-badge">
          <div className="trust-badge-icon">
            <span aria-hidden="true">{badge.icon}</span>
          </div>
          <div>
            <p className="font-bold text-sm text-[--color-fg] leading-tight">{badge.title}</p>
            <p className="text-xs text-[--color-fg-subtle] mt-0.5">{badge.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
