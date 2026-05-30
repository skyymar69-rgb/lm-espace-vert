import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface ServiceLink {
  label: string
  href: string
}

const categoryServiceMap: Record<string, ServiceLink[]> = {
  Conseils: [
    { label: "Entretien d'espaces verts", href: '/services/entretien-espaces-verts' },
    { label: 'Taille de haies', href: '/services/elagage-abattage' },
  ],
  'Entretien saisonnier': [
    { label: "Entretien d'espaces verts", href: '/services/entretien-espaces-verts' },
    { label: 'Élagage & Abattage', href: '/services/elagage-abattage' },
  ],
  Travaux: [
    { label: 'Création de jardins', href: '/services/creation-jardins' },
    { label: 'Arrosage automatique', href: '/services/arrosage-automatique' },
    { label: 'Maçonnerie paysagère', href: '/services/maconnerie-paysagere' },
  ],
  Aménagement: [
    { label: 'Création de jardins', href: '/services/creation-jardins' },
    { label: 'Maçonnerie paysagère', href: '/services/maconnerie-paysagere' },
  ],
  Zones: [
    { label: 'Notre secteur', href: '/secteur' },
    { label: "Entretien d'espaces verts", href: '/services/entretien-espaces-verts' },
  ],
  Actualites: [
    { label: "Entretien d'espaces verts", href: '/services/entretien-espaces-verts' },
    { label: 'Création de jardins', href: '/services/creation-jardins' },
    { label: 'Élagage & Abattage', href: '/services/elagage-abattage' },
  ],
}

// Fallback pour les catégories non mappées
const defaultLinks: ServiceLink[] = [
  { label: "Entretien d'espaces verts", href: '/services/entretien-espaces-verts' },
  { label: 'Création de jardins', href: '/services/creation-jardins' },
]

interface ServiceLinksProps {
  category: string
}

export function ServiceLinks({ category }: ServiceLinksProps) {
  const links = categoryServiceMap[category] ?? defaultLinks

  if (links.length === 0) return null

  return (
    <div className="mt-8 pt-6 border-t border-[#EDEDED]">
      <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: '#8C8F94' }}>
        Nos services liés
      </p>
      <div className="flex flex-wrap gap-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold transition-all hover:opacity-90 hover:-translate-y-0.5"
            style={{ backgroundColor: '#243238', color: '#ffffff' }}
          >
            {link.label}
            <ArrowRight size={11} aria-hidden="true" />
          </Link>
        ))}
      </div>
    </div>
  )
}
