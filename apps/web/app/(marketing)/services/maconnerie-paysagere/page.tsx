import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Phone, MapPin, Star, Gem, ShieldCheck, Clock } from 'lucide-react'
import { JsonLd } from '@/components/seo/json-ld'

export const metadata: Metadata = {
  title: "MaÃ§onnerie PaysagÃ¨re Lyon Nord | LM Espace Vert",
  description: "Terrasses, allÃ©es et murets en pierre naturelle Ã  Lyon nord par LM Espace Vert. MaÃ§onnerie paysagÃ¨re haut de gamme avec garantie dÃ©cennale. Devis gratuit sous 24h, intervention sur 20 km.",
  alternates: { canonical: 'https://www.lmespacevert.fr/services/maconnerie-paysagere' },
  openGraph: {
    title: "MaÃ§onnerie PaysagÃ¨re Lyon Nord â€” LM Espace Vert, paysagiste",
    description: "Terrasses, allÃ©es et murets en pierre naturelle Ã  Lyon nord par LM Espace Vert. MaÃ§onnerie paysagÃ¨re haut de gamme avec garantie dÃ©cennale. Devis gratuit sous 24h.",
    url: 'https://www.lmespacevert.fr/services/maconnerie-paysagere',
    type: 'website',
    images: [{ url: 'https://www.lmespacevert.fr/images/service-terrasse.jpg', width: 1200, height: 630, alt: 'MaÃ§onnerie paysagÃ¨re â€” terrasse en pierre Ã  Lyon nord' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "MaÃ§onnerie PaysagÃ¨re Lyon Nord â€” LM Espace Vert, paysagiste",
    description: "Terrasses, allÃ©es et murets en pierre naturelle Ã  Lyon nord. Garantie dÃ©cennale. Devis gratuit sous 24h.",
    images: ['https://www.lmespacevert.fr/images/service-terrasse.jpg'],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'MaÃ§onnerie paysagÃ¨re',
  serviceType: 'MaÃ§onnerie paysagÃ¨re',
  url: 'https://www.lmespacevert.fr/services/maconnerie-paysagere',
  description: "CrÃ©ation de terrasses, allÃ©es, murets et escaliers en pierre naturelle Ã  Lyon nord. MaÃ§onnerie paysagÃ¨re haut de gamme pour valoriser durablement votre extÃ©rieur.",
  provider: {
    '@type': 'LocalBusiness',
    name: 'LM Espace Vert',
    telephone: '+33672587353',
    address: {
      '@type': 'PostalAddress',
      addressLocality: "Saint-Didier-au-Mont-d'Or",
      postalCode: '69370',
      addressCountry: 'FR',
    },
  },
  areaServed: {
    '@type': 'GeoCircle',
    geoMidpoint: { '@type': 'GeoCoordinates', latitude: 45.833, longitude: 4.800 },
    geoRadius: '20000',
  },
  offers: {
    '@type': 'Offer',
    description: 'Devis gratuit',
    price: '0',
    priceCurrency: 'EUR',
    eligibleRegion: 'FR',
  },
  termsOfService: 'Devis gratuit, sans engagement',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.lmespacevert.fr' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.lmespacevert.fr/services' },
    { '@type': 'ListItem', position: 3, name: 'MaÃ§onnerie paysagÃ¨re', item: 'https://www.lmespacevert.fr/services/maconnerie-paysagere' },
  ],
}

const features = [
  'Terrasses en pierre naturelle, ardoise ou granit',
  'AllÃ©es et chemins en gravier stabilisÃ© ou pavÃ©s',
  'Murets de soutÃ¨nement en pierre sÃ¨che ou maÃ§onnÃ©s',
  'Escaliers extÃ©rieurs de jardin',
  'Dallage et pavage sur mesure',
  'ClÃ´tures, pergolas et structures bois-pierre',
]

const advantages = [
  { icon: Gem, title: 'MatÃ©riaux nobles sÃ©lectionnÃ©s', desc: 'Pierre de Bourgogne, granit gris, calcaire dorÃ© â€” des matÃ©riaux durables et Ã©lÃ©gants.' },
  { icon: ShieldCheck, title: 'Garantie dÃ©cennale', desc: 'Tous nos ouvrages maÃ§onnÃ©s sont couverts par la garantie dÃ©cennale obligatoire.' },
  { icon: Clock, title: 'DÃ©lais tenus', desc: 'Planning de chantier dÃ©taillÃ©, dÃ©but et fin de travaux garantis par contrat.' },
]

const faqs = [
  {
    q: "Quels matÃ©riaux utilisez-vous pour les terrasses paysagÃ¨res Ã  Lyon ?",
    a: "Nous travaillons principalement avec des pierres naturelles de qualitÃ© : calcaire du Beaujolais, granit, ardoise, travertin, ainsi que des pavÃ©s en porphyre pour les allÃ©es. Nous pouvons Ã©galement rÃ©aliser des terrasses en bÃ©ton dÃ©sactivÃ©, en bois composite ou en carrelage extÃ©rieur grand format. Le choix du matÃ©riau dÃ©pend de votre budget, du style de votre maison et des contraintes de votre terrain.",
  },
  {
    q: "Combien coÃ»te la crÃ©ation d'une terrasse paysagÃ¨re Ã  Ã‰cully ou Limonest ?",
    a: "Le coÃ»t d'une terrasse en maÃ§onnerie paysagÃ¨re varie selon la superficie, les matÃ©riaux et la complexitÃ© du chantier. En pierre naturelle, comptez gÃ©nÃ©ralement entre 150 et 350 â‚¬/mÂ² pose comprise. Pour un projet complet incluant terrassement, fondations et finitions, nous Ã©tablissons un devis dÃ©taillÃ© aprÃ¨s visite gratuite de votre propriÃ©tÃ©.",
  },
  {
    q: "Est-il nÃ©cessaire d'obtenir un permis de construire pour une terrasse ?",
    a: "Pour une terrasse de plain-pied sans fondation ni toiture, aucune autorisation n'est gÃ©nÃ©ralement requise. Si la terrasse est surÃ©levÃ©e (plus de 60 cm) ou couverte, une dÃ©claration prÃ©alable de travaux est nÃ©cessaire. En secteur protÃ©gÃ© (ZPPAUP, ABF), des rÃ¨gles spÃ©cifiques s'appliquent. Nous vous accompagnons dans les dÃ©marches administratives si nÃ©cessaire.",
  },
  {
    q: "RÃ©alisez-vous des murets de soutÃ¨nement Ã  Lyon nord ?",
    a: "Oui, la construction de murets de soutÃ¨nement en pierre sÃ¨che ou maÃ§onnÃ©s est l'une de nos spÃ©cialitÃ©s. Ils sont indispensables pour gÃ©rer les dÃ©nivelÃ©s frÃ©quents dans les propriÃ©tÃ©s du nord-ouest lyonnais (Caluire, Saint-Didier, Limonest). Nous Ã©tudions le drainage et les charges Ã  retenir pour dimensionner correctement chaque ouvrage.",
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: { '@type': 'Answer', text: faq.a },
  })),
}

