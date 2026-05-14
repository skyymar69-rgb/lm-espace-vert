import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, Clock, Gift, Shield, Phone, MessageCircle, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Demander un devis gratuit — LM Espace Vert',
  description:
    'Obtenez un devis gratuit et sans engagement de LM Espace Vert pour votre projet de jardin. Réponse sous 24h.',
  alternates: { canonical: 'https://www.lmespacevert.fr/devis' },
}

const guarantees = [
  { icon: CheckCircle, text: 'Devis gratuit et sans engagement' },
  { icon: Clock, text: 'Réponse garantie sous 24h' },
  { icon: Gift, text: 'Visite sur place offerte' },
  { icon: Shield, text: 'Professionnel certifié RC Pro' },
]

const badges = [
  { icon: Gift, label: 'Gratuit' },
  { icon: Clock, label: '24h' },
  { icon: Shield, label: 'Sans engagement' },
]

export default function DevisPage() {
  return (
    <>
      {/* Breadcrumb */}
      <nav aria-label="Fil d'Ariane" className="border-b border-[--color-border] bg-[--color-bg-subtle]">
        <div className="container mx-auto max-w-7xl px-4 py-3 sm:px-6">
          <ol role="list" className="flex items-center gap-2 text-sm text-[--color-fg-subtle]">
            <li>
              <Link href="/" className="hover:text-[--color-fg] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[--color-focus]">
                Accueil
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li><span aria-current="page" className="text-[--color-fg]">Devis gratuit</span></li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-[--color-bg-subtle] py-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 text-center">
          <h1 className="font-display text-[clamp(2.25rem,5vw,3.75rem)] font-bold text-[--color-fg]">
            Demandez votre devis gratuit
          </h1>
          <p className="mt-4 text-lg text-[--color-fg-muted]">
            Sans engagement · Réponse sous 24h · Visite gratuite
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {badges.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 rounded-full border border-[--color-border] bg-white px-5 py-2.5 text-sm font-medium text-[--color-fg] shadow-sm"
              >
                <Icon size={16} style={{ color: '#425D07' }} aria-hidden="true" />
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main section */}
      <section className="bg-white py-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2">

            {/* Left — Form */}
            <div>
              <h2 className="font-display text-2xl font-bold text-[--color-fg] mb-8">
                Votre demande de devis
              </h2>

              <form className="space-y-6">
                {/* Identité */}
                <div>
                  <p className="font-semibold text-[--color-fg] mb-4">Vos coordonnées</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="prenom" className="text-sm font-medium text-[--color-fg] mb-1.5 block">
                        Prénom <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="prenom"
                        name="prenom"
                        placeholder="Jean"
                        required
                        className="border border-[--color-border] rounded-xl px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#80BC00]/20 focus:border-[#80BC00]"
                      />
                    </div>
                    <div>
                      <label htmlFor="nom" className="text-sm font-medium text-[--color-fg] mb-1.5 block">
                        Nom <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="nom"
                        name="nom"
                        placeholder="Dupont"
                        required
                        className="border border-[--color-border] rounded-xl px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#80BC00]/20 focus:border-[#80BC00]"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div>
                      <label htmlFor="telephone" className="text-sm font-medium text-[--color-fg] mb-1.5 block">
                        Téléphone <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="telephone"
                        name="telephone"
                        placeholder="06 XX XX XX XX"
                        required
                        className="border border-[--color-border] rounded-xl px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#80BC00]/20 focus:border-[#80BC00]"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="text-sm font-medium text-[--color-fg] mb-1.5 block">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="jean@exemple.fr"
                        required
                        className="border border-[--color-border] rounded-xl px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#80BC00]/20 focus:border-[#80BC00]"
                      />
                    </div>
                  </div>
                </div>

                {/* Chantier */}
                <div>
                  <p className="font-semibold text-[--color-fg] mb-4">Votre chantier</p>
                  <div>
                    <label htmlFor="adresse" className="text-sm font-medium text-[--color-fg] mb-1.5 block">
                      Adresse du chantier <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="adresse"
                      name="adresse"
                      placeholder="12 rue des Lilas, 69000 Lyon"
                      required
                      className="border border-[--color-border] rounded-xl px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#80BC00]/20 focus:border-[#80BC00]"
                    />
                  </div>
                </div>

                {/* Type de prestation */}
                <div>
                  <p className="font-semibold text-[--color-fg] mb-4">Type de prestation</p>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      'Entretien régulier',
                      'Élagage / Abattage',
                      'Création de jardin',
                      'Maçonnerie paysagère',
                      'Arrosage automatique',
                      'Engazonnement',
                      'Autre',
                    ].map((service) => (
                      <label key={service} className="flex items-center gap-3 cursor-pointer group">
                        <input
                          type="checkbox"
                          name="services"
                          value={service}
                          className="w-4 h-4 rounded accent-[#80BC00] cursor-pointer"
                        />
                        <span className="text-sm text-[--color-fg] group-hover:text-[#80BC00] transition-colors">
                          {service}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Surface & Budget */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="surface" className="text-sm font-medium text-[--color-fg] mb-1.5 block">
                      Surface approximative
                    </label>
                    <select
                      id="surface"
                      name="surface"
                      className="border border-[--color-border] rounded-xl px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#80BC00]/20 focus:border-[#80BC00] bg-white"
                    >
                      <option value="">Sélectionner</option>
                      <option value="lt200">Moins de 200 m²</option>
                      <option value="200-500">200 – 500 m²</option>
                      <option value="500-1000">500 – 1 000 m²</option>
                      <option value="gt1000">Plus de 1 000 m²</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="budget" className="text-sm font-medium text-[--color-fg] mb-1.5 block">
                      Budget approximatif
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      className="border border-[--color-border] rounded-xl px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#80BC00]/20 focus:border-[#80BC00] bg-white"
                    >
                      <option value="">Sélectionner</option>
                      <option value="lt500">Moins de 500 €</option>
                      <option value="500-2000">500 – 2 000 €</option>
                      <option value="2000-5000">2 000 – 5 000 €</option>
                      <option value="gt5000">Plus de 5 000 €</option>
                      <option value="undefined">Non défini</option>
                    </select>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label htmlFor="description" className="text-sm font-medium text-[--color-fg] mb-1.5 block">
                    Description du projet
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows={5}
                    placeholder="Décrivez votre projet, vos contraintes, vos souhaits..."
                    className="border border-[--color-border] rounded-xl px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#80BC00]/20 focus:border-[#80BC00] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl px-6 py-4 font-semibold text-base transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                  style={{ backgroundColor: '#80BC00', color: '#ffffff', boxShadow: 'rgb(128, 188, 0) 0px 0px 25px -14px' }}
                >
                  Envoyer ma demande
                </button>

                <p className="text-xs text-center text-[--color-fg-subtle]">
                  En envoyant ce formulaire, vous acceptez d&apos;être recontacté par LM Espace Vert.
                  Aucune donnée n&apos;est cédée à des tiers.
                </p>
              </form>
            </div>

            {/* Right — Why us */}
            <div>
              <h2 className="font-display text-2xl font-bold text-[--color-fg] mb-8">
                Pourquoi nous choisir ?
              </h2>

              <ul role="list" className="space-y-4">
                {guarantees.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-start gap-4">
                    <div className="mt-0.5 flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(128, 188, 0, 0.1)' }}>
                      <Icon size={18} style={{ color: '#425D07' }} aria-hidden="true" />
                    </div>
                    <span className="text-[--color-fg] leading-relaxed pt-1.5">{text}</span>
                  </li>
                ))}
              </ul>

              {/* Contact direct */}
              <div className="mt-8 rounded-2xl p-6 bg-[--color-green-light]">
                <p className="font-semibold text-[--color-fg] mb-1">Contact direct</p>
                <p className="text-sm text-[--color-fg-muted] mb-4">
                  Préférez nous appeler ? Notre équipe vous reçoit du lundi au vendredi, 8h–18h.
                </p>
                <div className="space-y-3">
                  <a
                    href="tel:+33XXXXXXXXX"
                    className="flex items-center gap-3 text-sm font-medium text-[--color-fg] hover:underline"
                  >
                    <Phone size={16} style={{ color: '#425D07' }} aria-hidden="true" />
                    +33 (0)X XX XX XX XX
                  </a>
                  <a
                    href="https://wa.me/33XXXXXXXXX"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm font-medium text-[--color-fg] hover:underline"
                  >
                    <MessageCircle size={16} style={{ color: '#425D07' }} aria-hidden="true" />
                    WhatsApp — réponse rapide
                  </a>
                </div>
              </div>

              {/* Testimonial */}
              <div className="mt-6 rounded-2xl border border-[--color-border] bg-white p-6 shadow-sm">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="#425D07" style={{ color: '#425D07' }} aria-hidden="true" />
                  ))}
                </div>
                <p className="text-sm text-[--color-fg-muted] italic leading-relaxed">
                  &ldquo;Réponse en moins de 2h, visite le lendemain et devis très détaillé. Travail impeccable
                  sur notre jardin à Caluire. Je recommande sans hésitation !&rdquo;
                </p>
                <p className="mt-3 text-sm font-semibold text-[--color-fg]">Sophie M.</p>
                <p className="text-xs text-[--color-fg-subtle]">Caluire-et-Cuire · Création de jardin</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
