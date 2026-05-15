import type { MetadataRoute } from 'next'
import { articles } from '@/lib/articles'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.lmespacevert.fr'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticPages: MetadataRoute.Sitemap = [
    // Pages principales
    { url: BASE_URL,                                  lastModified: now, changeFrequency: 'daily',   priority: 1.0 },
    { url: `${BASE_URL}/services`,                    lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${BASE_URL}/realisations`,                lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${BASE_URL}/a-propos`,                    lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/contact`,                     lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/devis`,                       lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${BASE_URL}/blog`,                        lastModified: now, changeFrequency: 'daily',   priority: 0.8 },
    { url: `${BASE_URL}/tarifs`,                      lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/guide-jardinage`,             lastModified: now, changeFrequency: 'weekly',  priority: 0.75 },
    { url: `${BASE_URL}/secteurs`,                    lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE_URL}/urgences`,                    lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/engagements`,                 lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/avant-apres`,                 lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/certifications`,              lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/processus`,                   lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    // Pages catégories blog
    { url: `${BASE_URL}/blog/categorie/conseils`,     lastModified: now, changeFrequency: 'weekly',  priority: 0.65 },
    { url: `${BASE_URL}/blog/categorie/travaux`,      lastModified: now, changeFrequency: 'weekly',  priority: 0.65 },
    { url: `${BASE_URL}/blog/categorie/zones`,        lastModified: now, changeFrequency: 'weekly',  priority: 0.65 },
    { url: `${BASE_URL}/blog/categorie/actualites`,   lastModified: now, changeFrequency: 'weekly',  priority: 0.65 },
    // Zones d'intervention (secteurs)
    { url: `${BASE_URL}/secteur/saint-didier`,         lastModified: now, changeFrequency: 'monthly' as const, priority: 0.85 },
    { url: `${BASE_URL}/secteur/caluire`,              lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${BASE_URL}/secteur/ecully`,               lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${BASE_URL}/secteur/tassin`,               lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${BASE_URL}/secteur/limonest`,             lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${BASE_URL}/secteur/dardilly`,             lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${BASE_URL}/secteur/champagne`,            lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${BASE_URL}/secteur/neuville-sur-saone`,   lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${BASE_URL}/secteur/francheville`,         lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${BASE_URL}/secteur/cailloux-sur-fontaines`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.75 },
    { url: `${BASE_URL}/secteur/genay`,                lastModified: now, changeFrequency: 'monthly' as const, priority: 0.75 },
    { url: `${BASE_URL}/secteur/poleymieux`,           lastModified: now, changeFrequency: 'monthly' as const, priority: 0.75 },
    // Pages services individuelles
    { url: `${BASE_URL}/services/creation-jardins`,         lastModified: now, changeFrequency: 'monthly' as const, priority: 0.85 },
    { url: `${BASE_URL}/services/entretien-espaces-verts`,  lastModified: now, changeFrequency: 'monthly' as const, priority: 0.85 },
    { url: `${BASE_URL}/services/elagage-abattage`,         lastModified: now, changeFrequency: 'monthly' as const, priority: 0.85 },
    { url: `${BASE_URL}/services/maconnerie-paysagere`,     lastModified: now, changeFrequency: 'monthly' as const, priority: 0.85 },
    { url: `${BASE_URL}/services/arrosage-automatique`,     lastModified: now, changeFrequency: 'monthly' as const, priority: 0.85 },
    { url: `${BASE_URL}/services/engazonnement`,            lastModified: now, changeFrequency: 'monthly' as const, priority: 0.85 },
    { url: `${BASE_URL}/services/taille-haies`,             lastModified: now, changeFrequency: 'monthly' as const, priority: 0.85 },
    // Pages légales et utilitaires
    { url: `${BASE_URL}/plan-du-site`,                 lastModified: now, changeFrequency: 'monthly', priority: 0.3 },
    { url: `${BASE_URL}/mentions-legales`,            lastModified: now, changeFrequency: 'yearly',  priority: 0.2 },
    { url: `${BASE_URL}/politique-confidentialite`,   lastModified: now, changeFrequency: 'yearly',  priority: 0.2 },
    { url: `${BASE_URL}/politique-cookies`,           lastModified: now, changeFrequency: 'yearly',  priority: 0.2 },
    { url: `${BASE_URL}/accessibilite`,               lastModified: now, changeFrequency: 'yearly',  priority: 0.2 },
    { url: `${BASE_URL}/cgu`,                         lastModified: now, changeFrequency: 'yearly',  priority: 0.2 },
    { url: `${BASE_URL}/cgv`,                         lastModified: now, changeFrequency: 'yearly',  priority: 0.2 },
  ]

  // Blog articles in sitemap
  const articlePages: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${BASE_URL}/blog/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...articlePages]
}
