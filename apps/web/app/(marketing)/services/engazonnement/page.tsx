import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Phone, MapPin, Star, Leaf, FlaskConical, CalendarCheck } from 'lucide-react'
import { JsonLd } from '@/components/seo/json-ld'

export const metadata: Metadata = {
  title: "Engazonnement & CrÃ©ation de Pelouses Lyon Nord | LM Espace Vert",
  description: "LM Espace Vert crÃ©e votre pelouse Ã  Lyon nord par semis ou gazon en rouleaux. PrÃ©paration du sol, prairies fleuries, regarnissage. RÃ©sultat garanti. Devis gratuit sous 24h.",
  alternates: { canonical: 'https://www.lmespacevert.fr/services/engazonnement' },
  openGraph: {
    title: "Engazonnement & CrÃ©ation de Pelouses Lyon Nord â€” LM Espace Vert",
    description: "LM Espace Vert crÃ©e votre pelouse Ã  Lyon nord par semis ou gazon en rouleaux. PrÃ©paration du sol, prairies fleuries, regarnissage. RÃ©sultat garanti. Devis gratuit sous 24h.",
    url: 'https://www.lmespacevert.fr/services/engazonnement',
    type: 'website',
    images: [{ url: 'https://www.lmespacevert.fr/images/service-gazon-2.jpg', width: 1200, height: 630, alt: 'CrÃ©ation de pelouse par engazonnement Ã  Lyon nord â€” LM Espace Vert' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Engazonnement & CrÃ©ation de Pelouses Lyon Nord â€” LM Espace Vert",
    description: "CrÃ©ation de pelouses par semis ou gazon en rouleaux Ã  Lyon nord. RÃ©sultat garanti. Devis gratuit sous 24h.",
    images: ['https://www.lmespacevert.fr/images/service-gazon-2.jpg'],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Engazonnement et crÃ©ation de pelouses',
  serviceType: 'Engazonnement',
  description: "CrÃ©ation de pelouses par semis ou gazon en rouleaux Ã  Lyon nord. PrÃ©paration du sol, semis de qualitÃ©, gazon en plaques, prairies fleuries et regarnissage. RÃ©sultat garanti.",
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
    { '@type': 'ListItem', position: 3, name: 'Engazonnement', item: 'https://www.lmespacevert.fr/services/engazonnement' },
  ],
}

const features = [
  'Terrassement et nivellement du terrain',
  'Amendement et prÃ©paration du sol en profondeur',
  'Semis de gazon avec mÃ©langes adaptÃ©s au climat lyonnais',
  'Gazon en rouleaux pour un rÃ©sultat immÃ©diat',
  'CrÃ©ation de prairies fleuries et mÃ©langes biodiversitÃ©',
  'Regarnissage et rÃ©novation de pelouses existantes',
]

const advantages = [
  { icon: FlaskConical, title: 'Analyse de sol incluse', desc: 'Nous analysons pH, drainage et texture pour choisir les semences idÃ©ales.' },
  { icon: Leaf, title: 'Semences professionnelles', desc: 'MÃ©langes adaptÃ©s au micro-climat lyonnais : rÃ©sistance Ã  la sÃ©cheresse, ombre, usage intensif.' },
  { icon: CalendarCheck, title: 'Suivi jusqu\'Ã  la 1re tonte', desc: 'On ne vous laisse pas seul aprÃ¨s la pose : suivi de la levÃ©e et premiÃ¨re tonte inclus.' },
]

const faqs = [
  {
    q: "Quelle est la diffÃ©rence entre le semis et le gazon en rouleaux Ã  Lyon ?",
    a: "Le semis est plus Ã©conomique (environ 3 Ã  8 â‚¬/mÂ²) mais demande 6 Ã  8 semaines avant d'obtenir une pelouse praticable et doit Ãªtre rÃ©alisÃ© en avril-mai ou septembre-octobre. Le gazon en rouleaux (15 Ã  25 â‚¬/mÂ² posÃ©) donne un rÃ©sultat immÃ©diat et peut Ãªtre posÃ© de mars Ã  octobre. Pour une grande superficie, le semis est souvent prÃ©fÃ©rable; pour un accÃ¨s rapide ou une petite surface, le gazon en rouleaux est idÃ©al.",
  },
  {
    q: "Comment prÃ©parer correctement le sol avant l'engazonnement ?",
    a: "La prÃ©paration du sol est la clÃ© d'une belle pelouse durable. Nous commenÃ§ons par un dÃ©compactage en profondeur, puis un amendement selon les rÃ©sultats d'analyse du sol (compost, sable, chaux si pH inadaptÃ©). Le terrain est ensuite nivelÃ© prÃ©cisÃ©ment et roulÃ© pour obtenir une surface plane et ferme. Cette Ã©tape reprÃ©sente 70 % de la rÃ©ussite du projet.",
  },
  {
    q: "Quand faut-il semer ou poser du gazon Ã  Lyon ?",
    a: "Ã€ Lyon, les pÃ©riodes idÃ©ales pour le semis sont mi-mars Ã  mi-mai (sol rÃ©chauffÃ©, pluies suffisantes) et mi-aoÃ»t Ã  mi-octobre (tempÃ©ratures douces, moins de stress hydrique qu'en Ã©tÃ©). Le gazon en rouleaux peut Ãªtre posÃ© de mars Ã  novembre. Nous Ã©valuons les conditions mÃ©tÃ©o et vous conseillons sur la meilleure pÃ©riode selon votre projet.",
  },
  {
    q: "Proposez-vous des prairies fleuries Ã  la place d'un gazon classique ?",
    a: "Oui, nous sommes de plus en plus sollicitÃ©s pour les prairies fleuries, particuliÃ¨rement dans les propriÃ©tÃ©s du nord-ouest lyonnais oÃ¹ la biodiversitÃ© est valorisÃ©e. Un mÃ©lange prairie fleurie nÃ©cessite moins d'entretien (1 Ã  2 fauches par an), consomme moins d'eau et offre une floraison Ã©chelonnÃ©e d'avril Ã  octobre. Nous sÃ©lectionnons des mÃ©langes adaptÃ©s au sol argileux du RhÃ´ne.",
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

export default function EngazonnementPage() {
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
            <li><span aria-current="page" className="text-[#2F2F2F]">Engazonnement</span></li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-[50vh] min-h-[380px] flex items-end" aria-labelledby="service-heading">
        <Image
          src="/images/service-gazon-2.jpg"
          alt="Engazonnement et crÃ©ation de pelouse Ã  Lyon nord par LM Espace Vert"
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
            Engazonnement &amp; CrÃ©ation de Pelouses
          </h1>
          <p className="text-white/80 text-lg max-w-xl mb-6">
            Une pelouse dense et verte dÃ¨s la premiÃ¨re saison. Semis ou rouleaux Ã  Lyon nord.
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
              Ã€ partir de 15 â‚¬ / mÂ²
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
                La base de tout beau jardin : une pelouse parfaite
              </h2>
              <div className="text-[#8C8F94] leading-relaxed space-y-4">
                <p>
                  Une belle pelouse ne s&apos;improvise pas. Elle rÃ©sulte d&apos;une prÃ©paration soignÃ©e du sol, d&apos;un choix judicieux des semences et d&apos;une mise en Å“uvre rigoureuse. Chez LM Espace Vert, nous rÃ©alisons des crÃ©ations de pelouses par semis ou gazon en rouleaux Ã  Saint-Didier-au-Mont-d&apos;Or, Caluire, Limonest et dans tout le nord-ouest lyonnais depuis plus de 5 ans.
                </p>
                <p>
                  Notre processus commence toujours par une analyse du sol : pH, texture, drainage. En fonction des rÃ©sultats, nous amendons la terre avec de la matiÃ¨re organique et des corrections minÃ©rales pour crÃ©er les conditions idÃ©ales Ã  l&apos;enracinement. Le terrain est ensuite travaillÃ© en profondeur, nivelÃ© et compactÃ© lÃ©gÃ¨rement pour Ã©viter les irrÃ©gularitÃ©s.
                </p>
                <p>
                  Pour le semis, nous utilisons des mÃ©langes professionnels adaptÃ©s au climat lyonnais : gazon rÃ©sistant Ã  la sÃ©cheresse estivale, ombre portÃ©e des arbres, ou usage intensif famille. Pour le gazon en rouleaux, nous travaillons avec des producteurs rÃ©gionaux qui fournissent un gazon cultivÃ© depuis plus d&apos;un an, avec un enracinement parfait. Dans les deux cas, nous assurons un suivi jusqu&apos;Ã  la premiÃ¨re tonte incluse.
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
            Les avantages de notre service engazonnement
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
              &ldquo;On avait un terrain nu aprÃ¨s des travaux de construction. LM Espace Vert a tout prÃ©parÃ©, amendÃ©, semÃ©. Deux mois plus tard, nos enfants jouaient sur une pelouse parfaite. Un vrai professionnel, trÃ¨s honnÃªte sur les dÃ©lais.&rdquo;
            </p>
            <footer className="text-sm font-semibold" style={{ color: '#425D07' }}>
              Ã‰ric D. â€” Caluire-et-Cuire
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
          <h2 className="font-display text-2xl font-bold text-white mb-3">Votre projet pelouse, on en parle ?</h2>
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

