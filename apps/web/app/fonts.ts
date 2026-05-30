import { Outfit } from 'next/font/google'

// Refonte design — Outfit (sans-serif géométrique moderne), police unique
// pour titres et corps, conformément au thème de référence.
export const outfit = Outfit({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-outfit',
})
