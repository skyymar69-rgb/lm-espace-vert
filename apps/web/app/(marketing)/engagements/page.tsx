import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ShieldCheck,
  Clock,
  Leaf,
  Sprout,
  Award,
  Heart,
  ArrowRight,
  Phone,
  Star,
} from 'lucide-react'
import { JsonLd } from '@/components/seo/json-ld'
import { CertificationsBar } from '@/components/ui/certifications-bar'

export const metadata: Metadata = {
  title: 'Nos Engagements | LM Espace Vert — Qualité & Environnement',
  description:
    "Découvrez les engagements de LM Espace Vert : qualité garantie, délais respectés, zéro déchet, plantes locales, certifications et satisfaction client. Paysagiste engagé à Lyon.",
  alternates: { canonical: 'https://www.lmespacevert.fr/engagements' },
  openGraph: {
    title: 'Nos Engagements | LM Espace Vert — Qualité & Environnement',
    description:
      "Qualité garantie, délais respectés, zéro déchet, plantes locales et satisfaction client — les engagements de votre paysagiste à Saint-Didier-au-Mont-d'Or.",
    url: 'https://www.lmespacevert.fr/engagements',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.lmespacevert.fr' },
    { '@type': 'ListItem', position: 2, name: 'Nos Engagements', item: 'https://www.lmespacevert.fr/engagements' },
  ],
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://www.lmespacevert.fr/#business',
  name: 'LM Espace Vert',
  url: 'https://www.lmespacevert.fr',
  telephone: '+33672587353',
  address: {
    '@type': 'PostalAddress',
    addressLocality: "Saint-Didier-au-Mont-d'Or",
    postalCode: '69370',
    addressCountry: 'FR',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '47',
    bestRating: '5',
    worstRating: '1',
  },
}

const engagements = [
  {
    icon: ShieldCheck,
    title: 'Qualité garantie',
    desc: 'Chaque intervention est réalisée avec soin, du premier rendez-vous jusqu\'au nettoyage final du chantier. Nous utilisons exclusivement des matériaux et végétaux de première qualité, sélectionnés auprès de fournisseurs locaux reconnus.',
    detail: 'Contrôle qualité systématique en fin de chantier. Garantie sur les plantations et les travaux de construction paysagère.',
    color: '#0B3D2C',
  },
  {
    icon: Clock,
    title: 'Délais respectés',
    desc: 'Votre temps est précieux. Léo s\'engage sur des délais réalistes dès le devis et les respecte scrupuleusement. Un planning détaillé vous est remis avant le démarrage de chaque projet.',
    detail: 'Devis remis sous 48h. Intervention planifiée à la date convenue. Ponctualité à chaque passage.',
    color: '#425D07',
  },
  {
    icon: Leaf,
    title: 'Zéro déchet',
    desc: 'Les déchets verts issus des chantiers sont triés, compostés ou valorisés en biomasse. Nous ne brûlons jamais sur place et favorisons le réemploi des matériaux d\'excavation dans le jardin.',
    detail: 'Broyage des végétaux pour paillage. Compostage des résidus organiques. Évacuation éco-responsable des inertes.',
    color: '#80BC00',
  },
  {
    icon: Sprout,
    title: 'Plantes locales & biodiversité',
    desc: 'Nous privilégions les végétaux adaptés au climat lyonnais, issus de pépinières de la région Auvergne-Rhône-Alpes. Des espèces locales plus résistantes, moins gourmandes en eau et bénéfiques pour la faune locale.',
    detail: 'Minimum 70% de végétaux d\'origine régionale. Recommandation d\'espèces mellifères. Suppression des espèces invasives.',
    color: '#80BC00',
  },
  {
    icon: Award,
    title: 'Certifications & formation continue',
    desc: 'LM Espace Vert maintient ses certifications professionnelles et se forme régulièrement aux nouvelles techniques et réglementations : CERTIPHYTO, Agrément SAP, RC Pro, et certification RGE en cours d\'obtention.',
    detail: 'CERTIPHYTO renouvelé. Agrément SAP actif (50% crédit d\'impôt). RGE Eco-jardin en cours pour 2026.',
    color: '#425D07',
  },
  {
    icon: Heart,
    title: 'Satisfaction client',
    desc: 'Votre satisfaction est notre priorité absolue. Léo assure un suivi personnalisé après chaque chantier et reste disponible pour répondre à vos questions. 4,9/5 sur Google avec 47 avis vérifiés.',
    detail: 'Appel de suivi 30 jours après les travaux. Retouche offerte si insatisfaction signalée sous 7 jours.',
    color: '#0B3D2C',
  },
]

