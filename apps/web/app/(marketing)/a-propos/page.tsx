import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, CheckCircle2, Award, Leaf, Heart } from 'lucide-react'

export const metadata: Metadata = {
  title: "À propos de LM Espace Vert — Léo Maurice, paysagiste à Lyon",
  description:
    "Découvrez l'histoire, les valeurs et l'équipe de LM Espace Vert, paysagiste professionnel à Saint-Didier-au-Mont-d'Or depuis 2019.",
  alternates: { canonical: 'https://www.lmespacevert.fr/a-propos' },
}

const values = [
  {
    icon: <Award size={22} aria-hidden="true" />,
    title: 'Expertise du geste',
    desc: 'Chaque taille, chaque plantation est pensée pour la santé et la beauté durable de vos végétaux. Formation professionnelle et passion du métier.',
  },
  {
    icon: <Leaf size={22} aria-hidden="true" />,
    title: 'Amour du vivant',
    desc: 'Nous travaillons avec la nature, pas contre elle. Nos pratiques respectent la biodiversité : produits raisonnés, compostage, haies mellifères.',
  },
  {
    icon: <CheckCircle2 size={22} aria-hidden="true" />,
    title: 'Rigueur & ponctualité',
    desc: 'Délais tenus, chantiers propres, communication transparente. Votre confiance est notre priorité absolue.',
  },
  {
    icon: <Heart size={22} aria-hidden="true" />,
    title: 'Partenariat durable',
    desc: "Nous accompagnons nos clients dans la durée, bien au-delà de la livraison du chantier. Une relation de confiance qui dure.",
  },
]

const timeline = [
  { year: '2019', title: 'Création de LM Espace Vert', desc: "Léo Maurice crée LM Espace Vert à Saint-Didier-au-Mont-d'Or avec une première équipe de 2 personnes." },
  { year: '2020', title: 'Premier contrat d\'entretien annuel', desc: "Signature du premier grand contrat d'entretien avec une propriété privée à Caluire. Développement des compétences élagage." },
  { year: '2021', title: 'Extension maçonnerie paysagère', desc: "Intégration des prestations terrasse et maçonnerie paysagère. Acquisition de matériel spécialisé pour les grandes interventions." },
  { year: '2022', title: 'Plus de 100 clients', desc: "Franchissement du cap des 100 clients actifs. Lancement des contrats d'entretien premium avec rapport mensuel." },
  { year: '2023', title: 'Certification élagage', desc: "Léo obtient sa certification European Tree Worker. Intervention sur arbres remarquables et espaces sensibles." },
  { year: '2024', title: 'Arrosage automatique', desc: "Développement de la division arrosage automatique. Partenariat avec les meilleurs fournisseurs de systèmes connectés." },
  { year: '2026', title: 'Aujourd\'hui — 200+ clients', desc: "Plus de 200 clients font confiance à LM Espace Vert dans un rayon de 20 km. Note parfaite de 5/5 sur Google." },
]

const certifications = [
  { icon: '🏆', label: 'Artisan qualifié', sub: 'RGE Éco-Jardin' },
  { icon: '🌳', label: 'Certifié élagage', sub: 'European Tree Worker' },
  { icon: '💼', label: 'RC Professionnelle', sub: 'Couverture totale' },
  { icon: '🌿', label: 'Éco-responsable', sub: 'Zéro phyto' },
]

