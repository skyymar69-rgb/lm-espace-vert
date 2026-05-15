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
} from 'lucide-react'
import { JsonLd } from '@/components/seo/json-ld'

export const metadata: Metadata = {
  title: "Nos Prestations Paysagères | LM Espace Vert",
  description: "Entretien, élagage, création de jardins, maçonnerie paysagère, arrosage automatique et engazonnement. Paysagiste à Saint-Didier-au-Mont-d'Or, rayon 20 km.",
  alternates: { canonical: 'https://www.lmespacevert.fr/services' },
  openGraph: {
    title: "Nos Prestations Paysagères | LM Espace Vert",
    description: "Entretien, élagage, création de jardins, maçonnerie paysagère, arrosage automatique et engazonnement. Paysagiste à Saint-Didier-au-Mont-d'Or, rayon 20 km.",
    url: 'https://www.lmespacevert.fr/services',
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
    image: '/images/entretien-espaces-verts.webp',
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
    image: '/images/elagage-abattage.webp',
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
    image: '/images/realisation-1.jpg',
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
    image: '/images/realisation-10.jpg',
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
    image: '/images/arrosage-automatique.webp',
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
    image: '/images/realisation-6.jpg',
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
                    <div className="mb-3 flex items-center gap-3">
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
                    <Link
                      href="/devis"
                      className="inline-flex items-center gap-2 text-sm font-semibold transition-all hover:gap-3"
                      style={{ color: '#425D07' }}
                    >
                      Devis pour ce service <ArrowRight size={14} aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              )
            })}
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