export default function MaconneriePaysagerePage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      {/* Breadcrumb */}
      <nav aria-label="Fil d'Ariane" className="border-b border-[#EDEDED] bg-white">
        <div className="container mx-auto max-w-7xl px-4 py-3 sm:px-6">
          <ol role="list" className="flex items-center gap-2 text-sm text-[#8C8F94]">
            <li><Link href="/" className="hover:text-[#2F2F2F] transition-colors">Accueil</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href="/services" className="hover:text-[#2F2F2F] transition-colors">Services</Link></li>
            <li aria-hidden="true">/</li>
            <li><span aria-current="page" className="text-[#2F2F2F]">MaÃ§onnerie paysagÃ¨re</span></li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-[50vh] min-h-[380px] flex items-end" aria-labelledby="service-heading">
        <Image
          src="/images/service-terrasse.jpg"
          alt="MaÃ§onnerie paysagÃ¨re â€” terrasse et murets en pierre naturelle Ã  Lyon nord"
          fill
          className="object-cover"
          priority
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(11,61,44,0.90) 0%, rgba(11,61,44,0.40) 60%, transparent 100%)' }}
        />
        <div className="relative container mx-auto max-w-7xl px-4 sm:px-6 pb-12">
          <h1 id="service-heading" className="font-display text-4xl sm:text-5xl font-bold text-white mb-3">
            MaÃ§onnerie PaysagÃ¨re
          </h1>
          <p className="text-white/80 text-lg max-w-xl mb-6">
            Terrasses, allÃ©es et murets en pierre naturelle pour structurer et valoriser votre jardin.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/devis"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold hover:opacity-90 transition-opacity"
              style={{ backgroundColor: '#80BC00', color: '#ffffff' }}
            >
              Devis gratuit <ArrowRight size={14} />
            </Link>
            {/* AmÃ©lioration 1 â€” Badge prix indicatif */}
            <span
              className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold"
              style={{ backgroundColor: 'rgba(128,188,0,0.18)', color: '#425D07' }}
            >
              Ã€ partir de 1 200 â‚¬
            </span>
          </div>
        </div>
      </section>

      {/* Description + features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#80BC00' }}>Notre expertise</p>
              <h2 className="font-display text-3xl font-bold mb-5" style={{ color: '#425D07' }}>
                Des ouvrages minÃ©raux qui durent et embellissent
              </h2>
              <div className="text-[#8C8F94] leading-relaxed space-y-4">
                <p>
                  La maÃ§onnerie paysagÃ¨re est l&apos;art de combiner la pierre, le bÃ©ton et les matÃ©riaux minÃ©raux avec la vÃ©gÃ©tation pour crÃ©er des espaces extÃ©rieurs harmonieux et durables. Chez LM Espace Vert, nous maÃ®trisons l&apos;ensemble des techniques â€” du pavage traditionnel aux murets en pierre sÃ¨che â€” pour structurer les jardins de Lyon nord avec Ã©lÃ©gance.
                </p>
                <p>
                  Chaque rÃ©alisation commence par une Ã©tude du terrain : pentes, drainage, nature du sol, accÃ¨s. Nous concevons ensuite les ouvrages en cohÃ©rence avec l&apos;architecture de votre maison et le style de votre jardin. Nous sÃ©lectionnons des matÃ©riaux nobles et durables â€” pierre de Bourgogne, granit gris, calcaire dorÃ© â€” qui s&apos;inscrivent dans la tradition paysagÃ¨re du Beaujolais et du RhÃ´ne.
                </p>
                <p>
                  Que vous souhaitiez une terrasse panoramique Ã  Limonest, une allÃ©e en pavÃ©s Ã  Caluire ou un muret de soutÃ¨nement Ã  Saint-Didier-au-Mont-d&apos;Or, nos artisans rÃ©alisent votre projet avec soin, dans le respect des dÃ©lais et des budgets dÃ©finis. La garantie dÃ©cennale couvre l&apos;ensemble de nos ouvrages maÃ§onnÃ©s.
                </p>
              </div>
              <Link
                href="/realisations"
                className="inline-flex items-center gap-2 text-sm font-semibold mt-6 hover:gap-3 transition-all"
                style={{ color: '#425D07' }}
              >
                Voir nos rÃ©alisations <ArrowRight size={14} />
              </Link>
            </div>
            <ul className="space-y-3">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-3 bg-[#F7F5F0] rounded-xl p-4 border border-[#EDEDED]">
                  <CheckCircle size={18} style={{ color: '#80BC00' }} aria-hidden="true" />
                  <span className="text-sm font-medium text-[#2F2F2F]">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* AmÃ©lioration 2 â€” Section Avantages */}
      <section className="py-14" style={{ backgroundColor: '#F7F5F0' }}>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-widest mb-2 text-center" style={{ color: '#80BC00' }}>Pourquoi nous choisir</p>
          <h2 className="font-display text-2xl font-bold mb-10 text-center" style={{ color: '#425D07' }}>
            Les avantages de notre maÃ§onnerie paysagÃ¨re
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {advantages.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-6 border border-[#EDEDED] flex flex-col items-center text-center gap-3">
                <span className="inline-flex items-center justify-center w-11 h-11 rounded-full" style={{ backgroundColor: 'rgba(128,188,0,0.12)' }}>
                  <Icon size={20} style={{ color: '#425D07' }} aria-hidden="true" />
                </span>
                <h3 className="font-semibold text-sm" style={{ color: '#2F2F2F' }}>{title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: '#8C8F94' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AmÃ©lioration 4 â€” TÃ©moignage client */}
      <section className="py-14 bg-white">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <blockquote className="rounded-2xl border border-[#EDEDED] p-8 text-center" style={{ backgroundColor: '#F7F5F0' }}>
            <div className="flex justify-center gap-0.5 mb-4" aria-label="5 Ã©toiles">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="#80BC00" style={{ color: '#80BC00' }} aria-hidden="true" />
              ))}
            </div>
            <p className="text-base italic leading-relaxed mb-4" style={{ color: '#2F2F2F' }}>
              &ldquo;Notre terrasse en calcaire est tout simplement magnifique. LM Espace Vert a su respecter nos envies tout en apportant de vrais conseils techniques. Un chantier propre, des artisans sÃ©rieux, et un rÃ©sultat qui valorise vraiment notre bien.&rdquo;
            </p>
            <footer className="text-sm font-semibold" style={{ color: '#425D07' }}>
              Sophie R. â€” Dardilly
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Zone gÃ©ographique */}
      <section style={{ backgroundColor: '#F7F5F0' }} className="py-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 text-center">
          <MapPin size={24} style={{ color: '#80BC00' }} className="mx-auto mb-3" aria-hidden="true" />
          <h2 className="font-display text-2xl font-bold mb-3" style={{ color: '#425D07' }}>Zone d&apos;intervention</h2>
          <p className="text-[#8C8F94] max-w-xl mx-auto">
            LM Espace Vert rÃ©alise ce service dans un rayon de 20 km autour de Saint-Didier-au-Mont-d&apos;Or&nbsp;: Caluire, Ã‰cully, Tassin, Limonest, Dardilly, Champagne, Neuville-sur-SaÃ´ne et tout le nord-ouest lyonnais.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="font-display text-2xl font-bold mb-8 text-center" style={{ color: '#425D07' }}>Questions frÃ©quentes</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.q} className="border border-[#EDEDED] rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between px-5 py-4 cursor-pointer font-semibold text-sm text-[#2F2F2F] bg-white">
                  {faq.q}
                </summary>
                <div className="px-5 py-4 text-sm text-[#8C8F94] leading-relaxed" style={{ backgroundColor: '#F7F5F0' }}>
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Zones d'intervention â€” chips */}
      <section className="py-14 bg-white">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#80BC00' }}>Nos secteurs</p>
          <h2 className="font-display text-xl font-bold mb-5" style={{ color: '#425D07' }}>
            Nous intervenons dans toutes les communes du nord-ouest lyonnais
          </h2>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { slug: 'champagne', nom: "Champagne-au-Mont-d'Or" },
              { slug: 'limonest', nom: 'Limonest' },
              { slug: 'dardilly', nom: 'Dardilly' },
              { slug: 'caluire', nom: 'Caluire-et-Cuire' },
              { slug: 'ecuelly', nom: 'Ã‰cully' },
              { slug: 'saint-cyr', nom: "Saint-Cyr-au-Mont-d'Or" },
              { slug: 'curis', nom: "Curis-au-Mont-d'Or" },
              { slug: 'tassin', nom: 'Tassin-la-Demi-Lune' },
              { slug: 'collonges', nom: "Collonges-au-Mont-d'Or" },
              { slug: 'francheville', nom: 'Francheville' },
              { slug: 'neuville', nom: 'Neuville-sur-SaÃ´ne' },
              { slug: 'craponne', nom: 'Craponne' },
            ].map((v) => (
              <Link
                key={v.slug}
                href={`/secteur/${v.slug}`}
                className="inline-flex items-center gap-1.5 rounded-full border border-[#EDEDED] px-4 py-1.5 text-xs font-medium hover:border-[#80BC00] hover:text-[#425D07] transition-colors"
                style={{ color: '#2F2F2F', backgroundColor: '#F7F5F0' }}
              >
                <MapPin size={10} style={{ color: '#80BC00' }} aria-hidden="true" />
                {v.nom}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: '#0B3D2C' }} className="py-16 text-center">
        <div className="container mx-auto max-w-xl px-4 sm:px-6">
          <h2 className="font-display text-2xl font-bold text-white mb-3">Votre projet maÃ§onnerie, on en parle ?</h2>
          <p className="text-white/70 mb-6">Devis gratuit Â· RÃ©ponse sous 24h Â· Rayon 20 km</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/devis"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold hover:opacity-90 transition-opacity"
              style={{ backgroundColor: '#80BC00', color: '#ffffff' }}
            >
              Demander un devis
            </Link>
            <a
              href="tel:+33672587353"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
            >
              <Phone size={14} aria-hidden="true" /> 06 72 58 73 53
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

