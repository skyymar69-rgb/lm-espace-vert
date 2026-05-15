import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Politique de confidentialité | LM Espace Vert',
  description:
    'Politique de protection des données personnelles de LM Espace Vert — responsable de traitement, données collectées, droits RGPD, cookies, transferts hors UE.',
  alternates: { canonical: 'https://www.lmespacevert.fr/politique-confidentialite' },
  robots: { index: false },
}

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      {/* Breadcrumb */}
      <nav aria-label="Fil d'Ariane" className="border-b border-[#EDEDED] bg-white">
        <div className="container mx-auto max-w-7xl px-4 py-3 sm:px-6">
          <ol role="list" className="flex items-center gap-2 text-sm" style={{ color: '#8C8F94' }}>
            <li>
              <Link href="/" className="hover:underline" style={{ color: '#8C8F94' }}>Accueil</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li><span aria-current="page" style={{ color: '#2F2F2F' }}>Politique de confidentialité</span></li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-14" style={{ backgroundColor: '#F7F5F0' }}>
        <div className="container mx-auto max-w-4xl px-4 sm:px-6">
          <h1 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold" style={{ color: '#425D07' }}>
            Politique de confidentialité
          </h1>
          <p className="mt-3 text-base leading-relaxed" style={{ color: '#8C8F94' }}>
            Conformément au Règlement (UE) 2016/679 (RGPD) et à la loi n° 78-17 du 6 janvier 1978 modifiée
          </p>
        </div>
      </section>

      {/* Contenu */}
      <section className="bg-white py-12">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6">

          {/* Intro */}
          <p className="text-sm leading-relaxed mb-10" style={{ color: '#2F2F2F' }}>
            LM Espace Vert s&apos;engage à protéger la vie privée des utilisateurs de son site et à traiter
            les données personnelles collectées avec le plus grand soin, dans le respect de la réglementation
            en vigueur. La présente politique de confidentialité décrit les types de données collectées,
            les finalités de leur traitement, les droits des personnes concernées et les mesures prises
            pour assurer la sécurité des données.
          </p>

          {/* Section 1 */}
          <div className="mb-10">
            <h2 className="font-display text-xl font-bold mb-4" style={{ color: '#425D07' }}>
              1. Responsable du traitement
            </h2>
            <div className="rounded-2xl border border-[#EDEDED] overflow-hidden">
              {[
                ['Responsable de traitement', 'LM ESPACE VERT'],
                ['Représentant', 'Léo Maurice, gérant'],
                ['SIREN', '999 206 816'],
                ['Siège légal', '655 Route de Choisine, 07410 Colombier-le-Vieux'],
                ['Adresse d\'activité', 'Saint-Didier-au-Mont-d\'Or, 69370 Rhône'],
                ['Email DPO / contact RGPD', 'contact@lmespacevert.fr'],
                ['Téléphone', '06 72 58 73 53'],
              ].map(([label, value], idx) => (
                <div
                  key={label}
                  className="flex flex-col sm:flex-row gap-1 sm:gap-4 px-5 py-3 border-b border-[#EDEDED] last:border-0"
                  style={{ backgroundColor: idx % 2 === 0 ? '#ffffff' : '#FAFAF8' }}
                >
                  <dt className="text-xs font-semibold uppercase tracking-wide flex-shrink-0 sm:w-56" style={{ color: '#8C8F94' }}>{label}</dt>
                  <dd className="text-sm" style={{ color: '#2F2F2F' }}>
                    {label === 'Email DPO / contact RGPD' ? (
                      <a href="mailto:contact@lmespacevert.fr" style={{ color: '#425D07' }}>{value}</a>
                    ) : label === 'Téléphone' ? (
                      <a href="tel:+33672587353" style={{ color: '#425D07' }}>{value}</a>
                    ) : (
                      value
                    )}
                  </dd>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2 */}
          <div className="mb-10">
            <h2 className="font-display text-xl font-bold mb-4" style={{ color: '#425D07' }}>
              2. Données collectées, finalités et bases légales
            </h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: '#2F2F2F' }}>
              Nous collectons uniquement les données nécessaires aux finalités indiquées ci-dessous (principe de minimisation, art. 5 RGPD) :
            </p>
            <div className="rounded-2xl border border-[#EDEDED] overflow-hidden">
              <div className="grid grid-cols-4 gap-0 px-4 py-3 text-xs font-semibold uppercase tracking-wide" style={{ backgroundColor: '#F7F5F0', color: '#425D07' }}>
                <span>Données</span>
                <span>Finalité</span>
                <span>Base légale</span>
                <span>Conservation</span>
              </div>
              {[
                [
                  'Nom, prénom, email, téléphone, code postal, message',
                  'Traitement de la demande de contact ou de devis',
                  'Mesures précontractuelles (art. 6.1.b RGPD)',
                  '3 ans à compter du dernier contact',
                ],
                [
                  'Identité client, factures, coordonnées bancaires',
                  'Exécution du contrat et obligations comptables',
                  'Contrat + obligation légale (art. 6.1.b et 6.1.c RGPD)',
                  '10 ans (art. L.123-22 Code de commerce)',
                ],
                [
                  'Données de navigation anonymisées (pages visitées, durée)',
                  'Mesure d\'audience — amélioration du site (Vercel Analytics)',
                  'Intérêt légitime (art. 6.1.f RGPD) — données anonymes sans cookie',
                  '13 mois (agrégats statistiques)',
                ],
                [
                  'Adresse IP, logs serveur',
                  'Sécurité du site, prévention des attaques et de la fraude',
                  'Intérêt légitime (art. 6.1.f RGPD)',
                  '12 mois',
                ],
              ].map(([donnee, finalite, base, duree], idx) => (
                <div
                  key={donnee}
                  className="grid grid-cols-4 gap-0 px-4 py-3 border-t border-[#EDEDED] text-xs leading-relaxed"
                  style={{ backgroundColor: idx % 2 === 0 ? '#ffffff' : '#FAFAF8', color: '#2F2F2F' }}
                >
                  <span className="pr-3">{donnee}</span>
                  <span className="pr-3">{finalite}</span>
                  <span className="pr-3" style={{ color: '#8C8F94' }}>{base}</span>
                  <span style={{ color: '#8C8F94' }}>{duree}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3 */}
          <div className="mb-10">
            <h2 className="font-display text-xl font-bold mb-4" style={{ color: '#425D07' }}>
              3. Destinataires des données
            </h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#2F2F2F' }}>
              Les données personnelles sont destinées au personnel habilité de LM Espace Vert.
              Elles peuvent être transmises aux sous-traitants techniques suivants, encadrés par des
              contrats de traitement de données conformes à l&apos;article 28 du RGPD :
            </p>
            <div className="rounded-2xl border border-[#EDEDED] overflow-hidden">
              {[
                ['Vercel Inc.', 'Hébergement du site web', 'États-Unis', 'Clauses Contractuelles Types (CCT)'],
                ['Resend', 'Envoi des emails transactionnels (accusés de réception des formulaires)', 'États-Unis', 'Clauses Contractuelles Types (CCT)'],
                ['Kayzen Lyon (SASU)', 'Maintenance technique du site web', 'France (UE)', 'Accord de sous-traitance RGPD'],
              ].map(([nom, role, pays, garantie], idx) => (
                <div
                  key={nom}
                  className="flex flex-col sm:grid sm:grid-cols-4 gap-1 sm:gap-0 px-5 py-3 border-b border-[#EDEDED] last:border-0 text-sm"
                  style={{ backgroundColor: idx % 2 === 0 ? '#ffffff' : '#FAFAF8' }}
                >
                  <span className="font-semibold" style={{ color: '#2F2F2F' }}>{nom}</span>
                  <span style={{ color: '#2F2F2F' }}>{role}</span>
                  <span style={{ color: '#8C8F94' }}>{pays}</span>
                  <span style={{ color: '#8C8F94' }}>{garantie}</span>
                </div>
              ))}
            </div>
            <p className="text-sm leading-relaxed mt-3" style={{ color: '#2F2F2F' }}>
              Aucune donnée personnelle n&apos;est vendue, louée ou cédée à des tiers à des fins commerciales.
            </p>
          </div>

          {/* Section 4 */}
          <div className="mb-10">
            <h2 className="font-display text-xl font-bold mb-4" style={{ color: '#425D07' }}>
              4. Transferts hors Union européenne
            </h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#2F2F2F' }}>
              Les services Vercel Inc. et Resend impliquent un traitement de données aux États-Unis.
              Ces transferts sont encadrés par les <strong>Clauses Contractuelles Types (CCT)</strong>{' '}
              approuvées par la Commission européenne (décision d&apos;exécution 2021/914) et, lorsque
              applicable, par le mécanisme <strong>EU-U.S. Data Privacy Framework (DPF)</strong>.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: '#2F2F2F' }}>
              L&apos;ensemble des autres prestataires traite les données sur le territoire de l&apos;Union
              européenne, sans transfert hors UE.
            </p>
          </div>

          {/* Section 5 */}
          <div className="mb-10">
            <h2 className="font-display text-xl font-bold mb-4" style={{ color: '#425D07' }}>
              5. Vos droits
            </h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#2F2F2F' }}>
              Conformément aux articles 15 à 22 du RGPD et à la loi Informatique et Libertés,
              vous disposez des droits suivants sur vos données personnelles :
            </p>
            <div className="grid sm:grid-cols-2 gap-3 mb-4">
              {[
                ['Droit d\'accès', 'Obtenir une copie de vos données traitées (art. 15 RGPD)'],
                ['Droit de rectification', 'Corriger des données inexactes ou incomplètes (art. 16 RGPD)'],
                ['Droit à l\'effacement', 'Demander la suppression de vos données (« droit à l\'oubli », art. 17 RGPD)'],
                ['Droit à la limitation', 'Suspendre le traitement dans certaines situations (art. 18 RGPD)'],
                ['Droit à la portabilité', 'Recevoir vos données dans un format structuré (art. 20 RGPD)'],
                ['Droit d\'opposition', 'S\'opposer à un traitement fondé sur l\'intérêt légitime (art. 21 RGPD)'],
                ['Droit de retrait du consentement', 'À tout moment, pour les traitements fondés sur le consentement (art. 7 RGPD)'],
                ['Directives post-mortem', 'Définir le sort de vos données après votre décès (art. 85 LIL)'],
              ].map(([titre, desc]) => (
                <div key={titre} className="rounded-xl border border-[#EDEDED] p-4">
                  <p className="font-semibold text-sm mb-1" style={{ color: '#2F2F2F' }}>{titre}</p>
                  <p className="text-xs leading-relaxed" style={{ color: '#8C8F94' }}>{desc}</p>
                </div>
              ))}
            </div>
            <div className="rounded-2xl p-5" style={{ backgroundColor: 'rgba(128,188,0,0.08)', border: '1px solid rgba(128,188,0,0.25)' }}>
              <p className="text-sm font-semibold mb-2" style={{ color: '#425D07' }}>Comment exercer vos droits ?</p>
              <p className="text-sm leading-relaxed" style={{ color: '#2F2F2F' }}>
                Adressez votre demande à{' '}
                <a href="mailto:contact@lmespacevert.fr" style={{ color: '#425D07' }}>contact@lmespacevert.fr</a>{' '}
                en précisant l&apos;objet de votre demande et en joignant une copie d&apos;un justificatif
                d&apos;identité. LM Espace Vert s&apos;engage à vous répondre dans un délai d&apos;<strong>un mois</strong>{' '}
                à compter de la réception de votre demande (ce délai peut être prolongé de deux mois
                supplémentaires pour les demandes complexes, avec information préalable).
              </p>
            </div>
          </div>

          {/* Section 6 */}
          <div className="mb-10">
            <h2 className="font-display text-xl font-bold mb-4" style={{ color: '#425D07' }}>
              6. Cookies et traceurs
            </h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#2F2F2F' }}>
              Le site utilise uniquement les types de traceurs suivants :
            </p>
            <div className="rounded-2xl border border-[#EDEDED] overflow-hidden mb-4">
              {[
                ['Cookies techniques', 'Nécessaires au fonctionnement du site (sécurité CSRF, mémorisation des préférences)', 'Pas de consentement requis'],
                ['Vercel Analytics', 'Mesure d\'audience anonymisée — aucun cookie déposé, aucun identifiant persistant', 'Intérêt légitime — exempté de consentement (CNIL)'],
              ].map(([type, desc, base], idx) => (
                <div
                  key={type}
                  className="flex flex-col sm:grid sm:grid-cols-3 gap-1 sm:gap-0 px-5 py-3 border-b border-[#EDEDED] last:border-0 text-sm"
                  style={{ backgroundColor: idx % 2 === 0 ? '#ffffff' : '#FAFAF8' }}
                >
                  <span className="font-semibold" style={{ color: '#2F2F2F' }}>{type}</span>
                  <span style={{ color: '#2F2F2F' }}>{desc}</span>
                  <span style={{ color: '#8C8F94' }}>{base}</span>
                </div>
              ))}
            </div>
            <p className="text-sm leading-relaxed" style={{ color: '#2F2F2F' }}>
              <strong>Aucun cookie publicitaire</strong>, pixel de suivi ou traceur tiers (Google Ads,
              Facebook Pixel, etc.) n&apos;est utilisé sur ce site. Pour plus de détails, consultez notre{' '}
              <Link href="/politique-cookies" style={{ color: '#425D07' }}>
                Politique de cookies
              </Link>.
            </p>
          </div>

          {/* Section 7 */}
          <div className="mb-10">
            <h2 className="font-display text-xl font-bold mb-4" style={{ color: '#425D07' }}>
              7. Sécurité des données
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: '#2F2F2F' }}>
              LM Espace Vert met en œuvre les mesures techniques et organisationnelles appropriées
              pour garantir la confidentialité, l&apos;intégrité et la disponibilité de vos données
              personnelles, notamment : chiffrement des communications (TLS 1.3), contrôles d&apos;accès
              stricts, sauvegardes régulières, authentification forte pour les accès aux outils internes,
              et journalisation des accès.
            </p>
          </div>

          {/* Section 8 */}
          <div className="mb-10">
            <h2 className="font-display text-xl font-bold mb-4" style={{ color: '#425D07' }}>
              8. Autorité de contrôle
            </h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#2F2F2F' }}>
              Si vous estimez, après nous avoir contactés, que vos droits sur vos données
              personnelles ne sont pas respectés, vous avez le droit d&apos;introduire une réclamation
              auprès de l&apos;autorité de contrôle compétente :
            </p>
            <div className="rounded-2xl border border-[#EDEDED] p-5 text-sm" style={{ color: '#2F2F2F' }}>
              <p className="font-semibold mb-1">Commission Nationale de l&apos;Informatique et des Libertés (CNIL)</p>
              <p style={{ color: '#8C8F94' }}>3 place de Fontenoy — TSA 80715 — 75334 Paris Cedex 07</p>
              <p className="mt-1">
                <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" style={{ color: '#425D07' }}>
                  www.cnil.fr
                </a>
              </p>
            </div>
          </div>

          <p className="text-xs mt-8 pt-6 border-t border-[#EDEDED]" style={{ color: '#8C8F94' }}>
            Dernière mise à jour : 15 mai 2026
          </p>
        </div>
      </section>
    </>
  )
}
