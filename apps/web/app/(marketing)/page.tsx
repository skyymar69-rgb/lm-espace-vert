import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight, Star, Clock, MapPin, Award, Shield, Leaf, Phone,
  Scissors, TreePine, Sprout, Layers, Droplets, Flower2,
  CheckCircle, Search, ClipboardList,
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

const services = [
  { icon: Scissors, title: "Entretien d'espaces verts", desc: 'Tonte, taille de haies, désherbage. Votre jardin toujours impeccable.', image: '/images/entretien-espaces-verts.webp' },
  { icon: TreePine, title: 'Élagage & Abattage', desc: 'Élagage raisonné et abattage sécurisé par des professionnels équipés.', image: '/images/elagage-abattage.webp' },
  { icon: Sprout, title: 'Création de jardins', desc: 'Conception paysagère sur-mesure, de la terrasse au parc résidentiel.', image: '/images/realisation-1.jpg' },
  { icon: Layers, title: 'Maçonnerie paysagère', desc: 'Terrasses, allées et murets en pierres naturelles de qualité.', image: '/images/realisation-10.jpg' },
  { icon: Droplets, title: 'Arrosage automatique', desc: "Systèmes d'arrosage intelligents pour économiser l'eau.", image: '/images/arrosage-automatique.webp' },
  { icon: Flower2, title: 'Engazonnement', desc: 'Création de pelouses par semis ou gazon en rouleaux.', image: '/images/realisation-6.jpg' },
] as const

const processSteps = [
  { num: 1, Icon: Phone, title: 'Prise de contact', desc: 'Appelez-nous ou envoyez un message. Réponse garantie sous 24h.' },
  { num: 2, Icon: Search, title: 'Visite & Diagnostic', desc: "Nous nous déplaçons gratuitement pour évaluer votre espace." },
  { num: 3, Icon: ClipboardList, title: 'Devis détaillé', desc: "Devis clair et transparent sous 48h, sans surprise." },
  { num: 4, Icon: CheckCircle, title: 'Réalisation soignée', desc: "Nos équipes interviennent dans les délais convenus avec passion." },
] as const

const testimonials = [
  { name: "Marie L.", city: "Saint-Didier-au-Mont-d'Or", rating: 5, text: "Léo a transformé notre jardin en un vrai havre de paix. Travail soigné, ponctuel et à l'écoute. Je recommande vivement !" },
  { name: "Pierre D.", city: "Caluire-et-Cuire", rating: 5, text: "Excellent paysagiste ! Entretien régulier de notre propriété depuis 2 ans, toujours impeccable. Tarifs honnêtes et équipe sérieuse." },
  { name: "Sophie M.", city: "Écully", rating: 5, text: "Création de notre terrasse et jardin en 3 semaines. Résultat magnifique, au-delà de nos espérances. Merci à toute l'équipe !" },
] as const

const recentArticles = articles.slice(0, 3)

