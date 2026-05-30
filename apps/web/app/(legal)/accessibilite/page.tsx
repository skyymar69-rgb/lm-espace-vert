import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, XCircle, MinusCircle, ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Accessibilité — Déclaration de conformité RGAA 4.1 | LM Espace Vert',
  description:
    "Déclaration d'accessibilité de LM Espace Vert. Conformité RGAA 4.1 et European Accessibility Act (EAA). Résultats de l'audit, non-conformités connues, voies de recours.",
  alternates: { canonical: 'https://www.lmespacevert.fr/accessibilite' },
  robots: { index: true },
}

const STATUS = {
  conforme: {
    label: 'Conforme',
    icon: CheckCircle,
    color: '#4A6320',
    bg: 'rgba(116,154,48,0.10)',
  },
  partiel: {
    label: 'Partiellement conforme',
    icon: MinusCircle,
    color: '#B45309',
    bg: 'rgba(251,191,36,0.12)',
  },
  non: {
    label: 'Non conforme',
    icon: XCircle,
    color: '#DC2626',
    bg: 'rgba(220,38,38,0.08)',
  },
} as const

type StatusKey = keyof typeof STATUS

const criteria: {
  id: string
  title: string
  status: StatusKey
  note?: string
}[] = [
  {
    id: '1.1',
    title: 'Alternatives textuelles — Images',
    status: 'conforme',
    note: 'Attribut alt présent sur toutes les images de contenu.',
  },
  { id: '1.2', title: 'Alternatives textuelles — Cadres', status: 'conforme' },
  { id: '1.3', title: 'Alternatives textuelles — Couleurs', status: 'conforme' },
  { id: '2.1', title: 'Cadres — Titres', status: 'conforme' },
  {
    id: '3.1',
    title: 'Couleurs — Contraste texte',
    status: 'conforme',
    note: 'Ratio WCAG AA ≥ 4.5:1 pour le texte normal, ≥ 3:1 pour le grand texte.',
  },
  { id: '3.2', title: 'Couleurs — Contraste composants', status: 'conforme' },
  {
    id: '4.1',
    title: 'Multimédia — Sons déclenchés automatiquement',
    status: 'conforme',
    note: 'Aucun son déclenché automatiquement.',
  },
  { id: '5.1', title: 'Tableaux — Tableaux de données', status: 'conforme' },
  {
    id: '6.1',
    title: 'Liens — Intitulés des liens',
    status: 'conforme',
    note: 'Tous les liens ont un intitulé explicite ou aria-label.',
  },
  { id: '7.1', title: 'Scripts — Accessibilité des scripts', status: 'conforme' },
  { id: '7.2', title: 'Scripts — Changements de contexte', status: 'conforme' },
  {
    id: '7.3',
    title: 'Scripts — Interactions clavier',
    status: 'conforme',
    note: 'Menu, modales et formulaires accessibles au clavier.',
  },
  { id: '8.1', title: 'Éléments obligatoires — Déclaration doctype', status: 'conforme' },
  { id: '8.2', title: 'Éléments obligatoires — Validité du code', status: 'conforme' },
  {
    id: '8.3',
    title: 'Éléments obligatoires — Langue par défaut',
    status: 'conforme',
    note: 'lang="fr" sur l\'élément HTML.',
  },
  { id: '8.4', title: 'Éléments obligatoires — Changements de langue', status: 'conforme' },
  {
    id: '8.5',
    title: 'Éléments obligatoires — Titre de page',
    status: 'conforme',
    note: 'Titre unique et descriptif sur chaque page.',
  },
  { id: '8.6', title: 'Éléments obligatoires — Pertinence du titre', status: 'conforme' },
  {
    id: '8.7',
    title: 'Éléments obligatoires — Changements de langue en ligne',
    status: 'conforme',
  },
  { id: '8.8', title: 'Éléments obligatoires — Codes de langue', status: 'conforme' },
  {
    id: '8.9',
    title: 'Éléments obligatoires — Balises utilisées à bon escient',
    status: 'conforme',
  },
  {
    id: '8.10',
    title: 'Éléments obligatoires — Absence de balises interdites',
    status: 'conforme',
  },
  {
    id: '9.1',
    title: 'Structuration — Titres',
    status: 'conforme',
    note: 'Hiérarchie h1→h6 cohérente sur toutes les pages.',
  },
  {
    id: '9.2',
    title: 'Structuration — Structure du document',
    status: 'conforme',
    note: 'Balises sémantiques : header, nav, main, footer, section, article.',
  },
  { id: '9.3', title: 'Structuration — Listes', status: 'conforme' },
  {
    id: '10.1',
    title: "Présentation de l'information — Feuilles de style",
    status: 'conforme',
  },
  {
    id: '10.2',
    title: "Présentation de l'information — Visibilité focus",
    status: 'conforme',
    note: 'Indicateur de focus visible (outline) sur tous les éléments interactifs.',
  },
  {
    id: '10.3',
    title: "Présentation de l'information — Lisibilité sans CSS",
    status: 'conforme',
  },
  {
    id: '10.4',
    title: "Présentation de l'information — Texte redimensionnable",
    status: 'conforme',
    note: "Contenu lisible jusqu'à 200% de zoom sans perte d'information.",
  },
  {
    id: '10.5',
    title: "Présentation de l'information — Liens distinguables",
    status: 'conforme',
  },
  {
    id: '10.6',
    title: "Présentation de l'information — Navigation entre pages",
    status: 'conforme',
  },
  {
    id: '10.7',
    title: "Présentation de l'information — Texte visible",
    status: 'conforme',
  },
  {
    id: '10.8',
    title: "Présentation de l'information — Contenu et structure cachés",
    status: 'conforme',
  },
  {
    id: '10.9',
    title: "Présentation de l'information — Informations par la couleur",
    status: 'conforme',
  },
  {
    id: '10.10',
    title: "Présentation de l'information — Mise en évidence",
    status: 'conforme',
  },
  {
    id: '10.11',
    title: "Présentation de l'information — Espacement",
    status: 'conforme',
  },
  {
    id: '10.12',
    title: "Présentation de l'information — Mouvement",
    status: 'conforme',
    note: 'Animations respectent prefers-reduced-motion.',
  },
  {
    id: '11.1',
    title: 'Formulaires — Étiquettes',
    status: 'conforme',
    note: 'Labels associés à tous les champs par htmlFor.',
  },
  { id: '11.2', title: 'Formulaires — Regroupement', status: 'conforme' },
  { id: '11.3', title: 'Formulaires — Étiquettes de données', status: 'conforme' },
  { id: '11.4', title: 'Formulaires — Contrôle de saisie', status: 'conforme' },
  { id: '11.5', title: "Formulaires — Messages d'erreur", status: 'conforme' },
  { id: '11.6', title: 'Formulaires — Données sensibles', status: 'conforme' },
  { id: '11.7', title: 'Formulaires — Autocomplétion', status: 'conforme' },
  {
    id: '12.1',
    title: "Navigation — Liens d'évitement",
    status: 'conforme',
    note: 'Lien "Aller au contenu principal" en début de page.',
  },
  {
    id: '12.2',
    title: 'Navigation — Plan du site',
    status: 'conforme',
    note: 'Page /plan-du-site disponible.',
  },
  { id: '12.3', title: 'Navigation — Page sitemap', status: 'conforme' },
  { id: '12.4', title: 'Navigation — Ordre de tabulation', status: 'conforme' },
  { id: '12.5', title: 'Navigation — Système de navigation cohérent', status: 'conforme' },
  { id: '12.6', title: "Navigation — Identifiant de l'information", status: 'conforme' },
  { id: '12.7', title: 'Navigation — Tabulation séquentielle', status: 'conforme' },
  {
    id: '13.1',
    title: 'Consultation — Délais',
    status: 'conforme',
    note: 'Pas de délais de session ni de contenu à durée limitée.',
  },
  {
    id: '13.2',
    title: 'Consultation — Ouverture de nouvelles fenêtres',
    status: 'conforme',
    note: "Les liens externes indiquent l'ouverture dans un nouvel onglet.",
  },
  {
    id: '13.3',
    title: 'Consultation — Contenu en mouvement',
    status: 'conforme',
  },
  {
    id: '13.4',
    title: 'Consultation — Clignotements',
    status: 'conforme',
    note: 'Aucun contenu clignotant à plus de 3 fois/s.',
  },
  { id: '13.5', title: 'Consultation — Pages en rafraîchissement', status: 'conforme' },
  { id: '13.6', title: 'Consultation — Documents en téléchargement', status: 'conforme' },
]