const processSteps = [
  { step: '01', title: 'Devis', desc: 'Visite gratuite sur site. Étude de votre projet, chiffrage détaillé remis sous 48h.' },
  { step: '02', title: 'Validation', desc: 'Vous validez le devis et nous convenons ensemble d\'une date d\'intervention.' },
  { step: '03', title: 'Chantier', desc: 'Réalisation des travaux dans les règles de l\'art avec nos équipements professionnels.' },
  { step: '04', title: 'Contrôle', desc: 'Inspection finale avec vous. Le chantier est livré propre et conforme au devis.' },
  { step: '05', title: 'Suivi', desc: 'Appel de suivi et conseils d\'entretien. Nous restons disponibles pour toute question.' },
]

const testimonials = [
  {
    name: 'Sylvie D.',
    location: 'Caluire-et-Cuire',
    text: 'Léo a entièrement refait notre jardin. Travail soigné, délais respectés et nettoyage impeccable en fin de chantier. On est ravis du résultat !',
    service: 'Création de jardin',
  },
  {
    name: 'Marc T.',
    location: "Saint-Didier-au-Mont-d'Or",
    text: 'Très professionnel. Il a pris le temps d\'expliquer chaque choix de végétaux, en privilégiant des espèces locales adaptées à notre terrain. Excellent rapport qualité-prix.',
    service: 'Entretien & plantation',
  },
  {
    name: 'Isabelle R.',
    location: 'Écully',
    text: 'Ponctualité exemplaire et travail de qualité. L\'arrosage automatique fonctionne parfaitement depuis l\'installation. Je recommande les yeux fermés.',
    service: 'Arrosage automatique',
  },
]

