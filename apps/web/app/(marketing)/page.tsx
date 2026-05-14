import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Leaf, Star } from 'lucide-react'
import { JsonLd } from '@/components/seo/json-ld'

export const metadata: Metadata = {
  title: 'Paysagiste créateur à Lyon — LM Espace Vert',
  description:
    'LM Espace Vert : création de jardins, entretien, élagage et aménagement paysager à Lyon et région. Devis gratuit en 48h.',
  alternates: { canonical: 'https://www.lmespacevert.fr' },
}

const services = [
  {
    icon: '🌿',
    title: 'Création de jardins',
    description: 'Conception et réalisation de jardins sur mesure, de la terrasse urbaine au parc de demeure.',
    href: '/services/creation',
  },
  {
    icon: '✂️',
    title: 'Entretien régulier',
    description: 'Tonte, taille, désherbage, fertilisation : votre jardin est toujours impeccable.',
    href: '/services/entretien',
  },
  {
    icon: '🌳',
    title: 'Élagage & Abattage',
    description: 'Interventions en hauteur par des arboristes certifiés, dans le respect des arbres.',
    href: '/services/elagage',
  },
  {
    icon: '🧱',
    title: 'Maçonnerie paysagère',
    description: 'Terrasses, allées, murets, escaliers en pierre naturelle et matériaux nobles.',
    href: '/services/maconnerie',
  },
  {
    icon: '💧',
    title: 'Arrosage automatique',
    description: "Systèmes intelligents pour une consommation d'eau optimisée.",
    href: '/services/arrosage',
  },
] as const

const steps = [
  { num: '01', title: 'Prise de contact', desc: 'Vous nous appelez ou remplissez le formulaire. Réponse sous 48h.' },
  { num: '02', title: 'Visite & Devis', desc: 'Nous visitons votre espace et vous remettons un devis détaillé et gratuit.' },
  { num: '03', title: 'Réalisation', desc: 'Nos équipes interviennent dans les délais convenus avec le plus grand soin.' },
  { num: '04', title: 'Réception', desc: 'Nous finalisons ensemble et restons disponibles pour le suivi.' },
] as const

const testimonials = [
  {
    author: 'Marie-Claire D.',
    location: 'Caluire-et-Cuire',
    rating: 5,
    text: "Résultat splendide. L'équipe a transformé notre jardin en véritable havre de paix. Je recommande sans réserve.",
  },
  {
    author: 'Pierre & Sophie M.',
    location: 'Tassin-la-Demi-Lune',
    rating: 5,
    text: 'Professionnels, ponctuels, soigneux. Notre terrasse en pierre naturelle est exactement ce dont nous rêvions.',
  },
  {
    author: 'Jean-Paul R.',
    location: 'Écully',
    rating: 5,
    text: "Contrat d'entretien depuis 3 ans. Le jardin n'a jamais été aussi beau. Rapport qualité/prix excellent.",
  },
]

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://www.lmespacevert.fr/#business',
  name: 'LM Espace Vert',
  description: 'Paysagiste créateur à Lyon. Création, entretien et aménagement de jardins haut de gamme.',
  url: 'https://www.lmespacevert.fr',
  telephone: '+33XXXXXXXXX',
  email: 'contact@lmespacevert.fr',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '[À COMPLÉTER]',
    addressLocality: '[Ville]',
    postalCode: '[CP]',
    addressCountry: 'FR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 45.748,
    longitude: 4.847,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
  ],
  priceRange: '€€',
  areaServed: {
    '@type': 'GeoCircle',
    geoMidpoint: { '@type': 'GeoCoordinates', latitude: 45.748, longitude: 4.847 },
    geoRadius: '50000',
  },
  sameAs: [],
}

