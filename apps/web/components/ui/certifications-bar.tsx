interface CertificationsBarProps {
  className?: string
}

const certs = [
  'RC Professionnelle ✓',
  'Agréé SAP ✓',
  'CERTIPHYTO ✓',
  'Husqvarna Partner ✓',
  'Devis gratuit ✓',
]

export function CertificationsBar({ className = '' }: CertificationsBarProps) {
  return (
    <div
      className={`w-full overflow-x-auto ${className}`}
      style={{ backgroundColor: '#F7F5F0' }}
      aria-label="Certifications et labels"
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <ul
          role="list"
          className="flex items-center justify-center gap-0 divide-x py-3 text-xs font-semibold sm:text-sm"
          style={{ borderColor: '#EDEDED', color: '#425D07' }}
        >
          {certs.map((cert, i) => (
            <li
              key={cert}
              className="flex-shrink-0 px-4 py-1 text-center"
              style={{
                color: '#425D07',
                borderLeft: i > 0 ? '1px solid #EDEDED' : 'none',
              }}
            >
              {cert}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
