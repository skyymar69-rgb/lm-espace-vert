import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, Star, CheckCircle2, ArrowRight, MapPin } from 'lucide-react'
import { JsonLd } from '@/components/seo/json-ld'

export const metadata: Metadata = {
  title: "Paysagiste Saint-Didier-au-Mont-d'Or & Lyon — LM Espace Vert",
  description:
    "LM Espace Vert, paysagiste professionnel basé à Saint-Didier-au-Mont-d'Or. Création de jardins, entretien, élagage, maçonnerie paysagère. Rayon 20 km. Devis gratuit en 24h.",
  alternates: { canonical: 'https://www.lmespacevert.fr' },
  openGraph: {
    title: "Paysagiste Saint-Didier-au-Mont-d'Or & Lyon — LM Espace Vert",
    description: "Votre paysagiste de confiance dans un rayon de 20 km autour de Saint-Didier-au-Mont-d'Or. Création, entretien, élagage. Devis gratuit.",
    images: [{ url: '/images/hero.webp', width: 1200, height: 630, alt: 'LM Espace Vert — Paysagiste Lyon' }],
  },
}

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LandscapingBusiness',
  name: 'LM Espace Vert',
  alternateName: 'LM Paysage',
  description: "Paysagiste professionnel basé à Saint-Didier-au-Mont-d'Or, spécialisé en création de jardins, entretien d'espaces verts, élagage et maçonnerie paysagère.",
  url: 'https://www.lmespacevert.fr',
  telephone: '+33674734698',
  email: 'contact@lmespacevert.fr',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Saint-Didier-au-Mont-d\'Or',
    addressLocality: 'Saint-Didier-au-Mont-d\'Or',
    postalCode: '69370',
    addressRegion: 'Rhône',
    addressCountry: 'FR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 45.833,
    longitude: 4.800,
  },
  areaServed: [
    "Saint-Didier-au-Mont-d'Or", 'Caluire-et-Cuire', 'Écully', 'Tassin-la-Demi-Lune',
    'Charbonnières-les-Bains', 'Limonest', 'Dardilly', 'Craponne', 'Francheville',
    "Collonges-au-Mont-d'Or", 'Neuville-sur-Saône', 'Genay', 'Curis-au-Mont-d\'Or',
    'Lyon', 'Villeurbanne',
  ],
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:00', closes: '18:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '08:00', closes: '12:00' },
  ],
  sameAs: [
    'https://www.facebook.com/people/LM-Paysage-et-jardin/61584572046303/',
    'https://www.instagram.com/lm_espacevert',
    'https://maps.app.goo.gl/rA4sfge3evAuVJLC9',
  ],
  priceRange: '€€',
  currenciesAccepted: 'EUR',
  paymentAccepted: 'Cash, Carte bancaire, Virement',
  hasMap: 'https://maps.app.goo.gl/rA4sfge3evAuVJLC9',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '28',
    bestRating: '5',
  },
}

const services = [
  {
    img: '/images/service-entretien.webp',
    imgFallback: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    icon: '✂️',
    title: 'Entretien d\'espaces verts',
    description: 'Tonte, taille de haies, désherbage, fertilisation et traitement. Votre jardin est toujours impeccable.',
    href: '/services/entretien',
  },
  {
    img: '/images/service-elagage.webp',
    imgFallback: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?w=600&q=80',
    icon: '🌳',
    title: 'Élagage & Abattage',
    description: "Taille douce, élagage raisonné et abattage par des professionnels équipés pour intervenir en toute sécurité.",
    href: '/services/elagage',
  },
  {
    img: null,
    imgFallback: 'https://images.unsplash.com/photo-1585320806297-9794b3e4aaae?w=600&q=80',
    icon: '🌿',
    title: 'Création de jardins',
    description: "De la terrasse au parc de demeure, nous concevons et réalisons des jardins sur mesure qui vous ressemblent.",
    href: '/services/creation',
  },
  {
    img: null,
    imgFallback: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80',
    icon: '🧱',
    title: 'Maçonnerie paysagère',
    description: "Terrasses, allées, murets et escaliers en pierres naturelles pour sublimer vos espaces extérieurs.",
    href: '/services/maconnerie',
  },
  {
    img: null,
    imgFallback: 'https://images.unsplash.com/photo-1621929747188-0b4dc28498d2?w=600&q=80',
    icon: '💧',
    title: 'Arrosage automatique',
    description: "Installation de systèmes d'arrosage intelligents pour économiser l'eau et préserver vos plantations.",
    href: '/services/arrosage',
  },
  {
    img: null,
    imgFallback: 'https://images.unsplash.com/photo-1628352081506-83c43123e54d?w=600&q=80',
    icon: '🌱',
    title: 'Engazonnement',
    description: "Création de pelouses par semis ou gazon en rouleaux, préparation des sols et fertilisation de départ.",
    href: '/services/engazonnement',
  },
] as const

