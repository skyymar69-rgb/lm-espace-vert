import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Phone, MapPin } from 'lucide-react'
import { JsonLd } from '@/components/seo/json-ld'

export const metadata: Metadata = {
  title: "Création de Jardins Paysagers Lyon Nord | LM Espace Vert",
  description: "Conception et création de jardins sur mesure à Saint-Didier-au-Mont-d'Or et Lyon nord. Étude paysagère, choix végétaux, massifs. Devis gratuit.",
  alternates: { canonical: 'https://www.lmespacevert.fr/services/creation-jardins' },
  openGraph: {
    title: "Création de Jardins Paysagers Lyon Nord | LM Espace Vert",
    description: "Conception et création de jardins sur mesure à Saint-Didier-au-Mont-d'Or et Lyon nord. Étude paysagère, choix végétaux, massifs. Devis gratuit.",
    url: 'https://www.lmespacevert.fr/services/creation-jardins',
    images: [{ url: 'https://www.lmespacevert.fr/images/realisation-1.webp', width: 1200, height: 630, alt: 'Création de jardins paysagers — LM Espace Vert' }],
  },
}

const features = [
  'Visite et étude paysagère gratuite',
  'Plan 2D/3D de votre futur jardin',
  'Sélection végétale adaptée au sol et au climat',
  'Création de massifs floraux quatre saisons',
  "Plantation d'arbres, arbustes et vivaces",
  'Aménagement de rocailles et jardins japonisants',
]

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Création de jardins paysagers',
  serviceType: 'Création de jardins paysagers',
  description: "Conception et création de jardins paysagers sur mesure à Saint-Didier-au-Mont-d'Or et dans tout le nord-ouest lyonnais. Étude paysagère, plans, choix végétaux, massifs floraux, plantation.",
  provider: {
    '@type': 'LocalBusiness',
    name: 'LM Espace Vert',
    telephone: '+33674734698',
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
  // #20 — hasOfferCatalog + termsOfService
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Prestations de création de jardins',
    itemListElement: features.map((f) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: f },
    })),
  },
  termsOfService: 'Devis gratuit, sans engagement',
}

// #6 — BreadcrumbList
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.lmespacevert.fr' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.lmespacevert.fr/services' },
    { '@type': 'ListItem', position: 3, name: 'Création de jardins', item: 'https://www.lmespacevert.fr/services/creation-jardins' },
  ],
}

const faqs = [
  {
    q: "Combien coûte la création d'un jardin paysager à Lyon nord ?",
    a: "Le coût varie selon la superficie, les végétaux choisis et les aménagements souhaités. Nous réalisons une visite gratuite et remettons un devis détaillé sous 48h. En moyenne, la création d'un jardin résidentiel à Saint-Didier-au-Mont-d'Or ou Limonest est comprise entre 3 000 € et 15 000 € selon le projet.",
  },
  {
    q: 'Quelle est la meilleure saison pour créer un jardin ?',
    a: "L'automne et le printemps sont les périodes idéales pour la plantation. L'automne permet aux racines de s'installer avant l'hiver, tandis que le printemps profite de la chaleur montante. Cela dit, nous intervenons toute l'année grâce à nos techniques d'arrosage et de paillage adaptées.",
  },
  {
    q: 'Proposez-vous un plan paysager avant le chantier ?',
    a: "Oui, chaque projet de création de jardin débute par une étude paysagère. Nous vous soumettons un plan avec les essences végétales, les couleurs et la disposition des massifs. Ce plan vous permet de visualiser le résultat final avant même le début des travaux.",
  },
  {
    q: 'Intervenez-vous à Caluire, Écully et Dardilly pour la création de jardins ?',
    a: "Absolument. LM Espace Vert intervient dans tout le nord-ouest lyonnais dans un rayon de 20 km autour de Saint-Didier-au-Mont-d'Or : Caluire-et-Cuire, Écully, Dardilly, Limonest, Tassin-la-Demi-Lune, Neuville-sur-Saône, Charbonnières et bien d'autres communes.",
  },
]

