import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: ['/api/', '/devis/confirmation'] },
    ],
    sitemap: 'https://www.lmespacevert.fr/sitemap.xml',
    host: 'https://www.lmespacevert.fr',
  }
}
