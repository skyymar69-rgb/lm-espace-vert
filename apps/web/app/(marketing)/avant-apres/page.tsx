import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, MapPin } from 'lucide-react'
import { JsonLd } from '@/components/seo/json-ld'
import { beforeAfterPairs } from '@/lib/realisations-photos'

export const metadata: Metadata = {
  title: "Avant / Après — Transformations jardins par LM Espace Vert",
  description: "Découvrez les transformations réalisées par LM Espace Vert : galerie avant/après de nos chantiers à Lyon et Monts d'Or.",
  alternates: { canonical: 'https://www.lmespacevert.fr/avant-apres' },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.lmespacevert.fr' },
    { '@type': 'ListItem', position: 2, name: 'Avant / Après', item: 'https://www.lmespacevert.fr/avant-apres' },
  ],
}

const projects = beforeAfterPairs

export default function AvantApresPage() {
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
              <li><span aria-current="page" style={{ color: '#2F2F2F' }}>Avant / Après</span></li>
            </ol>
          </nav>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#749A30' }}>
              NOS RÉALISATIONS
            </p>
            <h1
              className="font-display text-[clamp(2.5rem,5vw,3.75rem)] font-bold leading-tight"
              style={{ color: '#2F2F2F' }}
            >
              Avant / Après —{' '}
              <span style={{ color: '#4A6320' }}>Nos transformations</span>
            </h1>
            <p className="mt-4 text-lg" style={{ color: '#8C8F94' }}>
              Des jardins méconnaissables. Chaque chantier raconte une histoire de transformation.
              Découvrez nos réalisations en images, de l&apos;état initial au résultat final.
            </p>
          </div>
        </div>
      </section>

      {/* Grille avant/après */}
      <section className="bg-white py-16 lg:py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-12">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className="rounded-2xl border border-[#EDEDED] overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Images côte à côte */}
                <div className="grid grid-cols-1 sm:grid-cols-2 relative">
                  {/* Avant */}
                  <div className="relative aspect-[4/3] sm:aspect-[3/2]">
                    <Image
                      src={project.avant}
                      alt={`Avant — ${project.title}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 50vw"
                      priority={index < 2}
                    />
                    <span
                      className="absolute top-3 left-3 rounded-full px-3 py-1 text-xs font-bold text-white"
                      style={{ backgroundColor: 'rgba(47,47,47,0.75)' }}
                    >
                      Avant
                    </span>
                  </div>

                  {/* Séparateur vertical (desktop) / horizontal (mobile) */}
                  <div
                    className="hidden sm:flex absolute inset-y-0 left-1/2 -translate-x-1/2 z-10 items-center justify-center"
                    aria-hidden="true"
                  >
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-md"
                      style={{ backgroundColor: '#4A6320' }}
                    >
                      →
                    </div>
                  </div>

                  {/* Après */}
                  <div className="relative aspect-[4/3] sm:aspect-[3/2]">
                    <Image
                      src={project.apres}
                      alt={`Après — ${project.title}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                    <span
                      className="absolute top-3 left-3 rounded-full px-3 py-1 text-xs font-bold text-white"
                      style={{ backgroundColor: 'rgba(74,99,32,0.85)' }}
                    >
                      Après
                    </span>
                  </div>
                </div>

                {/* Infos */}
                <div className="p-6 sm:p-8 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap mb-2">
                      <span
                        className="rounded-full px-2.5 py-0.5 text-xs font-semibold"
                        style={{ backgroundColor: 'rgba(116,154,48,0.12)', color: '#4A6320' }}
                      >
                        {project.tag}
                      </span>
                      <span className="flex items-center gap-1 text-xs" style={{ color: '#8C8F94' }}>
                        <MapPin size={11} aria-hidden="true" />
                        {project.ville}
                      </span>
                    </div>
                    <h2 className="font-display text-xl font-bold mb-2" style={{ color: '#2F2F2F' }}>
                      {project.title}
                    </h2>
                    <p className="text-sm leading-relaxed" style={{ color: '#8C8F94' }}>
                      {project.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ backgroundColor: '#243238' }}>
        <div className="container mx-auto max-w-2xl px-4 sm:px-6 text-center">
          <h2 className="font-display text-3xl font-bold mb-3" style={{ color: '#ffffff' }}>
            Votre jardin mérite la même transformation
          </h2>
          <p className="mb-8" style={{ color: '#bbf7d0' }}>
            Demandez votre devis gratuit. Léo se déplace chez vous pour évaluer votre projet et vous proposer une solution personnalisée.
          </p>
          <Link
            href="/devis"
            className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold transition-colors hover:bg-[#7E3A37]"
            style={{ backgroundColor: '#9E4B47', color: '#ffffff' }}
          >
            Demander un devis gratuit
            <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  )
}
