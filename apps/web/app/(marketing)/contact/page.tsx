import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, MessageCircle, CheckCircle } from 'lucide-react'
import { JsonLd } from '@/components/seo/json-ld'
import { ContactForm } from '@/components/forms/contact-form'

export const metadata: Metadata = {
  title: 'Nous contacter — LM Espace Vert',
  description:
    'Contactez LM Espace Vert pour un devis gratuit ou toute question. Paysagiste à Lyon, disponible du lundi au vendredi. Réponse sous 24h.',
  alternates: { canonical: 'https://www.lmespacevert.fr/contact' },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.lmespacevert.fr' },
    { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://www.lmespacevert.fr/contact' },
  ],
}

const contactPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contactez LM Espace Vert',
  url: 'https://www.lmespacevert.fr/contact',
  description: 'Contactez LM Espace Vert pour un devis gratuit ou toute question. Paysagiste à Lyon, disponible du lundi au vendredi.',
  mainEntity: {
    '@type': 'LocalBusiness',
    '@id': 'https://www.lmespacevert.fr/#business',
    name: 'LM Espace Vert',
    telephone: '+33674734698',
    email: 'contact@lmespacevert.fr',
    url: 'https://www.lmespacevert.fr',
    address: {
      '@type': 'PostalAddress',
      addressLocality: "Saint-Didier-au-Mont-d'Or",
      postalCode: '69370',
      addressCountry: 'FR',
    },
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '08:00', closes: '18:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '08:00', closes: '12:00' },
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+33674734698',
      contactType: 'customer service',
      contactOption: 'TollFree',
      availableLanguage: 'French',
    },
  },
}

