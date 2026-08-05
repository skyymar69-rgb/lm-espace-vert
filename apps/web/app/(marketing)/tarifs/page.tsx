import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Scissors, Leaf, Sprout, TreeDeciduous, Droplets, Hammer } from 'lucide-react'
import type { LucideProps } from 'lucide-react'
import { JsonLd } from '@/components/seo/json-ld'
import { PriceEstimator } from '@/components/ui/price-estimator'
import { NewsletterSignup } from '@/components/ui/newsletter-signup'

type IconFC = React.ComponentType<LucideProps>

export const metadata: Metadata = {
  title: "Tarifs Paysagiste Lyon Nord | LM Espace Vert — Prix & Devis",
  description:
    "Découvrez les fourchettes de prix de LM Espace Vert : entretien espaces verts, taille de haies, création de jardins, élagage, arrosage automatique. Devis gratuit.",
  alternates: { canonical: 'https://www.lm-espace-vert.fr/tarifs' },
  openGraph: {
    title: "Tarifs Paysagiste Lyon Nord | LM Espace Vert",
    description: "Fourchettes de prix et devis gratuit. Paysagiste Lyon Nord, rayon 20 km.",
  },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.lm-espace-vert.fr' },
    { '@type': 'ListItem', position: 2, name: 'Tarifs', item: 'https://www.lm-espace-vert.fr/tarifs' },
  ],
}

const priceSpecificationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'PriceSpecification',
  name: 'Tarifs LM Espace Vert — Paysagiste Lyon Nord',
  description: 'Fourchettes de prix indicatives pour les prestations paysagères de LM Espace Vert dans un rayon de 20 km autour de Saint-Didier-au-Mont-d\'Or',
  priceCurrency: 'EUR',
  eligibleRegion: {
    '@type': 'Place',
    name: 'Lyon Nord, Saint-Didier-au-Mont-d\'Or, Caluire, Écully, Limonest',
  },
}

const faqTarifsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Combien coûte un entretien de jardin à Lyon ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Un entretien régulier de jardin à Lyon coûte entre 50 et 280 € par passage selon la superficie (de < 100 m² à > 600 m²) et la fréquence. Le devis est gratuit et sans engagement.",
      },
    },
    {
      '@type': 'Question',
      name: "Quel est le prix d'une taille de haies à Lyon ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La taille de haies coûte entre 80 et 700 € selon la superficie et la hauteur de la haie. Pour un jardin moyen (100-300 m²), comptez entre 150 et 250 €.",
      },
    },
    {
      '@type': 'Question',
      name: "Quel est le coût d'une création de jardin à Lyon ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La création d'un jardin à Lyon varie de 1 500 € pour un petit espace (< 100 m²) jusqu'à plus de 30 000 € pour un grand projet (> 600 m²). Ces prix incluent la conception, les plantations et l'aménagement.",
      },
    },
    {
      '@type': 'Question',
      name: 'Les devis sont-ils gratuits ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, tous nos devis sont gratuits, détaillés et sans engagement. Nous nous déplaçons chez vous pour évaluer votre projet et vous remettons un devis précis sous 48h.",
      },
    },
  ],
}

