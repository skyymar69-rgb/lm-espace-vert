import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUp } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Mentions légales | LM Espace Vert',
  description:
    'Mentions légales du site lmespacevert.fr — éditeur, directeur de publication, hébergeur, réalisation, propriété intellectuelle, données personnelles et médiation. Conformes à la loi LCEN.',
  alternates: { canonical: 'https://www.lmespacevert.fr/mentions-legales' },
  robots: { index: false },
}

export default function MentionsLegalesPage() {
  return (
    <>
      {/* Breadcrumb */}
      <nav aria-label="Fil d'Ariane" className="border-b border-[#EDEDED] bg-white">
        <div className="container mx-auto max-w-7xl px-4 py-3 sm:px-6">
          <ol role="list" className="flex items-center gap-1.5 text-sm" style={{ color: '#5C606B' }}>
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
                Mentions légales
              </span>
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-12" style={{ backgroundColor: '#F4F1E9' }}>
        <div className="container mx-auto max-w-4xl px-4 sm:px-6">
          <h1
            className="font-display text-[clamp(2rem,4vw,3rem)] font-bold leading-tight"
            style={{ color: '#243238' }}
          >
            Mentions légales
          </h1>
          <p className="mt-3 text-base leading-[1.8]" style={{ color: '#5C606B' }}>
            Conformément aux articles 6-III et 19 de la loi n° 2004-575 du 21 juin 2004 pour la
            confiance dans l&apos;économie numérique (LCEN).
          </p>
        </div>
      </section>

      {/* Contenu principal */}
      <section className="bg-white py-12">
        <div
          className="container mx-auto max-w-4xl px-4 sm:px-6"
          style={{ lineHeight: '1.8', color: '#2A2F33' }}
        >

          {/* ── 1. Éditeur du site ── */}
          <div className="mb-10">
            <h2
              className="font-display text-xl font-bold mb-5"
              style={{ color: '#243238' }}
            >
              1. Éditeur du site
            </h2>
            <p className="mb-4 text-sm leading-relaxed" style={{ color: '#2A2F33' }}>
              Le site <strong>www.lmespacevert.fr</strong> est édité par :
            </p>
            <dl className="rounded-2xl border border-[#EDEDED] overflow-hidden">
              {([
                ['Raison sociale', 'LM ESPACE VERT'],
                ['Forme juridique', 'EURL (Entreprise Unipersonnelle à Responsabilité Limitée)'],
                ['Capital social', '400,00 €'],
                ['Dirigeant / Directeur de la publication', 'Léo Maurice, gérant'],
                ['SIREN', '999 206 816'],
                ['SIRET (siège)', '999 206 816 00012'],
                ['N° TVA intracommunautaire', 'FR69 999 206 816'],
                ['RCS', '999 206 816 R.C.S. Aubenas — immatriculé le 02/01/2026'],
                ['Code APE / NAF', '81.30Z — Services d\'aménagement paysager'],
                ['Siège social (siège légal)', '655 Route de Choisine, 07410 Colombier-le-Vieux'],
                ['Adresse d\'activité principale', 'Saint-Didier-au-Mont-d\'Or, 69370 Rhône'],
                ['Téléphone', '+33 6 72 58 73 53'],
                ['Email', 'contact@lmespacevert.fr'],
                ['Site web', 'https://www.lmespacevert.fr'],
                ['Assurance RC Pro', '[À COMPLÉTER PAR LM ESPACE VERT — nom de l\'assureur, n° de police, zone de couverture géographique]'],
              ] as [string, string][]).map(([label, value], idx) => (
                <div
                  key={label}
                  className="flex flex-col sm:flex-row gap-1 sm:gap-4 px-5 py-3 border-b border-[#EDEDED] last:border-0"
                  style={{ backgroundColor: idx % 2 === 0 ? '#ffffff' : '#F4F1E9' }}
                >
                  <dt
                    className="text-xs font-semibold uppercase tracking-wide flex-shrink-0 sm:w-72"
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
                    ) : label === 'Site web' ? (
                      <a
                        href="https://www.lmespacevert.fr"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: '#4A6320' }}
                      >
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

          {/* ── 2. Directeur de la publication ── */}
          <div className="mb-10">
            <h2
              className="font-display text-xl font-bold mb-4"
              style={{ color: '#243238' }}
            >
              2. Directeur de la publication
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: '#2A2F33' }}>
              Conformément à l&apos;article 6-III-1° de la LCEN, le directeur de la publication est{' '}
              <strong>Léo Maurice</strong>, gérant de la société LM ESPACE VERT, EURL immatriculée au
              RCS d&apos;Aubenas sous le numéro 999 206 816. Il peut être contacté à l&apos;adresse{' '}
              <a href="mailto:contact@lmespacevert.fr" style={{ color: '#4A6320' }}>
                contact@lmespacevert.fr
              </a>{' '}
              ou par téléphone au{' '}
              <a href="tel:+33672587353" style={{ color: '#4A6320' }}>
                +33 6 72 58 73 53
              </a>
              .
            </p>
          </div>

          {/* ── 3. Hébergeur ── */}
          <div className="mb-10">
            <h2
              className="font-display text-xl font-bold mb-4"
              style={{ color: '#243238' }}
            >
              3. Hébergeur
            </h2>
            <p className="mb-3 text-sm leading-relaxed" style={{ color: '#2A2F33' }}>
              Le site est hébergé par :
            </p>
            <div
              className="rounded-2xl border border-[#EDEDED] p-5 text-sm leading-relaxed"
              style={{ color: '#2A2F33' }}
            >
              <p className="font-semibold mb-1">Vercel Inc.</p>
              <p style={{ color: '#5C606B' }}>340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis</p>
              <p className="mt-1">
                <a
                  href="https://vercel.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#4A6320' }}
                >
                  vercel.com
                </a>
              </p>
            </div>
          </div>

          {/* ── 4. Conception et réalisation ── */}
          <div className="mb-10">
            <h2
              className="font-display text-xl font-bold mb-4"
              style={{ color: '#243238' }}
            >
              4. Conception et réalisation du site
            </h2>
            <p className="mb-3 text-sm leading-relaxed" style={{ color: '#2A2F33' }}>
              Le présent site a été conçu et développé par :
            </p>
            <dl className="rounded-2xl border border-[#EDEDED] overflow-hidden">
              {([
                ['Raison sociale', 'KAYZEN LYON'],
                ['Forme juridique', 'SASU (Société par Actions Simplifiée Unipersonnelle)'],
                ['SIREN', '999 418 346'],
                ['SIRET', '999 418 346 000 14'],
                ['RCS', 'Lyon — 999 418 346'],
                ['N° TVA intracommunautaire', 'FR85 999 418 346'],
                ['Code APE', '4791B'],
                ['Siège social', '6, rue Pierre Termier, 69009 Lyon'],
                ['Téléphone', '+33 (0)4 87 77 68 61'],
                ['Email', 'contact@kayzen-lyon.fr'],
                ['Site web', 'https://internet.kayzen-lyon.fr'],
              ] as [string, string][]).map(([label, value], idx) => (
                <div
                  key={label}
                  className="flex flex-col sm:flex-row gap-1 sm:gap-4 px-5 py-3 border-b border-[#EDEDED] last:border-0"
                  style={{ backgroundColor: idx % 2 === 0 ? '#ffffff' : '#F4F1E9' }}
                >
                  <dt
                    className="text-xs font-semibold uppercase tracking-wide flex-shrink-0 sm:w-72"
                    style={{ color: '#5C606B' }}
                  >
                    {label}
                  </dt>
                  <dd className="text-sm" style={{ color: '#2A2F33' }}>
                    {label === 'Email' ? (
                      <a href="mailto:contact@kayzen-lyon.fr" style={{ color: '#4A6320' }}>
                        {value}
                      </a>
                    ) : label === 'Site web' ? (
                      <a
                        href="https://internet.kayzen-lyon.fr"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: '#4A6320' }}
                      >
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

          {/* ── 5. Propriété intellectuelle ── */}
          <div className="mb-10">
            <h2
              className="font-display text-xl font-bold mb-4"
              style={{ color: '#243238' }}
            >
              5. Propriété intellectuelle et droits d&apos;auteur
            </h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#2A2F33' }}>
              © 2026 LM Espace Vert. Tous droits réservés.
            </p>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#2A2F33' }}>
              L&apos;ensemble des contenus diffusés sur le site (textes, articles, images, photographies,
              vidéos, logos, charte graphique, structure, code source) est la propriété exclusive de
              LM ESPACE VERT ou de ses partenaires, et est protégé par le{' '}
              <strong>Code de la propriété intellectuelle</strong> (articles L.111-1 et suivants).
              La charte graphique et le développement technique du site sont la propriété de KAYZEN
              LYON, concédés sous licence à LM ESPACE VERT.
            </p>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#2A2F33' }}>
              Toute reproduction, représentation, modification, publication ou adaptation de tout ou
              partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est
              interdite sans autorisation écrite préalable de LM ESPACE VERT, sous peine des
              sanctions prévues aux articles L.335-2 et suivants du Code de la propriété
              intellectuelle.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: '#2A2F33' }}>
              Les photographies présentes sur ce site sont la propriété de LM Espace Vert (photos
              de réalisations et chantiers), sauf mention contraire. Certaines images sont issues
              de la bibliothèque{' '}
              <a
                href="https://unsplash.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#4A6320' }}
              >
                Unsplash
              </a>{' '}
              (libre de droits, usage commercial autorisé). Les typographies utilisées sont
              distribuées sous licence SIL Open Font.
            </p>
          </div>

          {/* ── 6. Données personnelles ── */}
          <div className="mb-10">
            <h2
              className="font-display text-xl font-bold mb-4"
              style={{ color: '#243238' }}
            >
              6. Données personnelles
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: '#2A2F33' }}>
              Le traitement des données à caractère personnel collectées sur ce site est encadré par
              la{' '}
              <Link href="/politique-confidentialite" style={{ color: '#4A6320' }}>
                Politique de confidentialité
              </Link>
              , conformément au Règlement (UE) 2016/679 (RGPD) et à la loi n° 78-17 du
              6 janvier 1978 modifiée. Responsable de traitement : LM ESPACE VERT — Léo Maurice —
              <a href="mailto:contact@lmespacevert.fr" style={{ color: '#4A6320' }}>
                {' '}contact@lmespacevert.fr
              </a>
              .
            </p>
          </div>

          {/* ── 7. Cookies et traceurs ── */}
          <div className="mb-10">
            <h2
              className="font-display text-xl font-bold mb-4"
              style={{ color: '#243238' }}
            >
              7. Cookies et traceurs
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: '#2A2F33' }}>
              Le site utilise des cookies techniques nécessaires à son bon fonctionnement et un
              outil de mesure d&apos;audience (Vercel Analytics, anonymisé, exempté de consentement).
              Aucun traceur publicitaire ni cookie tiers n&apos;est déposé sans consentement préalable.
              Pour plus d&apos;informations et pour gérer vos préférences, consultez notre{' '}
              <Link href="/politique-cookies" style={{ color: '#4A6320' }}>
                Politique de cookies
              </Link>
              .
            </p>
          </div>

          {/* ── 8. Liens hypertextes ── */}
          <div className="mb-10">
            <h2
              className="font-display text-xl font-bold mb-4"
              style={{ color: '#243238' }}
            >
              8. Liens hypertextes
            </h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#2A2F33' }}>
              Le site <strong>www.lmespacevert.fr</strong> peut contenir des liens vers des sites
              Internet tiers fournis à titre indicatif. L&apos;éditeur n&apos;exerce aucun contrôle sur ces
              sites et décline toute responsabilité quant à leur contenu, leur disponibilité ou
              leur politique de confidentialité.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: '#2A2F33' }}>
              Tout site souhaitant établir un lien hypertexte pointant vers le site
              lmespacevert.fr doit en faire la demande préalable par email à{' '}
              <a href="mailto:contact@lmespacevert.fr" style={{ color: '#4A6320' }}>
                contact@lmespacevert.fr
              </a>
              . L&apos;éditeur se réserve le droit de refuser un lien sans avoir à en justifier le motif.
            </p>
          </div>

          {/* ── 9. Médiation de la consommation ── */}
          <div className="mb-10">
            <h2
              className="font-display text-xl font-bold mb-4"
              style={{ color: '#243238' }}
            >
              9. Médiation de la consommation
            </h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#2A2F33' }}>
              Conformément à l&apos;article L.612-1 du Code de la consommation, LM ESPACE VERT a adhéré
              au service du médiateur de la consommation suivant :
            </p>
            <div
              className="rounded-2xl border border-[#EDEDED] p-5 text-sm"
              style={{ color: '#2A2F33' }}
            >
              <p className="font-semibold mb-2">
                [À COMPLÉTER PAR LM ESPACE VERT — Nom et coordonnées du médiateur de la
                consommation compétent (ex. CNPM, MEDICYS, ou tout médiateur sectoriel agréé)]
              </p>
              <p style={{ color: '#5C606B' }}>
                En cas de litige non résolu après réclamation écrite adressée au Prestataire, le
                client consommateur peut recourir gratuitement à ce médiateur dans le délai d&apos;un an
                à compter de sa première réclamation écrite. La plateforme européenne de règlement
                en ligne des litiges (RLL) est également accessible à l&apos;adresse :{' '}
                <a
                  href="https://ec.europa.eu/consumers/odr"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#4A6320' }}
                >
                  ec.europa.eu/consumers/odr
                </a>
                .
              </p>
            </div>
          </div>

          {/* ── 10. Droit applicable ── */}
          <div className="mb-10">
            <h2
              className="font-display text-xl font-bold mb-4"
              style={{ color: '#243238' }}
            >
              10. Droit applicable et juridiction compétente
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: '#2A2F33' }}>
              Les présentes mentions légales sont régies par le <strong>droit français</strong>.
              En cas de litige relatif à leur interprétation ou à leur exécution, et à défaut de
              résolution amiable, les tribunaux de <strong>Lyon</strong> seront seuls compétents,
              sans préjudice des règles de compétence impératives applicables aux litiges avec des
              consommateurs.
            </p>
          </div>

          {/* Pied de page de la section */}
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
