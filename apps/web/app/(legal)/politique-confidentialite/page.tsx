import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUp } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Politique de confidentialité | LM Espace Vert',
  description:
    'Politique de protection des données personnelles de LM Espace Vert — responsable de traitement, données collectées, finalités, droits RGPD, transferts hors UE, sécurité.',
  alternates: { canonical: 'https://www.lm-espace-vert.fr/politique-confidentialite' },
  robots: { index: false },
}

export default function PolitiqueConfidentialitePage() {
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
                Politique de confidentialité
              </span>
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-14" style={{ backgroundColor: '#F4F1E9' }}>
        <div className="container mx-auto max-w-4xl px-4 sm:px-6">
          <h1
            className="font-display text-[clamp(2rem,4vw,3rem)] font-bold"
            style={{ color: '#243238' }}
          >
            Politique de confidentialité
          </h1>
          <p className="mt-3 text-base leading-relaxed" style={{ color: '#5C606B' }}>
            Conformément au Règlement (UE) 2016/679 (
            <abbr title="Règlement Général sur la Protection des Données">RGPD</abbr>) et à la loi
            n° 78-17 du 6 janvier 1978 modifiée (loi Informatique et Libertés)
          </p>
        </div>
      </section>

      {/* Contenu principal */}
      <section className="bg-white py-12">
        <div
          className="container mx-auto max-w-4xl px-4 sm:px-6"
          style={{ lineHeight: '1.8', color: '#2A2F33' }}
        >

          {/* Introduction */}
          <p className="text-sm leading-relaxed mb-10" style={{ color: '#2A2F33' }}>
            LM Espace Vert s&apos;engage à protéger la vie privée des utilisateurs de son site et à
            traiter les données personnelles collectées avec le plus grand soin, dans le respect de
            la réglementation en vigueur. La présente politique de confidentialité décrit les types
            de données collectées, les finalités et bases légales de leur traitement, les droits des
            personnes concernées et les mesures prises pour assurer la sécurité des données.
          </p>

          {/* ── 1. Responsable du traitement ── */}
          <div className="mb-10">
            <h2
              className="font-display text-xl font-bold mb-4"
              style={{ color: '#243238' }}
            >
              1. Responsable du traitement
            </h2>
            <dl className="rounded-2xl border border-[#EDEDED] overflow-hidden">
              {([
                ['Responsable de traitement', 'LM ESPACE VERT'],
                ['Représentant légal', 'Léo Maurice, gérant'],
                ['SIREN', '999 206 816'],
                ['Siège légal', '655 Route de Choisine, 07410 Colombier-le-Vieux'],
                ['Adresse d\'activité', 'Saint-Didier-au-Mont-d\'Or, 69370 Rhône'],
                ['Email de contact RGPD', 'contact@lm-espace-vert.fr'],
                ['Téléphone', '+33 6 72 58 73 53'],
                ['Délégué à la Protection des Données (DPO)', 'Absence de DPO désigné (PME non soumise à l\'obligation — art. 37 RGPD). Toute demande relative aux données personnelles peut être adressée au responsable de traitement via l\'email ci-dessus.'],
              ] as [string, string][]).map(([label, value], idx) => (
                <div
                  key={label}
                  className="flex flex-col sm:flex-row gap-1 sm:gap-4 px-5 py-3 border-b border-[#EDEDED] last:border-0"
                  style={{ backgroundColor: idx % 2 === 0 ? '#ffffff' : '#F4F1E9' }}
                >
                  <dt
                    className="text-xs font-semibold uppercase tracking-wide flex-shrink-0 sm:w-64"
                    style={{ color: '#5C606B' }}
                  >
                    {label}
                  </dt>
                  <dd className="text-sm" style={{ color: '#2A2F33' }}>
                    {label === 'Email de contact RGPD' ? (
                      <a href="mailto:contact@lm-espace-vert.fr" style={{ color: '#4A6320' }}>
                        {value}
                      </a>
                    ) : label === 'Téléphone' ? (
                      <a href="tel:+33672587353" style={{ color: '#4A6320' }}>
                        {value}
                      </a>
                    ) : (
                      value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* ── 2. Données collectées, finalités et bases légales ── */}
          <div className="mb-10">
            <h2
              className="font-display text-xl font-bold mb-4"
              style={{ color: '#243238' }}
            >
              2. Données collectées, finalités et bases légales
            </h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: '#2A2F33' }}>
              Nous collectons uniquement les données strictement nécessaires aux finalités indiquées
              ci-dessous, conformément au principe de minimisation des données (art. 5 §1 c) RGPD) :
            </p>
            <div className="overflow-x-auto rounded-2xl border border-[#EDEDED]">
              <table
                className="w-full text-xs"
                aria-label="Tableau des traitements de données personnelles"
              >
                <thead>
                  <tr style={{ backgroundColor: '#F4F1E9' }}>
                    <th
                      scope="col"
                      className="px-4 py-3 text-left font-semibold"
                      style={{ color: '#243238' }}
                    >
                      Données
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
                      Base légale RGPD
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 text-left font-semibold"
                      style={{ color: '#243238' }}
                    >
                      Durée de conservation
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {([
                    [
                      'Nom, prénom, email, téléphone, code postal, message (formulaires de contact et de devis)',
                      'Traitement de la demande de contact ou de devis ; établissement d\'une relation précontractuelle',
                      'Mesures précontractuelles à la demande de la personne concernée (art. 6.1.b RGPD)',
                      '3 ans à compter du dernier contact',
                    ],
                    [
                      'Identité du client, adresse, coordonnées bancaires, factures, devis signés',
                      'Exécution du contrat de prestation paysagère ; obligations comptables et fiscales légales',
                      'Exécution du contrat (art. 6.1.b) + Obligation légale (art. 6.1.c RGPD)',
                      '10 ans (L.123-22 Code de commerce) pour les pièces comptables',
                    ],
                    [
                      'Données de navigation anonymisées (pages visitées, durée, type d\'appareil) — Vercel Analytics',
                      'Mesure d\'audience et amélioration du site web — aucun identifiant persistant',
                      'Intérêt légitime (art. 6.1.f RGPD) — exemption consentement CNIL (anonymat)',
                      '13 mois (agrégats statistiques)',
                    ],
                    [
                      'Adresse IP et logs de connexion serveur',
                      'Sécurité du site, prévention des attaques, détection des fraudes',
                      'Intérêt légitime (art. 6.1.f RGPD)',
                      '12 mois',
                    ],
                  ] as [string, string, string, string][]).map(([donnee, finalite, base, duree], idx) => (
                    <tr
                      key={donnee}
                      className="border-t border-[#EDEDED]"
                      style={{ backgroundColor: idx % 2 === 0 ? '#ffffff' : '#FAFAF8' }}
                    >
                      <td
                        className="px-4 py-3 leading-relaxed align-top"
                        style={{ color: '#2A2F33' }}
                      >
                        {donnee}
                      </td>
                      <td
                        className="px-4 py-3 leading-relaxed align-top"
                        style={{ color: '#2A2F33' }}
                      >
                        {finalite}
                      </td>
                      <td
                        className="px-4 py-3 leading-relaxed align-top"
                        style={{ color: '#5C606B' }}
                      >
                        {base}
                      </td>
                      <td
                        className="px-4 py-3 leading-relaxed align-top"
                        style={{ color: '#5C606B' }}
                      >
                        {duree}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* ── 3. Destinataires et sous-traitants ── */}
          <div className="mb-10">
            <h2
              className="font-display text-xl font-bold mb-4"
              style={{ color: '#243238' }}
            >
              3. Destinataires des données et sous-traitants
            </h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#2A2F33' }}>
              Les données personnelles sont accessibles au personnel habilité de LM Espace Vert.
              Elles peuvent être transmises aux sous-traitants techniques ci-dessous, liés à LM
              Espace Vert par un contrat de traitement de données conforme à l&apos;article 28 du RGPD :
            </p>
            <div className="overflow-x-auto rounded-2xl border border-[#EDEDED]">
              <table
                className="w-full text-sm"
                aria-label="Tableau des sous-traitants"
              >
                <thead>
                  <tr style={{ backgroundColor: '#F4F1E9' }}>
                    <th
                      scope="col"
                      className="px-4 py-3 text-left font-semibold"
                      style={{ color: '#243238' }}
                    >
                      Sous-traitant
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 text-left font-semibold"
                      style={{ color: '#243238' }}
                    >
                      Rôle
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 text-left font-semibold"
                      style={{ color: '#243238' }}
                    >
                      Pays
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 text-left font-semibold"
                      style={{ color: '#243238' }}
                    >
                      Garantie de transfert
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {([
                    [
                      'Vercel Inc.',
                      'Hébergement du site web et traitement des logs serveur',
                      'États-Unis',
                      'Clauses Contractuelles Types (CCT — décision 2021/914) + EU-U.S. Data Privacy Framework (DPF)',
                    ],
                    [
                      'Resend',
                      'Envoi d\'emails transactionnels (accusés de réception des formulaires de contact et de devis)',
                      'États-Unis',
                      'Clauses Contractuelles Types (CCT — décision 2021/914)',
                    ],
                    [
                      'KAYZEN LYON (SASU)',
                      'Maintenance technique et développement du site web',
                      'France (Union européenne)',
                      'Contrat de sous-traitance RGPD (art. 28)',
                    ],
                  ] as [string, string, string, string][]).map(([nom, role, pays, garantie], idx) => (
                    <tr
                      key={nom}
                      className="border-t border-[#EDEDED]"
                      style={{ backgroundColor: idx % 2 === 0 ? '#ffffff' : '#FAFAF8' }}
                    >
                      <td
                        className="px-4 py-3 font-semibold text-xs align-top"
                        style={{ color: '#2A2F33' }}
                      >
                        {nom}
                      </td>
                      <td
                        className="px-4 py-3 text-xs leading-relaxed align-top"
                        style={{ color: '#2A2F33' }}
                      >
                        {role}
                      </td>
                      <td
                        className="px-4 py-3 text-xs align-top"
                        style={{ color: '#5C606B' }}
                      >
                        {pays}
                      </td>
                      <td
                        className="px-4 py-3 text-xs leading-relaxed align-top"
                        style={{ color: '#5C606B' }}
                      >
                        {garantie}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm leading-relaxed mt-3" style={{ color: '#2A2F33' }}>
              Aucune donnée personnelle n&apos;est vendue, louée ou cédée à des tiers à des fins
              commerciales ou publicitaires.
            </p>
          </div>

          {/* ── 4. Transferts hors UE ── */}
          <div className="mb-10">
            <h2
              className="font-display text-xl font-bold mb-4"
              style={{ color: '#243238' }}
            >
              4. Transferts hors Union européenne
            </h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#2A2F33' }}>
              Les services Vercel Inc. et Resend impliquent un traitement de données aux États-Unis.
              Ces transferts sont encadrés par les{' '}
              <strong>Clauses Contractuelles Types (CCT)</strong> approuvées par la Commission
              européenne (décision d&apos;exécution 2021/914 du 4 juin 2021) et, lorsqu&apos;applicable,
              par le mécanisme{' '}
              <strong>EU-U.S. Data Privacy Framework (DPF)</strong> reconnu adéquat par la décision
              de la Commission européenne du 10 juillet 2023.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: '#2A2F33' }}>
              L&apos;ensemble des autres prestataires traitent les données exclusivement sur le
              territoire de l&apos;Union européenne, sans transfert hors UE.
            </p>
          </div>

          {/* ── 5. Vos droits ── */}
          <div className="mb-10">
            <h2
              className="font-display text-xl font-bold mb-4"
              style={{ color: '#243238' }}
            >
              5. Vos droits en matière de données personnelles
            </h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: '#2A2F33' }}>
              Conformément aux articles 15 à 22 du RGPD et aux articles 49 à 53 de la loi
              Informatique et Libertés, vous disposez des droits suivants sur vos données
              personnelles :
            </p>
            <div className="grid sm:grid-cols-2 gap-3 mb-6">
              {([
                ['Droit d\'accès (art. 15 RGPD)', 'Obtenir la confirmation que vos données sont traitées et en recevoir une copie.'],
                ['Droit de rectification (art. 16 RGPD)', 'Corriger des données inexactes ou compléter des données incomplètes.'],
                ['Droit à l\'effacement (art. 17 RGPD)', 'Demander la suppression de vos données (« droit à l\'oubli »), sous réserve des obligations légales de conservation.'],
                ['Droit à la limitation (art. 18 RGPD)', 'Suspendre temporairement le traitement dans certaines situations prévues par la loi.'],
                ['Droit à la portabilité (art. 20 RGPD)', 'Recevoir vos données dans un format structuré, couramment utilisé et lisible par machine.'],
                ['Droit d\'opposition (art. 21 RGPD)', 'S\'opposer à un traitement fondé sur l\'intérêt légitime, pour des raisons tenant à votre situation particulière.'],
                ['Droit de retrait du consentement (art. 7 §3 RGPD)', 'Retirer votre consentement à tout moment, pour les traitements fondés sur ce fondement, sans affecter la licéité du traitement antérieur.'],
                ['Directives post-mortem (art. 85 LIL)', 'Définir des directives relatives au sort de vos données après votre décès.'],
              ] as [string, string][]).map(([titre, desc]) => (
                <div key={titre} className="rounded-xl border border-[#EDEDED] p-4">
                  <p
                    className="font-semibold text-sm mb-1"
                    style={{ color: '#243238' }}
                  >
                    {titre}
                  </p>
                  <p className="text-xs leading-relaxed" style={{ color: '#5C606B' }}>
                    {desc}
                  </p>
                </div>
              ))}
            </div>
            <div
              className="rounded-2xl p-5"
              style={{ backgroundColor: 'rgba(116,154,48,0.08)', border: '1px solid rgba(116,154,48,0.25)' }}
            >
              <p className="text-sm font-semibold mb-2" style={{ color: '#4A6320' }}>
                Comment exercer vos droits ?
              </p>
              <p className="text-sm leading-relaxed" style={{ color: '#2A2F33' }}>
                Adressez votre demande par email à{' '}
                <a href="mailto:contact@lm-espace-vert.fr" style={{ color: '#4A6320' }}>
                  contact@lm-espace-vert.fr
                </a>{' '}
                en précisant l&apos;objet de votre demande et en joignant, si nécessaire, une copie
                d&apos;un justificatif d&apos;identité pour vérifier votre identité. Vous pouvez également
                écrire par courrier à : LM ESPACE VERT, 655 Route de Choisine, 07410 Colombier-le-Vieux.
                LM Espace Vert s&apos;engage à vous répondre dans un délai d&apos;
                <strong>un mois</strong> à compter de la réception de votre demande. Ce délai peut
                être prolongé de deux mois supplémentaires pour les demandes complexes ou
                nombreuses, avec information préalable de l&apos;intéressé.
              </p>
            </div>
          </div>

          {/* ── 6. Cookies et traceurs ── */}
          <div className="mb-10">
            <h2
              className="font-display text-xl font-bold mb-4"
              style={{ color: '#243238' }}
            >
              6. Cookies et traceurs
            </h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#2A2F33' }}>
              Le site utilise les types de traceurs suivants :
            </p>
            <div className="rounded-2xl border border-[#EDEDED] overflow-hidden mb-4">
              {([
                [
                  'Cookies techniques strictement nécessaires',
                  'Fonctionnement du site (sécurité CSRF, mémorisation des préférences d\'accessibilité, choix relatifs aux cookies)',
                  'Dispensés de consentement',
                ],
                [
                  'Vercel Analytics',
                  'Mesure d\'audience anonymisée — aucun cookie de suivi, aucun identifiant persistant, aucune collecte de données personnelles',
                  'Intérêt légitime — exempté de consentement (CNIL)',
                ],
              ] as [string, string, string][]).map(([type, desc, base], idx) => (
                <div
                  key={type}
                  className="grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-0 px-5 py-3 border-b border-[#EDEDED] last:border-0 text-sm"
                  style={{ backgroundColor: idx % 2 === 0 ? '#ffffff' : '#FAFAF8' }}
                >
                  <span className="font-semibold" style={{ color: '#2A2F33' }}>
                    {type}
                  </span>
                  <span style={{ color: '#2A2F33' }}>{desc}</span>
                  <span style={{ color: '#5C606B' }}>{base}</span>
                </div>
              ))}
            </div>
            <p className="text-sm leading-relaxed" style={{ color: '#2A2F33' }}>
              <strong>Aucun cookie publicitaire</strong>, pixel de suivi ou traceur tiers (Google
              Ads, Facebook Pixel, LinkedIn Insight Tag, etc.) n&apos;est utilisé sur ce site. Pour
              plus de détails sur les cookies déposés et la gestion de vos préférences, consultez
              notre{' '}
              <Link href="/politique-cookies" style={{ color: '#4A6320' }}>
                Politique de cookies
              </Link>
              .
            </p>
          </div>

          {/* ── 7. Sécurité des données ── */}
          <div className="mb-10">
            <h2
              className="font-display text-xl font-bold mb-4"
              style={{ color: '#243238' }}
            >
              7. Sécurité des données
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: '#2A2F33' }}>
              LM Espace Vert met en œuvre les mesures techniques et organisationnelles appropriées
              pour garantir la confidentialité, l&apos;intégrité et la disponibilité de vos données
              personnelles, conformément à l&apos;article 32 du RGPD. Ces mesures comprennent notamment :
              chiffrement des communications (protocole TLS 1.3), contrôles d&apos;accès stricts aux
              systèmes hébergeant les données, authentification forte pour les accès aux outils
              internes, sauvegardes régulières, et journalisation des accès aux données personnelles.
              En cas de violation de données à caractère personnel, LM Espace Vert s&apos;engage à
              respecter les obligations de notification prévues aux articles 33 et 34 du RGPD.
            </p>
          </div>

          {/* ── 8. Réclamation auprès de la CNIL ── */}
          <div className="mb-10">
            <h2
              className="font-display text-xl font-bold mb-4"
              style={{ color: '#243238' }}
            >
              8. Réclamation auprès de l&apos;autorité de contrôle
            </h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#2A2F33' }}>
              Si vous estimez, après nous avoir contactés, que vos droits sur vos données
              personnelles ne sont pas respectés, vous avez le droit d&apos;introduire une réclamation
              auprès de l&apos;autorité de contrôle compétente :
            </p>
            <div
              className="rounded-2xl border border-[#EDEDED] p-5 text-sm"
              style={{ color: '#2A2F33' }}
            >
              <p className="font-semibold mb-1">
                Commission Nationale de l&apos;Informatique et des Libertés (CNIL)
              </p>
              <p style={{ color: '#5C606B' }}>
                3 place de Fontenoy — TSA 80715 — 75334 Paris Cedex 07
              </p>
              <p className="mt-1">
                <a
                  href="https://www.cnil.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#4A6320' }}
                >
                  www.cnil.fr
                </a>
              </p>
            </div>
          </div>

          {/* ── 9. Modifications ── */}
          <div className="mb-10">
            <h2
              className="font-display text-xl font-bold mb-4"
              style={{ color: '#243238' }}
            >
              9. Modifications de la présente politique
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: '#2A2F33' }}>
              La présente politique de confidentialité peut être modifiée à tout moment pour
              s&apos;adapter aux évolutions légales, réglementaires ou aux changements opérés sur le
              site. La date de dernière mise à jour est indiquée en bas de cette page. En cas de
              modification substantielle, vous en serez informé par un avertissement visible sur
              le site ou, si nous disposons de votre adresse email, par un message direct.
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
