import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle, Clock, Gift, Shield, Phone, MessageCircle, Star } from 'lucide-react'
import { JsonLd } from '@/components/seo/json-ld'
import { DevisForm } from '@/components/forms/devis-form'

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.lmespacevert.fr' },
    { '@type': 'ListItem', position: 2, name: 'Devis gratuit', item: 'https://www.lmespacevert.fr/devis' },
  ],
}

const quoteActionSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Devis paysagiste gratuit',
  provider: {
    '@type': 'LandscapingBusiness',
    name: 'LM Espace Vert',
    url: 'https://www.lmespacevert.fr',
    telephone: '+33672587353',
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
  title: 'Devis Gratuit Paysagiste Lyon — LM Espace Vert',
  description: "Obtenez un devis gratuit et sans engagement de LM Espace Vert pour votre jardin à Lyon nord. Visite sur place offerte, réponse garantie sous 24h. Paysagiste à Saint-Didier-au-Mont-d'Or.",
  alternates: { canonical: 'https://www.lmespacevert.fr/devis' },
  openGraph: {
    title: 'Devis Gratuit Paysagiste Lyon — LM Espace Vert',
    description: "Obtenez un devis gratuit pour votre jardin à Lyon nord. Visite sur place offerte, réponse garantie sous 24h. Paysagiste certifié à Saint-Didier-au-Mont-d'Or.",
    url: 'https://www.lmespacevert.fr/devis',
    type: 'website',
    images: [{ url: 'https://www.lmespacevert.fr/images/photo-equipe.webp', width: 1200, height: 630, alt: 'Demander un devis gratuit à LM Espace Vert, paysagiste Lyon' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Devis Gratuit Paysagiste Lyon — LM Espace Vert',
    description: "Devis gratuit et sans engagement pour votre jardin à Lyon nord. Réponse garantie sous 24h.",
    images: ['https://www.lmespacevert.fr/images/photo-equipe.webp'],
  },
}

export default function DevisPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
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
      <section style={{ backgroundColor: '#F7F5F0' }} className="py-16 relative overflow-hidden">
        {/* Decorative background */}
        <div
          className="absolute top-0 right-0 w-96 h-96 -translate-y-1/2 translate-x-1/3 rounded-full opacity-[0.07] pointer-events-none"
          style={{ background: 'radial-gradient(circle, #80BC00, transparent)' }}
          aria-hidden="true"
        />
        <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-4 border" style={{ backgroundColor: 'rgba(128,188,0,0.10)', borderColor: 'rgba(128,188,0,0.3)', color: '#425D07' }}>
            <CheckCircle size={13} aria-hidden="true" />
            Devis 100% gratuit &amp; sans engagement
          </div>
          <h1 className="font-display text-[clamp(2.25rem,5vw,3.5rem)] font-bold" style={{ color: '#425D07' }}>
            Votre devis gratuit en 3 étapes
          </h1>
          <p className="mt-4 text-lg max-w-xl mx-auto leading-relaxed" style={{ color: '#8C8F94' }}>
            Remplissez le formulaire · Visite gratuite sous 48h · Devis détaillé sans surprise
          </p>

          {/* Trust badges row */}
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold"
              style={{ backgroundColor: 'rgba(128,188,0,0.12)', color: '#425D07' }}
            >
              <CheckCircle size={15} aria-hidden="true" />
              Réponse sous 24h
            </div>
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold"
              style={{ backgroundColor: 'rgba(128,188,0,0.12)', color: '#425D07' }}
            >
              <Shield size={15} aria-hidden="true" />
              RC Pro certifié
            </div>
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold"
              style={{ backgroundColor: 'rgba(128,188,0,0.12)', color: '#425D07' }}
            >
              <Star size={15} fill="#425D07" aria-hidden="true" />
              5.0 · 28 avis Google
            </div>
          </div>

          {/* Social proof */}
          <p className="mt-4 text-sm font-medium" style={{ color: '#8C8F94' }}>
            Plus de 200 devis envoyés cette année
          </p>

          {/* Phone */}
          <div className="mt-6">
            <a
              href="tel:+33672587353"
              className="inline-flex items-center gap-3 rounded-2xl px-6 py-4 text-white font-bold text-lg shadow-md hover:scale-[1.02] hover:shadow-lg transition-all duration-200"
              style={{ backgroundColor: '#425D07', boxShadow: '0 6px 20px rgba(66,93,7,0.3)' }}
            >
              <Phone size={22} aria-hidden="true" />
              06 72 58 73 53
            </a>
            <p className="mt-2 text-sm" style={{ color: '#8C8F94' }}>Lun–Ven 8h–18h · Sam 8h–12h</p>
          </div>
        </div>
      </section>

      {/* Main section */}
      <section className="bg-white py-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-[1fr_380px]">

            {/* Left — Form area */}
            <div>
              {/* Why request a quote — 3 advantages BEFORE the form */}
              <div className="mb-8 rounded-2xl border border-[#EDEDED] p-6" style={{ backgroundColor: 'rgba(128,188,0,0.05)' }}>
                <h2 className="font-semibold text-sm mb-4" style={{ color: '#425D07' }}>
                  Pourquoi demander un devis&nbsp;?
                </h2>
                <ul className="space-y-2.5">
                  {[
                    'Visite gratuite sur place',
                    'Devis détaillé sous 48h',
                    'Sans engagement de votre part',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm" style={{ color: '#2F2F2F' }}>
                      <CheckCircle size={16} style={{ color: '#80BC00', flexShrink: 0 }} aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Alert — scarcity */}
              <div className="mb-6 flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-medium" style={{ backgroundColor: 'rgba(255,167,0,0.08)', borderColor: 'rgba(255,167,0,0.35)', color: '#92600A' }}>
                <span aria-hidden="true">⚠</span>
                3 créneaux disponibles cette semaine
              </div>

              {/* Form card */}
              <div className="rounded-2xl border border-[#EDEDED] bg-white p-6 sm:p-8 shadow-sm">
                <DevisForm />
              </div>

              {/* Social proof below form */}
              <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-xs" style={{ color: '#8C8F94' }}>
                <span className="flex items-center gap-1.5">
                  <CheckCircle size={12} style={{ color: '#80BC00' }} aria-hidden="true" />
                  Réponse garantie sous 24h
                </span>
                <span aria-hidden="true">·</span>
                <span className="flex items-center gap-1.5">
                  <Shield size={12} style={{ color: '#80BC00' }} aria-hidden="true" />
                  Données sécurisées
                </span>
                <span aria-hidden="true">·</span>
                <span className="flex items-center gap-1.5">
                  <Gift size={12} style={{ color: '#80BC00' }} aria-hidden="true" />
                  Sans engagement
                </span>
              </div>
            </div>

            {/* Right — Sidebar */}
            <aside className="space-y-6">

              {/* Léo portrait + signature */}
              <div className="rounded-2xl border border-[#EDEDED] bg-white p-6 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="flex-shrink-0 w-16 h-16 rounded-full overflow-hidden border-2"
                    style={{ borderColor: '#80BC00' }}
                  >
                    <Image
                      src="/images/photo-equipe.webp"
                      alt="Léo, fondateur LM Espace Vert"
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-sm" style={{ color: '#2F2F2F' }}>Léo M.</p>
                    <p className="text-xs" style={{ color: '#8C8F94' }}>Fondateur · LM Espace Vert</p>
                  </div>
                </div>
                <p className="text-sm italic leading-relaxed" style={{ color: '#8C8F94' }}>
                  &ldquo;Je réponds personnellement à chaque demande. Votre projet mérite une attention particulière.&rdquo;
                </p>
              </div>

              {/* Google stars */}
              <div className="rounded-2xl border border-[#EDEDED] bg-white p-5 shadow-sm">
                <div className="flex items-center gap-2 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="#F4B400" style={{ color: '#F4B400' }} aria-hidden="true" />
                  ))}
                  <span className="font-bold text-sm" style={{ color: '#2F2F2F' }}>5.0</span>
                </div>
                <p className="text-xs mb-3" style={{ color: '#8C8F94' }}>28 avis Google vérifiés</p>
                {/* Devis-specific testimonial */}
                <blockquote>
                  <p className="text-sm italic leading-relaxed" style={{ color: '#8C8F94' }}>
                    &ldquo;J&apos;ai reçu un devis en 24h, très professionnel. Léo s&apos;est déplacé le lendemain pour évaluer mon jardin.&rdquo;
                  </p>
                  <footer className="mt-2">
                    <p className="text-sm font-semibold" style={{ color: '#2F2F2F' }}>Sophie M.</p>
                    <div className="flex items-center gap-1">
                      <p className="text-xs" style={{ color: '#8C8F94' }}>Écully</p>
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={10} fill="#F4B400" style={{ color: '#F4B400' }} aria-hidden="true" />
                      ))}
                    </div>
                  </footer>
                </blockquote>
              </div>

              {/* Guarantees */}
              <div className="rounded-2xl border border-[#EDEDED] p-6" style={{ backgroundColor: '#F7F5F0' }}>
                <p className="font-semibold text-sm mb-4" style={{ color: '#425D07' }}>Nos garanties</p>
                <ul role="list" className="space-y-3">
                  {[
                    { icon: CheckCircle, text: 'Devis gratuit et sans engagement' },
                    { icon: Clock, text: 'Réponse garantie sous 24h' },
                    { icon: Gift, text: 'Visite sur place offerte' },
                    { icon: Shield, text: 'Professionnel certifié RC Pro' },
                  ].map(({ icon: Icon, text }) => (
                    <li key={text} className="flex items-start gap-3">
                      <div className="mt-0.5 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(128,188,0,0.1)' }}>
                        <Icon size={15} style={{ color: '#80BC00' }} aria-hidden="true" />
                      </div>
                      <span className="text-sm leading-relaxed pt-1.5" style={{ color: '#2F2F2F' }}>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact direct */}
              <div className="rounded-2xl p-5 border border-[#EDEDED]" style={{ backgroundColor: '#F7F5F0' }}>
                <p className="font-semibold text-sm mb-1" style={{ color: '#2F2F2F' }}>Contact direct</p>
                <p className="text-xs mb-4" style={{ color: '#8C8F94' }}>
                  Préférez nous appeler ? Lun–Ven 8h–18h.
                </p>
                <div className="space-y-3">
                  <a
                    href="tel:+33672587353"
                    className="flex items-center gap-3 text-sm font-bold hover:underline"
                    style={{ color: '#425D07' }}
                  >
                    <Phone size={16} style={{ color: '#425D07' }} aria-hidden="true" />
                    06 72 58 73 53
                  </a>
                  <a
                    href="https://wa.me/33672587353?text=Bonjour%20LM%20Espace%20Vert%2C%20je%20souhaite%20un%20devis%20gratuit%20pour%20mon%20jardin."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm font-medium hover:underline"
                    style={{ color: '#2F2F2F' }}
                  >
                    <MessageCircle size={15} style={{ color: '#25D366' }} aria-hidden="true" />
                    WhatsApp — réponse rapide
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}

