import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight, Star, Clock, MapPin, Award, Shield, Leaf, Phone,
  Scissors, TreePine, Sprout, Layers, Droplets, Flower2,
  CheckCircle, Search, ClipboardList, Calendar, Users,
} from 'lucide-react'
import { JsonLd } from '@/components/seo/json-ld'
import { articles } from '@/lib/articles'
import { StatCounter } from '@/components/ui/stat-counter'
import { FAQSection } from '@/components/ui/faq-section'

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

// #6 — liens spécifiques vers chaque page service
const services = [
  { icon: Scissors, title: "Entretien d'espaces verts", desc: 'Tonte, taille de haies, désherbage. Votre jardin toujours impeccable.', image: '/images/entretien-espaces-verts.webp', href: '/services/entretien-espaces-verts' },
  { icon: TreePine, title: 'Élagage & Abattage', desc: 'Élagage raisonné et abattage sécurisé par des professionnels équipés.', image: '/images/elagage-abattage.webp', href: '/services/elagage-abattage' },
  { icon: Sprout, title: 'Création de jardins', desc: 'Conception paysagère sur-mesure, de la terrasse au parc résidentiel.', image: '/images/realisation-1.jpg', href: '/services/creation-jardins' },
  { icon: Layers, title: 'Maçonnerie paysagère', desc: 'Terrasses, allées et murets en pierres naturelles de qualité.', image: '/images/realisation-10.jpg', href: '/services/maconnerie-paysagere' },
  { icon: Droplets, title: 'Arrosage automatique', desc: "Systèmes d'arrosage intelligents pour économiser l'eau.", image: '/images/arrosage-automatique.webp', href: '/services/arrosage-automatique' },
  { icon: Flower2, title: 'Engazonnement', desc: 'Création de pelouses par semis ou gazon en rouleaux.', image: '/images/realisation-6.jpg', href: '/services/engazonnement' },
] as const

// #17 — durées estimées sous chaque step
const processSteps = [
  { num: 1, Icon: Phone, title: 'Prise de contact', desc: 'Appelez-nous ou envoyez un message. Réponse garantie sous 24h.', duration: 'Réponse en < 2h' },
  { num: 2, Icon: Search, title: 'Visite & Diagnostic', desc: "Nous nous déplaçons gratuitement pour évaluer votre espace.", duration: 'Visite sous 3-5 jours' },
  { num: 3, Icon: ClipboardList, title: 'Devis détaillé', desc: "Devis clair et transparent sous 48h, sans surprise.", duration: 'Devis sous 48h' },
  { num: 4, Icon: CheckCircle, title: 'Réalisation soignée', desc: "Nos équipes interviennent dans les délais convenus avec passion.", duration: 'Intervention sous 2 semaines' },
] as const

const testimonials = [
  { name: "Marie L.", city: "Saint-Didier-au-Mont-d'Or", rating: 5, text: "Léo a transformé notre jardin en un vrai havre de paix. Travail soigné, ponctuel et à l'écoute. Je recommande vivement !" },
  { name: "Pierre D.", city: "Caluire-et-Cuire", rating: 5, text: "Excellent paysagiste ! Entretien régulier de notre propriété depuis 2 ans, toujours impeccable. Tarifs honnêtes et équipe sérieuse." },
  { name: "Sophie M.", city: "Écully", rating: 5, text: "Création de notre terrasse et jardin en 3 semaines. Résultat magnifique, au-delà de nos espérances. Merci à toute l'équipe !" },
] as const

// #19 — 4 articles au lieu de 3
const recentArticles = articles.slice(0, 4)

// #3 — AggregateRating standalone
const aggregateRatingJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AggregateRating',
  itemReviewed: {
    '@type': 'LocalBusiness',
    name: 'LM Espace Vert',
    '@id': 'https://www.lmespacevert.fr/#business',
  },
  ratingValue: '5.0',
  reviewCount: '28',
  bestRating: '5',
  worstRating: '1',
}

