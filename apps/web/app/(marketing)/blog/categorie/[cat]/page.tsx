import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Leaf, Award, Users, ShieldCheck, MapPin, Phone, Recycle, FlaskConical, Tractor, Star, Sprout } from 'lucide-react'
import { JsonLd } from '@/components/seo/json-ld'

export const metadata: Metadata = {
  title: "À propos de LM Espace Vert — Léo Maurice, paysagiste à Lyon",
  description:
    "Découvrez l'histoire, les valeurs et l'équipe de LM Espace Vert, paysagiste professionnel à Saint-Didier-au-Mont-d'Or depuis 2019.",
  alternates: { canonical: 'https://www.lmespacevert.fr/a-propos' },
}

const values = [
  {
    icon: <Leaf size={24} aria-hidden="true" />,
    title: 'Passion',
    desc: 'Le jardinage est avant tout une vocation. Léo apporte son enthousiasme et sa curiosité à chaque projet, des plus simples aux plus complexes.',
  },
  {
    icon: <Award size={24} aria-hidden="true" />,
    title: 'Qualité',
    desc: 'Avec 5 ans d\'expérience et une formation continue, Léo apporte un savoir-faire reconnu. La qualité se ressent dans chaque détail, chaque finition.',
  },
  {
    icon: <Users size={24} aria-hidden="true" />,
    title: 'Durabilité',
    desc: 'Nous privilégions des végétaux adaptés au climat local, des pratiques éco-responsables et une politique zéro pesticide pour des jardins durables.',
  },
]

const timeline = [
  { year: '2019', label: 'Fondation de LM Espace Vert à Saint-Didier-au-Mont-d\'Or' },
  { year: '2020', label: 'Premières grandes réalisations : jardins et terrasses' },
  { year: '2022', label: 'Agréments SAP et certification CERTIPHYTO obtenus' },
  { year: '2024', label: 'Expansion — 20 communes desservies, 150+ clients fidèles' },
  { year: '2026', label: 'Nouveau site web et 200+ projets réalisés' },
]

const certifications = [
  { label: 'RC Pro assurée', desc: 'Responsabilité civile professionnelle', icon: <ShieldCheck size={22} aria-hidden="true" /> },
  { label: 'Agréé SAP', desc: 'Service à la Personne — avantage fiscal 50%', icon: <Award size={22} aria-hidden="true" /> },
  { label: 'CERTIPHYTO', desc: 'Certification phytosanitaire officielle', icon: <Leaf size={22} aria-hidden="true" /> },
  { label: 'Matériels Husqvarna', desc: 'Équipements professionnels certifiés', icon: <ShieldCheck size={22} aria-hidden="true" /> },
]

const zones = [
  "Saint-Didier-au-Mont-d'Or",
  'Caluire-et-Cuire',
  'Écully',
  'Tassin-la-Demi-Lune',
  'Charbonnières-les-Bains',
  'Limonest',
  'Dardilly',
  'Craponne',
  'Francheville',
  "Collonges-au-Mont-d'Or",
  'Neuville-sur-Saône',
]

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://www.lmespacevert.fr/#business',
  name: 'LM Espace Vert',
  description: "Paysagiste professionnel à Saint-Didier-au-Mont-d'Or depuis 2019. Création, entretien et aménagement de jardins dans le nord-ouest lyonnais.",
  url: 'https://www.lmespacevert.fr',
  telephone: '+33672587353',
  email: 'contact@lmespacevert.fr',
  image: 'https://www.lmespacevert.fr/images/leo-portrait.webp',
  logo: 'https://www.lmespacevert.fr/logo.png',
  foundingDate: '2019',
  founder: { '@type': 'Person', name: 'Léo Maurice' },
  address: {
    '@type': 'PostalAddress',
    streetAddress: "Saint-Didier-au-Mont-d'Or",
    addressLocality: "Saint-Didier-au-Mont-d'Or",
    postalCode: '69370',
    addressCountry: 'FR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 45.8323,
    longitude: 4.7891,
  },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '08:00', closes: '18:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '08:00', closes: '12:00' },
  ],
  areaServed: zones.map((name) => ({ '@type': 'City', name })),
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '47', bestRating: '5', worstRating: '1' },
  hasCredential: [
    { '@type': 'EducationalOccupationalCredential', credentialCategory: 'CERTIPHYTO' },
  ],
  priceRange: '€€',
}