export default function HomePage() {
  return (
    <>
      <JsonLd data={localBusinessJsonLd} />

      {/* ── SECTION 1 : HERO ── */}
      <section className="relative min-h-[100svh] flex items-end">
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
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] max-w-2xl mb-5">
            Votre jardin,<br />
            <span style={{ color: '#7DC67F' }}>notre passion.</span>
          </h1>
          <p className="text-white/75 text-lg max-w-xl mb-8 leading-relaxed">
            LM Espace Vert crée, entretient et sublime vos espaces extérieurs dans un rayon de 20 km autour de Saint-Didier-au-Mont-d&apos;Or&nbsp;: Caluire, Écully, Limonest, Tassin, Dardilly et tout le nord-ouest lyonnais.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            <Link
              href="/devis"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#80BC00', color: '#ffffff', boxShadow: 'rgb(128, 188, 0) 0px 0px 25px -14px' }}
            >
              Devis gratuit <ArrowRight size={14} />
            </Link>
            <Link
              href="/realisations"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold border border-white/35 text-white hover:bg-white/10 transition-colors"
            >
              Nos réalisations
            </Link>
          </div>
          <div className="flex flex-wrap gap-5">
            <span className="flex items-center gap-1.5 text-white/65 text-sm">
              <Star size={13} className="text-yellow-400" />5★ sur Google (28 avis)
            </span>
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
      <section className="bg-white border-y border-[#EDEDED]" aria-label="Chiffres clés">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 py-10">
          <dl className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            <div className="text-center">
              <dt className="font-display text-3xl sm:text-4xl font-bold" style={{ color: '#425D07' }}>
                <StatCounter value={5} suffix="+" />
              </dt>
              <dd className="text-sm text-[#8C8F94] mt-1">Années d&apos;expérience</dd>
            </div>
            <div className="text-center">
              <dt className="font-display text-3xl sm:text-4xl font-bold" style={{ color: '#425D07' }}>
                <StatCounter value={200} suffix="+" />
              </dt>
              <dd className="text-sm text-[#8C8F94] mt-1">Clients satisfaits</dd>
            </div>
            <div className="text-center">
              <dt className="font-display text-3xl sm:text-4xl font-bold" style={{ color: '#425D07' }}>
                <StatCounter value={20} suffix=" km" />
              </dt>
              <dd className="text-sm text-[#8C8F94] mt-1">Rayon d&apos;intervention</dd>
            </div>
            <div className="text-center">
              <dt className="font-display text-3xl sm:text-4xl font-bold" style={{ color: '#425D07' }}>
                <StatCounter value={28} suffix=" avis" />
              </dt>
              <dd className="text-sm text-[#8C8F94] mt-1">Note 5★ Google</dd>
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
              <p className="text-[#8C8F94] leading-relaxed mb-6">
                De la conception à l&apos;entretien régulier, nous intervenons chez les particuliers et les professionnels dans tout le nord-ouest lyonnais.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {['Certifié RC Pro', 'Agréé SAP', 'Label Qualipaysage', 'Éco-responsable'].map((badge) => (
                  <span key={badge} className="rounded-full border border-[#EDEDED] px-4 py-1.5 text-sm text-[#8C8F94]">
                    {badge}
                  </span>
                ))}
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
              { before: '/images/avant1.webp', after: '/images/apres1.webp', title: "Création jardin — Saint-Didier-au-Mont-d'Or" },
              { before: '/images/avant2.webp', after: '/images/apres2.webp', title: 'Aménagement extérieur — Limonest' },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl overflow-hidden border border-[#EDEDED] shadow-[rgba(0,0,0,0.06)_0px_4px_30px_0px]">
                <div className="grid grid-cols-2 gap-0.5 bg-[#EDEDED]">
                  <div className="relative">
                    <div className="relative h-52 overflow-hidden">
                      <Image src={item.before} alt={`Avant — ${item.title}`} fill className="object-cover" sizes="(max-width:640px)50vw,25vw" />
                    </div>
                    <span className="absolute top-2 left-2 text-xs font-bold px-2 py-0.5 rounded" style={{ backgroundColor: '#2F2F2F', color: '#ffffff' }}>AVANT</span>
                  </div>
                  <div className="relative">
                    <div className="relative h-52 overflow-hidden">
                      <Image src={item.after} alt={`Après — ${item.title}`} fill className="object-cover" sizes="(max-width:640px)50vw,25vw" />
                    </div>
                    <span className="absolute top-2 left-2 text-xs font-bold px-2 py-0.5 rounded" style={{ backgroundColor: '#80BC00', color: '#ffffff' }}>APRÈS</span>
                  </div>
                </div>
                <div className="p-4 bg-white">
                  <p className="text-sm font-semibold" style={{ color: '#425D07' }}>{item.title}</p>
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
              <Link
                key={svc.title}
                href="/services"
                className="group rounded-2xl overflow-hidden bg-white border border-[#EDEDED] shadow-[rgba(0,0,0,0.06)_0px_4px_30px_0px] hover:shadow-[rgba(0,0,0,0.12)_0px_8px_40px_0px] transition-shadow"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={svc.image}
                    alt={svc.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width:640px)100vw,(max-width:1024px)50vw,33vw"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <svc.icon size={15} style={{ color: '#425D07' }} aria-hidden="true" />
                    <h3 className="font-display font-semibold text-sm" style={{ color: '#425D07' }}>{svc.title}</h3>
                  </div>
                  <p className="text-xs text-[#8C8F94] leading-relaxed">{svc.desc}</p>
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

      {/* ── SECTION 5 : POURQUOI NOUS ── */}
      <section style={{ backgroundColor: '#F7F5F0' }} className="py-20 lg:py-24" aria-labelledby="why-heading">
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
              { Icon: Star, title: '5/5 Google · 28 avis', desc: "La satisfaction de nos clients est notre meilleure carte de visite. Lisez leurs témoignages sincères." },
              { Icon: Leaf, title: 'Éco-responsable', desc: "Produits phyto raisonnés, compostage, préservation de la biodiversité. La nature, on y tient." },
              { Icon: Shield, title: 'Assuré RC Pro', desc: "Responsabilité civile professionnelle à jour. Vous êtes protégés en toutes circonstances." },
            ].map(({ Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-6 border border-[#EDEDED] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
                <div className="w-10 h-10 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: 'rgba(128,188,0,0.1)' }}>
                  <Icon size={18} style={{ color: '#80BC00' }} aria-hidden="true" />
                </div>
                <h3 className="font-display font-bold mb-2 text-sm" style={{ color: '#425D07' }}>{title}</h3>
                <p className="text-xs text-[#8C8F94] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 6 : PROCESSUS ── */}
      <section className="bg-white py-20 lg:py-24" aria-labelledby="process-heading">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#80BC00' }}>Comment ça marche ?</p>
            <h2 id="process-heading" className="font-display text-3xl sm:text-4xl font-bold" style={{ color: '#425D07' }}>
              Un accompagnement simple de A à Z
            </h2>
          </div>
          <ol className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map(({ num, Icon, title, desc }) => (
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
      <section style={{ backgroundColor: '#F7F5F0' }} className="py-20 lg:py-24" aria-label="Avis clients">
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
                <article className="bg-white rounded-2xl border border-[#EDEDED] p-6 shadow-[rgba(0,0,0,0.06)_0px_4px_30px_0px] h-full flex flex-col">
                  <div className="flex items-center gap-0.5 mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={13} className="fill-yellow-400 text-yellow-400" aria-hidden="true" />
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
          <div className="grid sm:grid-cols-3 gap-6">
            {recentArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group block overflow-hidden rounded-2xl border border-[#EDEDED] bg-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="relative aspect-[16/9] overflow-hidden" style={{ backgroundColor: '#F7F5F0' }}>
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(max-width:640px)100vw,33vw"
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

      {/* ── SECTION 9 : CTA FINALE ── */}
      <section style={{ backgroundColor: '#0B3D2C' }} className="py-20" aria-label="Appel à l'action">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-3">
            Votre jardin mérite le meilleur soin
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.75)' }} className="text-base mb-10">
            Devis gratuit · Réponse sous 24h · Zone 20 km autour de Lyon
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
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
        </div>
      </section>
    </>
  )
}
