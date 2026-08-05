import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Clock, MapPin, AlertTriangle, CheckCircle, TreePine, Home, Shield } from 'lucide-react'
import { JsonLd } from '@/components/seo/json-ld'

export const metadata: Metadata = {
  title: 'Intervention Urgente Paysagiste Lyon Nord | LM Espace Vert',
  description:
    'Arbre tombé, tempête, haie endommagée : intervention d\'urgence sous 24h à Lyon nord. Paysagiste disponible 7j/7. Appelez le 06 72 58 73 53.',
  alternates: { canonical: 'https://www.lm-espace-vert.fr/urgences' },
  openGraph: {
    title: 'Urgence Paysagiste Lyon Nord — Intervention sous 24h | LM Espace Vert',
    description: 'Arbre tombé, tempête, haie endommagée : intervention d\'urgence sous 24h à Lyon nord.',
    images: [{ url: '/images/realisations/lm-07.webp', width: 1200, height: 630, alt: 'Intervention urgence paysagiste Lyon' }],
  },
}

const emergencyServiceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'EmergencyService',
  name: 'LM Espace Vert — Intervention Urgence Paysagiste',
  description: 'Service d\'intervention urgente paysagiste à Lyon nord : arbre tombé, tempête, haie endommagée. Disponible 7j/7.',
  telephone: '+33672587353',
  url: 'https://www.lm-espace-vert.fr/urgences',
  address: {
    '@type': 'PostalAddress',
    addressLocality: "Saint-Didier-au-Mont-d'Or",
    postalCode: '69370',
    addressRegion: 'Rhône',
    addressCountry: 'FR',
  },
  areaServed: [
    "Saint-Didier-au-Mont-d'Or", 'Caluire-et-Cuire', 'Écully', 'Tassin-la-Demi-Lune',
    'Charbonnières-les-Bains', 'Limonest', 'Dardilly', 'Craponne', 'Francheville',
    "Collonges-au-Mont-d'Or", 'Neuville-sur-Saône', 'Lyon',
  ],
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '00:00',
    closes: '23:59',
  },
  availableChannel: {
    '@type': 'ServiceChannel',
    servicePhone: {
      '@type': 'ContactPoint',
      telephone: '+33672587353',
      contactType: 'emergency',
      availableLanguage: 'French',
    },
  },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Accueil',
      item: 'https://www.lm-espace-vert.fr',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Urgences',
      item: 'https://www.lm-espace-vert.fr/urgences',
    },
  ],
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Intervenez-vous le week-end pour les urgences ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, LM Espace Vert intervient 7 jours sur 7 pour les urgences paysagères. Appelez le 06 72 58 73 53 à tout moment pour une situation d\'urgence (arbre tombé, dommages de tempête, arbre dangereux).',
      },
    },
    {
      '@type': 'Question',
      name: 'Quels types d\'urgences paysagères traitez-vous ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nous intervenons pour : arbre tombé sur véhicule ou toiture, haie arrachée par la tempête, racines menaçant des fondations, arbre dangereux menaçant un bâtiment ou une ligne électrique, et tout incident végétal urgent nécessitant une sécurisation rapide.',
      },
    },
    {
      '@type': 'Question',
      name: 'Combien coûte une intervention d\'urgence paysagiste ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le tarif d\'une intervention urgente dépend de la nature et de la complexité du sinistre. Nous établissons un devis sur place avant d\'intervenir. Un déplacement d\'urgence peut entraîner une majoration par rapport à une intervention planifiée. Appelez-nous pour obtenir une estimation rapide.',
      },
    },
  ],
}

const situations = [
  {
    Icon: TreePine,
    title: 'Arbre tombé sur véhicule ou toiture',
    desc: 'Un arbre abattu par la tempête ou fragilisé par la maladie peut causer des dégâts considérables. Nous sécurisons la zone et dégageons l\'arbre en urgence.',
  },
  {
    Icon: AlertTriangle,
    title: 'Haie arrachée par la tempête',
    desc: 'Votre haie a cédé sous les vents violents, laissant votre propriété sans clôture ni protection visuelle. Intervention rapide pour sécuriser et reconditionner.',
  },
  {
    Icon: Home,
    title: 'Racines menaçant vos fondations',
    desc: 'Des racines envahissantes peuvent fissurer murs, dallages et fondations. Nous intervenons pour stopper les dégâts avant qu\'ils ne s\'aggravent.',
  },
  {
    Icon: Shield,
    title: 'Arbre dangereux menaçant un bâtiment',
    desc: 'Un arbre incliné, malade ou déraciné représente un danger immédiat pour votre maison et vos proches. Élagage ou abattage sécurisé en urgence.',
  },
]

