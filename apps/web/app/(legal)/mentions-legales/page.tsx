import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mentions légales',
  description: 'Mentions légales du site LM Espace Vert, conformément à la loi LCEN.',
  robots: { index: false },
}

export default function MentionsLegalesPage() {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="font-display text-[clamp(2.25rem,5vw,3.75rem)] text-[--color-fg]">
        Mentions légales
      </h1>

      <div className="prose prose-neutral mt-10 max-w-none dark:prose-invert">
        <h2>1. Éditeur du site</h2>
        <p>
          Le site <strong>www.lmespacevert.fr</strong> est édité par :
        </p>
        <ul>
          <li><strong>Raison sociale :</strong> LM Espace Vert</li>
          <li><strong>Forme juridique :</strong> Auto-entrepreneur (micro-entreprise)</li>
          <li><strong>Dirigeant :</strong> Léo Maurice</li>
          <li><strong>SIRET :</strong> [À compléter — en attente d&apos;immatriculation]</li>
          <li><strong>Code APE / NAF :</strong> 8130Z – Services d&apos;aménagement paysager</li>
          <li><strong>Siège social :</strong> Saint-Didier-au-Mont-d&apos;Or, 69370 Rhône</li>
          <li><strong>Téléphone :</strong> <a href="tel:+33674734698">06 74 73 46 98</a></li>
          <li><strong>Email :</strong> <a href="mailto:contact@lmespacevert.fr">contact@lmespacevert.fr</a></li>
        </ul>

        <h2>2. Directeur de la publication</h2>
        <p>Léo Maurice, en qualité d&apos;auto-entrepreneur.</p>

        <h2>3. Hébergeur</h2>
        <p>Le site est hébergé par :</p>
        <ul>
          <li><strong>Vercel Inc.</strong></li>
          <li>440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</li>
          <li>Site : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">vercel.com</a></li>
          <li>DPO : privacy@vercel.com</li>
        </ul>
        <p>
          Les bases de données sont hébergées dans l'Union européenne.
        </p>

        <h2>4. Conception et réalisation</h2>
        <p>Le présent site a été conçu et développé par :</p>
        <ul>
          <li><strong>Raison sociale :</strong> KAYZEN LYON</li>
          <li><strong>Forme juridique :</strong> SASU</li>
          <li><strong>SIREN :</strong> 999 418 346 — RCS Lyon</li>
          <li><strong>N° TVA intracommunautaire :</strong> FR85 999 418 346</li>
          <li><strong>Siège social :</strong> 6, rue Pierre Termier — 69009 Lyon</li>
          <li><strong>Téléphone :</strong> +33 (0)4 87 77 68 61</li>
          <li><strong>Email :</strong> contact@kayzen-lyon.fr</li>
          <li><strong>Agence web :</strong> <a href="https://internet.kayzen-lyon.fr" target="_blank" rel="noopener noreferrer">internet.kayzen-lyon.fr</a></li>
        </ul>

        <h2>5. Propriété intellectuelle</h2>
        <p>
          L'ensemble des contenus diffusés sur le site (textes, images, photographies, vidéos,
          logos, charte graphique, structure, code source) est protégé par le{' '}
          <strong>Code de la propriété intellectuelle</strong>. Toute reproduction non autorisée
          est interdite sous peine des sanctions prévues aux articles L.335-2 et suivants.
        </p>

        <h2>6. Liens hypertextes</h2>
        <p>
          Le site peut contenir des liens vers des sites tiers. L'éditeur n'exerce aucun contrôle
          sur ces sites et décline toute responsabilité quant à leur contenu.
        </p>

        <h2>7. Responsabilité</h2>
        <p>
          L'éditeur met tout en œuvre pour fournir des informations exactes et à jour, mais ne
          saurait garantir l'exhaustivité ou l'actualité des informations diffusées.
        </p>

        <h2>8. Droit applicable</h2>
        <p>
          Les présentes mentions légales sont régies par le <strong>droit français</strong>.
          Tout litige relèvera de la compétence exclusive des tribunaux français.
        </p>

        <h2>9. Crédits</h2>
        <ul>
          <li>Conception graphique & développement : <a href="https://internet.kayzen-lyon.fr" target="_blank" rel="noopener noreferrer">Kayzen Web</a></li>
          <li>Photographies : LM Espace Vert (sauf mention contraire)</li>
          <li>Typographies : Newsreader & Inter (Google Fonts — licence SIL Open Font)</li>
        </ul>

        <p><em>Dernière mise à jour : mai 2026</em></p>
      </div>
    </div>
  )
}
