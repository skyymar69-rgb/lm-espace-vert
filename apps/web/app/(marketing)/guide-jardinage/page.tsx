import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Calendar } from 'lucide-react'
import { JsonLd } from '@/components/seo/json-ld'
import { NewsletterSignup } from '@/components/ui/newsletter-signup'

export const metadata: Metadata = {
  title: "Guide Gratuit : Entretenir son Jardin à Lyon — LM Espace Vert",
  description:
    "Téléchargez notre guide complet : 12 mois de conseils d'entretien spécifiques au climat lyonnais. Gels tardifs, étés chauds, taille saisonnière — par votre paysagiste LM Espace Vert.",
  alternates: { canonical: 'https://www.lmespacevert.fr/guide-jardinage' },
  openGraph: {
    title: "Guide Gratuit : Entretenir son Jardin à Lyon — LM Espace Vert",
    description: "12 mois de conseils jardinage adaptés au climat lyonnais. Guide gratuit par votre paysagiste.",
  },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.lmespacevert.fr' },
    { '@type': 'ListItem', position: 2, name: 'Guide jardinage', item: 'https://www.lmespacevert.fr/guide-jardinage' },
  ],
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quand tailler les arbustes à Lyon ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "À Lyon, les arbustes à fleurs d'été (buddleia, hibiscus, lagerstroemia) se taillent en mars, avant la montée de sève. Évitez de tailler en novembre-décembre car les gelées tardives (jusqu'en avril) peuvent brûler les coupes fraîches.",
      },
    },
    {
      '@type': 'Question',
      name: "Quand semer une pelouse à Lyon ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La période idéale pour semer une pelouse dans la région lyonnaise est mi-août à mi-septembre (sol encore chaud, pluies d'automne) ou avril-mai. Évitez juillet-août en raison de la chaleur et de la sécheresse fréquentes.",
      },
    },
    {
      '@type': 'Question',
      name: "Comment protéger son jardin des gelées tardives à Lyon ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Lyon est exposé aux Saints de Glace (11-13 mai) et aux gelées tardives jusqu'en avril. Protégez les plantations récentes avec un voile d'hivernage. Ne transplantez pas les plantes méditerranéennes avant mi-mai.",
      },
    },
    {
      '@type': 'Question',
      name: "Comment arroser son jardin pendant les étés chauds lyonnais ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Arrosez tôt le matin (avant 8h) ou le soir (après 19h) pour limiter l'évaporation. Un arrosage profond et peu fréquent (2-3 fois/semaine) vaut mieux que des arrosages quotidiens superficiels. Le paillage réduit les besoins de 40%.",
      },
    },
  ],
}

