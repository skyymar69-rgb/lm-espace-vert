import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, Clock, Gift, Shield, Phone, MessageCircle, Star, Zap, Award } from 'lucide-react'
import { JsonLd } from '@/components/seo/json-ld'

const quoteActionSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Devis paysagiste gratuit',
  provider: {
    '@type': 'LandscapingBusiness',
    name: 'LM Espace Vert',
    url: 'https://www.lmespacevert.fr',
    telephone: '+33674734698',
  },
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'EUR',
    description: 'Devis gratuit et sans engagement — visite sur place offerte — réponse sous 48h',
  },
  potentialAction: {
    '@type': 'QuoteAction',
    target: 'https://www.lmespacevert.fr/devis',
    name: 'Demander un devis gratuit',
  },
}

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
      <JsonLd data={quoteActionSchema} />
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
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#80BC00' }}>
            Devis 100% gratuit &amp; sans engagement
          </p>
          <h1 className="font-display text-[clamp(2.25rem,5vw,3.75rem)] font-bold" style={{ color: '#425D07' }}>
            Votre devis gratuit en 3 étapes
          </h1>
          <p className="mt-4 text-lg max-w-xl mx-auto" style={{ color: '#8C8F94' }}>
            Remplissez le formulaire · Visite gratuite sous 48h · Devis détaillé sans surprise
          </p>

          {/* Trust badge */}
          <div className="mt-5 inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold border" style={{ backgroundColor: 'rgba(128,188,0,0.08)', borderColor: 'rgba(128,188,0,0.3)', color: '#425D07' }}>
            <CheckCircle size={15} aria-hidden="true" />
            Réponse garantie sous 24h
          </div>

          {/* Phone prominent */}
          <div className="mt-6">
            <a
              href="tel:+33674734698"
              className="inline-flex items-center gap-3 rounded-2xl px-6 py-4 text-white font-bold text-lg shadow-md hover:opacity-90 transition-opacity"
              style={{ backgroundColor: '#425D07' }}
            >
              <Phone size={22} aria-hidden="true" />
              06 74 73 46 98
            </a>
            <p className="mt-2 text-sm" style={{ color: '#8C8F94' }}>Lun–Ven 8h–18h · Sam 8h–12h</p>
          </div>

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

      {/* Steps */}
      <section className="bg-white border-b border-[#EDEDED] py-10">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <ol className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { num: 1, title: 'Remplissez le formulaire', desc: 'Décrivez votre projet en 2 minutes. Aucun engagement.' },
              { num: 2, title: 'Visite gratuite', desc: 'Nous nous déplaçons chez vous pour évaluer votre chantier.' },
              { num: 3, title: 'Devis sous 48h', desc: 'Recevez un devis clair, détaillé et sans mauvaise surprise.' },
            ].map(({ num, title, desc }) => (
              <li key={num} className="flex items-start gap-4">
                <div
                  className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white"
                  style={{ backgroundColor: '#80BC00' }}
                  aria-hidden="true"
                >
                  {num}
                </div>
                <div>
                  <p className="font-semibold text-sm" style={{ color: '#425D07' }}>{title}</p>
                  <p className="text-xs mt-0.5 leading-relaxed" style={{ color: '#8C8F94' }}>{desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Ce qui est inclus */}
      <section style={{ backgroundColor: '#F7F5F0' }} className="py-12">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-8">
            <h2 className="font-display text-2xl font-bold" style={{ color: '#425D07' }}>Ce qui est inclus</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { icon: Gift, title: 'Visite gratuite', desc: 'Déplacement offert sur votre chantier pour évaluer votre projet.' },
              { icon: Clock, title: 'Devis sous 48h', desc: 'Réponse rapide et devis détaillé remis en main propre ou par email.' },
              { icon: Shield, title: 'Sans engagement', desc: 'Aucune obligation de suite. Vous êtes libre d\'accepter ou non.' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl border border-[#EDEDED] p-6 text-center shadow-sm">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'rgba(128,188,0,0.1)' }}>
                  <Icon size={22} style={{ color: '#80BC00' }} aria-hidden="true" />
                </div>
                <p className="font-bold text-sm mb-1" style={{ color: '#425D07' }}>{title}</p>
                <p className="text-xs leading-relaxed" style={{ color: '#8C8F94' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi nous choisir */}
      <section className="bg-white py-12 border-b border-[#EDEDED]">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-8">
            <h2 className="font-display text-2xl font-bold" style={{ color: '#425D07' }}>Pourquoi nous choisir ?</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { icon: Zap, title: 'Rapidité', desc: 'Réponse sous 24h, visite sous 48h, devis remis sans délai.' },
              { icon: Award, title: 'Qualité', desc: '5 étoiles sur Google · 28 avis clients · Finitions soignées.' },
              { icon: Shield, title: 'RC Pro', desc: 'Couverture complète en responsabilité civile professionnelle.' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex items-start gap-4 rounded-2xl border border-[#EDEDED] p-5">
                <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(66,93,7,0.08)' }}>
                  <Icon size={18} style={{ color: '#425D07' }} aria-hidden="true" />
                </div>
                <div>
                  <p className="font-bold text-sm" style={{ color: '#425D07' }}>{title}</p>
                  <p className="text-xs mt-0.5 leading-relaxed" style={{ color: '#8C8F94' }}>{desc}</p>
                </div>
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
                    href="tel:+33674734698"
                    className="flex items-center gap-3 text-sm font-bold hover:underline"
                    style={{ color: '#425D07' }}
                  >
                    <Phone size={18} style={{ color: '#425D07' }} aria-hidden="true" />
                    06 74 73 46 98
                  </a>
                  <a
                    href="https://wa.me/33674734698?text=Bonjour%2C%20je%20souhaite%20un%20devis%20gratuit%20pour%20mon%20jardin."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm font-medium hover:underline"
                    style={{ color: '#2F2F2F' }}
                  >
                    <MessageCircle size={16} style={{ color: '#25D366' }} aria-hidden="true" />
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
