import type { Metadata } from 'next'
import Link from 'next/link'
import { Home, Wrench, ImageIcon, FileText, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Page introuvable (404) — LM Espace Vert',
  robots: { index: false },
}

export default function NotFound() {
  return (
    <div
      className="min-h-[calc(100vh-144px)] flex flex-col items-center justify-center px-4 py-20"
      style={{ backgroundColor: '#F7F5F0' }}
    >
      {/* Illustration SVG jardin */}
      <div className="mb-8" aria-hidden="true">
        <svg
          width="180"
          height="180"
          viewBox="0 0 180 180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Sol */}
          <ellipse cx="90" cy="155" rx="70" ry="10" fill="#EDEDED" />

          {/* Pot */}
          <path d="M65 155 L70 115 L110 115 L115 155 Z" fill="#C8A96E" />
          <rect x="60" y="112" width="60" height="8" rx="4" fill="#B8975A" />

          {/* Tige */}
          <path d="M90 112 Q88 95 90 75" stroke="#425D07" strokeWidth="3" strokeLinecap="round" />

          {/* Feuilles */}
          <path d="M90 85 Q75 70 68 80 Q80 88 90 85 Z" fill="#80BC00" />
          <path d="M90 95 Q105 80 112 90 Q100 98 90 95 Z" fill="#80BC00" />
          <path d="M90 75 Q80 58 85 50 Q95 60 90 75 Z" fill="#425D07" />

          {/* Fleur */}
          <circle cx="90" cy="50" r="8" fill="#F7F5F0" stroke="#425D07" strokeWidth="2" />
          <circle cx="90" cy="50" r="4" fill="#80BC00" />
          <circle cx="90" cy="38" r="5" fill="#80BC00" opacity="0.7" />
          <circle cx="101" cy="44" r="5" fill="#80BC00" opacity="0.7" />
          <circle cx="101" cy="56" r="5" fill="#80BC00" opacity="0.7" />
          <circle cx="90" cy="62" r="5" fill="#80BC00" opacity="0.7" />
          <circle cx="79" cy="56" r="5" fill="#80BC00" opacity="0.7" />
          <circle cx="79" cy="44" r="5" fill="#80BC00" opacity="0.7" />

          {/* Cisailles */}
          <g transform="translate(118, 88) rotate(-35)">
            <rect x="0" y="0" width="26" height="5" rx="2.5" fill="#8C8F94" />
            <rect x="0" y="7" width="26" height="5" rx="2.5" fill="#8C8F94" />
            <circle cx="4" cy="6" r="4" fill="#EDEDED" stroke="#8C8F94" strokeWidth="1.5" />
          </g>

          {/* 404 discret */}
          <text x="38" y="148" fontSize="11" fontWeight="800" fill="#8C8F94" fontFamily="sans-serif">4 0 4</text>
        </svg>
      </div>

      {/* Texte principal */}
      <div className="text-center max-w-lg">
        <p
          className="text-xs font-bold uppercase tracking-widest mb-3"
          style={{ color: '#80BC00' }}
        >
          Erreur 404
        </p>
        <h1
          className="font-display text-3xl sm:text-4xl font-bold mb-3"
          style={{ color: '#425D07' }}
        >
          Oops, cette page n&apos;existe pas…
        </h1>
        <p className="text-base text-[#8C8F94] mb-2 leading-relaxed">
          Cette page semble avoir été taillée de travers — ou peut-être que le vent l&apos;a emportée comme une feuille morte.
        </p>
        <p className="text-sm text-[#8C8F94] mb-10">
          Pas d&apos;inquiétude, voici quelques pistes pour retrouver votre chemin&nbsp;:
        </p>

        {/* Liens rapides */}
        <nav aria-label="Liens rapides depuis la page 404">
          <ul className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
            {[
              { href: '/', label: 'Accueil', Icon: Home },
              { href: '/services', label: 'Services', Icon: Wrench },
              { href: '/realisations', label: 'Réalisations', Icon: ImageIcon },
              { href: '/devis', label: 'Devis gratuit', Icon: FileText },
            ].map(({ href, label, Icon }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="flex flex-col items-center gap-2 rounded-2xl border border-[#EDEDED] bg-white px-4 py-5 text-sm font-semibold hover:border-[#80BC00] hover:shadow-md transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#80BC00]"
                  style={{ color: '#425D07' }}
                >
                  <Icon size={20} style={{ color: '#80BC00' }} aria-hidden="true" />
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Bouton CTA principal */}
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full px-8 py-3 text-sm font-bold transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#80BC00]"
            style={{ backgroundColor: '#80BC00', color: '#ffffff', boxShadow: 'rgb(128, 188, 0) 0px 0px 25px -14px' }}
          >
            <Home size={15} aria-hidden="true" />
            Retour à l&apos;accueil
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-[#EDEDED] bg-white px-6 py-3 text-sm font-semibold text-[#2F2F2F] transition-colors hover:border-[#80BC00] hover:text-[#425D07] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#80BC00]"
          >
            Nous contacter <ArrowRight size={14} aria-hidden="true" />
          </Link>
        </div>

        {/* Téléphone */}
        <div className="mt-10 pt-6 border-t border-[#EDEDED]">
          <p className="text-xs text-[#8C8F94] mb-2">Besoin d&apos;aide immédiate&nbsp;? Appelez-nous :</p>
          <a
            href="tel:+33674734698"
            className="text-xl font-bold hover:opacity-80 transition-opacity"
            style={{ color: '#425D07' }}
            aria-label="Appeler LM Espace Vert au 06 74 73 46 98"
          >
            📞 06 74 73 46 98
          </a>
        </div>
      </div>
    </div>
  )
}
