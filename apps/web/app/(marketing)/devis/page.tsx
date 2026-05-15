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

const inputClass =
  'w-full px-5 py-3.5 rounded-full border border-[#D8D8D8] text-[#2F2F2F] placeholder-[#8C8F94] bg-white text-sm focus:outline-none focus:border-[#80BC00] focus:ring-2 focus:ring-[rgba(128,188,0,0.15)] transition-all'
const labelClass = 'block text-xs font-semibold uppercase tracking-wider mb-2 text-[#2F2F2F]'

export default function DevisPage() {
  return (
    <>
      {/* Breadcrumb */}
      <nav aria-label="Fil d'Ariane" className="border-b border-[#EDEDED]" style={{ backgroundColor: '#F7F5F0' }}>
        <div className="container mx-auto max-w-7xl px-4 py-3 sm:px-6">
          <ol role="list" className="flex items-center gap-2 text-sm" style={{ color: '#8C8F94' }}>
            <li>
              <Link href="/" className="hover:text-[#2F2F2F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#425D07]">
                Accueil
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li><span aria-current="page" style={{ color: '#2F2F2F' }}>Devis gratuit</span></li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ backgroundColor: '#F7F5F0' }} className="py-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 text-center">
          <h1 className="font-display text-[clamp(2.25rem,5vw,3.75rem)] font-bold" style={{ color: '#2F2F2F' }}>
            Demandez votre devis gratuit
          </h1>
          <p className="mt-4 text-lg" style={{ color: '#8C8F94' }}>
            Sans engagement · Réponse sous 24h · Visite gratuite
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {badges.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 rounded-full border border-[#EDEDED] bg-white px-5 py-2.5 text-sm font-medium shadow-sm"
                style={{ color: '#2F2F2F' }}
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
              <h2 className="font-display text-2xl font-bold mb-8" style={{ color: '#2F2F2F' }}>
                Votre demande de devis
              </h2>

              <form className="space-y-6">
                {/* Identité */}
                <div>
                  <p className="font-semibold mb-4" style={{ color: '#2F2F2F' }}>Vos coordonnées</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="prenom" className={labelClass}>
                        Prénom <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="prenom"
                        name="prenom"
                        placeholder="Jean"
                        required
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="nom" className={labelClass}>
                        Nom <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="nom"
                        name="nom"
                        placeholder="Dupont"
                        required
                        className={inputClass}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div>
                      <label htmlFor="telephone" className={labelClass}>
                        Téléphone <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="telephone"
                        name="telephone"
                        placeholder="06 XX XX XX XX"
                        required
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className={labelClass}>
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="jean@exemple.fr"
                        required
                        className={inputClass}
                      />
                    </div>
                  </div>
                </div>

                {/* Chantier */}
                <div>
                  <p className="font-semibold mb-4" style={{ color: '#2F2F2F' }}>Votre chantier</p>
                  <div>
                    <label htmlFor="adresse" className={labelClass}>
                      Adresse du chantier <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="adresse"
                      name="adresse"
                      placeholder="12 rue des Lilas, 69000 Lyon"
                      required
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Type de prestation */}
                <div>
                  <p className="font-semibold mb-4" style={{ color: '#2F2F2F' }}>Type de prestation</p>
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
                          className="w-4 h-4 accent-[#80BC00] mt-0.5 cursor-pointer"
                        />
                        <span className="text-sm group-hover:text-[#80BC00] transition-colors" style={{ color: '#2F2F2F' }}>
                          {service}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Surface & Budget */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="surface" className={labelClass}>
                      Surface approximative
                    </label>
                    <select
                      id="surface"
                      name="surface"
                      className={inputClass}
                    >
                      <option value="">Sélectionner</option>
                      <option value="lt200">Moins de 200 m²</option>
                      <option value="200-500">200 – 500 m²</option>
                      <option value="500-1000">500 – 1 000 m²</option>
                      <option value="gt1000">Plus de 1 000 m²</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="budget" className={labelClass}>
                      Budget approximatif
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      className={inputClass}
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
                  <label htmlFor="description" className={labelClass}>
                    Description du projet
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows={5}
                    placeholder="Décrivez votre projet, vos contraintes, vos souhaits..."
                    className="w-full px-5 py-3.5 rounded-2xl border border-[#D8D8D8] text-[#2F2F2F] placeholder-[#8C8F94] bg-white text-sm focus:outline-none focus:border-[#80BC00] focus:ring-2 focus:ring-[rgba(128,188,0,0.15)] transition-all resize-y min-h-[120px]"
                  />
                </div>

                <button
                  type="submit"
                  style={{ backgroundColor: '#80BC00', color: '#ffffff', boxShadow: 'rgb(128, 188, 0) 0px 0px 25px -14px' }}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-opacity hover:opacity-90"
                >
                  Envoyer ma demande
                </button>

                <p className="text-xs text-center" style={{ color: '#8C8F94' }}>
                  En envoyant ce formulaire, vous acceptez d&apos;être recontacté par LM Espace Vert.
                  Aucune donnée n&apos;est cédée à des tiers.
                </p>
              </form>
            </div>

            {/* Right — Why us (Sidebar) */}
            <div>
              <h2 className="font-display text-2xl font-bold mb-8" style={{ color: '#2F2F2F' }}>
                Pourquoi nous choisir ?
              </h2>

              <div className="rounded-2xl border border-[#EDEDED] p-6" style={{ backgroundColor: '#F7F5F0' }}>
                <p className="font-semibold mb-4" style={{ color: '#425D07' }}>Nos garanties</p>
                <ul role="list" className="space-y-4">
                  {guarantees.map(({ icon: Icon, text }) => (
                    <li key={text} className="flex items-start gap-4">
                      <div className="mt-0.5 flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(128, 188, 0, 0.1)' }}>
                        <Icon size={18} style={{ color: '#80BC00' }} aria-hidden="true" />
                      </div>
                      <span className="leading-relaxed pt-1.5" style={{ color: '#2F2F2F' }}>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact direct */}
              <div className="mt-6 rounded-2xl p-6 border border-[#EDEDED]" style={{ backgroundColor: '#F7F5F0' }}>
                <p className="font-semibold mb-1" style={{ color: '#2F2F2F' }}>Contact direct</p>
                <p className="text-sm mb-4" style={{ color: '#8C8F94' }}>
                  Préférez nous appeler ? Notre équipe vous reçoit du lundi au vendredi, 8h–18h.
                </p>
                <div className="space-y-3">
                  <a
                    href="tel:+33XXXXXXXXX"
                    className="flex items-center gap-3 text-sm font-medium hover:underline"
                    style={{ color: '#2F2F2F' }}
                  >
                    <Phone size={16} style={{ color: '#425D07' }} aria-hidden="true" />
                    +33 (0)X XX XX XX XX
                  </a>
                  <a
                    href="https://wa.me/33XXXXXXXXX"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm font-medium hover:underline"
                    style={{ color: '#2F2F2F' }}
                  >
                    <MessageCircle size={16} style={{ color: '#425D07' }} aria-hidden="true" />
                    WhatsApp — réponse rapide
                  </a>
                </div>
              </div>

              {/* Testimonial */}
              <div className="mt-6 rounded-2xl border border-[#EDEDED] bg-white p-6 shadow-sm">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="#425D07" style={{ color: '#425D07' }} aria-hidden="true" />
                  ))}
                </div>
                <p className="text-sm italic leading-relaxed" style={{ color: '#8C8F94' }}>
                  &ldquo;Réponse en moins de 2h, visite le lendemain et devis très détaillé. Travail impeccable
                  sur notre jardin à Caluire. Je recommande sans hésitation !&rdquo;
                </p>
                <p className="mt-3 text-sm font-semibold" style={{ color: '#2F2F2F' }}>Sophie M.</p>
                <p className="text-xs" style={{ color: '#8C8F94' }}>Caluire-et-Cuire · Création de jardin</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