export default function AProposPage() {
  return (
    <>
      <JsonLd data={localBusinessSchema} />

      {/* Hero */}
      <section className="py-16" style={{ backgroundColor: '#F7F5F0' }}>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <nav aria-label="Fil d'Ariane" className="mb-6">
            <ol role="list" className="flex items-center gap-2 text-sm text-[#8C8F94]">
              <li><Link href="/" className="hover:text-[#2F2F2F] transition-colors">Accueil</Link></li>
              <li aria-hidden="true">/</li>
              <li><span aria-current="page" className="text-[#2F2F2F]">À propos</span></li>
            </ol>
          </nav>
          <div className="max-w-2xl">
            <h1 className="font-display text-[clamp(2.5rem,5vw,3.75rem)] font-bold leading-tight" style={{ color: '#425D07' }}>
              Notre Histoire
            </h1>
            <p className="mt-4 text-lg text-[#8C8F94]">
              L&apos;histoire d&apos;un paysagiste passionné au service de vos jardins
            </p>
          </div>
        </div>
      </section>

      {/* Histoire */}
      <section aria-labelledby="histoire-heading" className="bg-white py-20 lg:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Images : portrait + présentation */}
            <div className="flex flex-col gap-4">
              <div className="relative flex gap-4">
                {/* Portrait de Léo */}
                <div className="relative flex-shrink-0 w-32 h-40 sm:w-40 sm:h-52">
                  <Image
                    src="/images/leo-portrait.webp"
                    alt="Léo Maurice, fondateur de LM Espace Vert"
                    fill
                    className="rounded-2xl object-cover"
                    priority
                  />
                </div>
                {/* Photo principale */}
                <div className="relative flex-1 overflow-hidden rounded-2xl">
                  <Image
                    src="/images/presentation.webp"
                    alt="Léo Maurice, fondateur de LM Espace Vert, paysagiste à Saint-Didier-au-Mont-d'Or"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </div>
              </div>
            </div>
            {/* Texte */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#80BC00' }}>
                NOTRE HISTOIRE
              </p>
              <h2 id="histoire-heading" className="font-display text-3xl font-bold sm:text-4xl mb-6" style={{ color: '#425D07' }}>
                Léo Maurice, paysagiste depuis 2019
              </h2>
              <div className="space-y-4 text-[#8C8F94] leading-relaxed">
                <p>
                  Natif du Rhône et amoureux de la nature depuis toujours, Léo Maurice a fondé
                  <strong className="text-[#2F2F2F]"> LM Espace Vert</strong> en 2019 à
                  Saint-Didier-au-Mont-d&apos;Or avec une conviction forte : chaque extérieur mérite
                  d&apos;être beau, vivant et refléter la personnalité de ceux qui l&apos;habitent.
                </p>
                <p>
                  Formé en horticulture et paysagisme, Léo allie savoir-faire technique et sensibilité
                  artistique. Il intervient aussi bien sur l&apos;entretien régulier de jardins que sur
                  des créations complètes, en apportant toujours la même attention aux détails et le
                  même respect du végétal. Son approche est simple : écouter, conseiller honnêtement,
                  et réaliser.
                </p>
                <p>
                  En 5 ans, LM Espace Vert est devenu un acteur reconnu du paysagisme dans le
                  nord-ouest lyonnais. Avec plus de 200 projets réalisés et une note parfaite de 5/5
                  sur Google, la confiance de ses clients est la meilleure des récompenses.
                </p>
              </div>

              {/* Timeline */}
              <div className="mt-8">
                <h3 className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#80BC00' }}>
                  NOTRE PARCOURS
                </h3>
                <ol className="relative border-l-2" style={{ borderColor: '#EDEDED' }}>
                  {timeline.map((item, i) => (
                    <li key={item.year} className={`relative pl-6 ${i < timeline.length - 1 ? 'pb-5' : ''}`}>
                      <span
                        className="absolute -left-[9px] top-0.5 flex h-4 w-4 items-center justify-center rounded-full text-[9px] font-bold text-white"
                        style={{ backgroundColor: '#80BC00' }}
                        aria-hidden="true"
                      />
                      <p className="text-xs font-bold" style={{ color: '#80BC00' }}>{item.year}</p>
                      <p className="text-xs leading-snug mt-0.5" style={{ color: '#8C8F94' }}>{item.label}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section aria-labelledby="valeurs-heading" className="py-20 lg:py-24" style={{ backgroundColor: '#F7F5F0' }}>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#80BC00' }}>
              NOS VALEURS
            </p>
            <h2 id="valeurs-heading" className="font-display text-3xl font-bold sm:text-4xl" style={{ color: '#425D07' }}>
              Ce qui nous guide
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-[#EDEDED] bg-white shadow-sm p-8 hover:shadow-md hover:-translate-y-1 transition-all"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-white mb-5"
                  style={{ backgroundColor: '#80BC00' }}
                >
                  {v.icon}
                </div>
                <h3 className="font-bold text-lg mb-3" style={{ color: '#425D07' }}>{v.title}</h3>
                <p className="text-sm text-[#8C8F94] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section aria-labelledby="certifications-heading" className="bg-white py-20 lg:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#80BC00' }}>
              GARANTIES &amp; LABELS
            </p>
            <h2 id="certifications-heading" className="font-display text-3xl font-bold sm:text-4xl" style={{ color: '#425D07' }}>
              Nos certifications
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {certifications.map((cert) => (
              <div
                key={cert.label}
                className="rounded-2xl border border-[#EDEDED] bg-white shadow-sm p-6 flex flex-col items-center text-center hover:shadow-md hover:-translate-y-1 transition-all"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-white mb-4"
                  style={{ backgroundColor: '#0B3D2C' }}
                >
                  <ShieldCheck size={22} aria-hidden="true" />
                </div>
                <h3 className="font-bold text-base mb-1" style={{ color: '#2F2F2F' }}>{cert.label}</h3>
                <p className="text-sm" style={{ color: '#8C8F94' }}>{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LM Espace Vert en chiffres */}
      <section aria-labelledby="chiffres-heading" className="bg-white py-20 lg:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#80BC00' }}>
              NOS RÉSULTATS
            </p>
            <h2 id="chiffres-heading" className="font-display text-3xl font-bold sm:text-4xl" style={{ color: '#425D07' }}>
              LM Espace Vert en chiffres
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { value: '150+', label: 'clients fidèles' },
              { value: '500+', label: 'arbres taillés / an' },
              { value: '50+', label: 'jardins créés' },
              { value: '7 ans', label: "d'expérience" },
            ].map(({ value, label }) => (
              <div key={label} className="rounded-2xl border border-[#EDEDED] bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
                <p className="font-display text-4xl font-bold" style={{ color: '#425D07' }}>{value}</p>
                <p className="mt-2 text-sm" style={{ color: '#8C8F94' }}>{label}</p>
              </div>
            ))}
          </div>
          {/* Étoiles Google */}
          <div className="mt-10 flex flex-col items-center gap-2">
            <div className="flex items-center gap-1" role="img" aria-label="Note 4,9 sur 5 étoiles">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={22} fill="#80BC00" stroke="none" aria-hidden="true" />
              ))}
            </div>
            <p className="text-sm" style={{ color: '#8C8F94' }}>
              <strong style={{ color: '#2F2F2F' }}>4,9 / 5</strong> — 47 avis vérifiés Google
            </p>
          </div>
        </div>
      </section>

      {/* Engagements environnementaux */}
      <section aria-labelledby="engagements-env-heading" className="py-20 lg:py-24" style={{ backgroundColor: '#F7F5F0' }}>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#80BC00' }}>
              ÉCO-RESPONSABILITÉ
            </p>
            <h2 id="engagements-env-heading" className="font-display text-3xl font-bold sm:text-4xl" style={{ color: '#425D07' }}>
              Nos engagements environnementaux
            </h2>
            <p className="mt-3 text-base max-w-2xl mx-auto" style={{ color: '#8C8F94' }}>
              Parce qu&apos;un paysagiste se doit d&apos;être exemplaire sur le plan environnemental.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Sprout,
                title: 'Plantes locales',
                desc: "Nous sélectionnons en priorité des végétaux issus de pépinières de la région Auvergne-Rhône-Alpes, adaptés au climat local et favorables à la biodiversité.",
              },
              {
                icon: FlaskConical,
                title: 'Réduction des pesticides',
                desc: "Politique zéro pesticide chimique sur les jardins de particuliers. Nous privilégions la lutte biologique, les purins végétaux et les solutions naturelles.",
              },
              {
                icon: Recycle,
                title: 'Compostage',
                desc: "Les déchets verts des chantiers sont broyés et valorisés : compostage, paillage ou retour au sol. Rien ne part à la poubelle si cela peut servir.",
              },
              {
                icon: Award,
                title: 'Certification RGE',
                desc: "La certification RGE Eco-jardin est en cours d'obtention pour 2026. Elle reconnaît les professionnels engagés dans des pratiques paysagères durables.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-2xl border border-[#EDEDED] bg-white shadow-sm p-7 hover:shadow-md hover:-translate-y-1 transition-all"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-white mb-5"
                  style={{ backgroundColor: '#80BC00' }}
                >
                  <Icon size={22} aria-hidden="true" />
                </div>
                <h3 className="font-bold text-base mb-2" style={{ color: '#425D07' }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#8C8F94' }}>{desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/engagements"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#0B3D2C', color: '#ffffff' }}
            >
              Voir tous nos engagements
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Partenaires et fournisseurs */}
      <section aria-labelledby="partenaires-heading" className="bg-white py-20 lg:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#80BC00' }}>
              NOTRE RÉSEAU
            </p>
            <h2 id="partenaires-heading" className="font-display text-3xl font-bold sm:text-4xl" style={{ color: '#425D07' }}>
              Partenaires &amp; fournisseurs
            </h2>
            <p className="mt-3 text-base max-w-2xl mx-auto" style={{ color: '#8C8F94' }}>
              Des partenaires sélectionnés pour leur qualité et leur ancrage local.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-3 max-w-4xl mx-auto">
            {[
              {
                icon: Leaf,
                title: 'Pépinières locales',
                desc: "Nous travaillons avec plusieurs pépinières de la région Rhône-Alpes pour l'approvisionnement en végétaux. Des espèces locales, produites sans pesticides, livrées en circuit court.",
                badge: 'Circuit court',
              },
              {
                icon: Tractor,
                title: 'Husqvarna — Partenaire officiel',
                desc: "LM Espace Vert utilise exclusivement des équipements professionnels Husqvarna : tondeuses, tronçonneuses, taille-haies et robots. Des outils fiables pour un travail de précision.",
                badge: 'Partenaire officiel',
              },
              {
                icon: Users,
                title: 'Coopératives agricoles Rhône',
                desc: "Pour les amendements, engrais organiques et substrats, nous nous approvisionnons auprès de coopératives agricoles du département du Rhône, favorisant une agriculture locale.",
                badge: 'Rhône (69)',
              },
            ].map(({ icon: Icon, title, desc, badge }) => (
              <div
                key={title}
                className="rounded-2xl border border-[#EDEDED] bg-white shadow-sm p-7 hover:shadow-md hover:-translate-y-1 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-white flex-shrink-0"
                    style={{ backgroundColor: '#0B3D2C' }}
                  >
                    <Icon size={22} aria-hidden="true" />
                  </div>
                  <span
                    className="rounded-full px-2.5 py-1 text-xs font-semibold"
                    style={{ backgroundColor: 'rgba(128,188,0,0.1)', color: '#425D07' }}
                  >
                    {badge}
                  </span>
                </div>
                <h3 className="font-bold text-base mb-2" style={{ color: '#425D07' }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#8C8F94' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zone d'intervention */}
      <section aria-labelledby="zone-heading" className="py-20 lg:py-24" style={{ backgroundColor: '#F7F5F0' }}>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#80BC00' }}>
              SECTEUR
            </p>
            <h2 id="zone-heading" className="font-display text-3xl font-bold sm:text-4xl" style={{ color: '#425D07' }}>
              Notre zone d&apos;intervention
            </h2>
            <p className="mt-3 text-base" style={{ color: '#8C8F94' }}>
              Nous intervenons dans un rayon de 20 km autour de Saint-Didier-au-Mont-d&apos;Or
            </p>
          </div>
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 max-w-4xl mx-auto">
            {zones.map((zone) => (
              <li
                key={zone}
                className="rounded-xl border border-[#EDEDED] bg-white px-4 py-3 text-sm text-center font-medium shadow-sm flex items-center justify-center gap-2"
                style={{ color: '#2F2F2F' }}
              >
                <MapPin size={13} style={{ color: '#80BC00', flexShrink: 0 }} aria-hidden="true" />
                {zone}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center" style={{ backgroundColor: '#0B3D2C' }}>
        <div className="container mx-auto max-w-xl px-4 sm:px-6">
          <h2 className="font-display text-2xl font-bold mb-3" style={{ color: '#ffffff' }}>
            Rencontrez Léo
          </h2>
          <p className="mb-8" style={{ color: '#bbf7d0' }}>
            Confiez votre jardin à un paysagiste passionné. Devis gratuit, sans engagement. Léo répond personnellement à chaque demande.
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
