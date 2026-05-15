interface PriceRangeBadgeProps {
  from?: string
  className?: string
}

export function PriceRangeBadge({ from = '199€', className = '' }: PriceRangeBadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold ${className}`}
      style={{ borderColor: '#EDEDED', backgroundColor: '#F7F5F0', color: '#425D07' }}
    >
      <span style={{ color: '#80BC00' }}>€</span>
      À partir de {from} · Devis gratuit
    </span>
  )
}
