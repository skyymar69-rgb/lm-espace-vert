import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { JsonLd } from '@/components/seo/json-ld'

export const metadata: Metadata = {
  title: 'Nos services paysagers — Création, Entretien, Élagage',
  description:
    "LM Espace Vert propose la création de jardins, l'entretien régulier, l'élagage, la maçonnerie paysagère et l'arrosage automatique à Lyon.",
  alternates: { canonical: 'https://www.lmespacevert.fr/services' },
}

const services = [
  {
    slug: 'creation',
    emoji: '🌿',
    title: 'Création de jardins',
    description:
      'Conception et réalisation clé en main : étude du terrain, plan de masse, sélection végétale, terrassement, plantations et aménagements décoratifs.',
    benefits: ['Plans 3D & visite virtuelle', 'Végétaux garantis 1 an', 'Accompagnement post-création'],
  },
  {
    slug: 'entretien',
    emoji: '✂️',
    title: 'Entretien régulier',
    description:
      "Formules sur-mesure pour garder votre jardin impeccable toute l'année : tonte, taille, désherbage, fertilisation et traitement préventif.",
    benefits: ["Contrats mensuels ou trimestriels", "Équipes fixes et identifiées", "Rapport d'intervention"],
  },
  {
    slug: 'elagage',
    emoji: '🌳',
    title: 'Élagage & Abattage',
    description:
      'Interventions en hauteur par des arboristes certifiés : élagage de formation, abattage dirigé, broyage sur place.',
    benefits: ['Certifiés European Tree Worker', 'Évacuation des rémanents', 'Conseil sanitaire arbre'],
  },
  {
    slug: 'maconnerie',
    emoji: '🧱',
    title: 'Maçonnerie paysagère',
    description:
      'Création de terrasses, allées, escaliers, murets et clôtures en pierre naturelle, bois et matériaux nobles.',
    benefits: ["Matériaux durables & écologiques", "Pose soignée à joints fins", "Garantie 2 ans main d'œuvre"],
  },
  {
    slug: 'arrosage',
    emoji: '💧',
    title: 'Arrosage automatique',
    description:
      "Installation et maintenance de systèmes d'arrosage intelligents : programmateurs, arroseurs pop-up, goutte-à-goutte, capteurs de pluie.",
    benefits: ["Jusqu'à 50% d'économie d'eau", "Programmation saisonnière", "SAV sous 48h"],
  },
] as const

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.lmespacevert.fr' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.lmespacevert.fr/services' },
  ],
}

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      {/* Breadcrumb */}
      <nav aria-label="Fil d'Ariane" className="border-b border-[--color-border] bg-[--color-bg-subtle]">
        <div className="container mx-auto max-w-7xl px-4 py-3 sm:px-6">
          <ol role="list" className="flex items-center gap-2 text-sm text-[--color-fg-subtle]">
            <li><Link href="/" className="hover:text-[--color-fg] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[--color-focus]">Accueil</Link></li>
            <li aria-hidden="true">/</li>
            <li><span aria-current="page" className="text-[--color-fg]">Services</span></li>
          </ol>
        </div>
      </nav>

      {/* Header */}
      <section className="py-16 text-center">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-[--color-accent]">
            Notre expertise
          </p>
          <h1 className="mt-2 font-display text-[clamp(2.25rem,5vw,3.75rem)] text-[--color-fg]">
            Nos services paysagers
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-[--color-fg-muted]">
            De la création à l'entretien, nous maîtrisons toutes les facettes de l'aménagement extérieur.
            Chaque intervention est signée par une équipe passionnée.
          </p>
        </div>
      </section>

      {/* Services list */}
      <section aria-label="Liste des services" className="pb-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <ul role="list" className="space-y-8">
            {services.map((service, i) => (
              <li
                key={service.slug}
                className={`flex flex-col gap-8 rounded-xl border border-[--color-border] bg-[--color-bg-elevated] p-8 shadow-[--shadow-sm] lg:flex-row ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="flex-1">
                  <span className="text-5xl" aria-hidden="true">{service.emoji}</span>
                  <h2 className="mt-4 font-display text-2xl text-[--color-fg]">{service.title}</h2>
                  <p className="mt-3 text-[--color-fg-muted]">{service.description}</p>
                  <ul role="list" className="mt-4 space-y-1">
                    {service.benefits.map((b) => (
                      <li key={b} className="flex items-center gap-2 text-sm text-[--color-fg-muted]">
                        <span className="text-[--color-accent]" aria-hidden="true">✓</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex gap-3">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 rounded-md bg-[--color-accent] px-5 py-2.5 text-sm font-semibold text-[--color-accent-fg] transition-colors hover:bg-[--color-gold-500] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[--color-focus]"
                    >
                      En savoir plus <ArrowRight size={14} aria-hidden="true" />
                    </Link>
                    <Link
                      href="/devis"
                      className="inline-flex items-center gap-2 rounded-md border border-[--color-border] px-5 py-2.5 text-sm font-medium text-[--color-fg] transition-colors hover:bg-[--color-bg-subtle] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[--color-focus]"
                    >
                      Devis gratuit
                    </Link>
                  </div>
                </div>
                {/* Image placeholder */}
                <div className="h-48 flex-1 rounded-lg bg-[--color-bg-subtle] lg:h-auto" aria-hidden="true" />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
