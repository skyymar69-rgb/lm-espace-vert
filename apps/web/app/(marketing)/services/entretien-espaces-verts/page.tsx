import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Phone, MapPin } from 'lucide-react'
import { JsonLd } from '@/components/seo/json-ld'

export const metadata: Metadata = {
  title: "Entretien Espaces Verts Lyon Nord | LM Espace Vert",
  description: "Entretien d'espaces verts à Saint-Didier-au-Mont-d'Or : tonte, taille de haies, désherbage. Contrats annuels. Devis gratuit.",
  alternates: { canonical: 'https://www.lmespacevert.fr/services/entretien-espaces-verts' },
  openGraph: {
    title: "Entretien Espaces Verts Lyon Nord | LM Espace Vert",
    description: "Entretien d'espaces verts à Saint-Didier-au-Mont-d'Or : tonte, taille de haies, désherbage. Contrats annuels. Devis gratuit.",
    url: 'https://www.lmespacevert.fr/services/entretien-espaces-verts',
    images: [{ url: 'https://www.lmespacevert.fr/images/entretien-espaces-verts.webp', width: 1200, height: 630, alt: "Entretien d'espaces verts — LM Espace Vert" }],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: "Entretien d'espaces verts",
  serviceType: "Entretien d'espaces verts",
  description: "Entretien régulier d'espaces verts à Saint-Didier-au-Mont-d'Or et dans le nord-ouest lyonnais : tonte de pelouse, taille de haies, désherbage, fertilisation. Contrats annuels sur mesure.",
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
    { '@type': 'ListItem', position: 3, name: "Entretien d'espaces verts", item: 'https://www.lmespacevert.fr/services/entretien-espaces-verts' },
  ],
}

const features = [
  'Tonte hebdomadaire ou bimensuelle selon la saison',
  'Taille de haies et arbustes ornementaux',
  'Désherbage manuel et traitement phyto raisonné',
  'Ramassage des feuilles et branchages',
  'Fertilisation et amendement du sol',
  'Contrats annuels avec passages planifiés',
]

const faqs = [
  {
    q: "Proposez-vous des contrats d'entretien annuels à Lyon nord ?",
    a: "Oui, nous proposons des contrats d'entretien sur mesure avec un nombre de passages défini à l'avance. Ces contrats couvrent la tonte, la taille de haies, le désherbage et les soins saisonniers. Ils peuvent inclure de 6 à 30 passages par an selon vos besoins et la taille de votre jardin à Caluire, Écully, Limonest ou partout dans le nord-ouest lyonnais.",
  },
  {
    q: "À quelle fréquence faut-il tondre la pelouse à Lyon ?",
    a: "À Lyon, la saison de pousse s'étend d'avril à octobre. Pendant cette période, une tonte hebdomadaire est recommandée pour maintenir une hauteur de gazon optimale entre 5 et 7 cm. En dehors de la saison, une tonte mensuelle suffit généralement. Nous adaptons la fréquence selon la météo et la croissance réelle de votre pelouse.",
  },
  {
    q: "Utilisez-vous des produits chimiques pour le désherbage ?",
    a: "Nous privilégions le désherbage manuel et les produits phytosanitaires raisonnés certifiés CERTIPHYTO. Pour les mauvaises herbes persistantes, nous proposons des alternatives bio comme le désherbage thermique à la vapeur. Notre objectif est de préserver la santé de votre sol et la biodiversité de votre jardin.",
  },
  {
    q: "Entretenez-vous les espaces verts de copropriétés et d'entreprises ?",
    a: "Oui, LM Espace Vert intervient pour les particuliers, les copropriétés, les syndics et les entreprises du nord-ouest lyonnais. Nous établissons des contrats pluriannuels avec des interventions planifiées et des rapports d'entretien réguliers pour les gestionnaires de patrimoine.",
  },
]

export default function EntretienEspacesVertsPage() {
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
            <li><span aria-current="page" className="text-[#2F2F2F]">Entretien d&apos;espaces verts</span></li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-[50vh] min-h-[380px] flex items-end" aria-labelledby="service-heading">
        <Image
          src="/images/entretien-espaces-verts.webp"
          alt="Entretien d'espaces verts à Saint-Didier-au-Mont-d'Or par LM Espace Vert"
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
            Entretien d&apos;Espaces Verts
          </h1>
          <p className="text-white/80 text-lg max-w-xl mb-6">
            Un jardin toujours impeccable grâce à nos contrats d&apos;entretien sur mesure à Lyon nord.
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
                Un entretien régulier pour un jardin en pleine santé
              </h2>
              <div className="text-[#8C8F94] leading-relaxed space-y-4">
                <p>
                  Un jardin bien entretenu, c&apos;est avant tout un jardin suivi avec méthode et régularité. Chez LM Espace Vert, nos équipes interviennent à Saint-Didier-au-Mont-d&apos;Or, Caluire, Écully, Limonest et dans tout le nord-ouest lyonnais pour assurer l&apos;entretien hebdomadaire, bimensuel ou mensuel de vos espaces verts.
                </p>
                <p>
                  Notre service d&apos;entretien comprend la tonte de pelouse avec ramassage des tontes, la taille des haies et des arbustes ornementaux selon les calendriers de végétation, le désherbage manuel des allées et massifs, ainsi que la fertilisation saisonnière. Chaque intervention est tracée et vous recevez un compte-rendu à chaque passage.
                </p>
                <p>
                  Nous travaillons aussi bien pour les particuliers que pour les professionnels, les copropriétés et les entreprises du secteur lyonnais. Nos contrats sont flexibles : vous choisissez les prestations incluses, la fréquence et la période d&apos;intervention, sans mauvaise surprise sur votre facture.
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

      {/* CTA */}
      <section style={{ backgroundColor: '#0B3D2C' }} className="py-16 text-center">
        <div className="container mx-auto max-w-xl px-4 sm:px-6">
          <h2 className="font-display text-2xl font-bold text-white mb-3">Votre entretien, on en parle ?</h2>
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
