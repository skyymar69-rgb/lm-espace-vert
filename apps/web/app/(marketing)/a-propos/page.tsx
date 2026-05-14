import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'À propos de LM Espace Vert — Notre histoire et nos valeurs',
  description:
    "Découvrez l'histoire, les valeurs et l'équipe de LM Espace Vert, paysagiste créateur à Lyon depuis plus de 15 ans.",
  alternates: { canonical: 'https://www.lmespacevert.fr/a-propos' },
}

const values = [
  { title: 'Expertise du geste', desc: 'Chaque taille, chaque plantation est pensée pour la santé et la beauté durable de vos végétaux.' },
  { title: 'Amour du vivant', desc: 'Nous travaillons avec la nature, pas contre elle. Nos pratiques respectent la biodiversité.' },
  { title: 'Rigueur & ponctualité', desc: 'Délais tenus, chantiers propres, communication transparente.' },
  { title: 'Partenariat durable', desc: 'Nous accompagnons nos clients dans la durée, bien au-delà de la livraison du chantier.' },
]

export default function AProposPage() {
  return (
    <>
      {/* Breadcrumb */}
      <nav aria-label="Fil d'Ariane" className="border-b border-[--color-border] bg-[--color-bg-subtle]">
        <div className="container mx-auto max-w-7xl px-4 py-3 sm:px-6">
          <ol role="list" className="flex items-center gap-2 text-sm text-[--color-fg-subtle]">
            <li><Link href="/" className="hover:text-[--color-fg] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[--color-focus]">Accueil</Link></li>
            <li aria-hidden="true">/</li>
            <li><span aria-current="page" className="text-[--color-fg]">À propos</span></li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-[--color-forest-900] py-24 text-center">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-[--color-gold-300]">
            Notre histoire
          </p>
          <h1 className="mt-2 font-display text-[clamp(2.25rem,5vw,3.75rem)] font-normal text-white">
            Architectes d'extérieurs depuis plus de 15 ans
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-[--color-forest-200]">
            LM Espace Vert, c'est une équipe passionnée qui transforme chaque espace extérieur
            en lieu de vie unique, avec l'expertise du geste et l'amour du vivant.
          </p>
        </div>
      </section>

      {/* Story */}
      <section aria-labelledby="story-heading" className="py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 id="story-heading" className="font-display text-[clamp(1.75rem,3.5vw,2.5rem)] text-[--color-fg]">
                Notre histoire
              </h2>
              <div className="mt-6 space-y-4 text-[--color-fg-muted]">
                <p>
                  Fondée par des passionnés de l'art des jardins, LM Espace Vert est née de la conviction
                  qu'un extérieur bien pensé transforme profondément la qualité de vie.
                </p>
                <p>
                  Depuis nos débuts, nous avons accompagné des centaines de familles et de professionnels
                  dans la création et l'entretien de leurs espaces verts, des terrasses urbaines aux parcs
                  de demeures.
                </p>
                <p>
                  Notre approche : écouter, conseiller, réaliser avec soin. Chaque projet est unique,
                  chaque jardin raconte une histoire.
                </p>
              </div>
            </div>
            {/* Image placeholder */}
            <div className="aspect-[4/3] rounded-xl bg-[--color-bg-subtle]" aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* Values */}
      <section aria-labelledby="values-heading" className="bg-[--color-bg-subtle] py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <h2 id="values-heading" className="text-center font-display text-[clamp(1.75rem,3.5vw,2.5rem)] text-[--color-fg]">
            Nos valeurs
          </h2>
          <ul role="list" className="mt-12 grid gap-6 sm:grid-cols-2">
            {values.map((v) => (
              <li key={v.title} className="flex gap-4 rounded-xl bg-[--color-bg-elevated] p-6">
                <CheckCircle size={24} aria-hidden="true" className="mt-0.5 shrink-0 text-[--color-accent]" />
                <div>
                  <h3 className="font-semibold text-[--color-fg]">{v.title}</h3>
                  <p className="mt-1 text-sm text-[--color-fg-muted]">{v.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <div className="container mx-auto max-w-xl px-4 sm:px-6">
          <h2 className="font-display text-2xl text-[--color-fg]">Envie de travailler ensemble ?</h2>
          <p className="mt-3 text-[--color-fg-muted]">Contactez-nous pour discuter de votre projet.</p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-[--color-accent] px-6 py-3 font-semibold text-[--color-accent-fg] transition-colors hover:bg-[--color-gold-500] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[--color-focus]"
          >
            Nous contacter <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  )
}
