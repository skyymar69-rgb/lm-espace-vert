import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Mentions légales | LM Espace Vert',
  description: 'Mentions légales du site lmespacevert.fr — éditeur, hébergeur, propriété intellectuelle, données personnelles, conformément à la loi LCEN.',
  alternates: { canonical: 'https://www.lmespacevert.fr/mentions-legales' },
  robots: { index: false },
}

export default function MentionsLegalesPage() {
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
            <li><span aria-current="page" style={{ color: '#2F2F2F' }}>Mentions légales</span></li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-14" style={{ backgroundColor: '#F7F5F0' }}>
        <div className="container mx-auto max-w-4xl px-4 sm:px-6">
          <h1 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold" style={{ color: '#425D07' }}>
            Mentions légales
          </h1>
          <p className="mt-3 text-base leading-relaxed" style={{ color: '#8C8F94' }}>
            Conformément aux articles 6-III et 19 de la loi n° 2004-575 du 21 juin 2004
            pour la confiance dans l&apos;économie numérique (LCEN).
          </p>
        </div>
      </section>

      {/* Contenu */}
      <section className="bg-white py-12">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6">

          {/* Section 1 */}
          <div className="mb-10">
            <h2 className="font-display text-xl font-bold mb-5" style={{ color: '#425D07' }}>
              1. Éditeur du site
            </h2>
            <p className="mb-3 text-sm leading-relaxed" style={{ color: '#2F2F2F' }}>
              Le site <strong>www.lmespacevert.fr</strong> est édité par :
            </p>
            <div className="rounded-2xl border border-[#EDEDED] overflow-hidden">
              {[
                ['Raison sociale', 'LM ESPACE VERT'],
                ['Forme juridique', 'EURL (Entreprise Unipersonnelle à Responsabilité Limitée)'],
                ['Capital social', '400,00 €'],
                ['Dirigeant', 'Maurice Leo (Léo Maurice), gérant'],
                ['SIREN', '999 206 816'],
                ['SIRET (siège)', '999 206 816 00012'],
                ['N° TVA intracommunautaire', 'FR69 999 206 816'],
                ['RCS', '999 206 816 R.C.S. Aubenas — Greffe d\'Aubenas, immatriculé le 02/01/2026'],
                ['Code APE / NAF', '81.30Z — Services d\'aménagement paysager'],
                ['Siège social (siège légal)', '655 Route de Choisine, 07410 Colombier-le-Vieux'],
                ['Adresse d\'activité principale', 'Saint-Didier-au-Mont-d\'Or, 69370 Rhône'],
                ['Date de clôture de l\'exercice', '31 décembre 2026'],
                ['Téléphone', '06 72 58 73 53'],
                ['Email', 'contact@lmespacevert.fr'],
                ['Site web', 'https://www.lmespacevert.fr'],
              ].map(([label, value], idx) => (
                <div
                  key={label}
                  className="flex flex-col sm:flex-row gap-1 sm:gap-4 px-5 py-3 border-b border-[#EDEDED] last:border-0"
                  style={{ backgroundColor: idx % 2 === 0 ? '#ffffff' : '#FAFAF8' }}
                >
                  <dt className="text-xs font-semibold uppercase tracking-wide flex-shrink-0 sm:w-64" style={{ color: '#8C8F94' }}>{label}</dt>
                  <dd className="text-sm" style={{ color: '#2F2F2F' }}>
                    {label === 'Téléphone' ? (
                      <a href="tel:+33672587353" style={{ color: '#425D07' }}>{value}</a>
                    ) : label === 'Email' ? (
                      <a href="mailto:contact@lmespacevert.fr" style={{ color: '#425D07' }}>{value}</a>
                    ) : label === 'Site web' ? (
                      <a href="https://www.lmespacevert.fr" target="_blank" rel="noopener noreferrer" style={{ color: '#425D07' }}>{value}</a>
                    ) : (
                      value
                    )}
                  </dd>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2 */}
          <div className="mb-10">
            <h2 className="font-display text-xl font-bold mb-4" style={{ color: '#425D07' }}>
              2. Directeur de la publication
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: '#2F2F2F' }}>
              Le directeur de la publication est <strong>Léo Maurice</strong>, gérant de la société LM ESPACE VERT,
              EURL immatriculée au RCS d&apos;Aubenas sous le numéro 999 206 816.
            </p>
          </div>

          {/* Section 3 */}
          <div className="mb-10">
            <h2 className="font-display text-xl font-bold mb-4" style={{ color: '#425D07' }}>
              3. Hébergeur
            </h2>
            <p className="mb-3 text-sm leading-relaxed" style={{ color: '#2F2F2F' }}>
              Le site est hébergé par :
            </p>
            <div className="rounded-2xl border border-[#EDEDED] p-5 text-sm leading-relaxed" style={{ color: '#2F2F2F' }}>
              <p className="font-semibold mb-1">Vercel Inc.</p>
              <p style={{ color: '#8C8F94' }}>440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</p>
              <p className="mt-1">
                <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" style={{ color: '#425D07' }}>
                  vercel.com
                </a>
              </p>
            </div>
          </div>

          {/* Section 4 */}
          <div className="mb-10">
            <h2 className="font-display text-xl font-bold mb-4" style={{ color: '#425D07' }}>
              4. Conception et réalisation
            </h2>
            <p className="mb-3 text-sm leading-relaxed" style={{ color: '#2F2F2F' }}>
              Le présent site a été conçu et développé par :
            </p>
            <div className="rounded-2xl border border-[#EDEDED] overflow-hidden">
              {[
                ['Raison sociale', 'KAYZEN LYON'],
                ['Forme juridique', 'SASU'],
                ['SIREN', '999 418 346'],
                ['SIRET', '999 418 346 000 14'],
                ['RCS', 'Lyon — 999 418 346'],
                ['N° TVA intracommunautaire', 'FR85 999 418 346'],
                ['Code APE', '4791B'],
                ['Siège social', '6, rue Pierre Termier, 69009 Lyon'],
                ['Téléphone', '+33 (0)4 87 77 68 61'],
                ['Email', 'contact@kayzen-lyon.fr'],
                ['Site web', 'https://internet.kayzen-lyon.fr'],
              ].map(([label, value], idx) => (
                <div
                  key={label}
                  className="flex flex-col sm:flex-row gap-1 sm:gap-4 px-5 py-3 border-b border-[#EDEDED] last:border-0"
                  style={{ backgroundColor: idx % 2 === 0 ? '#ffffff' : '#FAFAF8' }}
                >
                  <dt className="text-xs font-semibold uppercase tracking-wide flex-shrink-0 sm:w-64" style={{ color: '#8C8F94' }}>{label}</dt>
                  <dd className="text-sm" style={{ color: '#2F2F2F' }}>
                    {label === 'Email' ? (
                      <a href="mailto:contact@kayzen-lyon.fr" style={{ color: '#425D07' }}>{value}</a>
                    ) : label === 'Site web' ? (
                      <a href="https://internet.kayzen-lyon.fr" target="_blank" rel="noopener noreferrer" style={{ color: '#425D07' }}>{value}</a>
                    ) : (
                      value
                    )}
                  </dd>
                </div>
              ))}
            </div>
          </div>

          {/* Section 5 */}
          <div className="mb-10">
            <h2 className="font-display text-xl font-bold mb-4" style={{ color: '#425D07' }}>
              5. Propriété intellectuelle
            </h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#2F2F2F' }}>
              © 2026 LM Espace Vert. Tous droits réservés.
            </p>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#2F2F2F' }}>
              L&apos;ensemble des contenus diffusés sur le site (textes, images, photographies, vidéos,
              logos, charte graphique, structure, code source) est la propriété exclusive de LM ESPACE VERT
              ou de ses partenaires, et est protégé par le <strong>Code de la propriété intellectuelle</strong>{' '}
              (articles L.111-1 et suivants).
            </p>
            <p className="text-sm leading-relaxed" style={{ color: '#2F2F2F' }}>
              Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie
              des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans
              autorisation écrite préalable de LM ESPACE VERT, sous peine des sanctions prévues aux
              articles L.335-2 et suivants du Code de la propriété intellectuelle.
            </p>
          </div>

          {/* Section 6 */}
          <div className="mb-10">
            <h2 className="font-display text-xl font-bold mb-4" style={{ color: '#425D07' }}>
              6. Données personnelles
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: '#2F2F2F' }}>
              Le traitement des données à caractère personnel collectées sur ce site est encadré par la{' '}
              <strong>Politique de confidentialité</strong> disponible à l&apos;adresse{' '}
              <Link href="/politique-confidentialite" style={{ color: '#425D07' }}>
                /politique-confidentialite
              </Link>
              , conformément au Règlement (UE) 2016/679 (RGPD) et à la loi n° 78-17 du 6 janvier 1978 modifiée.
            </p>
          </div>

          {/* Section 7 */}
          <div className="mb-10">
            <h2 className="font-display text-xl font-bold mb-4" style={{ color: '#425D07' }}>
              7. Crédits photos
            </h2>
            <p className="text-sm leading-relaxed mb-2" style={{ color: '#2F2F2F' }}>
              Les photographies présentes sur ce site sont la propriété de LM Espace Vert (photos de
              réalisations, chantiers, équipes), sauf mention contraire.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: '#2F2F2F' }}>
              Certaines images d&apos;illustration sont issues de la bibliothèque{' '}
              <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" style={{ color: '#425D07' }}>
                Unsplash
              </a>{' '}
              et sont soumises à leur licence respective (libre de droits, usage commercial autorisé).
              Les typographies utilisées sont Newsreader &amp; Inter (Google Fonts — licence SIL Open Font).
            </p>
          </div>

          {/* Section 8 */}
          <div className="mb-10">
            <h2 className="font-display text-xl font-bold mb-4" style={{ color: '#425D07' }}>
              8. Liens hypertextes
            </h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#2F2F2F' }}>
              Le site <strong>www.lmespacevert.fr</strong> peut contenir des liens vers des sites Internet
              tiers. Ces liens sont fournis à titre indicatif. L&apos;éditeur n&apos;exerce aucun contrôle
              sur ces sites et décline toute responsabilité quant à leur contenu, leur disponibilité ou leur
              politique de confidentialité.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: '#2F2F2F' }}>
              Tout site souhaitant établir un lien vers le site lmespacevert.fr doit en faire la demande
              préalable par email à{' '}
              <a href="mailto:contact@lmespacevert.fr" style={{ color: '#425D07' }}>
                contact@lmespacevert.fr
              </a>. L&apos;éditeur se réserve le droit de refuser un lien sans avoir à en justifier le motif.
            </p>
          </div>

          {/* Section 9 */}
          <div className="mb-10">
            <h2 className="font-display text-xl font-bold mb-4" style={{ color: '#425D07' }}>
              9. Droit applicable et juridiction compétente
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: '#2F2F2F' }}>
              Les présentes mentions légales sont régies par le <strong>droit français</strong>.
              En cas de litige relatif à l&apos;interprétation ou à l&apos;exécution des présentes,
              et à défaut de résolution amiable, les tribunaux de <strong>Lyon</strong> seront seuls compétents.
            </p>
          </div>

          <p className="text-xs mt-8 pt-6 border-t border-[#EDEDED]" style={{ color: '#8C8F94' }}>
            Dernière mise à jour : mai 2026
          </p>
        </div>
      </section>
    </>
  )
}
