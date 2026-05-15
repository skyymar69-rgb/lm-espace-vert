import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, ArrowRight, Phone } from 'lucide-react'
import { JsonLd } from '@/components/seo/json-ld'

export const metadata: Metadata = {
  title: "Paysagiste Lyon Nord — Zones d'intervention | LM Espace Vert",
  description: "LM Espace Vert intervient dans un rayon de 20 km autour de Saint-Didier-au-Mont-d'Or : Caluire, Écully, Dardilly, Limonest, Tassin, Champagne, Neuville-sur-Saône et plus. Devis gratuit.",
  alternates: { canonical: 'https://www.lmespacevert.fr/secteurs' },
  openGraph: {
    title: "Paysagiste Lyon Nord — Zones d'intervention | LM Espace Vert",
    description: "Paysagiste couvrant 12 communes du nord-ouest lyonnais dans un rayon de 20 km. Devis gratuit sous 24h.",
    url: 'https://www.lmespacevert.fr/secteurs',
    images: [{ url: '/images/zone-intervention.webp', width: 1200, height: 630, alt: "Zones d'intervention LM Espace Vert — Lyon Nord" }],
  },
}

const villes = [
  { slug: 'champagne', nom: "Champagne-au-Mont-d'Or", codePostal: '69410', distance: '3 km', description: 'Commune voisine de prestige sur les coteaux' },
  { slug: 'limonest', nom: 'Limonest', codePostal: '69760', distance: '5 km', description: 'Zone principale, créations paysagères ambitieuses' },
  { slug: 'dardilly', nom: 'Dardilly', codePostal: '69570', distance: '7 km', description: 'Maisons individuelles et parcs résidentiels' },
  { slug: 'caluire', nom: 'Caluire-et-Cuire', codePostal: '69300', distance: '8 km', description: 'Villas et jardins bourgeois, confluent Rhône/Saône' },
  { slug: 'ecuelly', nom: 'Écully', codePostal: '69130', distance: '10 km', description: 'Propriétés de prestige, jardins haut de gamme' },
  { slug: 'saint-cyr', nom: "Saint-Cyr-au-Mont-d'Or", codePostal: '69450', distance: '10 km', description: 'Jardins panoramiques, coteaux du Mont d\'Or' },
  { slug: 'curis', nom: "Curis-au-Mont-d'Or", codePostal: '69250', distance: '12 km', description: 'Village authentique entre forêts et vignes' },
  { slug: 'tassin', nom: 'Tassin-la-Demi-Lune', codePostal: '69160', distance: '12 km', description: 'Pavillons modernes et jardins familiaux' },
  { slug: 'collonges', nom: "Collonges-au-Mont-d'Or", codePostal: '69660', distance: '11 km', description: 'Prestige en bord de Saône, topiaire et jardins d\'exception' },
  { slug: 'francheville', nom: 'Francheville', codePostal: '69340', distance: '14 km', description: 'Jardins naturels aux portes du Parc du Vallon' },
  { slug: 'neuville', nom: 'Neuville-sur-Saône', codePostal: '69250', distance: '15 km', description: 'Bord de Saône, maisons de caractère' },
  { slug: 'craponne', nom: 'Craponne', codePostal: '69290', distance: '16 km', description: 'Lotissements résidentiels, jardins de maisons neuves' },
]

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://www.lmespacevert.fr',
  name: 'LM Espace Vert',
  description: "Paysagiste professionnel basé à Saint-Didier-au-Mont-d'Or, intervenant dans un rayon de 20 km sur le nord-ouest lyonnais.",
  url: 'https://www.lmespacevert.fr',
  telephone: '+33674734698',
  email: 'contact@lmespacevert.fr',
  address: {
    '@type': 'PostalAddress',
    addressLocality: "Saint-Didier-au-Mont-d'Or",
    postalCode: '69370',
    addressCountry: 'FR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 45.833,
    longitude: 4.800,
  },
  areaServed: villes.map((v) => ({
    '@type': 'City',
    name: v.nom,
    postalCode: v.codePostal,
  })),
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:00', closes: '18:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday'], opens: '08:00', closes: '12:00' },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.lmespacevert.fr' },
    { '@type': 'ListItem', position: 2, name: "Zones d'intervention", item: 'https://www.lmespacevert.fr/secteurs' },
  ],
}

