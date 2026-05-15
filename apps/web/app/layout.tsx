import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { raleway, montserrat, inter } from './fonts'
import './globals.css'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { SiteMapSection } from '@/components/layout/site-map-section'
import { CookieBanner } from '@/components/layout/cookie-banner'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { ScrollProgress } from '@/components/ui/scroll-progress'
import { BackToTop } from '@/components/ui/back-to-top'
import { StickyContactBar } from '@/components/layout/sticky-contact-bar'
import { AnnouncementBanner } from '@/components/layout/announcement-banner'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.lmespacevert.fr'),
  title: {
    default: "LM Espace Vert — Paysagiste Saint-Didier-au-Mont-d'Or & Lyon",
    template: '%s | LM Espace Vert',
  },
  description:
    "LM Espace Vert, paysagiste à Saint-Didier-au-Mont-d'Or. Création de jardins, entretien, élagage et aménagement paysager dans un rayon de 20 km. Devis gratuit.",
  keywords: [
    "paysagiste Saint-Didier-au-Mont-d'Or",
    'paysagiste Lyon nord',
    'paysagiste Caluire',
    'paysagiste Écully',
    'paysagiste Tassin',
    'création jardin Lyon',
    'entretien espaces verts Rhône',
    'aménagement paysager',
    'LM Espace Vert',
    'Léo Maurice paysagiste',
    'jardins Caluire',
    'jardins Écully',
    'jardins Tassin',
    'paysagiste nord Lyon',
    'créateur jardins 69',
    'taille haies Lyon',
    'gazon Lyon nord',
  ],
  authors: [{ name: 'LM Espace Vert', url: 'https://www.lmespacevert.fr' }],
  creator: 'Kayzen Web',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://www.lmespacevert.fr',
    siteName: 'LM Espace Vert',
    title: "LM Espace Vert — Paysagiste créateur à Lyon",
    description: "LM Espace Vert, paysagiste créateur à Lyon. Création, entretien et aménagement de jardins haut de gamme.",
    images: [
      {
        url: 'https://www.lmespacevert.fr/images/travaux-paysagers.webp',
        width: 1200,
        height: 630,
        alt: 'LM Espace Vert — Paysagiste Lyon Nord',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "LM Espace Vert — Paysagiste créateur à Lyon",
    description: "LM Espace Vert, paysagiste créateur à Lyon. Création, entretien et aménagement de jardins haut de gamme.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: { canonical: 'https://www.lmespacevert.fr' },
  verification: {
    // Add Google Search Console verification here when available
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FFFFFF' },
    { media: '(prefers-color-scheme: dark)', color: '#0f1a0f' },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
      className={`${raleway.variable} ${montserrat.variable} ${inter.variable}`}
    >
      <head>
        {/* #1 No-flash: lit uniquement localStorage, défaut = light (jamais prefers-color-scheme) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');document.documentElement.dataset.theme=t==='dark'?'dark':'light';}catch(_){}})();`,
          }}
        />
        {/* #2 Preconnect hints for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://api.open-meteo.com" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
        <link rel="dns-prefetch" href="https://www.smappen.fr" />
        {/* #3 Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        {/* #3b Hreflang */}
        <link rel="alternate" hrefLang="fr-FR" href="https://www.lmespacevert.fr" />
        <link rel="alternate" hrefLang="x-default" href="https://www.lmespacevert.fr" />
        {/* #3c Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              '@id': 'https://www.lmespacevert.fr/#organization',
              name: 'LM Espace Vert',
              url: 'https://www.lmespacevert.fr',
              logo: { '@type': 'ImageObject', url: 'https://www.lmespacevert.fr/logo.png' },
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+33-6-74-73-46-98',
                contactType: 'customer service',
                areaServed: 'FR',
                availableLanguage: 'French',
              },
              sameAs: [
                'https://www.facebook.com/people/LM-Paysage-et-jardin/61584572046303/',
                'https://www.instagram.com/lm_espacevert',
                'https://maps.app.goo.gl/rA4sfge3evAuVJLC9',
              ],
            }),
          }}
        />
        {/* #4 Google Analytics 4 */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="gtag-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}
      </head>
      <body className="flex min-h-screen flex-col bg-[--color-bg] text-[--color-fg] font-sans antialiased">
        {/* #4 Skip link RGAA */}
        <a
          href="#contenu-principal"
          className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-50 focus:rounded-md focus:bg-[--color-bg-elevated] focus:px-4 focus:py-2 focus:text-[--color-fg] focus:outline focus:outline-2 focus:outline-[--color-focus]"
        >
          Aller au contenu principal
        </a>

        {/* #5 Scroll progress bar */}
        <ScrollProgress />

        <Header />
        <AnnouncementBanner
          message="🌱 Printemps 2026 — Devis gratuit sous 24h dans tout le nord-ouest lyonnais"
          href="/devis"
          cta="Demander un devis"
          dismissKey="banner-printemps-2026"
        />

        <main id="contenu-principal" className="flex-1" tabIndex={-1}>
          {children}
        </main>

        <SiteMapSection />
        <Footer />
        <CookieBanner />
        <StickyContactBar />
        <WhatsAppButton />

        {/* #7 Back to top */}
        <BackToTop />

      </body>
    </html>
  )
}
