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
  'w-full border border-[--color-border] rounded-xl px-4 py-3 text-sm text-[--color-fg] bg-[--color-bg-elevated] placeholder-[--color-fg-subtle] focus:outline-none focus:border-[#80BC00] transition-colors'
const labelClass = 'block text-sm font-medium text-[--color-fg] mb-1.5'

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      {/* Hero */}
      <section className="bg-[--color-bg-subtle] py-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <nav aria-label="Fil d'Ariane" className="mb-6">
            <ol role="list" className="flex items-center gap-2 text-sm text-[--color-fg-subtle]">
              <li><Link href="/" className="hover:text-[--color-fg]">Accueil</Link></li>
              <li aria-hidden="true">/</li>
              <li><span aria-current="page" className="text-[--color-fg]">Contact</span></li>
            </ol>
          </nav>
          <div className="max-w-2xl">
            <h1 className="font-display text-[clamp(2.5rem,5vw,3.75rem)] font-bold leading-tight text-[--color-fg]">
              Nous contacter
            </h1>
            <p className="mt-4 text-lg text-[--color-fg-muted]">
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
              <h2 className="font-display text-2xl font-bold text-[--color-fg] mb-8">
                Comment nous joindre&nbsp;?
              </h2>

              <div className="space-y-4">
                {/* Téléphone — grande carte */}
                <a
                  href="tel:+33674734698"
                  className="flex items-center gap-5 rounded-2xl border border-[--color-border] bg-[--color-bg-subtle] p-5 hover:shadow-md transition-shadow group"
                >
                  <div
                    className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center text-white"
                    style={{ backgroundColor: '#0B3D2C' }}
                  >
                    <Phone size={24} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-bold text-lg text-[--color-fg] group-hover:text-[#425D07] transition-colors">
                      06 74 73 46 98
                    </p>
                    <p className="text-sm text-[--color-fg-muted]">
                      Disponible Lun-Ven 8h-18h, Sam 8h-12h
                    </p>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/33674734698"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-5 rounded-2xl border border-[--color-border] bg-[--color-bg-subtle] p-5 hover:shadow-md transition-shadow group"
                >
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-white"
                    style={{ backgroundColor: '#25D366' }}
                  >
                    <MessageCircle size={22} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-bold text-[--color-fg]">WhatsApp direct</p>
                    <p className="text-sm text-[--color-fg-muted]">Réponse rapide</p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:contact@lmespacevert.fr"
                  className="flex items-center gap-5 rounded-2xl border border-[--color-border] bg-[--color-bg-subtle] p-5 hover:shadow-md transition-shadow group"
                >
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-white"
                    style={{ backgroundColor: '#0B3D2C' }}
                  >
                    <Mail size={22} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-bold text-[--color-fg]">contact@lmespacevert.fr</p>
                    <p className="text-sm text-[--color-fg-muted]">Réponse sous 24h</p>
                  </div>
                </a>

                {/* Adresse */}
                <div className="flex items-center gap-4 px-5 py-3 text-[--color-fg-muted]">
                  <MapPin size={20} className="flex-shrink-0 text-[#425D07]" aria-hidden="true" />
                  <span className="text-sm">
                    Saint-Didier-au-Mont-d&apos;Or,{' '}
                    <strong className="text-[--color-fg]">69370 Rhône</strong>
                  </span>
                </div>
              </div>

              {/* Horaires */}
              <div className="mt-8 rounded-2xl border border-[--color-border] shadow-sm overflow-hidden">
                <div className="flex items-center gap-3 px-5 py-4 border-b border-[--color-border] bg-[--color-bg-subtle]">
                  <Clock size={18} className="text-[#425D07]" aria-hidden="true" />
                  <span className="font-semibold text-sm text-[--color-fg]">Horaires d&apos;ouverture</span>
                </div>
                <table className="w-full text-sm">
                  <tbody>
                    <tr className="border-b border-[--color-border]">
                      <td className="px-5 py-3 text-[--color-fg-muted]">Lundi – Vendredi</td>
                      <td className="px-5 py-3 font-medium text-[--color-fg] text-right">8h00 – 18h00</td>
                    </tr>
                    <tr className="border-b border-[--color-border]">
                      <td className="px-5 py-3 text-[--color-fg-muted]">Samedi</td>
                      <td className="px-5 py-3 font-medium text-[--color-fg] text-right">8h00 – 12h00</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3 text-[--color-fg-muted]">Dimanche</td>
                      <td className="px-5 py-3 text-[--color-fg-subtle] text-right">Fermé</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Colonne droite — formulaire */}
            <div className="rounded-2xl border border-[--color-border] shadow-sm p-8">
              <h3 className="font-display text-xl font-bold text-[--color-fg] mb-6">
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
                    className={inputClass + ' resize-y'}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full px-6 py-3 text-sm font-semibold transition-opacity hover:opacity-90"
                  style={{ backgroundColor: '#80BC00', color: '#ffffff', boxShadow: 'rgb(128, 188, 0) 0px 0px 25px -14px' }}
                >
                  Envoyer le message →
                </button>

                <p className="text-xs text-[--color-fg-subtle] text-center">
                  🔒 Vos données sont protégées et ne seront jamais partagées.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Zone d'intervention */}
      <section className="bg-[--color-bg-subtle] py-12">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-8">
            <h2 className="font-display text-2xl font-bold text-[--color-fg]">
              Zone d&apos;intervention
            </h2>
            <p className="mt-2 text-[--color-fg-muted]">
              Nous intervenons dans un rayon de 20 km autour de Saint-Didier-au-Mont-d&apos;Or
            </p>
          </div>
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {communes.map((commune) => (
              <li
                key={commune}
                className="rounded-xl border border-[--color-border] bg-white px-4 py-3 text-sm text-center font-medium text-[--color-fg] shadow-sm"
              >
                {commune}
              </li>
            ))}
          </ul>
          <p className="text-center text-sm text-[--color-fg-muted] mt-6">
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
