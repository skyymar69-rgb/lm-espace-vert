import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Leaf, Award, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: "À propos de LM Espace Vert — Léo Maurice, paysagiste à Lyon",
  description:
    "Découvrez l'histoire, les valeurs et l'équipe de LM Espace Vert, paysagiste professionnel à Saint-Didier-au-Mont-d'Or depuis 2019.",
  alternates: { canonical: 'https://www.lmespacevert.fr/a-propos' },
}

const values = [
  {
    icon: <Leaf size={24} aria-hidden="true" />,
    title: 'Éco-responsabilité',
    desc: 'Nous privilégions des produits respectueux de l\'environnement, des végétaux adaptés au climat local et une politique zéro pesticide pour des jardins sains et durables.',
  },
  {
    icon: <Award size={24} aria-hidden="true" />,
    title: 'Passion & Expertise',
    desc: 'Avec 5 ans d\'expérience et une formation continue, Léo apporte un savoir-faire reconnu à chaque chantier. La passion du métier se ressent dans chaque détail.',
  },
  {
    icon: <Users size={24} aria-hidden="true" />,
    title: 'Service personnalisé',
    desc: 'Chaque jardin est unique, chaque client l\'est aussi. Nous prenons le temps d\'écouter vos envies pour vous proposer un projet sur mesure, avec devis gratuit.',
  },
]

const timeline = [
  { year: '2019', label: 'Création de LM Espace Vert' },
  { year: '2021', label: 'Développement, 100+ clients' },
  { year: '2023', label: 'Spécialisation en création paysagère' },
  { year: '2025', label: '200+ projets réalisés' },
]

export default function AProposPage() {
  return (
    <>
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
            {/* Image */}
            <div>
              <Image
                src="/images/presentation.webp"
                alt="Léo Maurice, fondateur de LM Espace Vert, paysagiste à Saint-Didier-au-Mont-d'Or"
                width={600}
                height={384}
                className="rounded-2xl object-cover w-full h-96"
                priority
              />
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
                <div className="flex flex-col sm:flex-row sm:items-center gap-0">
                  {timeline.map((item, i) => (
                    <div key={item.year} className="flex sm:flex-1 items-start sm:flex-col gap-3 sm:gap-1 sm:items-center sm:text-center">
                      <div className="flex sm:flex-col items-center sm:items-center gap-2 sm:gap-1 flex-1">
                        <div
                          className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold"
                          style={{ backgroundColor: '#80BC00' }}
                        >
                          {item.year.slice(2)}
                        </div>
                        <div className="sm:mt-2">
                          <p className="text-xs font-bold" style={{ color: '#80BC00' }}>{item.year}</p>
                          <p className="text-xs text-[#8C8F94] leading-snug max-w-[120px]">{item.label}</p>
                        </div>
                      </div>
                      {i < timeline.length - 1 && (
                        <div className="hidden sm:block flex-1 h-px mt-5" style={{ backgroundColor: '#EDEDED' }} />
                      )}
                    </div>
                  ))}
                </div>
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

      {/* CTA */}
      <section className="py-16 text-center" style={{ backgroundColor: '#0B3D2C' }}>
        <div className="container mx-auto max-w-xl px-4 sm:px-6">
          <h2 className="font-display text-2xl font-bold text-white mb-3">
            Travaillons ensemble
          </h2>
          <p className="text-green-200 mb-8">
            Confiez votre jardin à un paysagiste passionné. Devis gratuit, sans engagement.
          </p>
          <Link
            href="/devis"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-opacity hover:opacity-90"
            style={{ backgroundColor: '#80BC00', color: '#ffffff', boxShadow: 'rgb(128, 188, 0) 0px 0px 25px -14px' }}
          >
            Demander un devis gratuit
            <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  )
}
