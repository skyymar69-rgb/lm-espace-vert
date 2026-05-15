import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Conditions générales de vente (CGV) | LM Espace Vert',
  description:
    'CGV de LM Espace Vert — paysagiste EURL. Devis, tarifs, TVA, paiement, droit de rétractation, garanties, Service à la Personne, médiation consommation.',
  alternates: { canonical: 'https://www.lmespacevert.fr/cgv' },
  robots: { index: true },
}

export default function CgvPage() {
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
            <li><span aria-current="page" style={{ color: '#2F2F2F' }}>CGV</span></li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-14" style={{ backgroundColor: '#F7F5F0' }}>
        <div className="container mx-auto max-w-4xl px-4 sm:px-6">
          <h1 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold" style={{ color: '#425D07' }}>
            Conditions générales de vente
          </h1>
          <p className="mt-3 text-base leading-relaxed" style={{ color: '#8C8F94' }}>
            Version en vigueur au 15 mai 2026 — Applicables aux particuliers (B2C) et aux professionnels (B2B)
          </p>
        </div>
      </section>

      {/* Contenu */}
      <section className="bg-white py-12">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6">

          {/* Article 1 */}
          <div className="mb-10">
            <h2 className="font-display text-xl font-bold mb-4" style={{ color: '#425D07' }}>
              Article 1. Objet et champ d&apos;application
            </h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#2F2F2F' }}>
              Les présentes conditions générales de vente (CGV) régissent l&apos;ensemble des relations
              contractuelles entre <strong>LM ESPACE VERT</strong> (ci-après « le Prestataire ») et
              toute personne physique ou morale (ci-après « le Client ») souhaitant bénéficier de ses
              prestations de services paysagers.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: '#2F2F2F' }}>
              Toute commande passée auprès du Prestataire implique l&apos;acceptation pleine et entière,
              sans réserve, des présentes CGV, qui prévalent sur tout autre document du Client, sauf
              convention expresse contraire signée par les deux parties. Les présentes CGV sont
              disponibles en permanence sur le site www.lmespacevert.fr.
            </p>
          </div>

          {/* Article 2 */}
          <div className="mb-10">
            <h2 className="font-display text-xl font-bold mb-4" style={{ color: '#425D07' }}>
              Article 2. Identité du professionnel
            </h2>
            <div className="rounded-2xl border border-[#EDEDED] overflow-hidden">
              {[
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
                ['Adresse d\'activité', 'Saint-Didier-au-Mont-d\'Or, 69370 Rhône'],
                ['Téléphone', '06 72 58 73 53'],
                ['Email', 'contact@lmespacevert.fr'],
              ].map(([label, value], idx) => (
                <div
                  key={label}
                  className="flex flex-col sm:flex-row gap-1 sm:gap-4 px-5 py-3 border-b border-[#EDEDED] last:border-0"
                  style={{ backgroundColor: idx % 2 === 0 ? '#ffffff' : '#FAFAF8' }}
                >
                  <dt className="text-xs font-semibold uppercase tracking-wide flex-shrink-0 sm:w-56" style={{ color: '#8C8F94' }}>{label}</dt>
                  <dd className="text-sm" style={{ color: '#2F2F2F' }}>
                    {label === 'Téléphone' ? (
                      <a href="tel:+33672587353" style={{ color: '#425D07' }}>{value}</a>
                    ) : label === 'Email' ? (
                      <a href="mailto:contact@lmespacevert.fr" style={{ color: '#425D07' }}>{value}</a>
                    ) : (
                      value
                    )}
                  </dd>
                </div>
              ))}
            </div>
          </div>

          {/* Article 3 */}
          <div className="mb-10">
            <h2 className="font-display text-xl font-bold mb-4" style={{ color: '#425D07' }}>
              Article 3. Services proposés
            </h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#2F2F2F' }}>
              Le Prestataire propose les prestations de services paysagers suivantes :
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                ['🌿', 'Création de jardins', 'Conception et réalisation d\'espaces verts, jardins privatifs et professionnels'],
                ['✂️', 'Entretien régulier', 'Tonte, taille, désherbage, soins saisonniers des espaces verts'],
                ['🪚', 'Élagage & Abattage', 'Élagage d\'arbres, abattage raisonné, broyage de rémanents'],
                ['🧱', 'Maçonnerie paysagère', 'Dallage, murets, allées, terrasses, escaliers extérieurs'],
                ['💧', 'Arrosage automatique', 'Installation et programmation de systèmes d\'arrosage intégrés'],
                ['🌱', 'Engazonnement', 'Semis, pose de gazon en rouleaux, regarnissage'],
              ].map(([icon, title, desc]) => (
                <div key={title} className="rounded-xl border border-[#EDEDED] p-4 flex gap-3">
                  <span className="text-xl flex-shrink-0">{icon}</span>
                  <div>
                    <p className="font-semibold text-sm mb-1" style={{ color: '#2F2F2F' }}>{title}</p>
                    <p className="text-xs leading-relaxed" style={{ color: '#8C8F94' }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-sm leading-relaxed mt-4" style={{ color: '#2F2F2F' }}>
              Cette liste n&apos;est pas exhaustive. Le Prestataire peut réaliser toute prestation connexe
              à l&apos;aménagement et à l&apos;entretien des espaces verts, selon les besoins du Client.
            </p>
          </div>

          {/* Article 4 */}
          <div className="mb-10">
            <h2 className="font-display text-xl font-bold mb-4" style={{ color: '#425D07' }}>
              Article 4. Devis et acceptation de la commande
            </h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#2F2F2F' }}>
              Toute prestation fait l&apos;objet d&apos;un <strong>devis écrit, gratuit et détaillé</strong>,
              remis au Client avant toute intervention. Le devis précise :
            </p>
            <ul className="space-y-1 text-sm ml-4 list-disc mb-3" style={{ color: '#2F2F2F' }}>
              <li>La description détaillée des prestations et fournitures prévues ;</li>
              <li>Le prix unitaire HT et le prix total HT et TTC ;</li>
              <li>Le taux de TVA applicable ;</li>
              <li>Les délais prévisionnels d&apos;intervention ;</li>
              <li>La durée de validité de l&apos;offre (30 jours par défaut à compter de la date d&apos;émission).</li>
            </ul>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#2F2F2F' }}>
              Le devis devient contrat ferme dès sa <strong>signature par le Client</strong> accompagnée
              de la mention manuscrite « Bon pour accord » et du versement de l&apos;acompte prévu.
              Passé le délai de validité, le devis devient caduc et le Prestataire est libre de réviser ses tarifs.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: '#2F2F2F' }}>
              Toute modification de la commande après acceptation du devis doit faire l&apos;objet d&apos;un
              avenant écrit signé par les deux parties.
            </p>
          </div>

          {/* Article 5 */}
          <div className="mb-10">
            <h2 className="font-display text-xl font-bold mb-4" style={{ color: '#425D07' }}>
              Article 5. Tarifs et TVA
            </h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#2F2F2F' }}>
              Les prix sont indiqués en euros, hors taxes (HT) et toutes taxes comprises (TTC).
            </p>
            <div className="rounded-2xl border border-[#EDEDED] p-5 mb-3">
              <p className="text-sm font-semibold mb-2" style={{ color: '#2F2F2F' }}>Taux de TVA applicables :</p>
              <ul className="space-y-2 text-sm" style={{ color: '#2F2F2F' }}>
                <li className="flex gap-2">
                  <span className="font-mono font-bold flex-shrink-0" style={{ color: '#425D07' }}>20 %</span>
                  <span>Taux normal — création de jardins, travaux neufs, élagage, nouvelles installations</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-mono font-bold flex-shrink-0" style={{ color: '#425D07' }}>10 %</span>
                  <span>Taux réduit — travaux d&apos;entretien et d&apos;amélioration dans des logements achevés depuis plus de 2 ans (art. 279-0 bis CGI)</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-mono font-bold flex-shrink-0" style={{ color: '#425D07' }}>5,5 %</span>
                  <span>Taux super-réduit — certains travaux d&apos;amélioration de la qualité énergétique sous conditions (art. 278-0 bis CGI)</span>
                </li>
              </ul>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: '#2F2F2F' }}>
              Le taux applicable est précisé sur chaque devis. Le Prestataire se réserve le droit
              de modifier ses tarifs à tout moment ; les prix applicables sont ceux en vigueur à la
              date de signature du devis.
            </p>
          </div>

          {/* Article 6 */}
          <div className="mb-10">
            <h2 className="font-display text-xl font-bold mb-4" style={{ color: '#425D07' }}>
              Article 6. Conditions de paiement
            </h2>
            <div className="rounded-2xl border border-[#EDEDED] overflow-hidden mb-4">
              {[
                ['Acompte à la commande', '30 % du montant TTC à la signature du devis'],
                ['Facturation intermédiaire', 'Possible sur les chantiers de longue durée, selon modalités convenues au devis'],
                ['Solde', 'Paiement à réception de la facture finale, délai de règlement : 30 jours (loi LME pour les professionnels)'],
              ].map(([label, value], idx) => (
                <div
                  key={label}
                  className="flex flex-col sm:flex-row gap-1 sm:gap-4 px-5 py-3 border-b border-[#EDEDED] last:border-0"
                  style={{ backgroundColor: idx % 2 === 0 ? '#ffffff' : '#FAFAF8' }}
                >
                  <dt className="text-xs font-semibold uppercase tracking-wide flex-shrink-0 sm:w-52" style={{ color: '#8C8F94' }}>{label}</dt>
                  <dd className="text-sm" style={{ color: '#2F2F2F' }}>{value}</dd>
                </div>
              ))}
            </div>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#2F2F2F' }}>
              <strong>Modes de paiement acceptés :</strong> virement bancaire (coordonnées sur facture),
              chèque à l&apos;ordre de LM Espace Vert, espèces dans la limite légale de <strong>1 000 €</strong>{' '}
              (art. L.112-6 Code monétaire et financier).
            </p>
            <p className="text-sm leading-relaxed" style={{ color: '#2F2F2F' }}>
              Tout retard de paiement entraîne de plein droit, dès le lendemain de la date d&apos;échéance,
              des <strong>pénalités de retard</strong> au taux de 3 fois le taux d&apos;intérêt légal,
              ainsi qu&apos;une indemnité forfaitaire pour frais de recouvrement de <strong>40 €</strong>{' '}
              (applicable aux contrats B2B — D. n° 2012-1115 du 2 oct. 2012).
            </p>
          </div>

          {/* Article 7 */}
          <div className="mb-10">
            <h2 className="font-display text-xl font-bold mb-4" style={{ color: '#425D07' }}>
              Article 7. Délais d&apos;exécution
            </h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#2F2F2F' }}>
              Les délais d&apos;intervention sont variables selon la nature et l&apos;ampleur du chantier.
              Ils sont communiqués au Client lors de l&apos;établissement du devis et figurent sur celui-ci
              à titre indicatif.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: '#2F2F2F' }}>
              Les délais peuvent être prolongés en cas de force majeure (intempéries, conditions
              météorologiques défavorables, indisponibilité de végétaux ou de matériaux, événements
              indépendants de la volonté du Prestataire). Le Client en sera informé dans les meilleurs
              délais. Le dépassement des délais indicatifs ne saurait donner lieu à des pénalités ou
              à une résolution du contrat, sauf accord exprès contraire.
            </p>
          </div>

          {/* Article 8 */}
          <div className="mb-10">
            <h2 className="font-display text-xl font-bold mb-4" style={{ color: '#425D07' }}>
              Article 8. Droit de rétractation
            </h2>
            <div className="rounded-2xl p-5 mb-4" style={{ backgroundColor: 'rgba(128,188,0,0.08)', border: '1px solid rgba(128,188,0,0.25)' }}>
              <p className="text-sm font-semibold mb-2" style={{ color: '#425D07' }}>
                Applicable aux consommateurs — contrats conclus à distance ou hors établissement
              </p>
              <p className="text-sm leading-relaxed" style={{ color: '#2F2F2F' }}>
                Conformément aux articles <strong>L.221-18 et suivants</strong> du Code de la consommation,
                le Client consommateur (personne physique agissant à des fins non professionnelles) qui a
                conclu un contrat à distance (via le formulaire en ligne) ou hors établissement (à son
                domicile ou sur son lieu de travail) dispose d&apos;un délai de <strong>14 jours calendaires</strong>{' '}
                à compter de la signature du devis pour exercer son droit de rétractation, sans motif ni pénalité.
              </p>
            </div>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#2F2F2F' }}>
              Pour exercer ce droit, le Client doit notifier sa décision au Prestataire avant l&apos;expiration
              du délai, par courrier recommandé avec accusé de réception à l&apos;adresse du siège ou par
              email à{' '}
              <a href="mailto:contact@lmespacevert.fr" style={{ color: '#425D07' }}>contact@lmespacevert.fr</a>{' '}
              en utilisant le formulaire de rétractation joint au devis ou tout autre déclaration
              non équivoque.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: '#2F2F2F' }}>
              Si le Client a expressément demandé le démarrage des travaux avant la fin du délai de
              rétractation (art. L.221-28 Code conso), il devra payer une somme proportionnelle aux
              prestations déjà réalisées à la date de rétractation.
            </p>
          </div>

          {/* Article 9 */}
          <div className="mb-10">
            <h2 className="font-display text-xl font-bold mb-4" style={{ color: '#425D07' }}>
              Article 9. Garanties légales
            </h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#2F2F2F' }}>
              Le Prestataire est tenu aux garanties légales suivantes :
            </p>
            <div className="space-y-4">
              <div className="rounded-xl border border-[#EDEDED] p-4">
                <p className="font-semibold text-sm mb-1" style={{ color: '#2F2F2F' }}>Garantie de parfait achèvement (art. 1792-6 Code civil)</p>
                <p className="text-sm leading-relaxed" style={{ color: '#8C8F94' }}>
                  Pendant <strong>1 an</strong> à compter de la réception des travaux, le Prestataire répare
                  tous les désordres signalés par le Client par réserves au procès-verbal de réception ou
                  par lettre recommandée.
                </p>
              </div>
              <div className="rounded-xl border border-[#EDEDED] p-4">
                <p className="font-semibold text-sm mb-1" style={{ color: '#2F2F2F' }}>Garantie de conformité (art. L.217-4 Code conso — pour les consommateurs)</p>
                <p className="text-sm leading-relaxed" style={{ color: '#8C8F94' }}>
                  Le Client consommateur peut invoquer la garantie légale de conformité pour les biens
                  fournis dans le cadre des prestations (végétaux, matériaux) dans un délai de 2 ans
                  à compter de leur livraison.
                </p>
              </div>
              <div className="rounded-xl border border-[#EDEDED] p-4">
                <p className="font-semibold text-sm mb-1" style={{ color: '#2F2F2F' }}>Garantie des vices cachés (art. 1641 et suivants Code civil)</p>
                <p className="text-sm leading-relaxed" style={{ color: '#8C8F94' }}>
                  Le Client peut agir en garantie des vices cachés dans les 2 ans à compter de la
                  découverte du vice, s&apos;il rend les fournitures impropres à l&apos;usage auquel elles
                  étaient destinées.
                </p>
              </div>
              <div className="rounded-xl border border-[#EDEDED] p-4">
                <p className="font-semibold text-sm mb-1" style={{ color: '#2F2F2F' }}>Garantie de reprise des végétaux</p>
                <p className="text-sm leading-relaxed" style={{ color: '#8C8F94' }}>
                  Les végétaux plantés par le Prestataire bénéficient d&apos;une garantie de reprise de
                  <strong> 1 an</strong> à compter de la date de plantation, sous réserve que l&apos;entretien
                  ait été réalisé conformément aux préconisations du Prestataire.
                </p>
              </div>
            </div>
          </div>

          {/* Article 10 */}
          <div className="mb-10">
            <h2 className="font-display text-xl font-bold mb-4" style={{ color: '#425D07' }}>
              Article 10. Assurance responsabilité civile professionnelle
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: '#2F2F2F' }}>
              Le Prestataire est couvert par une assurance <strong>Responsabilité Civile Professionnelle (RC Pro)</strong>{' '}
              souscrite auprès d&apos;une compagnie d&apos;assurance habilitée à exercer en France. Cette assurance
              couvre les dommages corporels, matériels et immatériels qui pourraient être causés aux
              tiers dans le cadre de l&apos;exécution des prestations. Sur demande du Client, le Prestataire
              peut fournir une attestation d&apos;assurance.
            </p>
          </div>

          {/* Article 11 */}
          <div className="mb-10">
            <h2 className="font-display text-xl font-bold mb-4" style={{ color: '#425D07' }}>
              Article 11. Service à la Personne (SAP) — Crédit d&apos;impôt
            </h2>
            <div className="rounded-2xl p-5 mb-4" style={{ backgroundColor: 'rgba(128,188,0,0.08)', border: '1px solid rgba(128,188,0,0.25)' }}>
              <p className="text-sm font-semibold mb-2" style={{ color: '#425D07' }}>
                Crédit d&apos;impôt de 50 % sur les travaux d&apos;entretien
              </p>
              <p className="text-sm leading-relaxed" style={{ color: '#2F2F2F' }}>
                Conformément à l&apos;article <strong>199 sexdecies du Code général des impôts</strong>,
                les particuliers qui emploient un prestataire agréé Service à la Personne pour l&apos;entretien
                de leur jardin bénéficient d&apos;un crédit d&apos;impôt égal à <strong>50 %</strong> des
                sommes effectivement versées (dans la limite des plafonds légaux en vigueur).
              </p>
            </div>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#2F2F2F' }}>
              LM Espace Vert est agréée Service à la Personne pour les prestations d&apos;entretien des
              espaces verts des particuliers. Une attestation fiscale annuelle (attestation NOVA /
              Cesu) est délivrée au Client chaque année pour lui permettre de faire valoir ce crédit
              d&apos;impôt dans sa déclaration de revenus.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: '#2F2F2F' }}>
              <strong>Avance immédiate du crédit d&apos;impôt :</strong> LM Espace Vert propose le
              dispositif d&apos;avance immédiate du crédit d&apos;impôt (art. 87 loi de finances 2020),
              permettant au Client de ne payer que 50 % de la facture au moment de la prestation.
              Le Prestataire perçoit le solde directement de l&apos;État via l&apos;URSSAF.
              Renseignez-vous auprès de notre équipe pour en bénéficier.
            </p>
          </div>

          {/* Article 12 */}
          <div className="mb-10">
            <h2 className="font-display text-xl font-bold mb-4" style={{ color: '#425D07' }}>
              Article 12. Réclamations
            </h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#2F2F2F' }}>
              Toute réclamation relative à l&apos;exécution des prestations doit être adressée au Prestataire
              dans un délai de <strong>30 jours</strong> suivant la réception des travaux, par les moyens suivants :
            </p>
            <ul className="space-y-1 text-sm" style={{ color: '#2F2F2F' }}>
              <li>Par email : <a href="mailto:contact@lmespacevert.fr" style={{ color: '#425D07' }}>contact@lmespacevert.fr</a></li>
              <li>Par téléphone : <a href="tel:+33672587353" style={{ color: '#425D07' }}>06 72 58 73 53</a></li>
              <li>Par courrier recommandé : LM ESPACE VERT, 655 Route de Choisine, 07410 Colombier-le-Vieux</li>
            </ul>
            <p className="text-sm leading-relaxed mt-3" style={{ color: '#2F2F2F' }}>
              Le Prestataire s&apos;engage à accuser réception de la réclamation dans un délai de 5 jours
              ouvrés et à apporter une réponse ou solution dans un délai de 30 jours calendaires.
            </p>
          </div>

          {/* Article 13 */}
          <div className="mb-10">
            <h2 className="font-display text-xl font-bold mb-4" style={{ color: '#425D07' }}>
              Article 13. Médiation de la consommation
            </h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#2F2F2F' }}>
              Conformément à l&apos;article <strong>L.612-1 du Code de la consommation</strong>, en cas de
              litige non résolu après réclamation écrite adressée au Prestataire, le Client consommateur
              peut recourir gratuitement à la médiation de la consommation auprès de :
            </p>
            <div className="rounded-2xl border border-[#EDEDED] p-5 mb-4">
              <p className="font-semibold text-sm mb-2" style={{ color: '#2F2F2F' }}>
                CNPM — MÉDIATION DE LA CONSOMMATION
              </p>
              <ul className="space-y-1 text-sm" style={{ color: '#8C8F94' }}>
                <li>27, avenue de la Libération, 42400 Saint-Chamond</li>
                <li>
                  <a href="https://www.cnpm-mediation-consommation.eu" target="_blank" rel="noopener noreferrer" style={{ color: '#425D07' }}>
                    www.cnpm-mediation-consommation.eu
                  </a>
                </li>
              </ul>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: '#2F2F2F' }}>
              La médiation peut également être saisie via la plateforme européenne de règlement en
              ligne des litiges (RLL) :{' '}
              <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" style={{ color: '#425D07' }}>
                ec.europa.eu/consumers/odr
              </a>.
            </p>
          </div>

          {/* Article 14 */}
          <div className="mb-10">
            <h2 className="font-display text-xl font-bold mb-4" style={{ color: '#425D07' }}>
              Article 14. Droit applicable et compétence juridictionnelle
            </h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#2F2F2F' }}>
              Les présentes CGV sont régies par le <strong>droit français</strong>, notamment le Code civil,
              le Code de la consommation et le Code général des impôts.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: '#2F2F2F' }}>
              En cas de litige non résolu amiablement ou par médiation, et pour les contrats conclus
              avec des professionnels (B2B), le tribunal compétent sera celui du siège social de LM
              ESPACE VERT. Pour les contrats conclus avec des consommateurs, la compétence est attribuée
              conformément aux règles du Code de procédure civile (tribunal du domicile du défendeur
              ou lieu d&apos;exécution des travaux).
            </p>
          </div>

          <p className="text-xs mt-8 pt-6 border-t border-[#EDEDED]" style={{ color: '#8C8F94' }}>
            Dernière mise à jour : 15 mai 2026
          </p>
        </div>
      </section>
    </>
  )
}