const months = [
  {
    month: 'Janvier',
    emoji: '❄️',
    color: '#5B8DB8',
    tasks: [
      "Taille des arbustes à fleurs d'été (buddleia, hibiscus) — avant montée de sève",
      "Protéger les plantes méditerranéennes avec un voile d'hivernage",
      'Traitement préventif des arbres fruitiers (bouillie bordelaise)',
      'Déneiger les conifères et haies de cyprès pour éviter la casse',
    ],
    tip: 'Les hivers lyonnais sont doux mais les coups de froid de -5°C/-8°C sont possibles. Protégez les plantes en pot.',
  },
  {
    month: 'Février',
    emoji: '🌥️',
    color: '#7A9EB5',
    tasks: [
      'Taille des rosiers (1ère quinzaine de février selon météo)',
      'Démarrage de la taille des arbres fruitiers à pépins',
      'Préparation du sol : amendement, compost',
      'Semis sous abri : tomates, poivrons, aubergines (pour les potagers)',
    ],
    tip: "Surveillez les gelées nocturnes : elles peuvent persister jusqu'à mi-mars dans le nord de l'agglomération lyonnaise.",
  },
  {
    month: 'Mars',
    emoji: '🌱',
    color: '#6B9E6B',
    tasks: [
      'Taille des arbustes à floraison estivale (spirée, weigelia)',
      'Désherbage des massifs : avant explosion printanière des adventices',
      'Application du premier engrais de printemps sur la pelouse',
      "Remise en route des systèmes d'arrosage automatique",
    ],
    tip: "À Lyon, la végétation redémarre fortement à partir du 15 mars. C'est le moment d'intervenir sur la pelouse avant la première tonte.",
  },
  {
    month: 'Avril',
    emoji: '🌸',
    color: '#C87AAB',
    tasks: [
      'Désherbage intensif des massifs — priorité absolue',
      'Première tonte de la saison (hauteur : 5-6 cm)',
      'Paillage des massifs (BRF, copeaux, paille) contre la sécheresse',
      'Plantation des vivaces après les dernières gelées (prévoir Saints de Glace)',
    ],
    tip: "Les Saints de Glace (11-13 mai) sont encore une réalité à Lyon. N'installez pas les plantes fragiles avant mi-mai.",
  },
  {
    month: 'Mai',
    emoji: '🌿',
    color: '#5BAF5B',
    tasks: [
      'Après le 15 mai : plantations massives (annuelles, vivaces, arbustes)',
      'Première taille des haies de printemps (troène, photinia)',
      "Mise en place du système d'arrosage goutte-à-goutte",
      'Scarification de la pelouse si non faite en mars',
    ],
    tip: 'Mai est le mois clé pour les plantations à Lyon. La météo est généralement favorable après les Saints de Glace.',
  },
  {
    month: 'Juin',
    emoji: '☀️',
    color: '#D4A017',
    tasks: [
      'Taille des haies formelles (buis, laurier, thuya)',
      'Arrosage progressif : installation des habitudes estivales',
      "Binage régulier des massifs pour limiter l'évaporation",
      'Traitement préventif des rosiers contre les maladies fongiques',
    ],
    tip: "La chaleur arrive vite à Lyon en juin. Augmentez progressivement l'arrosage et paillez si ce n'est pas encore fait.",
  },
  {
    month: 'Juillet',
    emoji: '🌡️',
    color: '#E07B39',
    tasks: [
      'Arrosage tôt le matin ou le soir — jamais en pleine chaleur',
      'Tonte à hauteur élevée (7-8 cm) pour protéger les racines',
      'Entretien léger des massifs : suppression des fleurs fanées',
      'Surveillance des parasites (pucerons, cochenilles) amplifiés par la chaleur',
    ],
    tip: 'Lyon subit régulièrement des canicules > 35°C. Suspendez les travaux intensifs entre 11h et 16h. Hydratez abondamment les plantations récentes.',
  },
  {
    month: 'Août',
    emoji: '🏖️',
    color: '#D4882A',
    tasks: [
      "Maintien de l'arrosage régulier — ne relâchez pas",
      "Préparation des zones de semis d'automne (pelouse, prairie)",
      'Taille légère des haies si nécessaire (éviter les gros chantiers)',
      'Récolte et transformation du compost',
    ],
    tip: "Mi-août : semez votre pelouse dès que les nuits rafraîchissent. Le sol est encore chaud et les pluies d'automne arriveront.",
  },
  {
    month: 'Septembre',
    emoji: '🍂',
    color: '#C47830',
    tasks: [
      'Semis et regarnissage des pelouses (sol chaud + pluies)',
      "Plantation des arbustes et arbres (racines repartent avant l'hiver)",
      "Division des vivaces et replantation des bulbes d'automne",
      "Taille des haies de fin de saison avant l'arrêt végétatif",
    ],
    tip: "Septembre est idéal pour planter à Lyon : températures douces et pluies régulières favorisent l'enracinement avant l'hiver.",
  },
  {
    month: 'Octobre',
    emoji: '🍁',
    color: '#B5601A',
    tasks: [
      'Plantation des bulbes à floraison printanière (tulipes, narcisses)',
      'Ramassage des feuilles mortes (2-3 fois/semaine si nécessaire)',
      'Taille des rosiers : première intervention légère',
      'Protection hivernale des plantes méditerranéennes fragiles',
    ],
    tip: 'À Lyon, les premières gelées arrivent en moyenne mi-octobre dans les points bas (fond de vallée, Ain). Prévoyez les protections.',
  },
  {
    month: 'Novembre',
    emoji: '🌧️',
    color: '#7A8CA0',
    tasks: [
      'Dernier entretien de pelouse : dernière tonte basse (4-5 cm)',
      'Taille des arbres fruitiers (fin de feuillage)',
      'Hivernage des outils : nettoyage, affûtage, protection',
      'Mise en place des protections hivernales (voiles, paillage)',
    ],
    tip: "L'automne lyonnais est souvent brumeux et humide. Profitez des belles journées pour les derniers travaux de plantation.",
  },
  {
    month: 'Décembre',
    emoji: '🎄',
    color: '#2F6E3F',
    tasks: [
      'Période de repos relatif — planifiez votre programme 2027',
      'Entretien et affûtage du matériel (sécateurs, cisailles, tondeuse)',
      "Vérification des systèmes d'arrosage (purge si gel annoncé)",
      'Commande des plants, bulbes et semences pour le printemps',
    ],
    tip: "Décembre est le bon moment pour planifier votre jardin de l'année à venir et prendre rendez-vous avec votre paysagiste.",
  },
]