export default function EngagementsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={localBusinessSchema} />

      {/* Hero */}
      <section className="py-16" style={{ backgroundColor: '#F7F5F0' }}>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <nav aria-label="Fil d'Ariane" className="mb-6">
            <ol role="list" className="flex items-center gap-2 text-sm" style={{ color: '#8C8F94' }}>
              <li><Link href="/" className="hover:text-[#2F2F2F] transition-colors">Accueil</Link></li>
              <li aria-hidden="true">/</li>
              <li><span aria-current="page" style={{ color: '#2F2F2F' }}>Nos Engagements</span></li>
            </ol>
          </nav>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#80BC00' }}>
              NOTRE PROMESSE
            </p>
            <h1 className="font-display text-[clamp(2.5rem,5vw,3.75rem)] font-bold leading-tight" style={{ color: '#425D07' }}>
              Nos Engagements
            </h1>
            <p className="mt-4 text-lg leading-relaxed" style={{ color: '#8C8F94' }}>
              Qualité, environnement et satisfaction client sont au cœur de chaque intervention de LM Espace Vert. Voici les promesses concrètes que nous tenons envers vous.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span
                className="inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-semibold"
                style={{ backgroundColor: 'rgba(128,188,0,0.12)', color: '#425D07' }}
              >
                <Star size={13} fill="#80BC00" stroke="none" aria-hidden="true" />
                4,9/5 — 47 avis Google
              </span>
              <span className="inline-flex items-center rounded-full border border-[#EDEDED] bg-white px-4 py-1.5 text-sm font-medium" style={{ color: '#8C8F94' }}>
                7 ans d&apos;expérience
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications bar */}
      <CertificationsBar />

      {/* 6 engagements */}
      <section aria-labelledby="engagements-heading" className="bg-white py-20 lg:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#80BC00' }}>
              CE QUI NOUS DISTINGUE
            </p>
            <h2 id="engagements-heading" className="font-display text-3xl font-bold sm:text-4xl" style={{ color: '#425D07' }}>
              6 engagements fermes
            </h2>
            <p className="mt-3 text-base max-w-2xl mx-auto" style={{ color: '#8C8F94' }}>
              Pas de promesses vagues — des garanties concrètes et vérifiables à chaque étape de votre projet.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {engagements.map((eng) => {
              const Icon = eng.icon
              return (
                <div
                  key={eng.title}
                  className="rounded-2xl border border-[#EDEDED] bg-white shadow-sm p-8 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-white mb-5"
                    style={{ backgroundColor: eng.color }}
                  >
                    <Icon size={22} aria-hidden="true" />
                  </div>
                  <h3 className="font-bold text-lg mb-3" style={{ color: '#425D07' }}>
                    {eng.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: '#8C8F94' }}>
                    {eng.desc}
                  </p>
                  <div
                    className="rounded-lg px-3 py-2 text-xs leading-relaxed"
                    style={{ backgroundColor: '#F7F5F0', color: '#425D07' }}
                  >
                    {eng.detail}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Processus qualité */}
      <section aria-labelledby="processus-heading" className="py-20 lg:py-24" style={{ backgroundColor: '#F7F5F0' }}>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#80BC00' }}>
              NOTRE MÉTHODE
            </p>
            <h2 id="processus-heading" className="font-display text-3xl font-bold sm:text-4xl" style={{ color: '#425D07' }}>
              Notre processus qualité en 5 étapes
            </h2>
            <p className="mt-3 text-base" style={{ color: '#8C8F94' }}>
              De votre première demande à la livraison finale, chaque étape est maîtrisée.
            </p>
          </div>
          <div className="relative max-w-5xl mx-auto">
            {/* Ligne connectrice (desktop) */}
            <div
              className="hidden lg:block absolute top-10 left-0 right-0 h-0.5 mx-20"
              style={{ backgroundColor: '#EDEDED', zIndex: 0 }}
            />
            <div className="grid gap-6 sm:grid-cols-5 relative" style={{ zIndex: 1 }}>
              {processSteps.map((step, i) => (
                <div key={step.step} className="flex flex-col items-center text-center">
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center text-white font-display font-bold text-lg mb-4 shadow-md"
                    style={{ backgroundColor: i === 2 ? '#80BC00' : '#0B3D2C' }}
                  >
                    {step.step}
                  </div>
                  <h3 className="font-bold text-base mb-2" style={{ color: '#425D07' }}>
                    {step.title}
                  </h3>
                  <p className="text-xs leading-relaxed" style={{ color: '#8C8F94' }}>
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section aria-labelledby="temoignages-heading" className="bg-white py-20 lg:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#80BC00' }}>
              ILS NOUS FONT CONFIANCE
            </p>
            <h2 id="temoignages-heading" className="font-display text-3xl font-bold sm:text-4xl" style={{ color: '#425D07' }}>
              Ce que disent nos clients
            </h2>
            <div className="mt-4 flex items-center justify-center gap-2">
              <div className="flex" aria-label="Note 4.9 sur 5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={20} fill="#80BC00" stroke="none" aria-hidden="true" />
                ))}
              </div>
              <span className="font-bold text-lg" style={{ color: '#2F2F2F' }}>4,9</span>
              <span className="text-sm" style={{ color: '#8C8F94' }}>/ 5 · 47 avis vérifiés Google</span>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-2xl border border-[#EDEDED] bg-white shadow-sm p-6 flex flex-col"
              >
                <div className="flex mb-3" aria-label="5 étoiles">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={14} fill="#80BC00" stroke="none" aria-hidden="true" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed flex-1 mb-4" style={{ color: '#2F2F2F' }}>
                  &laquo; {t.text} &raquo;
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-sm" style={{ color: '#425D07' }}>{t.name}</p>
                    <p className="text-xs" style={{ color: '#8C8F94' }}>{t.location}</p>
                  </div>
                  <span
                    className="rounded-full px-2.5 py-1 text-xs font-semibold"
                    style={{ backgroundColor: 'rgba(128,188,0,0.1)', color: '#425D07' }}
                  >
                    {t.service}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Points clés chiffrés */}
      <section aria-labelledby="chiffres-engagements-heading" className="py-16" style={{ backgroundColor: '#F7F5F0' }}>
        <div className="container mx-auto max-w-5xl px-4 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-center mb-8" style={{ color: '#80BC00' }}>
            NOS CHIFFRES CLÉS
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { value: '7 ans', label: 'd\'expérience' },
              { value: '200+', label: 'projets réalisés' },
              { value: '4,9/5', label: 'note Google' },
              { value: '100%', label: 'devis respectés' },
            ].map(({ value, label }) => (
              <div key={label} className="bg-white rounded-2xl border border-[#EDEDED] p-6 shadow-sm">
                <p className="font-display text-3xl font-bold" style={{ color: '#425D07' }}>{value}</p>
                <p className="mt-1 text-sm" style={{ color: '#8C8F94' }}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center" style={{ backgroundColor: '#0B3D2C' }}>
        <div className="container mx-auto max-w-xl px-4 sm:px-6">
          <h2 className="font-display text-2xl font-bold mb-3" style={{ color: '#ffffff' }}>
            Un paysagiste qui tient ses promesses
          </h2>
          <p className="mb-8" style={{ color: '#bbf7d0' }}>
            Demandez votre devis gratuit. Léo répond personnellement à chaque demande sous 48h.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/devis"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#80BC00', color: '#ffffff', boxShadow: 'rgb(128, 188, 0) 0px 0px 25px -14px' }}
            >
              Demander un devis gratuit
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
            <a
              href="tel:+33672587353"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/25"
            >
              <Phone size={15} aria-hidden="true" />
              06 72 58 73 53
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