const communes = [
  "Saint-Didier-au-Mont-d'Or",
  'Limonest',
  'Dardilly',
  'Écully',
  'Tassin-la-Demi-Lune',
  'Charbonnières-les-Bains',
  'La Tour-de-Salvagny',
  "Champagne-au-Mont-d'Or",
  'Cailloux-sur-Fontaines',
  "Collonges-au-Mont-d'Or",
  "Couzon-au-Mont-d'Or",
  "Saint-Cyr-au-Mont-d'Or",
  'Caluire-et-Cuire',
  "Poleymieux-au-Mont-d'Or",
]

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={contactPageSchema} />

      {/* Hero */}
      <section style={{ backgroundColor: '#F7F5F0' }} className="py-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <nav aria-label="Fil d'Ariane" className="mb-6">
            <ol role="list" className="flex items-center gap-2 text-sm" style={{ color: '#8C8F94' }}>
              <li><Link href="/" className="hover:text-[#2F2F2F]">Accueil</Link></li>
              <li aria-hidden="true">/</li>
              <li><span aria-current="page" style={{ color: '#2F2F2F' }}>Contact</span></li>
            </ol>
          </nav>
          <div className="max-w-2xl">
            <h1 className="font-display text-[clamp(2.5rem,5vw,3.75rem)] font-bold leading-tight" style={{ color: '#2F2F2F' }}>
              Nous contacter
            </h1>
            <p className="mt-4 text-lg" style={{ color: '#8C8F94' }}>
              Réponse garantie sous 24h · Devis gratuit
            </p>
            {/* Response promise */}
            <p className="mt-2 text-sm font-medium" style={{ color: '#425D07' }}>
              Réponse sous 2h en semaine, 24h le week-end
            </p>
          </div>
        </div>
      </section>

      {/* Section principale */}
      <section className="bg-white py-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">

            {/* Colonne gauche — infos contact */}
            <div>
              <h2 className="font-display text-2xl font-bold mb-8" style={{ color: '#425D07' }}>
                Comment nous joindre&nbsp;?
              </h2>

              {/* Contact direct alternatives */}
              <div className="mb-8 rounded-2xl border border-[#EDEDED] p-5" style={{ backgroundColor: '#F7F5F0' }}>
                <p className="font-semibold text-sm mb-4" style={{ color: '#2F2F2F' }}>
                  Vous préférez un contact direct&nbsp;?
                </p>
                <div className="grid grid-cols-3 gap-3">
                  <a
                    href="tel:+33674734698"
                    className="flex flex-col items-center gap-2 rounded-xl border border-[#EDEDED] bg-white px-3 py-3.5 text-xs font-semibold text-center hover:shadow-sm transition-shadow"
                    style={{ color: '#425D07' }}
                  >
                    <Phone size={20} style={{ color: '#0B3D2C' }} aria-hidden="true" />
                    Appeler
                  </a>
                  <a
                    href="https://wa.me/33674734698?text=Bonjour%20LM%20Espace%20Vert%2C%20je%20souhaite%20un%20renseignement%20..."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-2 rounded-xl border bg-white px-3 py-3.5 text-xs font-semibold text-center hover:shadow-sm transition-shadow"
                    style={{ borderColor: '#25D366', color: '#128C7E' }}
                  >
                    <MessageCircle size={20} style={{ color: '#25D366' }} aria-hidden="true" />
                    WhatsApp
                  </a>
                  <a
                    href="mailto:contact@lmespacevert.fr"
                    className="flex flex-col items-center gap-2 rounded-xl border border-[#EDEDED] bg-white px-3 py-3.5 text-xs font-semibold text-center hover:shadow-sm transition-shadow"
                    style={{ color: '#0B3D2C' }}
                  >
                    <Mail size={20} style={{ color: '#0B3D2C' }} aria-hidden="true" />
                    Email
                  </a>
                </div>
              </div>

              <div className="space-y-4">
                {/* Téléphone */}
                <a
                  href="tel:+33674734698"
                  className="flex items-center gap-5 rounded-2xl p-5 hover:shadow-md transition-shadow group bg-white border border-[#EDEDED] shadow-[rgba(0,0,0,0.06)_0px_4px_30px_0px]"
                >
                  <div
                    className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center text-white"
                    style={{ backgroundColor: '#0B3D2C' }}
                  >
                    <Phone size={24} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-bold text-lg group-hover:text-[#425D07] transition-colors" style={{ color: '#2F2F2F' }}>
                      06 74 73 46 98
                    </p>
                    <p className="text-sm" style={{ color: '#8C8F94' }}>
                      Disponible Lun-Ven 8h-18h, Sam 8h-12h
                    </p>
                  </div>
                </a>

                {/* WhatsApp avec message pré-rempli */}
                <a
                  href="https://wa.me/33674734698?text=Bonjour%20LM%20Espace%20Vert%2C%20je%20souhaite%20un%20renseignement%20..."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-5 rounded-2xl p-5 hover:shadow-md transition-shadow group border-2"
                  style={{ backgroundColor: 'rgba(37,211,102,0.06)', borderColor: '#25D366' }}
                >
                  <div
                    className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center text-white"
                    style={{ backgroundColor: '#25D366' }}
                  >
                    <MessageCircle size={26} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-bold text-lg" style={{ color: '#128C7E' }}>WhatsApp — Écrire maintenant</p>
                    <p className="text-sm" style={{ color: '#8C8F94' }}>Réponse sous quelques minutes · Message pré-rempli</p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:contact@lmespacevert.fr"
                  className="flex items-center gap-5 rounded-2xl p-5 hover:shadow-md transition-shadow group bg-white border border-[#EDEDED] shadow-[rgba(0,0,0,0.06)_0px_4px_30px_0px]"
                >
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-white"
                    style={{ backgroundColor: '#0B3D2C' }}
                  >
                    <Mail size={22} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-bold" style={{ color: '#2F2F2F' }}>contact@lmespacevert.fr</p>
                    <p className="text-sm" style={{ color: '#8C8F94' }}>Réponse sous 24h</p>
                  </div>
                </a>

                {/* Adresse */}
                <div className="flex items-center gap-4 px-5 py-3 rounded-2xl border border-[#EDEDED] bg-white">
                  <MapPin size={20} className="flex-shrink-0" style={{ color: '#425D07' }} aria-hidden="true" />
                  <div className="flex-1">
                    <span className="text-sm" style={{ color: '#8C8F94' }}>
                      Saint-Didier-au-Mont-d&apos;Or,{' '}
                      <strong style={{ color: '#2F2F2F' }}>69370 Rhône</strong>
                    </span>
                    <a
                      href="https://maps.app.goo.gl/rA4sfge3evAuVJLC9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-xs font-semibold mt-0.5 hover:underline"
                      style={{ color: '#425D07' }}
                    >
                      Obtenir l&apos;itinéraire →
                    </a>
                  </div>
                </div>

                {/* Badge réassurance */}
                <div className="flex items-center gap-3 rounded-2xl border px-5 py-4" style={{ backgroundColor: 'rgba(128,188,0,0.06)', borderColor: 'rgba(128,188,0,0.3)' }}>
                  <CheckCircle size={20} style={{ color: '#80BC00' }} aria-hidden="true" />
                  <p className="text-sm font-semibold" style={{ color: '#425D07' }}>
                    Réponse garantie sous 24h — aucun engagement
                  </p>
                </div>
              </div>

              {/* Horaires de disponibilité */}
              <div className="mt-8 rounded-2xl border border-[#EDEDED] shadow-sm overflow-hidden">
                <div className="flex items-center gap-3 px-5 py-4 border-b border-[#EDEDED]" style={{ backgroundColor: '#F7F5F0' }}>
                  <Clock size={18} style={{ color: '#425D07' }} aria-hidden="true" />
                  <span className="font-semibold text-sm" style={{ color: '#2F2F2F' }}>Horaires de disponibilité</span>
                </div>
                <table className="w-full text-sm">
                  <tbody>
                    <tr className="border-b border-[#EDEDED]">
                      <td className="px-5 py-3" style={{ color: '#8C8F94' }}>Lundi – Vendredi</td>
                      <td className="px-5 py-3 font-medium text-right" style={{ color: '#2F2F2F' }}>8h00 – 18h00</td>
                    </tr>
                    <tr className="border-b border-[#EDEDED]">
                      <td className="px-5 py-3" style={{ color: '#8C8F94' }}>Samedi</td>
                      <td className="px-5 py-3 font-medium text-right" style={{ color: '#2F2F2F' }}>8h00 – 12h00</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3" style={{ color: '#8C8F94' }}>Dimanche</td>
                      <td className="px-5 py-3 text-right" style={{ color: '#8C8F94' }}>Fermé</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Colonne droite — formulaire */}
            <div className="rounded-2xl border border-[#EDEDED] shadow-sm p-8">
              <h3 className="font-display text-xl font-bold mb-2" style={{ color: '#2F2F2F' }}>
                Envoyez-nous un message
              </h3>
              <p className="text-sm mb-6" style={{ color: '#8C8F94' }}>
                Réponse sous 2h en semaine, 24h le week-end
              </p>

              {/* The existing ContactForm component handles loading state, validation, success/error */}
              <ContactForm />

              {/* WhatsApp fallback */}
              <div className="mt-6 pt-6 border-t border-[#EDEDED] text-center">
                <p className="text-sm mb-3" style={{ color: '#8C8F94' }}>
                  Ou passez-nous un message WhatsApp maintenant
                </p>
                <a
                  href="https://wa.me/33674734698?text=Bonjour%20LM%20Espace%20Vert%2C%20je%20souhaite%20un%20renseignement%20..."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                  style={{ backgroundColor: '#25D366' }}
                >
                  <MessageCircle size={16} aria-hidden="true" />
                  Écrire sur WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Zone d'intervention */}
      <section style={{ backgroundColor: '#F7F5F0' }} className="py-12">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-8">
            <h2 className="font-display text-2xl font-bold" style={{ color: '#2F2F2F' }}>
              Zone d&apos;intervention
            </h2>
            <p className="mt-2" style={{ color: '#8C8F94' }}>
              Nous intervenons dans un rayon de 20 km autour de Saint-Didier-au-Mont-d&apos;Or
            </p>
          </div>
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {communes.map((commune) => (
              <li
                key={commune}
                className="rounded-xl border border-[#EDEDED] bg-white px-4 py-3 text-sm text-center font-medium shadow-sm"
                style={{ color: '#2F2F2F' }}
              >
                {commune}
              </li>
            ))}
          </ul>
          <p className="text-center text-sm mt-6" style={{ color: '#8C8F94' }}>
            Votre commune n&apos;est pas dans la liste ?{' '}
            <a href="tel:+33674734698" className="font-medium hover:underline" style={{ color: '#425D07' }}>
              Appelez-nous
            </a>{' '}
            pour vérifier.
          </p>
        </div>
      </section>
    </>
  )
}
