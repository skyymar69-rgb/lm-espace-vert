import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Phone, Star, ArrowRight, CheckCircle, Clock } from 'lucide-react'
import { JsonLd } from '@/components/seo/json-ld'
import { notFound } from 'next/navigation'

type VilleData = {
  slug: string
  nom: string
  nomComplet: string
  codePostal: string
  departement: string
  description: string
  specificite: string
  distance: string
  services: string[]
  quartiers: string[]
  metaTitle: string
  metaDescription: string
}

const villes: Record<string, VilleData> = {
  caluire: {
    slug: 'caluire',
    nom: 'Caluire-et-Cuire',
    nomComplet: 'Caluire-et-Cuire',
    codePostal: '69300',
    departement: 'Rhône',
    description: "Caluire-et-Cuire bénéficie d'un cadre verdoyant au confluent du Rhône et de la Saône. LM Espace Vert intervient régulièrement dans cette commune résidentielle pour l'entretien de jardins bourgeois et la création d'espaces extérieurs contemporains.",
    specificite: "avec ses villas et ses parcs privés",
    distance: "8 km",
    services: ["Entretien régulier de jardins bourgeois", "Élagage des grands arbres", "Création terrasses et allées", "Arrosage automatique"],
    quartiers: ["Mont Cindre", "Caluire-Village", "Cuire-le-Bas", "Vassieux"],
    metaTitle: "Paysagiste Caluire-et-Cuire (69300) — LM Espace Vert",
    metaDescription: "Paysagiste à Caluire-et-Cuire : création de jardins, entretien, élagage. LM Espace Vert intervient à 8 km de Saint-Didier-au-Mont-d'Or. Devis gratuit.",
  },
  ecuelly: {
    slug: 'ecuelly',
    nom: 'Écully',
    nomComplet: 'Écully',
    codePostal: '69130',
    departement: 'Rhône',
    description: "Ville résidentielle prisée au ouest de Lyon, Écully est connue pour ses propriétés de prestige et ses jardins soignés. LM Espace Vert réalise des aménagements haut de gamme adaptés au niveau d'exigence de cette commune.",
    specificite: "avec ses propriétés de prestige et jardins d'exception",
    distance: "10 km",
    services: ["Création jardins contemporains", "Maçonnerie paysagère haut de gamme", "Entretien contrats annuels", "Élagage arbres remarquables"],
    quartiers: ["Le Pérollier", "Chanteloup", "La Grange Blanche", "Les Barolles"],
    metaTitle: "Paysagiste Écully (69130) — LM Espace Vert",
    metaDescription: "Paysagiste à Écully : création de jardins haut de gamme, terrasses, entretien. LM Espace Vert intervient à 10 km. Devis gratuit sous 24h.",
  },
  tassin: {
    slug: 'tassin',
    nom: 'Tassin-la-Demi-Lune',
    nomComplet: 'Tassin-la-Demi-Lune',
    codePostal: '69160',
    departement: 'Rhône',
    description: "Tassin-la-Demi-Lune est une ville dynamique à l'ouest de Lyon, avec de nombreux pavillons et jardins à entretenir. LM Espace Vert y propose des solutions d'aménagement modernes pour les familles et les professionnels.",
    specificite: "avec ses pavillons modernes et jardins familiaux",
    distance: "12 km",
    services: ["Entretien pelouses et haies", "Création espaces de vie outdoor", "Engazonnement", "Arrosage automatique"],
    quartiers: ["Centre-ville", "Les Brosses", "Méginand", "Les Plaines"],
    metaTitle: "Paysagiste Tassin-la-Demi-Lune (69160) — LM Espace Vert",
    metaDescription: "Paysagiste à Tassin-la-Demi-Lune : entretien jardins, pelouses, haies, terrasses. LM Espace Vert à 12 km. Devis gratuit.",
  },
  limonest: {
    slug: 'limonest',
    nom: 'Limonest',
    nomComplet: 'Limonest',
    codePostal: '69760',
    departement: 'Rhône',
    description: "Limonest et ses alentours font partie de notre zone d'intervention principale. Nous réalisons régulièrement des créations paysagères ambitieuses dans cette commune verdoyante, comme en témoignent nos réalisations récentes.",
    specificite: "notre terrain de prédilection pour les créations ambitieuses",
    distance: "5 km",
    services: ["Création jardins paysagers", "Aménagement extérieur complet", "Entretien contrats", "Maçonnerie paysagère"],
    quartiers: ["Centre", "Les Mouilles", "La Mouilière", "Domaine de Lacour"],
    metaTitle: "Paysagiste Limonest (69760) — LM Espace Vert",
    metaDescription: "Paysagiste à Limonest : créations paysagères, jardins contemporains, terrasses. LM Espace Vert intervient à 5 km. Devis gratuit sous 24h.",
  },
  dardilly: {
    slug: 'dardilly',
    nom: 'Dardilly',
    nomComplet: 'Dardilly',
    codePostal: '69570',
    departement: 'Rhône',
    description: "Dardilly, commune résidentielle de l'ouest lyonnais proche de l'A6, offre un cadre de vie agréable avec de nombreuses maisons individuelles. LM Espace Vert y intervient pour la création et l'entretien de jardins de qualité.",
    specificite: "avec ses maisons individuelles et parcs résidentiels",
    distance: "7 km",
    services: ["Entretien espaces verts", "Création massifs et pelouses", "Élagage et taille haies", "Maçonnerie allées et clôtures"],
    quartiers: ["Le Bourg", "La Chapelle", "Les Grandes Roches", "Lacipière"],
    metaTitle: "Paysagiste Dardilly (69570) — LM Espace Vert",
    metaDescription: "Paysagiste à Dardilly : entretien jardins, création massifs, élagage, haies. LM Espace Vert à 7 km. Devis gratuit.",
  },
  champagne: {
    slug: 'champagne',
    nom: "Champagne-au-Mont-d'Or",
    nomComplet: "Champagne-au-Mont-d'Or",
    codePostal: '69410',
    departement: 'Rhône',
    description: "Champagne-au-Mont-d'Or est une commune résidentielle de prestige sur les coteaux du Mont d'Or, à quelques kilomètres de Saint-Didier-au-Mont-d'Or. LM Espace Vert y est particulièrement actif pour des projets d'aménagement haut de gamme.",
    specificite: "sur les coteaux du Mont d'Or, commune voisine de Saint-Didier",
    distance: "3 km",
    services: ["Création jardins haut de gamme", "Entretien propriétés de prestige", "Élagage arbres remarquables", "Terrasses en pierre naturelle"],
    quartiers: ["Le Village", "Les Balmes", "Reculon", "La Côte"],
    metaTitle: "Paysagiste Champagne-au-Mont-d'Or (69410) — LM Espace Vert",
    metaDescription: "Paysagiste à Champagne-au-Mont-d'Or : aménagement haut de gamme, jardins prestige, entretien. LM Espace Vert voisin à 3 km. Devis gratuit.",
  },
}

