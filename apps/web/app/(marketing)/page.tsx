import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, Star, CheckCircle2, ArrowRight, MapPin, Leaf, Shield, Clock, Award } from 'lucide-react'
import { JsonLd } from '@/components/seo/json-ld'
import { WeatherWidget } from '@/components/ui/weather-widget'
import { SeasonalTip } from '@/components/ui/seasonal-tip'
import { TrustBadges } from '@/components/ui/trust-badges'
import { FAQSection } from '@/components/ui/faq-section'
import { GardenCalendar } from '@/components/ui/garden-calendar'
import { StatCounter } from '@/components/ui/stat-counter'
import { articles } from '@/lib/articles'

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
    streetAddress: "Saint-Didier-au-Mont-d'Or",
    addressLocality: "Saint-Didier-au-Mont-d'Or",
    postalCode: '69370',
    addressRegion: 'Rhône',
    addressCountry: 'FR',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 45.833, longitude: 4.800 },
  areaServed: [
    "Saint-Didier-au-Mont-d'Or", 'Caluire-et-Cuire', 'Écully', 'Tassin-la-Demi-Lune',
    'Charbonnières-les-Bains', 'Limonest', 'Dardilly', 'Craponne', 'Francheville',
    "Collonges-au-Mont-d'Or", 'Neuville-sur-Saône', 'Genay', "Curis-au-Mont-d'Or",
    'Lyon', 'Villeurbanne',
  ],
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '08:00', closes: '18:00' },
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
    imgFallback: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    icon: '✂️', title: "Entretien d'espaces verts",
    description: 'Tonte, taille de haies, désherbage, fertilisation. Votre jardin est toujours impeccable.',
    href: '/services',
  },
  {
    imgFallback: 'https://images.unsplash.com/photo-1590682680695-43b964a3ae17?w=600&q=80',
    icon: '🌳', title: 'Élagage & Abattage',
    description: "Taille douce, élagage raisonné et abattage par des professionnels équipés.",
    href: '/services',
  },
  {
    imgFallback: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80',
    icon: '🌿', title: 'Création de jardins',
    description: "De la terrasse au parc de demeure, nous concevons des jardins sur mesure.",
    href: '/services',
  },
  {
    imgFallback: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80',
    icon: '🧱', title: 'Maçonnerie paysagère',
    description: "Terrasses, allées, murets et escaliers en pierres naturelles.",
    href: '/services',
  },
  {
    imgFallback: 'https://images.unsplash.com/photo-1621929747188-0b4dc28498d2?w=600&q=80',
    icon: '💧', title: 'Arrosage automatique',
    description: "Systèmes d'arrosage intelligents pour économiser l'eau.",
    href: '/services',
  },
  {
    imgFallback: 'https://images.unsplash.com/photo-1628352081506-83c43123e54d?w=600&q=80',
    icon: '🌱', title: 'Engazonnement',
    description: "Création de pelouses par semis ou gazon en rouleaux.",
    href: '/services',
  },
] as const

const steps = [
  { num: 1, title: 'Prise de contact', desc: 'Appelez-nous ou envoyez un message WhatsApp. Réponse garantie sous 24h.', icon: '📞' },
  { num: 2, title: 'Visite & Diagnostic', desc: "Nous nous déplaçons gratuitement pour évaluer votre espace.", icon: '🔍' },
  { num: 3, title: 'Devis détaillé', desc: "Devis clair et transparent sous 48h, sans surprise.", icon: '📋' },
  { num: 4, title: 'Réalisation soignée', desc: "Nos équipes interviennent dans les délais convenus avec passion.", icon: '🌿' },
] as const

const testimonials = [
  {
    author: 'Marie-Claire D.', location: 'Caluire-et-Cuire', rating: 5,
    text: "Résultat magnifique ! L'équipe a complètement transformé notre jardin. Professionnel, ponctuel et à l'écoute.",
    date: '2026-03',
  },
  {
    author: 'Philippe & Sophie R.', location: 'Écully', rating: 5,
    text: "Entretien régulier de notre propriété depuis 2 ans. Sérieux, propre et toujours de bon conseil.",
    date: '2026-02',
  },
  {
    author: 'Jean-Marc L.', location: "Saint-Didier-au-Mont-d'Or", rating: 5,
    text: "Élagage d'un grand chêne délicat. Travail parfait, sécurisé et nettoyage impeccable après intervention.",
    date: '2026-01',
  },
] as const

