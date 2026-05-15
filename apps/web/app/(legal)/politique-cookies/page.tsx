import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Politique de cookies',
  description: 'Politique de cookies de LM Espace Vert, conforme à la recommandation CNIL.',
  robots: { index: false },
}

export default function PolitiqueCookiesPage() {
  return (
    <>
      {/* Breadcrumb */}
      <nav aria-label="Fil d'Ariane" className="border-b border-[#EDEDED] bg-white">
        <div className="container mx-auto max-w-7xl px-4 py-3 sm:px-6">
          <ol role="list" className="flex items-center gap-1.5 text-sm" style={{ color: '#8C8F94' }}>
            <li>
              <Link href="/" className="transition-colors hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#80BC00]" style={{ color: '#8C8F94' }}>Accueil</Link>
            </li>
            <li aria-hidden="true" className="select-none">›</li>
            <li><span aria-current="page" className="font-medium" style={{ color: '#2F2F2F' }}>Politique de cookies</span></li>
          </ol>
        </div>
      </nav>

    <div className="container mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="font-display text-[clamp(2.25rem,5vw,3.75rem)] text-[--color-fg]">
        Politique de cookies
      </h1>
      <div className="prose prose-neutral mt-10 max-w-none dark:prose-invert">
        <h2>1. Qu'est-ce qu'un cookie ?</h2>
        <p>
          Un cookie est un fichier déposé sur votre terminal lors de la consultation d'un site,
          qui permet de reconnaître votre navigateur et de stocker certaines informations.
        </p>

        <h2>2. Cookies utilisés sur ce site</h2>

        <h3>2.1 Cookies strictement nécessaires (pas de consentement requis)</h3>
        <div className="overflow-x-auto">
          <table>
            <thead>
              <tr><th>Nom</th><th>Finalité</th><th>Durée</th></tr>
            </thead>
            <tbody>
              <tr><td><code>theme</code></td><td>Mémoriser votre préférence d'affichage (clair/sombre)</td><td>1 an</td></tr>
              <tr><td><code>a11y-font</code></td><td>Mémoriser votre préférence de taille de texte (accessibilité)</td><td>1 an</td></tr>
              <tr><td><code>__Host-csrf</code></td><td>Sécurité (prévention CSRF)</td><td>Session</td></tr>
              <tr><td><code>cookie-consent</code></td><td>Mémoriser vos choix relatifs aux cookies (bannière de consentement)</td><td>6 mois</td></tr>
            </tbody>
          </table>
        </div>

        <h3>2.2 Cookies de mesure d'audience</h3>
        <p>
          Le site utilise <strong>Plausible Analytics</strong> (auto-hébergé en UE), qui ne dépose{' '}
          <strong>pas de cookie</strong> et n'utilise pas d'identifiant persistant. Conformément à
          la position de la CNIL, cette mesure d'audience est <strong>exemptée de consentement</strong>.
        </p>

        <h3>2.3 Cookies tiers (consentement requis)</h3>
        <p>
          Aucun cookie tiers n'est déposé sans votre consentement explicite.
          Aucun pixel Facebook, Google Ads ou autre traceur publicitaire n'est utilisé.
        </p>

        <h2>3. Gestion de vos préférences</h2>
        <p>
          Lors de votre première visite, un bandeau vous permet d'<strong>accepter</strong>,
          de <strong>refuser</strong>, ou de <strong>personnaliser</strong> vos choix.
          Vous pouvez modifier vos choix à tout moment via le lien{' '}
          <strong>« Gérer mes cookies »</strong> présent dans le pied de page.
        </p>

        <h2>4. Durée de conservation des choix</h2>
        <p>
          Vos choix sont conservés <strong>6 mois</strong>, conformément à la recommandation CNIL.
          Passé ce délai, votre consentement vous sera de nouveau demandé.
        </p>

        <p><em>Dernière mise à jour : mai 2026</em></p>
      </div>
    </div>
    </>
  )
}