export default function HomePage() {
  return (
    <>
      <JsonLd data={localBusinessSchema} />

      {/* HERO */}
      <section
        aria-label="Introduction"
        className="relative flex min-h-[90svh] flex-col items-center justify-center overflow-hidden bg-[--color-forest-900] text-center"
      >
        {/* Background placeholder (will be replaced with real video/image) */}
        <div className="absolute inset-0 bg-gradient-to-b from-[--color-forest-800] to-[--color-forest-900]" aria-hidden="true" />

        {/* Green leaf overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(94,141,104,0.15)_0%,transparent_70%)]" aria-hidden="true" />

        <div className="relative z-10 mx-auto max-w-4xl px-4">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-[--color-gold-300]">
            Paysagiste créateur · Lyon & Région
          </p>
          <h1 className="font-display text-[clamp(2.75rem,6vw,5rem)] font-normal leading-tight tracking-tight text-white">
            Vos extérieurs,{' '}
            <span className="text-[--color-gold-300] italic">repensés</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-[--color-forest-200]">
            De la conception à la réalisation, LM Espace Vert crée et entretient
            des jardins qui vous ressemblent — avec l'expertise du geste et l'amour du vivant.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/devis"
              className="inline-flex items-center gap-2 rounded-md bg-[--color-accent] px-6 py-3.5 text-base font-semibold text-[--color-accent-fg] transition-colors hover:bg-[--color-gold-500] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--color-focus]"
            >
              Devis gratuit <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link
              href="/realisations"
              className="inline-flex items-center gap-2 rounded-md border border-white/30 px-6 py-3.5 text-base font-medium text-white transition-colors hover:border-white/60 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Voir nos réalisations
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2" aria-hidden="true">
          <div className="flex h-8 w-5 items-start justify-center rounded-full border border-white/30 pt-1.5">
            <div className="h-1.5 w-1 animate-bounce rounded-full bg-white/60" />
          </div>
        </div>
      </section>

      {/* TRUST BAND */}
      <section aria-label="Gages de confiance" className="border-y border-[--color-border] bg-[--color-bg-elevated]">
        <div className="container mx-auto max-w-7xl px-4 py-6 sm:px-6">
          <ul
            role="list"
            className="flex flex-wrap items-center justify-center gap-6 text-sm text-[--color-fg-muted] sm:gap-10"
          >
            {[
              '✓ Qualipaysage certifié',
              '✓ Assurance RC Pro',
              '✓ Devis gratuit sous 48h',
              "✓ + 15 ans d'expérience",
              '✓ Équipes locales',
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 font-medium">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SERVICES */}
      <section aria-labelledby="services-heading" className="py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-[--color-accent]">
              Notre expertise
            </p>
            <h2
              id="services-heading"
              className="mt-2 font-display text-[clamp(1.75rem,3.5vw,2.5rem)] text-[--color-fg]"
            >
              Nos services paysagers
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[--color-fg-muted]">
              De la création à l'entretien, nous maîtrisons toutes les facettes de l'aménagement extérieur.
            </p>
          </div>

          <ul
            role="list"
            className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {services.map((service) => (
              <li key={service.href}>
                <Link
                  href={service.href}
                  className="card-hover group flex h-full flex-col rounded-xl border border-[--color-border] bg-[--color-bg-elevated] p-6 shadow-[--shadow-sm] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--color-focus]"
                >
                  <span className="text-3xl" aria-hidden="true">{service.icon}</span>
                  <h3 className="mt-4 font-display text-lg font-semibold text-[--color-fg]">
                    {service.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-[--color-fg-muted]">
                    {service.description}
                  </p>
                  <span className="mt-4 flex items-center gap-1 text-sm font-medium text-[--color-accent]">
                    En savoir plus <ArrowRight size={14} aria-hidden="true" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* PROCESS */}
      <section aria-labelledby="process-heading" className="bg-[--color-bg-subtle] py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-[--color-accent]">
              Comment ça marche
            </p>
            <h2
              id="process-heading"
              className="mt-2 font-display text-[clamp(1.75rem,3.5vw,2.5rem)] text-[--color-fg]"
            >
              Notre façon de travailler
            </h2>
          </div>

          <ol className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <li
                key={step.num}
                className="flex flex-col rounded-xl bg-[--color-bg-elevated] p-6 shadow-[--shadow-sm]"
              >
                <span className="font-display text-4xl font-light text-[--color-accent] opacity-80">
                  {step.num}
                </span>
                <h3 className="mt-4 font-semibold text-[--color-fg]">{step.title}</h3>
                <p className="mt-2 text-sm text-[--color-fg-muted]">{step.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section aria-labelledby="testimonials-heading" className="py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-[--color-accent]">
              Ce que disent nos clients
            </p>
            <h2
              id="testimonials-heading"
              className="mt-2 font-display text-[clamp(1.75rem,3.5vw,2.5rem)] text-[--color-fg]"
            >
              Ils nous font confiance
            </h2>
          </div>

          <ul role="list" className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <li
                key={i}
                className="flex flex-col rounded-xl border border-[--color-border] bg-[--color-bg-elevated] p-6 shadow-[--shadow-sm]"
              >
                <div className="flex gap-0.5" aria-label={`Note : ${t.rating} étoiles sur 5`}>
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={16} className="fill-[--color-accent] text-[--color-accent]" aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-sm text-[--color-fg-muted]">
                  <p>« {t.text} »</p>
                </blockquote>
                <footer className="mt-4">
                  <cite className="not-italic">
                    <p className="font-medium text-[--color-fg]">{t.author}</p>
                    <p className="text-xs text-[--color-fg-subtle]">{t.location}</p>
                  </cite>
                </footer>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FINAL CTA */}
      <section
        aria-labelledby="cta-heading"
        className="bg-[--color-forest-800] py-24 text-center"
      >
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <Leaf size={40} className="mx-auto text-[--color-gold-300]" aria-hidden="true" />
          <h2
            id="cta-heading"
            className="mt-6 font-display text-[clamp(1.75rem,3.5vw,2.5rem)] font-normal text-white"
          >
            Votre jardin idéal commence ici
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[--color-forest-200]">
            Demandez votre devis gratuit. Nous répondons sous 48h et nous déplaçons sans engagement.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/devis"
              className="inline-flex items-center gap-2 rounded-md bg-[--color-accent] px-6 py-3.5 font-semibold text-[--color-accent-fg] transition-colors hover:bg-[--color-gold-500] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--color-focus]"
            >
              Demander un devis gratuit <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <a
              href="tel:+33XXXXXXXXX"
              className="inline-flex items-center gap-2 rounded-md border border-white/30 px-6 py-3.5 font-medium text-white transition-colors hover:border-white/60 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Appeler directement
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
