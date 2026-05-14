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
  { icon: Scissors, title: "Entretien d'espaces verts", desc: 'Tonte, taille de haies, désherbage. Votre jardin toujours impeccable.', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=480&q=80' },
  { icon: TreePine, title: 'Élagage & Abattage', desc: 'Élagage raisonné et abattage sécurisé par des professionnels équipés.', image: 'https://images.unsplash.com/photo-1590682680695-43b964a3ae17?w=480&q=80' },
  { icon: Sprout, title: 'Création de jardins', desc: 'Conception paysagère sur-mesure, de la terrasse au parc résidentiel.', image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=480&q=80' },
  { icon: Layers, title: 'Maçonnerie paysagère', desc: 'Terrasses, allées et murets en pierres naturelles de qualité.', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=480&q=80' },
  { icon: Droplets, title: 'Arrosage automatique', desc: "Systèmes d'arrosage intelligents pour économiser l'eau.", image: 'https://images.unsplash.com/photo-1621929747188-0b4dc28498d2?w=480&q=80' },
  { icon: Flower2, title: 'Engazonnement', desc: 'Création de pelouses par semis ou gazon en rouleaux.', image: 'https://images.unsplash.com/photo-1628352081506-83c43123e54d?w=480&q=80' },
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
          src="/images/hero.webp"
          alt="Jardin LM Espace Vert, paysagiste Lyon nord"
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
            LM Espace Vert crée, entretient et sublime vos espaces extérieurs.<br />
            Paysagiste professionnel basé à Saint-Didier-au-Mont-d&apos;Or, rayon 20 km.
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
      <section className="bg-white border-y border-[--color-border]" aria-label="Chiffres clés">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 py-10">
          <dl className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {[
              { value: '5+', label: "Années d'expérience" },
              { value: '200+', label: 'Clients satisfaits' },
              { value: '20 km', label: "Rayon d'intervention" },
              { value: '5★', label: 'Note Google' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <dt className="font-display text-3xl sm:text-4xl font-bold" style={{ color: '#425D07' }}>{stat.value}</dt>
                <dd className="text-sm text-[--color-fg-muted] mt-1">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── SECTION 3 : PRÉSENTATION ── */}
      <section className="bg-[--color-bg-subtle] py-20 lg:py-24" aria-labelledby="about-heading">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="rounded-2xl overflow-hidden shadow-md">
              <Image
                src="/images/presentation.webp"
                alt="Léo Maurice, paysagiste LM Espace Vert"
                width={640}
                height={480}
                className="object-cover w-full h-[420px] lg:h-[480px]"
              />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#425D07' }}>
                Qui sommes-nous ?
              </p>
              <h2 id="about-heading" className="font-display text-3xl sm:text-4xl font-bold text-[--color-fg] mb-5">
                Un artisan passionné<br />à votre service
              </h2>
              <p className="text-[--color-fg-muted] leading-relaxed mb-4">
                <strong className="text-[--color-fg]">LM Espace Vert</strong>, c&apos;est l&apos;histoire de Léo Maurice, paysagiste créateur basé à Saint-Didier-au-Mont-d&apos;Or depuis 2019. Chaque jardin que nous créons est unique, pensé pour vous et conçu pour durer.
              </p>
              <p className="text-[--color-fg-muted] leading-relaxed mb-6">
                De la conception à l&apos;entretien régulier, nous intervenons chez les particuliers et les professionnels dans tout le nord-ouest lyonnais.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {['Certifié RC Pro', 'Depuis 2019', 'Éco-responsable'].map((badge) => (
                  <span key={badge} className="rounded-full border border-[--color-border] px-4 py-1.5 text-sm text-[--color-fg-muted]">
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

      {/* ── SECTION 4 : SERVICES ── */}
      <section className="bg-white py-20 lg:py-24" aria-labelledby="services-heading">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#425D07' }}>Nos Prestations</p>
            <h2 id="services-heading" className="font-display text-3xl sm:text-4xl font-bold text-[--color-fg]">
              Tous vos projets extérieurs
            </h2>
            <p className="text-[--color-fg-muted] mt-3">
              De la taille de haies à la création complète, nous sublimions votre espace vert.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc) => (
              <Link
                key={svc.title}
                href="/services"
                className="group rounded-2xl overflow-hidden bg-[--color-bg-elevated] border border-[--color-border] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
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
                    <h3 className="font-display font-semibold text-[--color-fg] text-sm">{svc.title}</h3>
                  </div>
                  <p className="text-xs text-[--color-fg-muted] leading-relaxed">{svc.desc}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full border border-[--color-border] px-6 py-3 text-sm font-semibold text-[--color-fg] hover:border-[#80BC00] hover:text-[#425D07] transition-colors"
            >
              Voir toutes nos prestations <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 5 : POURQUOI NOUS ── */}
      <section className="bg-[--color-bg-subtle] py-20 lg:py-24" aria-labelledby="why-heading">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#425D07' }}>Nos Engagements</p>
            <h2 id="why-heading" className="font-display text-3xl sm:text-4xl font-bold text-[--color-fg]">
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
              <div key={title} className="bg-[--color-bg-elevated] rounded-2xl p-6 border border-[--color-border] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
                <div className="w-10 h-10 rounded-full bg-[--color-green-light] flex items-center justify-center mb-4">
                  <Icon size={18} style={{ color: '#425D07' }} aria-hidden="true" />
                </div>
                <h3 className="font-display font-bold text-[--color-fg] mb-2 text-sm">{title}</h3>
                <p className="text-xs text-[--color-fg-muted] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 6 : PROCESSUS ── */}
      <section className="bg-white py-20 lg:py-24" aria-labelledby="process-heading">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#425D07' }}>Comment ça marche ?</p>
            <h2 id="process-heading" className="font-display text-3xl sm:text-4xl font-bold text-[--color-fg]">
              Un accompagnement simple de A à Z
            </h2>
          </div>
          <ol className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map(({ num, Icon, title, desc }) => (
              <li key={num} className="flex flex-col items-start gap-3">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                  style={{ backgroundColor: '#80BC00' }}
                  aria-hidden="true"
                >
                  {num}
                </div>
                <Icon size={20} style={{ color: '#425D07' }} aria-hidden="true" />
                <div>
                  <h3 className="font-display font-bold text-[--color-fg] text-sm mb-1">{title}</h3>
                  <p className="text-xs text-[--color-fg-muted] leading-relaxed">{desc}</p>
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
      <section className="bg-[--color-bg-subtle] py-20 lg:py-24" aria-label="Avis clients">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#425D07' }}>Avis Clients</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[--color-fg]">Ce que disent nos clients</h2>
            <div className="flex items-center justify-center gap-1 mt-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" aria-hidden="true" />
              ))}
              <span className="ml-2 text-sm font-bold text-[--color-fg]">5.0</span>
              <span className="text-[--color-fg-muted] text-sm ml-1">— 28 avis Google</span>
            </div>
          </div>
          <ul role="list" className="grid sm:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <li key={t.name}>
                <article className="bg-white rounded-2xl border border-[--color-border] p-6 shadow-sm h-full flex flex-col">
                  <div className="flex items-center gap-0.5 mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={13} className="fill-yellow-400 text-yellow-400" aria-hidden="true" />
                    ))}
                  </div>
                  <blockquote className="flex-1 text-sm text-[--color-fg-muted] leading-relaxed italic mb-4">
                    &ldquo;{t.text}&rdquo;
                  </blockquote>
                  <footer className="pt-4 border-t border-[--color-border]">
                    <p className="font-semibold text-[--color-fg] text-sm">{t.name}</p>
                    <p className="text-xs text-[--color-fg-muted] flex items-center gap-1 mt-0.5">
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
              className="inline-flex items-center gap-2 rounded-full border border-[--color-border] px-6 py-3 text-sm font-semibold text-[--color-fg] hover:border-[#80BC00] hover:text-[#425D07] transition-colors"
            >
              Voir tous les avis sur Google <ArrowRight size={14} />
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
              <h2 id="blog-heading" className="font-display text-3xl sm:text-4xl font-bold text-[--color-fg]">
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
                className="group block overflow-hidden rounded-2xl border border-[--color-border] bg-[--color-bg-elevated] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-[--color-bg-subtle]">
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
                  <h3 className="font-semibold text-sm text-[--color-fg] group-hover:text-[#80BC00] transition-colors line-clamp-2 leading-snug mb-2">
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
              className="inline-flex items-center gap-2 rounded-full border border-[--color-border] px-6 py-3 text-sm font-semibold text-[--color-fg]"
            >
              Voir tous nos articles <ArrowRight size={14} />
            </Link>
          </div>
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
              className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold bg-white hover:opacity-90 transition-opacity"
              style={{ backgroundColor: '#ffffff', color: '#0B3D2C' }}
            >
              Demander un devis <ArrowRight size={14} />
            </Link>
            <Link
              href="tel:+33674734698"
              className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold border border-white/35 text-white hover:bg-white/10 transition-colors"
            >
              <Phone size={14} /> 06 74 73 46 98
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
