import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight, Star, Clock, MapPin, Award, Shield, Leaf, Phone,
  Scissors, TreePine, Sprout, Layers, Droplets, Flower2,
  CheckCircle, Search, ClipboardList, Calendar, Users,
  FileText, Download,
} from 'lucide-react'
import { JsonLd } from '@/components/seo/json-ld'
import { articles } from '@/lib/articles'
import { HeroSlideshow } from '@/components/ui/hero-slideshow'
import { BeforeAfterSlider } from '@/components/ui/before-after-slider'
import { PartnersMarquee } from '@/components/sections/partners-marquee'
import { GOOGLE_RATING, GOOGLE_RATING_NUM, GOOGLE_REVIEWS, EXPERIENCE_YEARS } from '@/lib/business'
import { StatCounter } from '@/components/ui/stat-counter'
import { FAQSection } from '@/components/ui/faq-section'
import { ExitIntentPopup } from '@/components/ui/exit-intent-popup'
import { NewsletterSignup } from '@/components/ui/newsletter-signup'
import { GoogleReviewsBadge } from '@/components/ui/google-reviews-badge'
import { GoogleReviewsCarousel } from '@/components/sections/google-reviews-carousel'

export const metadata: Metadata = {
  title: "Paysagiste Saint-Didier-au-Mont-d'Or & Lyon — LM Espace Vert",
  description:
    "LM Espace Vert, paysagiste professionnel basé à Saint-Didier-au-Mont-d'Or. Création de jardins, entretien, élagage, maçonnerie paysagère. Rayon 20 km. Devis gratuit en 24h.",
  alternates: { canonical: 'https://www.lmespacevert.fr' },
  openGraph: {
    title: "Paysagiste Saint-Didier-au-Mont-d'Or & Lyon — LM Espace Vert",
    description: "Votre paysagiste de confiance dans un rayon de 20 km autour de Saint-Didier-au-Mont-d'Or. Création, entretien, élagage. Devis gratuit.",
    images: [{ url: '/images/realisations/lm-09.webp', width: 1200, height: 630, alt: 'LM Espace Vert — Jardin paysager contemporain avec piscine près de Lyon' }],
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
    'https://maps.app.goo.gl/KkB9EVAchidTC4G59',
  ],
  priceRange: '€€',
  currenciesAccepted: 'EUR',
  paymentAccepted: 'Cash, Carte bancaire, Virement',
  hasMap: 'https://maps.app.goo.gl/KkB9EVAchidTC4G59',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: GOOGLE_RATING_NUM,
    reviewCount: String(GOOGLE_REVIEWS),
    bestRating: '5',
  },
}

// #6 — liens spécifiques vers chaque page service
const services = [
  { icon: Scissors, title: "Entretien d'espaces verts", desc: 'Tonte, taille de haies, désherbage. Votre jardin toujours impeccable.', image: '/images/realisations/lm-08.webp', href: '/services/entretien-espaces-verts' },
  { icon: TreePine, title: 'Élagage & Abattage', desc: 'Élagage raisonné et abattage sécurisé par des professionnels équipés.', image: '/images/realisations/lm-20.webp', href: '/services/elagage-abattage' },
  { icon: Sprout, title: 'Création de jardins', desc: 'Conception paysagère sur-mesure, de la terrasse au parc résidentiel.', image: '/images/realisations/lm-18.webp', href: '/services/creation-jardins' },
  { icon: Layers, title: 'Maçonnerie paysagère', desc: 'Terrasses, allées et murets en pierres naturelles de qualité.', image: '/images/realisations/lm-28.webp', href: '/services/maconnerie-paysagere' },
  { icon: Droplets, title: 'Arrosage automatique', desc: "Systèmes d'arrosage intelligents pour économiser l'eau.", image: '/images/realisations/lm-11.webp', href: '/services/arrosage-automatique' },
  { icon: Flower2, title: 'Engazonnement', desc: 'Création de pelouses par semis ou gazon en rouleaux.', image: '/images/realisations/lm-04.webp', href: '/services/engazonnement' },
] as const

// #17 — durées estimées sous chaque step
const processSteps = [
  { num: 1, Icon: Phone, title: 'Prise de contact', desc: 'Appelez-nous ou envoyez un message. Réponse garantie sous 24h.', duration: 'Réponse en < 2h' },
  { num: 2, Icon: Search, title: 'Visite & Diagnostic', desc: "Nous nous déplaçons gratuitement pour évaluer votre espace.", duration: 'Visite sous 3-5 jours' },
  { num: 3, Icon: ClipboardList, title: 'Devis détaillé', desc: "Devis clair et transparent sous 48h, sans surprise.", duration: 'Devis sous 48h' },
  { num: 4, Icon: CheckCircle, title: 'Réalisation soignée', desc: "Nos équipes interviennent dans les délais convenus avec passion.", duration: 'Intervention sous 2 semaines' },
] as const

