import type { Metadata, Viewport } from 'next'
import { newsreader, inter } from './fonts'
import './globals.css'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { CookieBanner } from '@/components/layout/cookie-banner'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.lmespacevert.fr'),
  title: {
    default: 'LM Espace Vert — Paysagiste créateur à Lyon',
    template: '%s | LM Espace Vert',
  },
  description:
    "LM Espace Vert, paysagiste créateur à Lyon. Création, entretien et aménagement de jardins haut de gamme. Demandez votre devis gratuit.",
  keywords: ['paysagiste Lyon', 'création jardin', 'entretien espaces verts', 'aménagement paysager'],
  authors: [{ name: 'LM Espace Vert', url: 'https://www.lmespacevert.fr' }],
  creator: 'Kayzen Web',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://www.lmespacevert.fr',
    siteName: 'LM Espace Vert',
    title: 'LM Espace Vert — Paysagiste créateur à Lyon',
    description:
      "LM Espace Vert, paysagiste créateur à Lyon. Création, entretien et aménagement de jardins haut de gamme.",
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LM Espace Vert — Paysagiste créateur à Lyon',
    description:
      "LM Espace Vert, paysagiste créateur à Lyon. Création, entretien et aménagement de jardins haut de gamme.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: 'https://www.lmespacevert.fr',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fefbf6' },
    { media: '(prefers-color-scheme: dark)', color: '#04181a' },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
      className={`${newsreader.variable} ${inter.variable}`}
    >
      <head>
        {/* No-flash theme script — must run before any render */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');var m=window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.dataset.theme=t||(m?'dark':'light');}catch(_){}})();`,
          }}
        />
      </head>
      <body className="flex min-h-screen flex-col bg-[--color-bg] text-[--color-fg] font-sans antialiased">
        {/* Skip link — accessibilité RGAA 12 */}
        <a
          href="#contenu-principal"
          className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-50 focus:rounded-md focus:bg-[--color-bg-elevated] focus:px-4 focus:py-2 focus:text-[--color-fg] focus:outline focus:outline-2 focus:outline-[--color-focus]"
        >
          Aller au contenu principal
        </a>

        <Header />

        <main id="contenu-principal" className="flex-1" tabIndex={-1}>
          {children}
        </main>

        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}
