import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Phone, MapPin, Star, Gem, ShieldCheck, Clock } from 'lucide-react'
import { JsonLd } from '@/components/seo/json-ld'

export const metadata: Metadata = {
  title: "Maçonnerie Paysagère Lyon Nord | LM Espace Vert",
  description: "Terrasses, allées et murets en pierre naturelle à Lyon nord par LM Espace Vert. Maçonnerie paysagère haut de gamme avec garantie décennale. Devis gratuit sous 24h, intervention sur 20 km.",
  alternates: { canonical: 'https://www.lmespacevert.fr/services/maconnerie-paysagere' },
  openGraph: {
    title: "Maçonnerie Paysagère Lyon Nord — LM Espace Vert, paysagiste",
    description: "Terrasses, allées et murets en pierre naturelle à Lyon nord par LM Espace Vert. Maçonnerie paysagère haut de gamme avec garantie décennale. Devis gratuit sous 24h.",
    url: 'https://www.lmespacevert.fr/services/maconnerie-paysagere',
    type: 'website',
    images: [{ url: 'https://www.lmespacevert.fr/images/realisation-1.webp', width: 1200, height: 630, alt: 'Maçonnerie paysagère — terrasse en pierre à Lyon nord' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Maçonnerie Paysagère Lyon Nord — LM Espace Vert, paysagiste",
    description: "Terrasses, allées et murets en pierre naturelle à Lyon nord. Garantie décennale. Devis gratuit sous 24h.",
    images: ['https://www.lmespacevert.fr/images/realisation-1.webp'],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Maçonnerie paysagère',
  serviceType: 'Maçonnerie paysagère',
  url: 'https://www.lmespacevert.fr/services/maconnerie-paysagere',
  description: "Création de terrasses, allées, murets et escaliers en pierre naturelle à Lyon nord. Maçonnerie paysagère haut de gamme pour valoriser durablement votre extérieur.",
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
    { '@type': 'ListItem', position: 3, name: 'Maçonnerie paysagère', item: 'https://www.lmespacevert.fr/services/maconnerie-paysagere' },
  ],
}

const features = [
  'Terrasses en pierre naturelle, ardoise ou granit',
  'Allées et chemins en gravier stabilisé ou pavés',
  'Murets de soutènement en pierre sèche ou maçonnés',
  'Escaliers extérieurs de jardin',
  'Dallage et pavage sur mesure',
  'Clôtures, pergolas et structures bois-pierre',
]

const advantages = [
  { icon: Gem, title: 'Matériaux nobles sélectionnés', desc: 'Pierre de Bourgogne, granit gris, calcaire doré — des matériaux durables et élégants.' },
  { icon: ShieldCheck, title: 'Garantie décennale', desc: 'Tous nos ouvrages maçonnés sont couverts par la garantie décennale obligatoire.' },
  { icon: Clock, title: 'Délais tenus', desc: 'Planning de chantier détaillé, début et fin de travaux garantis par contrat.' },
]

const faqs = [
  {
    q: "Quels matériaux utilisez-vous pour les terrasses paysagères à Lyon ?",
    a: "Nous travaillons principalement avec des pierres naturelles de qualité : calcaire du Beaujolais, granit, ardoise, travertin, ainsi que des pavés en porphyre pour les allées. Nous pouvons également réaliser des terrasses en béton désactivé, en bois composite ou en carrelage extérieur grand format. Le choix du matériau dépend de votre budget, du style de votre maison et des contraintes de votre terrain.",
  },
  {
    q: "Combien coûte la création d'une terrasse paysagère à Écully ou Limonest ?",
    a: "Le coût d'une terrasse en maçonnerie paysagère varie selon la superficie, les matériaux et la complexité du chantier. En pierre naturelle, comptez généralement entre 150 et 350 €/m² pose comprise. Pour un projet complet incluant terrassement, fondations et finitions, nous établissons un devis détaillé après visite gratuite de votre propriété.",
  },
  {
    q: "Est-il nécessaire d'obtenir un permis de construire pour une terrasse ?",
    a: "Pour une terrasse de plain-pied sans fondation ni toiture, aucune autorisation n'est généralement requise. Si la terrasse est surélevée (plus de 60 cm) ou couverte, une déclaration préalable de travaux est nécessaire. En secteur protégé (ZPPAUP, ABF), des règles spécifiques s'appliquent. Nous vous accompagnons dans les démarches administratives si nécessaire.",
  },
  {
    q: "Réalisez-vous des murets de soutènement à Lyon nord ?",
    a: "Oui, la construction de murets de soutènement en pierre sèche ou maçonnés est l'une de nos spécialités. Ils sont indispensables pour gérer les dénivelés fréquents dans les propriétés du nord-ouest lyonnais (Caluire, Saint-Didier, Limonest). Nous étudions le drainage et les charges à retenir pour dimensionner correctement chaque ouvrage.",
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
            <li><span aria-current="page" className="text-[#2F2F2F]">Maçonnerie paysagère</span></li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-[50vh] min-h-[380px] flex items-end" aria-labelledby="service-heading">
        <Image
          src="/images/realisation-10.webp"
          alt="Maçonnerie paysagère — terrasse et murets en pierre naturelle à Lyon nord"
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
            Maçonnerie Paysagère
          </h1>
          <p className="text-white/80 text-lg max-w-xl mb-6">
            Terrasses, allées et murets en pierre naturelle pour structurer et valoriser votre jardin.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/devis"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold hover:opacity-90 transition-opacity"
              style={{ backgroundColor: '#80BC00', color: '#ffffff' }}
            >
              Devis gratuit <ArrowRight size={14} />
            </Link>
            {/* Amélioration 1 — Badge prix indicatif */}
            <span
              className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold"
              style={{ backgroundColor: 'rgba(128,188,0,0.18)', color: '#425D07' }}
            >
              À partir de 1 200 €
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
                Des ouvrages minéraux qui durent et embellissent
              </h2>
              <div className="text-[#8C8F94] leading-relaxed space-y-4">
                <p>
                  La maçonnerie paysagère est l&apos;art de combiner la pierre, le béton et les matériaux minéraux avec la végétation pour créer des espaces extérieurs harmonieux et durables. Chez LM Espace Vert, nous maîtrisons l&apos;ensemble des techniques — du pavage traditionnel aux murets en pierre sèche — pour structurer les jardins de Lyon nord avec élégance.
                </p>
                <p>
                  Chaque réalisation commence par une étude du terrain : pentes, drainage, nature du sol, accès. Nous concevons ensuite les ouvrages en cohérence avec l&apos;architecture de votre maison et le style de votre jardin. Nous sélectionnons des matériaux nobles et durables — pierre de Bourgogne, granit gris, calcaire doré — qui s&apos;inscrivent dans la tradition paysagère du Beaujolais et du Rhône.
                </p>
                <p>
                  Que vous souhaitiez une terrasse panoramique à Limonest, une allée en pavés à Caluire ou un muret de soutènement à Saint-Didier-au-Mont-d&apos;Or, nos artisans réalisent votre projet avec soin, dans le respect des délais et des budgets définis. La garantie décennale couvre l&apos;ensemble de nos ouvrages maçonnés.
                </p>
              </div>
              <Link
                href="/realisations"
                className="inline-flex items-center gap-2 text-sm font-semibold mt-6 hover:gap-3 transition-all"
                style={{ color: '#425D07' }}
              >
                Voir nos réalisations <ArrowRight size={14} />
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

      {/* Amélioration 2 — Section Avantages */}
      <section className="py-14" style={{ backgroundColor: '#F7F5F0' }}>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-widest mb-2 text-center" style={{ color: '#80BC00' }}>Pourquoi nous choisir</p>
          <h2 className="font-display text-2xl font-bold mb-10 text-center" style={{ color: '#425D07' }}>
            Les avantages de notre maçonnerie paysagère
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

      {/* Amélioration 4 — Témoignage client */}
      <section className="py-14 bg-white">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <blockquote className="rounded-2xl border border-[#EDEDED] p-8 text-center" style={{ backgroundColor: '#F7F5F0' }}>
            <div className="flex justify-center gap-0.5 mb-4" aria-label="5 étoiles">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="#80BC00" style={{ color: '#80BC00' }} aria-hidden="true" />
              ))}
            </div>
            <p className="text-base italic leading-relaxed mb-4" style={{ color: '#2F2F2F' }}>
              &ldquo;Notre terrasse en calcaire est tout simplement magnifique. LM Espace Vert a su respecter nos envies tout en apportant de vrais conseils techniques. Un chantier propre, des artisans sérieux, et un résultat qui valorise vraiment notre bien.&rdquo;
            </p>
            <footer className="text-sm font-semibold" style={{ color: '#425D07' }}>
              Sophie R. — Dardilly
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Zone géographique */}
      <section style={{ backgroundColor: '#F7F5F0' }} className="py-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 text-center">
          <MapPin size={24} style={{ color: '#80BC00' }} className="mx-auto mb-3" aria-hidden="true" />
          <h2 className="font-display text-2xl font-bold mb-3" style={{ color: '#425D07' }}>Zone d&apos;intervention</h2>
          <p className="text-[#8C8F94] max-w-xl mx-auto">
            LM Espace Vert réalise ce service dans un rayon de 20 km autour de Saint-Didier-au-Mont-d&apos;Or&nbsp;: Caluire, Écully, Tassin, Limonest, Dardilly, Champagne, Neuville-sur-Saône et tout le nord-ouest lyonnais.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="font-display text-2xl font-bold mb-8 text-center" style={{ color: '#425D07' }}>Questions fréquentes</h2>
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

      {/* Zones d'intervention — chips */}
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
              { slug: 'ecuelly', nom: 'Écully' },
              { slug: 'saint-cyr', nom: "Saint-Cyr-au-Mont-d'Or" },
              { slug: 'curis', nom: "Curis-au-Mont-d'Or" },
              { slug: 'tassin', nom: 'Tassin-la-Demi-Lune' },
              { slug: 'collonges', nom: "Collonges-au-Mont-d'Or" },
              { slug: 'francheville', nom: 'Francheville' },
              { slug: 'neuville', nom: 'Neuville-sur-Saône' },
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
          <h2 className="font-display text-2xl font-bold text-white mb-3">Votre projet maçonnerie, on en parle ?</h2>
          <p className="text-white/70 mb-6">Devis gratuit · Réponse sous 24h · Rayon 20 km</p>
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
