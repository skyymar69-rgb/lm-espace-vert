import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
  Scissors,
  TreePine,
  Sprout,
  Layers,
  Droplets,
  Flower2,
  CheckCircle,
  ArrowRight,
  Phone,
  Home,
  Building2,
} from 'lucide-react'
import { JsonLd } from '@/components/seo/json-ld'
import { CertificationsBar } from '@/components/ui/certifications-bar'

export const metadata: Metadata = {
  title: "Nos Prestations Paysagères | LM Espace Vert",
  description: "Entretien, élagage, création de jardins, maçonnerie paysagère, arrosage automatique et engazonnement. Paysagiste à Saint-Didier-au-Mont-d'Or, rayon 20 km.",
  alternates: { canonical: 'https://www.lmespacevert.fr/services' },
  openGraph: {
    title: "Nos Prestations Paysagères | LM Espace Vert",
    description: "Entretien, élagage, création de jardins, maçonnerie paysagère, arrosage automatique et engazonnement. Paysagiste à Saint-Didier-au-Mont-d'Or, rayon 20 km.",
    url: 'https://www.lmespacevert.fr/services',
    images: [{ url: '/images/entretien-espaces-verts.webp', width: 1200, height: 630, alt: 'Paysagiste LM Espace Vert — Services' }],
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.lmespacevert.fr' },
    { '@type': 'ListItem', position: 2, name: 'Nos Services', item: 'https://www.lmespacevert.fr/services' },
  ],
}