const stats = [
  { value: '5+', label: 'Années d\'expérience' },
  { value: '200+', label: 'Clients satisfaits' },
  { value: '20 km', label: 'Rayon d\'intervention' },
  { value: '5★', label: 'Note Google' },
] as const

const steps = [
  { num: '01', title: 'Prise de contact', desc: 'Appelez-nous ou envoyez un message WhatsApp. Réponse garantie sous 24h.' },
  { num: '02', title: 'Visite & Diagnostic', desc: "Nous nous déplaçons gratuitement pour évaluer votre espace et comprendre vos envies." },
  { num: '03', title: 'Devis détaillé', desc: "Vous recevez un devis clair et transparent sous 48h, sans surprise." },
  { num: '04', title: 'Réalisation soignée', desc: "Nos équipes interviennent dans les délais convenus avec professionnalisme et passion." },
] as const

const testimonials = [
  {
    author: 'Marie-Claire D.',
    location: 'Caluire-et-Cuire',
    rating: 5,
    text: "Résultat magnifique ! L'équipe a complètement transformé notre jardin. Professionnel, ponctuel et à l'écoute. Je recommande sans réserve.",
  },
  {
    author: 'Philippe & Sophie R.',
    location: 'Écully',
    rating: 5,
    text: "Entretien régulier de notre propriété depuis 2 ans. Sérieux, propre et toujours de bon conseil. LM Espace Vert, c'est la tranquillité d'esprit garantie.",
  },
  {
    author: 'Jean-Marc L.',
    location: "Saint-Didier-au-Mont-d'Or",
    rating: 5,
    text: "Élagage d'un grand chêne délicat. Travail parfait, sécurisé et nettoyage impeccable après intervention. Vraiment satisfait du résultat.",
  },
] as const

const zones = [
  "Saint-Didier-au-Mont-d'Or", 'Caluire-et-Cuire', 'Écully', 'Tassin',
  'Charbonnières', 'Limonest', 'Dardilly', 'Craponne',
  'Francheville', "Collonges-au-Mont-d'Or", 'Neuville-sur-Saône', 'Genay',
] as const