export default function CreationJardinsPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* Breadcrumb */}
      <nav aria-label="Fil d'Ariane" className="border-b border-[#EDEDED] bg-white">
        <div className="container mx-auto max-w-7xl px-4 py-3 sm:px-6">
          <ol role="list" className="flex items-center gap-2 text-sm text-[#8C8F94]">
            <li><Link href="/" className="hover:text-[#2F2F2F] transition-colors">Accueil</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href="/services" className="hover:text-[#2F2F2F] transition-colors">Services</Link></li>
            <li aria-hidden="true">/</li>
            <li><span aria-current="page" className="text-[#2F2F2F]">Création de jardins</span></li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-[50vh] min-h-[380px] flex items-end" aria-labelledby="service-heading">
        <Image
          src="/images/realisation-1.webp"
          alt="Création de jardin paysager à Saint-Didier-au-Mont-d'Or par LM Espace Vert"
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
            Création de Jardins Paysagers
          </h1>
          <p className="text-white/80 text-lg max-w-xl mb-6">
            Un jardin unique, conçu sur mesure selon vos goûts et votre terrain, à Lyon nord.
          </p>
          <Link
            href="/devis"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold hover:opacity-90 transition-opacity"
            style={{ backgroundColor: '#80BC00', color: '#ffffff' }}
          >
            Devis gratuit <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* Description + features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#80BC00' }}>Notre expertise</p>
              <h2 className="font-display text-3xl font-bold mb-5" style={{ color: '#425D07' }}>
                Un jardin paysager pensé pour vous
              </h2>
              <div className="text-[#8C8F94] leading-relaxed space-y-4">
                <p>
                  Chez LM Espace Vert, chaque création de jardin commence par une écoute attentive de vos envies, de vos habitudes de vie et des contraintes de votre terrain. Basés à Saint-Didier-au-Mont-d&apos;Or, nous intervenons sur l&apos;ensemble du nord-ouest lyonnais pour concevoir des jardins paysagers qui reflètent votre personnalité tout en s&apos;intégrant harmonieusement dans leur environnement.
                </p>
                <p>
                  Notre approche est complète : diagnostic du sol, exposition, drainage, puis proposition d&apos;un plan paysager détaillé avec sélection végétale adaptée au micro-climat lyonnais. Nous privilégions les espèces robustes, peu gourmandes en eau et favorables à la biodiversité locale — hêtres pourpres, charmes, pivoines arbustives, lavandes et graminées ornementales.
                </p>
                <p>
                  Du petit jardin de ville de 50 m² à la propriété de plusieurs milliers de mètres carrés à Limonest ou Dardilly, nous prenons en charge l&apos;intégralité du chantier : terrassement, amendement des terres, plantation, paillage et mise en place de l&apos;arrosage si nécessaire. Résultat garanti, délais respectés.
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

      {/* Zone géographique */}
      <section style={{ backgroundColor: '#F7F5F0' }} className="py-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 text-center">
          <MapPin size={24} style={{ color: '#80BC00' }} className="mx-auto mb-3" aria-hidden="true" />
          <h2 className="font-display text-2xl font-bold mb-3" style={{ color: '#425D07' }}>Zone d&apos;intervention</h2>
          <p className="text-[#8C8F94] max-w-xl mx-auto">
            LM Espace Vert réalise la création de jardins paysagers dans un rayon de 20 km autour de Saint-Didier-au-Mont-d&apos;Or&nbsp;: Caluire, Écully, Tassin, Limonest, Dardilly, Champagne, Neuville-sur-Saône et tout le nord-ouest lyonnais.
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
          <h2 className="font-display text-2xl font-bold text-white mb-3">Votre projet jardin, on en parle ?</h2>
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
              href="tel:+33674734698"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
            >
              <Phone size={14} aria-hidden="true" /> 06 74 73 46 98
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
