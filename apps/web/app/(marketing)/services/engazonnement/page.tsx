import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Phone, MapPin, Star, Leaf, FlaskConical, CalendarCheck } from 'lucide-react'
import { JsonLd } from '@/components/seo/json-ld'

export const metadata: Metadata = {
  title: "Engazonnement & Création de Pelouses Lyon Nord | LM Espace Vert",
  description: "LM Espace Vert crée votre pelouse à Lyon nord par semis ou gazon en rouleaux. Préparation du sol, prairies fleuries, regarnissage. Résultat garanti. Devis gratuit sous 24h.",
  alternates: { canonical: 'https://www.lmespacevert.fr/services/engazonnement' },
  openGraph: {
    title: "Engazonnement & Création de Pelouses Lyon Nord — LM Espace Vert",
    description: "LM Espace Vert crée votre pelouse à Lyon nord par semis ou gazon en rouleaux. Préparation du sol, prairies fleuries, regarnissage. Résultat garanti. Devis gratuit sous 24h.",
    url: 'https://www.lmespacevert.fr/services/engazonnement',
    type: 'website',
    images: [{ url: 'https://www.lmespacevert.fr/images/realisations/lm-04.webp', width: 1200, height: 630, alt: 'Création de pelouse par engazonnement à Lyon nord — LM Espace Vert' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Engazonnement & Création de Pelouses Lyon Nord — LM Espace Vert",
    description: "Création de pelouses par semis ou gazon en rouleaux à Lyon nord. Résultat garanti. Devis gratuit sous 24h.",
    images: ['https://www.lmespacevert.fr/images/realisations/lm-04.webp'],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Engazonnement et création de pelouses',
  serviceType: 'Engazonnement',
  description: "Création de pelouses par semis ou gazon en rouleaux à Lyon nord. Préparation du sol, semis de qualité, gazon en plaques, prairies fleuries et regarnissage. Résultat garanti.",
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
  'Amendement et préparation du sol en profondeur',
  'Semis de gazon avec mélanges adaptés au climat lyonnais',
  'Gazon en rouleaux pour un résultat immédiat',
  'Création de prairies fleuries et mélanges biodiversité',
  'Regarnissage et rénovation de pelouses existantes',
]

const advantages = [
  { icon: FlaskConical, title: 'Analyse de sol incluse', desc: 'Nous analysons pH, drainage et texture pour choisir les semences idéales.' },
  { icon: Leaf, title: 'Semences professionnelles', desc: 'Mélanges adaptés au micro-climat lyonnais : résistance à la sécheresse, ombre, usage intensif.' },
  { icon: CalendarCheck, title: 'Suivi jusqu\'à la 1re tonte', desc: 'On ne vous laisse pas seul après la pose : suivi de la levée et première tonte inclus.' },
]

const faqs = [
  {
    q: "Quelle est la différence entre le semis et le gazon en rouleaux à Lyon ?",
    a: "Le semis est plus économique (environ 3 à 8 â‚¬/mÂ²) mais demande 6 à 8 semaines avant d'obtenir une pelouse praticable et doit être réalisé en avril-mai ou septembre-octobre. Le gazon en rouleaux (15 à 25 â‚¬/mÂ² posé) donne un résultat immédiat et peut être posé de mars à octobre. Pour une grande superficie, le semis est souvent préférable; pour un accès rapide ou une petite surface, le gazon en rouleaux est idéal.",
  },
  {
    q: "Comment préparer correctement le sol avant l'engazonnement ?",
    a: "La préparation du sol est la clé d'une belle pelouse durable. Nous commençons par un décompactage en profondeur, puis un amendement selon les résultats d'analyse du sol (compost, sable, chaux si pH inadapté). Le terrain est ensuite nivelé précisément et roulé pour obtenir une surface plane et ferme. Cette étape représente 70 % de la réussite du projet.",
  },
  {
    q: "Quand faut-il semer ou poser du gazon à Lyon ?",
    a: "À Lyon, les périodes idéales pour le semis sont mi-mars à mi-mai (sol réchauffé, pluies suffisantes) et mi-août à mi-octobre (températures douces, moins de stress hydrique qu'en été). Le gazon en rouleaux peut être posé de mars à novembre. Nous évaluons les conditions météo et vous conseillons sur la meilleure période selon votre projet.",
  },
  {
    q: "Proposez-vous des prairies fleuries à la place d'un gazon classique ?",
    a: "Oui, nous sommes de plus en plus sollicités pour les prairies fleuries, particulièrement dans les propriétés du nord-ouest lyonnais où la biodiversité est valorisée. Un mélange prairie fleurie nécessite moins d'entretien (1 à 2 fauches par an), consomme moins d'eau et offre une floraison échelonnée d'avril à octobre. Nous sélectionnons des mélanges adaptés au sol argileux du Rhône.",
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
          src="/images/realisations/lm-04.webp"
          alt="Engazonnement et création de pelouse à Lyon nord par LM Espace Vert"
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
            Engazonnement &amp; Création de Pelouses
          </h1>
          <p className="text-white/80 text-lg max-w-xl mb-6">
            Une pelouse dense et verte dès la première saison. Semis ou rouleaux à Lyon nord.
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
              À partir de 15 â‚¬ / mÂ²
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
                  Une belle pelouse ne s&apos;improvise pas. Elle résulte d&apos;une préparation soignée du sol, d&apos;un choix judicieux des semences et d&apos;une mise en Å“uvre rigoureuse. Chez LM Espace Vert, nous réalisons des créations de pelouses par semis ou gazon en rouleaux à Saint-Didier-au-Mont-d&apos;Or, Caluire, Limonest et dans tout le nord-ouest lyonnais depuis plus de 5 ans.
                </p>
                <p>
                  Notre processus commence toujours par une analyse du sol : pH, texture, drainage. En fonction des résultats, nous amendons la terre avec de la matière organique et des corrections minérales pour créer les conditions idéales à l&apos;enracinement. Le terrain est ensuite travaillé en profondeur, nivelé et compacté légèrement pour éviter les irrégularités.
                </p>
                <p>
                  Pour le semis, nous utilisons des mélanges professionnels adaptés au climat lyonnais : gazon résistant à la sécheresse estivale, ombre portée des arbres, ou usage intensif famille. Pour le gazon en rouleaux, nous travaillons avec des producteurs régionaux qui fournissent un gazon cultivé depuis plus d&apos;un an, avec un enracinement parfait. Dans les deux cas, nous assurons un suivi jusqu&apos;à la première tonte incluse.
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
              &ldquo;On avait un terrain nu après des travaux de construction. LM Espace Vert a tout préparé, amendé, semé. Deux mois plus tard, nos enfants jouaient sur une pelouse parfaite. Un vrai professionnel, très honnête sur les délais.&rdquo;
            </p>
            <footer className="text-sm font-semibold" style={{ color: '#425D07' }}>
              Éric D. — Caluire-et-Cuire
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
          <h2 className="font-display text-2xl font-bold text-white mb-3">Votre projet pelouse, on en parle ?</h2>
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