const engagements = [
  {
    Icon: Phone,
    title: 'Réponse téléphonique < 15 min',
    desc: 'Nous décrochons rapidement pour évaluer votre situation et vous donner les premières consignes de sécurité.',
    value: '< 15 min',
  },
  {
    Icon: Clock,
    title: 'Déplacement sous 24h',
    desc: 'Nous nous déplaçons sur votre propriété dans les 24 heures suivant votre appel pour évaluer et traiter la situation.',
    value: '< 24h',
  },
  {
    Icon: CheckCircle,
    title: 'Devis sur place',
    desc: 'Un devis transparent est établi directement sur place avant toute intervention, sans surprise ni frais cachés.',
    value: 'Gratuit',
  },
]

const communes = [
  "Saint-Didier-au-Mont-d'Or",
  'Caluire-et-Cuire',
  'Écully',
  'Tassin-la-Demi-Lune',
  'Limonest',
  'Dardilly',
  'Charbonnières-les-Bains',
  "Champagne-au-Mont-d'Or",
  "Collonges-au-Mont-d'Or",
  'Neuville-sur-Saône',
  'Craponne',
  'Francheville',
  'Lyon 1er — 9ème',
  'Villeurbanne',
]

const faqs = [
  {
    question: 'Intervenez-vous le week-end pour les urgences ?',
    answer: 'Oui, LM Espace Vert intervient 7 jours sur 7 pour les urgences paysagères. Appelez le 06 72 58 73 53 à tout moment pour une situation d\'urgence. Nous mettons tout en œuvre pour répondre rapidement, y compris les samedis, dimanches et jours fériés.',
  },
  {
    question: 'Quels types d\'urgences paysagères traitez-vous ?',
    answer: 'Nous intervenons pour : arbre tombé sur véhicule ou toiture, haie arrachée par la tempête, racines menaçant des fondations, arbre dangereux menaçant un bâtiment ou une ligne électrique, et tout incident végétal urgent nécessitant une sécurisation rapide.',
  },
  {
    question: 'Combien coûte une intervention d\'urgence paysagiste ?',
    answer: 'Le tarif dépend de la nature et de la complexité du sinistre. Nous établissons systématiquement un devis sur place avant d\'intervenir. Un déplacement d\'urgence peut entraîner une légère majoration par rapport à une intervention planifiée. Appelez-nous pour une estimation rapide.',
  },
]