const services = [
  {
    icon: Scissors,
    title: "Entretien d'espaces verts",
    slug: 'entretien-espaces-verts',
    image: '/images/entretien-espaces-verts.webp',
    price: 'À partir de 80€/passage',
    desc: "Un jardin entretenu régulièrement est un jardin en bonne santé. Nous proposons des contrats d'entretien sur mesure : tonte, taille de haies, désherbage, fertilisation et soins saisonniers.",
    features: [
      'Tonte hebdomadaire ou bimensuelle',
      'Taille de haies et arbustes',
      'Désherbage manuel et traitement',
      'Ramassage des feuilles',
      'Fertilisation et soins',
    ],
  },
  {
    icon: TreePine,
    title: 'Élagage & Abattage',
    slug: 'elagage-abattage',
    image: '/images/elagage-abattage.webp',
    price: 'Devis gratuit',
    desc: "L'élagage est une intervention délicate qui demande expertise et équipement. Nos professionnels interviennent pour la taille douce, l'élagage raisonné et l'abattage en toute sécurité.",
    features: [
      'Élagage de formation et sécurité',
      'Abattage dirigé',
      'Broyage et évacuation des déchets',
      'Taille des arbres fruitiers',
      'Soins aux arbres remarquables',
    ],
  },
  {
    icon: Sprout,
    title: 'Création de jardins',
    slug: 'creation-jardins',
    image: '/images/realisation-1.jpg',
    price: 'À partir de 1 500€',
    desc: "Votre jardin est une extension de votre maison. Nous concevons des espaces verts sur-mesure, de la petite terrasse au grand parc, en respectant vos goûts et les contraintes du terrain.",
    features: [
      'Étude et conception paysagère',
      'Choix des végétaux adaptés',
      'Création de massifs floraux',
      'Plantation arbres et arbustes',
      'Aménagement extérieur complet',
    ],
  },
  {
    icon: Layers,
    title: 'Maçonnerie paysagère',
    slug: 'maconnerie-paysagere',
    image: '/images/realisation-10.jpg',
    price: 'Devis gratuit',
    desc: "Les éléments minéraux structurent et valorisent votre jardin. Terrasses, allées, murets et escaliers réalisés avec des matériaux naturels de qualité pour un rendu esthétique et durable.",
    features: [
      'Terrasses en pierres naturelles',
      'Allées et chemins',
      'Murets et clôtures',
      'Escaliers extérieurs',
      'Dallage et pavage',
    ],
  },
  {
    icon: Droplets,
    title: 'Arrosage automatique',
    slug: 'arrosage-automatique',
    image: '/images/arrosage-automatique.webp',
    price: 'À partir de 800€',
    desc: "Économisez l'eau et du temps avec un système d'arrosage automatique sur mesure. Installation, programmation et maintenance de systèmes d'arrosage intelligents adaptés à votre jardin.",
    features: [
      'Installation complète',
      'Programmation et réglage',
      'Système goutte-à-goutte',
      'Capteurs de pluie',
      'Maintenance annuelle',
    ],
  },
  {
    icon: Flower2,
    title: 'Engazonnement',
    slug: 'engazonnement',
    image: '/images/realisation-6.jpg',
    price: 'À partir de 300€',
    desc: "Une belle pelouse est la base d'un jardin réussi. Nous créons votre gazon par semis ou en rouleaux selon vos besoins, et vous proposons des prairies fleuries pour plus de biodiversité.",
    features: [
      'Semis de pelouse',
      'Gazon en rouleaux',
      'Préparation du sol',
      'Prairie fleurie',
      'Regarnissage et rénovation',
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      {/* Hero */}
      <section className="py-16" style={{ backgroundColor: '#F7F5F0' }}>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          {/* Breadcrumb */}
          <nav aria-label="Fil d'Ariane" className="mb-6">
            <ol role="list" className="flex items-center gap-2 text-sm text-[#8C8F94]">
              <li>
                <Link href="/" className="hover:text-[#2F2F2F] transition-colors">
                  Accueil
                </Link>
              </li>
              <li aria-hidden="true" className="text-[#8C8F94]">/</li>
              <li>
                <span aria-current="page" className="text-[#2F2F2F]">
                  Nos Services
                </span>
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <h1 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight" style={{ color: '#425D07' }}>
              Nos Prestations Paysagères
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-[#8C8F94]">
              De l&apos;entretien hebdomadaire à la création complète, LM Espace Vert prend en
              charge l&apos;ensemble de vos projets extérieurs.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="inline-flex items-center rounded-full border border-[#EDEDED] bg-white px-4 py-1.5 text-sm font-medium text-[#8C8F94]">
                Devis gratuit · 24h
              </span>
              <span className="inline-flex items-center rounded-full border border-[#EDEDED] bg-white px-4 py-1.5 text-sm font-medium text-[#8C8F94]">
                Rayon 20 km
              </span>
              <span className="inline-flex items-center rounded-full border border-[#EDEDED] bg-white px-4 py-1.5 text-sm font-medium text-[#8C8F94]">
                RC Pro
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications bar */}
      <CertificationsBar />

      {/* Services grid */}
      <section aria-label="Liste des services" className="bg-white py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <article
                  key={service.title}
                  className="bg-white border border-[#EDEDED] rounded-2xl shadow-[rgba(0,0,0,0.06)_0px_4px_30px_0px] overflow-hidden"
                >
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-7">
                    <div className="mb-3 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div
                          className="flex h-10 w-10 items-center justify-center rounded-xl"
                          style={{ backgroundColor: 'rgba(128,188,0,0.1)' }}
                        >
                          <Icon size={18} style={{ color: '#80BC00' }} aria-hidden="true" />
                        </div>
                        <h2 className="font-display text-xl font-bold" style={{ color: '#425D07' }}>
                          {service.title}
                        </h2>
                      </div>
                      <span
                        className="flex-shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold"
                        style={{ backgroundColor: 'rgba(128,188,0,0.1)', color: '#425D07' }}
                      >
                        {service.price}
                      </span>
                    </div>
                    <p className="mb-5 leading-relaxed text-[#8C8F94]">{service.desc}</p>
                    <ul className="mb-6 space-y-1.5">
                      {service.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-center gap-2 text-sm text-[#8C8F94]"
                        >
                          <CheckCircle
                            size={14}
                            style={{ color: '#80BC00' }}
                            aria-hidden="true"
                          />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center gap-3">
                      <Link
                        href={`/services/${service.slug}`}
                        className="inline-flex items-center gap-2 text-sm font-semibold transition-all hover:gap-3"
                        style={{ color: '#425D07' }}
                      >
                        En savoir plus <ArrowRight size={14} aria-hidden="true" />
                      </Link>
                      <Link
                        href="/devis"
                        className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition-opacity hover:opacity-90 ml-auto"
                        style={{ backgroundColor: '#80BC00', color: '#ffffff' }}
                      >
                        Devis gratuit
                      </Link>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* Comparatif Particuliers / Professionnels */}
      <section aria-labelledby="comparatif-heading" className="py-20 lg:py-24" style={{ backgroundColor: '#F7F5F0' }}>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#80BC00' }}>
              NOS CLIENTS
            </p>
            <h2 id="comparatif-heading" className="font-display text-3xl font-bold sm:text-4xl" style={{ color: '#425D07' }}>
              Particuliers &amp; Professionnels
            </h2>
            <p className="mt-3 text-base" style={{ color: '#8C8F94' }}>
              Nous adaptons nos prestations à vos besoins spécifiques
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 max-w-4xl mx-auto">
            {/* Particuliers */}
            <div className="rounded-2xl border bg-white p-8 shadow-sm" style={{ borderColor: '#EDEDED' }}>
              <div
                className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl text-white"
                style={{ backgroundColor: '#80BC00' }}
              >
                <Home size={22} aria-hidden="true" />
              </div>
              <h3 className="font-display text-xl font-bold mb-3" style={{ color: '#425D07' }}>Particuliers</h3>
              <ul className="space-y-2.5">
                {[
                  'Avantage fiscal 50% (agrément SAP)',
                  'Entretien régulier du jardin',
                  'Création de jardin sur mesure',
                  'Terrasse et aménagements',
                  'Arrosage automatique',
                  'Devis gratuit en 24h',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm" style={{ color: '#8C8F94' }}>
                    <CheckCircle size={14} style={{ color: '#80BC00' }} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {/* Professionnels */}
            <div className="rounded-2xl border bg-white p-8 shadow-sm" style={{ borderColor: '#EDEDED' }}>
              <div
                className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl text-white"
                style={{ backgroundColor: '#0B3D2C' }}
              >
                <Building2 size={22} aria-hidden="true" />
              </div>
              <h3 className="font-display text-xl font-bold mb-3" style={{ color: '#425D07' }}>Professionnels</h3>
              <ul className="space-y-2.5">
                {[
                  'Copropriétés et résidences',
                  'Entreprises et bureaux',
                  'Collectivités locales',
                  'Contrats d\'entretien annuels',
                  'Interventions régulières planifiées',
                  'Facturation adaptée',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm" style={{ color: '#8C8F94' }}>
                    <CheckCircle size={14} style={{ color: '#80BC00' }} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA — aide au choix */}
      <section className="bg-white py-10">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <div
            className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border px-6 py-5"
            style={{ borderColor: '#EDEDED', backgroundColor: '#F7F5F0' }}
          >
            <p className="text-sm font-medium" style={{ color: '#2F2F2F' }}>
              <span className="font-bold">Vous ne savez pas quel service choisir ?</span>
              <span style={{ color: '#8C8F94' }}> Décrivez-nous votre projet, nous vous orienterons.</span>
            </p>
            <Link
              href="/contact"
              className="flex-shrink-0 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#0B3D2C', color: '#ffffff' }}
            >
              Contactez-nous <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center" style={{ backgroundColor: '#0B3D2C' }}>
        <div className="container mx-auto max-w-xl px-4 sm:px-6">
          <h2 className="font-display text-2xl font-bold text-white mb-3">
            Votre projet, notre expertise
          </h2>
          <p className="mb-6 text-green-100">Devis gratuit, réponse sous 24h.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/devis"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-bold transition-colors hover:opacity-90"
              style={{ backgroundColor: '#80BC00', color: '#ffffff', boxShadow: 'rgb(128, 188, 0) 0px 0px 25px -14px' }}
            >
              Demander un devis
            </Link>
            <a
              href="tel:+33674734698"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-6 py-3 font-bold text-white transition-colors hover:bg-white/25"
            >
              <Phone size={16} aria-hidden="true" /> 06 74 73 46 98
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