const zones = [
  "Saint-Didier-au-Mont-d'Or", 'Caluire-et-Cuire', 'Écully', 'Tassin',
  'Charbonnières', 'Limonest', 'Dardilly', 'Craponne',
  'Francheville', "Collonges-au-Mont-d'Or", 'Neuville-sur-Saône', 'Genay',
] as const

const whyUs = [
  { icon: <Award size={22} aria-hidden="true" />, title: 'Artisan qualifié', desc: '5+ ans d\'expérience, formation professionnelle en horticulture et paysagisme.' },
  { icon: <Shield size={22} aria-hidden="true" />, title: 'Assuré & garanti', desc: 'Responsabilité civile professionnelle. Vous êtes couverts en toutes circonstances.' },
  { icon: <Leaf size={22} aria-hidden="true" />, title: 'Éco-responsable', desc: 'Produits phyto raisonnés, compostage, préservation de la biodiversité.' },
  { icon: <Clock size={22} aria-hidden="true" />, title: 'Réactif & ponctuel', desc: 'Devis sous 48h, respect des délais et présence le jour convenu.' },
] as const

const faqItems = [
  {
    question: "Dans quelle zone géographique intervenez-vous ?",
    answer: "LM Espace Vert intervient dans un rayon de 20 km autour de Saint-Didier-au-Mont-d'Or, couvrant notamment Caluire, Écully, Tassin, Limonest, Dardilly, Craponne, Francheville et bien d'autres communes du nord-ouest lyonnais.",
  },
  {
    question: "Combien coûte un devis ?",
    answer: "Le devis est entièrement gratuit et sans engagement. Nous nous déplaçons chez vous pour évaluer le chantier et vous remettons une proposition détaillée sous 48h.",
  },
  {
    question: "Proposez-vous des contrats d'entretien annuels ?",
    answer: "Oui, nous proposons des forfaits d'entretien mensuels ou annuels adaptés à votre jardin. Ces contrats couvrent la tonte, la taille, le désherbage et la fertilisation saisonnière.",
  },
  {
    question: "Intervenez-vous pour les particuliers et les professionnels ?",
    answer: "Nous travaillons pour les deux. Particuliers souhaitant entretenir ou transformer leur jardin, copropriétés, entreprises avec espaces verts ou jardins de prestige — chaque projet est traité avec le même soin.",
  },
  {
    question: "Quelle est la différence entre élagage et abattage ?",
    answer: "L'élagage consiste à tailler sélectivement les branches d'un arbre vivant pour améliorer sa forme, sa santé ou sa sécurité. L'abattage est la coupe complète d'un arbre lorsqu'il est dangereux, mort ou gênant. Nous réalisons les deux avec le matériel adapté.",
  },
  {
    question: "Utilisez-vous des produits chimiques dans vos interventions ?",
    answer: "Nous privilégions une approche raisonnée : désherbage mécanique en priorité, traitements phytosanitaires uniquement si nécessaire, produits homologués et dosés selon les recommandations. La préservation de la biodiversité est au cœur de notre méthode.",
  },
  {
    question: "Quand est-il préférable de planter des arbres et arbustes ?",
    answer: "La période idéale pour planter des arbres et arbustes à racines nues est l'automne (octobre-novembre) et l'hiver (jusqu'en mars). Pour les végétaux en conteneur, on peut planter toute l'année en évitant les périodes de gel et de forte chaleur.",
  },
  {
    question: "Comment entretenir une pelouse en été ?",
    answer: "En été, tondez avec une lame haute (5-6 cm) pour ombrer le sol et réduire l'évaporation. Arrosez tôt le matin ou le soir, jamais en plein soleil. Suspendez les traitements par forte chaleur. Un paillage autour des massifs aide à conserver l'humidité.",
  },
]

const recentArticles = articles.slice(0, 3)

