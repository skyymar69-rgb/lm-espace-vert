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
import { ExitIntentPopup } from '@/components/ui/exit-intent-popup'
import { NewsletterSignup } from '@/components/ui/newsletter-signup'

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
  telephone: '+33672587353',
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
  { icon: Scissors, title: "Entretien d'espaces verts", desc: 'Tonte, taille de haies, désherbage. Votre jardin toujours impeccable.', image: '/images/service-taille-haie.jpg', href: '/services/entretien-espaces-verts' },
  { icon: TreePine, title: 'Élagage & Abattage', desc: 'Élagage raisonné et abattage sécurisé par des professionnels équipés.', image: '/images/service-elagage.jpg', href: '/services/elagage-abattage' },
  { icon: Sprout, title: 'Création de jardins', desc: 'Conception paysagère sur-mesure, de la terrasse au parc résidentiel.', image: '/images/service-jardin-amenage-2.jpg', href: '/services/creation-jardins' },
  { icon: Layers, title: 'Maçonnerie paysagère', desc: 'Terrasses, allées et murets en pierres naturelles de qualité.', image: '/images/service-terrasse.jpg', href: '/services/maconnerie-paysagere' },
  { icon: Droplets, title: 'Arrosage automatique', desc: "Systèmes d'arrosage intelligents pour économiser l'eau.", image: '/images/service-arrosage.jpg', href: '/services/arrosage-automatique' },
  { icon: Flower2, title: 'Engazonnement', desc: 'Création de pelouses par semis ou gazon en rouleaux.', image: '/images/service-gazon.jpg', href: '/services/engazonnement' },
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
        text: 'Contactez-nous par téléphone au 06 72 58 73 53, via le formulaire de contact ou directement via WhatsApp. Nous nous déplaçons gratuitement pour évaluer votre projet et vous remettons un devis détaillé sous 48h.',
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

      {/* Exit intent popup — déclenché sur mouseleave vers barre navigateur */}
      <ExitIntentPopup />

      {/* ── SECTION 1 : HERO ── */}
      <section className="relative min-h-[100svh] flex items-end" aria-label="Hero — LM Espace Vert paysagiste">
        <Image
          src="/images/realisation-1.webp"
          alt="LM Espace Vert — Jardin aménagé avec terrasse à Limonest"
          fill
          className="object-cover object-top"
          priority
          quality={90}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, rgba(11,61,44,0.90) 0%, rgba(11,61,44,0.60) 50%, transparent 100%)' }}
        />
        <div className="relative container mx-auto max-w-7xl px-4 sm:px-6 pb-20 lg:pb-28">
          <p className="text-xs font-semibold uppercase tracking-widest text-green-400 mb-6 flex items-center gap-2">
            <span className="inline-block w-4 h-px bg-green-400" />
            Paysagiste · Saint-Didier-au-Mont-d&apos;Or &amp; Lyon Nord
          </p>
          {/* #1 — titre outcome-focused */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] max-w-2xl mb-3 text-balance" style={{ textShadow: '0 2px 20px rgba(0,0,0,0.3)', filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.25))' }}>
            Votre jardin transformé,{' '}
            <span style={{ color: '#4A7A00' }}>résultat garanti.</span>
          </h1>
          {/* #1 — sous-titre enrichi */}
          <p className="text-white/60 text-sm font-medium mb-5 tracking-wide" style={{ animationDelay: '100ms' }} data-animate="fade-in-up">
            5 ans d&apos;expérience · 200+ jardins réalisés · Devis gratuit sous 24h
          </p>
          <p className="text-white/75 text-lg max-w-xl mb-8 leading-relaxed">
            LM Espace Vert crée, entretient et sublime vos espaces extérieurs dans un rayon de 20 km autour de Saint-Didier-au-Mont-d&apos;Or&nbsp;: Caluire, Écully, Limonest, Tassin, Dardilly et tout le nord-ouest lyonnais.
          </p>
          {/* #3 & #4 — CTA textes mis à jour */}
          <div className="flex flex-wrap gap-3 mb-5" style={{ animationDelay: '200ms' }} data-animate="fade-in-up">
            <Link
              href="/devis"
              className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-semibold transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#80BC00', color: '#0B3D2C', boxShadow: 'rgb(128, 188, 0) 0px 0px 25px -14px' }}
            >
              Obtenir mon devis gratuit <ArrowRight size={14} />
            </Link>
            <Link
              href="/realisations"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold border border-white/20 text-white/80 hover:bg-white/10 transition-colors"
            >
              Voir nos réalisations
            </Link>
          </div>
          {/* #5 — badge promo saisonnier */}
          <div className="mb-6">
            <Link
              href="/devis"
              className="inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-semibold border transition-opacity hover:opacity-80 backdrop-blur-sm"
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
              className="flex items-center gap-1.5 text-white/65 text-sm hover:text-white/90 transition-colors bg-white/10 backdrop-blur-sm rounded-full px-3 py-1"
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
      <section className="bg-white border-y border-[#EDEDED]" aria-label="Chiffres clés" style={{ backgroundImage: "radial-gradient(circle, rgba(128,188,0,0.06) 1px, transparent 1px)", backgroundSize: "24px 24px" }}>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 py-16">
          <dl className="grid grid-cols-2 sm:grid-cols-4 gap-8 divide-x divide-[#EDEDED]">
            <div className="text-center">
              <dt className="font-display text-4xl sm:text-5xl font-bold" style={{ color: '#425D07' }}>
                <StatCounter value={5} suffix=" ans" />
              </dt>
              <Calendar size={16} className="mx-auto mt-1 mb-1" style={{ color: '#80BC00' }} aria-hidden="true" />
              <dd className="text-sm font-semibold" style={{ color: '#425D07' }}>d&apos;expérience</dd>
            </div>
            <div className="text-center">
              <dt className="font-display text-4xl sm:text-5xl font-bold" style={{ color: '#425D07' }}>
                <StatCounter value={200} suffix="+" />
              </dt>
              <Users size={16} className="mx-auto mt-1 mb-1" style={{ color: '#80BC00' }} aria-hidden="true" />
              <dd className="text-sm font-semibold" style={{ color: '#425D07' }}>Jardins réalisés</dd>
            </div>
            <div className="text-center">
              <dt className="font-display text-4xl sm:text-5xl font-bold" style={{ color: '#425D07' }}>
                <StatCounter value={20} suffix=" km" />
              </dt>
              <MapPin size={16} className="mx-auto mt-1 mb-1" style={{ color: '#80BC00' }} aria-hidden="true" />
              <dd className="text-sm font-semibold" style={{ color: '#425D07' }}>Rayon d&apos;intervention</dd>
            </div>
            <div className="text-center">
              <dt className="font-display text-4xl sm:text-5xl font-bold" style={{ color: '#425D07' }}>
                <StatCounter value={28} suffix=" avis" />
              </dt>
              <Star size={16} className="mx-auto mt-1 mb-1" style={{ color: '#80BC00' }} aria-hidden="true" />
              <dd className="text-sm font-semibold" style={{ color: '#425D07' }}>Note 5★ Google</dd>
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
                src="/images/leo-portrait.webp"
                alt="Léo Maurice, fondateur et paysagiste LM Espace Vert à Saint-Didier-au-Mont-d'Or"
                width={640}
                height={480}
                className="object-cover w-full h-[420px] lg:h-[480px]"
                quality={90}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                placeholder="empty"
                loading="lazy"
              />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#425D07' }}>
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
              <p className="text-[#5C606B] leading-relaxed mb-6">
                De la conception à l&apos;entretien régulier, nous intervenons chez les particuliers et les professionnels dans tout le nord-ouest lyonnais.
              </p>
              {/* #16 — badges avec icônes authority */}
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="rounded-full border border-[#EDEDED] px-4 py-1.5 text-sm flex items-center gap-1.5" style={{ color: '#5C606B' }}>
                  <Shield size={13} style={{ color: '#425D07' }} aria-hidden="true" /> Certifié RC Pro
                </span>
                <span className="rounded-full border border-[#EDEDED] px-4 py-1.5 text-sm flex items-center gap-1.5" style={{ color: '#5C606B' }}>
                  <Award size={13} style={{ color: '#425D07' }} aria-hidden="true" /> Agréé SAP
                </span>
                <span className="rounded-full border border-[#EDEDED] px-4 py-1.5 text-sm flex items-center gap-1.5" style={{ color: '#5C606B' }}>
                  <Leaf size={13} style={{ color: '#425D07' }} aria-hidden="true" /> Label Qualipaysage
                </span>
                <span className="rounded-full border border-[#EDEDED] px-4 py-1.5 text-sm flex items-center gap-1.5" style={{ color: '#5C606B' }}>
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
            <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#425D07' }}>Nos Transformations</p>
            <h2 id="before-after-heading" className="font-display text-3xl sm:text-4xl font-bold" style={{ color: '#425D07' }}>
              Avant &amp; Après — le résultat parle
            </h2>
            <p className="text-[#5C606B] mt-3">
              Chaque jardin que nous transformons est une nouvelle histoire. Voici quelques exemples concrets de nos interventions.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-8">
            {[
              { before: '/images/scraped/avant1.webp', after: '/images/scraped/apres1.webp', title: "Création jardin — Saint-Didier-au-Mont-d'Or", label: 'Création complète · 3 semaines' },
              { before: '/images/scraped/avant2.webp', after: '/images/scraped/apres2.webp', title: 'Aménagement extérieur — Limonest', label: 'Maçonnerie paysagère · 2 semaines' },
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
                    <span className="absolute top-2 left-2 text-xs font-bold px-2 py-0.5 rounded" style={{ backgroundColor: '#80BC00', color: '#0B3D2C' }}>APRÈS</span>
                  </div>
                </div>
                <div className="p-4 bg-white">
                  <p className="text-sm font-semibold" style={{ color: '#425D07' }}>{item.title}</p>
                  {/* #21 — label type de prestation + durée */}
                  <p className="text-xs mt-1" style={{ color: '#5C606B' }}>{item.label}</p>
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
            <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#425D07' }}>Nos Prestations</p>
            <h2 id="services-heading" className="font-display text-3xl sm:text-4xl font-bold" style={{ color: '#425D07' }}>
              Tous vos projets extérieurs
            </h2>
            <p className="text-[#5C606B] mt-3">
              De la taille de haies à la création complète, nous sublimions votre espace vert.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc) => (
              // #6 — liens spécifiques par service
              <Link
                key={svc.title}
                href={svc.href}
                className="group rounded-2xl overflow-hidden bg-white border border-[#EDEDED] shadow-[0_2px_12px_rgba(0,0,0,0.06)] hover:shadow-[rgba(0,0,0,0.12)_0px_8px_40px_0px] transition-shadow flex flex-col"
              >
                <div className="relative h-44 overflow-hidden">
                  {/* #28 — loading lazy sous la fold */}
                  <Image
                    src={svc.image}
                    alt={svc.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                    quality={80}
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <svc.icon size={15} style={{ color: '#425D07' }} aria-hidden="true" />
                    <h3 className="font-display font-semibold text-sm transition-colors group-hover:text-[#80BC00]" style={{ color: '#425D07' }}>{svc.title}</h3>
                  </div>
                  <p className="text-xs text-[#5C606B] leading-relaxed flex-1">{svc.desc}</p>
                  {/* #7 — "En savoir plus" en bas de chaque card */}
                  <p className="text-xs font-semibold mt-3 flex items-center gap-1" style={{ color: '#425D07' }}>
                    En savoir plus
                    <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
                  </p>
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
          <p className="text-center text-xs font-semibold uppercase tracking-widest mb-6" style={{ color: '#425D07' }}>Certifications &amp; Garanties</p>
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
                className="flex items-center gap-3 rounded-full border px-4 py-2 text-sm font-medium"
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
            <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#425D07' }}>Nos Engagements</p>
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
              <div key={title} className="rounded-2xl p-6 border border-[#EDEDED] shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-l-[3px] hover:border-l-[#80BC00] transition-all" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #FAFDF5 100%)' }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: 'rgba(128,188,0,0.1)' }}>
                  <Icon size={20} style={{ color: '#80BC00' }} aria-hidden="true" />
                </div>
                <h3 className="font-display font-bold mb-2 text-base" style={{ color: '#425D07' }}>{title}</h3>
                <p className="text-sm text-[#5C606B] leading-relaxed">{desc}</p>
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
            <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#425D07' }}>Comment ça marche ?</p>
            <h2 id="process-heading" className="font-display text-3xl sm:text-4xl font-bold" style={{ color: '#425D07' }}>
              Un accompagnement simple de A à Z
            </h2>
          </div>
          <ol className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map(({ num, Icon, title, desc, duration }) => (
              <li key={num} className="flex flex-col items-start gap-3">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #80BC00 0%, #5A8A00 100%)', color: '#ffffff' }}
                  aria-hidden="true"
                >
                  {num}
                </div>
                <Icon size={20} style={{ color: '#425D07' }} aria-hidden="true" />
                <div>
                  <h3 className="font-display font-bold text-sm mb-1" style={{ color: '#425D07' }}>{title}</h3>
                  <p className="text-xs text-[#5C606B] leading-relaxed">{desc}</p>
                  {/* #17 — durée estimée */}
                  <p className="text-xs font-semibold mt-1.5" style={{ color: '#425D07' }}>{duration}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="text-center mt-12">
            <Link
              href="/devis"
              className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#80BC00', color: '#0B3D2C', boxShadow: 'rgb(128, 188, 0) 0px 0px 25px -14px' }}
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
            <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#425D07' }}>Avis Clients</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold" style={{ color: '#425D07' }}>Ce que disent nos clients</h2>
            <div className="flex items-center justify-center gap-0.5 mt-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" aria-hidden="true" />
              ))}
              <span className="ml-2 text-sm font-bold" style={{ color: '#2F2F2F' }}>5.0</span>
              <span className="text-[#5C606B] text-sm ml-1">— 28 avis Google</span>
            </div>
          </div>
          <ul role="list" className="grid sm:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <li key={t.name}>
                <article className="bg-white rounded-2xl border border-[#EDEDED] p-6 shadow-[rgba(0,0,0,0.06)_0px_4px_30px_0px] h-full flex flex-col" style={{ backgroundColor: '#F7F5F0' }}>
                  {/* #8 — étoiles ★★★★★ visuelles au-dessus de chaque témoignage */}
                  <div className="flex items-center gap-0.5 mb-3" role="img" aria-label="Note 5 sur 5">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-6xl leading-none opacity-20" aria-hidden="true" style={{ fontSize: '1.5rem' }}>★</span>
                    ))}
                  </div>
                  <blockquote className="flex-1 text-sm text-[#5C606B] leading-relaxed italic mb-4 border-l-4 pl-3" style={{ borderColor: '#80BC00' }}>
                    &ldquo;{t.text}&rdquo;
                  </blockquote>
                  <footer className="pt-4 border-t border-[#EDEDED]">
                    <p className="font-semibold text-sm flex items-center gap-2" style={{ color: '#425D07' }}>
                      <span style={{ color: '#425D07' }}>●</span>{t.name}
                    </p>
                    <p className="text-xs text-[#5C606B] flex items-center gap-1 mt-0.5">
                      <MapPin size={10} aria-hidden="true" /> {t.city}
                    </p>
                    {/* #9 — badge Vérifié Google */}
                    <p className="text-xs font-semibold mt-1" style={{ color: '#425D07' }}>✓ Vérifié Google</p>
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
      {/* Cartes partenaires & certifications avec icônes et descriptions */}
      <section style={{ backgroundColor: '#F7F5F0' }} className="py-14 border-t border-[#EDEDED]" aria-label="Nos partenaires et certifications">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <p className="text-center text-xs font-semibold uppercase tracking-widest mb-8" style={{ color: '#5C606B' }}>Ils nous font confiance</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { Icon: Shield, label: 'RC Pro', desc: 'Responsabilité Civile Professionnelle' },
              { Icon: Leaf, label: 'CERTIPHYTO', desc: 'Certifié produits phytosanitaires' },
              { Icon: Scissors, label: 'Husqvarna', desc: 'Matériel professionnel agréé' },
              { Icon: Users, label: 'SAP', desc: 'Service à la Personne agréé' },
            ].map(({ Icon, label, desc }) => (
              <div
                key={label}
                className="flex flex-col items-center text-center gap-3 rounded-2xl border bg-white px-5 py-6 shadow-sm"
                style={{ borderColor: '#EDEDED' }}
              >
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(128,188,0,0.10)' }}
                >
                  <Icon size={20} style={{ color: '#80BC00' }} aria-hidden="true" />
                </div>
                <p className="text-sm font-bold" style={{ color: '#425D07' }}>{label}</p>
                <p className="text-xs leading-snug" style={{ color: '#5C606B' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION : ZONE D'INTERVENTION ── */}
      <section style={{ backgroundColor: '#F7F5F0' }} className="py-16" aria-labelledby="zone-heading">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#425D07' }}>Zone Couverte</p>
            <h2 id="zone-heading" className="font-display text-3xl font-bold" style={{ color: '#425D07' }}>
              Zone d&apos;intervention — rayon de 20 km
            </h2>
            <p className="text-[#5C606B] mt-3 max-w-xl mx-auto">
              Basé à Saint-Didier-au-Mont-d&apos;Or, nous intervenons dans tout le nord-ouest lyonnais.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {[
              { ville: "Saint-Didier-au-Mont-d'Or", slug: "saint-didier" },
              { ville: "Caluire-et-Cuire", slug: "caluire" },
              { ville: "Écully", slug: "ecuelly" },
              { ville: "Tassin-la-Demi-Lune", slug: "tassin" },
              { ville: "Limonest", slug: "limonest" },
              { ville: "Dardilly", slug: "dardilly" },
              { ville: "Champagne-au-Mont-d'Or", slug: "champagne" },
              { ville: "Neuville-sur-Saône", slug: "neuville" },
              { ville: "Craponne", slug: "craponne" },
              { ville: "Francheville", slug: "francheville" },
              { ville: "Charbonnières-les-Bains", slug: "charbonnieres" },
              { ville: "Collonges-au-Mont-d'Or", slug: "collonges" },
              { ville: "Saint-Cyr-au-Mont-d'Or", slug: "saint-cyr" },
              { ville: "Curis-au-Mont-d'Or", slug: "curis" },
              { ville: "Poleymieux-au-Mont-d'Or", slug: "poleymieux" },
              { ville: "Albigny-sur-Saône", slug: "albigny" },
            ].map(({ ville, slug }) => (
              slug ? (
                <Link
                  key={ville}
                  href={`/secteur/${slug}`}
                  className="rounded-full border border-[#EDEDED] px-4 py-1.5 text-sm text-[#5C606B] hover:border-[#80BC00] hover:text-[#425D07] transition-colors flex items-center gap-1.5"
                >
                  🌿 {ville}
                </Link>
              ) : (
                <span key={ville} className="rounded-full border border-[#EDEDED] px-4 py-1.5 text-sm text-[#5C606B] flex items-center gap-1.5">
                  🌿 {ville}
                </span>
              )
            ))}
          </div>
          <div className="text-center mb-8">
            <Link
              href="/secteur"
              className="inline-flex items-center gap-2 rounded-full border px-6 py-2.5 text-sm font-semibold transition-colors hover:opacity-90"
              style={{ borderColor: '#80BC00', color: '#425D07', backgroundColor: 'rgba(128,188,0,0.08)' }}
            >
              Voir toutes les communes <ArrowRight size={14} />
            </Link>
          </div>
          <div className="text-center">
            <div
              className="relative rounded-2xl overflow-hidden border border-[#EDEDED] shadow-lg"
              style={{ maxWidth: '700px', margin: '0 auto', height: '350px' }}
            >
              <iframe
                src="https://www.smappen.fr/app/iframe/3aZB6cZtg9t_UTJH"
                width="100%"
                height="100%"
                className="absolute inset-0 w-full h-full"
                style={{ border: 'none' }}
                title="Zone d'intervention paysagiste LM Espace Vert — rayon 20 km autour de Saint-Didier-au-Mont-d'Or"
                loading="lazy"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 18 : GUIDE GRATUIT (Lead Magnet) ── */}
      <section style={{ backgroundColor: '#F7F5F0' }} className="py-16 border-y border-[#EDEDED]" aria-label="Guide gratuit jardinage">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-4" style={{ backgroundColor: 'rgba(128,188,0,0.12)', color: '#425D07' }}>
              📄 Guide PDF gratuit — 50 pages
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-3" style={{ color: '#425D07' }}>
              50 conseils pour un jardin impeccable toute l&apos;année
            </h2>
            <p className="text-[#5C606B] mb-6 text-sm leading-relaxed">
              Conseils professionnels de paysagiste — entretien, taille, arrosage, engazonnement, 4 saisons + checklist. Rédigé par Léo Maurice, fondateur de LM Espace Vert. Gratuit, sans inscription.
            </p>
            <a
              href="/50-conseils-jardin-lm-espace-vert.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold transition-all hover:opacity-90 hover:shadow-lg"
              style={{ backgroundColor: '#80BC00', color: '#0B3D2C' }}
            >
              📥 Télécharger le guide <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* ── SECTION 8 : BLOG PREVIEW ── */}
      <section className="bg-white py-20 lg:py-24" aria-labelledby="blog-heading">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#425D07' }}>Blog</p>
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
                    style={{ backgroundColor: '#80BC00', color: '#0B3D2C' }}
                  >
                    Nouveau
                  </span>
                )}
                <div className="relative aspect-[16/9] overflow-hidden" style={{ backgroundColor: '#F7F5F0' }}>
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    quality={80}
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
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <span className="text-xs text-[#5C606B]">📅 {article.date}</span>
                    {article.readingTime && (
                      <span className="inline-block rounded-full px-2 py-0.5 text-xs font-medium" style={{ backgroundColor: 'rgba(128,188,0,0.08)', color: '#425D07' }}>
                        {article.readingTime}
                      </span>
                    )}
                  </div>
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
      <section id="faq" style={{ backgroundColor: '#F7F5F0', scrollMarginTop: '5rem' }} className="py-20 lg:py-24" aria-labelledby="faq-heading">
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
                answer: "Contactez-nous par téléphone au 06 72 58 73 53, via le formulaire de contact ou directement via WhatsApp. Nous nous déplaçons gratuitement pour évaluer votre projet et vous remettons un devis détaillé sous 48h.",
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
            <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#425D07' }}>On répond à vos questions</p>
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
                <p className="text-xs text-[#5C606B] leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 9 : CTA FINALE ── */}
      {/* #13 — titre loss aversion */}
      <section style={{ background: 'linear-gradient(135deg, #0B3D2C 0%, #1A5C3A 100%)', borderTop: '4px solid #80BC00' }} className="py-24" aria-label="Appel à l'action — demande de devis">
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
              style={{ backgroundColor: '#80BC00', color: '#0B3D2C', boxShadow: '0 0 30px rgba(128,188,0,0.4)' }}
            >
              Demander un devis <ArrowRight size={14} />
            </Link>
            <a
              href="https://wa.me/33672587353"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp
            </a>
          </div>
          <p className="text-white/70 text-xs mb-4">⚡ Réponse garantie sous 2h en semaine</p>
          <p className="text-white/60 text-xs mb-6">★★★★★ · 28 avis Google</p>
          {/* #25 — lien WhatsApp */}
          <a
            href="https://wa.me/33672587353"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold hover:opacity-80 transition-opacity"
            style={{ color: '#80BC00' }}
          >
            Ou envoyez-nous un message WhatsApp <ArrowRight size={13} />
          </a>

          {/* Newsletter — inscription directement depuis la section CTA */}
          <div className="mt-10 max-w-sm mx-auto">
            <NewsletterSignup variant="compact" />
          </div>
        </div>
      </section>
    </>
  )
}


