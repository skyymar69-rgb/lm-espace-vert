import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Conditions générales d'utilisation (CGU) | LM Espace Vert",
  description:
    "Conditions générales d'utilisation du site www.lmespacevert.fr — paysagiste LM Espace Vert. Accès au site, propriété intellectuelle, données personnelles, droit applicable.",
  alternates: { canonical: 'https://www.lmespacevert.fr/cgu' },
  robots: { index: true },
}

export default function CguPage() {
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
            <li><span aria-current="page" style={{ color: '#2F2F2F' }}>CGU</span></li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-14" style={{ backgroundColor: '#F7F5F0' }}>
        <div className="container mx-auto max-w-4xl px-4 sm:px-6">
          <h1 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold" style={{ color: '#425D07' }}>
            Conditions générales d&apos;utilisation
          </h1>
          <p className="mt-3 text-base leading-relaxed" style={{ color: '#8C8F94' }}>
            Version en vigueur au 15 mai 2026 — Applicables à tout utilisateur du site www.lmespacevert.fr
          </p>
        </div>
      </section>

      {/* Contenu */}
      <section className="bg-white py-12">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6">

          {/* Définitions */}
          <div className="mb-10">
            <h2 className="font-display text-xl font-bold mb-4" style={{ color: '#425D07' }}>
              Article 1. Définitions
            </h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#2F2F2F' }}>
              Dans les présentes conditions générales d&apos;utilisation, les termes suivants ont la signification indiquée ci-après :
            </p>
            <ul className="space-y-2 text-sm" style={{ color: '#2F2F2F' }}>
              <li className="pl-4 border-l-2" style={{ borderColor: '#80BC00' }}>
                <strong>« Éditeur »</strong> : LM ESPACE VERT, EURL au capital de 400 €, immatriculée au RCS d&apos;Aubenas
                sous le numéro 999 206 816 (SIREN), dont le siège légal est situé 655 Route de Choisine,
                07410 Colombier-le-Vieux, représentée par son gérant Léo Maurice.
              </li>
              <li className="pl-4 border-l-2" style={{ borderColor: '#80BC00' }}>
                <strong>« Site »</strong> : le site internet accessible à l&apos;adresse https://www.lmespacevert.fr
                et l&apos;ensemble de ses pages et fonctionnalités.
              </li>
              <li className="pl-4 border-l-2" style={{ borderColor: '#80BC00' }}>
                <strong>« Utilisateur »</strong> : toute personne physique ou morale accédant au Site,
                quel que soit le support utilisé (ordinateur, téléphone, tablette, etc.).
              </li>
              <li className="pl-4 border-l-2" style={{ borderColor: '#80BC00' }}>
                <strong>« Services »</strong> : l&apos;ensemble des fonctionnalités proposées sur le Site
                (formulaire de contact, formulaire de devis, blog informatif, présentation des prestations).
              </li>
            </ul>
          </div>

          {/* Objet */}
          <div className="mb-10">
            <h2 className="font-display text-xl font-bold mb-4" style={{ color: '#425D07' }}>
              Article 2. Objet et champ d&apos;application
            </h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#2F2F2F' }}>
              Les présentes conditions générales d&apos;utilisation (CGU) ont pour objet de définir les
              modalités d&apos;accès et d&apos;utilisation du Site par tout Utilisateur, ainsi que les
              droits et obligations des parties.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: '#2F2F2F' }}>
              Les CGU s&apos;appliquent à l&apos;ensemble des pages du Site. Elles complètent, sans s&apos;y
              substituer, les{' '}
              <Link href="/cgv" style={{ color: '#425D07' }}>Conditions Générales de Vente (CGV)</Link>{' '}
              qui régissent les relations contractuelles entre l&apos;Éditeur et ses clients.
            </p>
          </div>

          {/* Acceptation */}
          <div className="mb-10">
            <h2 className="font-display text-xl font-bold mb-4" style={{ color: '#425D07' }}>
              Article 3. Acceptation des CGU
            </h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#2F2F2F' }}>
              L&apos;accès au Site et son utilisation impliquent l&apos;acceptation pleine, entière et sans
              réserve des présentes CGU. L&apos;Utilisateur est réputé les avoir acceptées dès sa première
              visite sur le Site.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: '#2F2F2F' }}>
              L&apos;Éditeur se réserve le droit de modifier les présentes CGU à tout moment. Les modifications
              entrent en vigueur dès leur mise en ligne. Il appartient à l&apos;Utilisateur de consulter
              régulièrement les CGU pour prendre connaissance des éventuelles mises à jour.
            </p>
          </div>

          {/* Description des services */}
          <div className="mb-10">
            <h2 className="font-display text-xl font-bold mb-4" style={{ color: '#425D07' }}>
              Article 4. Description des services en ligne
            </h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#2F2F2F' }}>
              Le Site propose les services informationnels et interactifs suivants :
            </p>
            <ul className="space-y-3 text-sm" style={{ color: '#2F2F2F' }}>
              <li className="flex gap-3">
                <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ backgroundColor: '#425D07' }}>1</span>
                <div>
                  <strong>Présentation des prestations</strong> — Description des services proposés par LM Espace Vert
                  (création de jardins, entretien, élagage, maçonnerie paysagère, arrosage automatique, engazonnement).
                  Ces informations sont fournies à titre indicatif et ne constituent pas une offre ferme.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ backgroundColor: '#425D07' }}>2</span>
                <div>
                  <strong>Formulaire de devis en ligne</strong> — Permet à l&apos;Utilisateur de soumettre une demande
                  de devis gratuite. La soumission du formulaire ne vaut pas acceptation d&apos;une commande ni
                  engagement contractuel. Le devis sera formalisé ultérieurement selon les modalités décrites aux CGV.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ backgroundColor: '#425D07' }}>3</span>
                <div>
                  <strong>Formulaire de contact</strong> — Permet d&apos;adresser toute question ou demande
                  d&apos;information à l&apos;Éditeur.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ backgroundColor: '#425D07' }}>4</span>
                <div>
                  <strong>Blog informatif</strong> — Publication d&apos;articles sur les thématiques du paysagisme,
                  de l&apos;entretien des jardins et de l&apos;aménagement extérieur. Ces articles sont fournis
                  à titre informatif et ne constituent pas un conseil professionnel individualisé.
                </div>
              </li>
            </ul>
          </div>

          {/* Accès au site */}
          <div className="mb-10">
            <h2 className="font-display text-xl font-bold mb-4" style={{ color: '#425D07' }}>
              Article 5. Accès au site
            </h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#2F2F2F' }}>
              Le Site est accessible gratuitement à tout Utilisateur disposant d&apos;un accès à Internet.
              L&apos;Éditeur ne saurait être tenu pour responsable de l&apos;inaccessibilité du Site pour
              des raisons liées à l&apos;opérateur de réseau de l&apos;Utilisateur.
            </p>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#2F2F2F' }}>
              L&apos;Éditeur se réserve le droit de suspendre, limiter ou interrompre l&apos;accès au Site
              ou à certaines de ses fonctionnalités à tout moment, notamment pour des opérations de
              maintenance, de mise à jour ou d&apos;évolution, sans que cette interruption ouvre droit à
              une quelconque indemnité.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: '#2F2F2F' }}>
              L&apos;Utilisateur s&apos;engage à ne pas :
            </p>
            <ul className="mt-2 space-y-1 text-sm ml-4 list-disc" style={{ color: '#2F2F2F' }}>
              <li>Porter atteinte aux droits de propriété intellectuelle de l&apos;Éditeur ou de tiers ;</li>
              <li>Diffuser des contenus illicites, diffamatoires, obscènes ou contraires à l&apos;ordre public ;</li>
              <li>Tenter de porter atteinte à la sécurité, à l&apos;intégrité ou au fonctionnement du Site ;</li>
              <li>Utiliser des robots, scripts ou dispositifs automatisés pour accéder au Site ;</li>
              <li>Collecter des données personnelles relatives aux autres utilisateurs du Site ;</li>
              <li>Usurper l&apos;identité d&apos;un tiers ou de l&apos;Éditeur.</li>
            </ul>
          </div>

          {/* Propriété intellectuelle */}
          <div className="mb-10">
            <h2 className="font-display text-xl font-bold mb-4" style={{ color: '#425D07' }}>
              Article 6. Propriété intellectuelle
            </h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#2F2F2F' }}>
              © 2026 LM Espace Vert. Tous droits réservés.
            </p>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#2F2F2F' }}>
              L&apos;ensemble des éléments composant le Site (textes, images, photographies, logos,
              charte graphique, code source, architecture) est protégé par les dispositions du Code de
              la propriété intellectuelle. Toute reproduction, représentation, modification ou utilisation
              non autorisée est strictement interdite.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: '#2F2F2F' }}>
              Pour toute demande de reproduction ou d&apos;utilisation d&apos;un contenu du Site, contacter :
              {' '}<a href="mailto:contact@lmespacevert.fr" style={{ color: '#425D07' }}>contact@lmespacevert.fr</a>.
            </p>
          </div>

          {/* Responsabilité */}
          <div className="mb-10">
            <h2 className="font-display text-xl font-bold mb-4" style={{ color: '#425D07' }}>
              Article 7. Responsabilité
            </h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#2F2F2F' }}>
              L&apos;Éditeur met tout en œuvre pour fournir des informations exactes, complètes et à jour sur
              le Site. Toutefois, il ne saurait garantir l&apos;exactitude, l&apos;exhaustivité ou l&apos;actualité
              de l&apos;ensemble des informations diffusées. L&apos;Éditeur se réserve le droit de modifier à
              tout moment et sans préavis les informations publiées.
            </p>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#2F2F2F' }}>
              L&apos;Éditeur ne saurait être tenu responsable :
            </p>
            <ul className="space-y-1 text-sm ml-4 list-disc" style={{ color: '#2F2F2F' }}>
              <li>Des dommages directs ou indirects résultant de l&apos;utilisation du Site ;</li>
              <li>Des interruptions temporaires d&apos;accès dues à des opérations techniques ;</li>
              <li>Des contenus de sites tiers accessibles depuis des liens présents sur le Site ;</li>
              <li>D&apos;une utilisation non conforme des Services par l&apos;Utilisateur.</li>
            </ul>
          </div>

          {/* Données personnelles */}
          <div className="mb-10">
            <h2 className="font-display text-xl font-bold mb-4" style={{ color: '#425D07' }}>
              Article 8. Données personnelles et RGPD
            </h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#2F2F2F' }}>
              LM ESPACE VERT est responsable du traitement des données personnelles collectées via le Site,
              en qualité de responsable de traitement au sens du Règlement (UE) 2016/679 (RGPD).
            </p>
            <div className="rounded-2xl border border-[#EDEDED] overflow-hidden mb-3">
              {[
                ['Formulaires (contact, devis)', 'Traitement de la demande, établissement d\'un devis', 'Mesures précontractuelles (art. 6.1.b RGPD)', '3 ans après le dernier contact'],
                ['Données analytiques (navigation)', 'Mesure d\'audience du site (Vercel Analytics)', 'Intérêt légitime (art. 6.1.f RGPD)', '13 mois'],
                ['Logs serveur (adresse IP)', 'Sécurité, prévention fraude', 'Intérêt légitime (art. 6.1.f RGPD)', '12 mois'],
              ].map(([donnee, finalite, base, duree], idx) => (
                <div
                  key={donnee}
                  className="grid grid-cols-1 sm:grid-cols-4 gap-2 px-4 py-3 border-b border-[#EDEDED] last:border-0 text-xs"
                  style={{ backgroundColor: idx % 2 === 0 ? '#ffffff' : '#FAFAF8' }}
                >
                  <span className="font-semibold" style={{ color: '#2F2F2F' }}>{donnee}</span>
                  <span style={{ color: '#2F2F2F' }}>{finalite}</span>
                  <span style={{ color: '#8C8F94' }}>{base}</span>
                  <span style={{ color: '#8C8F94' }}>{duree}</span>
                </div>
              ))}
            </div>
            <p className="text-sm leading-relaxed" style={{ color: '#2F2F2F' }}>
              Pour plus d&apos;informations sur les traitements de données, vos droits et les modalités de
              leur exercice, consultez notre{' '}
              <Link href="/politique-confidentialite" style={{ color: '#425D07' }}>
                Politique de confidentialité
              </Link>.
            </p>
          </div>

          {/* Cookies */}
          <div className="mb-10">
            <h2 className="font-display text-xl font-bold mb-4" style={{ color: '#425D07' }}>
              Article 9. Cookies
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: '#2F2F2F' }}>
              Le Site utilise des cookies techniques nécessaires à son bon fonctionnement, ainsi que des
              outils de mesure d&apos;audience (Vercel Analytics). Aucun cookie publicitaire ni traceur tiers
              n&apos;est déposé sans consentement préalable. Pour plus d&apos;informations, consultez notre{' '}
              <Link href="/politique-cookies" style={{ color: '#425D07' }}>
                Politique de cookies
              </Link>.
            </p>
          </div>

          {/* Droit applicable */}
          <div className="mb-10">
            <h2 className="font-display text-xl font-bold mb-4" style={{ color: '#425D07' }}>
              Article 10. Droit applicable et compétence juridictionnelle
            </h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#2F2F2F' }}>
              Les présentes CGU sont régies exclusivement par le <strong>droit français</strong>.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: '#2F2F2F' }}>
              En cas de litige relatif à l&apos;interprétation ou à l&apos;exécution des présentes, les parties
              s&apos;efforceront de le résoudre à l&apos;amiable. À défaut d&apos;accord amiable, les tribunaux
              de <strong>Lyon</strong> seront seuls compétents.
            </p>
          </div>

          {/* Modification */}
          <div className="mb-10">
            <h2 className="font-display text-xl font-bold mb-4" style={{ color: '#425D07' }}>
              Article 11. Modification des CGU
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: '#2F2F2F' }}>
              L&apos;Éditeur se réserve le droit de modifier les présentes CGU à tout moment afin de les
              adapter à l&apos;évolution du Site, des Services, ou de la réglementation applicable.
              Les nouvelles CGU entrent en vigueur dès leur mise en ligne. L&apos;Utilisateur est invité à
              les consulter régulièrement.
            </p>
          </div>

          {/* Contact */}
          <div className="mb-10">
            <h2 className="font-display text-xl font-bold mb-4" style={{ color: '#425D07' }}>
              Article 12. Contact
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: '#2F2F2F' }}>
              Pour toute question relative aux présentes CGU ou à l&apos;utilisation du Site, l&apos;Utilisateur
              peut contacter l&apos;Éditeur :
            </p>
            <ul className="mt-2 space-y-1 text-sm" style={{ color: '#2F2F2F' }}>
              <li>Par email : <a href="mailto:contact@lmespacevert.fr" style={{ color: '#425D07' }}>contact@lmespacevert.fr</a></li>
              <li>Par téléphone : <a href="tel:+33672587353" style={{ color: '#425D07' }}>06 72 58 73 53</a></li>
              <li>Par courrier : LM ESPACE VERT, 655 Route de Choisine, 07410 Colombier-le-Vieux</li>
            </ul>
          </div>

          <p className="text-xs mt-8 pt-6 border-t border-[#EDEDED]" style={{ color: '#8C8F94' }}>
            Dernière mise à jour : 15 mai 2026
          </p>
        </div>
      </section>
    </>
  )
}
