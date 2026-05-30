import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Phone, MapPin, Star, ShieldCheck, Recycle, Award } from 'lucide-react'
import { JsonLd } from '@/components/seo/json-ld'

export const metadata: Metadata = {
  title: "Élagage & Abattage d'Arbres Lyon Nord | LM Espace Vert",
  description: "Élagage raisonné et abattage sécurisé d'arbres à Lyon nord par LM Espace Vert, certifié CERTIPHYTO. Broyage des déchets inclus. Intervention sur Saint-Didier, Caluire, Écully. Devis gratuit.",
  alternates: { canonical: 'https://www.lmespacevert.fr/services/elagage-abattage' },
  openGraph: {
    title: "Élagage & Abattage d'Arbres Lyon Nord — LM Espace Vert",
    description: "Élagage raisonné et abattage sécurisé d'arbres à Lyon nord par LM Espace Vert, certifié CERTIPHYTO. Broyage des déchets inclus. Devis gratuit.",
    url: 'https://www.lmespacevert.fr/services/elagage-abattage',
    type: 'website',
    images: [{ url: 'https://www.lmespacevert.fr/images/realisations/lm-06.webp', width: 1200, height: 630, alt: "Élagage et abattage d'arbres — LM Espace Vert" }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Élagage & Abattage d'Arbres Lyon Nord — LM Espace Vert",
    description: "Élagage raisonné et abattage sécurisé d'arbres à Lyon nord. Certifié CERTIPHYTO. Devis gratuit.",
    images: ['https://www.lmespacevert.fr/images/realisations/lm-06.webp'],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: "Élagage et abattage d'arbres",
  serviceType: "Élagage et abattage d'arbres",
  url: 'https://www.lmespacevert.fr/services/elagage-abattage',
  description: "Élagage raisonné, taille douce et abattage sécurisé d'arbres à Saint-Didier-au-Mont-d'Or et dans le nord-ouest lyonnais. Broyage et évacuation des déchets. Équipe certifiée CERTIPHYTO.",
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

const advantages = [
  { icon: Award, title: 'Équipe certifiée CERTIPHYTO', desc: 'Professionnels formés et certifiés pour des interventions sûres et respectueuses.' },
  { icon: ShieldCheck, title: 'Techniques ISA respectées', desc: 'Coupes propres selon les standards internationaux pour préserver la vitalité des arbres.' },
  { icon: Recycle, title: 'Déchets valorisés', desc: 'Broyage sur place en BRF paillage, évacuation vers filières de compostage.' },
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

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: { '@type': 'Answer', text: faq.a },
  })),
}

const imageObjectSchema = {
  '@context': 'https://schema.org',
  '@type': 'ImageObject',
  contentUrl: 'https://www.lmespacevert.fr/images/realisations/lm-06.webp',
  url: 'https://www.lmespacevert.fr/images/realisations/lm-06.webp',
  name: "Élagage et abattage d'arbres à Lyon nord par LM Espace Vert",
  caption: "Élagage raisonné et abattage sécurisé d'arbres à Écully et Lyon nord — LM Espace Vert, certifié CERTIPHYTO",
  representativeOfPage: true,
  width: 1200,
  height: 800,
}

