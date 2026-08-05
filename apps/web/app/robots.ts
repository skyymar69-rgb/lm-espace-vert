import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/devis/confirmation',
          '/mentions-legales',
          '/politique-confidentialite',
          '/politique-cookies',
          '/cgu',
          '/cgv',
        ],
      },
    ],
    sitemap: 'https://www.lm-espace-vert.fr/sitemap.xml',
    host: 'https://www.lm-espace-vert.fr',
  }
}
