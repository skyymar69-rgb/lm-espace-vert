import { articles } from '@/lib/articles'
import { NextResponse } from 'next/server'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.lm-espace-vert.fr'

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

export function GET() {
  const latestArticles = [...articles]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 20)

  const items = latestArticles
    .map((article) => {
      const pubDate = new Date(article.date).toUTCString()
      const link = `${BASE_URL}/blog/${article.slug}`
      return `
    <item>
      <title>${escapeXml(article.title)}</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <description>${escapeXml(article.excerpt)}</description>
      <pubDate>${pubDate}</pubDate>
      <category>${escapeXml(article.category)}</category>
      <author>leo@lmespacevert.fr (${escapeXml(article.author)})</author>
    </item>`
    })
    .join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Blog LM Espace Vert — Conseils jardinage &amp; paysagisme Lyon</title>
    <link>${BASE_URL}/blog</link>
    <description>Conseils de paysagiste, guides saisonniers et actualités jardinage par LM Espace Vert, paysagiste à Saint-Didier-au-Mont-d'Or (Lyon).</description>
    <language>fr-FR</language>
    <copyright>© ${new Date().getFullYear()} LM Espace Vert</copyright>
    <managingEditor>leo@lmespacevert.fr (Léo Maurice)</managingEditor>
    <webMaster>leo@lmespacevert.fr (Léo Maurice)</webMaster>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <ttl>1440</ttl>
    <image>
      <url>${BASE_URL}/logo.png</url>
      <title>LM Espace Vert</title>
      <link>${BASE_URL}</link>
    </image>
    <atom:link href="${BASE_URL}/rss.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`

  return new NextResponse(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
    },
  })
}