export default function HomePage() {
  return (
    <>
      <JsonLd data={localBusinessJsonLd} />

      {/* ═══════════════════════ HERO ═══════════════════════ */}
      <section className="relative min-h-[88vh] flex items-center overflow-hidden bg-gray-900" aria-label="Présentation LM Espace Vert">
        <Image
          src="/images/hero.webp"
          alt="Jardin aménagé par LM Espace Vert à Saint-Didier-au-Mont-d'Or"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
          style={{ opacity: 0.55 }}
        />
        <div className="hero-overlay absolute inset-0" />

        <div className="relative z-10 container mx-auto max-w-7xl px-4 sm:px-6 py-24">
          <div className="max-w-2xl">
            {/* Weather widget */}
            <div className="mb-5">
              <WeatherWidget />
            </div>

            <p className="badge mb-4">🌿 Paysagiste — Saint-Didier-au-Mont-d&apos;Or &amp; 20 km</p>
            <h1
              className="font-display text-white font-extrabold leading-tight"
              style={{ fontSize: 'clamp(2.25rem, 6vw, 4rem)', lineHeight: 1.08 }}
            >
              Votre jardin,<br />
              <span className="text-green-400">notre passion.</span>
            </h1>
            <p className="mt-5 text-lg text-gray-200 leading-relaxed max-w-xl">
              LM Espace Vert crée, entretient et sublime vos espaces extérieurs.
              Paysagiste professionnel basé à Saint-Didier-au-Mont-d&apos;Or,
              nous intervenons dans tout le nord-ouest lyonnais.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/devis" className="btn-primary text-base px-8 h-12">
                Devis gratuit
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <a
                href="tel:+33674734698"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 px-8 h-12 font-bold text-base text-white hover:bg-white/10 transition-colors"
              >
                <Phone size={18} aria-hidden="true" />
                06 74 73 46 98
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-5 text-sm text-gray-300">
              {['Devis gratuit en 24h', 'Rayon 20 km', '5★ sur Google (28 avis)'].map((item) => (
                <span key={item} className="flex items-center gap-1.5">
                  <CheckCircle2 size={15} className="text-green-400 flex-shrink-0" aria-hidden="true" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/50 text-xs animate-float" aria-hidden="true">
          <span>Découvrir</span>
          <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
            <path d="M8 4v16M2 14l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </section>

      {/* ═══════════════════════ STATS ANIMÉS ═══════════════════════ */}
      <section className="section-green py-10" aria-label="Chiffres clés">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <dl className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              { num: 5, suffix: '+', label: "Années d'expérience" },
              { num: 200, suffix: '+', label: 'Clients satisfaits' },
              { num: 20, suffix: ' km', label: "Rayon d'intervention" },
              { num: 5, suffix: '★', label: 'Note Google' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <dd className="font-display text-4xl font-extrabold text-white leading-none">
                  <StatCounter value={s.num} suffix={s.suffix} />
                </dd>
                <dt className="mt-1 text-sm text-green-200">{s.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ═══════════════════════ CONSEIL DE SAISON ═══════════════════════ */}
      <section className="section-white py-8 border-b border-[--color-border]">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <SeasonalTip />
        </div>
      </section>

      {/* ═══════════════════════ PRÉSENTATION ═══════════════════════ */}
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
                  Léo Maurice intervient chez les particuliers et les professionnels dans un rayon de 20 km.
                </p>
                <p>
                  De l&apos;entretien hebdomadaire à la création complète d&apos;un jardin, nous apportons
                  le même soin, la même rigueur et la même passion à chaque chantier.
                </p>
                <ul className="space-y-2.5">
                  {[
                    'Professionnel certifié et assuré (RC Pro)',
                    'Matériel professionnel et respectueux de l\'environnement',
                    'Devis gratuit et transparent sous 48h',
                    'Disponible du lundi au samedi',
                    'Pratiques éco-responsables et raisonnées',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 size={17} className="text-[--color-primary] flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/a-propos" className="btn-primary">En savoir plus</Link>
                <Link href="/realisations" className="btn-secondary">Voir nos réalisations</Link>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/presentation.webp"
                alt="Léo Maurice, paysagiste LM Espace Vert"
                width={600}
                height={500}
                className="rounded-2xl object-cover w-full shadow-lg"
                style={{ aspectRatio: '6/5' }}
              />
              {/* Google review badge */}
              <div className="absolute -bottom-4 -left-4 hidden lg:block rounded-xl p-5 shadow-lg max-w-52" style={{ backgroundColor: '#275524', color: '#ffffff' }}>
                <div className="flex items-center gap-0.5 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={13} className="fill-yellow-400 text-yellow-400" aria-hidden="true" />
                  ))}
                </div>
                <p className="text-sm font-bold">5/5 sur Google</p>
                <p className="text-xs opacity-75 mt-0.5">+28 avis vérifiés</p>
              </div>
              {/* Eco badge */}
              <div className="absolute -top-4 -right-4 hidden lg:flex eco-badge shadow-md">
                🌿 Éco-responsable
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ POURQUOI NOUS ═══════════════════════ */}
      <section className="section-pale py-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="badge badge-light mb-3">Nos engagements</p>
            <h2 className="font-display text-2xl font-bold text-[--color-fg] sm:text-3xl">
              Pourquoi choisir LM Espace Vert ?
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((item) => (
              <div key={item.title} className="flex flex-col items-start p-6 rounded-2xl bg-[--color-bg-elevated] border border-[--color-border] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
                <div className="w-12 h-12 rounded-xl bg-[--color-green-light] flex items-center justify-center text-[--color-primary] mb-4">
                  {item.icon}
                </div>
                <h3 className="font-display font-bold text-[--color-fg] mb-2">{item.title}</h3>
                <p className="text-sm text-[--color-fg-muted] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ TRUST BADGES ═══════════════════════ */}
      <section className="section-white py-12 border-b border-[--color-border]">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-[--color-fg-subtle] mb-8">
            Vos garanties
          </p>
          <TrustBadges columns={6} />
        </div>
      </section>

      {/* ═══════════════════════ SERVICES ═══════════════════════ */}
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
                key={service.title}
                href={service.href}
                className="service-card card-hover group block focus-visible:outline focus-visible:outline-2 focus-visible:outline-[--color-focus]"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                  <Image
                    src={service.imgFallback}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-108"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-2xl rounded-xl w-12 h-12 flex items-center justify-center shadow-sm" aria-hidden="true">
                    {service.icon}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-display font-bold text-[--color-fg] text-lg group-hover:text-[--color-primary] transition-colors">{service.title}</h3>
                  <p className="mt-2 text-sm text-[--color-fg-muted] leading-relaxed">{service.description}</p>
                  <p className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-[--color-primary]">
                    En savoir plus <ArrowRight size={14} aria-hidden="true" />
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/services" className="btn-primary">
              Tous nos services <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ PROCESSUS ═══════════════════════ */}
      <section className="section-white py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="badge badge-light mb-4">Comment ça marche ?</p>
            <h2 className="font-display text-3xl font-bold text-[--color-fg] sm:text-4xl">
              Un accompagnement simple de A à Z
            </h2>
          </div>
          <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <li key={step.num} className="relative flex flex-col items-start">
                <div className="process-number mb-4" aria-hidden="true">
                  <span className="text-lg">{step.icon}</span>
                </div>
                <span className="absolute top-3 left-14 hidden lg:block text-xs font-bold text-[--color-fg-subtle] -translate-y-1/2">
                  {String(step.num).padStart(2, '0')}
                </span>
                <h3 className="font-display font-bold text-[--color-fg] text-lg mb-2">{step.title}</h3>
                <p className="text-sm text-[--color-fg-muted] leading-relaxed">{step.desc}</p>
              </li>
            ))}
          </ol>
          <div className="mt-12 text-center">
            <Link href="/devis" className="btn-primary text-base px-10 h-12">
              Démarrer mon projet <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ CALENDAR ═══════════════════════ */}
      <section className="section-pale py-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div>
              <p className="badge badge-light mb-4">🗓️ Planning jardin</p>
              <h2 className="font-display text-2xl font-bold text-[--color-fg] sm:text-3xl mb-4">
                Calendrier d&apos;entretien mensuel
              </h2>
              <p className="text-[--color-fg-muted] leading-relaxed mb-6">
                Chaque mois a ses travaux prioritaires. Retrouvez les tâches essentielles
                pour maintenir votre jardin en parfait état toute l&apos;année.
              </p>
              <Link href="/blog" className="btn-secondary">
                Lire nos conseils de saison →
              </Link>
            </div>
            <GardenCalendar />
          </div>
        </div>
      </section>

      {/* ═══════════════════════ ZONE D'INTERVENTION ═══════════════════════ */}
      <section className="section-white py-20" id="zone-intervention" aria-label="Zone d'intervention">
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
                Pas de déplacement minimal — nous venons à vous.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-2">
                {zones.map((zone) => (
                  <span key={zone} className="flex items-center gap-2 text-sm text-[--color-fg-muted]">
                    <CheckCircle2 size={13} className="text-[--color-primary] flex-shrink-0" aria-hidden="true" />
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
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[--color-border]" style={{ aspectRatio: '4/3' }}>
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

      {/* ═══════════════════════ TÉMOIGNAGES ═══════════════════════ */}
      <section className="section-light py-20" aria-label="Avis clients">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="badge badge-light mb-4">⭐ Avis clients</p>
            <h2 className="font-display text-3xl font-bold text-[--color-fg] sm:text-4xl">
              Ce que disent nos clients
            </h2>
            <div className="mt-3 flex items-center justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" aria-hidden="true" />
              ))}
              <span className="ml-2 font-bold text-[--color-fg]">5.0</span>
              <span className="text-[--color-fg-muted] text-sm ml-1">/5 — 28 avis Google</span>
            </div>
          </div>

          <ul role="list" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <li key={t.author}>
                <article className="testimonial-card h-full flex flex-col">
                  <div className="flex items-center gap-0.5 mb-3">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={15} className="fill-yellow-400 text-yellow-400" aria-hidden="true" />
                    ))}
                    <span className="ml-2 text-xs font-semibold text-[--color-fg-subtle]">{t.date}</span>
                  </div>
                  <blockquote className="flex-1 text-[--color-fg-muted] text-sm leading-relaxed">
                    &ldquo;{t.text}&rdquo;
                  </blockquote>
                  <footer className="mt-4 pt-4 border-t border-[--color-border] flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-[--color-fg] text-sm">{t.author}</p>
                      <p className="text-xs text-[--color-fg-subtle] flex items-center gap-1 mt-0.5">
                        <MapPin size={10} aria-hidden="true" /> {t.location}
                      </p>
                    </div>
                    <span className="text-xs text-[--color-fg-subtle] bg-[--color-bg-subtle] px-2 py-1 rounded-full">Google</span>
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

      {/* ═══════════════════════ BLOG PREVIEW ═══════════════════════ */}
      <section className="section-white py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="badge badge-light mb-3">📚 Blog</p>
              <h2 className="font-display text-2xl font-bold text-[--color-fg] sm:text-3xl">
                Conseils de votre paysagiste
              </h2>
            </div>
            <Link href="/blog" className="hidden sm:inline-flex btn-ghost">
              Tous les articles →
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {recentArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group block overflow-hidden rounded-xl border border-[--color-border] bg-[--color-bg-elevated] shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-[--color-bg-subtle]">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <span className="chip chip-green">{article.category}</span>
                  <h3 className="mt-2 font-semibold text-sm text-[--color-fg] group-hover:text-[--color-primary] transition-colors line-clamp-2 leading-snug">
                    {article.title}
                  </h3>
                  <p className="mt-1 text-xs text-[--color-fg-subtle]">{article.readingTime} de lecture</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Link href="/blog" className="btn-secondary">Tous les articles</Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ FAQ ═══════════════════════ */}
      <section className="section-pale py-20" id="faq">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <FAQSection
            items={faqItems}
            title="Questions fréquentes"
            subtitle="FAQ"
          />
        </div>
      </section>

      {/* ═══════════════════════ CTA FINAL ═══════════════════════ */}
      <section className="section-green-gradient py-20" aria-label="Appel à l'action">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <p className="text-green-300 text-sm font-semibold uppercase tracking-widest mb-3">Prêt à commencer ?</p>
          <h2 className="font-display text-3xl font-extrabold text-white sm:text-4xl">
            Transformons votre jardin ensemble
          </h2>
          <p className="mt-4 text-lg text-green-100 max-w-xl mx-auto">
            Contactez-nous dès maintenant pour un devis gratuit et sans engagement.
            Réponse garantie sous 24h.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/devis"
              className="inline-flex items-center gap-2 rounded-full bg-white text-[--color-green-primary] font-bold text-base px-8 h-12 shadow-md hover:bg-gray-50 transition-colors"
            >
              Demander un devis gratuit
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <a
              href="tel:+33674734698"
              className="inline-flex items-center gap-2 rounded-full bg-white/15 border border-white/30 text-white font-bold text-base px-8 h-12 hover:bg-white/25 transition-colors"
            >
              <Phone size={18} aria-hidden="true" />
              06 74 73 46 98
            </a>
          </div>
          <p className="mt-6 text-sm text-green-200">
            Disponible lun–ven 8h–18h, sam 8h–12h · Devis gratuit · Rayon 20 km
          </p>
        </div>
      </section>
    </>
  )
}
