import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUp } from 'lucide-react'

export const metadata: Metadata = {
  title: "Conditions générales d'utilisation (CGU) | LM Espace Vert",
  description:
    "Conditions générales d'utilisation du site www.lm-espace-vert.fr — paysagiste LM Espace Vert. Accès au site, propriété intellectuelle, données personnelles, droit applicable.",
  alternates: { canonical: 'https://www.lm-espace-vert.fr/cgu' },
  robots: { index: true },
}

export default function CguPage() {
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
                Conditions générales d&apos;utilisation
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
            Conditions générales d&apos;utilisation
          </h1>
          <p className="mt-3 text-base leading-relaxed" style={{ color: '#5C606B' }}>
            Version en vigueur au [DATE — À COMPLÉTER] — Applicables à tout utilisateur du site
            www.lm-espace-vert.fr
          </p>
        </div>
      </section>

      {/* Contenu principal */}
      <section className="bg-white py-12">
        <div
          className="container mx-auto max-w-4xl px-4 sm:px-6"
          style={{ lineHeight: '1.8', color: '#2A2F33' }}
        >

          {/* ── Article 1. Définitions ── */}
          <div className="mb-10">
            <h2
              className="font-display text-xl font-bold mb-4"
              style={{ color: '#243238' }}
            >
              Article 1. Définitions
            </h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#2A2F33' }}>
              Dans les présentes conditions générales d&apos;utilisation, les termes suivants ont la
              signification indiquée ci-après :
            </p>
            <ul className="space-y-3 text-sm" style={{ color: '#2A2F33' }}>
              {([
                [
                  '« Éditeur »',
                  'LM ESPACE VERT, EURL au capital de 400 €, immatriculée au RCS d\'Aubenas sous le numéro 999 206 816 (SIREN), dont le siège légal est situé 655 Route de Choisine, 07410 Colombier-le-Vieux, représentée par son gérant Léo Maurice.',
                ],
                [
                  '« Site »',
                  'Le site internet accessible à l\'adresse https://www.lm-espace-vert.fr et l\'ensemble de ses pages et fonctionnalités.',
                ],
                [
                  '« Utilisateur »',
                  'Toute personne physique ou morale accédant au Site et l\'utilisant, quel que soit le support utilisé (ordinateur, téléphone mobile, tablette, etc.).',
                ],
                [
                  '« Services »',
                  'L\'ensemble des fonctionnalités proposées sur le Site (formulaire de contact, formulaire de devis, présentation des prestations, blog informatif).',
                ],
                [
                  '« Consommateur »',
                  'Au sens de l\'article liminaire du Code de la consommation, toute personne physique qui agit à des fins qui n\'entrent pas dans le cadre de son activité commerciale, industrielle, artisanale, libérale ou agricole.',
                ],
              ] as [string, string][]).map(([terme, def]) => (
                <li
                  key={terme}
                  className="pl-4 border-l-2 leading-relaxed"
                  style={{ borderColor: '#749A30' }}
                >
                  <strong>{terme}</strong> : {def}
                </li>
              ))}
            </ul>
          </div>

          {/* ── Article 2. Objet et champ d'application ── */}
          <div className="mb-10">
            <h2
              className="font-display text-xl font-bold mb-4"
              style={{ color: '#243238' }}
            >
              Article 2. Objet et champ d&apos;application
            </h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#2A2F33' }}>
              Les présentes conditions générales d&apos;utilisation (CGU) ont pour objet de définir
              les modalités d&apos;accès et les conditions d&apos;utilisation du Site par tout Utilisateur,
              ainsi que les droits et obligations des parties.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: '#2A2F33' }}>
              Les CGU s&apos;appliquent à l&apos;ensemble des pages et services du Site. Elles complètent,
              sans s&apos;y substituer, les{' '}
              <Link href="/cgv" style={{ color: '#4A6320' }}>
                Conditions Générales de Vente (CGV)
              </Link>{' '}
              qui régissent les relations contractuelles entre l&apos;Éditeur et ses clients pour les
              prestations de paysagisme.
            </p>
          </div>

          {/* ── Article 3. Acceptation des CGU ── */}
          <div className="mb-10">
            <h2
              className="font-display text-xl font-bold mb-4"
              style={{ color: '#243238' }}
            >
              Article 3. Acceptation des CGU
            </h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#2A2F33' }}>
              L&apos;accès au Site et son utilisation impliquent l&apos;acceptation pleine, entière et sans
              réserve des présentes CGU. L&apos;Utilisateur est réputé les avoir acceptées dès sa
              première navigation sur le Site.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: '#2A2F33' }}>
              L&apos;Éditeur se réserve le droit de modifier les présentes CGU à tout moment, notamment
              pour les adapter aux évolutions du Site, de ses Services ou de la réglementation
              applicable. Les modifications entrent en vigueur dès leur mise en ligne. Il
              appartient à l&apos;Utilisateur de les consulter régulièrement, la date de dernière mise
              à jour figurant en bas de cette page.
            </p>
          </div>

          {/* ── Article 4. Description des services ── */}
          <div className="mb-10">
            <h2
              className="font-display text-xl font-bold mb-4"
              style={{ color: '#243238' }}
            >
              Article 4. Description des services en ligne
            </h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: '#2A2F33' }}>
              Le Site propose les services informationnels et interactifs suivants :
            </p>
            <ul className="space-y-3 text-sm" style={{ color: '#2A2F33' }}>
              {([
                [
                  '1',
                  'Présentation des prestations',
                  'Description des services proposés par LM Espace Vert (création de jardins, entretien, élagage, maçonnerie paysagère, arrosage automatique, engazonnement). Ces informations sont fournies à titre indicatif et ne constituent pas une offre ferme au sens de l\'article 1114 du Code civil.',
                ],
                [
                  '2',
                  'Formulaire de devis en ligne',
                  'Permet à l\'Utilisateur de soumettre une demande de devis gratuite. La soumission du formulaire constitue une prise de contact et ne vaut ni acceptation d\'une commande ni engagement contractuel. Le devis sera formalisé ultérieurement selon les modalités décrites aux CGV.',
                ],
                [
                  '3',
                  'Formulaire de contact',
                  'Permet d\'adresser toute question, réclamation ou demande d\'information à l\'Éditeur.',
                ],
                [
                  '4',
                  'Blog informatif',
                  'Publication d\'articles sur les thématiques du paysagisme et de l\'aménagement extérieur. Ces articles sont fournis à titre informatif et ne constituent pas un conseil professionnel individualisé.',
                ],
              ] as [string, string, string][]).map(([num, titre, desc]) => (
                <li key={num} className="flex gap-3">
                  <span
                    className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold text-white"
                    style={{ backgroundColor: '#4A6320' }}
                    aria-hidden="true"
                  >
                    {num}
                  </span>
                  <div>
                    <strong>{titre}</strong> — {desc}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Article 5. Accès au site ── */}
          <div className="mb-10">
            <h2
              className="font-display text-xl font-bold mb-4"
              style={{ color: '#243238' }}
            >
              Article 5. Accès au site
            </h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#2A2F33' }}>
              Le Site est accessible gratuitement à tout Utilisateur disposant d&apos;un accès à
              Internet. Les coûts d&apos;accès à Internet sont à la charge exclusive de l&apos;Utilisateur.
              L&apos;Éditeur ne saurait être tenu pour responsable de l&apos;inaccessibilité du Site pour
              des raisons liées à l&apos;opérateur de réseau de l&apos;Utilisateur.
            </p>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#2A2F33' }}>
              L&apos;Éditeur se réserve le droit de suspendre, limiter ou interrompre l&apos;accès au
              Site ou à certaines de ses fonctionnalités à tout moment, notamment pour des
              opérations de maintenance, de mise à jour ou d&apos;évolution, sans que cette
              interruption ouvre droit à une quelconque indemnité au profit de l&apos;Utilisateur.
            </p>
            <p className="text-sm leading-relaxed mb-2" style={{ color: '#2A2F33' }}>
              L&apos;Utilisateur s&apos;engage, lors de l&apos;utilisation du Site, à ne pas :
            </p>
            <ul className="space-y-1 text-sm ml-4 list-disc" style={{ color: '#2A2F33' }}>
              <li>
                Porter atteinte aux droits de propriété intellectuelle de l&apos;Éditeur ou de tiers ;
              </li>
              <li>
                Diffuser via les formulaires des contenus illicites, diffamatoires, injurieux,
                obscènes ou contraires à l&apos;ordre public et aux bonnes mœurs ;
              </li>
              <li>
                Tenter de porter atteinte à la sécurité, à l&apos;intégrité ou au fonctionnement
                du Site (attaques, injections SQL, XSS, etc.) ;
              </li>
              <li>
                Utiliser des robots, scripts ou dispositifs automatisés pour accéder au Site,
                le scraper ou en reproduire le contenu à grande échelle ;
              </li>
              <li>
                Collecter des données personnelles relatives à d&apos;autres utilisateurs du Site ;
              </li>
              <li>Usurper l&apos;identité d&apos;un tiers ou de l&apos;Éditeur.</li>
            </ul>
          </div>

          {/* ── Article 6. Propriété intellectuelle ── */}
          <div className="mb-10">
            <h2
              className="font-display text-xl font-bold mb-4"
              style={{ color: '#243238' }}
            >
              Article 6. Propriété intellectuelle
            </h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#2A2F33' }}>
              © 2026 LM Espace Vert. Tous droits réservés.
            </p>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#2A2F33' }}>
              L&apos;ensemble des éléments composant le Site (textes, images, photographies, logos,
              charte graphique, code source, architecture de l&apos;information) est protégé par les
              dispositions du Code de la propriété intellectuelle (articles L.111-1 et suivants
              pour le droit d&apos;auteur, articles L.711-1 et suivants pour les marques). Toute
              reproduction, représentation, modification, publication ou adaptation non autorisée
              est strictement interdite et susceptible d&apos;engager la responsabilité civile et
              pénale de son auteur.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: '#2A2F33' }}>
              Pour toute demande de reproduction ou d&apos;utilisation d&apos;un contenu du Site, contacter
              l&apos;Éditeur à{' '}
              <a href="mailto:contact@lm-espace-vert.fr" style={{ color: '#4A6320' }}>
                contact@lm-espace-vert.fr
              </a>
              .
            </p>
          </div>

          {/* ── Article 7. Responsabilité ── */}
          <div className="mb-10">
            <h2
              className="font-display text-xl font-bold mb-4"
              style={{ color: '#243238' }}
            >
              Article 7. Limitation de responsabilité
            </h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#2A2F33' }}>
              L&apos;Éditeur met tout en œuvre pour fournir des informations exactes, complètes et à
              jour sur le Site. Toutefois, il ne saurait garantir l&apos;exactitude, l&apos;exhaustivité ou
              l&apos;actualité de l&apos;ensemble des informations diffusées, et se réserve le droit de
              les modifier sans préavis.
            </p>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#2A2F33' }}>
              L&apos;Éditeur ne saurait être tenu responsable :
            </p>
            <ul className="space-y-1 text-sm ml-4 list-disc" style={{ color: '#2A2F33' }}>
              <li>
                Des dommages directs ou indirects résultant de l&apos;utilisation du Site ou de
                l&apos;impossibilité d&apos;y accéder ;
              </li>
              <li>
                Des interruptions temporaires d&apos;accès liées à des opérations techniques de
                maintenance ou à des événements de force majeure ;
              </li>
              <li>
                Des contenus de sites tiers accessibles depuis des liens hypertextes présents
                sur le Site ;
              </li>
              <li>
                D&apos;une utilisation non conforme des Services ou des informations publiées par
                l&apos;Utilisateur.
              </li>
            </ul>
            <p className="text-sm leading-relaxed mt-3" style={{ color: '#2A2F33' }}>
              Ces limitations de responsabilité ne s&apos;appliquent pas dans les cas où elles seraient
              contraires aux dispositions d&apos;ordre public protégeant les Consommateurs.
            </p>
          </div>

          {/* ── Article 8. Liens hypertextes ── */}
          <div className="mb-10">
            <h2
              className="font-display text-xl font-bold mb-4"
              style={{ color: '#243238' }}
            >
              Article 8. Liens hypertextes
            </h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#2A2F33' }}>
              Le Site peut contenir des liens vers des sites tiers fournis à titre indicatif.
              L&apos;Éditeur ne contrôle pas ces sites et décline toute responsabilité quant à leur
              contenu, disponibilité ou politique de confidentialité.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: '#2A2F33' }}>
              Tout site souhaitant établir un lien hypertexte pointant vers www.lm-espace-vert.fr
              doit en faire la demande préalable par email à{' '}
              <a href="mailto:contact@lm-espace-vert.fr" style={{ color: '#4A6320' }}>
                contact@lm-espace-vert.fr
              </a>
              . L&apos;Éditeur se réserve le droit de refuser sans avoir à en justifier le motif.
            </p>
          </div>

          {/* ── Article 9. Données personnelles et RGPD ── */}
          <div className="mb-10">
            <h2
              className="font-display text-xl font-bold mb-4"
              style={{ color: '#243238' }}
            >
              Article 9. Données personnelles et RGPD
            </h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#2A2F33' }}>
              LM ESPACE VERT est responsable du traitement des données personnelles collectées
              via le Site, en qualité de responsable de traitement au sens du Règlement (UE)
              2016/679 (RGPD). Les données collectées via les formulaires (nom, email, téléphone,
              code postal, message) sont traitées sur la base des mesures précontractuelles
              (art. 6.1.b RGPD) et conservées 3 ans à compter du dernier contact.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: '#2A2F33' }}>
              Pour l&apos;intégralité des informations relatives aux traitements de données, aux
              sous-traitants, aux transferts hors UE et à l&apos;exercice de vos droits (accès,
              rectification, effacement, opposition, portabilité, limitation), consultez notre{' '}
              <Link href="/politique-confidentialite" style={{ color: '#4A6320' }}>
                Politique de confidentialité
              </Link>
              .
            </p>
          </div>

          {/* ── Article 10. Cookies ── */}
          <div className="mb-10">
            <h2
              className="font-display text-xl font-bold mb-4"
              style={{ color: '#243238' }}
            >
              Article 10. Cookies
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: '#2A2F33' }}>
              Le Site utilise des cookies techniques nécessaires à son bon fonctionnement ainsi
              qu&apos;un outil de mesure d&apos;audience anonymisée (Vercel Analytics, exempté de
              consentement). Aucun cookie publicitaire ni traceur tiers n&apos;est déposé sans
              consentement préalable. Pour plus d&apos;informations et pour gérer vos préférences,
              consultez notre{' '}
              <Link href="/politique-cookies" style={{ color: '#4A6320' }}>
                Politique de cookies
              </Link>
              .
            </p>
          </div>

          {/* ── Article 11. Droit applicable ── */}
          <div className="mb-10">
            <h2
              className="font-display text-xl font-bold mb-4"
              style={{ color: '#243238' }}
            >
              Article 11. Droit applicable et compétence juridictionnelle
            </h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#2A2F33' }}>
              Les présentes CGU sont régies exclusivement par le <strong>droit français</strong>,
              notamment la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l&apos;économie
              numérique (LCEN), le Code civil et le Code de la consommation pour les utilisateurs
              ayant la qualité de Consommateur.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: '#2A2F33' }}>
              En cas de litige relatif à l&apos;interprétation ou à l&apos;exécution des présentes, les
              parties s&apos;efforceront de le résoudre à l&apos;amiable. À défaut d&apos;accord amiable dans
              un délai de 30 jours, les tribunaux de <strong>Lyon</strong> seront seuls compétents
              pour les litiges avec des professionnels. Pour les litiges avec des Consommateurs,
              la compétence est déterminée conformément aux règles du Code de procédure civile.
            </p>
          </div>

          {/* ── Article 12. Contact ── */}
          <div className="mb-10">
            <h2
              className="font-display text-xl font-bold mb-4"
              style={{ color: '#243238' }}
            >
              Article 12. Contact
            </h2>
            <p className="text-sm leading-relaxed mb-2" style={{ color: '#2A2F33' }}>
              Pour toute question relative aux présentes CGU ou à l&apos;utilisation du Site,
              l&apos;Utilisateur peut contacter l&apos;Éditeur :
            </p>
            <ul className="space-y-1 text-sm" style={{ color: '#2A2F33' }}>
              <li>
                Par email :{' '}
                <a href="mailto:contact@lm-espace-vert.fr" style={{ color: '#4A6320' }}>
                  contact@lm-espace-vert.fr
                </a>
              </li>
              <li>
                Par téléphone :{' '}
                <a href="tel:+33672587353" style={{ color: '#4A6320' }}>
                  +33 6 72 58 73 53
                </a>
              </li>
              <li>
                Par courrier : LM ESPACE VERT, 655 Route de Choisine, 07410 Colombier-le-Vieux
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
