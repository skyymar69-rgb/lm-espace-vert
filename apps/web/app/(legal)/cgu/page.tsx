import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Conditions générales d'utilisation",
  description: "CGU du site LM Espace Vert.",
  robots: { index: false },
}

export default function CguPage() {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="font-display text-[clamp(2.25rem,5vw,3.75rem)] text-[--color-fg]">
        Conditions générales d'utilisation
      </h1>
      <div className="prose prose-neutral mt-10 max-w-none dark:prose-invert">
        <h2>Article 1. Objet</h2>
        <p>
          Les présentes CGU ont pour objet de définir les conditions d'utilisation du site{' '}
          <strong>www.lmespacevert.fr</strong>. L'accès au site implique l'acceptation pleine et
          entière des présentes CGU.
        </p>

        <h2>Article 2. Accès au site</h2>
        <p>
          Le site est accessible gratuitement à tout utilisateur disposant d'un accès à Internet.
          L'éditeur se réserve le droit d'interrompre temporairement le site pour maintenance.
        </p>

        <h2>Article 3. Utilisation conforme</h2>
        <p>L'utilisateur s'interdit notamment :</p>
        <ul>
          <li>De porter atteinte aux droits de propriété intellectuelle</li>
          <li>De diffuser des contenus illicites</li>
          <li>De tenter de porter atteinte à la sécurité du site</li>
          <li>D'utiliser des robots ou dispositifs automatisés</li>
        </ul>

        <h2>Article 4. Données personnelles</h2>
        <p>
          Le traitement des données personnelles est encadré par la{' '}
          <a href="/politique-confidentialite">Politique de confidentialité</a>.
        </p>

        <h2>Article 5. Cookies</h2>
        <p>Voir la <a href="/politique-cookies">Politique de cookies</a>.</p>

        <h2>Article 6. Propriété intellectuelle</h2>
        <p>Voir l'article 5 des <a href="/mentions-legales">Mentions légales</a>.</p>

        <h2>Article 7. Responsabilité</h2>
        <p>
          L'éditeur ne saurait être tenu responsable des erreurs, de l'indisponibilité temporaire
          du site, ou des dommages résultant de son utilisation.
        </p>

        <h2>Article 8. Loi applicable et juridiction</h2>
        <p>
          Les présentes CGU sont soumises au <strong>droit français</strong>. Tout litige relèvera,
          à défaut de résolution amiable, des tribunaux français compétents.
        </p>

        <p><em>Dernière mise à jour : mai 2026</em></p>
      </div>
    </div>
  )
}
