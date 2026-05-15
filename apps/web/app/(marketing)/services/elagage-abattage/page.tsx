import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Phone, MapPin, Star, ShieldCheck, Recycle, Award } from 'lucide-react'
import { JsonLd } from '@/components/seo/json-ld'

export const metadata: Metadata = {
  title: "Ã‰lagage & Abattage d'Arbres Lyon Nord | LM Espace Vert",
  description: "Ã‰lagage raisonnÃ© et abattage sÃ©curisÃ© d'arbres Ã  Lyon nord par LM Espace Vert, certifiÃ© CERTIPHYTO. Broyage des dÃ©chets inclus. Intervention sur Saint-Didier, Caluire, Ã‰cully. Devis gratuit.",
  alternates: { canonical: 'https://www.lmespacevert.fr/services/elagage-abattage' },
  openGraph: {
    title: "Ã‰lagage & Abattage d'Arbres Lyon Nord â€” LM Espace Vert",
    description: "Ã‰lagage raisonnÃ© et abattage sÃ©curisÃ© d'arbres Ã  Lyon nord par LM Espace Vert, certifiÃ© CERTIPHYTO. Broyage des dÃ©chets inclus. Devis gratuit.",
    url: 'https://www.lmespacevert.fr/services/elagage-abattage',
    type: 'website',
    images: [{ url: 'https://www.lmespacevert.fr/images/elagage-abattage.webp', width: 1200, height: 630, alt: "Ã‰lagage et abattage d'arbres â€” LM Espace Vert" }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Ã‰lagage & Abattage d'Arbres Lyon Nord â€” LM Espace Vert",
    description: "Ã‰lagage raisonnÃ© et abattage sÃ©curisÃ© d'arbres Ã  Lyon nord. CertifiÃ© CERTIPHYTO. Devis gratuit.",
    images: ['https://www.lmespacevert.fr/images/elagage-abattage.webp'],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: "Ã‰lagage et abattage d'arbres",
  serviceType: "Ã‰lagage et abattage d'arbres",
  url: 'https://www.lmespacevert.fr/services/elagage-abattage',
  description: "Ã‰lagage raisonnÃ©, taille douce et abattage sÃ©curisÃ© d'arbres Ã  Saint-Didier-au-Mont-d'Or et dans le nord-ouest lyonnais. Broyage et Ã©vacuation des dÃ©chets. Ã‰quipe certifiÃ©e CERTIPHYTO.",
  provider: {
    '@type': 'LocalBusiness',
    name: 'LM Espace Vert',
    telephone: '+33672587353',
    address: {
      '@type': 'PostalAddress',
      addressLocality: "Saint-Didier-au-Mont-d'Or",
      postalCode: '69370',
      addressCountry: 'FR',
    },
  },
  areaServed: {
    '@type': 'GeoCircle',
    geoMidpoint: { '@type': 'GeoCoordinates', latitude: 45.833, longitude: 4.800 },
    geoRadius: '20000',
  },
  offers: {
    '@type': 'Offer',
    description: 'Devis gratuit',
    price: '0',
    priceCurrency: 'EUR',
    eligibleRegion: 'FR',
  },
  termsOfService: 'Devis gratuit, sans engagement',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.lmespacevert.fr' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.lmespacevert.fr/services' },
    { '@type': 'ListItem', position: 3, name: 'Ã‰lagage & Abattage', item: 'https://www.lmespacevert.fr/services/elagage-abattage' },
  ],
}

const features = [
  "Ã‰lagage de formation et d'entretien",
  "Taille douce pour la santÃ© de l'arbre",
  'Abattage dirigÃ© avec techniques sÃ©curisÃ©es',
  'Broyage sur place et Ã©vacuation des dÃ©chets',
  'Soins aux arbres remarquables (pansements, traitements)',
  'Certification CERTIPHYTO â€” produits phyto maÃ®trisÃ©s',
]

const advantages = [
  { icon: Award, title: 'Ã‰quipe certifiÃ©e CERTIPHYTO', desc: 'Professionnels formÃ©s et certifiÃ©s pour des interventions sÃ»res et respectueuses.' },
  { icon: ShieldCheck, title: 'Techniques ISA respectÃ©es', desc: 'Coupes propres selon les standards internationaux pour prÃ©server la vitalitÃ© des arbres.' },
  { icon: Recycle, title: 'DÃ©chets valorisÃ©s', desc: 'Broyage sur place en BRF paillage, Ã©vacuation vers filiÃ¨res de compostage.' },
]

