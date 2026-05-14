import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const sections = [
  {
    href: '/services',
    label: 'Nos Services',
    desc: 'Création, entretien, élagage, maçonnerie paysagère et arrosage automatique.',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=380&fit=crop&q=80',
    badge: '6 prestations',
    span: 'lg:col-span-2',
  },
  {
    href: '/realisations',
    label: 'Réalisations',
    desc: 'Galerie de nos projets paysagers réalisés dans le nord-ouest lyonnais.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=380&fit=crop&q=80',
    badge: '20+ projets',
    span: 'lg:col-span-1',
  },
  {
    href: '/blog',
    label: 'Blog & Conseils',
    desc: 'Conseils jardinage, guides saisonniers et tendances paysagères.',
    image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=600&h=380&fit=crop&q=80',
    badge: '30 articles',
    span: 'lg:col-span-1',
  },
  {
    href: '/a-propos',
    label: 'Notre Histoire',
    desc: 'Léo Maurice, paysagiste passionné depuis 2019 à Saint-Didier-au-Mont-d\'Or.',
    image: 'https://images.unsplash.com/photo-1590682680695-43b964a3ae17?w=600&h=380&fit=crop&q=80',
    badge: 'Depuis 2019',
    span: 'lg:col-span-1',
  },
  {
    href: '/devis',
    label: 'Devis Gratuit',
    desc: 'Demandez votre devis personnalisé. Réponse sous 24h, sans engagement.',
    image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600&h=380&fit=crop&q=80',
    badge: 'Sans engagement',
    span: 'lg:col-span-2',
  },
]

export function SiteMapSection() {
  return (
    <section aria-labelledby="sitemap-heading" className="bg-[--color-bg-subtle] border-t border-[--color-border] py-16">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-10 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-[--color-primary] mb-2">Explorer le site</p>
          <h2 id="sitemap-heading" className="font-display text-2xl font-bold text-[--color-fg] sm:text-3xl">
            Tout ce que nous proposons
          </h2>
          <p className="mt-2 text-[--color-fg-muted] max-w-xl mx-auto text-sm">
            Paysagiste complet pour tous vos projets extérieurs dans un rayon de 20 km autour de Lyon.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {sections.map((section) => (
            <Link
              key={section.href}
              href={section.href}
              className={`group relative overflow-hidden rounded-2xl bg-[--color-bg-elevated] border border-[--color-border] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${section.span}`}
            >
              {/* Photo */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={section.image}
                  alt={section.label}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                {/* badge */}
                <span className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-full bg-[--color-primary] px-3 py-1 text-xs font-semibold text-white shadow">
                  {section.badge}
                </span>
              </div>

              {/* Content */}
              <div className="p-5 flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-display font-bold text-[--color-fg] text-base group-hover:text-[--color-primary] transition-colors">
                    {section.label}
                  </h3>
                  <p className="mt-1 text-sm text-[--color-fg-muted] leading-relaxed line-clamp-2">
                    {section.desc}
                  </p>
                </div>
                <span className="shrink-0 mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-[--color-green-light] text-[--color-primary] group-hover:bg-[--color-primary] group-hover:text-white transition-all">
                  <ArrowRight size={14} aria-hidden="true" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom contact strip */}
        <div className="mt-8 rounded-2xl bg-[--color-primary] p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-display font-bold text-white text-lg">Vous avez un projet ?</p>
            <p className="text-green-100 text-sm">Devis gratuit · Réponse en 24h · Zone 20 km</p>
          </div>
          <div className="flex gap-3 flex-wrap">
            <Link href="/contact" className="rounded-full border border-white/30 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors">
              Nous contacter
            </Link>
            <Link href="/devis" className="rounded-full bg-white px-5 py-2.5 text-sm font-bold text-[--color-primary] hover:bg-white/90 transition-colors">
              Devis gratuit
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
