import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Conditions générales de vente',
  description: 'CGV applicables aux prestations de LM Espace Vert.',
  robots: { index: false },
}

export default function CgvPage() {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="font-display text-[clamp(2.25rem,5vw,3.75rem)] text-[--color-fg]">
        Conditions générales de vente
      </h1>
      <div className="prose prose-neutral mt-10 max-w-none dark:prose-invert">
        <p className="lead">
          Applicables aux prestations d'aménagement, de création et d'entretien d'espaces verts
          proposées par LM Espace Vert à ses clients particuliers (B2C) et professionnels (B2B).
        </p>

        <h2>Article 1. Objet et champ d'application</h2>
        <p>
          Les présentes CGV régissent les relations contractuelles entre LM Espace Vert
          (« le Prestataire ») et toute personne (« le Client ») souhaitant bénéficier de ses
          prestations. Toute commande implique l'acceptation sans réserve des présentes CGV.
        </p>

        <h2>Article 2. Devis et commande</h2>
        <p>
          Toute prestation fait l'objet d'un <strong>devis écrit, gratuit et détaillé</strong>{' '}
          comprenant la description des prestations, le prix HT et TTC, la durée de validité
          (30 jours par défaut) et les délais prévisionnels.
        </p>
        <p>
          Le devis devient contrat dès sa <strong>signature</strong> accompagnée de la mention
          « Bon pour accord » et du versement éventuel de l'acompte.
        </p>

        <h2>Article 3. Prix et modalités de paiement</h2>
        <p>
          Le <strong>taux réduit de TVA</strong> (10 % ou 5,5 %) peut s'appliquer pour les travaux
          d'entretien dans les logements achevés depuis plus de 2 ans.
        </p>
        <ul>
          <li>Acompte de <strong>30 %</strong> à la signature</li>
          <li>Solde : paiement à réception de facture sous <strong>30 jours</strong> (Loi LME)</li>
          <li>Modes acceptés : virement, chèque, carte bancaire, espèces (≤ 1 000 €)</li>
          <li><strong>Pénalités de retard :</strong> 3 fois le taux légal + indemnité forfaitaire 40 € (B2B)</li>
        </ul>

        <h2>Article 4. Exécution des prestations</h2>
        <p>
          Le Prestataire s'engage à exécuter les prestations selon les règles de l'art. Les délais
          sont indicatifs et peuvent être affectés par des causes de force majeure (intempéries,
          indisponibilité de matériaux). Le Client s'engage à donner libre accès aux espaces concernés.
        </p>

        <h2>Article 5. Droit de rétractation (Client consommateur)</h2>
        <p>
          Conformément aux articles <strong>L.221-18 et suivants</strong> du Code de la
          consommation, le Client consommateur ayant conclu un contrat à distance ou hors
          établissement dispose d'un délai de <strong>14 jours</strong> pour exercer son droit
          de rétractation, sans motif ni pénalité.
        </p>

        <h2>Article 6. Garanties et responsabilité</h2>
        <ul>
          <li><strong>Garantie de parfait achèvement :</strong> 1 an à compter de la réception</li>
          <li><strong>Garantie de reprise (végétaux) :</strong> 1 an sous réserve d'entretien conforme</li>
          <li><strong>Assurance :</strong> RC Pro souscrite auprès de [À compléter]</li>
        </ul>

        <h2>Article 7. Réception des travaux</h2>
        <p>
          À l'achèvement des prestations, le Client procède à une réception formalisée par un
          procès-verbal signé. La réception sans réserve vaut acceptation pleine et entière.
        </p>

        <h2>Article 8. Réserve de propriété</h2>
        <p>
          Les fournitures restent la propriété du Prestataire jusqu'au complet paiement du prix
          (Loi n° 80-335 du 12 mai 1980).
        </p>

        <h2>Article 9. Médiation de la consommation</h2>
        <p>
          Conformément à l'article <strong>L.612-1</strong> du Code de la consommation, le Client
          consommateur peut recourir gratuitement à un médiateur :{' '}
          <strong>[À compléter — médiateur agréé]</strong>.
        </p>
        <p>
          Plateforme européenne :{' '}
          <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">
            ec.europa.eu/consumers/odr
          </a>
        </p>

        <h2>Article 10. Force majeure</h2>
        <p>
          Aucune des parties n'est responsable de l'inexécution due à un cas de force majeure
          tel que défini par l'article 1218 du Code civil.
        </p>

        <h2>Article 11. Droit applicable</h2>
        <p>
          Les présentes CGV sont régies par le <strong>droit français</strong>. Pour les litiges
          B2B, compétence exclusive du tribunal de [À compléter — siège du Prestataire].
        </p>

        <p><em>Dernière mise à jour : mai 2026</em></p>
      </div>
    </div>
  )
}
