import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUp } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Politique de cookies | LM Espace Vert',
  description:
    'Politique de cookies de LM Espace Vert — conformité CNIL, directive ePrivacy. Cookies strictement nécessaires, mesure d\'audience, gestion du consentement.',
  alternates: { canonical: 'https://www.lmespacevert.fr/politique-cookies' },
  robots: { index: false },
}

export default function PolitiqueCookiesPage() {
  return (
    <>
      {/* Breadcrumb */}
      <nav aria-label="Fil d'Ariane" className="border-b border-[#EDEDED] bg-white">
        <div className="container mx-auto max-w-7xl px-4 py-3 sm:px-6">
          <ol role="list" className="flex items-center gap-1.5 text-sm" style={{ color: '#5C606B' }}>
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
                Politique de cookies
              </span>
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-12" style={{ backgroundColor: '#F4F1E9' }}>
        <div className="container mx-auto max-w-4xl px-4 sm:px-6">
          <h1
            className="font-display text-[clamp(2rem,4vw,3rem)] font-bold leading-tight"
            style={{ color: '#243238' }}
          >
            Politique de cookies
          </h1>
          <p className="mt-3 text-base leading-[1.8]" style={{ color: '#5C606B' }}>
            Conformément à la recommandation de la CNIL du 17 septembre 2020 et à la directive
            européenne{' '}
            <abbr title="directive 2002/58/CE modifiée dite ePrivacy">ePrivacy</abbr> (art. 82 de
            la loi Informatique et Libertés).
          </p>
        </div>
      </section>

      {/* Contenu principal */}
      <section className="bg-white py-12">
        <div
          className="container mx-auto max-w-4xl px-4 sm:px-6"
          style={{ lineHeight: '1.8', color: '#2A2F33' }}
        >

          {/* ── 1. Qu'est-ce qu'un cookie ? ── */}
          <div className="mb-10">
            <h2
              className="font-display text-xl font-bold mb-4"
              style={{ color: '#243238' }}
            >
              1. Qu&apos;est-ce qu&apos;un cookie ?
            </h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#2A2F33' }}>
              Un cookie est un petit fichier texte déposé et lu sur votre terminal (ordinateur,
              tablette, smartphone) lors de votre consultation d&apos;un site web. Il permet au site de
              mémoriser des informations relatives à votre visite (préférences d&apos;affichage, panier,
              identifiant de session, etc.) et d&apos;améliorer votre expérience lors de visites
              ultérieures.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: '#2A2F33' }}>
              La loi distingue deux catégories de cookies selon leur finalité :{' '}
              <strong>les cookies strictement nécessaires</strong>, dispensés de consentement car
              indispensables au fonctionnement du site, et{' '}
              <strong>les cookies soumis à consentement</strong>, qui ne peuvent être déposés
              qu&apos;après que l&apos;utilisateur a donné son accord explicite et éclairé.
            </p>
          </div>

          {/* ── 2. Cookies utilisés sur ce site ── */}
          <div className="mb-10">
            <h2
              className="font-display text-xl font-bold mb-6"
              style={{ color: '#243238' }}
            >
              2. Cookies utilisés sur ce site
            </h2>

            {/* 2.1 Strictement nécessaires */}
            <h3
              className="font-display text-base font-bold mb-3"
              style={{ color: '#243238' }}
            >
              2.1 Cookies strictement nécessaires (aucun consentement requis)
            </h3>
            <p className="text-sm leading-relaxed mb-4" style={{ color: '#2A2F33' }}>
              Ces cookies sont indispensables au fonctionnement du site et ne peuvent pas être
              désactivés. Ils ne collectent aucune donnée personnelle à des fins de ciblage ou de
              profilage.
            </p>
            <div className="overflow-x-auto rounded-2xl border border-[#EDEDED] mb-8">
              <table className="w-full text-sm" aria-label="Cookies strictement nécessaires">
                <thead>
                  <tr style={{ backgroundColor: '#F4F1E9' }}>
                    <th
                      scope="col"
                      className="px-4 py-3 text-left font-semibold"
                      style={{ color: '#243238' }}
                    >
                      Nom du cookie
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 text-left font-semibold"
                      style={{ color: '#243238' }}
                    >
                      Finalité
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 text-left font-semibold"
                      style={{ color: '#243238' }}
                    >
                      Durée maximale
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 text-left font-semibold"
                      style={{ color: '#243238' }}
                    >
                      Éditeur
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {([
                    ['__Host-csrf', 'Protection contre les attaques CSRF (falsification de requêtes inter-sites)', 'Session', 'LM Espace Vert'],
                    ['cookie-consent', 'Mémorisation de vos choix relatifs aux cookies (bandeau de consentement)', '13 mois', 'LM Espace Vert'],
                    ['a11y-font', 'Mémorisation de votre préférence de taille de texte (accessibilité)', '13 mois', 'LM Espace Vert'],
                    ['theme', 'Mémorisation de votre préférence d\'affichage (mode clair / sombre)', '13 mois', 'LM Espace Vert'],
                  ] as [string, string, string, string][]).map(([nom, finalite, duree, editeur], idx) => (
                    <tr
                      key={nom}
                      className="border-t border-[#EDEDED]"
                      style={{ backgroundColor: idx % 2 === 0 ? '#ffffff' : '#FAFAF8' }}
                    >
                      <td className="px-4 py-3 font-mono text-xs" style={{ color: '#2A2F33' }}>
                        {nom}
                      </td>
                      <td className="px-4 py-3 text-xs leading-relaxed" style={{ color: '#2A2F33' }}>
                        {finalite}
                      </td>
                      <td className="px-4 py-3 text-xs" style={{ color: '#5C606B' }}>
                        {duree}
                      </td>
                      <td className="px-4 py-3 text-xs" style={{ color: '#5C606B' }}>
                        {editeur}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* 2.2 Mesure d'audience */}
            <h3
              className="font-display text-base font-bold mb-3"
              style={{ color: '#243238' }}
            >
              2.2 Mesure d&apos;audience (exemptée de consentement)
            </h3>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#2A2F33' }}>
              Le site utilise <strong>Vercel Analytics</strong>, un outil de mesure d&apos;audience
              opéré par Vercel Inc. Cet outil est configuré en mode{' '}
              <strong>strictement anonymisé</strong> : il ne dépose aucun cookie de suivi, ne crée
              aucun identifiant persistant et ne permet pas de vous identifier ou de vous
              retracer entre plusieurs visites. Conformément aux lignes directrices de la{' '}
              <abbr title="Commission Nationale de l'Informatique et des Libertés">CNIL</abbr>{' '}
              du 17 septembre 2020, cette mesure d&apos;audience anonymisée est{' '}
              <strong>exemptée de consentement</strong>.
            </p>
            <p className="text-sm leading-relaxed mb-6" style={{ color: '#2A2F33' }}>
              Les données de navigation collectées (pages visitées, durée de visite, type
              d&apos;appareil) sont agrégées et conservées sous forme d&apos;indicateurs statistiques pendant
              une durée maximale de <strong>13 mois</strong>.
            </p>

            {/* 2.3 Cookies tiers / publicitaires */}
            <h3
              className="font-display text-base font-bold mb-3"
              style={{ color: '#243238' }}
            >
              2.3 Cookies tiers et traceurs publicitaires
            </h3>
            <div
              className="rounded-2xl p-5"
              style={{ backgroundColor: 'rgba(116,154,48,0.07)', border: '1px solid rgba(116,154,48,0.25)' }}
            >
              <p className="text-sm leading-relaxed font-semibold mb-2" style={{ color: '#4A6320' }}>
                Aucun cookie tiers ni traceur publicitaire
              </p>
              <p className="text-sm leading-relaxed" style={{ color: '#2A2F33' }}>
                Ce site n&apos;utilise pas de pixels de conversion (Google Ads, Meta Ads, LinkedIn
                Insight Tag, etc.), de traceurs de réseaux sociaux, ni de cookies de profilage
                publicitaire tiers. Aucun de ces traceurs ne sera déposé sans votre consentement
                préalable, explicite et éclairé.
              </p>
            </div>
          </div>

          {/* ── 3. Recueil du consentement — bandeau CNIL ── */}
          <div className="mb-10">
            <h2
              className="font-display text-xl font-bold mb-4"
              style={{ color: '#243238' }}
            >
              3. Recueil du consentement — bandeau d&apos;information
            </h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#2A2F33' }}>
              Conformément à la recommandation de la CNIL du 17 septembre 2020 (délibération
              n° 2020-091), lors de votre première visite sur le site, un bandeau d&apos;information
              cookies vous est présenté. Ce bandeau comporte, à visibilité et poids équaux, les
              trois options suivantes :
            </p>
            <ul className="space-y-3 text-sm mb-4" style={{ color: '#2A2F33' }}>
              <li className="flex gap-3 items-start">
                <span
                  className="mt-0.5 flex-shrink-0 inline-block w-2 h-2 rounded-full"
                  style={{ backgroundColor: '#4A6320' }}
                  aria-hidden="true"
                />
                <div>
                  <strong>Tout accepter</strong> — vous acceptez le dépôt de l&apos;ensemble des
                  cookies soumis à consentement.
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <span
                  className="mt-0.5 flex-shrink-0 inline-block w-2 h-2 rounded-full"
                  style={{ backgroundColor: '#9E4B47' }}
                  aria-hidden="true"
                />
                <div>
                  <strong>Tout refuser</strong> — vous refusez l&apos;ensemble des cookies soumis à
                  consentement. Seuls les cookies strictement nécessaires seront déposés.
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <span
                  className="mt-0.5 flex-shrink-0 inline-block w-2 h-2 rounded-full"
                  style={{ backgroundColor: '#5C606B' }}
                  aria-hidden="true"
                />
                <div>
                  <strong>Personnaliser</strong> — vous choisissez, catégorie par catégorie, les
                  cookies que vous acceptez.
                </div>
              </li>
            </ul>
            <p className="text-sm leading-relaxed" style={{ color: '#2A2F33' }}>
              Le consentement est libre (son refus n&apos;entraîne aucune restriction d&apos;accès au site),
              éclairé (vous êtes informé de la finalité de chaque cookie), spécifique (par
              catégorie) et univoque (clic positif, sans case pré-cochée). Le refus est aussi
              simple à exercer que l&apos;acceptation.
            </p>
          </div>

          {/* ── 4. Durée de conservation des choix ── */}
          <div className="mb-10">
            <h2
              className="font-display text-xl font-bold mb-4"
              style={{ color: '#243238' }}
            >
              4. Durée de conservation de vos choix
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: '#2A2F33' }}>
              Vos choix relatifs aux cookies sont mémorisés pendant{' '}
              <strong>13 mois maximum</strong> à compter de leur expression, conformément à la
              recommandation de la CNIL. Passé ce délai, votre consentement vous sera de nouveau
              sollicité. Vous pouvez modifier vos préférences à tout moment via le lien{' '}
              <strong>« Gérer mes cookies »</strong> présent dans le pied de page du site.
            </p>
          </div>

          {/* ── 5. Gestion des cookies via le navigateur ── */}
          <div className="mb-10">
            <h2
              className="font-display text-xl font-bold mb-4"
              style={{ color: '#243238' }}
            >
              5. Gestion des cookies via votre navigateur
            </h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#2A2F33' }}>
              Indépendamment du bandeau de consentement, vous pouvez à tout moment contrôler et
              supprimer les cookies depuis les paramètres de votre navigateur. Attention : la
              suppression des cookies strictement nécessaires peut affecter le fonctionnement du
              site.
            </p>
            <ul className="space-y-2 text-sm" style={{ color: '#2A2F33' }}>
              {([
                ['Google Chrome', 'chrome://settings/cookies'],
                ['Mozilla Firefox', 'about:preferences#privacy'],
                ['Apple Safari', 'Préférences > Confidentialité > Gérer les données de sites web'],
                ['Microsoft Edge', 'edge://settings/privacy'],
              ] as [string, string][]).map(([navigateur, chemin]) => (
                <li key={navigateur} className="flex gap-2 items-start">
                  <span
                    className="mt-1.5 flex-shrink-0 inline-block w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: '#4A6320' }}
                    aria-hidden="true"
                  />
                  <span>
                    <strong>{navigateur}</strong> : {chemin}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* ── 6. Contact ── */}
          <div className="mb-10">
            <h2
              className="font-display text-xl font-bold mb-4"
              style={{ color: '#243238' }}
            >
              6. Contact
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: '#2A2F33' }}>
              Pour toute question relative à la présente politique de cookies ou pour exercer vos
              droits relatifs aux données personnelles, contactez LM Espace Vert à l&apos;adresse{' '}
              <a href="mailto:contact@lmespacevert.fr" style={{ color: '#4A6320' }}>
                contact@lmespacevert.fr
              </a>
              . Vous pouvez également consulter notre{' '}
              <Link href="/politique-confidentialite" style={{ color: '#4A6320' }}>
                Politique de confidentialité
              </Link>{' '}
              pour plus d&apos;informations sur le traitement de vos données personnelles.
            </p>
          </div>

          {/* Pied de section */}
          <div className="mt-8 pt-6 border-t border-[#EDEDED] flex items-center justify-between flex-wrap gap-4">
            <p className="text-xs" style={{ color: '#5C606B' }}>
              Dernière mise à jour : [DATE — À COMPLÉTER]
            </p>
            <Link
              href="#"
              className="inline-flex items-center gap-1.5 text-xs font-semibold rounded-full px-4 py-2 transition-all duration-200 hover:scale-[1.03] hover:shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#749A30]"
              style={{ backgroundColor: 'rgba(116,154,48,0.10)', color: '#4A6320' }}
              aria-label="Retour en haut de page"
            >
              <ArrowUp size={12} aria-hidden="true" />
              Haut de page
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
