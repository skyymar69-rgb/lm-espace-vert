import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Phone, Calendar, ClipboardList, Truck, Hammer, HeartHandshake } from 'lucide-react'
import { JsonLd } from '@/components/seo/json-ld'

export const metadata: Metadata = {
  title: 'Notre processus — De la visite au jardin terminé | LM Espace Vert',
  description: '5 étapes claires pour votre jardin : visite gratuite, devis détaillé, planification, réalisation et suivi. Découvrez notre méthode.',
  alternates: { canonical: 'https://www.lmespacevert.fr/processus' },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.lmespacevert.fr' },
    { '@type': 'ListItem', position: 2, name: 'Notre processus', item: 'https://www.lmespacevert.fr/processus' },
  ],
}

const steps = [
  {
    number: '01',
    icon: Calendar,
    title: 'Visite gratuite',
    timing: 'J+0 à J+2',
    timingLabel: 'Sous 48h',
    color: '#425D07',
    bg: 'rgba(66,93,7,0.06)',
    description:
      "Léo se déplace chez vous pour analyser votre terrain, comprendre vos souhaits et vos contraintes. Cette visite est entièrement gratuite et sans engagement. Ensoleillé, ombragé, en pente, argileux… chaque jardin est unique et mérite une analyse personnalisée.",
    details: [
      'Analyse du terrain et de l\'exposition',
      'Écoute de vos envies et contraintes',
      'Conseils paysagers gratuits sur place',
      'Photos du chantier pour le devis',
    ],
  },
  {
    number: '02',
    icon: ClipboardList,
    title: 'Devis détaillé',
    timing: 'J+3 à J+7',
    timingLabel: 'Sous 1 semaine',
    color: '#0B3D2C',
    bg: 'rgba(11,61,44,0.06)',
    description:
      "Suite à la visite, vous recevez un devis précis et transparent : plan schématique du projet, liste des essences végétales choisies, descriptif des travaux, délais d'intervention et tarif TTC tout compris. Aucune surprise à la facturation.",
    details: [
      'Devis détaillé ligne par ligne',
      'Plan schématique du jardin',
      'Choix des essences avec descriptifs',
      'Tarif TTC sans frais cachés',
    ],
  },
  {
    number: '03',
    icon: Truck,
    title: 'Planification',
    timing: 'J+7 à J+14',
    timingLabel: 'Après accord',
    color: '#80BC00',
    bg: 'rgba(128,188,0,0.06)',
    description:
      "Une fois le devis signé, nous planifions ensemble la date d'intervention. Nous gérons l'approvisionnement en matériaux et en plantes auprès de nos fournisseurs locaux, ainsi que la coordination logistique du chantier.",
    details: [
      'Planification concertée de la date',
      'Approvisionnement matériaux & plantes',
      'Fournisseurs locaux Rhône-Alpes',
      'Confirmation par SMS/WhatsApp',
    ],
  },
  {
    number: '04',
    icon: Hammer,
    title: 'Réalisation',
    timing: 'Selon planification',
    timingLabel: 'Jour J',
    color: '#425D07',
    bg: 'rgba(66,93,7,0.06)',
    description:
      "Notre équipe intervient avec soin et professionnalisme. Le chantier est tenu propre et organisé du premier au dernier jour. Vous recevez des photos de suivi chaque jour de chantier pour suivre l'avancement en temps réel.",
    details: [
      'Équipe ponctuelle et professionnelle',
      'Chantier propre et sécurisé',
      'Photos de suivi quotidiennes',
      'Communication directe avec Léo',
    ],
  },
  {
    number: '05',
    icon: HeartHandshake,
    title: 'Suivi & Garanties',
    timing: 'J+30',
    timingLabel: 'Après réalisation',
    color: '#0B3D2C',
    bg: 'rgba(11,61,44,0.06)',
    description:
      "Nous ne disparaissons pas une fois les travaux terminés. Une visite de contrôle est effectuée 30 jours après la réalisation. Toutes nos plantations sont garanties 1 an. Et bien sûr, le support WhatsApp reste illimité pour toutes vos questions.",
    details: [
      'Visite de contrôle à 30 jours',
      'Garantie plantations 1 an',
      'Support WhatsApp illimité',
      'Conseils d\'entretien personnalisés',
    ],
  },
]