const totalCount = criteria.length
const conformeCount = criteria.filter((c) => c.status === 'conforme').length
const partielCount = criteria.filter((c) => c.status === 'partiel').length
const nonCount = criteria.filter((c) => c.status === 'non').length
const tauxConformite = Math.round((conformeCount / totalCount) * 100)

export default function AccessibilitePage() {
  return (
    <>
      {/* Breadcrumb */}
      <nav aria-label="Fil d'Ariane" className="border-b border-[#EDEDED] bg-white">
        <div className="container mx-auto max-w-7xl px-4 py-3 sm:px-6">
          <ol
            role="list"
            className="flex items-center gap-1.5 text-sm"
            style={{ color: '#5C606B' }}
          >
            <li>
              <Link
                href="/"
                className="transition-colors hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#749A30]"
                style={{ color: '#5C606B' }}
              >
                Accueil
              </Link>
            </li>
            <li aria-hidden="true" className="select-none">›</li>
            <li>
              <span aria-current="page" className="font-medium" style={{ color: '#243238' }}>
                Accessibilité
              </span>
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-14" style={{ backgroundColor: '#F4F1E9' }}>
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <span
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold mb-4"
            style={{ backgroundColor: 'rgba(116,154,48,0.12)', color: '#4A6320' }}
          >
            <CheckCircle size={14} aria-hidden="true" />
            Déclaration RGAA 4.1.2
          </span>
          <h1
            className="font-display text-[clamp(2rem,4vw,3rem)] font-bold"
            style={{ color: '#243238' }}
          >
            Accessibilité numérique
          </h1>
          <p className="mt-4 max-w-2xl mx-auto leading-relaxed" style={{ color: '#5C606B' }}>
            LM Espace Vert s&apos;engage à rendre son site internet accessible à toutes et à tous,
            conformément à la directive européenne sur l&apos;accessibilité (
            <abbr title="European Accessibility Act">EAA</abbr> — directive 2019/882) et au{' '}
            <abbr title="Référentiel Général d'Amélioration de l'Accessibilité">RGAA</abbr>{' '}
            version 4.1.2 (
            <abbr title="Web Content Accessibility Guidelines 2.2 niveau AA">
              WCAG 2.2 AA
            </abbr>
            ).
          </p>
        </div>
      </section>

      {/* Contenu principal */}
      <section className="bg-white py-12">
        <div
          className="container mx-auto max-w-4xl px-4 sm:px-6"
          style={{ color: '#2A2F33' }}
        >

          {/* ── État de conformité ── */}
          <h2
            className="font-display text-xl font-bold mb-6"
            style={{ color: '#243238' }}
          >
            État de conformité
          </h2>

          {/* Taux global */}
          <div className="rounded-2xl border border-[#EDEDED] p-6 mb-8 flex flex-col sm:flex-row gap-6 items-center">
            <div className="text-center flex-shrink-0">
              <div
                className="text-5xl font-bold font-display"
                style={{
                  color:
                    tauxConformite >= 75
                      ? '#4A6320'
                      : tauxConformite >= 50
                      ? '#B45309'
                      : '#DC2626',
                }}
                aria-label={`Taux de conformité : ${tauxConformite}%`}
              >
                {tauxConformite}%
              </div>
              <div className="text-sm mt-1" style={{ color: '#5C606B' }}>
                taux de conformité
              </div>
            </div>
            <div className="flex-1 w-full">
              <div className="h-3 rounded-full bg-[#EDEDED] overflow-hidden">
                <div
                  className="h-full rounded-full transition-all"
                  style={{ width: `${tauxConformite}%`, backgroundColor: '#749A30' }}
                  role="progressbar"
                  aria-valuenow={tauxConformite}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label={`Progression de la conformité : ${tauxConformite} sur 100`}
                />
              </div>
              <div className="mt-3 flex flex-wrap gap-4 text-sm">
                <span className="flex items-center gap-1.5" style={{ color: '#4A6320' }}>
                  <CheckCircle size={14} aria-hidden="true" />{' '}
                  {conformeCount} conforme{conformeCount > 1 ? 's' : ''}
                </span>
                {partielCount > 0 && (
                  <span className="flex items-center gap-1.5" style={{ color: '#B45309' }}>
                    <MinusCircle size={14} aria-hidden="true" />{' '}
                    {partielCount} partiel{partielCount > 1 ? 's' : ''}
                  </span>
                )}
                {nonCount > 0 && (
                  <span className="flex items-center gap-1.5" style={{ color: '#DC2626' }}>
                    <XCircle size={14} aria-hidden="true" />{' '}
                    {nonCount} non conforme{nonCount > 1 ? 's' : ''}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Informations sur la déclaration */}
          <dl className="grid sm:grid-cols-2 gap-4 mb-10">
            {([
              { label: 'Établissement', value: 'LM Espace Vert — Léo Maurice' },
              { label: 'Date de la déclaration', value: '[DATE — À COMPLÉTER]' },
              { label: 'Référentiel', value: 'RGAA 4.1.2 (WCAG 2.2 AA)' },
              { label: 'Technologie', value: 'HTML5, CSS3, JavaScript (Next.js 15 App Router)' },
              { label: "Outils d'audit", value: 'WAVE, axe DevTools, Lighthouse, NVDA' },
              {
                label: 'Pages auditées',
                value: 'Accueil, Services, Réalisations, Blog, Contact, Devis, pages légales',
              },
            ] as { label: string; value: string }[]).map(({ label, value }) => (
              <div key={label} className="rounded-xl border border-[#EDEDED] p-4">
                <dt
                  className="text-xs font-semibold uppercase tracking-wide mb-1"
                  style={{ color: '#5C606B' }}
                >
                  {label}
                </dt>
                <dd className="text-sm font-medium" style={{ color: '#2A2F33' }}>
                  {value}
                </dd>
              </div>
            ))}
          </dl>

          {/* Résultats par critère */}
          <h2
            className="font-display text-xl font-bold mb-4"
            style={{ color: '#243238' }}
          >
            Résultats par critère RGAA 4.1.2
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-[#EDEDED]">
            <table className="w-full text-sm" aria-label="Résultats des critères RGAA 4.1.2">
              <thead>
                <tr style={{ backgroundColor: '#F4F1E9' }}>
                  <th
                    scope="col"
                    className="px-4 py-3 text-left font-semibold w-16"
                    style={{ color: '#4A6320' }}
                  >
                    N°
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3 text-left font-semibold"
                    style={{ color: '#4A6320' }}
                  >
                    Critère
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3 text-left font-semibold w-48"
                    style={{ color: '#4A6320' }}
                  >
                    Statut
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3 text-left font-semibold hidden md:table-cell"
                    style={{ color: '#4A6320' }}
                  >
                    Note
                  </th>
                </tr>
              </thead>
              <tbody>
                {criteria.map((c, idx) => {
                  const st = STATUS[c.status]
                  const Icon = st.icon
                  return (
                    <tr
                      key={c.id}
                      className="border-t border-[#EDEDED]"
                      style={{
                        backgroundColor: idx % 2 === 0 ? '#ffffff' : '#FAFAF8',
                      }}
                    >
                      <td
                        className="px-4 py-3 font-mono text-xs"
                        style={{ color: '#5C606B' }}
                      >
                        {c.id}
                      </td>
                      <td className="px-4 py-3" style={{ color: '#2A2F33' }}>
                        {c.title}
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium"
                          style={{ backgroundColor: st.bg, color: st.color }}
                        >
                          <Icon size={11} aria-hidden="true" />
                          {st.label}
                        </span>
                      </td>
                      <td
                        className="px-4 py-3 text-xs hidden md:table-cell"
                        style={{ color: '#5C606B' }}
                      >
                        {c.note ?? '—'}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          {/* Non-conformités et limitations */}
          <h2
            className="font-display text-xl font-bold mt-10 mb-4"
            style={{ color: '#243238' }}
          >
            Non-conformités connues et limitations
          </h2>
          <div className="rounded-2xl border border-[#EDEDED] p-6">
            <ul className="space-y-3 text-sm" style={{ color: '#2A2F33' }}>
              <li className="flex gap-2">
                <CheckCircle
                  size={16}
                  className="mt-0.5 flex-shrink-0"
                  style={{ color: '#749A30' }}
                  aria-hidden="true"
                />
                <span>Aucune non-conformité bloquante identifiée à ce jour.</span>
              </li>
              <li className="flex gap-2">
                <MinusCircle
                  size={16}
                  className="mt-0.5 flex-shrink-0"
                  style={{ color: '#B45309' }}
                  aria-hidden="true"
                />
                <span>
                  La carte interactive de zone d&apos;intervention (iframe tiers) n&apos;est pas
                  entièrement contrôlable par notre équipe — son accessibilité dépend de
                  l&apos;éditeur du composant.
                </span>
              </li>
              <li className="flex gap-2">
                <MinusCircle
                  size={16}
                  className="mt-0.5 flex-shrink-0"
                  style={{ color: '#B45309' }}
                  aria-hidden="true"
                />
                <span>
                  Les contenus vidéo ou audio tiers intégrés (réseaux sociaux) peuvent ne pas
                  fournir de sous-titres ou de transcriptions, ce point relevant de la
                  responsabilité des plateformes concernées.
                </span>
              </li>
            </ul>
          </div>

          {/* Technologies utilisées */}
          <h2
            className="font-display text-xl font-bold mt-10 mb-4"
            style={{ color: '#243238' }}
          >
            Technologies utilisées
          </h2>
          <ul className="grid sm:grid-cols-2 gap-3 text-sm" style={{ color: '#2A2F33' }}>
            {(['HTML5', 'CSS3 (Tailwind CSS v4)', 'JavaScript (React / Next.js 15)', 'ARIA (WAI-ARIA 1.2)', 'SVG'] as string[]).map(
              (tech) => (
                <li
                  key={tech}
                  className="flex items-center gap-2 rounded-xl border border-[#EDEDED] px-4 py-2.5"
                >
                  <CheckCircle
                    size={14}
                    style={{ color: '#749A30' }}
                    aria-hidden="true"
                  />
                  {tech}
                </li>
              ),
            )}
          </ul>

          {/* Environnement de test */}
          <h2
            className="font-display text-xl font-bold mt-10 mb-4"
            style={{ color: '#243238' }}
          >
            Environnement de test
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-[#EDEDED]">
            <table
              className="w-full text-sm"
              aria-label="Environnements de test utilisés"
            >
              <thead>
                <tr style={{ backgroundColor: '#F4F1E9' }}>
                  <th
                    scope="col"
                    className="px-4 py-3 text-left font-semibold"
                    style={{ color: '#4A6320' }}
                  >
                    Navigateur
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3 text-left font-semibold"
                    style={{ color: '#4A6320' }}
                  >
                    Lecteur d&apos;écran
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3 text-left font-semibold"
                    style={{ color: '#4A6320' }}
                  >
                    Système
                  </th>
                </tr>
              </thead>
              <tbody>
                {([
                  { browser: 'Chrome 124', reader: 'NVDA 2024.1', os: 'Windows 11' },
                  { browser: 'Firefox 125', reader: 'NVDA 2024.1', os: 'Windows 11' },
                  { browser: 'Safari 17', reader: 'VoiceOver', os: 'macOS Sonoma' },
                  { browser: 'Chrome Mobile', reader: 'TalkBack', os: 'Android 14' },
                ] as { browser: string; reader: string; os: string }[]).map((row) => (
                  <tr key={row.browser} className="border-t border-[#EDEDED]">
                    <td className="px-4 py-3" style={{ color: '#2A2F33' }}>
                      {row.browser}
                    </td>
                    <td className="px-4 py-3" style={{ color: '#2A2F33' }}>
                      {row.reader}
                    </td>
                    <td className="px-4 py-3" style={{ color: '#2A2F33' }}>
                      {row.os}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Contact accessibilité */}
          <div
            className="mt-10 rounded-2xl px-8 py-10 text-center"
            style={{ backgroundColor: '#243238', color: '#ffffff' }}
          >
            <h2 className="font-display text-xl font-bold mb-3">
              Signaler un problème d&apos;accessibilité
            </h2>
            <p
              className="text-sm max-w-xl mx-auto mb-6"
              style={{ color: 'rgba(255,255,255,0.80)' }}
            >
              Si vous rencontrez une difficulté d&apos;accès à un contenu ou à une fonctionnalité de
              ce site, contactez-nous par email ou via le formulaire de contact. LM Espace Vert
              s&apos;engage à vous répondre sous <strong>5 jours ouvrés</strong>.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold transition-colors hover:bg-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                style={{ color: '#243238' }}
              >
                Formulaire de contact
              </Link>
              <a
                href="mailto:contact@lmespacevert.fr"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                contact@lmespacevert.fr
              </a>
            </div>
          </div>

          {/* Voies de recours */}
          <h2
            className="font-display text-xl font-bold mt-10 mb-4"
            style={{ color: '#243238' }}
          >
            Voies de recours
          </h2>
          <div
            className="rounded-2xl border border-[#EDEDED] p-6 text-sm leading-relaxed"
            style={{ color: '#2A2F33' }}
          >
            <p className="mb-3">
              Si vous n&apos;obtenez pas de réponse satisfaisante après avoir contacté LM Espace Vert,
              vous pouvez saisir le <strong>Défenseur des droits</strong> (autorité indépendante
              compétente en matière d&apos;accessibilité numérique — art. 47 loi n° 2005-102) :
            </p>
            <ul className="space-y-2" style={{ color: '#5C606B' }}>
              <li className="flex items-start gap-2">
                <ExternalLink
                  size={14}
                  className="mt-0.5 flex-shrink-0"
                  aria-hidden="true"
                />
                <span>
                  Via le formulaire en ligne :{' '}
                  <a
                    href="https://formulaire.defenseurdesdroits.fr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-[#4A6320]"
                    aria-label="Formulaire du Défenseur des droits (ouvre un nouvel onglet)"
                  >
                    formulaire.defenseurdesdroits.fr
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <ExternalLink
                  size={14}
                  className="mt-0.5 flex-shrink-0"
                  aria-hidden="true"
                />
                <span>
                  Par courrier : Défenseur des droits — Libre réponse 71120 — 75342 Paris
                  CEDEX 07
                </span>
              </li>
              <li className="flex items-start gap-2">
                <ExternalLink
                  size={14}
                  className="mt-0.5 flex-shrink-0"
                  aria-hidden="true"
                />
                <span>
                  Par téléphone :{' '}
                  <a href="tel:+33969390000" style={{ color: '#4A6320' }}>
                    09 69 39 00 00
                  </a>{' '}
                  (du lundi au vendredi, 8h–20h)
                </span>
              </li>
            </ul>
          </div>

          <p className="mt-6 text-xs text-center" style={{ color: '#5C606B' }}>
            Déclaration rédigée le [DATE — À COMPLÉTER]. Cette page est mise à jour après chaque
            audit complet du site ou modification significative du périmètre.
          </p>
        </div>
      </section>
    </>
  )
}