// #4 — FAQPage schema
const faqPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Dans quelle zone géographique intervenez-vous ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "LM Espace Vert intervient dans un rayon de 20 km autour de Saint-Didier-au-Mont-d'Or : Caluire-et-Cuire, Écully, Tassin-la-Demi-Lune, Charbonnières-les-Bains, Limonest, Dardilly, Craponne, Francheville, Collonges-au-Mont-d'Or, Neuville-sur-Saône et bien d'autres communes du nord-ouest lyonnais.",
      },
    },
    {
      '@type': 'Question',
      name: 'Comment obtenir un devis gratuit ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Contactez-nous par téléphone au 06 74 73 46 98, via le formulaire de contact ou directement via WhatsApp. Nous nous déplaçons gratuitement pour évaluer votre projet et vous remettons un devis détaillé sous 48h.',
      },
    },
    {
      '@type': 'Question',
      name: "Proposez-vous des contrats d'entretien annuels ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, nous proposons des contrats d'entretien sur mesure adaptés à vos besoins et à la superficie de votre jardin. Ces contrats incluent les tontes régulières, la taille de haies, le désherbage et les soins saisonniers.",
      },
    },
    {
      '@type': 'Question',
      name: 'Êtes-vous assuré en responsabilité civile professionnelle ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Absolument. LM Espace Vert dispose d'une assurance RC Pro à jour couvrant l'ensemble de nos interventions. Vous êtes pleinement protégés en cas d'incident lors de nos travaux.",
      },
    },
    {
      '@type': 'Question',
      name: 'Quelle est votre politique environnementale ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nous privilégions les produits phytosanitaires raisonnés ou biologiques, le compostage des déchets verts et la préservation de la biodiversité. Nous sommes certifiés CERTIPHYTO pour une utilisation responsable des produits phyto.',
      },
    },
    {
      '@type': 'Question',
      name: 'Intervenez-vous chez les professionnels et copropriétés ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, nous travaillons aussi bien pour les particuliers que pour les professionnels, les syndics de copropriété, les entreprises et les collectivités du nord-ouest lyonnais.',
      },
    },
  ],
}

// #19 — ItemList schema blog articles
const blogItemListJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Conseils jardinage — LM Espace Vert',
  itemListElement: articles.slice(0, 5).map((article, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: article.title,
    url: `https://www.lmespacevert.fr/blog/${article.slug}`,
  })),
}

