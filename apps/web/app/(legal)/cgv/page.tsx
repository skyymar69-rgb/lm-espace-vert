import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUp } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Conditions générales de vente (CGV) | LM Espace Vert',
  description:
    'CGV de LM Espace Vert — paysagiste EURL. Devis, tarifs, TVA, paiement, droit de rétractation, garanties légales, Service à la Personne, médiation consommation.',
  alternates: { canonical: 'https://www.lm-espace-vert.fr/cgv' },
  robots: { index: true },
}

export default function CgvPage() {
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
                Conditions générales de vente
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
            Conditions générales de vente
          </h1>
          <p className="mt-3 text-base leading-relaxed" style={{ color: '#5C606B' }}>
            Version en vigueur au [DATE — À COMPLÉTER] — Applicables aux particuliers (B2C) et
            aux professionnels (B2B)
          </p>
        </div>
      </section>

      {/* Contenu principal */}
      <section className="bg-white py-12">
        <div
          className="container mx-auto max-w-4xl px-4 sm:px-6"
          style={{ lineHeight: '1.8', color: '#2A2F33' }}
        >

          {/* ── Article 1. Objet ── */}
          <div className="mb-10">
            <h2
              className="font-display text-xl font-bold mb-4"
              style={{ color: '#243238' }}
            >
              Article 1. Objet et champ d&apos;application
            </h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#2A2F33' }}>
              Les présentes conditions générales de vente (CGV) régissent l&apos;ensemble des
              relations contractuelles entre <strong>LM ESPACE VERT</strong> (ci-après « le
              Prestataire ») et toute personne physique ou morale (ci-après « le Client »)
              souhaitant bénéficier de ses prestations de services paysagers, que ce soit à titre
              de consommateur (B2C) ou de professionnel (B2B).
            </p>
            <p className="text-sm leading-relaxed" style={{ color: '#2A2F33' }}>
              Toute commande passée auprès du Prestataire implique l&apos;acceptation pleine et entière,
              sans réserve, des présentes CGV qui prévalent sur tout autre document du Client, sauf
              convention expresse contraire signée par les deux parties. Les présentes CGV sont
              disponibles en permanence sur le site www.lm-espace-vert.fr et remises au Client, sur
              papier ou sur support durable, avant toute conclusion de contrat hors établissement
              (art. L.221-8 et L.221-25 Code conso).
            </p>
          </div>

          {/* ── Article 2. Identité du professionnel ── */}
          <div className="mb-10">
            <h2
              className="font-display text-xl font-bold mb-4"
              style={{ color: '#243238' }}
            >
              Article 2. Identité du professionnel
            </h2>
            <dl className="rounded-2xl border border-[#EDEDED] overflow-hidden">
              {([
                ['Raison sociale', 'LM ESPACE VERT'],
                ['Forme juridique', 'EURL (Entreprise Unipersonnelle à Responsabilité Limitée)'],
                ['Capital social', '400,00 €'],
                ['Dirigeant', 'Léo Maurice, gérant'],
                ['SIREN', '999 206 816'],
                ['SIRET', '999 206 816 00012'],
                ['N° TVA intracommunautaire', 'FR69 999 206 816'],
                ['RCS', '999 206 816 R.C.S. Aubenas'],
                ['Code APE / NAF', '81.30Z — Services d\'aménagement paysager'],
                ['Siège social', '655 Route de Choisine, 07410 Colombier-le-Vieux'],
                ['Adresse d\'activité principale', 'Saint-Didier-au-Mont-d\'Or, 69370 Rhône'],
                ['Assurance RC Pro', '[À COMPLÉTER — nom de l\'assureur, n° de police]'],
                ['Téléphone', '+33 6 72 58 73 53'],
                ['Email', 'contact@lmespacevert.fr'],
              ] as [string, string][]).map(([label, value], idx) => (
                <div
                  key={label}
                  className="flex flex-col sm:flex-row gap-1 sm:gap-4 px-5 py-3 border-b border-[#EDEDED] last:border-0"
                  style={{ backgroundColor: idx % 2 === 0 ? '#ffffff' : '#F4F1E9' }}
                >
                  <dt
                    className="text-xs font-semibold uppercase tracking-wide flex-shrink-0 sm:w-60"
                    style={{ color: '#5C606B' }}
                  >
                    {label}
                  </dt>
                  <dd className="text-sm" style={{ color: '#2A2F33' }}>
                    {label === 'Téléphone' ? (
                      <a href="tel:+33672587353" style={{ color: '#4A6320' }}>
                        {value}
                      </a>
                    ) : label === 'Email' ? (
                      <a href="mailto:contact@lmespacevert.fr" style={{ color: '#4A6320' }}>
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

          {/* ── Article 3. Services proposés ── */}
          <div className="mb-10">
            <h2
              className="font-display text-xl font-bold mb-4"
              style={{ color: '#243238' }}
            >
              Article 3. Services proposés
            </h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: '#2A2F33' }}>
              Le Prestataire propose les prestations de services paysagers suivantes (liste non
              exhaustive) :
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {([
                ['Création de jardins', 'Conception et réalisation d\'espaces verts, jardins privatifs et professionnels'],
                ['Entretien régulier', 'Tonte, taille, désherbage, soins saisonniers des espaces verts'],
                ['Élagage et abattage', 'Élagage d\'arbres, abattage raisonné, broyage de rémanents'],
                ['Maçonnerie paysagère', 'Dallage, murets, allées, terrasses, escaliers extérieurs'],
                ['Arrosage automatique', 'Installation et programmation de systèmes d\'arrosage intégrés'],
                ['Engazonnement', 'Semis, pose de gazon en rouleaux, regarnissage'],
              ] as [string, string][]).map(([titre, desc]) => (
                <div
                  key={titre}
                  className="rounded-xl border border-[#EDEDED] p-4 flex gap-3"
                >
                  <span
                    className="mt-1 flex-shrink-0 w-2 h-2 rounded-full"
                    style={{ backgroundColor: '#4A6320' }}
                    aria-hidden="true"
                  />
                  <div>
                    <p className="font-semibold text-sm mb-1" style={{ color: '#243238' }}>
                      {titre}
                    </p>
                    <p className="text-xs leading-relaxed" style={{ color: '#5C606B' }}>
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-sm leading-relaxed mt-4" style={{ color: '#2A2F33' }}>
              Le Prestataire peut réaliser toute prestation connexe à l&apos;aménagement et à
              l&apos;entretien des espaces verts selon les besoins du Client.
            </p>
          </div>

          {/* ── Article 4. Devis et commande ── */}
          <div className="mb-10">
            <h2
              className="font-display text-xl font-bold mb-4"
              style={{ color: '#243238' }}
            >
              Article 4. Devis et acceptation de la commande
            </h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#2A2F33' }}>
              Toute prestation fait l&apos;objet d&apos;un <strong>devis écrit, gratuit et détaillé</strong>,
              remis au Client avant toute intervention. Conformément à l&apos;article L.113-3 du Code
              de la consommation, le devis précise :
            </p>
            <ul className="space-y-1 text-sm ml-4 list-disc mb-4" style={{ color: '#2A2F33' }}>
              <li>La description détaillée des prestations et fournitures prévues ;</li>
              <li>Le prix unitaire hors taxes (HT) et le prix total HT et TTC ;</li>
              <li>Le taux de TVA applicable ;</li>
              <li>
                Les délais prévisionnels d&apos;intervention et les conditions d&apos;exécution ;
              </li>
              <li>
                La durée de validité de l&apos;offre (<strong>30 jours</strong> par défaut à compter
                de la date d&apos;émission, sauf mention contraire).
              </li>
            </ul>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#2A2F33' }}>
              Le devis devient contrat ferme dès sa <strong>signature par le Client</strong>{' '}
              accompagnée de la mention manuscrite « Bon pour accord » et du versement de
              l&apos;acompte prévu (article 6). Passé le délai de validité, le devis devient caduc et
              le Prestataire est libre de réviser ses tarifs.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: '#2A2F33' }}>
              Toute modification de la commande après acceptation du devis doit faire l&apos;objet
              d&apos;un avenant écrit signé par les deux parties.
            </p>
          </div>

          {/* ── Article 5. Tarifs et TVA ── */}
          <div className="mb-10">
            <h2
              className="font-display text-xl font-bold mb-4"
              style={{ color: '#243238' }}
            >
              Article 5. Tarifs et TVA
            </h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#2A2F33' }}>
              Les prix sont indiqués en euros, hors taxes (HT) et toutes taxes comprises (TTC).
              Le taux de TVA applicable est précisé sur chaque devis selon la nature de la
              prestation :
            </p>
            <div className="rounded-2xl border border-[#EDEDED] p-5 mb-4">
              <p className="text-sm font-semibold mb-3" style={{ color: '#243238' }}>
                Taux de TVA applicables aux prestations paysagères :
              </p>
              <ul className="space-y-3 text-sm" style={{ color: '#2A2F33' }}>
                {([
                  [
                    '20 %',
                    'Taux normal — création de jardins, travaux neufs, élagage, nouvelles installations d\'arrosage',
                  ],
                  [
                    '10 %',
                    'Taux réduit — travaux d\'entretien et d\'amélioration dans des logements achevés depuis plus de 2 ans (art. 279-0 bis du Code général des impôts)',
                  ],
                  [
                    '5,5 %',
                    'Taux super-réduit — certains travaux d\'amélioration de la qualité énergétique sous conditions (art. 278-0 bis du Code général des impôts)',
                  ],
                ] as [string, string][]).map(([taux, desc]) => (
                  <li key={taux} className="flex gap-3">
                    <span
                      className="font-mono font-bold flex-shrink-0 text-base"
                      style={{ color: '#4A6320' }}
                    >
                      {taux}
                    </span>
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: '#2A2F33' }}>
              Le Prestataire se réserve le droit de modifier ses tarifs à tout moment. Les prix
              applicables sont ceux en vigueur à la date de signature du devis par le Client.
            </p>
          </div>

          {/* ── Article 6. Paiement ── */}
          <div className="mb-10">
            <h2
              className="font-display text-xl font-bold mb-4"
              style={{ color: '#243238' }}
            >
              Article 6. Conditions de paiement
            </h2>
            <dl className="rounded-2xl border border-[#EDEDED] overflow-hidden mb-4">
              {([
                [
                  'Acompte à la commande',
                  '[À COMPLÉTER — ex. 30 %] du montant TTC à la signature du devis',
                ],
                [
                  'Facturation intermédiaire',
                  'Possible sur les chantiers de longue durée, selon modalités convenues au devis',
                ],
                [
                  'Solde',
                  'Paiement à réception de la facture finale — délai de règlement : [À COMPLÉTER — ex. 30 jours] (pour les professionnels B2B, délai maximum de 30 jours conformément à la loi LME, art. L.441-10 Code de commerce)',
                ],
              ] as [string, string][]).map(([label, value], idx) => (
                <div
                  key={label}
                  className="flex flex-col sm:flex-row gap-1 sm:gap-4 px-5 py-3 border-b border-[#EDEDED] last:border-0"
                  style={{ backgroundColor: idx % 2 === 0 ? '#ffffff' : '#F4F1E9' }}
                >
                  <dt
                    className="text-xs font-semibold uppercase tracking-wide flex-shrink-0 sm:w-56"
                    style={{ color: '#5C606B' }}
                  >
                    {label}
                  </dt>
                  <dd className="text-sm" style={{ color: '#2A2F33' }}>
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#2A2F33' }}>
              <strong>Modes de paiement acceptés :</strong> virement bancaire (coordonnées sur
              facture), chèque à l&apos;ordre de LM Espace Vert, espèces dans la limite légale de{' '}
              <strong>1 000 €</strong> pour les consommateurs (art. L.112-6 Code monétaire et
              financier).
            </p>
            <p className="text-sm leading-relaxed" style={{ color: '#2A2F33' }}>
              Tout retard de paiement entraîne de plein droit, dès le lendemain de la date
              d&apos;échéance et sans mise en demeure préalable, des{' '}
              <strong>pénalités de retard</strong> au taux de 3 fois le taux d&apos;intérêt légal
              en vigueur, ainsi qu&apos;une indemnité forfaitaire pour frais de recouvrement de{' '}
              <strong>40 €</strong> pour les contrats conclus avec des professionnels (art. L.441-10
              Code de commerce et D. n° 2012-1115 du 2 oct. 2012).
            </p>
          </div>

          {/* ── Article 7. Délais d'exécution ── */}
          <div className="mb-10">
            <h2
              className="font-display text-xl font-bold mb-4"
              style={{ color: '#243238' }}
            >
              Article 7. Délais d&apos;exécution
            </h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#2A2F33' }}>
              Les délais d&apos;intervention sont communiqués au Client lors de l&apos;établissement du
              devis et figurent sur celui-ci à titre indicatif, sauf stipulation contraire expresse
              convenue par écrit.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: '#2A2F33' }}>
              Les délais peuvent être prolongés en cas de force majeure au sens de l&apos;article
              1218 du Code civil (intempéries, conditions météorologiques défavorables,
              indisponibilité de végétaux ou de matériaux, grèves, événements épidémiques, etc.).
              Le Client en sera informé dans les meilleurs délais. Sauf accord exprès contraire,
              le dépassement des délais indicatifs ne saurait donner lieu à des pénalités ou à
              une résolution du contrat.
            </p>
          </div>

          {/* ── Article 8. Droit de rétractation ── */}
          <div className="mb-10">
            <h2
              className="font-display text-xl font-bold mb-4"
              style={{ color: '#243238' }}
            >
              Article 8. Droit de rétractation
            </h2>
            <div
              className="rounded-2xl p-5 mb-4"
              style={{
                backgroundColor: 'rgba(116,154,48,0.08)',
                border: '1px solid rgba(116,154,48,0.25)',
              }}
            >
              <p className="text-sm font-semibold mb-2" style={{ color: '#4A6320' }}>
                Applicable aux consommateurs — contrats conclus à distance ou hors établissement
              </p>
              <p className="text-sm leading-relaxed" style={{ color: '#2A2F33' }}>
                Conformément aux articles <strong>L.221-18 et suivants</strong> du Code de la
                consommation, le Client consommateur (personne physique agissant à des fins qui
                n&apos;entrent pas dans le cadre de son activité professionnelle) qui a conclu un
                contrat <strong>à distance</strong> (via le formulaire en ligne) ou{' '}
                <strong>hors établissement</strong> (à son domicile ou sur son lieu de travail)
                dispose d&apos;un délai de <strong>14 jours calendaires</strong> à compter de la
                conclusion du contrat pour exercer son droit de rétractation, sans motif ni pénalité.
              </p>
            </div>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#2A2F33' }}>
              Pour exercer ce droit, le Client doit notifier sa décision de se rétracter par
              courrier recommandé avec accusé de réception adressé à LM ESPACE VERT, 655 Route
              de Choisine, 07410 Colombier-le-Vieux, ou par email à{' '}
              <a href="mailto:contact@lmespacevert.fr" style={{ color: '#4A6320' }}>
                contact@lmespacevert.fr
              </a>
              , en utilisant le formulaire type de rétractation joint au devis (conformément à
              l&apos;annexe 2 du Code de la consommation) ou tout autre déclaration non équivoque.
            </p>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#2A2F33' }}>
              Si le Client consommateur demande expressément que l&apos;exécution des prestations
              commence avant la fin du délai de rétractation (art. L.221-28, 1° Code conso),
              il devra payer, en cas de rétractation exercée, un montant proportionnel aux
              prestations effectivement fournies jusqu&apos;à la date de rétractation.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: '#2A2F33' }}>
              <strong>Exception :</strong> le droit de rétractation ne s&apos;applique pas aux
              contrats de fourniture de services entièrement exécutés avant la fin du délai de
              rétractation et dont l&apos;exécution a commencé avec l&apos;accord préalable exprès du
              consommateur (art. L.221-28, 1° Code conso). Il ne s&apos;applique pas non plus aux
              contrats conclus dans l&apos;établissement du professionnel (art. L.221-2 Code conso).
            </p>
          </div>

          {/* ── Article 9. Garanties légales ── */}
          <div className="mb-10">
            <h2
              className="font-display text-xl font-bold mb-4"
              style={{ color: '#243238' }}
            >
              Article 9. Garanties légales
            </h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: '#2A2F33' }}>
              Le Prestataire est tenu aux garanties légales suivantes :
            </p>
            <div className="space-y-4">
              {([
                [
                  'Garantie de parfait achèvement (art. 1792-6 Code civil)',
                  'Pendant 1 an à compter de la réception des travaux, le Prestataire répare tous les désordres signalés par le Client par réserves émises au procès-verbal de réception ou par lettre recommandée dans ce délai.',
                ],
                [
                  'Garantie légale de conformité (art. L.217-4 et suivants Code conso — consommateurs)',
                  'Le Client consommateur peut invoquer la garantie légale de conformité pour les biens fournis (végétaux, matériaux) dans un délai de 2 ans à compter de leur délivrance. Le vendeur est présumé responsable des défauts de conformité présents lors de la délivrance.',
                ],
                [
                  'Garantie des vices cachés (art. 1641 et suivants Code civil)',
                  'Le Client peut agir en garantie des vices cachés dans les 2 ans à compter de la découverte du vice (art. 1648 Code civil), si ce vice rendait les fournitures impropres à l\'usage auquel elles étaient destinées.',
                ],
                [
                  'Garantie de reprise des végétaux',
                  'Les végétaux plantés par le Prestataire bénéficient d\'une garantie de reprise de 1 an à compter de la date de plantation, sous réserve que l\'entretien post-plantation ait été réalisé conformément aux préconisations écrites du Prestataire.',
                ],
              ] as [string, string][]).map(([titre, desc]) => (
                <div
                  key={titre}
                  className="rounded-xl border border-[#EDEDED] p-4"
                >
                  <p
                    className="font-semibold text-sm mb-2"
                    style={{ color: '#243238' }}
                  >
                    {titre}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: '#5C606B' }}>
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Article 10. Assurance RC Pro ── */}
          <div className="mb-10">
            <h2
              className="font-display text-xl font-bold mb-4"
              style={{ color: '#243238' }}
            >
              Article 10. Assurance responsabilité civile professionnelle
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: '#2A2F33' }}>
              Le Prestataire est couvert par une assurance{' '}
              <strong>Responsabilité Civile Professionnelle (RC Pro)</strong> souscrite auprès de{' '}
              [À COMPLÉTER — nom de l&apos;assureur], couvrant les dommages corporels, matériels et
              immatériels qui pourraient être causés aux tiers dans le cadre de l&apos;exécution des
              prestations. Sur demande, le Prestataire fournit une attestation d&apos;assurance.
            </p>
          </div>

          {/* ── Article 11. SAP ── */}
          <div className="mb-10">
            <h2
              className="font-display text-xl font-bold mb-4"
              style={{ color: '#243238' }}
            >
              Article 11. Service à la Personne — Crédit d&apos;impôt
            </h2>
            <div
              className="rounded-2xl p-5 mb-4"
              style={{
                backgroundColor: 'rgba(116,154,48,0.08)',
                border: '1px solid rgba(116,154,48,0.25)',
              }}
            >
              <p className="text-sm font-semibold mb-2" style={{ color: '#4A6320' }}>
                Crédit d&apos;impôt de 50 % sur les travaux d&apos;entretien (art. 199 sexdecies CGI)
              </p>
              <p className="text-sm leading-relaxed" style={{ color: '#2A2F33' }}>
                Les particuliers qui emploient un prestataire agréé Service à la Personne (SAP)
                pour l&apos;entretien de leur jardin bénéficient d&apos;un crédit d&apos;impôt égal à{' '}
                <strong>50 %</strong> des sommes effectivement versées (dans la limite des plafonds
                légaux en vigueur fixés par l&apos;article 199 sexdecies du Code général des impôts).
              </p>
            </div>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#2A2F33' }}>
              LM Espace Vert est agréée Service à la Personne pour les prestations d&apos;entretien
              des espaces verts des particuliers (numéro d&apos;agrément SAP :{' '}
              [À COMPLÉTER PAR LM ESPACE VERT]). Une attestation fiscale annuelle est délivrée
              au Client chaque année.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: '#2A2F33' }}>
              <strong>Avance immédiate du crédit d&apos;impôt :</strong> LM Espace Vert propose le
              dispositif d&apos;avance immédiate du crédit d&apos;impôt (art. 87 loi de finances 2020),
              permettant au Client éligible de ne payer que 50 % de la facture au moment de
              la prestation, le solde étant versé directement au Prestataire par l&apos;URSSAF.
              Renseignez-vous auprès de notre équipe pour en bénéficier.
            </p>
          </div>

          {/* ── Article 12. Réclamations ── */}
          <div className="mb-10">
            <h2
              className="font-display text-xl font-bold mb-4"
              style={{ color: '#243238' }}
            >
              Article 12. Réclamations
            </h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#2A2F33' }}>
              Toute réclamation relative à l&apos;exécution des prestations doit être adressée au
              Prestataire dans un délai de <strong>30 jours</strong> suivant la réception des
              travaux, par les moyens suivants :
            </p>
            <ul className="space-y-1 text-sm" style={{ color: '#2A2F33' }}>
              <li>
                Par email :{' '}
                <a href="mailto:contact@lmespacevert.fr" style={{ color: '#4A6320' }}>
                  contact@lmespacevert.fr
                </a>
              </li>
              <li>
                Par téléphone :{' '}
                <a href="tel:+33672587353" style={{ color: '#4A6320' }}>
                  +33 6 72 58 73 53
                </a>
              </li>
              <li>
                Par courrier recommandé : LM ESPACE VERT, 655 Route de Choisine, 07410
                Colombier-le-Vieux
              </li>
            </ul>
            <p className="text-sm leading-relaxed mt-3" style={{ color: '#2A2F33' }}>
              Le Prestataire s&apos;engage à accuser réception de la réclamation dans un délai de
              5 jours ouvrés et à apporter une réponse dans un délai de 30 jours calendaires.
            </p>
          </div>

          {/* ── Article 13. Médiation ── */}
          <div className="mb-10">
            <h2
              className="font-display text-xl font-bold mb-4"
              style={{ color: '#243238' }}
            >
              Article 13. Médiation de la consommation
            </h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#2A2F33' }}>
              Conformément à l&apos;article <strong>L.612-1 du Code de la consommation</strong>, en
              cas de litige non résolu après réclamation écrite adressée au Prestataire, le Client
              consommateur peut recourir gratuitement à la médiation de la consommation dans le
              délai d&apos;un an à compter de sa première réclamation, auprès de :
            </p>
            <div
              className="rounded-2xl border border-[#EDEDED] p-5 mb-4"
              style={{ color: '#2A2F33' }}
            >
              <p className="font-semibold text-sm mb-2">
                CNPM — MÉDIATION DE LA CONSOMMATION
              </p>
              <ul className="space-y-1 text-sm" style={{ color: '#5C606B' }}>
                <li>27, avenue de la Libération, 42400 Saint-Chamond</li>
                <li>
                  <a
                    href="https://www.cnpm-mediation-consommation.eu"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#4A6320' }}
                  >
                    www.cnpm-mediation-consommation.eu
                  </a>
                </li>
              </ul>
              <p className="text-xs mt-2" style={{ color: '#5C606B' }}>
                [À COMPLÉTER PAR LM ESPACE VERT si un autre médiateur sectoriel a été désigné]
              </p>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: '#2A2F33' }}>
              La médiation peut également être saisie via la plateforme européenne de règlement
              en ligne des litiges (RLL) :{' '}
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#4A6320' }}
              >
                ec.europa.eu/consumers/odr
              </a>
              . L&apos;adresse email du service client est{' '}
              <a href="mailto:contact@lmespacevert.fr" style={{ color: '#4A6320' }}>
                contact@lmespacevert.fr
              </a>
              .
            </p>
          </div>

          {/* ── Article 14. Données personnelles ── */}
          <div className="mb-10">
            <h2
              className="font-display text-xl font-bold mb-4"
              style={{ color: '#243238' }}
            >
              Article 14. Données personnelles (RGPD)
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: '#2A2F33' }}>
              Les données personnelles collectées dans le cadre de la relation contractuelle
              (identité, coordonnées, factures) sont traitées par LM ESPACE VERT en qualité de
              responsable de traitement, sur la base de l&apos;exécution du contrat (art. 6.1.b RGPD)
              et des obligations légales (art. 6.1.c RGPD). Elles sont conservées 10 ans pour
              les pièces comptables (art. L.123-22 Code de commerce). Pour l&apos;exercice de vos
              droits (accès, rectification, effacement, opposition, portabilité), consultez notre{' '}
              <Link href="/politique-confidentialite" style={{ color: '#4A6320' }}>
                Politique de confidentialité
              </Link>
              .
            </p>
          </div>

          {/* ── Article 15. Droit applicable ── */}
          <div className="mb-10">
            <h2
              className="font-display text-xl font-bold mb-4"
              style={{ color: '#243238' }}
            >
              Article 15. Droit applicable et compétence juridictionnelle
            </h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#2A2F33' }}>
              Les présentes CGV sont régies par le <strong>droit français</strong>, notamment le
              Code civil, le Code de la consommation, le Code de commerce et le Code général
              des impôts.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: '#2A2F33' }}>
              En cas de litige non résolu amiablement ou par médiation :
            </p>
            <ul className="space-y-1 text-sm ml-4 list-disc mt-2" style={{ color: '#2A2F33' }}>
              <li>
                Pour les contrats conclus avec des <strong>professionnels (B2B)</strong> : le
                tribunal compétent sera celui du siège social de LM ESPACE VERT ou tout tribunal
                désigné par accord des parties.
              </li>
              <li>
                Pour les contrats conclus avec des <strong>consommateurs (B2C)</strong> : la
                compétence est attribuée conformément aux règles d&apos;ordre public du Code de
                procédure civile (tribunal du domicile du défendeur ou lieu d&apos;exécution des
                travaux).
              </li>
            </ul>
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
