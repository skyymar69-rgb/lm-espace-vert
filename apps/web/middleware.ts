import { NextResponse, type NextRequest } from 'next/server'
import { maintenanceHtml } from '@/lib/maintenance-page'

/**
 * Mode maintenance — TEMPORAIRE.
 *
 * Toutes les pages (et les routes /api) répondent la page « coming soon » avec un
 * statut 503 + Retry-After : Google comprend que l'indisponibilité est passagère et
 * conserve l'indexation (contrairement à un 404 ou un noindex).
 *
 * Interrupteur :
 *   • En production, la maintenance est ACTIVE par défaut.
 *     Pour rouvrir le site : variable d'env  MAINTENANCE_MODE=off  sur Vercel,
 *     puis redéploiement. (Ou supprimer ce fichier + lib/maintenance-page.ts.)
 *   • En local (pnpm dev), la maintenance est INACTIVE par défaut, pour continuer
 *     à travailler. Pour la tester :  MAINTENANCE_MODE=on pnpm dev
 *
 * Accès privé pendant la maintenance :
 *   définir MAINTENANCE_BYPASS_TOKEN sur Vercel, puis visiter
 *   https://www.lm-espace-vert.fr/?apercu=<token>  → un cookie de session est posé
 *   et le site s'affiche normalement dans ce navigateur.
 *   Pour repasser en mode visiteur : /?apercu=stop
 */

const BYPASS_COOKIE = 'lm-apercu'
const BYPASS_PARAM = 'apercu'

// ⚠️ `public/robots.txt` et `app/robots.ts` coexistent : Next considère ça comme un
// conflit et /robots.txt répond 500 (bug préexistant). Un robots.txt en erreur pendant
// une indisponibilité, Google le lit comme « tout est interdit ». Tant que le doublon
// n'est pas supprimé, le middleware sert lui-même un robots.txt valide.
const ROBOTS_TXT = `User-agent: *
Allow: /
Disallow: /api/

Sitemap: https://www.lm-espace-vert.fr/sitemap.xml
Host: https://www.lm-espace-vert.fr
`

function isMaintenanceOn(): boolean {
  const flag = process.env.MAINTENANCE_MODE?.trim().toLowerCase()
  if (flag) return !['off', '0', 'false', 'no'].includes(flag)
  // Pas de variable définie : actif en prod, inactif en dev.
  return process.env.NODE_ENV === 'production'
}

export function middleware(request: NextRequest) {
  if (!isMaintenanceOn()) return NextResponse.next()

  if (request.nextUrl.pathname === '/robots.txt') {
    return new NextResponse(ROBOTS_TXT, {
      status: 200,
      headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    })
  }

  const token = process.env.MAINTENANCE_BYPASS_TOKEN
  const requested = request.nextUrl.searchParams.get(BYPASS_PARAM)

  // Sortie du mode aperçu
  if (requested === 'stop') {
    const url = request.nextUrl.clone()
    url.searchParams.delete(BYPASS_PARAM)
    const response = NextResponse.redirect(url)
    response.cookies.delete(BYPASS_COOKIE)
    return response
  }

  // Entrée en mode aperçu : ?apercu=<token> → cookie de session
  if (token && requested === token) {
    const url = request.nextUrl.clone()
    url.searchParams.delete(BYPASS_PARAM)
    const response = NextResponse.redirect(url)
    response.cookies.set(BYPASS_COOKIE, token, {
      httpOnly: true,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
      path: '/',
    })
    return response
  }

  // Navigateur déjà autorisé → site normal
  if (token && request.cookies.get(BYPASS_COOKIE)?.value === token) {
    return NextResponse.next()
  }

  return new NextResponse(maintenanceHtml, {
    status: 503,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Retry-After': '86400', // 24 h — signal « revenez demain » pour les crawlers
      'Cache-Control': 'no-store, must-revalidate',
    },
  })
}

// Tout est intercepté SAUF les assets statiques (le logo et le favicon de la page de
// maintenance doivent rester servis) et sitemap.xml / rss.xml, qui restent en 200 pour
// ne pas casser les signaux SEO. /robots.txt est volontairement intercepté, cf. plus haut.
export const config = {
  matcher: [
    '/((?!_next/static|_next/image|images/|qr/|favicon\\.ico|apple-touch-icon\\.png|logo\\.png|sitemap\\.xml|rss\\.xml|.*\\.(?:png|jpe?g|webp|avif|svg|ico|pdf|webmanifest)$).*)',
  ],
}
