import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, CheckCircle2, Clock, Euro, Phone } from 'lucide-react'
import { JsonLd } from '@/components/seo/json-ld'
import { FAQSection } from '@/components/ui/faq-section'
import { TrustBadges } from '@/components/ui/trust-badges'

export const metadata: Metadata = {
  title: "Services paysagistes à Lyon — Création, Entretien, Élagage | LM Espace Vert",
  description:
    "LM Espace Vert propose création de jardins, entretien régulier, élagage, maçonnerie paysagère et arrosage automatique à Saint-Didier-au-Mont-d'Or et rayon 20 km.",
  alternates: { canonical: 'https://www.lmespacevert.fr/services' },
  openGraph: {
    title: "Services paysagistes Lyon — LM Espace Vert",
    description: "Tous vos besoins paysagers : création, entretien, élagage, maçonnerie. Devis gratuit.",
    url: 'https://www.lmespacevert.fr/services',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.lmespacevert.fr' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.lmespacevert.fr/services' },
  ],
}

const services = [
  {
    id: 'entretien',
    emoji: '✂️',
    title: "Entretien d'espaces verts",
    subtitle: 'Votre jardin toujours impeccable',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    description: "Confiez l'entretien régulier de votre jardin à nos équipes. Tonte soignée, taille de haies, désherbage, fertilisation saisonnière et traitement préventif — nous prenons en charge tout le cycle de vie de vos espaces verts.",
    benefits: [
      "Contrats mensuels ou saisonniers sur-mesure",
      "Équipes fixes et identifiées à chaque passage",
      "Rapport d'intervention avec photos",
      "Intervention le samedi sur demande",
      "Éco-pâturage disponible pour grandes surfaces",
    ],
    price: 'À partir de 80 €/h',
    duration: '1h à 1 journée',
  },
  {
    id: 'creation',
    emoji: '🌿',
    title: 'Création de jardins',
    subtitle: 'De la conception à la réalisation',
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4aaae?w=800&q=80',
    description: "Confiez-nous la création de votre jardin de A à Z. Étude du terrain, plan de masse, sélection végétale adaptée au sol lyonnais, terrassement, plantations et aménagements décoratifs. Du jardinet de ville au parc de demeure.",
    benefits: [
      'Étude personnalisée et plan détaillé',
      'Végétaux garantis 1 an après plantation',
      'Accompagnement et conseils post-création',
      'Coordination des corps de métier',
      'Suivi photographique du chantier',
    ],
    price: 'Sur devis',
    duration: '2 jours à plusieurs semaines',
  },
  {
    id: 'elagage',
    emoji: '🌳',
    title: 'Élagage & Abattage',
    subtitle: 'Interventions sécurisées en hauteur',
    image: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?w=800&q=80',
    description: "Nos arboristes certifiés interviennent pour l'élagage de formation, la taille de réduction, l'élagage sanitaire et l'abattage dirigé. Travaux sécurisés, même en zones difficiles d'accès.",
    benefits: [
      'Professionnels certifiés et équipés',
      'Assurance RC professionnelle',
      'Broyage et évacuation des rémanents',
      "Conseil sanitaire et conseil d'abattage",
      'Intervention sécurisée à grande hauteur',
    ],
    price: 'À partir de 200 €',
    duration: '1 à 2 jours selon arbre',
  },
  {
    id: 'maconnerie',
    emoji: '🧱',
    title: 'Maçonnerie paysagère',
    subtitle: 'Structurez et sublimez vos extérieurs',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80',
    description: "Terrasses en bois composite ou pierre naturelle, allées, escaliers, murets de soutènement, clôtures et portails. Nous créons des structures durables qui valorisent votre patrimoine.",
    benefits: [
      'Matériaux durables et écologiques',
      "Pose soignée à joints fins ou larges",
      "Garantie 2 ans main d'œuvre",
      'Dalles pierre, bois, béton désactivé',
      'Éclairage paysager intégré possible',
    ],
    price: 'À partir de 120 €/m²',
    duration: '3 jours à 3 semaines',
  },
  {
    id: 'arrosage',
    emoji: '💧',
    title: 'Arrosage automatique',
    subtitle: "Économisez l'eau et votre temps",
    image: 'https://images.unsplash.com/photo-1621929747188-0b4dc28498d2?w=800&q=80',
    description: "Installation et maintenance de systèmes d'arrosage intelligents : programmateurs WiFi, arroseurs pop-up, goutte-à-goutte enterré, capteurs de pluie et d'humidité. Pilotez votre jardin depuis votre smartphone.",
    benefits: [
      "Jusqu'à 50% d'économie d'eau",
      'Programmation saisonnière automatique',
      'Pilotage à distance via smartphone',
      'SAV et maintenance sous 48h',
      'Compatible jardin connecté',
    ],
    price: 'À partir de 800 €',
    duration: '1 à 3 jours',
  },
  {
    id: 'engazonnement',
    emoji: '🌱',
    title: 'Engazonnement & Pelouses',
    subtitle: 'Un gazon dense et durable',
    image: 'https://images.unsplash.com/photo-1628352081506-83c43123e54d?w=800&q=80',
    description: "Création de pelouses par semis ou gazon en rouleaux, préparation du sol, scarification, sursemage et régénération de gazon abîmé. Nous choisissons les mélanges adaptés au climat lyonnais.",
    benefits: [
      'Préparation du sol incluse',
      'Choix du mélange adapté (ombre, soleil, sport)',
      'Gazon en rouleaux ou semis',
      'Levée garantie ou reprise',
      "Programme d'entretien en option",
    ],
    price: 'À partir de 15 €/m²',
    duration: '1 à 5 jours',
  },
] as const

