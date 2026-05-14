import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Déclaration d'accessibilité",
  description: "Déclaration d'accessibilité RGAA de LM Espace Vert.",
}

export default function AccessibilitePage() {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="font-display text-[clamp(2.25rem,5vw,3.75rem)] text-[--color-fg]">
        Déclaration d'accessibilité
      </h1>
      <div className="prose prose-neutral mt-10 max-w-none dark:prose-invert">
        <p>
          LM Espace Vert s'engage à rendre son site internet accessible conformément à
          l'article 47 de la <strong>loi n° 2005-102 du 11 février 2005</strong> et à
          l'<strong>European Accessibility Act</strong> (Directive UE 2019/882).
        </p>

        <p>Cette déclaration s'applique au site <strong>www.lmespacevert.fr</strong>.</p>

        <h2>État de conformité</h2>
        <p>
          Le site <strong>www.lmespacevert.fr</strong> est{' '}
          <strong>partiellement conforme</strong> avec le{' '}
          <strong>RGAA version 4.1.2</strong> et <strong>WCAG 2.2 niveau AA</strong>.
        </p>

        <h2>Résultats des tests</h2>
        <p>
          L'audit de conformité a été réalisé lors de la mise en ligne du site en 2026 par
          Kayzen Lyon. Les résultats seront publiés après audit complet.
        </p>

        <h2>Technologies utilisées</h2>
        <ul>
          <li>HTML5</li>
          <li>CSS3 (Tailwind CSS v4)</li>
          <li>JavaScript / TypeScript (Next.js 15)</li>
          <li>SVG</li>
        </ul>

        <h2>Agents utilisateurs et outils de vérification</h2>
        <ul>
          <li>Navigateurs : Firefox, Chrome, Safari, Edge</li>
          <li>Lecteurs d'écran : NVDA (Windows), VoiceOver (macOS/iOS)</li>
          <li>Outils : axe DevTools, Wave, Lighthouse, Pa11y</li>
        </ul>

        <h2>Retour d'information et contact</h2>
        <p>
          Si vous n'arrivez pas à accéder à un contenu ou un service, vous pouvez contacter
          le responsable du site pour être orienté vers une alternative accessible :
        </p>
        <ul>
          <li>Email : <a href="mailto:accessibilite@lmespacevert.fr">accessibilite@lmespacevert.fr</a></li>
          <li>Téléphone : [À compléter]</li>
        </ul>

        <h2>Voies de recours</h2>
        <p>
          Si vous constatez un défaut d'accessibilité vous empêchant d'accéder à un contenu
          et que vous n'obtenez pas de réponse rapide, vous pouvez saisir le{' '}
          <strong>Défenseur des droits</strong> :
        </p>
        <ul>
          <li>
            En ligne :{' '}
            <a href="https://formulaire.defenseurdesdroits.fr/" target="_blank" rel="noopener noreferrer">
              formulaire.defenseurdesdroits.fr
            </a>
          </li>
          <li>Par courrier : Défenseur des droits — Libre réponse 71120 — 75342 Paris CEDEX 07</li>
          <li>Par téléphone : 09 69 39 00 00</li>
        </ul>

        <p><em>Déclaration établie le : mai 2026</em></p>
      </div>
    </div>
  )
}
