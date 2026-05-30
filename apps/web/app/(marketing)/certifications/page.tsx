import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ShieldCheck, Award, Leaf, Wrench, CheckCircle } from 'lucide-react'
import { JsonLd } from '@/components/seo/json-ld'
import { SapSimulator } from './sap-simulator'

export const metadata: Metadata = {
  title: 'Certifications & Agréments — LM Espace Vert, paysagiste certifié',
  description: "RC Professionnelle, Agrément SAP (crédit d'impôt 50%), CERTIPHYTO, Husqvarna Partner. Découvrez les certifications de LM Espace Vert.",
  alternates: { canonical: 'https://www.lmespacevert.fr/certifications' },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.lmespacevert.fr' },
    { '@type': 'ListItem', position: 2, name: 'Certifications', item: 'https://www.lmespacevert.fr/certifications' },
  ],
}

const certifications = [
  {
    icon: ShieldCheck,
    title: 'RC Professionnelle',
    subtitle: 'Responsabilité Civile Pro',
    color: '#243238',
    badge: 'En vigueur',
    badgeColor: 'rgba(36,50,56,0.1)',
    badgeText: '#243238',
    description:
      "LM Espace Vert dispose d'une assurance responsabilité civile professionnelle en vigueur. En cas de dommage accidentel sur votre propriété durant nos interventions, vous êtes entièrement protégé. Aucun frais à votre charge.",
    points: [
      'Dommages matériels couverts',
      'Dommages corporels couverts',
      'Attestation disponible sur demande',
    ],
  },
  {
    icon: Award,
    title: 'Agrément Service à la Personne',
    subtitle: "SAP — Crédit d'impôt 50%",
    color: '#4A6320',
    badge: 'Agréé SAP',
    badgeColor: 'rgba(116,154,48,0.12)',
    badgeText: '#4A6320',
    description:
      "LM Espace Vert est agréé Service à la Personne (SAP). Conformément à l'article 199 sexdecies du Code Général des Impôts, vous bénéficiez d'un crédit d'impôt de 50% sur vos dépenses de jardinage. L'avance immédiate est disponible : vous ne payez que la moitié dès la facture.",
    points: [
      "50% de crédit d'impôt immédiat",
      'Avance immédiate disponible (Urssaf)',
      'Plafond de dépenses : 12 000 €/an',
      'Travaux de jardinage éligibles',
    ],
  },
  {
    icon: Leaf,
    title: 'CERTIPHYTO',
    subtitle: 'Certificat phytosanitaire',
    color: '#749A30',
    badge: 'Certifié',
    badgeColor: 'rgba(116,154,48,0.12)',
    badgeText: '#4A6320',
    description:
      "Le certificat CERTIPHYTO atteste de la compétence de Léo dans l'utilisation raisonnée et conforme des produits phytosanitaires. Cette certification est obligatoire pour tout professionnel du paysage utilisant des produits de traitement. Elle garantit des pratiques respectueuses de l'environnement.",
    points: [
      'Utilisation raisonnée des traitements',
      'Respect de la réglementation en vigueur',
      'Priorité aux solutions alternatives',
      'Zéro pesticide sur particuliers',
    ],
  },
  {
    icon: Wrench,
    title: 'Husqvarna Certified Partner',
    subtitle: 'Matériel professionnel certifié',
    color: '#FF8C00',
    badge: 'Partenaire officiel',
    badgeColor: 'rgba(255,140,0,0.1)',
    badgeText: '#B35F00',
    description:
      "LM Espace Vert est partenaire certifié Husqvarna. Nos équipements — tondeuses professionnelles, tronçonneuses, taille-haies, robots de tonte — sont issus de la gamme professionnelle Husqvarna, reconnue pour sa fiabilité et sa précision. Des outils à la hauteur de vos jardins.",
    points: [
      'Matériel professionnel haut de gamme',
      'Entretien préventif régulier',
      'Résultats nets et précis',
      'Moins de bruit, plus d\'efficacité',
    ],
  },
]