export default function SecteursPage() {
  return (
    <>
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* Breadcrumb */}
      <nav aria-label="Fil d'Ariane" className="border-b border-[#EDEDED] bg-white">
        <div className="container mx-auto max-w-7xl px-4 py-3 sm:px-6">
          <ol role="list" className="flex items-center gap-2 text-sm text-[#8C8F94]">
            <li><Link href="/" className="hover:text-[#2F2F2F] transition-colors">Accueil</Link></li>
            <li aria-hidden="true">/</li>
            <li><span aria-current="page" className="text-[#2F2F2F]">Zones d&apos;intervention</span></li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-20 lg:py-24" style={{ backgroundColor: '#0B3D2C' }}>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin size={18} style={{ color: '#80BC00' }} aria-hidden="true" />
            <span className="text-sm font-semibold" style={{ color: '#80BC00' }}>Nord-ouest lyonnais · Rayon 20 km</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-5">
            Zones d&apos;intervention
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
            LM Espace Vert réalise tous vos projets paysagers dans un rayon de 20 km autour de Saint-Didier-au-Mont-d&apos;Or. Découvrez nos 12 communes d&apos;intervention.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/devis"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold hover:opacity-90 transition-opacity"
              style={{ backgroundColor: '#80BC00', color: '#ffffff', boxShadow: 'rgb(128, 188, 0) 0px 0px 25px -14px' }}
            >
              Devis gratuit <ArrowRight size={14} />
            </Link>
            <a
              href="tel:+33674734698"
              className="inline-flex items-center gap-2 rounded-full border border-white/35 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
            >
              <Phone size={14} aria-hidden="true" /> 06 74 73 46 98
            </a>
          </div>
        </div>
      </section>

      {/* Carte conceptuelle rayon 20 km */}
      <section className="py-10 bg-white border-b border-[#EDEDED]">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <div className="rounded-2xl border border-[#EDEDED] p-6 text-center" style={{ backgroundColor: '#F7F5F0' }}>
            <div className="relative inline-flex items-center justify-center">
              {/* Cercles concentriques */}
              <div className="w-64 h-64 rounded-full border-2 border-dashed flex items-center justify-center" style={{ borderColor: '#EDEDED' }}>
                <div className="w-44 h-44 rounded-full border-2 border-dashed flex items-center justify-center" style={{ borderColor: 'rgba(128,188,0,0.4)' }}>
                  <div className="w-24 h-24 rounded-full flex flex-col items-center justify-center text-white text-center" style={{ backgroundColor: '#0B3D2C' }}>
                    <MapPin size={16} className="mb-1" aria-hidden="true" />
                    <span className="text-xs font-bold leading-tight">Saint-Didier<br />au-Mont-d&apos;Or</span>
                  </div>
                </div>
              </div>
              {/* Labels positionnés */}
              <span className="absolute top-2 left-1/2 -translate-x-1/2 text-xs font-medium px-2 py-0.5 rounded-full" style={{ backgroundColor: '#80BC00', color: '#ffffff' }}>Champagne 3 km</span>
              <span className="absolute bottom-2 left-4 text-xs font-medium px-2 py-0.5 rounded-full" style={{ backgroundColor: '#425D07', color: '#ffffff' }}>Dardilly 7 km</span>
              <span className="absolute top-12 right-0 text-xs font-medium px-2 py-0.5 rounded-full" style={{ backgroundColor: '#425D07', color: '#ffffff' }}>Caluire 8 km</span>
              <span className="absolute bottom-8 right-0 text-xs font-medium px-2 py-0.5 rounded-full" style={{ backgroundColor: '#8C8F94', color: '#ffffff' }}>Tassin 12 km</span>
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-xs font-medium px-2 py-0.5 rounded-full" style={{ backgroundColor: '#8C8F94', color: '#ffffff' }}>Craponne 16 km</span>
            </div>
            <p className="text-xs mt-4" style={{ color: '#8C8F94' }}>Rayon d&apos;intervention : 20 km autour de Saint-Didier-au-Mont-d&apos;Or (69370)</p>
          </div>
        </div>
      </section>

      {/* Grille des villes */}
      <section className="py-20" style={{ backgroundColor: '#F7F5F0' }}>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#80BC00' }}>12 communes</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold" style={{ color: '#425D07' }}>
              Toutes nos zones d&apos;intervention
            </h2>
            <p className="text-[#8C8F94] mt-3 max-w-xl mx-auto">
              Chaque commune dispose d&apos;une page dédiée avec nos services locaux, témoignages et informations pratiques.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {villes.map((ville) => (
              <Link
                key={ville.slug}
                href={`/secteur/${ville.slug}`}
                className="group block bg-white rounded-2xl border border-[#EDEDED] p-6 hover:border-[#80BC00] hover:shadow-md transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#F7F5F0' }}>
                      <MapPin size={16} style={{ color: '#80BC00' }} aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm leading-tight" style={{ color: '#2F2F2F' }}>{ville.nom}</h3>
                      <p className="text-xs" style={{ color: '#8C8F94' }}>{ville.codePostal}</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full" style={{ backgroundColor: '#F7F5F0', color: '#425D07' }}>
                    {ville.distance}
                  </span>
                </div>
                <p className="text-xs leading-relaxed mb-4" style={{ color: '#8C8F94' }}>{ville.description}</p>
                <span className="inline-flex items-center gap-1 text-xs font-semibold group-hover:gap-2 transition-all" style={{ color: '#425D07' }}>
                  Voir cette zone <ArrowRight size={12} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section texte SEO */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="font-display text-2xl font-bold mb-6 text-center" style={{ color: '#425D07' }}>
            Paysagiste de proximité dans le nord-ouest lyonnais
          </h2>
          <div className="space-y-4 text-sm leading-relaxed" style={{ color: '#8C8F94' }}>
            <p>
              Basé à <strong style={{ color: '#2F2F2F' }}>Saint-Didier-au-Mont-d&apos;Or (69370)</strong>, LM Espace Vert intervient dans toutes les communes situées dans un rayon de 20 km. Cette couverture géographique nous permet d&apos;être réactifs : déplacement rapide, devis gratuit sous 48h et interventions régulières sans surcoût de déplacement excessif.
            </p>
            <p>
              Que vous soyez propriétaire d&apos;une villa à <Link href="/secteur/ecuelly" style={{ color: '#425D07' }} className="font-medium hover:underline">Écully</Link>, d&apos;un pavillon à <Link href="/secteur/tassin" style={{ color: '#425D07' }} className="font-medium hover:underline">Tassin-la-Demi-Lune</Link>, d&apos;une propriété de prestige à <Link href="/secteur/champagne" style={{ color: '#425D07' }} className="font-medium hover:underline">Champagne-au-Mont-d&apos;Or</Link> ou d&apos;une maison de caractère à <Link href="/secteur/neuville" style={{ color: '#425D07' }} className="font-medium hover:underline">Neuville-sur-Saône</Link>, nous adaptons nos prestations à votre contexte local : type de sol, végétation régionale, contraintes réglementaires.
            </p>
            <p>
              Tous nos devis sont gratuits et sans engagement. Nous nous déplaçons pour évaluer votre projet sur site, comprendre vos attentes et vous proposer une solution sur mesure, dans les délais et le budget convenus.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: '#0B3D2C' }} className="py-16 text-center">
        <div className="container mx-auto max-w-xl px-4 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3">
            Votre commune est dans notre secteur ?
          </h2>
          <p className="text-white/70 mb-8">Devis gratuit · Déplacement offert · Réponse sous 24h</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/devis"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold hover:opacity-90 transition-opacity"
              style={{ backgroundColor: '#80BC00', color: '#ffffff', boxShadow: 'rgb(128, 188, 0) 0px 0px 25px -14px' }}
            >
              Demander mon devis gratuit <ArrowRight size={14} />
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