export default function HomePage() {
  return (
    <>
      <JsonLd data={localBusinessJsonLd} />

      {/* ═══════════════════════════════════════ HERO ═══════════════════════════════════════ */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-gray-900">
        <Image
          src="/images/hero.webp"
          alt="Jardin aménagé par LM Espace Vert"
          fill
          priority
          className="object-cover object-center opacity-60"
          sizes="100vw"
        />
        <div className="hero-overlay absolute inset-0" />

        <div className="relative z-10 container mx-auto max-w-7xl px-4 sm:px-6 py-24">
          <div className="max-w-2xl">
            <p className="badge mb-4">Paysagiste — Saint-Didier-au-Mont-d&apos;Or &amp; 20 km</p>
            <h1 className="font-display text-white font-extrabold" style={{ fontSize: 'clamp(2.25rem, 6vw, 3.75rem)', lineHeight: 1.1 }}>
              Votre jardin,<br />
              <span className="text-green-400">notre passion.</span>
            </h1>
            <p className="mt-5 text-lg text-gray-200 leading-relaxed max-w-xl">
              LM Espace Vert crée, entretient et sublime vos espaces extérieurs.
              Paysagiste professionnel basé à Saint-Didier-au-Mont-d&apos;Or, nous intervenons
              dans tout le nord-ouest lyonnais.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/devis" className="btn-primary text-base px-8 h-12">
                Devis gratuit
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <a href="tel:+33674734698" className="btn-secondary text-base px-8 h-12 border-white/30 text-white hover:bg-white/10">
                <Phone size={18} aria-hidden="true" />
                06 74 73 46 98
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-gray-300">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={16} className="text-green-400" aria-hidden="true" />
                Devis gratuit en 24h
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={16} className="text-green-400" aria-hidden="true" />
                Rayon 20 km
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={16} className="text-green-400" aria-hidden="true" />
                5★ sur Google
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════ STATS ══════════════════════════════════════ */}
      <section className="section-green py-10" aria-label="Chiffres clés">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <dl className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <dd className="font-display text-4xl font-extrabold text-white leading-none">{stat.value}</dd>
                <dt className="mt-1 text-sm text-green-200">{stat.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ═══════════════════════════════════ PRESENTATION ═══════════════════════════════════ */}
      <section className="section-white py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="badge badge-light mb-4">Qui sommes-nous ?</p>
              <h2 className="font-display text-3xl font-bold text-[--color-fg] sm:text-4xl">
                Un paysagiste passionné<br />à votre service
              </h2>
              <div className="mt-6 space-y-4 text-[--color-fg-muted] leading-relaxed">
                <p>
                  <strong className="text-[--color-fg]">LM Espace Vert</strong>, c&apos;est l&apos;histoire d&apos;un artisan passionné
                  par la nature et les espaces extérieurs. Basé à Saint-Didier-au-Mont-d&apos;Or,
                  Léo Maurice et son équipe interviennent chez les particuliers et les professionnels
                  dans un rayon de 20 km.
                </p>
                <p>
                  De l&apos;entretien hebdomadaire à la création complète d&apos;un jardin, nous apportons
                  le même soin, la même rigueur et la même passion à chaque chantier.
                  Votre satisfaction est notre priorité.
                </p>
                <ul className="space-y-2">
                  {[
                    'Professionnels certifiés et assurés',
                    'Matériel professionnel et respectueux de l\'environnement',
                    'Devis gratuit et transparent sous 48h',
                    'Disponibles du lundi au samedi',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <CheckCircle2 size={18} className="text-[--color-primary] flex-shrink-0" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/a-propos" className="btn-primary">
                  En savoir plus
                </Link>
                <Link href="/realisations" className="btn-secondary">
                  Voir nos réalisations
                </Link>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/presentation.webp"
                alt="Léo Maurice, paysagiste LM Espace Vert"
                width={600}
                height={500}
                className="rounded-lg object-cover w-full shadow-lg"
                style={{ aspectRatio: '6/5' }}
              />
              <div className="absolute -bottom-4 -left-4 hidden lg:block bg-[--color-primary] text-white rounded-lg p-5 shadow-lg max-w-48">
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" aria-hidden="true" />
                  ))}
                </div>
                <p className="text-sm font-semibold">5/5 sur Google</p>
                <p className="text-xs text-green-200 mt-0.5">+28 avis clients</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════ SERVICES ════════════════════════════════════ */}
      <section className="section-light py-20" id="services">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="badge badge-light mb-4">Nos prestations</p>
            <h2 className="font-display text-3xl font-bold text-[--color-fg] sm:text-4xl">
              Tous vos besoins paysagers<br />en un seul prestataire
            </h2>
            <p className="mt-4 text-[--color-fg-muted] max-w-xl mx-auto">
              LM Espace Vert prend en charge l&apos;ensemble de vos projets extérieurs,
              de la conception à l&apos;entretien régulier.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="service-card card-hover block focus-visible:outline focus-visible:outline-2 focus-visible:outline-[--color-focus]"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                  <Image
                    src={service.img ?? service.imgFallback}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-2xl rounded-lg w-12 h-12 flex items-center justify-center shadow-sm">
                    {service.icon}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-display font-bold text-[--color-fg] text-lg">{service.title}</h3>
                  <p className="mt-2 text-sm text-[--color-fg-muted] leading-relaxed">{service.description}</p>
                  <p className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-[--color-primary]">
                    En savoir plus
                    <ArrowRight size={15} aria-hidden="true" />
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/services" className="btn-primary">
              Tous nos services
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════ PROCESSUS ═══════════════════════════════════ */}
      <section className="section-white py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="badge badge-light mb-4">Comment ça marche ?</p>
            <h2 className="font-display text-3xl font-bold text-[--color-fg] sm:text-4xl">
              Un accompagnement simple<br />de A à Z
            </h2>
          </div>
          <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <li key={step.num} className="flex flex-col items-start">
                <div className="process-number mb-4">{step.num}</div>
                <h3 className="font-display font-bold text-[--color-fg] text-lg mb-2">{step.title}</h3>
                <p className="text-sm text-[--color-fg-muted] leading-relaxed">{step.desc}</p>
              </li>
            ))}
          </ol>
          <div className="mt-12 text-center">
            <Link href="/devis" className="btn-primary text-base px-10 h-12">
              Démarrer mon projet
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════ ZONE D'INTERVENTION ══════════════════════════════ */}
      <section className="section-light py-20" id="zone-intervention" aria-label="Zone d'intervention">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="badge badge-light mb-4">
                <MapPin size={14} className="inline mr-1" aria-hidden="true" />
                Zone d&apos;intervention
              </p>
              <h2 className="font-display text-3xl font-bold text-[--color-fg] sm:text-4xl">
                Nous intervenons dans un rayon de{' '}
                <span className="text-[--color-primary]">20 km</span>{' '}
                autour de Saint-Didier-au-Mont-d&apos;Or
              </h2>
              <p className="mt-4 text-[--color-fg-muted] leading-relaxed">
                Notre équipe se déplace rapidement chez vous dans tout le nord-ouest lyonnais.
                Pas de déplacement minimal, pas de zone exclue — nous venons à vous.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-2">
                {zones.map((zone) => (
                  <span key={zone} className="flex items-center gap-2 text-sm text-[--color-fg-muted]">
                    <CheckCircle2 size={14} className="text-[--color-primary] flex-shrink-0" aria-hidden="true" />
                    {zone}
                  </span>
                ))}
              </div>
              <div className="mt-8">
                <Link href="/devis" className="btn-primary">
                  Je suis dans la zone — Devis gratuit
                </Link>
              </div>
            </div>

            {/* Smappen embed */}
            <div className="relative rounded-lg overflow-hidden shadow-lg" style={{ aspectRatio: '4/3' }}>
              <iframe
                src="https://www.smappen.fr/app/embed/?lat=45.833&lng=4.800&zoom=11&duration=20&durationUnit=km&travelMode=car&showCityNames=true"
                title="Zone d'intervention LM Espace Vert — 20 km autour de Saint-Didier-au-Mont-d'Or"
                className="w-full h-full border-0"
                loading="lazy"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════ TÉMOIGNAGES ══════════════════════════════════ */}
      <section className="section-white py-20" aria-label="Avis clients">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="badge badge-light mb-4">Avis clients</p>
            <h2 className="font-display text-3xl font-bold text-[--color-fg] sm:text-4xl">
              Ce que disent nos clients
            </h2>
            <div className="mt-3 flex items-center justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" aria-hidden="true" />
              ))}
              <span className="ml-2 font-semibold text-[--color-fg]">5.0</span>
              <span className="text-[--color-fg-muted] text-sm">/5 — 28 avis Google</span>
            </div>
          </div>

          <ul role="list" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <li key={t.author}>
                <article className="testimonial-card h-full flex flex-col">
                  <div className="flex items-center gap-0.5 testimonial-stars mb-3">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" aria-hidden="true" />
                    ))}
                  </div>
                  <blockquote className="flex-1 text-[--color-fg-muted] text-sm leading-relaxed italic">
                    &ldquo;{t.text}&rdquo;
                  </blockquote>
                  <footer className="mt-4 pt-4 border-t border-[--color-border]">
                    <p className="font-semibold text-[--color-fg] text-sm">{t.author}</p>
                    <p className="text-xs text-[--color-fg-subtle] flex items-center gap-1 mt-0.5">
                      <MapPin size={11} aria-hidden="true" />
                      {t.location}
                    </p>
                  </footer>
                </article>
              </li>
            ))}
          </ul>

          <div className="mt-10 text-center">
            <a
              href="https://maps.app.goo.gl/rA4sfge3evAuVJLC9"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Voir tous les avis sur Google
            </a>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════ CTA FINAL ════════════════════════════════════ */}
      <section className="section-green py-20" aria-label="Appel à l'action">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <h2 className="font-display text-3xl font-extrabold text-white sm:text-4xl">
            Prêt à transformer votre jardin ?
          </h2>
          <p className="mt-4 text-lg text-green-100 max-w-xl mx-auto">
            Contactez-nous dès maintenant pour un devis gratuit et sans engagement.
            Réponse garantie sous 24h.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/devis"
              className="inline-flex items-center gap-2 rounded-[24px] bg-white text-[--color-primary] font-bold text-base px-8 h-12 shadow-md transition-all hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
            >
              Demander un devis gratuit
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <a
              href="tel:+33674734698"
              className="inline-flex items-center gap-2 rounded-[24px] bg-white/10 text-white font-bold text-base px-8 h-12 border border-white/30 transition-all hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
            >
              <Phone size={18} aria-hidden="true" />
              06 74 73 46 98
            </a>
          </div>
          <p className="mt-6 text-sm text-green-200">
            Disponible du lundi au samedi · Devis gratuit · Rayon 20 km
          </p>
        </div>
      </section>
    </>
  )
}