export default function AProposPage() {
  return (
    <>
      {/* Breadcrumb */}
      <nav aria-label="Fil d'Ariane" className="border-b border-[--color-border] bg-[--color-bg-subtle]">
        <div className="container mx-auto max-w-7xl px-4 py-3 sm:px-6">
          <ol role="list" className="flex items-center gap-2 text-sm text-[--color-fg-subtle]">
            <li><Link href="/" className="hover:text-[--color-fg]">Accueil</Link></li>
            <li aria-hidden="true">/</li>
            <li><span aria-current="page" className="text-[--color-fg]">À propos</span></li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="section-green-gradient py-20 text-center">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-green-300 mb-3">Notre histoire</p>
          <h1 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold text-white">
            Passion de la nature,<br />expertise du paysage
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-green-100 text-lg">
            Depuis 2019, LM Espace Vert transforme les extérieurs du nord-ouest lyonnais
            avec passion, expertise et respect du vivant.
          </p>
        </div>
      </section>

      {/* Story */}
      <section aria-labelledby="story-heading" className="py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="badge badge-light mb-4">Notre fondateur</p>
              <h2 id="story-heading" className="font-display text-3xl font-bold text-[--color-fg] sm:text-4xl mb-6">
                Léo Maurice, paysagiste passionné
              </h2>
              <div className="space-y-4 text-[--color-fg-muted] leading-relaxed">
                <p>
                  Natif du Rhône, Léo Maurice grandit entouré de jardins et développe très tôt
                  une passion pour le monde végétal. Après une formation en horticulture et paysagisme,
                  il crée <strong className="text-[--color-fg]">LM Espace Vert</strong> en 2019 à
                  Saint-Didier-au-Mont-d&apos;Or.
                </p>
                <p>
                  Son approche : écouter attentivement les envies de ses clients, conseiller avec
                  honnêteté et réaliser chaque chantier avec la même rigueur, qu&apos;il s&apos;agisse
                  d&apos;un petit jardin de 50 m² ou d&apos;un parc de demeure.
                </p>
                <p>
                  Certifié <em>European Tree Worker</em>, Léo est aujourd&apos;hui reconnu comme
                  l&apos;un des paysagistes de référence du nord-ouest lyonnais avec plus de
                  200 clients satisfaits et une note parfaite de 5/5 sur Google.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/contact" className="btn-primary">Contacter Léo <ArrowRight size={15} aria-hidden="true" /></Link>
                <Link href="/realisations" className="btn-secondary">Voir nos réalisations</Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/presentation.webp"
                alt="Léo Maurice, fondateur de LM Espace Vert"
                width={600}
                height={500}
                className="rounded-2xl object-cover w-full shadow-lg"
                style={{ aspectRatio: '6/5' }}
              />
              <div className="absolute -bottom-4 -right-4 hidden lg:block bg-[--color-bg-elevated] border border-[--color-border] rounded-xl p-4 shadow-md">
                <div className="flex gap-3">
                  {[
                    { num: '200+', label: 'Clients' },
                    { num: '5★', label: 'Google' },
                    { num: '20 km', label: 'Zone' },
                  ].map((s) => (
                    <div key={s.label} className="text-center">
                      <p className="font-display font-extrabold text-lg text-[--color-primary] leading-none">{s.num}</p>
                      <p className="text-xs text-[--color-fg-subtle]">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-pale py-16" aria-labelledby="timeline-heading">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="badge badge-light mb-3">Notre parcours</p>
            <h2 id="timeline-heading" className="font-display text-2xl font-bold text-[--color-fg] sm:text-3xl">
              5 ans de croissance et d&apos;excellence
            </h2>
          </div>
          <ol className="relative border-l-2 border-[--color-primary] pl-8 space-y-8">
            {timeline.map((item, i) => (
              <li key={item.year} className="relative">
                <div className="absolute -left-[2.7rem] w-9 h-9 rounded-full bg-[--color-primary] border-4 border-[--color-bg-subtle] flex items-center justify-center">
                  <span className="text-white text-xs font-bold" aria-hidden="true">
                    {i + 1}
                  </span>
                </div>
                <div className={`rounded-xl border border-[--color-border] bg-[--color-bg-elevated] p-5 shadow-sm ${i === timeline.length - 1 ? 'border-[--color-primary] bg-[--color-green-pale]' : ''}`}>
                  <time dateTime={item.year} className="text-xs font-bold text-[--color-primary] uppercase tracking-wider">{item.year}</time>
                  <h3 className="font-bold text-[--color-fg] mt-1">{item.title}</h3>
                  <p className="text-sm text-[--color-fg-muted] mt-1 leading-relaxed">{item.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Values */}
      <section className="section-white py-16" aria-labelledby="values-heading">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="badge badge-light mb-3">Ce qui nous guide</p>
            <h2 id="values-heading" className="font-display text-2xl font-bold text-[--color-fg] sm:text-3xl">
              Nos valeurs
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="p-6 rounded-2xl border border-[--color-border] bg-[--color-bg-elevated] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
                <div className="w-12 h-12 rounded-xl bg-[--color-green-light] flex items-center justify-center text-[--color-primary] mb-4">
                  {v.icon}
                </div>
                <h3 className="font-bold text-[--color-fg] mb-2">{v.title}</h3>
                <p className="text-sm text-[--color-fg-muted] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-pale py-12 border-y border-[--color-border]">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-[--color-fg-subtle] mb-8">
            Certifications & Garanties
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {certifications.map((c) => (
              <div key={c.label} className="trust-badge">
                <div className="trust-badge-icon"><span aria-hidden="true">{c.icon}</span></div>
                <p className="font-bold text-sm text-[--color-fg]">{c.label}</p>
                <p className="text-xs text-[--color-fg-subtle]">{c.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center">
        <div className="container mx-auto max-w-xl px-4 sm:px-6">
          <h2 className="font-display text-2xl font-bold text-[--color-fg] mb-3">
            Envie de travailler avec Léo ?
          </h2>
          <p className="text-[--color-fg-muted] mb-6">
            Contactez-nous pour discuter de votre projet. Devis gratuit et sans engagement.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/devis" className="btn-primary">Devis gratuit <ArrowRight size={15} aria-hidden="true" /></Link>
            <Link href="/contact" className="btn-secondary">Nous contacter</Link>
          </div>
        </div>
      </section>
    </>
  )
}