export default function ElagageAbattagePage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={imageObjectSchema} />

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
          src="/images/realisations/lm-06.webp"
          alt="Élagage et abattage d'arbres à Lyon nord par LM Espace Vert"
          fill
          className="object-cover rounded-b-none"
          priority
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(36,50,56,0.92) 0%, rgba(36,50,56,0.50) 50%, rgba(36,50,56,0.15) 100%)' }}
        />
        <div className="relative container mx-auto max-w-7xl px-4 sm:px-6 pb-14">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#9E4B47' }}>Arboriculture professionnelle</p>
          <h1 id="service-heading" className="font-display text-[clamp(2.5rem,6vw,4rem)] font-bold text-white mb-4 leading-tight">
            Élagage &amp; Abattage
          </h1>
          <p className="text-white/85 text-[1.0625rem] max-w-xl mb-7">
            Interventions sécurisées sur vos arbres à Lyon nord par des professionnels certifiés CERTIPHYTO.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/devis"
              className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold hover:opacity-90 transition-opacity"
              style={{ backgroundColor: '#9E4B47', color: '#ffffff' }}
            >
              Devis gratuit <ArrowRight size={14} />
            </Link>
            <a
              href="https://wa.me/33672587353?text=Bonjour%20LM%20Espace%20Vert%2C%20je%20souhaite%20un%20devis%20pour%20de%20l%27élagage..."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white border border-white/40 hover:bg-white/15 transition-colors"
            >
              WhatsApp
            </a>
            <span
              className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold"
              style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#ffffff' }}
            >
              À partir de 250 €
            </span>
          </div>
        </div>
      </section>

      {/* Description + features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#9E4B47' }}>Notre expertise</p>
              <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold mb-5" style={{ color: '#4A6320' }}>
                Élagage raisonné pour des arbres en bonne santé
              </h2>
              <div className="text-[#5C606B] text-[1.0625rem] leading-relaxed space-y-4">
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
                style={{ color: '#4A6320' }}
              >
                Voir nos réalisations <ArrowRight size={14} />
              </Link>
            </div>
            <ul className="space-y-3">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-3 bg-[#F4F1E9] rounded-xl p-4 border border-[#EDEDED]">
                  <CheckCircle size={18} style={{ color: '#749A30' }} aria-hidden="true" />
                  <span className="text-sm font-medium text-[#2F2F2F]">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Amélioration 2 — Section Avantages */}
      <section className="py-14" style={{ backgroundColor: '#F4F1E9' }}>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <p className="text-xs font-bold uppercase tracking-widest mb-3 text-center" style={{ color: '#9E4B47' }}>Pourquoi nous choisir</p>
          <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold mb-10 text-center" style={{ color: '#4A6320' }}>
            Les avantages de notre service élagage
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {advantages.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-6 border border-[#EDEDED] flex flex-col items-center text-center gap-3">
                <span className="inline-flex items-center justify-center w-11 h-11 rounded-full" style={{ backgroundColor: 'rgba(116,154,48,0.12)' }}>
                  <Icon size={20} style={{ color: '#4A6320' }} aria-hidden="true" />
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
          <blockquote className="rounded-2xl border border-[#EDEDED] p-8 text-center" style={{ backgroundColor: '#F4F1E9' }}>
            <div className="flex justify-center gap-0.5 mb-4" aria-label="5 étoiles">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="#749A30" style={{ color: '#749A30' }} aria-hidden="true" />
              ))}
            </div>
            <p className="text-base italic leading-relaxed mb-4" style={{ color: '#2F2F2F' }}>
              &ldquo;Deux grands pins proches de la maison m&apos;inquiétaient depuis longtemps. L&apos;équipe de LM Espace Vert est intervenue rapidement, en toute sécurité. Travail soigné, chantier propre. Je recommande sans hésiter.&rdquo;
            </p>
            <footer className="text-sm font-semibold" style={{ color: '#4A6320' }}>
              Bernard T. — Écully
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Zone géographique */}
      <section style={{ backgroundColor: '#F4F1E9' }} className="py-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 text-center">
          <MapPin size={24} style={{ color: '#749A30' }} className="mx-auto mb-3" aria-hidden="true" />
          <h2 className="font-display text-2xl font-bold mb-3" style={{ color: '#4A6320' }}>Zone d&apos;intervention</h2>
          <p className="text-[#8C8F94] max-w-xl mx-auto">
            LM Espace Vert réalise ce service dans un rayon de 20 km autour de Saint-Didier-au-Mont-d&apos;Or&nbsp;: Caluire, Écully, Tassin, Limonest, Dardilly, Champagne, Neuville-sur-Saône et tout le nord-ouest lyonnais.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <p className="text-xs font-bold uppercase tracking-widest mb-3 text-center" style={{ color: '#9E4B47' }}>FAQ</p>
          <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold mb-8 text-center" style={{ color: '#4A6320' }}>Questions fréquentes</h2>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details key={faq.q} className="faq-item">
                <summary className="flex items-center justify-between px-5 py-4 cursor-pointer font-semibold text-sm bg-white" style={{ color: '#2F2F2F' }}>
                  {faq.q}
                  <span className="faq-icon ml-4 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs" style={{ backgroundColor: 'rgba(116,154,48,0.1)', color: '#749A30' }}>▾</span>
                </summary>
                <div className="faq-body">
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
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#749A30' }}>Nos secteurs</p>
          <h2 className="font-display text-xl font-bold mb-5" style={{ color: '#4A6320' }}>
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
                className="inline-flex items-center gap-1.5 rounded-full border border-[#EDEDED] px-4 py-1.5 text-xs font-medium hover:border-[#749A30] hover:text-[#4A6320] transition-colors"
                style={{ color: '#2F2F2F', backgroundColor: '#F4F1E9' }}
              >
                <MapPin size={10} style={{ color: '#749A30' }} aria-hidden="true" />
                {v.nom}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: '#243238' }} className="py-20 text-center">
        <div className="container mx-auto max-w-xl px-4 sm:px-6">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#9E4B47' }}>Prêt à démarrer ?</p>
          <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold text-white mb-4">Votre projet élagage, on en parle ?</h2>
          <p className="text-white/75 text-[1.0625rem] mb-8">Devis gratuit · Réponse sous 24h · Rayon 20 km</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/devis"
              className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold hover:opacity-90 transition-opacity"
              style={{ backgroundColor: '#9E4B47', color: '#ffffff' }}
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

