import type { NextConfig } from 'next'

// Content-Security-Policy — protège des injections (XSS) tout en autorisant
// les services réellement utilisés : Vercel Analytics/Speed Insights, Google Analytics,
// l'iframe de zone Smappen, l'API météo open-meteo. 'unsafe-inline' est requis par les
// blocs JSON-LD inline, le snippet gtag et les nombreux style={} du site.
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://va.vercel-scripts.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  "connect-src 'self' https://api.open-meteo.com https://vitals.vercel-insights.com https://va.vercel-scripts.com https://www.google-analytics.com https://region1.google-analytics.com",
  "frame-src https://www.smappen.fr",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'self'",
  "upgrade-insecure-requests",
].join('; ')

const securityHeaders = [
  { key: 'Content-Security-Policy', value: csp },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(self), interest-cohort=()',
  },
  { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
  { key: 'Cross-Origin-Resource-Policy', value: 'same-origin' },
]

const nextConfig: NextConfig = {
  experimental: {},
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 60, // 60 jours
    dangerouslyAllowSVG: false,
    contentDispositionType: 'inline',
    remotePatterns: [],
  },
  async headers() {
    return [
      {
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=2592000, stale-while-revalidate=86400',
          },
        ],
      },
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },
  async redirects() {
    return [
      {
        source: '/index',
        destination: '/',
        permanent: true,
      },
      // #21 — Redirects SEO
      { source: '/services/elagage', destination: '/services/elagage-abattage', permanent: true },
      { source: '/services/entretien', destination: '/services/entretien-espaces-verts', permanent: true },
      { source: '/jardin', destination: '/services/creation-jardins', permanent: true },
      { source: '/devis-gratuit', destination: '/devis', permanent: true },
      // /services/taille-haies n'existe pas comme page → rattaché à l'entretien
      { source: '/services/taille-haies', destination: '/services/entretien-espaces-verts', permanent: true },
    ]
  },
}

export default nextConfig
