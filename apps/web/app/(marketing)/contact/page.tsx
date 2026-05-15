import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'
import { JsonLd } from '@/components/seo/json-ld'

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

const inputClass =
  'w-full px-5 py-3.5 rounded-full border border-[#D8D8D8] text-[#2F2F2F] placeholder-[#8C8F94] bg-white text-sm focus:outline-none focus:border-[#80BC00] focus:ring-2 focus:ring-[rgba(128,188,0,0.15)] transition-all'
const labelClass = 'block text-xs font-semibold uppercase tracking-wider mb-2 text-[#2F2F2F]'

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

              <div className="space-y-4">
                {/* Téléphone — grande carte */}
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

                {/* WhatsApp */}
                <a
                  href="https://wa.me/33674734698"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-5 rounded-2xl p-5 hover:shadow-md transition-shadow group bg-white border border-[#EDEDED] shadow-[rgba(0,0,0,0.06)_0px_4px_30px_0px]"
                >
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-white"
                    style={{ backgroundColor: '#25D366' }}
                  >
                    <MessageCircle size={22} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-bold" style={{ color: '#2F2F2F' }}>WhatsApp direct</p>
                    <p className="text-sm" style={{ color: '#8C8F94' }}>Réponse rapide</p>
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
                <div className="flex items-center gap-4 px-5 py-3" style={{ color: '#8C8F94' }}>
                  <MapPin size={20} className="flex-shrink-0" style={{ color: '#425D07' }} aria-hidden="true" />
                  <span className="text-sm">
                    Saint-Didier-au-Mont-d&apos;Or,{' '}
                    <strong style={{ color: '#2F2F2F' }}>69370 Rhône</strong>
                  </span>
                </div>
              </div>

              {/* Horaires */}
              <div className="mt-8 rounded-2xl border border-[#EDEDED] shadow-sm overflow-hidden">
                <div className="flex items-center gap-3 px-5 py-4 border-b border-[#EDEDED]" style={{ backgroundColor: '#F7F5F0' }}>
                  <Clock size={18} style={{ color: '#425D07' }} aria-hidden="true" />
                  <span className="font-semibold text-sm" style={{ color: '#2F2F2F' }}>Horaires d&apos;ouverture</span>
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
              <h3 className="font-display text-xl font-bold mb-6" style={{ color: '#2F2F2F' }}>
                Envoyez-nous un message
              </h3>

              <form
                action="/api/contact"
                method="POST"
                noValidate
                aria-label="Formulaire de contact"
                className="space-y-5"
              >
                <div>
                  <label htmlFor="nom" className={labelClass}>
                    Nom <span aria-label="obligatoire">*</span>
                  </label>
                  <input
                    id="nom"
                    name="nom"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Jean Dupont"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="telephone" className={labelClass}>Téléphone</label>
                  <input
                    id="telephone"
                    name="telephone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="06 XX XX XX XX"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="email" className={labelClass}>
                    Email <span aria-label="obligatoire">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="jean@exemple.fr"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="prestation" className={labelClass}>
                    Type de prestation <span aria-label="obligatoire">*</span>
                  </label>
                  <select
                    id="prestation"
                    name="prestation"
                    required
                    className={inputClass}
                  >
                    <option value="">Sélectionner une prestation</option>
                    <option value="entretien">Entretien</option>
                    <option value="elagage">Élagage</option>
                    <option value="creation">Création</option>
                    <option value="maconnerie">Maçonnerie</option>
                    <option value="arrosage">Arrosage</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className={labelClass}>
                    Message <span aria-label="obligatoire">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Décrivez votre projet ou votre question..."
                    className="w-full px-5 py-3.5 rounded-2xl border border-[#D8D8D8] text-[#2F2F2F] placeholder-[#8C8F94] bg-white text-sm focus:outline-none focus:border-[#80BC00] focus:ring-2 focus:ring-[rgba(128,188,0,0.15)] transition-all resize-y min-h-[120px]"
                  />
                </div>

                <button
                  type="submit"
                  style={{ backgroundColor: '#80BC00', color: '#ffffff', boxShadow: 'rgb(128, 188, 0) 0px 0px 25px -14px' }}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-opacity hover:opacity-90"
                >
                  Envoyer le message →
                </button>

                <p className="text-xs text-center" style={{ color: '#8C8F94' }}>
                  🔒 Vos données sont protégées et ne seront jamais partagées.
                </p>
              </form>
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