export default function HomePage() {
  return (
    <>
      <JsonLd data={localBusinessJsonLd} />
      <JsonLd data={aggregateRatingJsonLd} />
      <JsonLd data={faqPageJsonLd} />
      <JsonLd data={blogItemListJsonLd} />

      {/* ── SECTION 1 : HERO ── */}
      <section className="relative min-h-[100svh] flex items-end" aria-label="Hero — LM Espace Vert paysagiste">
        <Image
          src="https://local-fr-public.s3.eu-west-3.amazonaws.com/prod/webtool/userfiles/150252/Travaux%20paysagers%20%C3%A0%20Saint-Didier-au-Mont-d%27Or.webp"
          alt="LM Espace Vert — Travaux paysagers à Saint-Didier-au-Mont-d'Or"
          fill
          className="object-cover object-center"
          priority
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(105deg, rgba(10,20,10,0.82) 0%, rgba(10,20,10,0.5) 45%, rgba(10,20,10,0.15) 100%)' }}
        />
        <div className="relative container mx-auto max-w-7xl px-4 sm:px-6 pb-20 lg:pb-28">
          <p className="text-xs font-semibold uppercase tracking-widest text-green-400 mb-4 flex items-center gap-2">
            <span className="inline-block w-4 h-px bg-green-400" />
            Paysagiste · Saint-Didier-au-Mont-d&apos;Or &amp; Lyon Nord
          </p>
          {/* #1 — titre outcome-focused */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] max-w-2xl mb-3">
            Votre jardin transformé,<br />
            <span style={{ color: '#80BC00' }}>résultat garanti.</span>
          </h1>
          {/* #1 — sous-titre enrichi */}
          <p className="text-white/60 text-sm font-medium mb-5 tracking-wide">
            5 ans d&apos;expérience · 200+ jardins réalisés · Devis gratuit sous 24h
          </p>
          <p className="text-white/75 text-lg max-w-xl mb-8 leading-relaxed">
            LM Espace Vert crée, entretient et sublime vos espaces extérieurs dans un rayon de 20 km autour de Saint-Didier-au-Mont-d&apos;Or&nbsp;: Caluire, Écully, Limonest, Tassin, Dardilly et tout le nord-ouest lyonnais.
          </p>
          {/* #3 & #4 — CTA textes mis à jour */}
          <div className="flex flex-wrap gap-3 mb-5">
            <Link
              href="/devis"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#80BC00', color: '#ffffff', boxShadow: 'rgb(128, 188, 0) 0px 0px 25px -14px' }}
            >
              Obtenir mon devis gratuit <ArrowRight size={14} />
            </Link>
            <Link
              href="/realisations"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold border border-white/35 text-white hover:bg-white/10 transition-colors"
            >
              Voir nos 200+ réalisations
            </Link>
          </div>
          {/* #5 — badge promo saisonnier */}
          <div className="mb-6">
            <Link
              href="/devis"
              className="inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-semibold border transition-opacity hover:opacity-80"
              style={{ borderColor: 'rgba(128,188,0,0.6)', color: '#80BC00', backgroundColor: 'rgba(128,188,0,0.08)' }}
            >
              🌱 Printemps 2026 : -10% sur la création de jardin
            </Link>
          </div>
          {/* #2 — trust badges + social-proof bar Google */}
          <div className="flex flex-wrap gap-5">
            <a
              href="https://maps.app.goo.gl/rA4sfge3evAuVJLC9"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-white/65 text-sm hover:text-white/90 transition-colors"
              aria-label="Voir nos avis Google 5 étoiles"
            >
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={12} className="fill-yellow-400 text-yellow-400" aria-hidden="true" />
              ))}
              <span className="ml-0.5">5★ Google (28 avis)</span>
            </a>
            <span className="flex items-center gap-1.5 text-white/65 text-sm">
              <Clock size={13} />Réponse sous 24h
            </span>
            <span className="flex items-center gap-1.5 text-white/65 text-sm">
              <MapPin size={13} />Rayon 20 km
            </span>
          </div>
        </div>
      </section>

      {/* ── SECTION 2 : STATS ── */}
      {/* #22 — icônes Lucide sous chaque chiffre */}
      <section className="bg-white border-y border-[#EDEDED]" aria-label="Chiffres clés">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 py-10">
          <dl className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            <div className="text-center">
              <dt className="font-display text-3xl sm:text-4xl font-bold" style={{ color: '#425D07' }}>
                <StatCounter value={5} suffix="+" />
              </dt>
              <Calendar size={16} className="mx-auto mt-1 mb-1" style={{ color: '#80BC00' }} aria-hidden="true" />
              <dd className="text-sm text-[#8C8F94]">Années d&apos;expérience</dd>
            </div>
            <div className="text-center">
              <dt className="font-display text-3xl sm:text-4xl font-bold" style={{ color: '#425D07' }}>
                <StatCounter value={200} suffix="+" />
              </dt>
              <Users size={16} className="mx-auto mt-1 mb-1" style={{ color: '#80BC00' }} aria-hidden="true" />
              <dd className="text-sm text-[#8C8F94]">Clients satisfaits</dd>
            </div>
            <div className="text-center">
              <dt className="font-display text-3xl sm:text-4xl font-bold" style={{ color: '#425D07' }}>
                <StatCounter value={20} suffix=" km" />
              </dt>
              <MapPin size={16} className="mx-auto mt-1 mb-1" style={{ color: '#80BC00' }} aria-hidden="true" />
              <dd className="text-sm text-[#8C8F94]">Rayon d&apos;intervention</dd>
            </div>
            <div className="text-center">
              <dt className="font-display text-3xl sm:text-4xl font-bold" style={{ color: '#425D07' }}>
                <StatCounter value={28} suffix=" avis" />
              </dt>
              <Star size={16} className="mx-auto mt-1 mb-1" style={{ color: '#80BC00' }} aria-hidden="true" />
              <dd className="text-sm text-[#8C8F94]">Note 5★ Google</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* ── SECTION 3 : PRÉSENTATION ── */}
      <section style={{ backgroundColor: '#F7F5F0' }} className="py-20 lg:py-24" aria-labelledby="about-heading">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="rounded-2xl overflow-hidden shadow-md">
              <Image
                src="/images/photo-equipe.webp"
                alt="Léo Maurice et l'équipe LM Espace Vert, paysagiste à Saint-Didier-au-Mont-d'Or"
                width={640}
                height={480}
                className="object-cover w-full h-[420px] lg:h-[480px]"
              />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#80BC00' }}>
                Qui sommes-nous ?
              </p>
              <h2 id="about-heading" className="font-display text-3xl sm:text-4xl font-bold mb-5" style={{ color: '#425D07' }}>
                Un artisan passionné<br />à votre service
              </h2>
              <p className="text-[#2F2F2F] leading-relaxed mb-4">
                <strong className="text-[#2F2F2F]">LM Espace Vert</strong>, c&apos;est l&apos;histoire de Léo Maurice, paysagiste créateur basé à Saint-Didier-au-Mont-d&apos;Or depuis 2019. Chaque jardin que nous créons est unique, pensé pour vous et conçu pour durer.
              </p>
              {/* #15 — ancrage chiffres */}
              <p className="text-[#2F2F2F] leading-relaxed mb-4 font-medium">
                Depuis 2019, nous avons transformé plus de 200 jardins dans le nord-ouest lyonnais.
              </p>
              <p className="text-[#8C8F94] leading-relaxed mb-6">
                De la conception à l&apos;entretien régulier, nous intervenons chez les particuliers et les professionnels dans tout le nord-ouest lyonnais.
              </p>
              {/* #16 — badges avec icônes authority */}
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="rounded-full border border-[#EDEDED] px-4 py-1.5 text-sm flex items-center gap-1.5" style={{ color: '#8C8F94' }}>
                  <Shield size={13} style={{ color: '#425D07' }} aria-hidden="true" /> Certifié RC Pro
                </span>
                <span className="rounded-full border border-[#EDEDED] px-4 py-1.5 text-sm flex items-center gap-1.5" style={{ color: '#8C8F94' }}>
                  <Award size={13} style={{ color: '#425D07' }} aria-hidden="true" /> Agréé SAP
                </span>
                <span className="rounded-full border border-[#EDEDED] px-4 py-1.5 text-sm flex items-center gap-1.5" style={{ color: '#8C8F94' }}>
                  <Leaf size={13} style={{ color: '#425D07' }} aria-hidden="true" /> Label Qualipaysage
                </span>
                <span className="rounded-full border border-[#EDEDED] px-4 py-1.5 text-sm flex items-center gap-1.5" style={{ color: '#8C8F94' }}>
                  ♻ Éco-responsable
                </span>
              </div>
              <Link
                href="/a-propos"
                className="inline-flex items-center gap-2 text-sm font-semibold hover:gap-3 transition-all"
                style={{ color: '#425D07' }}
              >
                Découvrir notre histoire <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION : AVANT / APRÈS ── */}
      <section className="bg-white py-20 lg:py-24" aria-labelledby="before-after-heading">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#80BC00' }}>Nos Transformations</p>
            <h2 id="before-after-heading" className="font-display text-3xl sm:text-4xl font-bold" style={{ color: '#425D07' }}>
              Avant &amp; Après — le résultat parle
            </h2>
            <p className="text-[#8C8F94] mt-3">
              Chaque jardin que nous transformons est une nouvelle histoire. Voici quelques exemples concrets de nos interventions.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-8">
            {[
              { before: '/images/avant1.webp', after: '/images/apres1.webp', title: "Création jardin — Saint-Didier-au-Mont-d'Or", label: 'Création complète · 3 semaines' },
              { before: '/images/avant2.webp', after: '/images/apres2.webp', title: 'Aménagement extérieur — Limonest', label: 'Maçonnerie paysagère · 2 semaines' },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl overflow-hidden border border-[#EDEDED] shadow-[rgba(0,0,0,0.06)_0px_4px_30px_0px]">
                <div className="grid grid-cols-2 gap-0.5 bg-[#EDEDED]">
                  <div className="relative">
                    <div className="relative h-52 overflow-hidden">
                      {/* #29 — loading lazy sur avant/après */}
                      <Image src={item.before} alt={`Avant — ${item.title}`} fill className="object-cover" sizes="(max-width:640px)50vw,25vw" loading="lazy" />
                    </div>
                    <span className="absolute top-2 left-2 text-xs font-bold px-2 py-0.5 rounded" style={{ backgroundColor: '#2F2F2F', color: '#ffffff' }}>AVANT</span>
                  </div>
                  <div className="relative">
                    <div className="relative h-52 overflow-hidden">
                      <Image src={item.after} alt={`Après — ${item.title}`} fill className="object-cover" sizes="(max-width:640px)50vw,25vw" loading="lazy" />
                    </div>
                    <span className="absolute top-2 left-2 text-xs font-bold px-2 py-0.5 rounded" style={{ backgroundColor: '#80BC00', color: '#ffffff' }}>APRÈS</span>
                  </div>
                </div>
                <div className="p-4 bg-white">
                  <p className="text-sm font-semibold" style={{ color: '#425D07' }}>{item.title}</p>
                  {/* #21 — label type de prestation + durée */}
                  <p className="text-xs mt-1" style={{ color: '#8C8F94' }}>{item.label}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/realisations" className="inline-flex items-center gap-2 rounded-full border border-[#EDEDED] px-6 py-3 text-sm font-semibold hover:border-[#80BC00] hover:text-[#425D07] transition-colors" style={{ color: '#2F2F2F' }}>
              Voir toutes nos réalisations <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 4 : SERVICES ── */}
      <section className="bg-white py-20 lg:py-24" aria-labelledby="services-heading">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#80BC00' }}>Nos Prestations</p>
            <h2 id="services-heading" className="font-display text-3xl sm:text-4xl font-bold" style={{ color: '#425D07' }}>
              Tous vos projets extérieurs
            </h2>
            <p className="text-[#8C8F94] mt-3">
              De la taille de haies à la création complète, nous sublimions votre espace vert.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc) => (
              // #6 — liens spécifiques par service
              <Link
                key={svc.title}
                href={svc.href}
                className="group rounded-2xl overflow-hidden bg-white border border-[#EDEDED] shadow-[rgba(0,0,0,0.06)_0px_4px_30px_0px] hover:shadow-[rgba(0,0,0,0.12)_0px_8px_40px_0px] transition-shadow flex flex-col"
              >
                <div className="relative h-44 overflow-hidden">
                  {/* #28 — loading lazy sous la fold */}
                  <Image
                    src={svc.image}
                    alt={svc.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width:640px)100vw,(max-width:1024px)50vw,33vw"
                    loading="lazy"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <svc.icon size={15} style={{ color: '#425D07' }} aria-hidden="true" />
                    <h3 className="font-display font-semibold text-sm" style={{ color: '#425D07' }}>{svc.title}</h3>
                  </div>
                  <p className="text-xs text-[#8C8F94] leading-relaxed flex-1">{svc.desc}</p>
                  {/* #7 — "En savoir plus" en bas de chaque card */}
                  <p className="text-xs font-semibold mt-3" style={{ color: '#425D07' }}>→ En savoir plus</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full border border-[#EDEDED] px-6 py-3 text-sm font-semibold hover:border-[#80BC00] hover:text-[#425D07] transition-colors"
              style={{ color: '#2F2F2F' }}
            >
              Voir toutes nos prestations <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 23 : CERTIFICATIONS & GARANTIES ── */}
      {/* Entre Services et Pourquoi nous choisir */}
      <section style={{ backgroundColor: '#F7F5F0' }} className="py-12" aria-label="Certifications et garanties">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <p className="text-center text-xs font-semibold uppercase tracking-widest mb-6" style={{ color: '#80BC00' }}>Certifications &amp; Garanties</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: 'RC Professionnelle', icon: <Shield size={13} aria-hidden="true" /> },
              { label: 'Agréé SAP', icon: <Award size={13} aria-hidden="true" /> },
              { label: 'CERTIPHYTO', icon: <Leaf size={13} aria-hidden="true" /> },
              { label: 'Husqvarna Partner', icon: <CheckCircle size={13} aria-hidden="true" /> },
              { label: 'Devis gratuit', icon: <ClipboardList size={13} aria-hidden="true" /> },
              { label: 'Satisfaction garantie', icon: <Star size={13} aria-hidden="true" /> },
            ].map(({ label, icon }) => (
              <span
                key={label}
                className="flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium"
                style={{ borderColor: '#80BC00', color: '#425D07', backgroundColor: 'rgba(128,188,0,0.06)' }}
              >
                <span style={{ color: '#80BC00' }}>{icon}</span>
                {label} ✓
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 5 : POURQUOI NOUS ── */}
      <section className="bg-white py-20 lg:py-24" aria-labelledby="why-heading">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#80BC00' }}>Nos Engagements</p>
            <h2 id="why-heading" className="font-display text-3xl sm:text-4xl font-bold" style={{ color: '#425D07' }}>
              Pourquoi choisir LM Espace Vert ?
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { Icon: Award, title: "5 ans d'expérience", desc: "Formation professionnelle en horticulture et paysagisme. Un savoir-faire reconnu dans la région lyonnaise." },
              { Icon: Star, title: '5/5 Google · 28 avis', desc: "La satisfaction de nos clients est notre meilleure carte de visite. Lisez leurs témoignages sincères.", extra: "Plus de 200 clients satisfaits depuis 2019" },
              { Icon: Leaf, title: 'Éco-responsable', desc: "Produits phyto raisonnés, compostage, préservation de la biodiversité. La nature, on y tient." },
              { Icon: Shield, title: 'Assuré RC Pro', desc: "Responsabilité civile professionnelle à jour. Vous êtes protégés en toutes circonstances." },
            ].map(({ Icon, title, desc, extra }) => (
              <div key={title} className="bg-white rounded-2xl p-6 border border-[#EDEDED] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
                <div className="w-10 h-10 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: 'rgba(128,188,0,0.1)' }}>
                  <Icon size={18} style={{ color: '#80BC00' }} aria-hidden="true" />
                </div>
                <h3 className="font-display font-bold mb-2 text-sm" style={{ color: '#425D07' }}>{title}</h3>
                <p className="text-xs text-[#8C8F94] leading-relaxed">{desc}</p>
                {/* #14 — anchoring : 200+ clients depuis 2019 */}
                {extra && (
                  <p className="text-xs font-semibold mt-2" style={{ color: '#425D07' }}>{extra}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 6 : PROCESSUS ── */}
      <section style={{ backgroundColor: '#F7F5F0' }} className="py-20 lg:py-24" aria-labelledby="process-heading">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#80BC00' }}>Comment ça marche ?</p>
            <h2 id="process-heading" className="font-display text-3xl sm:text-4xl font-bold" style={{ color: '#425D07' }}>
              Un accompagnement simple de A à Z
            </h2>
          </div>
          <ol className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map(({ num, Icon, title, desc, duration }) => (
              <li key={num} className="flex flex-col items-start gap-3">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                  style={{ backgroundColor: '#80BC00', color: '#ffffff' }}
                  aria-hidden="true"
                >
                  {num}
                </div>
                <Icon size={20} style={{ color: '#425D07' }} aria-hidden="true" />
                <div>
                  <h3 className="font-display font-bold text-sm mb-1" style={{ color: '#425D07' }}>{title}</h3>
                  <p className="text-xs text-[#8C8F94] leading-relaxed">{desc}</p>
                  {/* #17 — durée estimée */}
                  <p className="text-xs font-semibold mt-1.5" style={{ color: '#80BC00' }}>{duration}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="text-center mt-12">
            <Link
              href="/devis"
              className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#80BC00', color: '#ffffff', boxShadow: 'rgb(128, 188, 0) 0px 0px 25px -14px' }}
            >
              Démarrer mon projet <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 7 : TÉMOIGNAGES ── */}
      <section className="bg-white py-20 lg:py-24" aria-label="Avis clients">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#80BC00' }}>Avis Clients</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold" style={{ color: '#425D07' }}>Ce que disent nos clients</h2>
            <div className="flex items-center justify-center gap-1 mt-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" aria-hidden="true" />
              ))}
              <span className="ml-2 text-sm font-bold" style={{ color: '#2F2F2F' }}>5.0</span>
              <span className="text-[#8C8F94] text-sm ml-1">— 28 avis Google</span>
            </div>
          </div>
          <ul role="list" className="grid sm:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <li key={t.name}>
                <article className="bg-white rounded-2xl border border-[#EDEDED] p-6 shadow-[rgba(0,0,0,0.06)_0px_4px_30px_0px] h-full flex flex-col" style={{ backgroundColor: '#F7F5F0' }}>
                  {/* #8 — étoiles ★★★★★ visuelles au-dessus de chaque témoignage */}
                  <div className="flex items-center gap-0.5 mb-3" aria-label="Note 5 sur 5">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-base" aria-hidden="true">★</span>
                    ))}
                  </div>
                  <blockquote className="flex-1 text-sm text-[#8C8F94] leading-relaxed italic mb-4">
                    &ldquo;{t.text}&rdquo;
                  </blockquote>
                  <footer className="pt-4 border-t border-[#EDEDED]">
                    <p className="font-semibold text-sm" style={{ color: '#425D07' }}>{t.name}</p>
                    <p className="text-xs text-[#8C8F94] flex items-center gap-1 mt-0.5">
                      <MapPin size={10} aria-hidden="true" /> {t.city}
                    </p>
                    {/* #9 — badge Vérifié Google */}
                    <p className="text-xs font-semibold mt-1" style={{ color: '#80BC00' }}>✓ Vérifié Google</p>
                  </footer>
                </article>
              </li>
            ))}
          </ul>
          <div className="text-center mt-10">
            <a
              href="https://maps.app.goo.gl/rA4sfge3evAuVJLC9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#EDEDED] px-6 py-3 text-sm font-semibold hover:border-[#80BC00] hover:text-[#425D07] transition-colors"
              style={{ color: '#2F2F2F' }}
            >
              Voir tous les avis sur Google <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* ── SECTION 10 : ILS NOUS FONT CONFIANCE ── */}
      {/* Juste après la section "Pourquoi nous choisir" — badges texte partenaires */}
      <section style={{ backgroundColor: '#F7F5F0' }} className="py-12 border-t border-[#EDEDED]" aria-label="Nos partenaires et certifications">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <p className="text-center text-xs font-semibold uppercase tracking-widest mb-6" style={{ color: '#8C8F94' }}>Ils nous font confiance</p>
          <div className="flex flex-wrap justify-center gap-6 items-center">
            {['RC Pro', 'CERTIPHYTO', 'Husqvarna', 'SAP'].map((partner) => (
              <span
                key={partner}
                className="rounded-xl border px-5 py-2.5 text-sm font-bold tracking-wide"
                style={{ borderColor: '#EDEDED', color: '#425D07', backgroundColor: '#ffffff' }}
              >
                {partner}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION : ZONE D'INTERVENTION ── */}
      <section className="bg-white py-16" aria-labelledby="zone-heading">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#80BC00' }}>Zone Couverte</p>
            <h2 id="zone-heading" className="font-display text-3xl font-bold" style={{ color: '#425D07' }}>
              Paysagiste dans un rayon de 20 km
            </h2>
            <p className="text-[#8C8F94] mt-3 max-w-xl mx-auto">
              Basé à Saint-Didier-au-Mont-d&apos;Or, nous intervenons dans tout le nord-ouest lyonnais.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {[
              { ville: "Saint-Didier-au-Mont-d'Or", slug: null },
              { ville: "Caluire-et-Cuire", slug: "caluire" },
              { ville: "Écully", slug: "ecuelly" },
              { ville: "Tassin-la-Demi-Lune", slug: "tassin" },
              { ville: "Limonest", slug: "limonest" },
              { ville: "Dardilly", slug: "dardilly" },
              { ville: "Champagne-au-Mont-d'Or", slug: "champagne" },
              { ville: "Neuville-sur-Saône", slug: null },
              { ville: "Craponne", slug: null },
              { ville: "Francheville", slug: null },
              { ville: "Charbonnières-les-Bains", slug: null },
              { ville: "Collonges-au-Mont-d'Or", slug: null },
            ].map(({ ville, slug }) => (
              slug ? (
                <Link
                  key={ville}
                  href={`/secteur/${slug}`}
                  className="rounded-full border border-[#EDEDED] px-4 py-1.5 text-sm text-[#8C8F94] hover:border-[#80BC00] hover:text-[#425D07] transition-colors flex items-center gap-1.5"
                >
                  <MapPin size={11} aria-hidden="true" /> {ville}
                </Link>
              ) : (
                <span key={ville} className="rounded-full border border-[#EDEDED] px-4 py-1.5 text-sm text-[#8C8F94] flex items-center gap-1.5">
                  <MapPin size={11} aria-hidden="true" /> {ville}
                </span>
              )
            ))}
          </div>
          <div className="text-center">
            <iframe
              src="https://www.smappen.fr/app/embed/?lat=45.833&lng=4.800&d=20000&color=80BC00"
              width="100%"
              height="400"
              className="rounded-2xl border border-[#EDEDED] shadow-sm"
              style={{ maxWidth: '700px', display: 'block', margin: '0 auto' }}
              title="Zone d'intervention LM Espace Vert — 20km autour de Saint-Didier-au-Mont-d'Or"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ── SECTION 18 : GUIDE GRATUIT (Lead Magnet) ── */}
      <section style={{ backgroundColor: '#F7F5F0' }} className="py-16 border-y border-[#EDEDED]" aria-label="Guide gratuit jardinage">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-3" style={{ color: '#425D07' }}>
              📥 Téléchargez notre guide : 10 conseils pour un jardin impeccable toute l&apos;année
            </h2>
            <p className="text-[#8C8F94] mb-6 text-sm leading-relaxed">
              Profitez de nos conseils professionnels de paysagiste — entretien, taille, arrosage, engazonnement — pour garder votre jardin parfait en toutes saisons. Gratuit, sans inscription.
            </p>
            <a
              href="https://wa.me/33674734698?text=Je%20voudrais%20recevoir%20le%20guide%20jardinage"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#25D366', color: '#ffffff' }}
            >
              Recevoir le guide par WhatsApp <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* ── SECTION 8 : BLOG PREVIEW ── */}
      <section className="bg-white py-20 lg:py-24" aria-labelledby="blog-heading">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#80BC00' }}>Blog</p>
              <h2 id="blog-heading" className="font-display text-3xl sm:text-4xl font-bold" style={{ color: '#425D07' }}>
                Conseils de votre paysagiste
              </h2>
            </div>
            <Link
              href="/blog"
              className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold hover:gap-2.5 transition-all"
              style={{ color: '#425D07' }}
            >
              Voir tous les articles <ArrowRight size={14} />
            </Link>
          </div>
          {/* #19 — 4 articles, grille adaptée */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {recentArticles.map((article, index) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group block overflow-hidden rounded-2xl border border-[#EDEDED] bg-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 relative"
              >
                {/* #20 — badge "Nouveau" sur le premier article */}
                {index === 0 && (
                  <span
                    className="absolute top-2 right-2 z-10 rounded-full px-2.5 py-0.5 text-xs font-bold"
                    style={{ backgroundColor: '#80BC00', color: '#ffffff' }}
                  >
                    Nouveau
                  </span>
                )}
                <div className="relative aspect-[16/9] overflow-hidden" style={{ backgroundColor: '#F7F5F0' }}>
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(max-width:640px)100vw,(max-width:1024px)50vw,25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <span
                    className="inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold mb-2"
                    style={{ backgroundColor: 'rgba(128, 188, 0, 0.1)', color: '#425D07' }}
                  >
                    {article.category}
                  </span>
                  <h3 className="font-semibold text-sm group-hover:text-[#80BC00] transition-colors line-clamp-2 leading-snug mb-2" style={{ color: '#425D07' }}>
                    {article.title}
                  </h3>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold" style={{ color: '#425D07' }}>
                    Lire <ArrowRight size={11} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8 sm:hidden">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-full border border-[#EDEDED] px-6 py-3 text-sm font-semibold"
              style={{ color: '#2F2F2F' }}
            >
              Voir tous nos articles <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION FAQ ── */}
      <section style={{ backgroundColor: '#F7F5F0' }} className="py-20 lg:py-24" aria-labelledby="faq-heading">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <FAQSection
            title="Questions fréquentes"
            subtitle="FAQ"
            withJsonLd
            items={[
              {
                question: "Dans quelle zone géographique intervenez-vous ?",
                answer: "LM Espace Vert intervient dans un rayon de 20 km autour de Saint-Didier-au-Mont-d'Or : Caluire-et-Cuire, Écully, Tassin-la-Demi-Lune, Charbonnières-les-Bains, Limonest, Dardilly, Craponne, Francheville, Collonges-au-Mont-d'Or, Neuville-sur-Saône et bien d'autres communes du nord-ouest lyonnais.",
              },
              {
                question: "Comment obtenir un devis gratuit ?",
                answer: "Contactez-nous par téléphone au 06 74 73 46 98, via le formulaire de contact ou directement via WhatsApp. Nous nous déplaçons gratuitement pour évaluer votre projet et vous remettons un devis détaillé sous 48h.",
              },
              {
                question: "Proposez-vous des contrats d'entretien annuels ?",
                answer: "Oui, nous proposons des contrats d'entretien sur mesure adaptés à vos besoins et à la superficie de votre jardin. Ces contrats incluent les tontes régulières, la taille de haies, le désherbage et les soins saisonniers.",
              },
              {
                question: "Êtes-vous assuré en responsabilité civile professionnelle ?",
                answer: "Absolument. LM Espace Vert dispose d'une assurance RC Pro à jour couvrant l'ensemble de nos interventions. Vous êtes pleinement protégés en cas d'incident lors de nos travaux.",
              },
              {
                question: "Quelle est votre politique environnementale ?",
                answer: "Nous privilégions les produits phytosanitaires raisonnés ou biologiques, le compostage des déchets verts et la préservation de la biodiversité. Nous sommes certifiés CERTIPHYTO pour une utilisation responsable des produits phyto.",
              },
              {
                question: "Intervenez-vous chez les professionnels et copropriétés ?",
                answer: "Oui, nous travaillons aussi bien pour les particuliers que pour les professionnels, les syndics de copropriété, les entreprises et les collectivités du nord-ouest lyonnais.",
              },
            ]}
          />
        </div>
      </section>

      {/* ── SECTION 11 : OBJECTIONS ── */}
      <section className="bg-white py-16" aria-label="Réponses aux objections courantes">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#80BC00' }}>On répond à vos questions</p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold" style={{ color: '#425D07' }}>
              Ce que nos clients disent souvent
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { q: "C'est trop cher ?", a: "Nos tarifs sont adaptés à tous les budgets. Devis gratuit sans engagement." },
              { q: "Vous intervenez dans ma commune ?", a: "Oui, rayon 20 km : Caluire, Écully, Tassin, Limonest, Dardilly et plus." },
              { q: "Délais d'intervention ?", a: "Généralement 1 à 2 semaines selon la saison. Urgences : même semaine." },
            ].map(({ q, a }) => (
              <div key={q} className="rounded-2xl border border-[#EDEDED] p-5" style={{ backgroundColor: '#F7F5F0' }}>
                <p className="font-bold text-sm mb-2" style={{ color: '#425D07' }}>{q}</p>
                <p className="text-xs text-[#8C8F94] leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 9 : CTA FINALE ── */}
      {/* #13 — titre loss aversion */}
      <section style={{ backgroundColor: '#0B3D2C' }} className="py-20" aria-label="Appel à l'action — demande de devis">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-3">
            Ne laissez pas votre jardin se dégrader cet été
          </h2>
          {/* #12 — phrase de perte / loss aversion */}
          <p style={{ color: 'rgba(255,255,255,0.85)' }} className="text-base mb-2 font-medium">
            Chaque semaine sans entretien coûte plus cher à rattraper. Agissez maintenant.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="text-sm mb-10">
            Devis gratuit · Réponse sous 24h · Zone 20 km autour de Lyon
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-6">
            <Link
              href="/devis"
              className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold hover:opacity-90 transition-opacity"
              style={{ backgroundColor: '#80BC00', color: '#ffffff', boxShadow: 'rgb(128, 188, 0) 0px 0px 25px -14px' }}
            >
              Demander un devis <ArrowRight size={14} />
            </Link>
            <Link
              href="tel:+33674734698"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
            >
              <Phone size={14} /> 06 74 73 46 98
            </Link>
          </div>
          {/* #24 — numéro en grand */}
          <a
            href="tel:+33674734698"
            className="block text-2xl sm:text-3xl font-bold text-white hover:opacity-80 transition-opacity mb-4"
            aria-label="Appeler le 06 74 73 46 98"
          >
            📞 06 74 73 46 98
          </a>
          {/* #25 — lien WhatsApp */}
          <a
            href="https://wa.me/33674734698"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold hover:opacity-80 transition-opacity"
            style={{ color: '#80BC00' }}
          >
            Ou envoyez-nous un message WhatsApp <ArrowRight size={13} />
          </a>
        </div>
      </section>
    </>
  )
}
