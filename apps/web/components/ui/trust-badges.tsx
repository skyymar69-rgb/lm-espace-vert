import React from 'react'
import { Award, Star, Leaf, FileText, ShieldCheck, MapPin } from 'lucide-react'
import type { LucideProps } from 'lucide-react'

type IconFC = React.ComponentType<LucideProps>

type Badge = {
  Icon: IconFC
  title: string
  subtitle: string
}

const DEFAULT_BADGES: Badge[] = [
  { Icon: Award,       title: '5 ans d\'expérience',         subtitle: 'Artisan qualifié' },
  { Icon: Star,        title: '5/5 sur Google',              subtitle: '28 avis vérifiés' },
  { Icon: Leaf,        title: 'Produits éco-responsables',   subtitle: 'Respect de la biodiversité' },
  { Icon: FileText,    title: 'Devis gratuit',               subtitle: 'Réponse en 24h' },
  { Icon: ShieldCheck, title: 'Assuré & garanti',            subtitle: 'RC professionnelle' },
  { Icon: MapPin,      title: 'Local & de confiance',        subtitle: 'Basé à Saint-Didier' },
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
            <badge.Icon size={22} aria-hidden="true" style={{ color: '#4A6320' }} />
          </div>
          <div>
            <p className="font-bold text-sm leading-tight" style={{ color: '#2F2F2F' }}>{badge.title}</p>
            <p className="text-xs mt-0.5 text-[#8C8F94]">{badge.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