const faqServices = [
  {
    question: "Proposez-vous des contrats d'entretien annuels ?",
    answer: "Oui, nous proposons des forfaits d'entretien mensuels, trimestriels ou annuels adaptés à votre jardin. Ces contrats incluent généralement la tonte, la taille de haies, le désherbage et la fertilisation saisonnière.",
  },
  {
    question: "Quelle différence entre élagage et abattage ?",
    answer: "L'élagage consiste à tailler sélectivement les branches d'un arbre pour améliorer sa forme, sa santé ou sa sécurité. L'abattage est la coupe complète d'un arbre lorsqu'il est dangereux, mort ou gênant. Nos professionnels réalisent les deux.",
  },
  {
    question: "Intervenez-vous pour les copropriétés ?",
    answer: "Oui, nous travaillons avec des copropriétés, des entreprises, des hôtels et des collectivités pour l'entretien de leurs espaces verts. Des devis sur-mesure sont établis selon la superficie et la fréquence souhaitée.",
  },
  {
    question: "Quelle est la durée d'intervention pour une création de jardin ?",
    answer: "Cela dépend de la superficie et de la complexité du projet. Un petit jardin de 100 m² peut être réalisé en 2-3 jours. Un jardin complet avec terrasse, massifs et gazon peut prendre 2 à 4 semaines.",
  },
]

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      {/* Breadcrumb */}
      <nav aria-label="Fil d'Ariane" className="border-b border-[--color-border] bg-[--color-bg-subtle]">
        <div className="container mx-auto max-w-7xl px-4 py-3 sm:px-6">
          <ol role="list" className="flex items-center gap-2 text-sm text-[--color-fg-subtle]">
            <li><Link href="/" className="hover:text-[--color-fg]">Accueil</Link></li>
            <li aria-hidden="true">/</li>
            <li><span aria-current="page" className="text-[--color-fg]">Services</span></li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-16 text-center bg-[--color-bg-subtle]">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <p className="badge badge-light mb-4">Notre expertise</p>
          <h1 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold text-[--color-fg]">
            Services paysagers à Lyon
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-[--color-fg-muted]">
            De la création à l&apos;entretien, LM Espace Vert maîtrise toutes les facettes
            de l&apos;aménagement extérieur dans un rayon de 20 km autour de Saint-Didier-au-Mont-d&apos;Or.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href="/devis" className="btn-primary">Devis gratuit <ArrowRight size={15} aria-hidden="true" /></Link>
            <a href="tel:+33674734698" className="btn-secondary"><Phone size={15} aria-hidden="true" /> 06 74 73 46 98</a>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <div className="border-y border-[--color-border] py-8">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <TrustBadges columns={6} />
        </div>
      </div>

      {/* Services */}
      <section aria-label="Liste des services" className="py-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <ul role="list" className="space-y-12">
            {services.map((service, i) => (
              <li
                key={service.id}
                id={service.id}
                className={`grid gap-10 rounded-2xl border border-[--color-border] bg-[--color-bg-elevated] overflow-hidden shadow-sm lg:grid-cols-2 ${i % 2 === 1 ? 'lg:[direction:rtl]' : ''}`}
              >
                <div className="relative aspect-[4/3] lg:aspect-auto overflow-hidden bg-[--color-bg-subtle]" style={i % 2 === 1 ? { direction: 'ltr' } : {}}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
                <div className={`flex flex-col justify-center p-8 lg:p-10 ${i % 2 === 1 ? '[direction:ltr]' : ''}`}>
                  <div className="text-4xl mb-4" aria-hidden="true">{service.emoji}</div>
                  <p className="text-sm font-semibold text-[--color-accent] uppercase tracking-wider mb-1">{service.subtitle}</p>
                  <h2 className="font-display text-2xl font-bold text-[--color-fg] mb-4">{service.title}</h2>
                  <p className="text-[--color-fg-muted] leading-relaxed mb-6">{service.description}</p>

                  <ul className="space-y-2 mb-6">
                    {service.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-[--color-fg-muted]">
                        <CheckCircle2 size={15} className="text-[--color-primary] flex-shrink-0 mt-0.5" aria-hidden="true" />
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-3 text-sm mb-8">
                    <div className="flex items-center gap-1.5 bg-[--color-green-light] text-[--color-primary] rounded-full px-3 py-1.5 font-semibold">
                      <Euro size={13} aria-hidden="true" /> {service.price}
                    </div>
                    <div className="flex items-center gap-1.5 bg-[--color-bg-subtle] text-[--color-fg-muted] rounded-full px-3 py-1.5">
                      <Clock size={13} aria-hidden="true" /> {service.duration}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Link href="/devis" className="btn-primary btn-sm">
                      Devis gratuit
                    </Link>
                    <a href="tel:+33674734698" className="btn-secondary btn-sm">
                      <Phone size={14} aria-hidden="true" /> Appeler
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ services */}
      <section className="section-pale py-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <FAQSection items={faqServices} title="Questions sur nos services" subtitle="FAQ" />
        </div>
      </section>

      {/* CTA */}
      <section className="section-green py-16 text-center">
        <div className="container mx-auto max-w-xl px-4 sm:px-6">
          <h2 className="font-display text-2xl font-bold text-white mb-3">
            Prêt à démarrer votre projet ?
          </h2>
          <p className="text-green-100 mb-6">Devis gratuit, réponse sous 24h.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/devis" className="inline-flex items-center gap-2 rounded-full bg-white text-[--color-primary] font-bold px-6 py-3 hover:bg-white/90 transition-colors">
              Demander un devis
            </Link>
            <a href="tel:+33674734698" className="inline-flex items-center gap-2 rounded-full bg-white/15 border border-white/30 text-white font-bold px-6 py-3 hover:bg-white/25 transition-colors">
              <Phone size={16} aria-hidden="true" /> 06 74 73 46 98
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
