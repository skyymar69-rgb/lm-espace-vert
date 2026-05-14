import { Montserrat, Inter } from 'next/font/google'

export const montserrat = Montserrat({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat',
})

export const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
})
