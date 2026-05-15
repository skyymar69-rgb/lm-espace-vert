import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Phone, MapPin } from 'lucide-react'
import { JsonLd } from '@/components/seo/json-ld'

export const metadata: Metadata = {
  title: "Installation Arrosage Automatique Lyon | LM Espace Vert",
  description: "Installation et programmation de systèmes d'arrosage automatique à Lyon nord. Économies d'eau garanties. Devis gratuit.",
  alternates: { canonical: 'https://www.lmespacevert.fr/services/arrosage-automatique' },
  openGraph: {
    title: "Installation Arrosage Automatique Lyon | LM Espace Vert",
    description: "Installation et programmation de systèmes d'arrosage automatique à Lyon nord. Économies d'eau garanties. Devis gratuit.",
    url: 'https://www.lmespacevert.fr/services/arrosage-automatique',
    images: [{ url: 'https://www.lmespacevert.fr/images/arrosage-automatique.webp', width: 1200, height: 630, alt: "Arrosage automatique — LM Espace Vert" }],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: "Installation d'arrosage automatique",
  serviceType: "Installation d'arrosage automatique",
  description: "Installation, programmation et maintenance de systèmes d'arrosage automatique à Lyon nord. Arroseurs escamotables, goutte-à-goutte, programmateurs connectés. Économies d'eau garanties.",
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
  termsOfService: 'Devis gratuit, sans engagement',
}

// #6 — BreadcrumbList
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.lmespacevert.fr' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.lmespacevert.fr/services' },
    { '@type': 'ListItem', position: 3, name: 'Arrosage automatique', item: 'https://www.lmespacevert.fr/services/arrosage-automatique' },
  ],
}

const features = [
  "Étude hydraulique et plan d'arrosage sur mesure",
  'Arroseurs escamotables pour pelouses',
  'Système goutte-à-goutte pour massifs et potager',
  'Programmateur connecté (contrôle depuis smartphone)',
  "Capteurs de pluie et d'humidité du sol",
  'Maintenance et hivernage annuels',
]

const faqs = [
  {
    q: "Combien coûte l'installation d'un arrosage automatique à Lyon nord ?",
    a: "Le coût dépend de la superficie à arroser, du nombre de zones et du niveau d'équipement choisi. Pour une pelouse de 100 à 300 m² avec massifs, comptez entre 1 500 et 4 000 € installation comprise. Un système connecté avec capteurs météo sera légèrement plus onéreux mais s'amortit rapidement grâce aux économies d'eau réalisées (jusqu'à 40 % par rapport à un arrosage manuel).",
  },
  {
    q: "Un arrosage automatique consomme-t-il plus d'eau qu'un arrosage manuel ?",
    a: "Non, c'est l'inverse. Un système bien dimensionné et programmé consomme jusqu'à 40 % moins d'eau qu'un arrosage au tuyau. Les capteurs de pluie coupent automatiquement l'arrosage si la pluviométrie suffit. Le goutte-à-goutte apporte l'eau directement aux racines, sans perte par évaporation. À Lyon, où les étés peuvent être chauds et secs, c'est un investissement qui se rentabilise en 2 à 3 saisons.",
  },
  {
    q: "Quelle marque de matériel d'arrosage utilisez-vous ?",
    a: "Nous travaillons avec les marques professionnelles Hunter, Rain Bird et Rainbird, reconnues pour leur fiabilité et la disponibilité de leurs pièces détachées. Ces équipements sont garantis 2 à 5 ans selon les composants et peuvent être entretenus facilement lors de nos visites annuelles de maintenance et d'hivernage.",
  },
  {
    q: "Pouvez-vous installer un arrosage automatique sur un jardin existant ?",
    a: "Absolument. Nous intervenons aussi bien sur des jardins neufs que sur des jardins existants. Dans ce cas, nous planifions les tranchées pour minimiser les dégâts sur les pelouses et massifs en place. Après l'installation, nous remettons le jardin en état. Le tracé des réseaux est documenté dans un plan que nous vous remettons.",
  },
]

export default function ArrosageAutomatiquePage() {
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
            <li><span aria-current="page" className="text-[#2F2F2F]">Arrosage automatique</span></li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-[50vh] min-h-[380px] flex items-end" aria-labelledby="service-heading">
        <Image
          src="/images/arrosage-automatique.webp"
          alt="Installation d'arrosage automatique à Lyon nord par LM Espace Vert"
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
            Arrosage Automatique
          </h1>
          <p className="text-white/80 text-lg max-w-xl mb-6">
            Un jardin toujours bien hydraté, même en vacances. Installation sur mesure à Lyon nord.
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
                Un arrosage intelligent pour économiser l&apos;eau et du temps
              </h2>
              <div className="text-[#8C8F94] leading-relaxed space-y-4">
                <p>
                  Face aux étés de plus en plus chauds dans la région lyonnaise, l&apos;arrosage automatique est devenu un équipement indispensable pour maintenir un jardin en bonne santé sans gaspiller l&apos;eau. LM Espace Vert conçoit et installe des systèmes d&apos;arrosage sur mesure à Saint-Didier-au-Mont-d&apos;Or, Limonest, Dardilly, Écully et dans tout le nord-ouest lyonnais.
                </p>
                <p>
                  Notre approche commence par une étude hydraulique complète de votre propriété : pression d&apos;eau disponible, superficie des zones, nature des végétaux (pelouse, massifs, potager, haies). Nous découpons ensuite le jardin en zones d&apos;arrosage indépendantes, chacune équipée d&apos;arroseurs ou de goutteurs adaptés. Le tout est piloté par un programmateur intelligent avec capteur de pluie.
                </p>
                <p>
                  À l&apos;issue de l&apos;installation, nous vous formons à l&apos;utilisation du programmateur et réglons les débits et horaires optimaux pour chaque saison. Nous proposons également un contrat de maintenance annuelle incluant l&apos;hivernage du réseau en automne et la remise en route au printemps, pour prolonger la durée de vie de votre installation.
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
          <h2 className="font-display text-2xl font-bold text-white mb-3">Votre arrosage automatique, on en parle ?</h2>
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