const faqs = [
  {
    q: "Quelle est la diffÃ©rence entre l'Ã©lagage et l'abattage ?",
    a: "L'Ã©lagage consiste Ã  tailler les branches d'un arbre vivant pour amÃ©liorer sa forme, sa santÃ© ou rÃ©duire les risques. L'abattage est l'opÃ©ration qui consiste Ã  couper l'arbre en totalitÃ© lorsqu'il est dangereux, mort, ou qu'il gÃªne dÃ©finitivement. Nos experts Ã©valuent systÃ©matiquement la meilleure option lors de la visite gratuite.",
  },
  {
    q: "Avez-vous besoin d'une autorisation pour abattre un arbre Ã  Lyon ?",
    a: "En zone urbaine dans le RhÃ´ne, l'abattage d'arbres de plus de 1m de circonfÃ©rence peut nÃ©cessiter une dÃ©claration prÃ©alable auprÃ¨s de la mairie. En lotissement ou dans certaines zones protÃ©gÃ©es, une autorisation est obligatoire. Nous vous conseillons sur les dÃ©marches administratives et pouvons effectuer les demandes en votre nom.",
  },
  {
    q: "Quelle est la bonne saison pour Ã©laguer un arbre Ã  Lyon nord ?",
    a: "L'Ã©lagage se pratique idÃ©alement Ã  la fin de l'hiver (fÃ©vrier-mars) avant la reprise de vÃ©gÃ©tation, ou en Ã©tÃ© aprÃ¨s la montÃ©e de sÃ¨ve (juillet-aoÃ»t). Certains arbres comme les cerisiers et fruitiers doivent Ãªtre taillÃ©s en dehors des pÃ©riodes humides pour Ã©viter les maladies. Nous adaptons le calendrier Ã  chaque essence.",
  },
  {
    q: "Que faites-vous des dÃ©chets d'Ã©lagage ?",
    a: "Tous les dÃ©chets issus de nos interventions d'Ã©lagage et d'abattage sont broyÃ©s sur place (lorsque c'est possible) pour produire du BRF (Bois RamÃ©al FragmentÃ©) que vous pouvez utiliser en paillage. Les branches plus grosses sont Ã©vacuÃ©es et orientÃ©es vers des filiÃ¨res de valorisation Ã©nergÃ©tique ou de compostage. Nous laissons votre jardin propre.",
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: { '@type': 'Answer', text: faq.a },
  })),
}

