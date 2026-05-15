import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Phone, MapPin } from 'lucide-react'
import { JsonLd } from '@/components/seo/json-ld'

export const metadata: Metadata = {
  title: "Élagage & Abattage d'Arbres Lyon Nord | LM Espace Vert",
  description: "Élagage raisonné et abattage sécurisé à Saint-Didier-au-Mont-d'Or et Lyon nord. Broyage déchets. CERTIPHYTO. Devis gratuit.",
  alternates: { canonical: 'https://www.lmespacevert.fr/services/elagage-abattage' },
  openGraph: {
    title: "Élagage & Abattage d'Arbres Lyon Nord | LM Espace Vert",
    description: "Élagage raisonné et abattage sécurisé à Saint-Didier-au-Mont-d'Or et Lyon nord. Broyage déchets. CERTIPHYTO. Devis gratuit.",
    url: 'https://www.lmespacevert.fr/services/elagage-abattage',
    images: [{ url: 'https://www.lmespacevert.fr/images/elagage-abattage.webp', width: 1200, height: 630, alt: "Élagage et abattage d'arbres — LM Espace Vert" }],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: "Élagage et abattage d'arbres",
  serviceType: "Élagage et abattage d'arbres",
  description: "Élagage raisonné, taille douce et abattage sécurisé d'arbres à Saint-Didier-au-Mont-d'Or et dans le nord-ouest lyonnais. Broyage et évacuation des déchets. Équipe certifiée CERTIPHYTO.",
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
    { '@type': 'ListItem', position: 3, name: 'Élagage & Abattage', item: 'https://www.lmespacevert.fr/services/elagage-abattage' },
  ],
}

const features = [
  "Élagage de formation et d'entretien",
  "Taille douce pour la santé de l'arbre",
  'Abattage dirigé avec techniques sécurisées',
  'Broyage sur place et évacuation des déchets',
  'Soins aux arbres remarquables (pansements, traitements)',
  'Certification CERTIPHYTO — produits phyto maîtrisés',
]

const faqs = [
  {
    q: "Quelle est la différence entre l'élagage et l'abattage ?",
    a: "L'élagage consiste à tailler les branches d'un arbre vivant pour améliorer sa forme, sa santé ou réduire les risques. L'abattage est l'opération qui consiste à couper l'arbre en totalité lorsqu'il est dangereux, mort, ou qu'il gêne définitivement. Nos experts évaluent systématiquement la meilleure option lors de la visite gratuite.",
  },
  {
    q: "Avez-vous besoin d'une autorisation pour abattre un arbre à Lyon ?",
    a: "En zone urbaine dans le Rhône, l'abattage d'arbres de plus de 1m de circonférence peut nécessiter une déclaration préalable auprès de la mairie. En lotissement ou dans certaines zones protégées, une autorisation est obligatoire. Nous vous conseillons sur les démarches administratives et pouvons effectuer les demandes en votre nom.",
  },
  {
    q: "Quelle est la bonne saison pour élaguer un arbre à Lyon nord ?",
    a: "L'élagage se pratique idéalement à la fin de l'hiver (février-mars) avant la reprise de végétation, ou en été après la montée de sève (juillet-août). Certains arbres comme les cerisiers et fruitiers doivent être taillés en dehors des périodes humides pour éviter les maladies. Nous adaptons le calendrier à chaque essence.",
  },
  {
    q: "Que faites-vous des déchets d'élagage ?",
    a: "Tous les déchets issus de nos interventions d'élagage et d'abattage sont broyés sur place (lorsque c'est possible) pour produire du BRF (Bois Raméal Fragmenté) que vous pouvez utiliser en paillage. Les branches plus grosses sont évacuées et orientées vers des filières de valorisation énergétique ou de compostage. Nous laissons votre jardin propre.",
  },
]

export default function ElagageAbattagePage() {
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
            <li><span aria-current="page" className="text-[#2F2F2F]">Élagage &amp; Abattage</span></li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-[50vh] min-h-[380px] flex items-end" aria-labelledby="service-heading">
        <Image
          src="/images/elagage-abattage.webp"
          alt="Élagage et abattage d'arbres à Lyon nord par LM Espace Vert"
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
            Élagage &amp; Abattage
          </h1>
          <p className="text-white/80 text-lg max-w-xl mb-6">
            Interventions sécurisées sur vos arbres à Lyon nord par des professionnels certifiés CERTIPHYTO.
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
                Élagage raisonné pour des arbres en bonne santé
              </h2>
              <div className="text-[#8C8F94] leading-relaxed space-y-4">
                <p>
                  L&apos;élagage est une opération qui demande une connaissance approfondie des espèces arborées, de leur biologie et de leur comportement. Chez LM Espace Vert, nos arboristes interviennent à Saint-Didier-au-Mont-d&apos;Or, Caluire, Écully, Neuville-sur-Saône et dans tout le nord-ouest lyonnais pour pratiquer un élagage respectueux qui préserve la vitalité de vos arbres.
                </p>
                <p>
                  Nous pratiquons la taille douce selon les méthodes de l&apos;ISA (International Society of Arboriculture) : coupes propres, angles corrects, pas de têtardage abusif. Pour les arbres remarquables ou classés, nous réalisons des soins spéciaux avec traitement des plaies et surveillance phytosanitaire. Notre équipe est certifiée CERTIPHYTO pour l&apos;utilisation contrôlée des produits phytosanitaires.
                </p>
                <p>
                  Lorsqu&apos;un arbre est irrémédiablement compromis, dangereux ou gênant, l&apos;abattage dirigé s&apos;impose. Nous maîtrisons les techniques d&apos;abattage en milieu contraint (proche de bâtiments, lignes électriques, clôtures) grâce à notre matériel professionnel. Tous les déchets sont broyés ou évacués, votre propriété est rendue propre après chaque chantier.
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
          <h2 className="font-display text-2xl font-bold text-white mb-3">Votre projet élagage, on en parle ?</h2>
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