const pricingData: Array<{
  id: string
  title: string
  Icon: IconFC
  description: string
  href: string
  headers: string[]
  rows: Array<Record<string, string>>
}> = [
  {
    id: 'entretien',
    title: "Entretien d'espaces verts",
    Icon: Scissors,
    description: "Tonte, taille de haies basique, désherbage, soufflage. Tarif par passage.",
    href: '/services/entretien-espaces-verts',
    rows: [
      { surface: '< 100 m²',    hebdo: '55 – 80 €',   mensuel: '50 – 75 €',   ponctuel: '60 – 90 €' },
      { surface: '100 – 300 m²', hebdo: '80 – 120 €',  mensuel: '70 – 110 €',  ponctuel: '90 – 140 €' },
      { surface: '300 – 600 m²', hebdo: '120 – 180 €', mensuel: '100 – 150 €', ponctuel: '130 – 200 €' },
      { surface: '> 600 m²',    hebdo: '180 – 280 €', mensuel: '140 – 220 €', ponctuel: '200 – 320 €' },
    ],
    headers: ['Superficie', 'Hebdomadaire', 'Mensuel', 'Ponctuel'],
  },
  {
    id: 'haies',
    title: 'Taille de haies',
    Icon: Leaf,
    description: "Taille soignée de haies formelles ou libres. Prix par prestation.",
    href: '/services/entretien-espaces-verts',
    rows: [
      { surface: '< 100 m²',    tarif: '80 – 140 €',   includes: 'Haie ≤ 10 ml / 1,5 m' },
      { surface: '100 – 300 m²', tarif: '150 – 250 €',  includes: 'Haie 10-30 ml / 1,5-2 m' },
      { surface: '300 – 600 m²', tarif: '250 – 400 €',  includes: 'Haie 30-60 ml / 2-3 m' },
      { surface: '> 600 m²',    tarif: '400 – 700 €',  includes: 'Haie > 60 ml / >3 m' },
    ],
    headers: ['Superficie', 'Fourchette de prix', 'Inclus'],
  },
  {
    id: 'creation',
    title: 'Création de jardins',
    Icon: Sprout,
    description: "Conception paysagère sur-mesure, fourniture et plantation. Tarif clé en main.",
    href: '/services/creation-jardins',
    rows: [
      { surface: '< 100 m²',    tarif: '1 500 – 3 500 €',  detail: 'Jardinets, cours, terrasses végétalisées' },
      { surface: '100 – 300 m²', tarif: '3 500 – 7 000 €',  detail: 'Jardins de maisons individuelles' },
      { surface: '300 – 600 m²', tarif: '7 000 – 15 000 €', detail: 'Grandes propriétés, lotissements' },
      { surface: '> 600 m²',    tarif: '15 000 – 30 000 €', detail: 'Parcs résidentiels, professionnels' },
    ],
    headers: ['Superficie', 'Fourchette de prix', 'Type de projet'],
  },
  {
    id: 'elagage',
    title: 'Élagage & Abattage',
    Icon: TreeDeciduous,
    description: "Élagage raisonné, abattage sécurisé, broyage des rémanents.",
    href: '/services/elagage-abattage',
    rows: [
      { surface: 'Arbre ≤ 5 m',   tarif: '200 – 400 €',   detail: 'Arbustes, petits fruitiers' },
      { surface: 'Arbre 5-10 m',  tarif: '350 – 600 €',   detail: 'Fruitiers adultes, ornemental moyen' },
      { surface: 'Arbre 10-15 m', tarif: '600 – 1 200 €',  detail: 'Grands arbres de hautes tiges' },
      { surface: 'Arbre > 15 m',  tarif: '1 200 – 2 500 €', detail: 'Arbres remarquables, abattage' },
    ],
    headers: ['Hauteur arbre', 'Fourchette de prix', 'Type'],
  },
  {
    id: 'arrosage',
    title: 'Arrosage automatique',
    Icon: Droplets,
    description: "Installation complète : pose des tuyaux, programmateur, têtes de diffusion.",
    href: '/services/arrosage-automatique',
    rows: [
      { surface: '< 100 m²',    tarif: '800 – 1 500 €',   detail: '3-5 zones, programmateur de base' },
      { surface: '100 – 300 m²', tarif: '1 500 – 3 000 €',  detail: '6-12 zones, programmateur WiFi' },
      { surface: '300 – 600 m²', tarif: '3 000 – 5 500 €',  detail: '12-20 zones, système intelligent' },
      { surface: '> 600 m²',    tarif: '5 500 – 10 000 €', detail: '20+ zones, centrale domotique' },
    ],
    headers: ['Superficie', 'Fourchette de prix', 'Inclus'],
  },
  {
    id: 'terrassement',
    title: 'Terrassement & Maçonnerie paysagère',
    Icon: Hammer,
    description: "Terrasses, allées, murets, escaliers en pierres naturelles ou pavés.",
    href: '/services/maconnerie-paysagere',
    rows: [
      { surface: '< 50 m²',    tarif: '2 000 – 4 000 €',   detail: 'Petite terrasse, allée simple' },
      { surface: '50 – 150 m²', tarif: '4 000 – 8 000 €',   detail: 'Grande terrasse, allée pavée' },
      { surface: '150 – 300 m²',tarif: '8 000 – 16 000 €',  detail: 'Aménagement complet extérieur' },
      { surface: '> 300 m²',   tarif: '16 000 – 35 000 €', detail: 'Projet paysager complet' },
    ],
    headers: ['Surface travaux', 'Fourchette de prix', 'Type'],
  },
]