// Avis réels issus de la fiche Google « LM Espace Vert » (5/5 · 20 avis) — repli si le widget n'est pas configuré
const testimonials = [
  { name: "Patricia Ferrere", date: "Il y a 1 semaine", rating: 5, text: "Envoi des devis et interventions très rapides et qualitatives. Léo est de très bon conseil, disponible pour échanger. Nous le conseillons !" },
  { name: "Gaelle Jaine", date: "Il y a 1 semaine", rating: 5, text: "Un début de collaboration qui se met en place de manière très fluide ! Merci !" },
  { name: "Marie-Laurence Coquet", date: "Il y a 3 semaines", rating: 5, text: "Travail soigné et de qualité. Entreprise très sérieuse." },
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
  ratingValue: GOOGLE_RATING_NUM,
  reviewCount: String(GOOGLE_REVIEWS),
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
        {/* Slideshow 3 photos HD + curseur rond transparent */}
        <HeroSlideshow />
        {/* Overlay : voile latéral (lisibilité du texte à gauche) — la photo du jardin reste bien visible à droite et en haut */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(36,50,56,0.78) 0%, rgba(36,50,56,0.38) 42%, rgba(36,50,56,0.06) 72%, transparent 100%)' }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(90deg, rgba(36,50,56,0.80) 0%, rgba(36,50,56,0.38) 38%, transparent 72%)' }}
        />
        <div className="relative container mx-auto max-w-7xl px-6 sm:px-8 pb-24 lg:pb-36">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-8 flex items-center gap-3" style={{ color: '#9E4B47' }}>
            <span className="inline-block w-8 h-px" style={{ backgroundColor: '#9E4B47' }} />
            Paysagiste · Saint-Didier-au-Mont-d&apos;Or &amp; Lyon Nord
          </p>
          {/* #1 — titre outcome-focused */}
          <h1 className="font-display font-extrabold text-white leading-[1.03] max-w-3xl mb-4 text-balance" style={{ fontSize: 'clamp(2.75rem, 6.5vw, 5rem)', letterSpacing: '-0.025em', textShadow: '0 4px 32px rgba(0,0,0,0.35)' }}>
            Votre jardin transformé,{' '}
            <span style={{ color: '#c8dc6e' }}>résultat garanti.</span>
          </h1>
          {/* #1 — sous-titre enrichi */}
          <p className="text-sm font-semibold mb-6 tracking-[0.12em] uppercase" style={{ color: 'rgba(116,154,48,0.95)' }} data-animate="fade-in-up">
            {EXPERIENCE_YEARS} ans d&apos;expérience · 200+ jardins réalisés · Devis gratuit sous 24h
          </p>
          <p className="text-lg max-w-xl mb-10 leading-[1.75]" style={{ color: 'rgba(255,255,255,0.82)' }}>
            LM Espace Vert crée, entretient et sublime vos espaces extérieurs dans un rayon de 20 km autour de Saint-Didier-au-Mont-d&apos;Or&nbsp;: Caluire, Écully, Limonest, Tassin, Dardilly et tout le nord-ouest lyonnais.
          </p>
          {/* #3 & #4 — CTA textes mis à jour */}
          <div className="flex flex-wrap gap-4 mb-6" data-animate="fade-in-up">
            <Link
              href="/devis"
              className="inline-flex items-center gap-2 rounded-full px-9 py-4 text-sm font-bold transition-all hover:scale-[1.02]"
              style={{ backgroundColor: '#9E4B47', color: '#ffffff', boxShadow: '0 0 40px rgba(158,75,71,0.45), 0 4px 16px rgba(0,0,0,0.25)' }}
            >
              Obtenir mon devis gratuit <ArrowRight size={15} />
            </Link>
            <Link
              href="/realisations"
              className="inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-semibold backdrop-blur-sm transition-all hover:bg-white/15"
              style={{ border: '1px solid rgba(255,255,255,0.30)', color: 'rgba(255,255,255,0.92)' }}
            >
              Voir nos réalisations
            </Link>
          </div>
          {/* #2 — trust badges + social-proof bar Google */}
          <div className="flex flex-wrap gap-4">
            <a
              href="https://maps.app.goo.gl/KkB9EVAchidTC4G59"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm hover:opacity-90 transition-opacity backdrop-blur-sm rounded-full px-4 py-1.5"
              style={{ color: 'rgba(255,255,255,0.72)', backgroundColor: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }}
              aria-label="Voir nos avis Google 5 étoiles"
            >
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={12} className="fill-yellow-400 text-yellow-400" aria-hidden="true" />
              ))}
              <span className="ml-0.5">{GOOGLE_RATING}/5 Google · {GOOGLE_REVIEWS} avis</span>
            </a>
            <span className="flex items-center gap-1.5 text-sm" style={{ color: 'rgba(255,255,255,0.58)' }}>
              <Clock size={13} />Réponse sous 24h
            </span>
            <span className="flex items-center gap-1.5 text-sm" style={{ color: 'rgba(255,255,255,0.58)' }}>
              <MapPin size={13} />Rayon 20 km
            </span>
          </div>
        </div>
        {/* Indicateur de défilement */}
        <div className="hero-scroll-cue" aria-hidden="true">
          <span>Découvrir</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg>
        </div>
      </section>

      {/* ── SECTION 2 : STATS ── */}
      {/* #22 — icônes Lucide sous chaque chiffre */}
      <section className="border-y border-[#E4E0D5]" aria-label="Chiffres clés" style={{ backgroundColor: '#F4F1E9', backgroundImage: "radial-gradient(circle, rgba(74,99,32,0.07) 1px, transparent 1px)", backgroundSize: "28px 28px" }}>
        <div className="container mx-auto max-w-7xl px-6 sm:px-8 py-20">
          <dl className="grid grid-cols-2 sm:grid-cols-4 gap-0 divide-x divide-[#DDD9CE]">
            <div className="text-center px-6 py-2">
              <dt className="font-display font-black leading-none" style={{ fontSize: 'clamp(3rem, 7vw, 5rem)', color: '#243238', letterSpacing: '-0.03em' }}>
                <StatCounter value={EXPERIENCE_YEARS} suffix=" ans" />
              </dt>
              <Calendar size={18} className="mx-auto mt-2 mb-2" style={{ color: '#749A30' }} aria-hidden="true" />
              <dd className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#5C606B' }}>d&apos;expérience</dd>
            </div>
            <div className="text-center px-6 py-2">
              <dt className="font-display font-black leading-none" style={{ fontSize: 'clamp(3rem, 7vw, 5rem)', color: '#243238', letterSpacing: '-0.03em' }}>
                <StatCounter value={200} suffix="+" />
              </dt>
              <Users size={18} className="mx-auto mt-2 mb-2" style={{ color: '#749A30' }} aria-hidden="true" />
              <dd className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#5C606B' }}>Jardins réalisés</dd>
            </div>
            <div className="text-center px-6 py-2">
              <dt className="font-display font-black leading-none" style={{ fontSize: 'clamp(3rem, 7vw, 5rem)', color: '#243238', letterSpacing: '-0.03em' }}>
                <StatCounter value={20} suffix=" km" />
              </dt>
              <MapPin size={18} className="mx-auto mt-2 mb-2" style={{ color: '#749A30' }} aria-hidden="true" />
              <dd className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#5C606B' }}>Rayon d&apos;intervention</dd>
            </div>
            <div className="text-center px-6 py-2">
              <dt className="font-display font-black leading-none" style={{ fontSize: 'clamp(3rem, 7vw, 5rem)', color: '#243238', letterSpacing: '-0.03em' }}>
                <StatCounter value={GOOGLE_REVIEWS} suffix=" avis" />
              </dt>
              <Star size={18} className="mx-auto mt-2 mb-2" style={{ color: '#749A30' }} aria-hidden="true" />
              <dd className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#5C606B' }}>Note {GOOGLE_RATING}/5 Google</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* ── SECTION 3 : PRÉSENTATION ── */}
      <section style={{ backgroundColor: '#F4F1E9' }} className="py-28 lg:py-36" aria-labelledby="about-heading">
        <div className="container mx-auto max-w-7xl px-6 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <div
              className="rounded-2xl shadow-[0_20px_60px_rgba(36,50,56,0.10)] flex items-center justify-center"
              style={{ aspectRatio: '4/3', backgroundColor: '#FFFFFF', border: '1px solid #E7E2D6', padding: '2.5rem' }}
            >
              <Image
                src="/logo.png"
                alt="Logo LM Espace Vert — paysagiste à Saint-Didier-au-Mont-d'Or"
                width={520}
                height={200}
                className="w-full h-auto object-contain"
                style={{ maxWidth: '380px' }}
                quality={90}
                loading="lazy"
              />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] mb-3" style={{ color: '#9E4B47' }}>
                Qui sommes-nous ?
              </p>
              <h2 id="about-heading" className="font-display mb-5 font-bold" style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.25rem)', color: '#243238', lineHeight: 1.1 }}>
                Un artisan passionné<br />à votre service
              </h2>
              <p className="leading-[1.75] mb-4" style={{ color: '#2F2F2F', fontSize: '1.0625rem' }}>
                <strong className="text-[#243238]">LM Espace Vert</strong>, c&apos;est l&apos;histoire de Léo Maurice, paysagiste créateur basé à Saint-Didier-au-Mont-d&apos;Or depuis 2019. Chaque jardin que nous créons est unique, pensé pour vous et conçu pour durer.
              </p>
              {/* #15 — ancrage chiffres */}
              <p className="leading-[1.75] mb-4 font-semibold" style={{ color: '#243238', fontSize: '1.0625rem' }}>
                Depuis 2019, nous avons transformé plus de 200 jardins dans le nord-ouest lyonnais.
              </p>
              <p className="leading-[1.75] mb-6" style={{ color: '#5C606B', fontSize: '1.0625rem' }}>
                De la{' '}
                <Link href="/services/creation-jardins" className="underline decoration-dotted underline-offset-2 hover:text-[#243238] transition-colors" style={{ color: '#4A6320' }}>
                  conception de jardins
                </Link>{' '}
                à l&apos;
                <Link href="/services/entretien-espaces-verts" className="underline decoration-dotted underline-offset-2 hover:text-[#243238] transition-colors" style={{ color: '#4A6320' }}>
                  entretien régulier
                </Link>
                , nous intervenons chez les particuliers et les professionnels dans tout le{' '}
                <Link href="/secteurs" className="underline decoration-dotted underline-offset-2 hover:text-[#243238] transition-colors" style={{ color: '#4A6320' }}>
                  nord-ouest lyonnais
                </Link>
                .
              </p>
              {/* #16 — badges avec icônes authority */}
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="rounded-full border px-4 py-1.5 text-sm flex items-center gap-1.5" style={{ borderColor: '#DDD9CE', color: '#5C606B' }}>
                  <Shield size={13} style={{ color: '#4A6320' }} aria-hidden="true" /> Certifié RC Pro
                </span>
                <span className="rounded-full border px-4 py-1.5 text-sm flex items-center gap-1.5" style={{ borderColor: '#DDD9CE', color: '#5C606B' }}>
                  <Award size={13} style={{ color: '#4A6320' }} aria-hidden="true" /> Agréé SAP
                </span>
                <span className="rounded-full border px-4 py-1.5 text-sm flex items-center gap-1.5" style={{ borderColor: '#DDD9CE', color: '#5C606B' }}>
                  <Leaf size={13} style={{ color: '#4A6320' }} aria-hidden="true" /> CERTIPHYTO
                </span>
                <span className="rounded-full border px-4 py-1.5 text-sm flex items-center gap-1.5" style={{ borderColor: '#DDD9CE', color: '#5C606B' }}>
                  <Leaf size={13} style={{ color: '#4A6320' }} aria-hidden="true" /> Éco-responsable
                </span>
              </div>
              <Link
                href="/a-propos"
                className="inline-flex items-center gap-2 text-sm font-semibold hover:gap-3 transition-all"
                style={{ color: '#4A6320' }}
              >
                Découvrir notre histoire <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION : AVANT / APRÈS ── */}
      <section className="bg-white py-28 lg:py-36" aria-labelledby="before-after-heading">
        <div className="container mx-auto max-w-7xl px-6 sm:px-8">
          <div data-reveal className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] mb-3" style={{ color: '#9E4B47' }}>Nos Transformations</p>
            <h2 id="before-after-heading" className="font-display font-bold" style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.25rem)', color: '#243238', letterSpacing: '-0.02em' }}>
              Avant &amp; Après — le résultat parle
            </h2>
            <p className="mt-4 leading-[1.7]" style={{ color: '#5C606B', fontSize: '1.0625rem' }}>
              Chaque jardin que nous transformons est une nouvelle histoire. Voici quelques exemples concrets de nos{' '}
              <Link href="/avant-apres" className="underline decoration-dotted underline-offset-2 hover:text-[#243238] transition-colors" style={{ color: '#4A6320' }}>
                interventions avant/après
              </Link>
              .
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                title: 'Débroussaillage et remise en état',
                sub: 'Nettoyage, taille et entretien',
                before: { src: '/images/avant-apres/avant1.webp', alt: 'Avant — végétation envahissante le long d’un mur' },
                after: { src: '/images/avant-apres/apres1.webp', alt: 'Après — espace débroussaillé et mur dégagé' },
              },
              {
                title: 'Aménagement complet de jardin',
                sub: 'Pelouse, allée pavée et remise en état',
                before: { src: '/images/avant-apres/avant2.webp', alt: 'Avant — jardin en friche avant aménagement paysager' },
                after: { src: '/images/avant-apres/apres2.webp', alt: 'Après — jardin aménagé avec pelouse soignée et allée pavée' },
              },
            ].map((p) => (
              <div
                key={p.title}
                className="rounded-2xl overflow-hidden bg-white shadow-[0_8px_40px_rgba(0,0,0,0.08)]"
                style={{ border: '1px solid rgba(221,217,206,0.8)' }}
              >
                <BeforeAfterSlider before={p.before} after={p.after} height={340} />
                <div className="px-6 py-5">
                  <p className="text-base font-bold" style={{ color: '#243238' }}>{p.title}</p>
                  <p className="text-sm mt-1.5 flex items-center gap-1.5" style={{ color: '#5C606B' }}>
                    <span className="inline-block w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#749A30' }} aria-hidden="true" />
                    {p.sub} · <span style={{ color: '#9E4B47', fontWeight: 600 }}>glissez le curseur</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/realisations" className="inline-flex items-center gap-2 rounded-full border px-7 py-3.5 text-sm font-semibold hover:border-[#4A6320] hover:text-[#243238] transition-colors duration-300" style={{ color: '#2F2F2F', borderColor: '#DDD9CE' }}>
              Voir toutes nos réalisations <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION : PARTENAIRES (logos défilants) ── */}
      <PartnersMarquee />

      {/* ── SECTION 4 : SERVICES ── */}
      <section id="services" className="py-28 lg:py-36" style={{ backgroundColor: '#F4F1E9' }} aria-labelledby="services-heading">
        <div className="container mx-auto max-w-7xl px-6 sm:px-8">
          <div data-reveal className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] mb-3" style={{ color: '#9E4B47' }}>Nos Prestations</p>
            <h2 id="services-heading" className="font-display font-bold" style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.25rem)', color: '#243238', letterSpacing: '-0.02em' }}>
              Tous vos projets extérieurs
            </h2>
            <p className="mt-4 leading-[1.7]" style={{ color: '#5C606B', fontSize: '1.0625rem' }}>
              De la taille de haies à la création complète, nous sublimons chaque espace extérieur.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {services.map((svc) => (
              // #6 — liens spécifiques par service
              <Link
                key={svc.title}
                href={svc.href}
                className="group rounded-xl overflow-hidden bg-white flex flex-col transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(36,50,56,0.13)]"
                style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.07)', border: '1px solid rgba(221,217,206,0.9)' }}
              >
                <div className="relative overflow-hidden" style={{ height: '13rem' }}>
                  {/* #28 — loading lazy sous la fold */}
                  <Image
                    src={svc.image}
                    alt={svc.title}
                    fill
                    className="object-cover group-hover:scale-[1.07] transition-transform duration-700 ease-out"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                    quality={80}
                  />
                  {/* Dégradé bas sur image */}
                  <div className="absolute bottom-0 inset-x-0 h-16" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.25), transparent)' }} aria-hidden="true" />
                </div>
                <div className="p-6 flex flex-col flex-1" style={{ borderTop: '0' }}>
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(74,99,32,0.10)' }}>
                      <svc.icon size={13} style={{ color: '#4A6320' }} aria-hidden="true" />
                    </div>
                    <h3 className="font-display font-bold text-sm transition-colors group-hover:text-[#4A6320]" style={{ color: '#243238' }}>{svc.title}</h3>
                  </div>
                  <p className="text-xs leading-relaxed flex-1" style={{ color: '#5C606B' }}>{svc.desc}</p>
                  {/* Accent vert en bas + "En savoir plus" */}
                  <div className="mt-5 pt-4 flex items-center justify-between" style={{ borderTop: '1px solid rgba(237,237,237,0.8)' }}>
                    <p className="text-xs font-semibold flex items-center gap-1.5 transition-all group-hover:gap-2.5 duration-200" style={{ color: '#4A6320' }}>
                      En savoir plus <ArrowRight size={11} />
                    </p>
                    <div className="h-0.5 w-8 rounded-full transition-all duration-300 group-hover:w-14" style={{ backgroundColor: '#749A30' }} aria-hidden="true" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full border px-7 py-3.5 text-sm font-semibold hover:border-[#4A6320] hover:text-[#243238] transition-colors duration-300"
              style={{ color: '#2F2F2F', borderColor: '#DDD9CE' }}
            >
              Voir toutes nos prestations <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 23 : CERTIFICATIONS & GARANTIES ── */}
      {/* Entre Services et Pourquoi nous choisir */}
      <section style={{ backgroundColor: '#F4F1E9' }} className="pb-16" aria-label="Certifications et garanties">
        <div className="container mx-auto max-w-7xl px-6 sm:px-8">
          <p className="text-center text-xs font-semibold uppercase tracking-widest mb-6" style={{ color: '#9E4B47' }}>Certifications &amp; Garanties</p>
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
                style={{ borderColor: '#749A30', color: '#4A6320', backgroundColor: 'rgba(74,99,32,0.06)' }}
              >
                <span style={{ color: '#749A30' }}>{icon}</span>
                {label} ✓
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 5 : POURQUOI NOUS ── */}
      <section className="bg-white py-28 lg:py-36" aria-labelledby="why-heading">
        <div className="container mx-auto max-w-7xl px-6 sm:px-8">
          <div data-reveal className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] mb-3" style={{ color: '#9E4B47' }}>Nos Engagements</p>
            <h2 id="why-heading" className="font-display font-bold" style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.25rem)', color: '#243238', letterSpacing: '-0.02em' }}>
              Pourquoi choisir LM Espace Vert ?
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {[
              { Icon: Award, title: `${EXPERIENCE_YEARS} ans d'expérience`, desc: "Formation professionnelle en horticulture et paysagisme. Un savoir-faire reconnu dans la région lyonnaise." },
              { Icon: Star, title: `${GOOGLE_RATING}/5 Google · ${GOOGLE_REVIEWS} avis`, desc: "La satisfaction de nos clients est notre meilleure carte de visite. Lisez leurs témoignages sincères.", extra: "Plus de 200 clients satisfaits depuis 2019" },
              { Icon: Leaf, title: 'Éco-responsable', desc: "Produits phyto raisonnés, compostage, préservation de la biodiversité. La nature, on y tient." },
              { Icon: Shield, title: 'Assuré RC Pro', desc: "Responsabilité civile professionnelle à jour. Vous êtes protégés en toutes circonstances." },
            ].map(({ Icon, title, desc, extra }) => (
              <div key={title} className="group rounded-xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(36,50,56,0.10)]" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #F9F7F0 100%)', border: '1px solid rgba(221,217,206,0.9)', boxShadow: '0 2px 16px rgba(0,0,0,0.05)' }}>
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-[rgba(74,99,32,0.15)]" style={{ backgroundColor: 'rgba(74,99,32,0.08)' }}>
                  <Icon size={22} style={{ color: '#749A30' }} aria-hidden="true" />
                </div>
                <h3 className="font-display font-bold mb-3 text-base" style={{ color: '#243238' }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#5C606B' }}>{desc}</p>
                {/* #14 — anchoring : 200+ clients depuis 2019 */}
                {extra && (
                  <p className="text-xs font-semibold mt-3 flex items-center gap-1.5" style={{ color: '#4A6320' }}>
                    <span className="inline-block w-3 h-px" style={{ backgroundColor: '#749A30' }} aria-hidden="true" />
                    {extra}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 6 : PROCESSUS ── */}
      <section style={{ backgroundColor: '#F4F1E9' }} className="py-28 lg:py-36" aria-labelledby="process-heading">
        <div className="container mx-auto max-w-7xl px-6 sm:px-8">
          <div data-reveal className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] mb-3" style={{ color: '#9E4B47' }}>Comment ça marche ?</p>
            <h2 id="process-heading" className="font-display font-bold" style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.25rem)', color: '#243238', letterSpacing: '-0.02em' }}>
              Un accompagnement simple de A à Z
            </h2>
          </div>
          <ol className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {processSteps.map(({ num, Icon, title, desc, duration }) => (
              <li key={num} className="flex flex-col items-start gap-4 relative">
                {/* Connecteur entre étapes (desktop) */}
                <div className="flex items-center gap-3 w-full">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-black flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, #9E4B47 0%, #7E3A37 100%)', color: '#ffffff', boxShadow: '0 4px 12px rgba(158,75,71,0.35)' }}
                    aria-hidden="true"
                  >
                    {num}
                  </div>
                  <Icon size={18} style={{ color: '#4A6320' }} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-base mb-2" style={{ color: '#243238' }}>{title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#5C606B' }}>{desc}</p>
                  {/* #17 — durée estimée */}
                  <p className="text-xs font-bold mt-2.5 flex items-center gap-1.5" style={{ color: '#4A6320' }}>
                    <span className="inline-block w-2 h-2 rounded-full" style={{ backgroundColor: '#749A30' }} aria-hidden="true" />
                    {duration}
                  </p>
                </div>
              </li>
            ))}
          </ol>
          <div className="text-center mt-14">
            <Link
              href="/devis"
              className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-bold transition-all hover:scale-[1.02]"
              style={{ backgroundColor: '#9E4B47', color: '#ffffff', boxShadow: '0 0 32px rgba(158,75,71,0.4), 0 4px 16px rgba(0,0,0,0.15)' }}
            >
              Démarrer mon projet <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 7 : TÉMOIGNAGES ── */}
      <section className="bg-white py-28 lg:py-36" aria-label="Avis clients">
        <div className="container mx-auto max-w-7xl px-6 sm:px-8">
          <div data-reveal className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] mb-3" style={{ color: '#9E4B47' }}>Avis Clients</p>
            <h2 className="font-display font-bold" style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.25rem)', color: '#243238', letterSpacing: '-0.02em' }}>Ce que disent nos clients</h2>
            <div className="flex items-center justify-center gap-1 mt-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" aria-hidden="true" />
              ))}
              <span className="ml-2.5 text-sm font-bold" style={{ color: '#2F2F2F' }}>{GOOGLE_RATING}</span>
              <span className="text-sm ml-1" style={{ color: '#5C606B' }}>— {GOOGLE_REVIEWS} avis Google</span>
            </div>
            <div className="flex justify-center mt-4">
              <GoogleReviewsBadge rating={Number(GOOGLE_RATING_NUM)} count={GOOGLE_REVIEWS} />
            </div>
          </div>
          <GoogleReviewsCarousel
            fallback={
              <ul role="list" className="grid sm:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <li key={t.name}>
                <article className="rounded-2xl p-8 h-full flex flex-col relative overflow-hidden" style={{ backgroundColor: '#F4F1E9', boxShadow: '0 4px 32px rgba(0,0,0,0.06)', border: '1px solid rgba(221,217,206,0.8)' }}>
                  {/* Guillemet décoratif */}
                  <div
                    className="absolute top-5 right-6 font-serif font-black leading-none select-none pointer-events-none"
                    style={{ fontSize: '6rem', color: 'rgba(158,75,71,0.09)', lineHeight: 1 }}
                    aria-hidden="true"
                  >
                    &ldquo;
                  </div>
                  {/* #8 — étoiles ★★★★★ visuelles au-dessus de chaque témoignage */}
                  <div className="flex items-center gap-0.5 mb-5" role="img" aria-label="Note 5 sur 5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" aria-hidden="true" />
                    ))}
                  </div>
                  <blockquote className="flex-1 text-sm leading-[1.8] italic mb-6 relative z-10" style={{ color: '#3A3A3A' }}>
                    &ldquo;{t.text}&rdquo;
                  </blockquote>
                  <footer className="pt-5 relative z-10" style={{ borderTop: '1px solid rgba(200,197,190,0.5)' }}>
                    <p className="font-bold text-sm flex items-center gap-2" style={{ color: '#243238' }}>
                      <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-black" style={{ backgroundColor: '#9E4B47', color: '#ffffff' }} aria-hidden="true">{t.name.charAt(0)}</span>
                      {t.name}
                    </p>
                    <p className="text-xs mt-1" style={{ color: '#5C606B' }}>
                      {t.date}
                    </p>
                    {/* #9 — badge Vérifié Google */}
                    <p className="text-xs font-semibold mt-2 flex items-center gap-1" style={{ color: '#4A6320' }}>
                      <span aria-hidden="true" style={{ color: '#749A30' }}>✓</span> Vérifié Google
                    </p>
                  </footer>
                </article>
              </li>
            ))}
              </ul>
            }
          />
          <div className="text-center mt-12">
            <a
              href="https://maps.app.goo.gl/KkB9EVAchidTC4G59"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border px-7 py-3.5 text-sm font-semibold hover:border-[#4A6320] hover:text-[#243238] transition-colors duration-300"
              style={{ color: '#2F2F2F', borderColor: '#DDD9CE' }}
            >
              Voir tous les avis sur Google <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* ── SECTION 10 : ILS NOUS FONT CONFIANCE ── */}
      {/* Cartes partenaires & certifications avec icônes et descriptions */}
      <section style={{ backgroundColor: '#F4F1E9' }} className="py-20 border-t border-[#DDD9CE]" aria-label="Nos partenaires et certifications">
        <div className="container mx-auto max-w-7xl px-6 sm:px-8">
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
                  style={{ backgroundColor: 'rgba(74,99,32,0.08)' }}
                >
                  <Icon size={20} style={{ color: '#749A30' }} aria-hidden="true" />
                </div>
                <p className="text-sm font-bold" style={{ color: '#4A6320' }}>{label}</p>
                <p className="text-xs leading-snug" style={{ color: '#5C606B' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION : ZONE D'INTERVENTION ── */}
      <section style={{ backgroundColor: '#F4F1E9' }} className="py-24" aria-labelledby="zone-heading">
        <div className="container mx-auto max-w-7xl px-6 sm:px-8">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#9E4B47' }}>Zone Couverte</p>
            <h2 id="zone-heading" className="font-display text-3xl font-bold" style={{ color: '#243238' }}>
              Zone d&apos;intervention — rayon de 20 km
            </h2>
            <p className="text-[#5C606B] mt-3 max-w-xl mx-auto">
              Basé à Saint-Didier-au-Mont-d&apos;Or, nous intervenons dans tout le nord-ouest lyonnais.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-10 max-w-5xl mx-auto">
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
              <Link
                key={ville}
                href={`/secteur/${slug}`}
                className="group flex items-center gap-3 rounded-xl border bg-white px-4 py-3 text-[0.95rem] font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(36,50,56,0.10)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#749A30]"
                style={{ borderColor: '#E7E2D6', color: '#243238' }}
              >
                <span
                  className="flex items-center justify-center w-8 h-8 rounded-full flex-shrink-0 transition-colors duration-300 group-hover:bg-[#9E4B47]"
                  style={{ backgroundColor: 'rgba(116,154,48,0.14)' }}
                >
                  <MapPin size={15} aria-hidden="true" className="transition-colors duration-300 group-hover:text-white" style={{ color: '#4A6320' }} />
                </span>
                <span className="leading-tight">{ville}</span>
              </Link>
            ))}
          </div>
          <div className="text-center mb-8">
            <Link
              href="/secteur"
              className="inline-flex items-center gap-2 rounded-full border px-6 py-2.5 text-sm font-semibold transition-colors hover:opacity-90"
              style={{ borderColor: '#749A30', color: '#4A6320', backgroundColor: 'rgba(74,99,32,0.06)' }}
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
                sandbox="allow-scripts allow-same-origin allow-popups"
                allow="fullscreen"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 18 : GUIDE GRATUIT (Lead Magnet) ── */}
      <section style={{ backgroundColor: '#F4F1E9' }} className="py-20 border-y border-[#DDD9CE] leaf-accent" aria-label="Guide gratuit jardinage">
        <div className="container mx-auto max-w-7xl px-6 sm:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-4" style={{ backgroundColor: 'rgba(74,99,32,0.10)', color: '#4A6320' }}>
              <FileText size={14} aria-hidden="true" /> Guide PDF gratuit — 50 pages
            </div>
            <h2 className="font-display font-bold mb-3" style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)', color: '#243238' }}>
              50 conseils pour un jardin impeccable toute l&apos;année
            </h2>
            <p className="text-[#5C606B] mb-6 text-sm leading-relaxed">
              Conseils professionnels de paysagiste — entretien, taille, arrosage, engazonnement, 4 saisons + checklist. Rédigé par Léo Maurice, fondateur de LM Espace Vert. Gratuit, sans inscription.
            </p>
            <a
              href="/50-conseils-jardin-lm-espace-vert.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold transition-all hover:opacity-90 hover:shadow-lg"
              style={{ backgroundColor: '#9E4B47', color: '#ffffff' }}
            >
              <Download size={15} aria-hidden="true" /> Télécharger le guide <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* ── SECTION 8 : BLOG PREVIEW ── */}
      <section className="bg-white py-28 lg:py-36" aria-labelledby="blog-heading">
        <div className="container mx-auto max-w-7xl px-6 sm:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] mb-2" style={{ color: '#9E4B47' }}>Blog</p>
              <h2 id="blog-heading" className="font-display font-bold" style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.25rem)', color: '#243238' }}>
                Conseils de votre paysagiste
              </h2>
            </div>
            <Link
              href="/blog"
              className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold hover:gap-2.5 transition-all"
              style={{ color: '#4A6320' }}
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
                    style={{ backgroundColor: '#9E4B47', color: '#ffffff' }}
                  >
                    Nouveau
                  </span>
                )}
                <div className="relative aspect-[16/9] overflow-hidden" style={{ backgroundColor: '#F4F1E9' }}>
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
                    style={{ backgroundColor: 'rgba(74,99,32,0.09)', color: '#4A6320' }}
                  >
                    {article.category}
                  </span>
                  <h3 className="font-semibold text-sm group-hover:text-[#9E4B47] transition-colors line-clamp-2 leading-snug mb-2" style={{ color: '#243238' }}>
                    {article.title}
                  </h3>
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <span className="text-xs text-[#5C606B] inline-flex items-center gap-1"><Calendar size={11} aria-hidden="true" /> {article.date}</span>
                    {article.readingTime && (
                      <span className="inline-block rounded-full px-2 py-0.5 text-xs font-medium" style={{ backgroundColor: 'rgba(74,99,32,0.08)', color: '#4A6320' }}>
                        {article.readingTime}
                      </span>
                    )}
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold" style={{ color: '#4A6320' }}>
                    Lire <ArrowRight size={11} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8 sm:hidden">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold"
              style={{ color: '#2F2F2F', borderColor: '#DDD9CE' }}
            >
              Voir tous nos articles <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION FAQ ── */}
      <section id="faq" style={{ backgroundColor: '#F4F1E9', scrollMarginTop: '5rem' }} className="py-28 lg:py-36" aria-labelledby="faq-heading">
        <div className="container mx-auto max-w-7xl px-6 sm:px-8">
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
      <section className="bg-white py-20" aria-label="Réponses aux objections courantes">
        <div className="container mx-auto max-w-7xl px-6 sm:px-8">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#9E4B47' }}>On répond à vos questions</p>
            <h2 className="font-display font-bold" style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', color: '#243238' }}>
              Ce que nos clients disent souvent
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { q: "C'est trop cher ?", a: "Nos tarifs sont adaptés à tous les budgets. Devis gratuit sans engagement." },
              { q: "Vous intervenez dans ma commune ?", a: "Oui, rayon 20 km : Caluire, Écully, Tassin, Limonest, Dardilly et plus." },
              { q: "Délais d'intervention ?", a: "Généralement 1 à 2 semaines selon la saison. Urgences : même semaine." },
            ].map(({ q, a }) => (
              <div key={q} className="rounded-xl border p-5" style={{ backgroundColor: '#F4F1E9', borderColor: '#DDD9CE' }}>
                <p className="font-bold text-sm mb-2" style={{ color: '#243238' }}>{q}</p>
                <p className="text-xs text-[#5C606B] leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 9 : CTA FINALE ── */}
      {/* #13 — titre loss aversion */}
      <section
        className="py-32 relative overflow-hidden"
        style={{ background: 'linear-gradient(155deg, #1A2A30 0%, #243238 40%, #2E4138 70%, #1A2A30 100%)', borderTop: '3px solid #9E4B47' }}
        aria-label="Appel à l'action — demande de devis"
      >
        {/* Halo terracotta décoratif */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
          style={{ width: '60vw', height: '60vw', maxWidth: '700px', maxHeight: '700px', background: 'radial-gradient(circle, rgba(158,75,71,0.10) 0%, transparent 65%)', filter: 'blur(40px)' }}
          aria-hidden="true"
        />
        <div className="container mx-auto max-w-7xl px-6 sm:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-8" style={{ backgroundColor: 'rgba(158,75,71,0.15)', color: '#e8a09d', border: '1px solid rgba(158,75,71,0.35)' }}>
            <Clock size={13} aria-hidden="true" /> Réponse garantie sous 2h en semaine
          </div>
          <h2 className="font-display font-bold text-white mb-4 max-w-3xl mx-auto" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', letterSpacing: '-0.025em', lineHeight: 1.08 }}>
            Ne laissez pas votre jardin se dégrader cet été
          </h2>
          {/* #12 — phrase de perte / loss aversion */}
          <p className="text-base mb-3 font-medium max-w-xl mx-auto leading-relaxed" style={{ color: 'rgba(255,255,255,0.80)' }}>
            Chaque semaine sans entretien coûte plus cher à rattraper. Agissez maintenant.
          </p>
          <p className="text-sm mb-12" style={{ color: 'rgba(255,255,255,0.45)' }}>
            Devis gratuit · Réponse sous 24h · Zone 20 km autour de Lyon
          </p>
          <div className="flex flex-wrap gap-5 justify-center mb-8">
            <Link
              href="/devis"
              className="inline-flex items-center gap-2 rounded-full px-9 py-4 text-sm font-bold transition-all hover:scale-[1.03]"
              style={{ backgroundColor: '#9E4B47', color: '#ffffff', boxShadow: '0 0 50px rgba(158,75,71,0.5), 0 8px 24px rgba(0,0,0,0.3)' }}
            >
              Demander un devis <ArrowRight size={15} />
            </Link>
            <a
              href="https://wa.me/33672587353"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-semibold transition-all hover:bg-white/15 backdrop-blur-sm"
              style={{ border: '1px solid rgba(255,255,255,0.25)', color: 'rgba(255,255,255,0.88)' }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp
            </a>
          </div>
          <p className="text-xs mb-8" style={{ color: 'rgba(255,255,255,0.45)' }}>★★★★★ · {GOOGLE_RATING}/5 · {GOOGLE_REVIEWS} avis Google</p>

          {/* Newsletter — inscription directement depuis la section CTA */}
          <div className="mt-12 max-w-sm mx-auto">
            <NewsletterSignup variant="compact" />
          </div>
        </div>
      </section>
    </>
  )
}


