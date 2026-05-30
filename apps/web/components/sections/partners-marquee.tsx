import Image from 'next/image'

const partners = [
  { src: '/images/partenaires/husqvarna.png', name: 'Husqvarna' },
  { src: '/images/partenaires/stihl.png', name: 'Stihl' },
  { src: '/images/partenaires/plattard.png', name: 'Plattard' },
  { src: '/images/partenaires/partenaire-1.png', name: 'BPj' },
  { src: '/images/partenaires/partenaire-2.jpg', name: 'Végétal Concept' },
  { src: '/images/partenaires/partenaire-3.png', name: 'Frans Bonhomme' },
  { src: '/images/partenaires/service-a-la-personne.webp', name: 'Service à la personne' },
] as const

function LogoCard({ src, name }: { src: string; name: string }) {
  return (
    <div
      className="flex items-center justify-center shrink-0 rounded-xl bg-white border"
      style={{ width: 180, height: 96, borderColor: '#E7E2D6', boxShadow: '0 1px 3px rgba(36,50,56,0.05)' }}
    >
      <div className="relative" style={{ width: 132, height: 60 }}>
        <Image src={src} alt={`Partenaire ${name}`} fill sizes="180px" className="object-contain" />
      </div>
    </div>
  )
}

export function PartnersMarquee() {
  // Liste dupliquée pour un défilement en boucle continue.
  const loop = [...partners, ...partners]
  return (
    <section
      aria-label="Nos partenaires"
      style={{ backgroundColor: '#F4F1E9' }}
      className="py-16 border-y"
    >
      <div className="container mx-auto max-w-7xl px-6 sm:px-8">
        <div className="text-center mb-10">
          <p
            className="text-sm font-semibold uppercase mb-3"
            style={{ color: '#9E4B47', letterSpacing: '0.18em' }}
          >
            Nos partenaires
          </p>
          <h2 className="font-display" style={{ color: '#243238' }}>
            Des marques de confiance à nos côtés
          </h2>
          <p className="mt-3 max-w-2xl mx-auto" style={{ color: '#5C606B' }}>
            Nous collaborons avec des partenaires reconnus pour des végétaux et du matériel
            professionnels adaptés à chacune de nos interventions.
          </p>
        </div>
      </div>

      {/* Bandeau défilant — pleine largeur, dégradés latéraux pour un fondu propre */}
      <div className="marquee-mask">
        <div className="marquee-track">
          {loop.map((p, i) => (
            <div key={`${p.name}-${i}`} className="px-4">
              <LogoCard src={p.src} name={p.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
