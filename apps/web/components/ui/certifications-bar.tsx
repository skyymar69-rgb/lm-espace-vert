import type { ReactNode } from 'react'

interface CertificationsBarProps {
  className?: string
}

const SapBadge = () => (
  <span className="flex items-center gap-1.5">
    <svg
      width="20"
      height="20"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Green rounded square background */}
      <rect width="40" height="40" rx="8" fill="#4A6320" />
      {/* Stylised hand / person silhouette */}
      <circle cx="20" cy="12" r="5" fill="#ffffff" />
      <path d="M10 32c0-5.523 4.477-10 10-10s10 4.477 10 10" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      {/* Small checkmark badge overlay */}
      <circle cx="30" cy="30" r="8" fill="#749A30" />
      <path d="M26.5 30l2.5 2.5 4.5-4.5" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
    <span>Agréé SAP</span>
  </span>
)

type CertItem = { label: ReactNode; key: string }

const certs: CertItem[] = [
  { key: 'rc', label: 'RC Professionnelle ✓' },
  { key: 'sap', label: <SapBadge /> },
  { key: 'certiphyto', label: 'CERTIPHYTO ✓' },
  { key: 'husqvarna', label: 'Husqvarna Partner ✓' },
  { key: 'devis', label: 'Devis gratuit ✓' },
]

export function CertificationsBar({ className = '' }: CertificationsBarProps) {
  return (
    <div
      className={`w-full overflow-x-auto ${className}`}
      style={{ backgroundColor: '#F4F1E9' }}
      aria-label="Certifications et labels"
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <ul
          role="list"
          className="flex items-center justify-center gap-0 divide-x py-3 text-xs font-semibold sm:text-sm"
          style={{ borderColor: '#EDEDED', color: '#4A6320' }}
        >
          {certs.map((cert, i) => (
            <li
              key={cert.key}
              className="flex-shrink-0 px-4 py-1 text-center"
              style={{
                color: '#4A6320',
                borderLeft: i > 0 ? '1px solid #EDEDED' : 'none',
              }}
            >
              {cert.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