export default function TarifsPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={priceSpecificationJsonLd} />
      <JsonLd data={faqTarifsJsonLd} />

      {/* Breadcrumb */}
      <nav aria-label="Fil d'Ariane" className="bg-white border-b border-[#EDEDED]">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 py-3">
          <ol className="flex items-center gap-2 text-xs" style={{ color: '#8C8F94' }}>
            <li><Link href="/" className="hover:underline" style={{ color: '#4A6320' }}>Accueil</Link></li>
            <li aria-hidden="true">/</li>
            <li style={{ color: '#2F2F2F' }}>Tarifs</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ backgroundColor: '#F4F1E9' }} className="py-14 lg:py-20 border-b border-[#EDEDED]">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#749A30' }}>
              Prix indicatifs
            </p>
            <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4 leading-tight" style={{ color: '#243238' }}>
              Tarifs paysagiste<br />Lyon Nord
            </h1>
            <p className="text-lg mb-6 leading-relaxed" style={{ color: '#8C8F94' }}>
              Fourchettes de prix indicatives pour chaque prestation, adaptées à votre superficie et vos besoins. Devis gratuit et précis sur site.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/devis"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors hover:bg-[#7E3A37]"
                style={{ backgroundColor: '#9E4B47', color: '#ffffff' }}
              >
                Demander un devis gratuit <ArrowRight size={14} />
              </Link>
              <Link
                href="#estimateur"
                className="inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold hover:border-[#749A30] transition-colors"
                style={{ borderColor: '#EDEDED', color: '#2F2F2F' }}
              >
                Estimer mon budget
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-10">

          {/* Left: pricing tables */}
          <div className="lg:col-span-2 space-y-12">
            {pricingData.map((service) => (
              <section key={service.id} aria-labelledby={`tarif-${service.id}`}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg flex-shrink-0" style={{ backgroundColor: 'rgba(116,154,48,0.10)' }}>
                    <service.Icon size={18} aria-hidden="true" style={{ color: '#4A6320' }} />
                  </span>
                  <div>
                    <h2 id={`tarif-${service.id}`} className="font-display text-xl font-bold" style={{ color: '#243238' }}>
                      {service.title}
                    </h2>
                    <p className="text-sm" style={{ color: '#8C8F94' }}>{service.description}</p>
                  </div>
                </div>

                <div className="rounded-2xl border overflow-hidden" style={{ borderColor: '#EDEDED' }}>
                  <table className="w-full text-sm">
                    <thead>
                      <tr style={{ backgroundColor: '#F4F1E9' }}>
                        {service.headers.map((h) => (
                          <th
                            key={h}
                            className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide"
                            style={{ color: '#8C8F94' }}
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {service.rows.map((row, idx) => (
                        <tr
                          key={idx}
                          className="border-t"
                          style={{ borderColor: '#EDEDED', backgroundColor: idx % 2 === 0 ? '#ffffff' : '#FAFAF8' }}
                        >
                          <td className="px-4 py-3 font-medium" style={{ color: '#2F2F2F' }}>
                            {row.surface}
                          </td>
                          {'hebdo' in row ? (
                            <>
                              <td className="px-4 py-3" style={{ color: '#4A6320' }}>{row.hebdo}</td>
                              <td className="px-4 py-3" style={{ color: '#4A6320' }}>{row.mensuel}</td>
                              <td className="px-4 py-3" style={{ color: '#4A6320' }}>{row.ponctuel}</td>
                            </>
                          ) : 'tarif' in row ? (
                            <>
                              <td className="px-4 py-3 font-semibold" style={{ color: '#4A6320' }}>{row.tarif}</td>
                              <td className="px-4 py-3 text-xs" style={{ color: '#8C8F94' }}>
                                {'detail' in row ? row.detail : 'includes' in row ? row.includes : ''}
                              </td>
                            </>
                          ) : null}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="flex items-center justify-between mt-3">
                  <p className="text-xs italic" style={{ color: '#8C8F94' }}>
                    Prix indicatifs TTC · Rayon 20 km
                  </p>
                  <Link
                    href={service.href}
                    className="text-xs font-semibold hover:underline flex items-center gap-1"
                    style={{ color: '#4A6320' }}
                  >
                    En savoir plus <ArrowRight size={11} />
                  </Link>
                </div>
              </section>
            ))}

            {/* Note légale */}
            <div
              className="rounded-xl p-4 border text-sm leading-relaxed"
              style={{ backgroundColor: '#F4F1E9', borderColor: '#EDEDED', color: '#8C8F94' }}
            >
              <strong style={{ color: '#2F2F2F' }}>Prix indicatifs TTC</strong>, valables dans un rayon de 20 km autour de Saint-Didier-au-Mont-d&apos;Or. Ces fourchettes sont données à titre indicatif et peuvent varier selon la complexité du chantier, l&apos;accessibilité du terrain et les matériaux choisis. <strong style={{ color: '#2F2F2F' }}>Devis gratuit sur site, sans engagement.</strong>
            </div>

            {/* FAQ */}
            <section aria-label="Questions fréquentes sur les prix">
              <h2 className="font-display text-3xl font-bold mb-6" style={{ color: '#243238' }}>
                Questions fréquentes sur nos prix
              </h2>
              <div className="space-y-3">
                {[
                  {
                    q: 'Combien coûte un entretien de jardin à Lyon ?',
                    a: "Un entretien régulier coûte entre 50 et 280 € par passage selon la superficie et la fréquence. Pour un jardin de 100-300 m² avec passage mensuel, comptez 70-110 € par visite.",
                  },
                  {
                    q: 'Quel est le prix d\'une taille de haies à Lyon ?',
                    a: "La taille de haies coûte entre 80 et 700 € selon la superficie. Pour un jardin moyen (100-300 m²) comptez entre 150 et 250 €. Ce tarif inclut l'évacuation des déchets verts.",
                  },
                  {
                    q: 'Quel est le coût d\'une création de jardin ?',
                    a: "La création d'un jardin varie de 1 500 € (petit espace < 100 m²) à plus de 30 000 € (parc > 600 m²). Ces prix incluent la conception, la fourniture végétale et la plantation.",
                  },
                  {
                    q: 'Les devis sont-ils gratuits ?',
                    a: "Oui, absolument. Nos devis sont gratuits, détaillés et sans engagement. Nous nous déplaçons chez vous pour évaluer le projet et vous remettons un devis précis sous 48h.",
                  },
                ].map(({ q, a }) => (
                  <details key={q} className="group rounded-xl border bg-white overflow-hidden" style={{ borderColor: '#EDEDED' }}>
                    <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none">
                      <span className="font-semibold text-sm" style={{ color: '#4A6320' }}>{q}</span>
                      <span className="text-lg font-bold ml-3 flex-shrink-0" style={{ color: '#749A30' }}>+</span>
                    </summary>
                    <div className="px-5 pb-4 text-sm leading-relaxed" style={{ color: '#8C8F94' }}>{a}</div>
                  </details>
                ))}
              </div>
            </section>

            {/* CTA finale */}
            <div
              className="rounded-2xl p-8 text-center"
              style={{ backgroundColor: '#243238' }}
            >
              <h2 className="font-display text-3xl font-bold text-white mb-3">
                Prêt à démarrer votre projet ?
              </h2>
              <p className="text-white/70 text-sm mb-6">
                Devis gratuit · Réponse sous 24h · Intervention sous 2 semaines
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link
                  href="/devis"
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors hover:bg-[#7E3A37]"
                  style={{ backgroundColor: '#9E4B47', color: '#ffffff' }}
                >
                  Demander un devis gratuit <ArrowRight size={14} />
                </Link>
                <Link
                  href="tel:+33672587353"
                  className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
                >
                  06 72 58 73 53
                </Link>
              </div>
            </div>
          </div>

          {/* Right sidebar */}
          <aside className="space-y-6">
            {/* Estimateur interactif */}
            <div id="estimateur">
              <PriceEstimator />
            </div>

            {/* Garanties */}
            <div
              className="rounded-2xl border p-5"
              style={{ backgroundColor: '#F4F1E9', borderColor: '#EDEDED' }}
            >
              <h3 className="font-display font-bold text-sm mb-4" style={{ color: '#243238' }}>
                Nos garanties
              </h3>
              <ul className="space-y-2.5">
                {[
                  'Devis gratuit et sans engagement',
                  'Prix fixes — pas de mauvaises surprises',
                  'Intervention sous 2 semaines',
                  'Assurance RC Pro à jour',
                  'Satisfaction garantie ou intervention corrective',
                ].map((g) => (
                  <li key={g} className="flex items-start gap-2 text-xs" style={{ color: '#2F2F2F' }}>
                    <CheckCircle size={13} className="flex-shrink-0 mt-0.5" style={{ color: '#749A30' }} />
                    {g}
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <NewsletterSignup variant="compact" />
            </div>

            {/* Liens services */}
            <div
              className="rounded-2xl border p-5"
              style={{ backgroundColor: '#ffffff', borderColor: '#EDEDED' }}
            >
              <h3 className="font-display font-bold text-sm mb-3" style={{ color: '#243238' }}>
                Nos services
              </h3>
              <ul className="space-y-2">
                {[
                  { label: 'Entretien espaces verts', href: '/services/entretien-espaces-verts' },
                  { label: 'Création de jardins', href: '/services/creation-jardins' },
                  { label: 'Élagage & Abattage', href: '/services/elagage-abattage' },
                  { label: 'Maçonnerie paysagère', href: '/services/maconnerie-paysagere' },
                  { label: 'Arrosage automatique', href: '/services/arrosage-automatique' },
                  { label: 'Engazonnement', href: '/services/engazonnement' },
                ].map((s) => (
                  <li key={s.href}>
                    <Link
                      href={s.href}
                      className="flex items-center gap-1.5 text-xs font-medium hover:underline"
                      style={{ color: '#4A6320' }}
                    >
                      <ArrowRight size={11} /> {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </>
  )
}