export default function ProcessusPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      {/* Hero */}
      <section style={{ backgroundColor: '#F7F5F0' }} className="py-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <nav aria-label="Fil d'Ariane" className="mb-6">
            <ol role="list" className="flex items-center gap-2 text-sm" style={{ color: '#8C8F94' }}>
              <li><Link href="/" className="hover:text-[#2F2F2F] transition-colors">Accueil</Link></li>
              <li aria-hidden="true">/</li>
              <li><span aria-current="page" style={{ color: '#2F2F2F' }}>Notre processus</span></li>
            </ol>
          </nav>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#80BC00' }}>
              NOTRE MÉTHODE
            </p>
            <h1
              className="font-display text-[clamp(2.5rem,5vw,3.75rem)] font-bold leading-tight"
              style={{ color: '#2F2F2F' }}
            >
              De la visite au{' '}
              <span style={{ color: '#425D07' }}>jardin terminé</span>
            </h1>
            <p className="mt-4 text-lg" style={{ color: '#8C8F94' }}>
              5 étapes claires et transparentes pour que votre projet se déroule sans stress, du premier contact jusqu&apos;au jardin livré.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-white py-16 lg:py-20">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6">

          {/* Ligne centrale (desktop only) */}
          <div className="relative">
            <div
              className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 hidden lg:block"
              style={{ backgroundColor: '#EDEDED' }}
              aria-hidden="true"
            />

            <div className="space-y-12 lg:space-y-0">
              {steps.map((step, index) => {
                const Icon = step.icon
                const isEven = index % 2 === 0
                return (
                  <div key={step.number} className="relative lg:flex lg:items-center lg:min-h-[200px]">
                    {/* Numéro central (desktop) */}
                    <div
                      className="hidden lg:flex absolute left-1/2 -translate-x-1/2 z-10 w-14 h-14 rounded-full items-center justify-center font-display text-lg font-bold text-white shadow-md"
                      style={{ backgroundColor: step.color }}
                      aria-hidden="true"
                    >
                      {step.number}
                    </div>

                    {/* Contenu : alternance gauche/droite */}
                    <div className={`lg:w-1/2 ${isEven ? 'lg:pr-12 lg:text-right' : 'lg:pl-12 lg:ml-auto'}`}>
                      <article
                        className="rounded-2xl border border-[#EDEDED] p-7 shadow-sm hover:shadow-md transition-shadow"
                        style={{ backgroundColor: step.bg }}
                      >
                        {/* Header mobile */}
                        <div className={`flex items-start gap-4 mb-4 ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                          <div
                            className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-white lg:hidden"
                            style={{ backgroundColor: step.color }}
                          >
                            <Icon size={22} aria-hidden="true" />
                          </div>
                          <div className="hidden lg:flex flex-shrink-0 w-12 h-12 rounded-xl items-center justify-center text-white"
                            style={{ backgroundColor: step.color }}>
                            <Icon size={22} aria-hidden="true" />
                          </div>
                          <div className={isEven ? 'lg:text-right' : ''}>
                            <span
                              className="text-xs font-bold"
                              style={{ color: step.color }}
                            >
                              ÉTAPE {step.number}
                            </span>
                            <div className={`flex items-center gap-2 flex-wrap mt-0.5 ${isEven ? 'lg:justify-end' : ''}`}>
                              <h2 className="font-display text-xl font-bold" style={{ color: '#2F2F2F' }}>
                                {step.title}
                              </h2>
                              <span
                                className="rounded-full px-2.5 py-0.5 text-xs font-semibold"
                                style={{ backgroundColor: 'rgba(128,188,0,0.12)', color: '#425D07' }}
                              >
                                {step.timingLabel}
                              </span>
                            </div>
                          </div>
                        </div>

                        <p className={`text-sm leading-relaxed mb-4 ${isEven ? 'lg:text-right' : ''}`} style={{ color: '#8C8F94' }}>
                          {step.description}
                        </p>

                        <ul className={`space-y-1.5 ${isEven ? 'lg:flex lg:flex-col lg:items-end' : ''}`}>
                          {step.details.map((detail) => (
                            <li
                              key={detail}
                              className={`flex items-center gap-2 text-sm ${isEven ? 'lg:flex-row-reverse' : ''}`}
                            >
                              <span
                                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                                style={{ backgroundColor: step.color }}
                                aria-hidden="true"
                              />
                              <span style={{ color: '#2F2F2F' }}>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </article>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Réassurance */}
      <section style={{ backgroundColor: '#F7F5F0' }} className="py-12">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6">
          <div className="grid gap-4 sm:grid-cols-3 text-center">
            {[
              { value: 'Gratuit', label: 'Visite & devis', sub: 'Sans engagement' },
              { value: '24h', label: 'Délai de réponse', sub: 'Souvent moins' },
              { value: '1 an', label: 'Garantie plantations', sub: 'Incluse systématiquement' },
            ].map(({ value, label, sub }) => (
              <div key={label} className="rounded-2xl border border-[#EDEDED] bg-white p-6 shadow-sm">
                <p className="font-display text-3xl font-bold" style={{ color: '#425D07' }}>{value}</p>
                <p className="font-semibold mt-1" style={{ color: '#2F2F2F' }}>{label}</p>
                <p className="text-xs mt-0.5" style={{ color: '#8C8F94' }}>{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ backgroundColor: '#0B3D2C' }}>
        <div className="container mx-auto max-w-2xl px-4 sm:px-6 text-center">
          <h2 className="font-display text-2xl font-bold mb-3" style={{ color: '#ffffff' }}>
            Prêt à démarrer votre projet ?
          </h2>
          <p className="mb-8" style={{ color: '#bbf7d0' }}>
            La première étape est une simple visite gratuite. Léo se déplace chez vous sous 48h pour évaluer votre jardin.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/devis"
              className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#80BC00', color: '#ffffff' }}
            >
              Demander la visite gratuite
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
            <a
              href="tel:+33672587353"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/25"
            >
              <Phone size={14} aria-hidden="true" />
              06 72 58 73 53
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
