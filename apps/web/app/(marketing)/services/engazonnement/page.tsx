import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Phone, MapPin } from 'lucide-react'
import { JsonLd } from '@/components/seo/json-ld'

export const metadata: Metadata = {
  title: "Engazonnement Gazon Lyon Nord | LM Espace Vert",
  description: "Création de pelouses par semis ou rouleaux à Lyon nord. Prairies fleuries, regarnissage. LM Espace Vert. Devis gratuit.",
  alternates: { canonical: 'https://www.lmespacevert.fr/services/engazonnement' },
  openGraph: {
    title: "Engazonnement Gazon Lyon Nord | LM Espace Vert",
    description: "Création de pelouses par semis ou rouleaux à Lyon nord. Prairies fleuries, regarnissage. LM Espace Vert. Devis gratuit.",
    url: 'https://www.lmespacevert.fr/services/engazonnement',
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
}

const features = [
  'Terrassement et nivellement du terrain',
  'Amendement et préparation du sol en profondeur',
  'Semis de gazon avec mélanges adaptés au climat lyonnais',
  'Gazon en rouleaux pour un résultat immédiat',
  'Création de prairies fleuries et mélanges biodiversité',
  'Regarnissage et rénovation de pelouses existantes',
]

const faqs = [
  {
    q: "Quelle est la différence entre le semis et le gazon en rouleaux à Lyon ?",
    a: "Le semis est plus économique (environ 3 à 8 €/m²) mais demande 6 à 8 semaines avant d'obtenir une pelouse praticable et doit être réalisé en avril-mai ou septembre-octobre. Le gazon en rouleaux (15 à 25 €/m² posé) donne un résultat immédiat et peut être posé de mars à octobre. Pour une grande superficie, le semis est souvent préférable; pour un accès rapide ou une petite surface, le gazon en rouleaux est idéal.",
  },
  {
    q: "Comment préparer correctement le sol avant l'engazonnement ?",
    a: "La préparation du sol est la clé d'une belle pelouse durable. Nous commençons par un décompactage en profondeur, puis un amendement selon les résultats d'analyse du sol (compost, sable, chaux si pH inadapté). Le terrain est ensuite nivelé précisément et roulé pour obtenir une surface plane et ferme. Cette étape représente 70 % de la réussite du projet.",
  },
  {
    q: "Quand faut-il semer ou poser du gazon à Lyon ?",
    a: "À Lyon, les périodes idéales pour le semis sont mi-mars à mi-mai (sol réchauffé, pluies suffisantes) et mi-août à mi-octobre (températures douces, moins de stress hydrique qu'en été). Le gazon en rouleaux peut être posé de mars à novembre. Nous évoluons les conditions météo et vous conseillons sur la meilleure période selon votre projet.",
  },
  {
    q: "Proposez-vous des prairies fleuries à la place d'un gazon classique ?",
    a: "Oui, nous sommes de plus en plus sollicités pour les prairies fleuries, particulièrement dans les propriétés du nord-ouest lyonnais où la biodiversité est valorisée. Un mélange prairie fleurie nécessite moins d'entretien (1 à 2 fauches par an), consomme moins d'eau et offre une floraison échelonnée d'avril à octobre. Nous sélectionnons des mélanges adaptés au sol argileux du Rhône.",
  },
]

export default function EngazonnementPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />

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
          src="/images/realisation-6.jpg"
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
                La base de tout beau jardin : une pelouse parfaite
              </h2>
              <div className="text-[#8C8F94] leading-relaxed space-y-4">
                <p>
                  Une belle pelouse ne s&apos;improvise pas. Elle résulte d&apos;une préparation soignée du sol, d&apos;un choix judicieux des semences et d&apos;une mise en œuvre rigoureuse. Chez LM Espace Vert, nous réalisons des créations de pelouses par semis ou gazon en rouleaux à Saint-Didier-au-Mont-d&apos;Or, Caluire, Limonest et dans tout le nord-ouest lyonnais depuis plus de 5 ans.
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