export default function ElagageAbattagePage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      {/* Breadcrumb */}
      <nav aria-label="Fil d'Ariane" className="border-b border-[#EDEDED] bg-white">
        <div className="container mx-auto max-w-7xl px-4 py-3 sm:px-6">
          <ol role="list" className="flex items-center gap-2 text-sm text-[#8C8F94]">
            <li><Link href="/" className="hover:text-[#2F2F2F] transition-colors">Accueil</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href="/services" className="hover:text-[#2F2F2F] transition-colors">Services</Link></li>
            <li aria-hidden="true">/</li>
            <li><span aria-current="page" className="text-[#2F2F2F]">Ã‰lagage &amp; Abattage</span></li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-[50vh] min-h-[380px] flex items-end" aria-labelledby="service-heading">
        <Image
          src="/images/elagage-abattage.webp"
          alt="Ã‰lagage et abattage d'arbres Ã  Lyon nord par LM Espace Vert"
          fill
          className="object-cover rounded-b-none"
          priority
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(11,61,44,0.92) 0%, rgba(11,61,44,0.50) 50%, rgba(11,61,44,0.15) 100%)' }}
        />
        <div className="relative container mx-auto max-w-7xl px-4 sm:px-6 pb-12">
          <h1 id="service-heading" className="font-display text-4xl sm:text-5xl font-bold text-white mb-3">
            Ã‰lagage &amp; Abattage
          </h1>
          <p className="text-white/80 text-lg max-w-xl mb-6">
            Interventions sÃ©curisÃ©es sur vos arbres Ã  Lyon nord par des professionnels certifiÃ©s CERTIPHYTO.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/devis"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold hover:opacity-90 transition-opacity cta-glow"
              style={{ backgroundColor: '#80BC00', color: '#ffffff' }}
            >
              Devis gratuit <ArrowRight size={14} />
            </Link>
            <a
              href="https://wa.me/33672587353?text=Bonjour%20LM%20Espace%20Vert%2C%20je%20souhaite%20un%20devis%20pour%20de%20l%27Ã©lagage..."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white border border-white/40 hover:bg-white/15 transition-colors"
            >
              WhatsApp
            </a>
            <span
              className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold"
              style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#ffffff' }}
            >
              Ã€ partir de 250 â‚¬
            </span>
          </div>
        </div>
      </section>

      {/* Description + features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#80BC00' }}>Notre expertise</p>
              <h2 className="font-display text-3xl font-bold mb-5" style={{ color: '#425D07' }}>
                Ã‰lagage raisonnÃ© pour des arbres en bonne santÃ©
              </h2>
              <div className="text-[#8C8F94] leading-relaxed space-y-4">
                <p>
                  L&apos;Ã©lagage est une opÃ©ration qui demande une connaissance approfondie des espÃ¨ces arborÃ©es, de leur biologie et de leur comportement. Chez LM Espace Vert, nos arboristes interviennent Ã  Saint-Didier-au-Mont-d&apos;Or, Caluire, Ã‰cully, Neuville-sur-SaÃ´ne et dans tout le nord-ouest lyonnais pour pratiquer un Ã©lagage respectueux qui prÃ©serve la vitalitÃ© de vos arbres.
                </p>
                <p>
                  Nous pratiquons la taille douce selon les mÃ©thodes de l&apos;ISA (International Society of Arboriculture) : coupes propres, angles corrects, pas de tÃªtardage abusif. Pour les arbres remarquables ou classÃ©s, nous rÃ©alisons des soins spÃ©ciaux avec traitement des plaies et surveillance phytosanitaire. Notre Ã©quipe est certifiÃ©e CERTIPHYTO pour l&apos;utilisation contrÃ´lÃ©e des produits phytosanitaires.
                </p>
                <p>
                  Lorsqu&apos;un arbre est irrÃ©mÃ©diablement compromis, dangereux ou gÃªnant, l&apos;abattage dirigÃ© s&apos;impose. Nous maÃ®trisons les techniques d&apos;abattage en milieu contraint (proche de bÃ¢timents, lignes Ã©lectriques, clÃ´tures) grÃ¢ce Ã  notre matÃ©riel professionnel. Tous les dÃ©chets sont broyÃ©s ou Ã©vacuÃ©s, votre propriÃ©tÃ© est rendue propre aprÃ¨s chaque chantier.
                </p>
              </div>
              <Link
                href="/realisations"
                className="inline-flex items-center gap-2 text-sm font-semibold mt-6 hover:gap-3 transition-all"
                style={{ color: '#425D07' }}
              >
                Voir nos rÃ©alisations <ArrowRight size={14} />
              </Link>
            </div>
            <ul className="space-y-3">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-3 bg-[#F7F5F0] rounded-xl p-4 border border-[#EDEDED]">
                  <CheckCircle size={18} style={{ color: '#80BC00' }} aria-hidden="true" />
                  <span className="text-sm font-medium text-[#2F2F2F]">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* AmÃ©lioration 2 â€” Section Avantages */}
      <section className="py-14" style={{ backgroundColor: '#F7F5F0' }}>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-widest mb-2 text-center" style={{ color: '#80BC00' }}>Pourquoi nous choisir</p>
          <h2 className="font-display text-2xl font-bold mb-10 text-center" style={{ color: '#425D07' }}>
            Les avantages de notre service Ã©lagage
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {advantages.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-6 border border-[#EDEDED] flex flex-col items-center text-center gap-3">
                <span className="inline-flex items-center justify-center w-11 h-11 rounded-full" style={{ backgroundColor: 'rgba(128,188,0,0.12)' }}>
                  <Icon size={20} style={{ color: '#425D07' }} aria-hidden="true" />
                </span>
                <h3 className="font-semibold text-sm" style={{ color: '#2F2F2F' }}>{title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: '#8C8F94' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AmÃ©lioration 4 â€” TÃ©moignage client */}
      <section className="py-14 bg-white">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <blockquote className="rounded-2xl border border-[#EDEDED] p-8 text-center" style={{ backgroundColor: '#F7F5F0' }}>
            <div className="flex justify-center gap-0.5 mb-4" aria-label="5 Ã©toiles">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="#80BC00" style={{ color: '#80BC00' }} aria-hidden="true" />
              ))}
            </div>
            <p className="text-base italic leading-relaxed mb-4" style={{ color: '#2F2F2F' }}>
              &ldquo;Deux grands pins proches de la maison m&apos;inquiÃ©taient depuis longtemps. L&apos;Ã©quipe de LM Espace Vert est intervenue rapidement, en toute sÃ©curitÃ©. Travail soignÃ©, chantier propre. Je recommande sans hÃ©siter.&rdquo;
            </p>
            <footer className="text-sm font-semibold" style={{ color: '#425D07' }}>
              Bernard T. â€” Ã‰cully
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Zone gÃ©ographique */}
      <section style={{ backgroundColor: '#F7F5F0' }} className="py-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 text-center">
          <MapPin size={24} style={{ color: '#80BC00' }} className="mx-auto mb-3" aria-hidden="true" />
          <h2 className="font-display text-2xl font-bold mb-3" style={{ color: '#425D07' }}>Zone d&apos;intervention</h2>
          <p className="text-[#8C8F94] max-w-xl mx-auto">
            LM Espace Vert rÃ©alise ce service dans un rayon de 20 km autour de Saint-Didier-au-Mont-d&apos;Or&nbsp;: Caluire, Ã‰cully, Tassin, Limonest, Dardilly, Champagne, Neuville-sur-SaÃ´ne et tout le nord-ouest lyonnais.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3 text-center" style={{ color: '#80BC00' }}>FAQ</p>
          <h2 className="font-display text-2xl font-bold mb-8 text-center" style={{ color: '#425D07' }}>Questions frÃ©quentes</h2>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details key={faq.q} className="faq-item">
                <summary className="flex items-center justify-between px-5 py-4 cursor-pointer font-semibold text-sm bg-white" style={{ color: '#2F2F2F' }}>
                  {faq.q}
                  <span className="faq-icon ml-4 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs" style={{ backgroundColor: 'rgba(128,188,0,0.1)', color: '#80BC00' }}>â–¾</span>
                </summary>
                <div className="faq-body">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Zones d'intervention â€” chips */}
      <section className="py-14 bg-white">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#80BC00' }}>Nos secteurs</p>
          <h2 className="font-display text-xl font-bold mb-5" style={{ color: '#425D07' }}>
            Nous intervenons dans toutes les communes du nord-ouest lyonnais
          </h2>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { slug: 'champagne', nom: "Champagne-au-Mont-d'Or" },
              { slug: 'limonest', nom: 'Limonest' },
              { slug: 'dardilly', nom: 'Dardilly' },
              { slug: 'caluire', nom: 'Caluire-et-Cuire' },
              { slug: 'ecuelly', nom: 'Ã‰cully' },
              { slug: 'saint-cyr', nom: "Saint-Cyr-au-Mont-d'Or" },
              { slug: 'curis', nom: "Curis-au-Mont-d'Or" },
              { slug: 'tassin', nom: 'Tassin-la-Demi-Lune' },
              { slug: 'collonges', nom: "Collonges-au-Mont-d'Or" },
              { slug: 'francheville', nom: 'Francheville' },
              { slug: 'neuville', nom: 'Neuville-sur-SaÃ´ne' },
              { slug: 'craponne', nom: 'Craponne' },
            ].map((v) => (
              <Link
                key={v.slug}
                href={`/secteur/${v.slug}`}
                className="inline-flex items-center gap-1.5 rounded-full border border-[#EDEDED] px-4 py-1.5 text-xs font-medium hover:border-[#80BC00] hover:text-[#425D07] transition-colors"
                style={{ color: '#2F2F2F', backgroundColor: '#F7F5F0' }}
              >
                <MapPin size={10} style={{ color: '#80BC00' }} aria-hidden="true" />
                {v.nom}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: '#0B3D2C' }} className="py-16 text-center">
        <div className="container mx-auto max-w-xl px-4 sm:px-6">
          <h2 className="font-display text-2xl font-bold text-white mb-3">Votre projet Ã©lagage, on en parle ?</h2>
          <p className="text-white/70 mb-6">Devis gratuit Â· RÃ©ponse sous 24h Â· Rayon 20 km</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/devis"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold hover:opacity-90 transition-opacity"
              style={{ backgroundColor: '#80BC00', color: '#ffffff' }}
            >
              Demander un devis
            </Link>
            <a
              href="tel:+33672587353"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
            >
              <Phone size={14} aria-hidden="true" /> 06 72 58 73 53
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