export default function CertificationsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      {/* Hero */}
      <section style={{ backgroundColor: '#F4F1E9' }} className="py-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <nav aria-label="Fil d'Ariane" className="mb-6">
            <ol role="list" className="flex items-center gap-2 text-sm" style={{ color: '#8C8F94' }}>
              <li><Link href="/" className="hover:text-[#2F2F2F] transition-colors">Accueil</Link></li>
              <li aria-hidden="true">/</li>
              <li><span aria-current="page" style={{ color: '#2F2F2F' }}>Certifications</span></li>
            </ol>
          </nav>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#749A30' }}>
              GARANTIES &amp; LABELS
            </p>
            <h1
              className="font-display text-[clamp(2.5rem,5vw,3.75rem)] font-bold leading-tight"
              style={{ color: '#2F2F2F' }}
            >
              Certifications &amp;{' '}
              <span style={{ color: '#4A6320' }}>Agréments</span>
            </h1>
            <p className="mt-4 text-lg" style={{ color: '#8C8F94' }}>
              RC Pro, agrément SAP, CERTIPHYTO, partenaire Husqvarna — des garanties concrètes pour votre tranquillité d&apos;esprit.
            </p>
          </div>
        </div>
      </section>

      {/* 4 cartes certifications */}
      <section className="bg-white py-16 lg:py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-8 sm:grid-cols-2">
            {certifications.map((cert) => {
              const Icon = cert.icon
              return (
                <article
                  key={cert.title}
                  className="rounded-2xl border border-[#EDEDED] shadow-sm p-8 hover:shadow-md hover:-translate-y-0.5 transition-all"
                >
                  <div className="flex items-start justify-between mb-5">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center text-white flex-shrink-0"
                      style={{ backgroundColor: cert.color }}
                    >
                      <Icon size={26} aria-hidden="true" />
                    </div>
                    <span
                      className="rounded-full px-3 py-1 text-xs font-semibold"
                      style={{ backgroundColor: cert.badgeColor, color: cert.badgeText }}
                    >
                      {cert.badge}
                    </span>
                  </div>

                  <h2 className="font-display text-xl font-bold mb-1" style={{ color: '#2F2F2F' }}>
                    {cert.title}
                  </h2>
                  <p className="text-sm font-medium mb-4" style={{ color: cert.color }}>
                    {cert.subtitle}
                  </p>
                  <p className="text-sm leading-relaxed mb-5" style={{ color: '#8C8F94' }}>
                    {cert.description}
                  </p>
                  <ul className="space-y-2">
                    {cert.points.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-sm">
                        <CheckCircle size={15} className="flex-shrink-0 mt-0.5" style={{ color: '#749A30' }} aria-hidden="true" />
                        <span style={{ color: '#2F2F2F' }}>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* Simulateur SAP */}
      <section style={{ backgroundColor: '#F4F1E9' }} className="py-16">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#749A30' }}>
              AVANTAGE FISCAL
            </p>
            <h2 className="font-display text-3xl font-bold" style={{ color: '#4A6320' }}>
              Crédit d&apos;impôt SAP — 50%
            </h2>
            <p className="mt-3 text-base max-w-xl mx-auto" style={{ color: '#8C8F94' }}>
              Grâce à l&apos;agrément SAP de LM Espace Vert, vos travaux de jardinage ouvrent droit à un crédit d&apos;impôt de 50%.
              Calculez votre économie ci-dessous.
            </p>
          </div>
          <SapSimulator />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ backgroundColor: '#243238' }}>
        <div className="container mx-auto max-w-2xl px-4 sm:px-6 text-center">
          <h2 className="font-display text-3xl font-bold mb-3" style={{ color: '#ffffff' }}>
            Profitez du crédit d&apos;impôt dès maintenant
          </h2>
          <p className="mb-8" style={{ color: '#bbf7d0' }}>
            Demandez votre devis gratuit. Léo vous accompagne dans toutes les démarches SAP pour que vous bénéficiez pleinement de l&apos;avantage fiscal.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/devis"
              className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold transition-colors hover:bg-[#7E3A37]"
              style={{ backgroundColor: '#9E4B47', color: '#ffffff' }}
            >
              Demander un devis gratuit
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
            <a
              href="tel:+33672587353"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/25"
            >
              06 72 58 73 53
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