export default function UrgencesPage() {
  return (
    <>
      <JsonLd data={emergencyServiceJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={faqJsonLd} />

      {/* ── Breadcrumb ── */}
      <nav aria-label="Fil d'Ariane" className="bg-white border-b border-[#EDEDED]">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 py-2">
          <ol className="flex items-center gap-2 text-xs text-[#8C8F94]">
            <li><Link href="/" className="hover:text-[#4A6320] transition-colors">Accueil</Link></li>
            <li aria-hidden="true">›</li>
            <li className="font-medium" style={{ color: '#4A6320' }} aria-current="page">Urgences</li>
          </ol>
        </div>
      </nav>

      {/* ── HERO URGENCE ── */}
      <section
        className="relative py-20 lg:py-28 overflow-hidden"
        style={{ backgroundColor: '#243238' }}
        aria-labelledby="urgences-heading"
      >
        {/* Background texture */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, #ffffff 0, #ffffff 1px, transparent 0, transparent 50%)',
            backgroundSize: '20px 20px',
          }}
          aria-hidden="true"
        />

        <div className="relative container mx-auto max-w-7xl px-4 sm:px-6 text-center">
          {/* Badge clignotant */}
          <div className="inline-flex items-center gap-2 mb-6">
            <span
              className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-bold uppercase tracking-widest"
              style={{ backgroundColor: '#E40420', color: '#ffffff' }}
            >
              <span
                className="inline-block w-2.5 h-2.5 rounded-full bg-white"
                style={{ animation: 'blink 1s step-start infinite' }}
                aria-hidden="true"
              />
              URGENCE 24H/7J
            </span>
          </div>

          <style>{`
            @keyframes blink {
              0%, 100% { opacity: 1; }
              50% { opacity: 0; }
            }
          `}</style>

          <h1
            id="urgences-heading"
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4"
          >
            Urgence Paysagiste<br />
            <span style={{ color: '#749A30' }}>Lyon Nord</span>
          </h1>

          <p className="text-white/75 text-lg max-w-xl mx-auto mb-8 leading-relaxed">
            Arbre tombé, tempête, haie endommagée&nbsp;? Nous intervenons sous 24h dans tout le nord-ouest lyonnais.
          </p>

          {/* Numéro de téléphone très grand */}
          <a
            href="tel:+33672587353"
            className="inline-block font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white hover:opacity-80 transition-opacity mb-8"
            aria-label="Appeler le 06 72 58 73 53 pour une urgence paysagiste"
          >
            06 72 58 73 53
          </a>

          {/* 3 boutons d'action */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center">
            <a
              href="tel:+33672587353"
              className="inline-flex items-center justify-center gap-2.5 rounded-full px-8 py-4 text-base font-bold transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#E40420', color: '#ffffff', boxShadow: '0 0 30px rgba(228,4,32,0.4)' }}
            >
              <Phone size={18} aria-hidden="true" />
              Appeler maintenant
            </a>
            <a
              href="https://wa.me/33672587353?text=URGENCE%20%3A%20j%27ai%20besoin%20d%27une%20intervention%20paysagiste%20rapide."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-full px-8 py-4 text-base font-bold transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#25D366', color: '#ffffff' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              WhatsApp urgence
            </a>
            <Link
              href="/devis"
              className="inline-flex items-center justify-center gap-2.5 rounded-full px-8 py-4 text-base font-bold border-2 transition-colors hover:bg-white/10"
              style={{ borderColor: 'rgba(255,255,255,0.5)', color: '#ffffff' }}
            >
              Formulaire devis
            </Link>
          </div>
        </div>
      </section>

      {/* ── SITUATIONS D'URGENCE ── */}
      <section className="py-20 bg-white" aria-labelledby="situations-heading">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#749A30' }}>Nos Interventions</p>
            <h2 id="situations-heading" className="font-display text-3xl sm:text-4xl font-bold" style={{ color: '#4A6320' }}>
              Situations d'urgence
            </h2>
            <p className="text-[#8C8F94] mt-3">
              Quelle que soit la nature du sinistre, nous avons l'équipement et l'expertise pour intervenir rapidement et en toute sécurité.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {situations.map(({ Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-2xl border border-[#EDEDED] p-6 hover:border-[#749A30] hover:shadow-[rgba(0,0,0,0.08)_0px_8px_24px_0px] transition-all"
                style={{ backgroundColor: '#F4F1E9' }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: 'rgba(228,4,32,0.1)' }}
                >
                  <Icon size={22} style={{ color: '#E40420' }} aria-hidden="true" />
                </div>
                <h3 className="font-display font-bold text-sm mb-2" style={{ color: '#4A6320' }}>{title}</h3>
                <p className="text-xs text-[#8C8F94] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NOS ENGAGEMENTS URGENCE ── */}
      <section style={{ backgroundColor: '#243238' }} className="py-16" aria-labelledby="engagements-heading">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#749A30' }}>Notre Promesse</p>
            <h2 id="engagements-heading" className="font-display text-3xl sm:text-4xl font-bold text-white">
              Notre engagement urgence
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {engagements.map(({ Icon, title, desc, value }) => (
              <div
                key={title}
                className="rounded-2xl p-6 text-center border border-white/10"
                style={{ backgroundColor: 'rgba(255,255,255,0.06)' }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: 'rgba(116,154,48,0.15)' }}
                >
                  <Icon size={26} style={{ color: '#749A30' }} aria-hidden="true" />
                </div>
                <p className="font-display text-3xl font-bold mb-1" style={{ color: '#749A30' }}>{value}</p>
                <h3 className="font-bold text-white mb-2 text-sm">{title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>{desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="tel:+33672587353"
              className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-bold transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#E40420', color: '#ffffff' }}
            >
              <Phone size={18} aria-hidden="true" />
              Appeler pour une urgence : 06 72 58 73 53
            </a>
          </div>
        </div>
      </section>

      {/* ── ZONE D'INTERVENTION URGENCE ── */}
      <section className="py-16 bg-white" aria-labelledby="zone-urgence-heading">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#749A30' }}>Zone Couverte</p>
            <h2 id="zone-urgence-heading" className="font-display text-3xl font-bold" style={{ color: '#4A6320' }}>
              Zone d'intervention urgence
            </h2>
            <p className="text-[#8C8F94] mt-3 max-w-lg mx-auto">
              Basé à Saint-Didier-au-Mont-d'Or, nous intervenons en urgence dans un rayon de 20 km autour de Lyon nord.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {communes.map((commune) => (
              <span
                key={commune}
                className="inline-flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-sm"
                style={{ borderColor: '#EDEDED', color: '#8C8F94' }}
              >
                <MapPin size={11} aria-hidden="true" />
                {commune}
              </span>
            ))}
          </div>

          <div className="max-w-2xl mx-auto rounded-2xl border border-[#EDEDED] p-6" style={{ backgroundColor: '#F4F1E9' }}>
            <div className="flex items-start gap-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ backgroundColor: 'rgba(228,4,32,0.1)' }}
              >
                <AlertTriangle size={18} style={{ color: '#E40420' }} aria-hidden="true" />
              </div>
              <div>
                <p className="font-bold text-sm mb-1" style={{ color: '#4A6320' }}>
                  Votre commune n'est pas listée&nbsp;?
                </p>
                <p className="text-xs text-[#8C8F94] leading-relaxed">
                  Appelez-nous quand même au <a href="tel:+33672587353" className="font-semibold hover:underline" style={{ color: '#4A6320' }}>06 72 58 73 53</a>. Selon la gravité de la situation, nous pouvons intervenir au-delà de notre zone habituelle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ backgroundColor: '#F4F1E9' }} className="py-16 border-t border-[#EDEDED]" aria-labelledby="faq-urgences-heading">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#749A30' }}>FAQ</p>
            <h2 id="faq-urgences-heading" className="font-display text-3xl font-bold" style={{ color: '#4A6320' }}>
              Questions fréquentes — Urgences
            </h2>
          </div>

          <dl className="space-y-4">
            {faqs.map(({ question, answer }) => (
              <div key={question} className="rounded-2xl border border-[#EDEDED] bg-white overflow-hidden">
                <dt className="px-6 py-4 font-semibold text-sm" style={{ color: '#4A6320' }}>
                  {question}
                </dt>
                <dd className="px-6 pb-4 text-sm text-[#8C8F94] leading-relaxed border-t border-[#EDEDED] pt-3">
                  {answer}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── CTA FINALE ── */}
      <section style={{ backgroundColor: '#E40420' }} className="py-14" aria-label="Appel à l'action urgence">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 text-center">
          <p className="text-xs font-bold uppercase tracking-widest mb-3 text-white/70">Urgence paysagiste Lyon Nord</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            N'attendez pas — chaque heure compte
          </h2>
          <p className="text-white/80 mb-8 text-base max-w-lg mx-auto">
            Un arbre tombé ou un sinistre non sécurisé peut aggraver les dégâts. Contactez-nous immédiatement.
          </p>
          <a
            href="tel:+33672587353"
            className="inline-block font-display text-4xl sm:text-5xl font-bold text-white hover:opacity-80 transition-opacity mb-6"
            aria-label="Appeler le 06 72 58 73 53 pour une urgence"
          >
            📞 06 72 58 73 53
          </a>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+33672587353"
              className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-bold bg-white hover:opacity-90 transition-opacity"
              style={{ color: '#E40420' }}
            >
              <Phone size={18} aria-hidden="true" />
              Appeler maintenant
            </a>
            <a
              href="https://wa.me/33672587353?text=URGENCE%20%3A%20j%27ai%20besoin%20d%27une%20intervention%20paysagiste%20rapide."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-bold border-2 border-white/50 text-white hover:bg-white/10 transition-colors"
            >
              WhatsApp urgence
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
