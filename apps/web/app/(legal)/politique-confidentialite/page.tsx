import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Politique de confidentialité',
  description: 'Politique de protection des données personnelles de LM Espace Vert, conformément au RGPD.',
  robots: { index: false },
}

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="font-display text-[clamp(2.25rem,5vw,3.75rem)] text-[--color-fg]">
        Politique de confidentialité
      </h1>

      <div className="prose prose-neutral mt-10 max-w-none dark:prose-invert">
        <p>
          LM Espace Vert s'engage à protéger la vie privée des utilisateurs de son site,
          conformément au <strong>Règlement (UE) 2016/679 (RGPD)</strong> et à la{' '}
          <strong>loi n° 78-17 du 6 janvier 1978 modifiée</strong>.
        </p>

        <h2>1. Responsable du traitement</h2>
        <p>
          <strong>LM Espace Vert</strong> — [adresse] — contact@lmespacevert.fr
          <br />SIREN : [À compléter]
        </p>

        <h2>2. Données collectées et finalités</h2>
        <div className="overflow-x-auto">
          <table>
            <thead>
              <tr>
                <th>Donnée</th>
                <th>Finalité</th>
                <th>Base légale</th>
                <th>Conservation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Nom, prénom, email, téléphone, code postal, message (formulaire contact / devis)</td>
                <td>Répondre à la demande, établir un devis</td>
                <td>Mesures précontractuelles (art. 6.1.b RGPD)</td>
                <td>3 ans à compter du dernier contact</td>
              </tr>
              <tr>
                <td>Identification client + factures</td>
                <td>Exécution du contrat + obligations comptables</td>
                <td>Contrat + obligation légale (art. 6.1.b / 6.1.c)</td>
                <td>10 ans (Code de commerce, art. L.123-22)</td>
              </tr>
              <tr>
                <td>Email (newsletter)</td>
                <td>Envoi d'informations commerciales</td>
                <td>Consentement (art. 6.1.a)</td>
                <td>Jusqu'au désabonnement ou 3 ans d'inactivité</td>
              </tr>
              <tr>
                <td>Adresse IP, logs techniques</td>
                <td>Sécurité, prévention de la fraude</td>
                <td>Intérêt légitime (art. 6.1.f)</td>
                <td>1 an</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>3. Destinataires des données</h2>
        <p>Les données sont destinées au personnel habilité de LM Espace Vert et aux sous-traitants techniques encadrés par des contrats (art. 28 RGPD) :</p>
        <ul>
          <li><strong>Vercel Inc.</strong> (hébergement) — CCT UE</li>
          <li><strong>Resend</strong> (envoi emails transactionnels)</li>
          <li><strong>Neon / Supabase</strong> (base de données — UE)</li>
          <li><strong>Plausible Analytics</strong> (statistiques — UE)</li>
          <li><strong>Kayzen Lyon</strong> (maintenance — UE)</li>
        </ul>
        <p>Aucune donnée n'est revendue ni transmise à des tiers à des fins commerciales.</p>

        <h2>4. Transferts hors Union européenne</h2>
        <p>
          Les services Vercel et Resend peuvent impliquer un traitement aux États-Unis,
          encadré par les <strong>Clauses Contractuelles Types</strong> approuvées par la
          Commission européenne (décision 2021/914) et, si applicable, par le{' '}
          <strong>Data Privacy Framework (DPF)</strong>.
        </p>

        <h2>5. Vos droits</h2>
        <p>Conformément aux articles 15 à 22 du RGPD, vous disposez des droits suivants :</p>
        <ul>
          <li>Droit d'accès à vos données</li>
          <li>Droit de rectification des données inexactes</li>
          <li>Droit à l'effacement (« droit à l'oubli »)</li>
          <li>Droit à la limitation du traitement</li>
          <li>Droit à la portabilité de vos données</li>
          <li>Droit d'opposition, y compris à la prospection commerciale</li>
          <li>Droit de retirer votre consentement à tout moment</li>
          <li>Droit de définir des directives relatives au sort de vos données après votre décès (art. 85 LIL)</li>
        </ul>
        <p>
          <strong>Pour exercer ces droits :</strong> adressez votre demande à{' '}
          <a href="mailto:contact@lmespacevert.fr">contact@lmespacevert.fr</a> en précisant
          l'objet et en joignant une copie d'un titre d'identité. Réponse sous <strong>un mois</strong>.
        </p>
        <p>
          Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation
          auprès de la <strong>CNIL</strong> (3 place de Fontenoy — 75334 Paris Cedex 07 —{' '}
          <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">www.cnil.fr</a>).
        </p>

        <h2>6. Sécurité</h2>
        <p>
          LM Espace Vert met en œuvre les mesures appropriées (chiffrement TLS 1.3, contrôles d'accès,
          sauvegardes, authentification forte, journalisation) pour garantir la confidentialité,
          l'intégrité et la disponibilité des données.
        </p>

        <p><em>Dernière mise à jour : mai 2026</em></p>
      </div>
    </div>
  )
}