export default function GuideJardinagePage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={faqJsonLd} />

      {/* Breadcrumb */}
      <nav aria-label="Fil d'Ariane" className="bg-white border-b border-[#EDEDED]">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 py-3">
          <ol className="flex items-center gap-2 text-xs" style={{ color: '#8C8F94' }}>
            <li><Link href="/" className="hover:underline" style={{ color: '#425D07' }}>Accueil</Link></li>
            <li aria-hidden="true">/</li>
            <li style={{ color: '#2F2F2F' }}>Guide jardinage</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section
        className="py-20 lg:py-28"
        style={{ backgroundColor: '#0B3D2C' }}
        aria-labelledby="guide-heading"
      >
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <span
            className="inline-block rounded-full px-4 py-1.5 text-xs font-semibold mb-6"
            style={{ backgroundColor: 'rgba(128,188,0,0.2)', color: '#80BC00' }}
          >
            Guide gratuit
          </span>
          <h1 id="guide-heading" className="font-display text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
            Guide gratuit : 12 mois d&apos;entretien<br />
            pour votre jardin lyonnais
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            Spécifique au climat de Lyon et du nord-ouest lyonnais : gels tardifs des Saints de Glace, étés chauds et secs, couloir du Rhône. Conseils professionnels mois par mois.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#guide-content"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#80BC00', color: '#ffffff' }}
            >
              Lire le guide <ArrowRight size={14} />
            </a>
            <a
              href="#newsletter-guide"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Recevoir le PDF
            </a>
          </div>
        </div>
      </section>

      {/* Guide content — 12 mois */}
      <section id="guide-content" className="py-20 bg-white" aria-label="Guide jardinage mois par mois">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#80BC00' }}>
              Calendrier
            </p>
            <h2 className="font-display text-3xl font-bold" style={{ color: '#425D07' }}>
              Mois par mois, votre jardin lyonnais
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {months.map((m, i) => (
              <article
                key={m.month}
                className="rounded-2xl border overflow-hidden"
                style={{ borderColor: '#EDEDED' }}
              >
                <div
                  className="flex items-center gap-3 px-5 py-4"
                  style={{ backgroundColor: m.color + '18' }}
                >
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 text-white"
                    style={{ backgroundColor: m.color }}
                  >
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-sm" style={{ color: '#0B3D2C' }}>
                      {m.emoji} {m.month}
                    </h3>
                  </div>
                </div>
                <div className="px-5 py-4">
                  <ul className="space-y-2 mb-4">
                    {m.tasks.map((task) => (
                      <li key={task} className="flex items-start gap-2 text-sm" style={{ color: '#2F2F2F' }}>
                        <span style={{ color: '#80BC00' }} className="mt-0.5 flex-shrink-0">✓</span>
                        {task}
                      </li>
                    ))}
                  </ul>
                  <div
                    className="rounded-lg p-3 text-xs italic leading-relaxed"
                    style={{ backgroundColor: '#F7F5F0', color: '#8C8F94' }}
                  >
                    <Calendar size={11} className="inline mr-1" style={{ color: '#80BC00' }} />
                    {m.tip}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ backgroundColor: '#F7F5F0' }} className="py-20 border-y border-[#EDEDED]" aria-label="Questions fréquentes jardinage Lyon">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="font-display text-2xl font-bold mb-8 text-center" style={{ color: '#425D07' }}>
            Questions fréquentes — Jardin lyonnais
          </h2>
          <div className="space-y-4">
            {[
              {
                q: 'Quand tailler les arbustes à Lyon ?',
                a: "Les arbustes à fleurs d'été (buddleia, hibiscus, lagerstroemia) se taillent en mars, avant la montée de sève. Évitez de tailler en novembre-décembre car les gelées tardives (jusqu'en avril) peuvent brûler les coupes fraîches.",
              },
              {
                q: 'Quand semer une pelouse à Lyon ?',
                a: "La période idéale est mi-août à mi-septembre (sol encore chaud, pluies d'automne) ou avril-mai. Évitez juillet-août en raison de la chaleur et de la sécheresse fréquentes.",
              },
              {
                q: 'Comment protéger son jardin des gelées tardives à Lyon ?',
                a: "Lyon est exposé aux Saints de Glace (11-13 mai) et aux gelées tardives jusqu'en avril. Protégez les plantations récentes avec un voile d'hivernage. Ne transplantez pas les plantes méditerranéennes avant mi-mai.",
              },
              {
                q: 'Comment arroser son jardin pendant les étés chauds lyonnais ?',
                a: "Arrosez tôt le matin (avant 8h) ou le soir (après 19h). Un arrosage profond et peu fréquent (2-3 fois/semaine) vaut mieux que des arrosages quotidiens superficiels. Le paillage réduit les besoins de 40%.",
              },
            ].map(({ q, a }) => (
              <details key={q} className="group rounded-xl border bg-white overflow-hidden" style={{ borderColor: '#EDEDED' }}>
                <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none">
                  <span className="font-semibold text-sm" style={{ color: '#425D07' }}>{q}</span>
                  <span className="text-lg font-bold ml-3 flex-shrink-0" style={{ color: '#80BC00' }}>+</span>
                </summary>
                <div className="px-5 pb-4 text-sm leading-relaxed" style={{ color: '#8C8F94' }}>
                  {a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Newsletter — recevoir le guide PDF */}
      <section id="newsletter-guide" className="py-20 bg-white" aria-label="Recevoir le guide PDF">
        <div className="container mx-auto max-w-xl px-4 sm:px-6">
          <div className="text-center mb-8">
            <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#80BC00' }}>
              Guide PDF
            </p>
            <h2 className="font-display text-2xl font-bold mb-2" style={{ color: '#0B3D2C' }}>
              Recevez ce guide en PDF
            </h2>
            <p className="text-sm" style={{ color: '#8C8F94' }}>
              Téléchargeable, imprimable, 100% gratuit. Plus les conseils saisonniers chaque mois.
            </p>
          </div>
          <NewsletterSignup variant="full" />
          <div className="text-center mt-8">
            <Link
              href="/devis"
              className="inline-flex items-center gap-2 text-sm font-semibold hover:underline"
              style={{ color: '#425D07' }}
            >
              Ou demandez directement un devis gratuit <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