export function generateStaticParams() {
  return Object.keys(villes).map((slug) => ({ ville: slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ ville: string }> }): Promise<Metadata> {
  const { ville: villeSlug } = await params
  const ville = villes[villeSlug]
  if (!ville) return {}
  return {
    title: ville.metaTitle,
    description: ville.metaDescription,
    alternates: { canonical: `https://www.lmespacevert.fr/secteur/${villeSlug}` },
    openGraph: {
      title: ville.metaTitle,
      description: ville.metaDescription,
      url: `https://www.lmespacevert.fr/secteur/${villeSlug}`,
      images: [{ url: '/images/travaux-paysagers.webp', width: 1200, height: 630, alt: `Paysagiste ${ville.nom}` }],
    },
  }
}

export default async function SecteurPage({ params }: { params: Promise<{ ville: string }> }) {
  const { ville: villeSlug } = await params
  const ville = villes[villeSlug]
  if (!ville) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `https://www.lmespacevert.fr/secteur/${villeSlug}`,
    name: 'LM Espace Vert',
    description: `Paysagiste professionnel intervenant à ${ville.nom}`,
    url: `https://www.lmespacevert.fr/secteur/${villeSlug}`,
    telephone: '+33674734698',
    areaServed: {
      '@type': 'City',
      name: ville.nomComplet,
      postalCode: ville.codePostal,
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: "Saint-Didier-au-Mont-d'Or",
      postalCode: '69370',
      addressCountry: 'FR',
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.lmespacevert.fr' },
      { '@type': 'ListItem', position: 2, name: `Paysagiste ${ville.nom}`, item: `https://www.lmespacevert.fr/secteur/${villeSlug}` },
    ],
  }

  return (
    <>
      <JsonLd data={jsonLd} />
      <JsonLd data={breadcrumbSchema} />

      {/* Breadcrumb */}
      <nav aria-label="Fil d'Ariane" className="border-b border-[#EDEDED] bg-white">
        <div className="container mx-auto max-w-7xl px-4 py-3 sm:px-6">
          <ol role="list" className="flex items-center gap-2 text-sm text-[#8C8F94]">
            <li><Link href="/" className="hover:text-[#2F2F2F]">Accueil</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href="/secteur" className="hover:text-[#2F2F2F]">Secteurs</Link></li>
            <li aria-hidden="true">/</li>
            <li><span aria-current="page" className="text-[#2F2F2F]">Paysagiste {ville.nom}</span></li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative py-20 lg:py-28 overflow-hidden" style={{ backgroundColor: '#0B3D2C' }}>
        <div className="absolute inset-0 opacity-10">
          <Image src="/images/travaux-paysagers.webp" alt="" fill className="object-cover" />
        </div>
        <div className="relative container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <MapPin size={16} style={{ color: '#80BC00' }} aria-hidden="true" />
              <span className="text-sm font-semibold" style={{ color: '#80BC00' }}>{ville.nom} · {ville.codePostal} · {ville.distance} de notre base</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
              Paysagiste à {ville.nom}
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              {ville.description}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/devis"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#80BC00', color: '#ffffff', boxShadow: 'rgb(128, 188, 0) 0px 0px 25px -14px' }}
              >
                Devis gratuit à {ville.nom} <ArrowRight size={14} />
              </Link>
              <a
                href="tel:+33674734698"
                className="inline-flex items-center gap-2 rounded-full border border-white/35 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
              >
                <Phone size={14} aria-hidden="true" /> 06 74 73 46 98
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats local */}
      <section className="bg-white border-b border-[#EDEDED]">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 py-8">
          <dl className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { value: ville.distance, label: `De Saint-Didier à ${ville.nom}` },
              { value: '5★', label: 'Note Google moyenne' },
              { value: '24h', label: 'Délai de réponse' },
              { value: '100%', label: 'Devis gratuit' },
            ].map((s) => (
              <div key={s.label}>
                <dt className="font-display text-2xl sm:text-3xl font-bold" style={{ color: '#425D07' }}>{s.value}</dt>
                <dd className="text-xs text-[#8C8F94] mt-1">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Services à [ville] */}
      <section className="py-20" style={{ backgroundColor: '#F7F5F0' }}>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#80BC00' }}>Nos interventions</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold" style={{ color: '#425D07' }}>
              Services paysagers à {ville.nom}
            </h2>
            <p className="text-[#8C8F94] mt-3">
              LM Espace Vert intervient à {ville.nom} {ville.specificite} pour tous vos projets d&apos;espaces verts.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {ville.services.map((service) => (
              <div key={service} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-[#EDEDED] shadow-sm">
                <CheckCircle size={18} style={{ color: '#80BC00' }} className="mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span className="text-sm text-[#2F2F2F] font-medium">{service}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full border border-[#EDEDED] bg-white px-6 py-3 text-sm font-semibold hover:border-[#80BC00] hover:text-[#425D07] transition-colors"
              style={{ color: '#2F2F2F' }}
            >
              Toutes nos prestations <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Quartiers */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-2xl mx-auto text-center mb-8">
            <h2 className="font-display text-2xl font-bold" style={{ color: '#425D07' }}>
              Quartiers et zones desservies à {ville.nom}
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-xl mx-auto">
            {ville.quartiers.map((q) => (
              <span key={q} className="flex items-center gap-1.5 rounded-full border border-[#EDEDED] bg-[#F7F5F0] px-4 py-1.5 text-sm text-[#8C8F94]">
                <MapPin size={11} aria-hidden="true" /> {q}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Avis clients */}
      <section style={{ backgroundColor: '#F7F5F0' }} className="py-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <h2 className="font-display text-2xl font-bold mb-3" style={{ color: '#425D07' }}>
              Clients satisfaits à {ville.nom} et alentours
            </h2>
            <div className="flex items-center justify-center gap-1">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />)}
              <span className="ml-2 text-sm font-bold" style={{ color: '#2F2F2F' }}>5.0 — 28 avis Google</span>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { name: "Marie L.", city: ville.nom, text: "Léo a transformé notre jardin. Travail soigné, ponctuel et à l'écoute. Je recommande vivement !" },
              { name: "Pierre D.", city: "Caluire-et-Cuire", text: "Excellent paysagiste ! Entretien régulier depuis 2 ans, toujours impeccable. Tarifs honnêtes." },
              { name: "Sophie M.", city: "Écully", text: "Création de notre terrasse et jardin en 3 semaines. Résultat magnifique, au-delà de nos espérances." },
            ].map((t) => (
              <article key={t.name} className="bg-white rounded-2xl border border-[#EDEDED] p-6 shadow-sm">
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, i) => <Star key={i} size={12} className="fill-yellow-400 text-yellow-400" />)}
                </div>
                <blockquote className="text-sm text-[#8C8F94] italic leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</blockquote>
                <footer className="text-sm font-semibold" style={{ color: '#425D07' }}>{t.name} — <span className="font-normal text-[#8C8F94]">{t.city}</span></footer>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: '#0B3D2C' }} className="py-20">
        <div className="container mx-auto max-w-xl px-4 sm:px-6 text-center">
          <div className="flex items-center justify-center gap-1 mb-3">
            <Clock size={14} style={{ color: '#80BC00' }} aria-hidden="true" />
            <span className="text-sm" style={{ color: '#80BC00' }}>Intervention sous 48h à {ville.nom}</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3">
            Votre projet à {ville.nom} ?<br />Nous sommes à {ville.distance}.
          </h2>
          <p className="text-white/70 mb-8">Devis gratuit · Sans engagement · Réponse sous 24h</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/devis"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold hover:opacity-90 transition-opacity"
              style={{ backgroundColor: '#80BC00', color: '#ffffff', boxShadow: 'rgb(128, 188, 0) 0px 0px 25px -14px' }}
            >
              Demander mon devis <ArrowRight size={14} />
            </Link>
            <a
              href="tel:+33674734698"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
            >
              <Phone size={14} /> 06 74 73 46 98
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
