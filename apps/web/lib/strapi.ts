const STRAPI_URL = process.env.STRAPI_URL || 'http://localhost:1337'
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN || ''

async function fetchStrapi<T>(endpoint: string, params: Record<string, string> = {}): Promise<T | null> {
  try {
    const url = new URL(`${STRAPI_URL}/api/${endpoint}`)
    Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, String(v)))
    const res = await fetch(url.toString(), {
      headers: { Authorization: `Bearer ${STRAPI_TOKEN}` },
      next: { revalidate: 60 },
    })
    if (!res.ok) return null
    const json = await res.json()
    return json.data
  } catch {
    return null
  }
}

export async function getStrapiArticles() {
  return fetchStrapi<any[]>('articles', {
    'sort[0]': 'publishedAt:desc',
    'populate': 'image',
    'pagination[pageSize]': '100',
  })
}

export async function getStrapiGallery() {
  return fetchStrapi<any[]>('galerie-photos', {
    'sort[0]': 'ordre:asc',
    'populate': 'image',
    'pagination[pageSize]': '100',
  })
}

export async function getStrapiRealisations() {
  return fetchStrapi<any[]>('realisations', {
    'sort[0]': 'annee:desc',
    'populate[0]': 'imageAvant',
    'populate[1]': 'imageApres',
    'pagination[pageSize]': '50',
  })
}

export async function getStrapiTemoignages() {
  return fetchStrapi<any[]>('temoignages', {
    'sort[0]': 'createdAt:desc',
    'populate': '*',
    'pagination[pageSize]': '20',
  })
}

export async function getStrapiSettings() {
  return fetchStrapi<any>('parametre-site')
}
