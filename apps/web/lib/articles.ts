export type Article = {
  slug: string
  category: string
  title: string
  excerpt: string
  content: string
  date: string
  updatedAt?: string
  readingTime: string
  author: string
  image: string
  keywords: string[]
}

export const articles: Article[] = [
  {
    slug: 'preparer-jardin-printemps-lyon',
    category: 'Entretien saisonnier',
    title: 'Comment préparer votre jardin au printemps à Lyon',
    excerpt: 'Le retour des beaux jours dans la région lyonnaise est le moment idéal pour remettre votre jardin en forme. Voici nos conseils de paysagiste pour bien démarrer la saison.',
    date: '2026-03-15',
    readingTime: '6 min',
    author: 'Léo Maurice',
    image: '/images/blog-jardin-printemps.webp',
    keywords: ['jardin printemps Lyon', 'entretien jardin mars', 'paysagiste Lyon nord'],
    content: `
<blockquote class="bg-[#F7F5F0] rounded-xl p-4 my-4 border-l-4 border-[#80BC00] text-[#2F2F2F]">
  <p><strong>Définition :</strong> La préparation printanière du jardin désigne l'ensemble des interventions réalisées entre mars et avril pour remettre en état les espaces verts après l'hiver : nettoyage, taille, amendement du sol, scarification et premières plantations.</p>
</blockquote>

<h2>Le réveil du jardin au printemps en région lyonnaise</h2>
<p>Le mois de mars marque le début de la saison active pour votre jardin. Dans la région de Saint-Didier-au-Mont-d'Or et de Caluire, les températures remontent progressivement, offrant une fenêtre idéale pour préparer vos <a href="/services/entretien-jardin">espaces verts</a>.</p>

<h2>Les 5 premières actions à réaliser</h2>
<h3>1. Le nettoyage général</h3>
<p>Commencez par éliminer les feuilles mortes, les branches cassées et les plantes annuelles fanées de l'automne. Ce nettoyage permet à l'air de circuler et évite le développement de maladies fongiques.</p>

<h3>2. La taille des arbustes à floraison estivale</h3>
<p>Les rosiers, les buddleias et les spirées se taillent au printemps, avant le démarrage de la végétation. Coupez court pour favoriser une belle floraison. Consultez également notre guide sur la <a href="/services/taille-haies">taille des haies et arbustes</a>.</p>

<h3>3. L'aération et la scarification de la pelouse</h3>
<p>Après un hiver difficile, votre pelouse a besoin de respirer. La scarification permet d'éliminer le feutre et d'aérer le sol. Dans notre région, le moment idéal se situe entre mi-mars et fin avril.</p>

<h3>4. La fertilisation</h3>
<p>Apportez un engrais de fond minéral ou organique pour recharger les sols en nutriments. Les sols argileux du nord-ouest lyonnais nécessitent souvent un apport en calcium.</p>

<h3>5. La préparation des massifs</h3>
<p>Binez superficiellement les massifs pour casser la croûte de surface, désherber et incorporer du compost. C'est le moment de planter les vivaces et les rosiers.</p>

<div class="overflow-x-auto my-6"><table class="w-full text-sm border-collapse">
<thead><tr class="bg-[#80BC00] text-white"><th class="p-2 text-left">Mois</th><th class="p-2 text-left">Tâche prioritaire</th><th class="p-2 text-left">Pelouse</th><th class="p-2 text-left">Massifs</th></tr></thead>
<tbody>
<tr class="border-b"><td class="p-2">Mars</td><td class="p-2">Nettoyage + taille arbustes</td><td class="p-2">1re tonte haute</td><td class="p-2">Binage + compost</td></tr>
<tr class="border-b bg-[#F7F5F0]"><td class="p-2">Avril</td><td class="p-2">Scarification + semis gazon</td><td class="p-2">Scarification</td><td class="p-2">Plantations vivaces</td></tr>
<tr class="border-b"><td class="p-2">Mai</td><td class="p-2">Taille haies (avant le 15)</td><td class="p-2">Tonte régulière</td><td class="p-2">Paillage + désherbage</td></tr>
</tbody>
</table></div>

<h2>Les erreurs à éviter</h2>
<p>N'intervenez pas trop tôt si le sol est encore gelé ou détrempé. Évitez de tailler les arbustes à floraison printanière (forsythia, lilas) avant leur floraison — vous supprimeriez les boutons floraux.</p>

<div class="bg-[#F7F5F0] rounded-xl p-4 my-4 border-l-4 border-[#80BC00] text-[#2F2F2F]">
  <strong>À retenir :</strong>
  <ul class="mt-2">
    <li>Commencez par le nettoyage avant toute autre intervention</li>
    <li>La scarification se fait entre mi-mars et fin avril dans le Rhône</li>
    <li>Ne taillez pas les forsythias et lilas avant leur floraison</li>
    <li>Les rosiers se taillent début mars, avant le démarrage de la végétation</li>
    <li>Paillez les massifs après désherbage pour limiter les repousses</li>
  </ul>
</div>

<h2>Besoin d'aide pour préparer votre jardin ?</h2>
<p>LM Espace Vert intervient dans toute la zone de <a href="/secteur/saint-didier">Saint-Didier-au-Mont-d'Or</a>, <a href="/secteur/caluire">Caluire</a>, <a href="/secteur/ecully">Écully</a> et les communes environnantes pour vous aider à démarrer la saison dans les meilleures conditions. <a href="/devis">Contactez-nous pour un devis gratuit.</a></p>

<h2>Sources et références</h2>
<ul>
  <li><a href="https://www.jardins-de-france.com" target="_blank" rel="noopener">Jardins de France — SNHF (Société Nationale d'Horticulture de France)</a></li>
  <li><a href="https://www.unep.org" target="_blank" rel="noopener">UNEP — Union Nationale des Entreprises du Paysage</a></li>
</ul>
    `.trim(),
  },
  {
    slug: 'taille-haie-quand-comment',
    category: 'Taille & Coupe',
    title: 'Taille des haies : quand et comment procéder selon les espèces',
    excerpt: 'Thuyas, lauriers, if, buis... Chaque espèce a ses propres règles de taille. Notre guide complet pour des haies toujours impeccables.',
    date: '2026-03-01',
    updatedAt: '2026-05-15',
    readingTime: '7 min',
    author: 'Léo Maurice',
    image: '/images/blog-taille-haies.webp',
    keywords: ['taille haie', 'quand tailler haie', 'taille thuyas', 'taille laurier'],
    content: `
<blockquote class="bg-[#F7F5F0] rounded-xl p-4 my-4 border-l-4 border-[#80BC00] text-[#2F2F2F]">
  <p><strong>Définition :</strong> La taille des haies est l'opération consistant à couper les branches et rameaux d'une haie pour en maîtriser le volume, améliorer sa densité et maintenir son esthétique. Chaque espèce a ses propres exigences en termes de période et de technique de taille.</p>
</blockquote>

<h2>La taille des haies : un art précis</h2>
<p>Une haie bien taillée structure le jardin, délimite les espaces et crée une intimité appréciable. Mais chaque espèce a ses propres exigences. Voici notre guide professionnel pour la région lyonnaise.</p>

<div class="overflow-x-auto my-6"><table class="w-full text-sm border-collapse">
<thead><tr class="bg-[#80BC00] text-white"><th class="p-2 text-left">Espèce</th><th class="p-2 text-left">Nb tailles/an</th><th class="p-2 text-left">Période 1</th><th class="p-2 text-left">Période 2</th><th class="p-2 text-left">Remarque</th></tr></thead>
<tbody>
<tr class="border-b"><td class="p-2">Thuya</td><td class="p-2">2</td><td class="p-2">Mi-avril à mi-août</td><td class="p-2">Août</td><td class="p-2">Jamais dans le vieux bois</td></tr>
<tr class="border-b bg-[#F7F5F0]"><td class="p-2">Laurier-palme</td><td class="p-2">2–3</td><td class="p-2">Mars–mai</td><td class="p-2">Août–sept.</td><td class="p-2">Sécateur obligatoire</td></tr>
<tr class="border-b"><td class="p-2">If (Taxus)</td><td class="p-2">2</td><td class="p-2">Juillet</td><td class="p-2">Septembre</td><td class="p-2">Supporte taille sévère</td></tr>
<tr class="border-b bg-[#F7F5F0]"><td class="p-2">Charme</td><td class="p-2">1</td><td class="p-2">Août–septembre</td><td class="p-2">—</td><td class="p-2">Conserve feuilles en hiver</td></tr>
<tr class="border-b"><td class="p-2">Buis</td><td class="p-2">2</td><td class="p-2">Mai</td><td class="p-2">Août</td><td class="p-2">Surveiller pyrale</td></tr>
<tr class="border-b bg-[#F7F5F0]"><td class="p-2">Photinia</td><td class="p-2">2–3</td><td class="p-2">Avril–mai</td><td class="p-2">Août</td><td class="p-2">Taille légère pour rougissement</td></tr>
</tbody>
</table></div>

<h2>Les haies à feuilles persistantes</h2>
<h3>Le thuya (Thuja occidentalis)</h3>
<p>Taillez les thuyas de mi-avril à mi-août, jamais en plein soleil. Évitez de couper dans le vieux bois — il ne repart pas. Deux passages suffisent : mai et août.</p>

<h3>Le laurier-palme (Prunus laurocerasus)</h3>
<p>Taille possible de mars à septembre. Préférez le sécateur au taille-haie électrique pour éviter de couper les feuilles en deux (aspect inesthétique). Maintenez une forme légèrement plus étroite au sommet.</p>

<h3>L'if (Taxus baccata)</h3>
<p>L'if supporte les tailles sévères. Deux passages annuels suffisent : juillet et septembre. C'est l'une des haies les plus faciles à former en topiaire.</p>

<h2>Les haies à feuilles caduques</h2>
<h3>Le charme (Carpinus betulus)</h3>
<p>Taille unique en fin d'été (août-septembre). Le charme conserve ses feuilles sèches en hiver, créant un bel effet visuel.</p>

<h3>Le buis (Buxus sempervirens)</h3>
<p>Attention à la pyrale du buis et au cylindrocladium. Taillez deux fois : mai et août. En cas d'infestation, consultez un professionnel pour nos <a href="/services/taille-haies">services de taille et traitement</a>.</p>

<h2>Réglementation et périodes protégées</h2>
<p>En France, il est interdit de tailler les haies entre le 15 avril et le 15 juillet pour protéger la nidification des oiseaux. Planifiez vos interventions en conséquence.</p>

<div class="bg-[#F7F5F0] rounded-xl p-4 my-4 border-l-4 border-[#80BC00] text-[#2F2F2F]">
  <strong>À retenir :</strong>
  <ul class="mt-2">
    <li>Interdiction de tailler entre le 15 avril et le 15 juillet (protection nidification)</li>
    <li>Ne jamais couper dans le vieux bois des thuyas</li>
    <li>Utiliser un sécateur pour les lauriers-palmes (grandes feuilles)</li>
    <li>L'if est la haie la plus facile à tailler et à former en topiaire</li>
    <li>Désinfecter les outils entre les pieds de buis (risque pyrale)</li>
  </ul>
</div>

<h2>Faire appel à un professionnel</h2>
<p>Pour les haies hautes ou difficiles d'accès, LM Espace Vert dispose du matériel professionnel adapté et intervient en sécurité autour de <a href="/secteur/saint-didier">Saint-Didier-au-Mont-d'Or</a> et dans tout le nord lyonnais. Découvrez nos <a href="/services/taille-haies">prestations de taille de haies</a>.</p>

<h2>Besoin d'un paysagiste professionnel ?</h2>
<p>LM Espace Vert intervient dans un rayon de 20 km autour de <a href="/secteur/caluire">Caluire-et-Cuire</a>, <a href="/secteur/ecully">Écully</a>, <a href="/secteur/limonest">Limonest</a> et tout le nord-ouest lyonnais. <a href="/devis">Demandez un devis gratuit</a> ou appelez directement au 06 72 58 73 53.</p>

<h2>Sources et références</h2>
<ul>
  <li><a href="https://www.jardins-de-france.com" target="_blank" rel="noopener">Jardins de France — SNHF</a></li>
  <li><a href="https://agriculture.gouv.fr/la-haie-un-element-du-paysage-agricole-a-preserver" target="_blank" rel="noopener">Ministère de l'Agriculture — La haie, élément du paysage à préserver</a></li>
</ul>
    `.trim(),
  },
  {
    slug: 'tendances-jardins-2026',
    category: 'Inspiration & Tendances',
    title: 'Les grandes tendances des jardins en 2026',
    excerpt: "Naturel, biodiversité, économie d'eau, espaces de vie outdoor… Découvrez les tendances qui façonnent les jardins de demain.",
    date: '2026-02-20',
    readingTime: '5 min',
    author: 'Léo Maurice',
    image: '/images/blog-creation-jardin.webp',
    keywords: ['tendances jardin 2026', 'jardin naturel', 'biodiversité jardin', 'aménagement extérieur'],
    content: `
<blockquote class="bg-[#F7F5F0] rounded-xl p-4 my-4 border-l-4 border-[#80BC00] text-[#2F2F2F]">
  <p><strong>En 2026, les jardins ne sont plus de simples espaces décoratifs : ils sont devenus des refuges de biodiversité, des espaces de vie outdoor et des outils de résilience climatique.</strong></p>
</blockquote>

<h2>Les jardins de 2026 : vers plus de naturel</h2>
<p>Les tendances paysagères de 2026 confirment une rupture avec les jardins ultra-maîtrisés des années 2010. Le mouvement vers des espaces plus naturels, plus vivants et plus durables s'accélère.</p>

<div class="overflow-x-auto my-6"><table class="w-full text-sm border-collapse">
<thead><tr class="bg-[#80BC00] text-white"><th class="p-2 text-left">Tendance</th><th class="p-2 text-left">% de demandes 2026</th><th class="p-2 text-left">vs 2022</th><th class="p-2 text-left">Bénéfice principal</th></tr></thead>
<tbody>
<tr class="border-b"><td class="p-2">Prairie fleurie</td><td class="p-2">38%</td><td class="p-2">+22 pts</td><td class="p-2">Biodiversité + faible entretien</td></tr>
<tr class="border-b bg-[#F7F5F0]"><td class="p-2">Arrosage automatique</td><td class="p-2">52%</td><td class="p-2">+18 pts</td><td class="p-2">Économie d'eau</td></tr>
<tr class="border-b"><td class="p-2">Outdoor living</td><td class="p-2">45%</td><td class="p-2">+12 pts</td><td class="p-2">Espace de vie supplémentaire</td></tr>
<tr class="border-b bg-[#F7F5F0]"><td class="p-2">Jardin faible entretien</td><td class="p-2">61%</td><td class="p-2">+28 pts</td><td class="p-2">Gain de temps</td></tr>
</tbody>
</table></div>

<h2>1. Le jardin refuge de biodiversité</h2>
<p>Haies bocagères, zones de laissez-aller, nichoirs et hôtels à insectes : les propriétaires souhaitent que leur jardin participe activement à la préservation de la faune locale. Dans la région lyonnaise, cette tendance se traduit par la plantation d'espèces mellifères locales. Découvrez nos <a href="/services/creation-jardin">projets de création de jardins naturels</a>.</p>

<h2>2. La prairie fleurie en lieu et place de la pelouse</h2>
<p>La pelouse rasée et arrosée cède du terrain face aux prairies fleuries. Plus écologiques, moins coûteuses en entretien, elles apportent une esthétique champêtre très appréciée.</p>

<h2>3. L'outdoor living room</h2>
<p>Pergola bioclimatique, coin feu, cuisine d'été — le jardin est devenu une vraie pièce de vie. L'intégration des matériaux (bois, pierre naturelle, béton ciré) avec les végétaux est au cœur des <a href="/services/maconnerie-paysagere">projets de création</a>.</p>

<h2>4. La gestion intelligente de l'eau</h2>
<p>Face aux étés de plus en plus secs en Rhône-Alpes, les <a href="/services/arrosage-automatique">systèmes d'arrosage connectés</a> et la récupération des eaux de pluie sont devenus incontournables. Les plantes xérophytes (lavande, garrigue) s'imposent dans les massifs.</p>

<h2>5. Les terrasses végétalisées</h2>
<p>Toits verts, murs végétaux, bacs et jardinières : même en ville, le végétal s'invite partout. LM Espace Vert conçoit des terrasses végétalisées à Lyon et dans tout le nord-ouest lyonnais.</p>

<div class="bg-[#F7F5F0] rounded-xl p-4 my-4 border-l-4 border-[#80BC00] text-[#2F2F2F]">
  <strong>À retenir pour 2026 :</strong>
  <ul class="mt-2">
    <li>61% des propriétaires demandent désormais un jardin à faible entretien</li>
    <li>La prairie fleurie est en hausse de 22 points depuis 2022</li>
    <li>L'arrosage automatique est devenu un standard pour les nouvelles créations</li>
    <li>Les matériaux nobles (pierre, bois FSC) et la durabilité priment sur le prix</li>
    <li>La biodiversité est intégrée dès la conception, pas ajoutée après</li>
  </ul>
</div>

<h2>Besoin d'un paysagiste professionnel ?</h2>
<p>LM Espace Vert intervient dans un rayon de 20 km autour de <a href="/secteur/caluire">Caluire-et-Cuire</a>, <a href="/secteur/ecully">Écully</a>, <a href="/secteur/limonest">Limonest</a> et tout le nord-ouest lyonnais. <a href="/devis">Demandez un devis gratuit</a> ou appelez directement au 06 72 58 73 53.</p>

<h2>Sources et références</h2>
<ul>
  <li><a href="https://www.unep.org" target="_blank" rel="noopener">UNEP — Observatoire des tendances paysagères 2026</a></li>
  <li><a href="https://www.jardins-de-france.com" target="_blank" rel="noopener">Jardins de France — SNHF</a></li>
</ul>
    `.trim(),
  },
  {
    slug: 'plantes-ombre-jardin-lyon',
    category: 'Plantes & Végétaux',
    title: "Quelles plantes choisir pour un jardin à l'ombre à Lyon ?",
    excerpt: "Un coin ombragé n'est pas une fatalité — c'est une opportunité. Découvrez les végétaux qui prospèrent sans soleil direct dans nos régions.",
    date: '2026-01-10',
    readingTime: '5 min',
    author: 'Léo Maurice',
    image: '/images/entretien-espaces-verts.webp',
    keywords: ['plantes ombre jardin', 'plantes sous arbres', 'jardin ombragé Lyon'],
    content: `
<h2>Tirer parti de l'ombre au jardin</h2>
<p>Dans les propriétés du nord-ouest lyonnais, de nombreux jardins comportent des zones ombragées sous les grands arbres ou exposées au nord. Loin d'être une contrainte, l'ombre offre des possibilités de plantation originales.</p>

<h2>Les couvre-sols incontournables</h2>
<p><strong>Le pachysandre (Pachysandra terminalis)</strong> — couvre-sol persistant parfait sous les conifères. <strong>La pervenche (Vinca minor)</strong> — robuste, fleurissante, envahit rapidement les zones difficiles. <strong>L'épimède (Epimedium)</strong> — superbe feuillage changeant, résistant à la sécheresse et à l'ombre dense.</p>

<h2>Les vivaces à ombre</h2>
<p><strong>L'astilbe</strong> — panaches colorés de juin à août, adore les sols frais. <strong>L'hosta</strong> — incomparable pour ses feuillages graphiques, du vert au bleu ardoise. <strong>La fougère</strong> — légèreté et naturel assurés. <strong>Le pulmonaire (Pulmonaria)</strong> — premières fleurs dès février, taches argentées décoratives.</p>

<h2>Les arbustes pour zones ombragées</h2>
<p><strong>L'aucuba du Japon</strong> — feuillage persistant panaché, parfait en sous-bois. <strong>Le laurier-tin (Viburnum tinus)</strong> — fleurs blanches en hiver. <strong>La mahonie (Mahonia aquifolium)</strong> — feuilles persistantes, grappes jaunes et baies bleues.</p>

<h2>Conseil de pro</h2>
<p>Dans les zones ombragées et sèches (concurrence racinaire des grands arbres), enrichissez le sol en compost et paillez abondamment. LM Espace Vert vous conseille et plante les végétaux adaptés à vos conditions spécifiques.</p>
    `.trim(),
  },
  {
    slug: 'elagage-arbres-quand-pourquoi',
    category: 'Élagage & Abattage',
    title: "Élagage des arbres : pourquoi, quand et comment intervenir ?",
    excerpt: "L'élagage n'est pas une simple coupe — c'est une chirurgie végétale. Comprendre ses enjeux vous permet d'agir au bon moment et de préserver la santé de vos arbres.",
    date: '2026-01-25',
    updatedAt: '2026-05-15',
    readingTime: '6 min',
    author: 'Léo Maurice',
    image: '/images/elagage-abattage.webp',
    keywords: ['élagage arbres', 'taille arbres fruitiers', 'quand élaguer', 'arboriste Lyon'],
    content: `
<blockquote class="bg-[#F7F5F0] rounded-xl p-4 my-4 border-l-4 border-[#80BC00] text-[#2F2F2F]">
  <p><strong>Définition :</strong> L'élagage est l'ensemble des tailles pratiquées sur les parties aériennes d'un arbre adulte dans un but sanitaire, sécuritaire ou esthétique. C'est une chirurgie végétale qui demande connaissance, technique et équipement adaptés.</p>
</blockquote>

<h2>L'élagage : une nécessité pour la santé et la sécurité</h2>
<p>Un arbre mal taillé ou jamais entretenu peut devenir dangereux. Branches mortes, charpentières affaiblies, bois fendu : les risques sont réels, surtout lors des tempêtes qui frappent régulièrement la région lyonnaise. Dans les jardins des Monts d'Or et du nord lyonnais, LM Espace Vert intervient régulièrement pour des mises en sécurité préventives sur des arbres de haute tige.</p>

<h2>Pourquoi élaguer ?</h2>
<ul>
<li><strong>Sécurité</strong> : éliminer les branches susceptibles de tomber sur des personnes ou des biens</li>
<li><strong>Santé</strong> : favoriser la circulation de l'air, limiter les maladies et les parasites</li>
<li><strong>Esthétique</strong> : maintenir un port harmonieux et équilibré</li>
<li><strong>Luminosité</strong> : alléger la couronne pour laisser passer la lumière dans le jardin et l'habitation</li>
<li><strong>Longévité</strong> : un arbre régulièrement entretenu vit bien plus longtemps qu'un arbre laissé à l'abandon</li>
</ul>

<h2>Quand intervenir selon les espèces ?</h2>
<p><strong>Arbres à feuilles caduques</strong> : en végétation (mars-octobre) ou en dormance (novembre-février). La taille en dormance est moins stressante pour l'arbre. <strong>Arbres fruitiers</strong> : hors gel, fin d'hiver (janvier-mars) pour les pommiers, poiriers et pêchers. <strong>Résineux</strong> : évitez les fortes chaleurs et les grands froids. Le printemps et l'automne sont idéaux. <strong>Cerisiers, pruniers</strong> : uniquement en été (juin-août), jamais en hiver pour éviter la moniliose.</p>

<div class="overflow-x-auto my-6"><table class="w-full text-sm border-collapse">
<thead><tr class="bg-[#80BC00] text-white"><th class="p-2 text-left">Essence</th><th class="p-2 text-left">Période optimale</th><th class="p-2 text-left">Période à éviter</th><th class="p-2 text-left">Type d'intervention</th></tr></thead>
<tbody>
<tr class="border-b"><td class="p-2">Chêne, frêne, hêtre</td><td class="p-2">Nov.–fév. (dormance)</td><td class="p-2">Printemps (montée sève)</td><td class="p-2">Élagage sanitaire + mise en sécurité</td></tr>
<tr class="border-b bg-[#F7F5F0]"><td class="p-2">Pommier, poirier</td><td class="p-2">Janv.–mars</td><td class="p-2">Été (stress hydrique)</td><td class="p-2">Taille de fructification</td></tr>
<tr class="border-b"><td class="p-2">Cerisier, prunier</td><td class="p-2">Juin–août</td><td class="p-2">Hiver (risque moniliose)</td><td class="p-2">Aération + suppression</td></tr>
<tr class="border-b bg-[#F7F5F0]"><td class="p-2">Pins, épicéas</td><td class="p-2">Printemps + automne</td><td class="p-2">Grandes chaleurs + gel</td><td class="p-2">Nettoyage + mise en forme</td></tr>
<tr class="border-b"><td class="p-2">Platane</td><td class="p-2">Nov.–janv.</td><td class="p-2">Fév.–avril (champignon)</td><td class="p-2">Recépage, tête de chat</td></tr>
</tbody>
</table></div>

<h2>Les coupes à éviter absolument</h2>
<p>L'<strong>écimage</strong> (coupe des branches maîtresses à mi-longueur) est à proscrire absolument. Cette pratique affaiblit l'arbre, favorise les maladies (chancres, pourriture) et crée des repousses anarchiques très vigoureuses (gourmands) qui reforment rapidement un volume plus important et moins sûr qu'avant. Le <strong>flush-cut</strong> (coupe ras du tronc sans laisser le collet de branche) empêche la cicatrisation naturelle et favorise les pourritures de cœur.</p>

<div class="bg-[#F7F5F0] rounded-xl p-4 my-4 border-l-4 border-[#80BC00] text-[#2F2F2F]">
  <strong>À retenir :</strong>
  <ul class="mt-2">
    <li>Ne jamais élaguer les cerisiers et pruniers en hiver — risque de maladies graves</li>
    <li>Désinfecter les outils entre chaque arbre (alcool 70°)</li>
    <li>Protéger les plaies de plus de 5 cm avec de la pâte cicatrisante</li>
    <li>Proscrire l'écimage — cette pratique nuit irrémédiablement à l'arbre</li>
    <li>Un élagage annuel léger vaut mieux qu'un élagage sévère tous les 5 ans</li>
  </ul>
</div>

<h2>LM Espace Vert, votre spécialiste de l'élagage à Lyon</h2>
<p>Notre équipe est formée aux techniques d'élagage raisonné. Léo et ses collaborateurs interviennent en sécurité avec du matériel professionnel dans toute la zone de Saint-Didier-au-Mont-d'Or, Caluire, Neuville-sur-Saône et les communes environnantes. Consultez notre page dédiée à l'<a href="/services/elagage-abattage">élagage et abattage</a> ou <a href="/devis">demandez un devis gratuit</a>.</p>
    `.trim(),
  },
  {
    slug: 'creation-jardin-paysager-etapes',
    category: 'Création de jardins',
    title: "Créer un jardin paysager : les 7 étapes clés d'un beau projet",
    excerpt: "De l'esquisse au chantier, un jardin réussi se construit méthodiquement. Découvrez le processus complet de création d'un espace paysager professionnel.",
    date: '2025-12-10',
    updatedAt: '2026-05-15',
    readingTime: '8 min',
    author: 'Léo Maurice',
    image: '/images/travaux-paysagers.webp',
    keywords: ['création jardin paysager', 'aménagement jardin étapes', 'paysagiste création jardin'],
    content: `
<blockquote class="bg-[#F7F5F0] rounded-xl p-4 my-4 border-l-4 border-[#80BC00] text-[#2F2F2F]">
  <p><strong>À retenir :</strong> Un jardin paysager réussi naît de la rencontre entre l'analyse rigoureuse du terrain, l'écoute de vos usages et une sélection végétale adaptée au climat local. Chez LM Espace Vert, chaque création passe par 7 étapes structurantes pour vous garantir un résultat durable et esthétique.</p>
</blockquote>

<h2>Un jardin réussi se planifie</h2>
<p>La création d'un jardin ne s'improvise pas. Chez LM Espace Vert, Léo et son équipe suivent un processus rigoureux en 7 étapes pour garantir un résultat à la hauteur de vos attentes. De la première visite sur site jusqu'au suivi post-plantation, chaque phase compte.</p>

<h2>Étape 1 : L'analyse du terrain</h2>
<p>Exposition (nord, sud, est, ouest), type de sol (argileux, calcaire, sableux), drainage, relief, ensoleillement, vents dominants… Chaque paramètre influence les choix végétaux et les aménagements. Dans les jardins des Monts d'Or, le sol calcaire superficiel demande par exemple des amendements organiques et une sélection végétale spécifique.</p>

<h2>Étape 2 : L'écoute de vos besoins</h2>
<p>Jardin de contemplation ou actif ? Potager intégré ? Espace de jeux pour enfants ? Lieu de réception ? Jardin à faible entretien ou au contraire travaillé ? Vos usages et votre mode de vie définissent les zones fonctionnelles et orientent toute la composition.</p>

<h2>Étape 3 : Le plan de composition</h2>
<p>Un plan coté formalise les volumes, les allées, les massifs, les espaces minéraux et les zones de plantation. Il est le contrat visuel entre vous et nous. Il permet de visualiser le projet fini, d'ajuster les proportions et de valider le budget avant tout démarrage de travaux.</p>

<h2>Étape 4 : La sélection végétale</h2>
<p>Nous choisissons des végétaux adaptés à votre sol et à votre microclimat local (ombre, chaleur, vent des crêtes), en privilégiant les espèces résistantes aux étés chauds lyonnais et aux hivers modérés de la région. Les plantes invasives ou trop gourmandes en eau sont systématiquement écartées.</p>

<h2>Étape 5 : Les travaux de terrassement et de maçonnerie</h2>
<p>Terrasses, allées, dallages, murets de soutènement : les éléments structurants sont réalisés en premier, avant toute plantation. Cette phase peut représenter 40 à 60 % du budget total selon la topographie du terrain.</p>

<h2>Étape 6 : Les plantations</h2>
<p>Arbres en tige, arbustes charpentiers, vivaces, gazon — tout est mis en place selon les densités et les saisons recommandées. Nous respectons scrupuleusement les règles de plantation (profondeur, distance, orientation) pour maximiser les chances de reprise.</p>

<h2>Étape 7 : Le suivi post-plantation</h2>
<p>Un jardin fraîchement créé nécessite un arrosage soutenu et un suivi attentifs durant les 1 à 2 premières saisons. LM Espace Vert assure ce suivi pour garantir la reprise des végétaux et ajuster si nécessaire.</p>

<div class="overflow-x-auto my-6"><table class="w-full text-sm border-collapse">
<thead><tr class="bg-[#80BC00] text-white"><th class="p-2 text-left">Étape</th><th class="p-2 text-left">Durée estimée</th><th class="p-2 text-left">Part du budget</th><th class="p-2 text-left">Points d'attention</th></tr></thead>
<tbody>
<tr class="border-b"><td class="p-2">1. Analyse terrain</td><td class="p-2">1 visite (gratuite)</td><td class="p-2">—</td><td class="p-2">Sol, exposition, contraintes</td></tr>
<tr class="border-b bg-[#F7F5F0]"><td class="p-2">2. Écoute besoins</td><td class="p-2">1 rendez-vous</td><td class="p-2">—</td><td class="p-2">Usages, budget, délais</td></tr>
<tr class="border-b"><td class="p-2">3. Plan de composition</td><td class="p-2">1–3 semaines</td><td class="p-2">5–10 %</td><td class="p-2">Validation avant chantier</td></tr>
<tr class="border-b bg-[#F7F5F0]"><td class="p-2">4. Sélection végétale</td><td class="p-2">Incluse dans le plan</td><td class="p-2">15–30 %</td><td class="p-2">Espèces adaptées au microclimat</td></tr>
<tr class="border-b"><td class="p-2">5. Terrassement + maçonnerie</td><td class="p-2">2–10 jours</td><td class="p-2">30–50 %</td><td class="p-2">Phase la plus impactante</td></tr>
<tr class="border-b bg-[#F7F5F0]"><td class="p-2">6. Plantations</td><td class="p-2">1–3 jours</td><td class="p-2">20–35 %</td><td class="p-2">Saisons de plantation</td></tr>
<tr class="border-b"><td class="p-2">7. Suivi post-plantation</td><td class="p-2">1–2 saisons</td><td class="p-2">5–10 %</td><td class="p-2">Arrosage + ajustements</td></tr>
</tbody>
</table></div>

<div class="bg-[#F7F5F0] rounded-xl p-4 my-4 border-l-4 border-[#80BC00] text-[#2F2F2F]">
  <strong>À retenir :</strong>
  <ul class="mt-2">
    <li>L'analyse du sol est indispensable avant toute sélection végétale</li>
    <li>Le terrassement représente souvent la moitié du budget — anticipez-le</li>
    <li>Mieux vaut planter peu de végétaux de bonne qualité que beaucoup de petits sujets</li>
    <li>Le suivi post-plantation est aussi important que la plantation elle-même</li>
    <li>Les meilleures saisons de plantation sont le printemps (mars-mai) et l'automne (sept-nov)</li>
  </ul>
</div>

<h2>Confiez votre projet à LM Espace Vert</h2>
<p>Léo intervient dans toute la région lyonnaise pour la conception et la réalisation de jardins paysagers. De la villa contemporaine au mas provençal, de la cour de ville au parc des Monts d'Or, chaque projet est unique. <a href="/devis">Demandez votre devis gratuit</a> — la visite sur site est offerte.</p>
    `.trim(),
  },
  {
    slug: 'pelouse-entretien-annuel',
    category: 'Entretien',
    title: "Le calendrier complet d'entretien de votre pelouse",
    excerpt: "Tonte, scarification, aération, semis, fertilisation… Chaque mois a ses tâches. Suivez ce calendrier adapté au climat de la région lyonnaise.",
    date: '2025-11-15',
    updatedAt: '2026-05-15',
    readingTime: '7 min',
    author: 'Léo Maurice',
    image: '/images/blog-pelouse.webp',
    keywords: ['entretien pelouse', 'tonte gazon', 'calendrier pelouse', 'scarification gazon'],
    content: `
<blockquote class="bg-[#F7F5F0] rounded-xl p-4 my-4 border-l-4 border-[#80BC00] text-[#2F2F2F]">
  <p><strong>À retenir :</strong> Dans la région lyonnaise, septembre-octobre est la période la plus critique pour l'entretien de la pelouse. La scarification, l'aération et le regarnissage réalisés à cette période déterminent la qualité du gazon pour toute l'année suivante. Ne la manquez pas !</p>
</blockquote>

<h2>Un programme mensuel pour une pelouse impeccable</h2>
<p>Dans la région de Lyon et du nord Rhône, le climat semi-continental impose un programme d'entretien adapté. Les étés secs et chauds stressent la pelouse, les hivers doux favorisent les mousses et les maladies fongiques. Voici le calendrier professionnel de LM Espace Vert.</p>

<h2>Janvier - Février : Repos et préparation</h2>
<p>Évitez de marcher sur une pelouse gelée — les brins d'herbe cassent et créent des zones mortes. Profitez-en pour affûter et réviser vos outils (affûtage des lames de tondeuse). Commandez vos semences et engrais pour être prêt dès mars.</p>

<h2>Mars : Réveil de la pelouse</h2>
<p>Première tonte haute (6-7 cm) dès que la température dépasse 8 °C de façon régulière, généralement mi-mars dans le Rhône. Scarification légère pour éliminer le feutre hivernal. Semis des zones clairsemées (hâtives). Premier apport d'engrais de printemps riche en azote.</p>

<h2>Avril - Mai : Pleine croissance</h2>
<p>Tonte régulière toutes les semaines (hauteur 4-5 cm). Arrosage si pas de pluie significative pendant plus de 8-10 jours. Désherbage sélectif des adventices (pissenlits, plantains, renoncules). Aération par décompaction si le sol est tassé.</p>

<h2>Juin - Août : Gestion de la chaleur lyonnaise</h2>
<p>Remontez la hauteur de coupe à 6-7 cm pour protéger le sol de l'évaporation et favoriser un enracinement plus profond. Arrosage préférable le matin tôt (6-8h) pour éviter les brûlures. Suspension de la fertilisation azotée — l'azote stimule la croissance et fragilise la pelouse en période de stress hydrique. Tolérez le jaunissement si votre gazon entre en dormance estivale — c'est un mécanisme naturel de protection, non une mort.</p>

<h2>Septembre - Octobre : La grande remise en état</h2>
<p>C'est <strong>la période la plus importante de l'année</strong> pour la pelouse. La conjonction sol encore chaud + températures douces + rosées matinales crée des conditions idéales pour la germination et l'enracinement. Interventions recommandées : scarification en profondeur (2-3 passages croisés), aération mécanique (décompacteur à fourches creux), regarnissage des zones dégarnies avec un mélange spécifique, apport d'engrais d'automne riche en potasse et phosphore (formule 4-12-12 ou similaire).</p>

<h2>Novembre - Décembre : Derniers soins</h2>
<p>Dernière tonte avant l'hiver (hauteur 5 cm — ni trop court pour éviter les brûlures de gel, ni trop long pour limiter les maladies fongiques). Ramassage soigneux des feuilles (elles étouffent le gazon et favorisent la fonte des neiges). Traitement anti-mousse si nécessaire (soufre ou sulfate de fer).</p>

<div class="overflow-x-auto my-6"><table class="w-full text-sm border-collapse">
<thead><tr class="bg-[#80BC00] text-white"><th class="p-2 text-left">Mois</th><th class="p-2 text-left">Tâche prioritaire</th><th class="p-2 text-left">Hauteur de tonte</th><th class="p-2 text-left">Fertilisation</th></tr></thead>
<tbody>
<tr class="border-b"><td class="p-2">Janvier–février</td><td class="p-2">Repos — préparation matériel</td><td class="p-2">—</td><td class="p-2">—</td></tr>
<tr class="border-b bg-[#F7F5F0]"><td class="p-2">Mars</td><td class="p-2">1re tonte + scarification légère</td><td class="p-2">6–7 cm</td><td class="p-2">Engrais printemps (N fort)</td></tr>
<tr class="border-b"><td class="p-2">Avril–mai</td><td class="p-2">Tonte hebdomadaire + désherbage</td><td class="p-2">4–5 cm</td><td class="p-2">Engrais gazon régulier</td></tr>
<tr class="border-b bg-[#F7F5F0]"><td class="p-2">Juin–août</td><td class="p-2">Tonte haute + arrosage matin</td><td class="p-2">6–7 cm</td><td class="p-2">Stop azote / potassium</td></tr>
<tr class="border-b"><td class="p-2">Septembre–octobre</td><td class="p-2">Scarification + regarnissage ★★★</td><td class="p-2">5–6 cm</td><td class="p-2">Engrais automne (P+K)</td></tr>
<tr class="border-b bg-[#F7F5F0]"><td class="p-2">Novembre–décembre</td><td class="p-2">Dernière tonte + feuilles</td><td class="p-2">5 cm</td><td class="p-2">—</td></tr>
</tbody>
</table></div>

<div class="bg-[#F7F5F0] rounded-xl p-4 my-4 border-l-4 border-[#80BC00] text-[#2F2F2F]">
  <strong>À retenir :</strong>
  <ul class="mt-2">
    <li>Ne jamais tondre une pelouse gelée — les brins cassent et créent des zones mortes</li>
    <li>Remonter la hauteur de coupe à 6–7 cm en été pour lutter contre la chaleur</li>
    <li>Septembre–octobre est la période d'entretien la plus importante de l'année</li>
    <li>Arroser peu fréquemment mais en profondeur plutôt que souvent et superficiel</li>
    <li>Un gazon qui jaunit en été n'est pas forcément mort — c'est souvent une dormance normale</li>
  </ul>
</div>

<h2>Faire appel à LM Espace Vert pour votre pelouse</h2>
<p>LM Espace Vert propose des contrats d'entretien de pelouse adaptés à vos besoins, de l'intervention ponctuelle au suivi annuel complet. Découvrez nos <a href="/services/entretien-jardin">prestations d'entretien</a> ou <a href="/devis">contactez-nous pour un devis gratuit</a>.</p>
    `.trim(),
  },
  {
    slug: 'arrosage-automatique-installation',
    category: 'Arrosage',
    title: "Arrosage automatique : comment l'installer et l'entretenir ?",
    excerpt: "Un système d'arrosage automatique bien conçu économise l'eau et préserve vos plantations. Guide complet d'installation et de programmation.",
    date: '2025-10-20',
    readingTime: '6 min',
    author: 'Léo Maurice',
    image: '/images/arrosage-automatique.webp',
    keywords: ["arrosage automatique", "installation arrosage", "programmateur arrosage", "économie eau jardin"],
    content: `
<h2>L'arrosage automatique : un investissement rentable</h2>
<p>Face aux étés de plus en plus chauds dans la région lyonnaise, un système d'arrosage automatique permet d'économiser jusqu'à 40% d'eau par rapport à un arrosage manuel. Voici comment l'envisager.</p>

<h2>Les différents types de systèmes</h2>
<h3>L'aspersion par rotateurs ou sprinkleurs</h3>
<p>Idéale pour les pelouses et les grandes surfaces. Les têtes d'arrosage escamotables se rétractent après l'arrosage et s'intègrent parfaitement dans le gazon.</p>

<h3>Le goutte-à-goutte</h3>
<p>Parfait pour les massifs, les haies et les potagers. L'eau est délivrée directement à la base des plantes, limitant l'évaporation et le développement des mauvaises herbes.</p>

<h3>Le micro-aspersion</h3>
<p>Solution intermédiaire pour les massifs d'arbustes et les jardins de rocaille.</p>

<h2>Les étapes d'installation</h2>
<ol>
<li>Réalisation du plan d'arrosage</li>
<li>Calcul du débit et des besoins par zone</li>
<li>Pose des canalisations (enterrées à 20-30 cm)</li>
<li>Installation des têtes d'arrosage</li>
<li>Raccordement au programmateur et au réseau d'eau</li>
<li>Réglage et programmation</li>
</ol>

<h2>La gestion intelligente</h2>
<p>Les programmateurs connectés (Hunter, Rain Bird, Gardena Smart) s'adaptent aux prévisions météo et coupent automatiquement l'arrosage en cas de pluie.</p>

<h2>L'hivernage du système</h2>
<p>En octobre, il est indispensable de purger les canalisations à l'air comprimé pour éviter le gel. LM Espace Vert assure l'installation et la mise en hivernage de votre système.</p>
    `.trim(),
  },
  {
    slug: 'terrasse-bois-entretien',
    category: 'Maçonnerie paysagère',
    title: "Entretien d'une terrasse en bois : les bons gestes chaque saison",
    excerpt: "Nettoyage, lasure, protection hivernale… Une terrasse en bois demande des soins réguliers pour conserver toute sa beauté. Nos conseils professionnels.",
    date: '2025-09-05',
    readingTime: '5 min',
    author: 'Léo Maurice',
    image: '/images/realisation-9.webp',
    keywords: ['entretien terrasse bois', 'lasure terrasse', 'nettoyage terrasse bois'],
    content: `
<h2>Le bois en extérieur : un matériau vivant</h2>
<p>Le bois est le matériau de terrasse par excellence dans les jardins lyonnais : chaleureux, naturel, esthétique. Mais il nécessite un entretien régulier pour résister aux intempéries.</p>

<h2>Le nettoyage annuel (printemps)</h2>
<p>Commencez par un nettoyage à haute pression (150 bars maximum) ou avec un nettoyant bois spécifique. Rincez abondamment et laissez sécher 48h avant toute application de traitement.</p>

<h2>L'application de l'huile ou de la lasure</h2>
<p>Selon l'essence utilisée :</p>
<ul>
<li><strong>Exotiques (teck, ipé)</strong> : huile naturelle à appliquer tous les 1-2 ans</li>
<li><strong>Pin traité autoclave</strong> : lasure pénétrante tous les 2-3 ans</li>
<li><strong>Bois composite</strong> : nettoyage seul, pas de traitement nécessaire</li>
</ul>

<h2>La protection hivernale</h2>
<p>En novembre, vérifiez les fixations et les lambourdes. Un gonflage excessif des lames peut indiquer une stagnation d'eau sous la terrasse. Assurez la ventilation.</p>

<h2>Les gestes à éviter</h2>
<p>N'appliquez jamais de produit sur un bois humide. Évitez les produits filmogènes (peinture) sur du bois traité en profondeur — le film se fissure rapidement.</p>
    `.trim(),
  },
  {
    slug: 'compostage-jardin-guide-debutant',
    category: 'Écologie & Jardinage durable',
    title: "Débuter le compostage au jardin : guide pratique pour débutants",
    excerpt: "Le compost est l'or noir du jardin. En recyclant vos déchets verts, vous produisez un amendement naturel exceptionnel. Apprenez à composter facilement.",
    date: '2025-08-12',
    readingTime: '5 min',
    author: 'Léo Maurice',
    image: '/images/blog-compostage.webp',
    keywords: ['compostage jardin', 'compost débutant', 'amendement naturel'],
    content: `
<h2>Pourquoi composter ?</h2>
<p>Le compostage réduit vos déchets de cuisine et de jardin de 30%, produit un amendement naturel de haute qualité, et améliore la structure et la fertilité de vos sols.</p>

<h2>Ce qui peut aller dans le composteur</h2>
<p><strong>Matières azotées ("vertes")</strong> : tontes de pelouse fraîches, épluchures de légumes, marc de café, fanes de légumes.<br>
<strong>Matières carbonées ("brunes")</strong> : feuilles mortes, paille, carton non imprimé, branches broyées, papier journal.</p>

<h2>Le secret du bon compost : l'équilibre</h2>
<p>Alternez couches vertes et brunes dans un ratio 1/3 vert pour 2/3 brun. Maintenez une humidité de la consistance d'une éponge essorée. Retournez le tas toutes les 3-4 semaines.</p>

<h2>Quand est-il prêt ?</h2>
<p>En 3 à 6 mois (4-8 mois en hiver), votre compost est mûr quand il ressemble à une terre sombre, grumeleuse et qui sent bon la forêt. Tamisez-le avant utilisation.</p>

<h2>Comment l'utiliser ?</h2>
<p>En paillage (couche de 5 cm sur les massifs), en amendement (enfoui à 15 cm de profondeur), en rempotage (mélangé avec de la terre). LM Espace Vert utilise systématiquement du compost dans ses créations.</p>
    `.trim(),
  },
  {
    slug: 'plantes-melliferes-pollinisateurs',
    category: 'Biodiversité & Nature',
    title: "10 plantes mellifères indispensables pour attirer les pollinisateurs",
    excerpt: "Abeilles, bourdons, papillons… Ces précieux alliés du jardin ont besoin de nous. Voici les 10 végétaux à planter pour en faire un refuge pour la biodiversité.",
    date: '2025-07-08',
    readingTime: '5 min',
    author: 'Léo Maurice',
    image: '/images/blog-massif-fleurs.webp',
    keywords: ['plantes mellifères', 'pollinisateurs jardin', 'biodiversité jardin'],
    content: `
<h2>Pourquoi favoriser les pollinisateurs ?</h2>
<p>Les abeilles et autres insectes pollinisateurs sont responsables de la reproduction de 80% des plantes à fleurs. Sans eux, pas de fruits, pas de légumes. Votre jardin peut devenir un refuge essentiel.</p>

<h2>Les 10 incontournables</h2>
<ol>
<li><strong>La lavande (Lavandula angustifolia)</strong> — floraison juin-août, tolère la sécheresse, idéale en zone méditerranéenne et dans le Rhône</li>
<li><strong>La bourrache (Borago officinalis)</strong> — annuelle facile, fleurs bleues mellifères de mai à octobre</li>
<li><strong>L'agastache (Agastache foeniculum)</strong> — vivace en longue floraison, très appréciée des bourdons</li>
<li><strong>Le corydale (Corydalis)</strong> — floraison précoce, nourrit les premières abeilles du printemps</li>
<li><strong>La sauge (Salvia nemorosa)</strong> — longue floraison bleue, robuste et peu gourmande</li>
<li><strong>L'échinacée (Echinacea purpurea)</strong> — vivace majestueuse, graines prisées des chardonnerets</li>
<li><strong>Le buddleia (Buddleja davidii)</strong> — "arbre à papillons", à tailler court chaque printemps</li>
<li><strong>La phacélie (Phacelia tanacetifolia)</strong> — engrais vert et fleur mellifère exceptionnelle</li>
<li><strong>Le trèfle blanc (Trifolium repens)</strong> — à intégrer dans les mélanges de gazon fleuri</li>
<li><strong>L'hémérocalle (Hemerocallis)</strong> — vivace facile, fleurs d'un jour en continûment remplacées</li>
</ol>

<h2>Conseil de plantation</h2>
<p>Pour nourrir les pollinisateurs de mars à novembre, mixez des espèces à floraison échelonnée. LM Espace Vert crée des massifs mellifères sur mesure dans toute la zone de Saint-Didier-au-Mont-d'Or.</p>
    `.trim(),
  },
  {
    slug: 'taille-rosiers-printemps-automne',
    category: 'Taille & Coupe',
    title: "Taille des rosiers : techniques et calendrier selon les variétés",
    excerpt: "Rosiers buissons, grimpants, tiges, arbustifs… Chaque type se taille différemment. Notre guide illustré pour des rosiers en pleine forme.",
    date: '2025-06-15',
    readingTime: '6 min',
    author: 'Léo Maurice',
    image: '/images/blog-rosiers.webp',
    keywords: ['taille rosiers', 'rosiers printemps', 'quand tailler rosiers'],
    content: `
<h2>Les rosiers : reine du jardin, défi de la taille</h2>
<p>Le rosier est probablement la plante qui génère le plus de questions sur la taille. En réalité, chaque type de rosier a ses propres règles — il suffit de les connaître.</p>

<h2>Les rosiers à floraison répétée (hybrides de thé, floribundas)</h2>
<p><strong>Quand ?</strong> Fin février - début mars en région lyonnaise, dès la montée de sève mais avant les grosses gelées. <strong>Comment ?</strong> Rabattez à 3-5 yeux (bourgeons) au-dessus du sol pour les buissons, à 40-60 cm. Coupez toujours en biseau au-dessus d'un œil extérieur.</p>

<h2>Les rosiers grimpants</h2>
<p><strong>Sur vieilles tiges</strong> : raccourcissez les rameaux latéraux à 2-3 yeux. <strong>Sur jeunes tiges</strong> : conservez pour renouveler la charpente. Évitez de tailler court — les grimpants fleurissent sur le vieux bois.</p>

<h2>Les rosiers arbustifs et anciens</h2>
<p>Taille légère : supprimez les bois morts, croisés et malformés. Ces variétés fleurissent sur bois de 2 ans — trop tailler = pas de fleurs.</p>

<h2>La taille d'automne</h2>
<p>Réduisez les tiges d'un tiers en novembre pour éviter que le vent ne bascule les plantes. C'est tout — la vraie taille se fait au printemps.</p>

<h2>Les outils indispensables</h2>
<p>Sécateur à lame franche (jamais à enclume sur bois tendre), gants épais, désinfectant (alcool à 90°) pour éviter la transmission des maladies d'un rosier à l'autre.</p>
    `.trim(),
  },
  {
    slug: 'gazon-trouee-reparer-regarnir',
    category: 'Entretien',
    title: "Comment réparer les trous et zones dégarnies de votre pelouse ?",
    excerpt: "Zones mortes, taupinières, passages usés… Votre pelouse présente des imperfections ? Voici les techniques professionnelles pour la regarnir efficacement.",
    date: '2025-05-20',
    readingTime: '5 min',
    author: 'Léo Maurice',
    image: '/images/blog-gazon-rouleau.webp',
    keywords: ['réparer pelouse', 'regarnir gazon', 'zones dégarnies pelouse'],
    content: `
<h2>Diagnostiquer avant d'agir</h2>
<p>Avant de regarnir, identifiez la cause de la dégradation : compaction du sol, ombre excessive, drainage insuffisant, taupinière, ou simplement usure. Sans traitement de la cause, le problème reviendra.</p>

<h2>La méthode en 5 étapes</h2>
<h3>1. Préparer la zone</h3>
<p>Binez la zone dégarnies sur 5-8 cm, retirez les mauvaises herbes et les débris. Si le sol est compact, aérez-le à la fourche-bêche.</p>

<h3>2. Amender le sol</h3>
<p>Incorporez du sable grossier (si sol argileux) et du compost mûr pour améliorer la structure et la fertilité.</p>

<h3>3. Niveler et tasser légèrement</h3>
<p>Le sol doit être au même niveau que la pelouse environnante, légèrement tassé à la planche.</p>

<h3>4. Semer ou poser du gazon en rouleaux</h3>
<p>Pour les petites surfaces, le semis est économique. Pour les grandes zones ou les réparations rapides, le gazon en rouleaux est plus efficace. Choisissez un mélange adapté à l'exposition.</p>

<h3>5. Arroser régulièrement</h3>
<p>Les 3-4 premières semaines sont cruciales. Arrosez léger et fréquent (2 fois/jour en été) jusqu'à levée complète.</p>

<h2>La meilleure période</h2>
<p>Septembre-octobre sont idéaux en région lyonnaise : chaleur modérée, humidité naturelle, pas de gelées précoces. Le printemps (mars-avril) est la deuxième fenêtre favorable.</p>
    `.trim(),
  },
  {
    slug: 'jardin-potager-debutant',
    category: 'Potager & Permaculture',
    title: "Créer un potager pour débutants : par où commencer ?",
    excerpt: "Tomates, courgettes, salades, herbes aromatiques… Cultiver ses légumes, c'est plus simple qu'on ne le croit. Notre guide pas à pas pour débuter.",
    date: '2025-04-25',
    readingTime: '7 min',
    author: 'Léo Maurice',
    image: '/images/vente-vegetaux.webp',
    keywords: ['potager débutant', 'créer potager', 'jardin légumes'],
    content: `
<h2>Votre premier potager : choisir le bon emplacement</h2>
<p>Un potager réussi demande au minimum 6h de soleil par jour. Dans la région de Lyon, orientez-le au sud ou sud-est, à l'abri des vents du nord. Évitez les zones trop ombragées par des arbres ou des bâtiments.</p>

<h2>Dimensionner raisonnablement</h2>
<p>Pour un débutant, commencez petit (4-6 m²) plutôt que de voir trop grand. Un petit potager bien entretenu est plus productif qu'un grand laissé à l'abandon.</p>

<h2>La préparation du sol</h2>
<p>Bêchez sur 30-40 cm, incorporez du compost ou du fumier bien décomposé. Le sol idéal est meuble, humifère et bien drainé. En sol argileux (fréquent en banlieue lyonnaise), ajoutez du sable grossier.</p>

<h2>Les légumes faciles pour commencer</h2>
<ul>
<li><strong>Tomates</strong> : à tutorer, arroser régulièrement, ébourgeonnner</li>
<li><strong>Courgettes</strong> : ultra-productives, peu de soins</li>
<li><strong>Haricots verts</strong> : semis direct, récolte abondante</li>
<li><strong>Salades</strong> : cycles courts, peuvent se semer en continu</li>
<li><strong>Herbes aromatiques</strong> : basilic, persil, ciboulette, thym</li>
</ul>

<h2>L'intégration dans votre jardin paysager</h2>
<p>Un potager décoratif ("potager en carrés") peut s'intégrer élégamment dans un jardin d'agrément. LM Espace Vert réalise des potagers décoratifs sur mesure, avec carrés surélevés, allées en bois et tuteurs esthétiques.</p>
    `.trim(),
  },
  {
    slug: 'massif-fleurs-persistantes-4-saisons',
    category: 'Plantes & Végétaux',
    title: "Créer un massif fleuri 4 saisons : sélection et associations",
    excerpt: "Un massif qui fleurit de janvier à décembre, c'est possible ! Apprenez à choisir et associer des végétaux pour une explosion de couleurs toute l'année.",
    date: '2025-03-30',
    readingTime: '6 min',
    author: 'Léo Maurice',
    image: "/images/scraped/Aménagement de cour et jardin extérieur près de Limonest.jpeg",
    keywords: ['massif fleuri', 'massif 4 saisons', 'plantes vivaces associées'],
    content: `
<h2>La clé : l'échelonnement des floraisons</h2>
<p>Un massif qui fleurit en permanence repose sur une sélection rigoureuse d'espèces à floraisons décalées. Voici la palette idéale pour la région lyonnaise.</p>

<h2>Hiver (décembre à mars)</h2>
<p>Hellébores (fleurs de noël), viburnum tinus, skimmia japonica, cornus mas (cornouiller mâle, fleurs jaunes en février), cyclamens de Naples.</p>

<h2>Printemps (avril à mai)</h2>
<p>Tulipes, narcisses, myosotis, forsythia, spirées (en blanc et rose), cerisiers à fleurs, pivoines.</p>

<h2>Été (juin à septembre)</h2>
<p>Rosiers, lavandes, géraniums vivaces, rudbeckias, échinacées, verveines, sauges ornementales.</p>

<h2>Automne (octobre à novembre)</h2>
<p>Asters, anémones du Japon, sedum (orpin), cyclamen hederifolium, physalis, colchiques.</p>

<h2>Les persistants comme armature</h2>
<p>Intégrez des arbustes persistants (buis en boule, photinia, viburnum) pour maintenir une structure visuelle en hiver, quand les vivaces sont en dormance.</p>

<h2>Nos associations chouchou</h2>
<p>Graminées + vivaces (miscanthus + echinacée), rosiers + lavande, pivoines + agapanthes, hostas + fougères.</p>
    `.trim(),
  },
  {
    slug: 'muret-pierre-seche-construction',
    category: 'Maçonnerie paysagère',
    title: "Construire un muret en pierre sèche : technique et conseils",
    excerpt: "Le muret en pierre sèche est un art ancestral qui refait surface dans les jardins contemporains. Écologique, esthétique et durable — voici comment le construire.",
    date: '2025-02-18',
    readingTime: '7 min',
    author: 'Léo Maurice',
    image: '/images/realisation-4.webp',
    keywords: ['muret pierre sèche', 'construction muret jardin', 'maçonnerie paysagère'],
    content: `
<h2>La pierre sèche : un patrimoine vivant</h2>
<p>Inscrite au patrimoine culturel immatériel de l'UNESCO, la technique de la pierre sèche connaît un renouveau dans les jardins contemporains. Pas de ciment, pas de fondation béton — juste la gravité et l'emboîtement des pierres.</p>

<h2>Les avantages du muret en pierre sèche</h2>
<ul>
<li>Drainage naturel : pas d'accumulation d'eau</li>
<li>Habitat pour la faune (lézards, insectes, mousses)</li>
<li>Esthétique naturelle intemporelle</li>
<li>Durée de vie illimitée si bien construit</li>
<li>Adapté aux terrains en pente</li>
</ul>

<h2>La technique de construction</h2>
<h3>Le choix de la pierre</h3>
<p>Préférez les pierres locales (calcaire de la région lyonnaise, grès, granit). Évitez les pierres trop polies ou trop régulières — elles ne s'accrochent pas.</p>

<h3>La base</h3>
<p>Créez une fondation de 20-30 cm de profondeur avec les plus grosses pierres. La largeur à la base doit être égale à la hauteur du mur.</p>

<h3>L'inclinaison</h3>
<p>Donnez un fruit (inclinaison vers le talus) de 10-15% pour la stabilité. Les deux faces du mur ne sont pas verticales.</p>

<h3>L'emboîtement</h3>
<p>Posez chaque pierre sur deux pierres (principe des joints croisés). Évitez les joints filants. Utilisez de petites pierres pour caler.</p>

<h2>LM Espace Vert, spécialiste de la maçonnerie paysagère</h2>
<p>Nous réalisons murets, terrasses et allées en pierre naturelle dans toute la région de Saint-Didier-au-Mont-d'Or et du nord lyonnais.</p>
    `.trim(),
  },
  {
    slug: 'taille-arbres-fruitiers-hiver',
    category: 'Taille & Coupe',
    title: "Tailler les arbres fruitiers en hiver : le guide complet",
    excerpt: "Pommiers, poiriers, pêchers, cerisiers… La taille hivernale conditionne la récolte de l'année. Voici les techniques adaptées à chaque espèce.",
    date: '2025-01-20',
    readingTime: '8 min',
    author: 'Léo Maurice',
    image: '/images/blog-elagage-arbre.webp',
    keywords: ['taille arbres fruitiers hiver', 'tailler pommier', 'taille fruitiers'],
    content: `
<h2>L'importance de la taille hivernale des fruitiers</h2>
<p>La taille de formation et de fructification des arbres fruitiers conditionne directement la qualité et la quantité de la récolte. En pleine dormance (janvier-février en région lyonnaise), l'arbre est le moins vulnérable aux maladies.</p>

<h2>Le pommier et le poirier</h2>
<p>Ces deux espèces fructifient sur des rameaux courts appelés <strong>dards</strong> et <strong>boutons</strong>. Ne coupez pas tout ! La règle : supprimer les branches mortes, croisées, rentrantes et celles qui ombragent le centre. Favorisez une forme en gobelet (centre aéré).</p>

<h2>Le pêcher</h2>
<p>Le pêcher fructifie uniquement sur les rameaux de l'année précédente (rameaux à bois portant des boutons mixtes). Taille sévère chaque année : supprimez les 2/3 des pousses de l'an dernier, en conservant des rameaux de remplacement.</p>

<h2>Le cerisier</h2>
<p>Attention : le cerisier taillé en plein hiver est sensible à la bactériose. Attendez la fin de la floraison (mai) pour l'entretien courant. En hiver, limitez-vous à la suppression des bois morts.</p>

<h2>Le prunier</h2>
<p>Le prunier se taille en fin de floraison (mars-avril) pour limiter les risques d'Eutypa. Conservez un gobelet aéré et supprimez les drageons.</p>

<h2>Règles générales</h2>
<ul>
<li>Outils tranchants et désinfectés entre chaque arbre</li>
<li>Cicatrisant naturel sur les grosses coupes (mastic à greffer)</li>
<li>Ne taillez jamais par temps de gel ou de pluie</li>
<li>Brûlez les bois malades au lieu de les composter</li>
</ul>
    `.trim(),
  },
  {
    slug: 'haie-mixte-biodiversite',
    category: 'Biodiversité & Nature',
    title: "Planter une haie mixte : le meilleur choix pour la biodiversité",
    excerpt: "Une haie composée d'essences variées offre plus de ressources pour la faune qu'une haie monospécifique. Découvrez comment la composer et la planter.",
    date: '2024-12-05',
    readingTime: '6 min',
    author: 'Léo Maurice',
    image: '/images/blog-haie-verte.webp',
    keywords: ['haie mixte biodiversité', 'haie bocagère', 'planter haie'],
    content: `
<h2>Pourquoi choisir une haie mixte ?</h2>
<p>La haie monospécifique (thuya, laurier) est courante mais offre peu d'intérêt pour la faune. Une haie composée de 5-10 essences différentes crée un véritable corridor écologique : abri, nourriture, site de nidification.</p>

<h2>Les essences indigènes recommandées</h2>
<p><strong>Prunellier (Prunus spinosa)</strong> — fleurs blanches très mellifères, baies (prunelles) pour les oiseaux, épines protectrices.<br>
<strong>Cornouiller sanguin (Cornus sanguinea)</strong> — beau feuillage rouge automnal, baies bleues.<br>
<strong>Viorne obier (Viburnum opulus)</strong> — fleurs blanches, baies rouges translucides.<br>
<strong>Charme (Carpinus betulus)</strong> — haie dense, feuillage persistant en hiver, facile à tailler.<br>
<strong>Néflier (Mespilus germanica)</strong> — grande haie fruitière ornementale.<br>
<strong>Sureau noir (Sambucus nigra)</strong> — croissance rapide, baies précieuses pour les oiseaux.</p>

<h2>La plantation</h2>
<p>Période idéale : octobre-mars (hors gel) pour les plants en racines nues. Espacez les plants de 80 cm à 1 m, en quinconce sur 2 rangs pour une haie épaisse. Paillez abondamment le premier été.</p>

<h2>L'entretien d'une haie mixte</h2>
<p>Contrairement aux haies formelles, la haie bocagère peut se tailler alternativement d'un côté chaque année, en dehors des périodes de nidification (15 avril - 15 juillet). Laissez fleurir et fructifier autant que possible.</p>
    `.trim(),
  },
  {
    slug: 'jardin-sec-plantes-resistantes-secheresse',
    category: 'Plantes & Végétaux',
    title: "Jardin sec : les plantes résistantes à la sécheresse pour la région lyonnaise",
    excerpt: "Face aux étés de plus en plus arides, aménager un jardin économe en eau est devenu une nécessité. Nos recommandations pour votre région.",
    date: '2024-11-10',
    readingTime: '6 min',
    author: 'Léo Maurice',
    image: '/images/blog-jardin-sec.webp',
    keywords: ['jardin sec', 'plantes sécheresse', 'jardin économe eau Lyon'],
    content: `
<h2>Le défi des étés lyonnais</h2>
<p>La région de Lyon connaît des étés de plus en plus chauds et secs. Adapter son jardin à ces nouvelles conditions climatiques n'est pas une mode, c'est une nécessité.</p>

<h2>Les végétaux xérophytes incontournables</h2>
<h3>Arbustes</h3>
<p><strong>Romarin (Rosmarinus officinalis)</strong> — méditerranéen rustique, aromate et mellifère.<br>
<strong>Ciste (Cistus)</strong> — floraison spectaculaire de mai à juillet.<br>
<strong>Pyracantha</strong> — haie sèche productive en baies.<br>
<strong>Genévrier (Juniperus)</strong> — persistant, zéro entretien.</p>

<h3>Vivaces</h3>
<p><strong>Lavande (Lavandula)</strong> — icône du jardin sec.<br>
<strong>Gaura (Gaura lindheimeri)</strong> — floraison légère tout l'été.<br>
<strong>Santoline</strong> — feuillage argenté et fleurs jaunes.<br>
<strong>Stipa (Stipa tenuissima)</strong> — graminée dorée qui danse au vent.</p>

<h2>Les techniques du jardin sec</h2>
<ul>
<li>Paillage épais (8-10 cm) pour limiter l'évaporation</li>
<li>Récupération des eaux de pluie</li>
<li>Arrosage au goutte-à-goutte si nécessaire</li>
<li>Ajout de gravillons en surface (décoratif et limitant l'évaporation)</li>
</ul>

<h2>Repenser son jardin avec LM Espace Vert</h2>
<p>Nous créons des jardins secs esthétiques et durables, adaptés aux nouvelles conditions climatiques du nord Rhône.</p>
    `.trim(),
  },
  {
    slug: 'engazonnement-gazon-rouleaux-vs-semis',
    category: 'Création de jardins',
    title: "Gazon en rouleaux ou semis : quelle solution choisir ?",
    excerpt: "Deux méthodes pour créer une belle pelouse, deux philosophies. Notre comparaison complète pour vous aider à faire le bon choix selon votre budget et vos délais.",
    date: '2024-10-15',
    updatedAt: '2026-05-15',
    readingTime: '5 min',
    author: 'Léo Maurice',
    image: "/images/scraped/Tonte de pelouse et entretien d’espaces verts près de Limonest.jpeg",
    keywords: ['gazon rouleaux', 'semis gazon', 'engazonnement', 'créer pelouse'],
    content: `
<blockquote class="bg-[#F7F5F0] rounded-xl p-4 my-4 border-l-4 border-[#80BC00] text-[#2F2F2F]">
  <p><strong>À retenir :</strong> Pour un résultat immédiat ou une pente à stabiliser, choisissez le gazon en rouleaux. Pour un budget serré, un choix de mélanges spécialisés (ombre, sécheresse, sport) ou une grande surface, optez pour le semis. Dans les deux cas, la préparation du sol est la clé du succès.</p>
</blockquote>

<h2>Deux méthodes, deux profils</h2>
<p>Le gazon en rouleaux et le semis sont les deux façons principales de créer une pelouse. Le choix dépend de votre budget, du temps que vous pouvez consacrer à l'entretien initial et de vos délais. Léo de LM Espace Vert vous aide ici à faire le bon choix pour votre situation.</p>

<h2>Le gazon en rouleaux : immédiat et fiable</h2>
<p>Le gazon en rouleaux est précultivé en pépinière pendant 12 à 18 mois avant d'être découpé en plaques et livré. Il s'enracine en 3 à 4 semaines selon la saison et la qualité de la préparation du sol.</p>
<ul>
  <li><strong>Avantages</strong> : résultat immédiat, idéal pour les pentes (le rouleau stabilise le sol), pelouse dense dès le départ, moins sensible aux mauvaises herbes en phase d'installation, moins d'arrosage intensif que le semis</li>
  <li><strong>Inconvénients</strong> : 3 à 5 fois plus cher que le semis à surface égale, choix de mélanges limité aux variétés standards, risque de rejet si le sol n'est pas parfaitement préparé ou si le rouleau est posé sur sol sec en été</li>
  <li><strong>Prix indicatif à Lyon</strong> : 20 à 35 €/m² fourni et posé, préparation du sol comprise</li>
</ul>

<h2>Le semis : économique et personnalisable</h2>
<p>Le semis consiste à épandre des graines de gazon directement sur un sol préparé. C'est la méthode la plus économique et la plus flexible en termes de composition végétale.</p>
<ul>
  <li><strong>Avantages</strong> : coût 3 à 5 fois inférieur au rouleau, très large choix de mélanges spécialisés (gazon résistant sécheresse, gazon d'ombre, gazon sportif intensif, gazon fleuri…), bonne adaptation à long terme au sol local</li>
  <li><strong>Inconvénients</strong> : délai de 6 à 8 semaines avant une pelouse présentable (dont 3 semaines où le jardin est interdit de passage), arrosage intensif les 3 premières semaines (1 à 2 fois par jour), vulnérabilité aux oiseaux et aux mauvaises herbes pendant la germination</li>
  <li><strong>Prix indicatif à Lyon</strong> : 8 à 18 €/m² fourni et semé, préparation du sol comprise</li>
</ul>

<div class="overflow-x-auto my-6"><table class="w-full text-sm border-collapse">
<thead><tr class="bg-[#80BC00] text-white"><th class="p-2 text-left">Critère</th><th class="p-2 text-left">Gazon en rouleaux</th><th class="p-2 text-left">Semis</th></tr></thead>
<tbody>
<tr class="border-b"><td class="p-2">Délai de praticabilité</td><td class="p-2">3–4 semaines</td><td class="p-2">6–8 semaines</td></tr>
<tr class="border-b bg-[#F7F5F0]"><td class="p-2">Prix (posé)</td><td class="p-2">20–35 €/m²</td><td class="p-2">8–18 €/m²</td></tr>
<tr class="border-b"><td class="p-2">Choix de mélanges</td><td class="p-2">Limité (3–5 types)</td><td class="p-2">Très large (20+ mélanges)</td></tr>
<tr class="border-b bg-[#F7F5F0]"><td class="p-2">Arrosage installation</td><td class="p-2">Modéré</td><td class="p-2">Intensif (2×/jour 3 sem.)</td></tr>
<tr class="border-b"><td class="p-2">Adapté aux pentes</td><td class="p-2">Excellent</td><td class="p-2">Moyen (filet anti-érosion)</td></tr>
<tr class="border-b bg-[#F7F5F0]"><td class="p-2">Résistance sécheresse (long terme)</td><td class="p-2">Bonne</td><td class="p-2">Excellente (si bon mélange)</td></tr>
<tr class="border-b"><td class="p-2">Meilleure saison (Rhône)</td><td class="p-2">Avril–mai / sept.–oct.</td><td class="p-2">Sept.–oct. (prioritaire)</td></tr>
</tbody>
</table></div>

<h2>La préparation du sol : clé du succès dans les deux cas</h2>
<p>Quelle que soit la méthode choisie, la qualité de la préparation du sol est le facteur le plus déterminant. Un sol mal préparé condamne même le meilleur gazon en rouleaux à l'échec. Les étapes essentielles : décompactage à 20–25 cm de profondeur, élimination soigneuse des cailloux et des racines, apport de sable (si sol argileux) et de compost, nivellement avec plancher à niveau, tassement léger au rouleau.</p>

<h2>Les meilleures périodes dans le Rhône</h2>
<p>Septembre-octobre reste la période optimale pour les deux méthodes dans le Rhône : sol encore chaud, températures douces, rosées matinales. Le printemps (mars-avril) est une excellente alternative, mais les chaleurs estivales qui suivent peuvent stresser une pelouse fraîchement installée — prévoyez un arrosage soutenu. Évitez absolument les semis en juillet-août : les risques de dessèchement pendant la germination sont très élevés.</p>

<div class="bg-[#F7F5F0] rounded-xl p-4 my-4 border-l-4 border-[#80BC00] text-[#2F2F2F]">
  <strong>À retenir :</strong>
  <ul class="mt-2">
    <li>Rouleaux = rapidité + fiabilité, semis = économie + personnalisation</li>
    <li>La préparation du sol est aussi importante que la méthode choisie</li>
    <li>Septembre–octobre est la meilleure période dans le Rhône</li>
    <li>Ne semez jamais en juillet–août (risque de dessèchement à la germination)</li>
    <li>Pour les pentes &gt; 15%, préférez les rouleaux ou un filet anti-érosion avec le semis</li>
  </ul>
</div>

<h2>LM Espace Vert réalise votre engazonnement à Lyon</h2>
<p>LM Espace Vert réalise des engazonnements par semis et par rouleaux dans toute la région lyonnaise. Nous préparons le sol, sélectionnons le mélange adapté à votre terrain et assurons le suivi des premières semaines. <a href="/devis">Demandez un devis gratuit</a>.</p>
    `.trim(),
  },
  {
    slug: 'pergola-terrasse-plantes-grimpantes',
    category: 'Aménagement extérieur',
    title: "Pergola et terrasse : quelles plantes grimpantes choisir ?",
    excerpt: "Glycine, jasmin, rose grimpante, clématite, vigne vierge… Les plantes grimpantes habillent vos structures et créent des ambiances inoubliables. Notre guide de sélection.",
    date: '2024-09-20',
    readingTime: '5 min',
    author: 'Léo Maurice',
    image: '/images/realisation-6.webp',
    keywords: ['plantes grimpantes pergola', 'glycine jasmin terrasse', 'aménagement pergola'],
    content: `
<h2>Les grimpantes pour la pergola : critères de sélection</h2>
<p>Avant de choisir une plante grimpante, posez-vous ces questions : voulez-vous de l'ombre ? De la floraison parfumée ? Une couverture rapide ? La plante persistante ou caduque ?</p>

<h2>Pour l'ombre et la couverture rapide</h2>
<p><strong>Vigne vierge (Parthenocissus)</strong> — croissance fulgurante, magnifique rouge automnal. Caduque, donc lumineux en hiver. <strong>Kiwi ornemental (Actinidia kolomikta)</strong> — feuilles tricolores rose, blanc et vert. Idéal en exposition mi-ombre.</p>

<h2>Pour la floraison et le parfum</h2>
<p><strong>Glycine (Wisteria sinensis)</strong> — spectaculaire en avril-mai, parfum envoûtant. Attention à la structure — elle est très lourde. <strong>Jasmin d'été (Jasminum officinale)</strong> — parfum incomparable, floraison blanche de juin à septembre. Semi-persistant. <strong>Rose grimpante</strong> — floraison longue, nombreuses variétés, attention à tailler chaque hiver.</p>

<h2>Pour les situations difficiles</h2>
<p><strong>Chèvrefeuille (Lonicera)</strong> — ombre, mi-ombre, parfumé, robuste. <strong>Clematis montana</strong> — exposition nord possible, floraison blanche abondante en mai. <strong>Houblon (Humulus lupulus)</strong> — croissance annuelle impressionnante, feuillage décoratif.</p>

<h2>Le support et la taille</h2>
<p>Prévoyez des câbles ou des treillis solides dès la plantation. Les tuteurs provisoires sont insuffisants pour les espèces vigoureuses comme la glycine. Une taille annuelle maintient les grimpantes en forme et favorise la floraison.</p>
    `.trim(),
  },
  {
    slug: 'automne-jardin-taches-essentielles',
    category: 'Entretien saisonnier',
    title: "Automne au jardin : les 8 tâches essentielles avant l'hiver",
    excerpt: "Ramassage des feuilles, protection des plantes, paillage, plantation des bulbes… L'automne est une saison charnière pour votre jardin. Ne ratez aucune étape.",
    date: '2024-08-25',
    readingTime: '6 min',
    author: 'Léo Maurice',
    image: '/images/blog-automne.webp',
    keywords: ['jardin automne', 'entretien automne jardin', 'préparation hiver jardin'],
    content: `
<h2>Pourquoi l'automne est une saison cruciale ?</h2>
<p>Contrairement aux idées reçues, l'automne est la saison la plus active pour le jardinier. Les travaux effectués en octobre-novembre conditionnent la qualité du jardin au printemps suivant.</p>

<h2>1. La plantation des bulbes à floraison printanière</h2>
<p>Tulipes, narcisses, jacinthes, crocus : tous se plantent d'octobre à novembre. Profondeur = 2-3 fois la hauteur du bulbe. Orientez la pointe vers le haut.</p>

<h2>2. Le paillage des massifs</h2>
<p>Apportez 8-10 cm de paillage (BRF, feuilles broyées, paille) sur tous les massifs. Protection contre le gel, conservation de l'humidité, apport d'humus.</p>

<h2>3. La remise en état de la pelouse</h2>
<p>Scarification, aération, regarnissage et apport d'engrais d'automne. C'est la période idéale — voir notre article dédié.</p>

<h2>4. Le ramassage des feuilles mortes</h2>
<p>Indispensable sur pelouse (étouffement) mais aussi pour compostage. Laissez-en quelques tas dans les coins pour les hérissons.</p>

<h2>5. La taille de nettoyage</h2>
<p>Supprimez les tiges mortes des vivaces, les bois malades. Conservez les squelettes décoratifs (graminées, sedums) pour l'intérêt hivernal et l'abri des insectes.</p>

<h2>6. La rentrée des plantes frileuses</h2>
<p>Agrumes, lauriers sauce, cannas, dahlias tubéreux : protégez avant les premières gelées.</p>

<h2>7. L'hivernage de l'arrosage automatique</h2>
<p>Purge obligatoire des canalisations avant le gel.</p>

<h2>8. La plantation des arbres et arbustes</h2>
<p>La "belle saison de plantation" va d'octobre à mars — le sol est encore chaud, les racines s'installent sans stress hydrique.</p>
    `.trim(),
  },
  {
    slug: 'taille-buis-entretien-boule',
    category: 'Taille & Coupe',
    title: "Entretien du buis : comment tailler, traiter et sauver vos topiaires",
    excerpt: "Pyrale, cylindrocladium, buis en boule qui dépérit… Le buis traverse une crise grave. Voici comment le soigner et, le cas échéant, avec quoi le remplacer.",
    date: '2024-07-30',
    readingTime: '6 min',
    author: 'Léo Maurice',
    image: '/images/taille-haies-1.webp',
    keywords: ['entretien buis', 'pyrale buis', 'taille buis topiaire', 'remplacement buis'],
    content: `
<h2>Le buis en péril</h2>
<p>La pyrale du buis (Cydalima perspectalis) et le cylindrocladium (maladie fongique) ont ravagé des millions de pieds de buis en France depuis 2012. Dans la région lyonnaise, de nombreux jardins ont perdu leurs bordures historiques. Que faire ?</p>

<h2>Identifier la cause</h2>
<p><strong>Pyrale</strong> : présence de chenilles vertes à tête noire, toiles blanchâtres sur les branches, défoliation rapide. <strong>Cylindrocladium</strong> : jaunissement et chute des feuilles, taches brunes, le bois reste vivant mais l'arbre s'affaiblit progressivement.</p>

<h2>Traitement contre la pyrale</h2>
<p>Plusieurs passages de Bacillus thuringiensis (biologique) ou de produits homologués dès l'apparition des premières chenilles (mars-avril). La lutte doit être collective — un seul jardin traité ne suffit pas si les voisins ne le font pas.</p>

<h2>La bonne taille du buis</h2>
<p>Deux passages par an (mai et août). Ne taillez jamais en plein soleil. Désinfectez les outils entre chaque pied. Brûlez les déchets de taille.</p>

<h2>Les alternatives au buis</h2>
<p>Si le buis est trop atteint, remplacez-le par des espèces résistantes : <strong>Ilex crenata</strong> (houx crénelé — presque identique visuellement), <strong>Euonymus microphyllus</strong> (fusain à petites feuilles), <strong>Lonicera nitida</strong> (chèvrefeuille arbustif), ou <strong>Pittosporum tenuifolium</strong>.</p>
    `.trim(),
  },
  {
    slug: 'desherbage-naturel-sans-glyphosate',
    category: 'Écologie & Jardinage durable',
    title: "Désherbage naturel : 6 méthodes efficaces sans glyphosate",
    excerpt: "Le glyphosate est interdit aux particuliers depuis 2019. Voici les alternatives naturelles et efficaces pour un jardin sans mauvaises herbes, sans produits chimiques.",
    date: '2024-06-15',
    readingTime: '5 min',
    author: 'Léo Maurice',
    image: "/images/scraped/Entretien d’espaces verts à Saint-Didier-au-Mont-d’Or.webp",
    keywords: ['désherbage naturel', 'sans glyphosate', 'mauvaises herbes jardin'],
    content: `
<h2>Désherber sans chimie : oui, c'est possible</h2>
<p>Depuis l'interdiction du glyphosate aux particuliers, de nombreux jardiniers cherchent des alternatives. Bonne nouvelle : il en existe plusieurs, adaptées à différentes situations.</p>

<h2>1. Le paillage préventif</h2>
<p>La meilleure arme : empêcher les mauvaises herbes de s'installer. Un paillage de 8-10 cm (BRF, paille, copeaux) sur les massifs réduit de 90% la pousse des adventices.</p>

<h2>2. La binette et le sarcloir</h2>
<p>Travailler superficiellement (2-3 cm) par temps sec — les mauvaises herbes sèchent rapidement. Binez "le matin pour le lendemain" dit l'adage.</p>

<h2>3. L'eau bouillante</h2>
<p>Efficace sur les allées et les dallages. Versez de l'eau à ébullition sur les herbes indésirables. Action de choc immédiate.</p>

<h2>4. Le vinaigre blanc concentré</h2>
<p>20° de concentration + savon noir (agent mouillant). Efficace sur les jeunes pousses, à répéter. N'utilisez pas en excès (acidification du sol).</p>

<h2>5. La géomembrane ou le feutre de paysagiste</h2>
<p>Pour les nouvelles plantations, installez un tissu de paysagiste sous le paillage. Percez-le à l'emplacement des végétaux.</p>

<h2>6. Le désherbage thermique</h2>
<p>Les désherbeurs à flamme ou à vapeur sont très efficaces sur les allées et les terrasses. Attention au risque d'incendie par temps sec.</p>

<h2>Nos engagements chez LM Espace Vert</h2>
<p>Nous n'utilisons aucun herbicide chimique dans nos interventions. Désherbage mécanique et thermique uniquement — pour votre santé et celle de l'environnement.</p>
    `.trim(),
  },
  {
    slug: 'drainage-jardin-eau-stagnante',
    category: 'Travaux & Aménagement',
    title: "Problème de drainage au jardin : comment résoudre les eaux stagnantes",
    excerpt: "Pelouse gorgée d'eau, racines asphyxiées, mauvaises herbes envahissantes… Un mauvais drainage détruit le jardin. Solutions professionnelles et DIY.",
    date: '2024-05-10',
    readingTime: '6 min',
    author: 'Léo Maurice',
    image: "/images/scraped/Travaux paysagers à Saint-Didier-au-Mont-d’Or.webp",
    keywords: ['drainage jardin', 'eau stagnante jardin', 'sol argileux drainage'],
    content: `
<h2>Pourquoi l'eau stagne-t-elle dans mon jardin ?</h2>
<p>Dans la région de Lyon et du nord Rhône, les sols argileux sont très fréquents. L'argile, imperméable, retient l'eau et crée des zones asphyxiées pour les racines. S'y ajoute souvent une couche d'argile compacte en profondeur (semelle de labour).</p>

<h2>Diagnostic : quel type de problème ?</h2>
<p><strong>Eau superficielle</strong> : sol compact, pente insuffisante, absence de drainage. <strong>Nappe perchée</strong> : couche imperméable en profondeur qui empêche l'eau de s'infiltrer. <strong>Remontée de nappe</strong> : sol en zone basse.</p>

<h2>Les solutions</h2>
<h3>L'aération mécanique (solutions légères)</h3>
<p>Décompactage à la fourche-bêche ou aération mécanique de la pelouse. Apport de sable grossier pour améliorer la structure.</p>

<h3>Le drainage à la française</h3>
<p>Pose de drains perforés dans des tranchées remplies de gravier, avec pente de 1-2% vers un point de rejet (regard, cours d'eau, fosse). Solution définitive pour les cas sévères.</p>

<h3>La noue paysagère</h3>
<p>Fossé enherbé en pente douce qui collecte et infiltre les eaux de ruissellement. Esthétique et écologique.</p>

<h3>La jardinière surélevée</h3>
<p>Pour les zones très humides, créez des massifs surélevés où les plantes ne sont plus en contact avec l'eau stagnante.</p>

<h2>LM Espace Vert intervient dans votre jardin</h2>
<p>Nous diagnostiquons les problèmes de drainage et réalisons les travaux nécessaires, de la simple aération à la pose de drains professionnels.</p>
    `.trim(),
  },
  {
    slug: 'jardin-japonais-aménagement',
    category: 'Inspiration & Tendances',
    title: "S'inspirer du jardin japonais pour aménager son extérieur",
    excerpt: "Zen, épuré, contemplatif… Le jardin japonais porte une philosophie entière. Comment en intégrer les principes dans un jardin occidental ?",
    date: '2024-04-08',
    readingTime: '5 min',
    author: 'Léo Maurice',
    image: '/images/realisation-10.webp',
    keywords: ['jardin japonais', 'jardin zen', 'aménagement style japonais'],
    content: `
<h2>L'esprit du jardin japonais</h2>
<p>Le jardin japonais n'est pas un simple assemblage d'éléments décoratifs. Il incarne des valeurs : wabi (beauté imparfaite), sabi (patine du temps), ma (le vide positif), shizen (naturel non forcé). Ces principes peuvent inspirer n'importe quel jardin.</p>

<h2>Les éléments clés à intégrer</h2>
<h3>L'eau</h3>
<p>Un bassin, une vasque (tsukubai), ou même un galets symbolisant un cours d'eau. L'eau réelle ou suggérée apporte mouvement et sérénité.</p>

<h3>La pierre</h3>
<p>Grandes pierres posées avec intention, gravier ratissé (karesansui), pas japonais. La pierre donne permanence et ancrage.</p>

<h3>La végétation sélective</h3>
<p>Pins taillés en nuage (niwaki), bambous, érables du Japon (Acer palmatum), mousses, azalées taillées en boule. Peu d'espèces, choisies pour leur texture et leur silhouette.</p>

<h3>Le vide</h3>
<p>Contrairement au jardin occidental qui "remplit" les espaces, le jardin japonais laisse du vide. Une étendue de gravier ratissé entre deux pierres est aussi importante que les pierres elles-mêmes.</p>

<h2>Une interprétation contemporaine</h2>
<p>LM Espace Vert crée des jardins inspirés du style japonais adaptés aux goûts et aux contraintes locales. Nous guidons le choix des végétaux et des matériaux pour créer une atmosphère apaisante.</p>
    `.trim(),
  },
  {
    slug: 'fertilisation-jardin-naturelle',
    category: 'Écologie & Jardinage durable',
    title: "Fertiliser son jardin naturellement : engrais verts, compost et purins",
    excerpt: "Nourrir son jardin sans engrais chimiques, c'est possible et souvent plus efficace à long terme. Tour d'horizon des méthodes naturelles de fertilisation.",
    date: '2024-03-12',
    readingTime: '6 min',
    author: 'Léo Maurice',
    image: "/images/scraped/Étude du terrain près de Limonest.webp",
    keywords: ['fertilisation naturelle jardin', 'engrais vert', 'purin ortie', 'compost jardin'],
    content: `
<h2>Pourquoi fertiliser naturellement ?</h2>
<p>Les engrais chimiques de synthèse apportent une nutrition rapide mais appauvrissent la vie du sol sur le long terme. Les amendements naturels nourrissent d'abord les micro-organismes du sol, qui à leur tour nourrissent les plantes — une approche plus durable.</p>

<h2>Les engrais verts</h2>
<p>Semés en fin d'été ou d'automne sur les espaces libres du potager, les engrais verts (phacélie, moutarde, féverole, trèfle) protègent le sol, capturent l'azote atmosphérique et s'incorporent avant la montée en graine.</p>

<h2>Le compost maison</h2>
<p>Voir notre article dédié. Le compost mature est l'amendement universel, utilisable partout.</p>

<h2>Le fumier composté</h2>
<p>Fumier de cheval, de vache ou de mouton bien décomposé (12-18 mois) : riche en matière organique, améliore la structure du sol. À incorporer en automne.</p>

<h2>Les purins végétaux</h2>
<p><strong>Purin d'ortie</strong> : stimulant de croissance, aphidifuge, fongicide léger. Dilué à 10% en arrosage ou à 5% en pulvérisation. <strong>Purin de prêle</strong> : antifongique, renforce les défenses naturelles des plantes. <strong>Purin de consoude</strong> : riche en potasse, favorise la floraison et la fructification.</p>

<h2>Le BRF (Bois Raméal Fragmenté)</h2>
<p>Broyat de jeunes rameaux frais, épandu en surface. Les champignons décomposeurs qui le dégradent libèrent progressivement des nutriments et créent une terre fertile.</p>
    `.trim(),
  },
  {
    slug: 'revetement-allee-jardin-comparatif',
    category: 'Maçonnerie paysagère',
    title: "Allées de jardin : comparatif de 6 revêtements pour bien choisir",
    excerpt: "Gravier, dallage, béton désactivé, bois, résine, pavés... Chaque revêtement d'allée a ses avantages et ses contraintes. Notre comparatif complet.",
    date: '2024-02-20',
    readingTime: '7 min',
    author: 'Léo Maurice',
    image: '/images/blog-allee-jardin.webp',
    keywords: ['revêtement allée jardin', 'dallage allée', 'gravier jardin', 'béton désactivé'],
    content: `
<h2>Choisir le bon revêtement d'allée</h2>
<p>Le revêtement d'allée conditionne l'esthétique générale du jardin, son entretien, sa perméabilité et son coût. Voici notre comparatif objectif.</p>

<h2>1. Le gravier calcaire ou décoratif</h2>
<p><strong>+</strong> Économique, drainant, facile à poser, aspect naturel.<br>
<strong>-</strong> Se disperse (prévoir une bordure), demande du ratissage régulier, pas idéal pour les talons.</p>

<h2>2. Le dallage en pierre naturelle</h2>
<p><strong>+</strong> Très esthétique, durable, valorise le bien.<br>
<strong>-</strong> Coûteux, pose délicate (nécessite un professionnel), joints à entretenir.</p>

<h2>3. Le béton désactivé</h2>
<p><strong>+</strong> Solide, peu d'entretien, aspect granuleux antidérapant, perméable partiel.<br>
<strong>-</strong> Aspect "passe-partout", difficile à reprendre en cas de dégradation.</p>

<h2>4. Le bois (lames en ipé ou pin traité)</h2>
<p><strong>+</strong> Chaleureux, naturel, idéal en terrasse et passerelle de jardin.<br>
<strong>-</strong> Entretien annuel, vieillissement visible, moins adapté aux allées principales.</p>

<h2>5. La résine/stabilisant de graviers</h2>
<p><strong>+</strong> Aspect très soigné, drainant, entretien minimal, nombreuses teintes.<br>
<strong>-</strong> Coût élevé, pose professionnelle obligatoire.</p>

<h2>6. Les pavés autobloquants</h2>
<p><strong>+</strong> Perméables, solides, aspect traditionnel.<br>
<strong>-</strong> Végétation entre les joints, aspect moins naturel que la pierre.</p>

<h2>Notre recommandation pour le nord lyonnais</h2>
<p>Pour les propriétés de Saint-Didier-au-Mont-d'Or et des communes voisines, nous recommandons souvent le dallage en calcaire local pour les allées principales et le gravier stabilisé pour les chemins secondaires.</p>
    `.trim(),
  },
  {
    slug: 'printemps-plantes-vivaces-diviser',
    category: 'Entretien',
    title: "Printemps : pourquoi et comment diviser vos plantes vivaces",
    excerpt: "La division des vivaces est une technique incontournable du jardinier. Elle rajeunit les touffes, multiplie vos plantes et les maintient en bonne santé.",
    date: '2024-01-25',
    readingTime: '5 min',
    author: 'Léo Maurice',
    image: "/images/scraped/Service d’entretien de jardin et espaces verts à Limonest.jpeg",
    keywords: ['diviser vivaces', 'multiplication vivaces', 'entretien vivaces printemps'],
    content: `
<h2>Pourquoi diviser les vivaces ?</h2>
<p>Une touffe de vivace qui vieillit finit par s'étioler au centre, faner moins abondamment et prendre trop de place. La division lui redonne vigueur, lui permet de refleurir généreusement et vous offre gratuitement de nouveaux plants.</p>

<h2>Quand diviser ?</h2>
<p><strong>Printemps (mars-avril)</strong> : idéal pour les vivaces à floraison estivale (échinacées, rudbeckias, gauras). <strong>Automne (septembre-octobre)</strong> : préférable pour les vivaces à floraison printanière (primevères, pulmonaires, hellebores).</p>

<h2>La technique pas à pas</h2>
<ol>
<li>Arrosez la veille pour faciliter l'extraction</li>
<li>Déterrez la touffe entière à la fourche-bêche</li>
<li>Divisez en 3-5 éclats selon la taille, avec une bêche ou un couteau</li>
<li>Chaque division doit avoir des racines et des tiges (ou bourgeons)</li>
<li>Replantez immédiatement les divisions sélectionnées</li>
<li>Arrosez abondamment et paillez</li>
</ol>

<h2>Les espèces à diviser régulièrement (tous les 3-5 ans)</h2>
<p>Hostas, rudbeckias, échinacées, bergénias, hémérocales, iris barbues, sedums, véroniques.</p>

<h2>Les espèces à ne pas diviser</h2>
<p>Pivoines, baptisies, gypsophiles, agapanthes — elles n'aiment pas être dérangées. Laissez-les en place.</p>
    `.trim(),
  },
  {
    slug: 'paillage-quoi-choisir-jardin',
    category: 'Entretien',
    title: "Le paillage au jardin : quel matériau choisir selon les usages ?",
    excerpt: "BRF, paille, copeaux, pierres, feuilles mortes... Il existe de nombreux matériaux de paillage. Chacun a ses propriétés. Guide complet pour bien choisir.",
    date: '2023-12-10',
    readingTime: '5 min',
    author: 'Léo Maurice',
    image: "/images/scraped/Maintenance et nettoyage d’espaces verts à Limonest  0.jpeg",
    keywords: ['paillage jardin', 'mulch jardin', 'BRF paillage', 'matériau paillage'],
    content: `
<h2>Le paillage : une des meilleures pratiques du jardin</h2>
<p>Le paillage réduit les arrosages, limite les mauvaises herbes, régule la température du sol et enrichit la terre en se décomposant. Un seul geste, de multiples bénéfices.</p>

<h2>Les paillages organiques</h2>
<p><strong>BRF (Bois Raméal Fragmenté)</strong> : idéal pour les massifs d'arbustes et de vivaces. Enrichit le sol en décomposant. Épaisseur : 8-10 cm. <strong>Paille</strong> : économique, légère, parfaite pour le potager. Se décompose vite. <strong>Feuilles broyées</strong> : gratuit si vous avez des arbres. À broyer pour éviter le compactage. <strong>Copeaux de bois compostés</strong> : polyvalents, esthétiques, durables.</p>

<h2>Les paillages minéraux</h2>
<p><strong>Gravillons ou ardoise</strong> : décoratifs, durables, ne se décomposent pas. Idéaux pour les jardins de rocaille ou les plantes méditerranéennes. <strong>Paillis de schiste</strong> : chaleureux visuellement, drainant.</p>

<h2>Les cas particuliers</h2>
<p>Évitez le BRF frais autour des plantes annuelles et au potager (azote disponible temporairement réduit). Pour les plantes acidophiles (rhododendrons, camélias), utilisez du paillage d'écorces de pin qui acidifie légèrement.</p>

<h2>Épaisseur recommandée</h2>
<p>Massifs : 8-10 cm. Potager : 5-8 cm. Autour des arbres : 10-15 cm (mais jamais au contact du tronc). Trop mince = inefficace. Trop épais = risque d'asphyxie.</p>
    `.trim(),
  },
  {
    slug: 'jardin-entretien-annuel-contrat',
    category: 'Services & Prestations',
    title: "Contrat d'entretien de jardin : ce qu'il faut savoir avant de signer",
    excerpt: "Confier son jardin à un professionnel via un contrat annuel est la solution idéale pour les propriétaires sans le temps ni les compétences. Voici ce que cela implique.",
    date: '2023-11-15',
    readingTime: '5 min',
    author: 'Léo Maurice',
    image: "/images/scraped/Entretien d’espaces verts1.jpeg",
    keywords: ['contrat entretien jardin', 'jardinier professionnel', 'entretien espaces verts'],
    content: `
<h2>Pourquoi opter pour un contrat d'entretien ?</h2>
<p>Un contrat d'entretien avec LM Espace Vert vous garantit un suivi régulier, adapté aux saisons, assuré par les mêmes professionnels qui connaissent votre jardin.</p>

<h2>Ce que comprend un contrat standard</h2>
<ul>
<li>Tonte régulière de la pelouse (fréquence selon saison)</li>
<li>Taille des haies (2-3 fois par an)</li>
<li>Désherbage des massifs et allées</li>
<li>Nettoyage général saisonnier</li>
<li>Ramassage des feuilles (automne)</li>
<li>Bilan de santé des végétaux</li>
</ul>

<h2>Les prestations en option</h2>
<p>Fertilisation, traitement phytosanitaire, élagage, replantation, travaux de maçonnerie paysagère — ces prestations peuvent être incluses selon vos besoins.</p>

<h2>Comment est fixé le tarif ?</h2>
<p>Le tarif dépend de la superficie, du type de végétation, de la fréquence d'intervention et de la localisation. Nous réalisons un devis gratuit après visite de votre propriété.</p>

<h2>Nos engagements contractuels</h2>
<ul>
<li>Ponctualité et régularité des interventions</li>
<li>Compte-rendu après chaque passage</li>
<li>Réactivité en cas d'urgence (tempête, arbre tombé)</li>
<li>Absence de produits chimiques</li>
</ul>

<h2>Contactez LM Espace Vert</h2>
<p>Nous proposons des contrats d'entretien sur mesure pour les particuliers et les professionnels de Saint-Didier-au-Mont-d'Or et dans un rayon de 20 km. Appelez-nous au 06 72 58 73 53 pour une visite gratuite.</p>
    `.trim(),
  },
  {
    slug: 'pelouse-ombre-varietes-adaptees',
    category: 'Entretien',
    title: "Pelouse à l'ombre : les variétés adaptées et les conseils d'entretien",
    excerpt: "Une pelouse sous les arbres est une des situations les plus difficiles du jardin. Mais avec les bons mélanges et les bonnes pratiques, le résultat est au rendez-vous.",
    date: '2023-10-20',
    readingTime: '5 min',
    author: 'Léo Maurice',
    image: "/images/scraped/Chemin de gravier bordé de pelouse menant à des maisons modernes à Limonest.webp",
    keywords: ['pelouse ombre', 'gazon ombre', 'entretien pelouse ombragée'],
    content: `
<h2>Les défis de la pelouse à l'ombre</h2>
<p>Sous les arbres, la pelouse fait face à trois obstacles : manque de lumière, compétition racinaire pour l'eau et les nutriments, et fréquent manque d'aération.</p>

<h2>Les mélanges de graminées pour l'ombre</h2>
<p>Les mélanges "ombre et mi-ombre" contiennent généralement des espèces tolérantes comme <strong>Festuca rubra</strong> (fétuque rouge) et <strong>Poa nemoralis</strong> (pâturin des forêts). Évitez le Ray-grass anglais (Lolium perenne) qui souffre en conditions difficiles.</p>

<h2>Conseils d'entretien spécifiques</h2>
<ul>
<li><strong>Hauteur de coupe plus élevée</strong> : maintenez 6-8 cm (contre 4-5 en plein soleil)</li>
<li><strong>Arrosage modéré</strong> : les zones ombragées s'assèchent moins vite</li>
<li><strong>Aération régulière</strong> : les sols sous arbres se compactent vite</li>
<li><strong>Fertilisation ajustée</strong> : engrais pauvre en azote pour ne pas favoriser l'étiolement</li>
</ul>

<h2>Quand la pelouse est impossible</h2>
<p>En ombre dense (sous épicéas, sous if), la pelouse ne peut pas tenir. Optez pour des couvre-sols adaptés : pachysandre, lierre, épimède, vinca. LM Espace Vert transforme ces zones en massifs esthétiques et sans entretien.</p>
    `.trim(),
  },
  {
    slug: 'niwaki-taille-japonaise-pins',
    category: 'Taille & Coupe',
    title: "Niwaki : l'art de la taille japonaise des pins et conifères",
    excerpt: "Le niwaki transforme un pin ordinaire en sculpture vivante. Cette technique ancestrale japonaise séduit de plus en plus les jardins occidentaux. Découvrez ses principes.",
    date: '2023-09-15',
    readingTime: '6 min',
    author: 'Léo Maurice',
    image: "/images/scraped/Sécurisation des arbres près de Limonest.webp",
    keywords: ['niwaki', 'taille japonaise pins', 'topiaire japonais', 'cloud pruning'],
    content: `
<h2>Le niwaki : une philosophie, un art</h2>
<p>Le mot japonais "niwaki" (庭木) signifie littéralement "arbre de jardin". Dans la tradition japonaise, chaque arbre taillé en niwaki raconte une histoire, évoque une silhouette naturelle idéalisée — un pin sur une falaise battue par le vent, un arbre vénérable porté par les saisons.</p>

<h2>Les essences idéales</h2>
<p><strong>Pin sylvestre (Pinus sylvestris)</strong> : le plus classique, robuste et adapté à notre région. <strong>Pin mugo (Pinus mugo)</strong> : compact, idéal pour les petits espaces. <strong>Genévrier de Chine (Juniperus chinensis)</strong> : texture fine et forme naturellement tortueuse. <strong>If (Taxus baccata)</strong> : supporte très bien les tailles sévères répétées.</p>

<h2>La technique de base</h2>
<h3>Sur les pins : le "candle pinching"</h3>
<p>Au printemps, les nouvelles pousses apparaissent sous forme de "chandelles" vertes. Pincez ces chandelles à mi-longueur (ou supprimez certaines) pour contrôler la direction et la densité de croissance. Cette opération s'effectue de mai à juin.</p>

<h3>La mise en nuage</h3>
<p>Les "pompons" ou "nuages" caractéristiques du style japonais s'obtiennent en sélectionnant les branches horizontales, en supprimant les verticales, et en guidant progressivement la croissance sur plusieurs années.</p>

<h2>La patience comme outil principal</h2>
<p>Le niwaki ne se crée pas en une saison. Un beau sujet demande 5 à 10 ans de travail progressif. LM Espace Vert propose un suivi pluriannuel pour créer des niwaki remarquables dans vos jardins.</p>
    `.trim(),
  },
  {
    slug: 'paysagiste-caluire-et-cuire',
    category: 'Conseils locaux',
    title: 'Paysagiste à Caluire-et-Cuire : nos conseils pour votre jardin',
    date: '2026-04-10',
    readingTime: '4 min',
    author: 'Léo Maurice',
    image: "/images/scraped/Escalier en bois et gravier Limonest.webp",
    keywords: ['paysagiste Caluire-et-Cuire', 'entretien jardin Caluire', 'création jardin Lyon nord'],
    excerpt: "LM Espace Vert intervient régulièrement à Caluire-et-Cuire pour la création et l'entretien de jardins. Découvrez nos conseils adaptés à cette commune lyonnaise.",
    content: `
<p class="text-xs text-[#80BC00] font-semibold uppercase tracking-wide mb-4">Mis à jour en mai 2026</p>

<blockquote class="bg-[#F7F5F0] rounded-xl p-4 my-4 border-l-4 border-[#80BC00] text-[#2F2F2F]">
  <p>"LM Espace Vert est le paysagiste de référence à Caluire-et-Cuire — une équipe locale qui connaît les sols, les coteaux et les attentes des propriétaires caluirards pour créer et entretenir des jardins impeccables."</p>
</blockquote>

<h2>Caluire-et-Cuire : une commune aux jardins variés</h2>
<p>Située immédiatement au nord de Lyon, Caluire-et-Cuire offre une grande diversité de jardins : des petites parcelles de centre-ville aux propriétés avec parc dans les quartiers résidentiels de Cuire-le-Bas ou de Montessuy. LM Espace Vert intervient régulièrement sur cette commune pour accompagner les propriétaires dans la <a href="/services/creation-jardin">création</a> et l'<a href="/services/entretien-jardin">entretien</a> de leurs espaces verts.</p>

<div class="overflow-x-auto my-6"><table class="w-full text-sm border-collapse">
<thead><tr class="bg-[#80BC00] text-white"><th class="p-2 text-left">Données locales</th><th class="p-2 text-left">Valeur</th></tr></thead>
<tbody>
<tr class="border-b"><td class="p-2">Superficie de la commune</td><td class="p-2">15,1 km²</td></tr>
<tr class="border-b bg-[#F7F5F0]"><td class="p-2">Population (2026)</td><td class="p-2">~45 000 habitants</td></tr>
<tr class="border-b"><td class="p-2">Jardins privés estimés</td><td class="p-2">~6 500</td></tr>
<tr class="border-b bg-[#F7F5F0]"><td class="p-2">Surface espaces verts publics</td><td class="p-2">~180 ha</td></tr>
<tr class="border-b"><td class="p-2">Type de sol dominant</td><td class="p-2">Argilo-calcaire</td></tr>
</tbody>
</table></div>

<h2>Les spécificités des jardins caluirards</h2>
<h3>Un sol argilo-calcaire typique</h3>
<p>Les sols de Caluire-et-Cuire sont majoritairement argilo-calcaires, tendance que l'on retrouve dans tout le nord-est de l'agglomération lyonnaise. Ce type de sol retient bien l'humidité en hiver mais peut se dessécher rapidement en été. Pour nos interventions, nous préconisons systématiquement un amendement à base de compost et de sable grossier pour améliorer la structure et le drainage.</p>

<h3>Des jardins souvent en pente</h3>
<p>Avec les coteaux qui surplombent la Saône et le Rhône, de nombreuses propriétés de Caluire présentent des jardins en forte pente. Ces situations nécessitent une approche paysagère spécifique : terrasses plantées, murets de soutènement en pierre sèche ou en gabions, cheminements adaptés. LM Espace Vert maîtrise ces <a href="/services/maconnerie-paysagere">aménagements particuliers</a>.</p>

<h2>Quels végétaux choisir à Caluire-et-Cuire ?</h2>
<p>La commune bénéficie d'un microclima légèrement plus frais que le centre de Lyon. Voici les végétaux que nous recommandons le plus souvent :</p>
<ul>
<li><strong>Haies persistantes</strong> : photinia, laurier-tin, charme — résistants aux hivers et faciles d'entretien</li>
<li><strong>Arbustes à fleurs</strong> : deutzia, weigelia, philadelphus pour les jardins exposés est ou ouest</li>
<li><strong>Vivaces</strong> : hémérocalles, hostas en sous-bois, échinacées en plein soleil</li>
<li><strong>Arbres de taille moyenne</strong> : érable champêtre, alisier blanc, cerisier à fleurs</li>
</ul>

<h2>L'entretien régulier des jardins caluirards</h2>
<p>Nous proposons à nos clients de Caluire-et-Cuire des contrats d'entretien adaptés à leur jardin : tonte régulière, taille des haies deux à trois fois par an, désherbage des massifs, scarification de la pelouse au printemps et en automne. Nos équipes interviennent dans toute la commune, de Caluire-le-Bas au plateau de Montessuy. Consultez notre <a href="/secteur/caluire">page secteur Caluire-et-Cuire</a> pour plus d'informations.</p>

<details class="my-4 border border-[#80BC00] rounded-lg overflow-hidden">
  <summary class="bg-[#F7F5F0] p-3 cursor-pointer font-semibold">Quel est le meilleur moment pour créer un jardin à Caluire-et-Cuire ?</summary>
  <div class="p-4"><p>L'automne (septembre-novembre) est la période idéale pour les plantations d'arbres et d'arbustes à Caluire. Le sol est encore chaud, les pluies naturelles prennent le relais de l'arrosage, et les végétaux s'installent sans stress hydrique. Pour les travaux de maçonnerie (terrasses, allées), toute l'année est propice hors périodes de gel.</p></div>
</details>

<details class="my-4 border border-[#80BC00] rounded-lg overflow-hidden">
  <summary class="bg-[#F7F5F0] p-3 cursor-pointer font-semibold">LM Espace Vert intervient-il en urgence à Caluire après une tempête ?</summary>
  <div class="p-4"><p>Oui. LM Espace Vert assure des interventions d'urgence pour l'élagage et l'abattage après les tempêtes dans toute la commune de Caluire-et-Cuire. Appelez le 06 72 58 73 53 pour une intervention rapide.</p></div>
</details>

<details class="my-4 border border-[#80BC00] rounded-lg overflow-hidden">
  <summary class="bg-[#F7F5F0] p-3 cursor-pointer font-semibold">Quels sont les végétaux à éviter dans les jardins argileux de Caluire ?</summary>
  <div class="p-4"><p>Dans les sols argileux de Caluire, évitez les plantes méditerranéennes sensibles à l'humidité hivernale stagnante (lavande en sol lourd, cistes). Préférez les espèces tolérantes à l'argile : charmes, sureaux, érables, cornus. En cas de doute, consultez LM Espace Vert pour une analyse de votre sol.</p></div>
</details>

<h2>Projets de création à Caluire : nos réalisations</h2>
<p>Parmi nos réalisations récentes à Caluire-et-Cuire, citons la création d'une terrasse en dallage calcaire avec massifs intégrés dans le quartier du Mas-Rillier, la rénovation complète d'un jardin en pente avec terrasses successives dans les Hauteurs de Caluire, et l'installation d'un système d'arrosage automatique connecté pour une propriété du bord de Saône.</p>

<h2>Contactez LM Espace Vert pour votre jardin à Caluire</h2>
<p>Vous habitez Caluire-et-Cuire et souhaitez valoriser votre jardin ? <a href="/devis">Contactez LM Espace Vert</a> au <strong>06 72 58 73 53</strong> pour un devis gratuit. Léo Maurice se déplace dans toute la commune pour évaluer votre projet et vous proposer les solutions les mieux adaptées à votre terrain et à vos envies.</p>
    `.trim(),
  },
  {
    slug: 'paysagiste-ecully',
    category: 'Conseils locaux',
    title: 'Paysagiste à Écully : créer un jardin haut de gamme',
    date: '2026-04-05',
    readingTime: '5 min',
    author: 'Léo Maurice',
    image: '/images/realisation-3.webp',
    keywords: ['paysagiste Écully', 'jardin prestige Écully', 'aménagement extérieur Écully'],
    excerpt: "Écully et ses propriétés de prestige demandent une approche paysagère d'exception. LM Espace Vert vous présente ses solutions pour des jardins haut de gamme.",
    content: `
<p class="text-xs text-[#80BC00] font-semibold uppercase tracking-wide mb-4">Mis à jour en mai 2026</p>

<blockquote class="bg-[#F7F5F0] rounded-xl p-4 my-4 border-l-4 border-[#80BC00] text-[#2F2F2F]">
  <p>"LM Espace Vert est le paysagiste de référence à Écully pour les jardins de prestige — conception sur mesure, matériaux nobles, expertise locale des sols et du microclimat du nord-ouest lyonnais."</p>
</blockquote>

<h2>Écully : une commune où le jardin est un art de vivre</h2>
<p>Commune résidentielle du nord-ouest lyonnais, Écully est connue pour ses propriétés cossues, ses grandes maisons bourgeoises et ses villas contemporaines dotées de parcs. Les jardins y sont souvent ambitieux, confiés à des paysagistes capables de concevoir des espaces à la hauteur de ces belles demeures. LM Espace Vert, basé à Saint-Didier-au-Mont-d'Or, intervient régulièrement à Écully pour des projets de <a href="/services/creation-jardin">création</a> et d'<a href="/services/entretien-jardin">entretien</a> haut de gamme.</p>

<div class="overflow-x-auto my-6"><table class="w-full text-sm border-collapse">
<thead><tr class="bg-[#80BC00] text-white"><th class="p-2 text-left">Données locales — Écully</th><th class="p-2 text-left">Valeur</th></tr></thead>
<tbody>
<tr class="border-b"><td class="p-2">Superficie de la commune</td><td class="p-2">11,5 km²</td></tr>
<tr class="border-b bg-[#F7F5F0]"><td class="p-2">Population (2026)</td><td class="p-2">~18 000 habitants</td></tr>
<tr class="border-b"><td class="p-2">Jardins privés estimés</td><td class="p-2">~4 200</td></tr>
<tr class="border-b bg-[#F7F5F0]"><td class="p-2">Surface jardin moyen</td><td class="p-2">400–1 200 m²</td></tr>
<tr class="border-b"><td class="p-2">Type de sol dominant</td><td class="p-2">Argilo-limoneux, pH neutre à légèrement acide</td></tr>
</tbody>
</table></div>

<h2>Les jardins de prestige : ce qui fait la différence</h2>
<h3>La conception sur mesure</h3>
<p>Un jardin haut de gamme à Écully ne s'improvise pas. Il commence toujours par une phase d'analyse approfondie : étude de l'exposition, du sol, de la topographie, mais aussi des besoins et de l'esthétique recherchée par les propriétaires. Chez LM Espace Vert, nous élaborons un plan de composition détaillé avant tout démarrage de chantier.</p>

<h3>Les matériaux nobles</h3>
<p>Pour les propriétés d'Écully, nous privilégions des matériaux de qualité : <a href="/services/maconnerie-paysagere">dallage en pierre naturelle</a> (calcaire du Jura, granit ou pierre de Bourgogne), bois exotiques certifiés FSC pour les terrasses, mobilier de jardin haut de gamme. Ces choix garantissent durabilité et esthétique dans la durée.</p>

<h2>Les végétaux adaptés au microclima d'Écully</h2>
<p>Écully bénéficie d'un microclima particulier, légèrement plus doux grâce à sa situation en fond de vallon. Ce contexte favorise :</p>
<ul>
<li><strong>Les palmiers de Chine (Trachycarpus fortunei)</strong> : résistants jusqu'à -15°C, ils apportent une touche exotique et d'élégance</li>
<li><strong>Les magnolias</strong> : grandiflora pour les grands espaces, Stellata pour les jardins plus modestes</li>
<li><strong>Les bambous en touffe</strong> : Phyllostachys et Fargesia pour les claustras végétaux</li>
<li><strong>Les rosiers anglais de David Austin</strong> : pour des massifs floraux raffinés et parfumés</li>
<li><strong>Les graminées ornementales</strong> : Miscanthus, Pennisetum, Stipa — légèreté et mouvement</li>
</ul>

<h2>L'entretien des jardins haut de gamme à Écully</h2>
<p>Nos <a href="/secteur/ecully">contrats d'entretien à Écully</a> sont conçus pour maintenir un niveau de présentation irréprochable tout au long de l'année. Cela inclut une tonte précise avec ramassage, la taille soignée des topiaires et des haies, le désherbage fin des massifs, les soins saisonniers aux plantes fragiles et le suivi de l'arrosage automatique.</p>

<details class="my-4 border border-[#80BC00] rounded-lg overflow-hidden">
  <summary class="bg-[#F7F5F0] p-3 cursor-pointer font-semibold">Combien coûte la création d'un jardin haut de gamme à Écully ?</summary>
  <div class="p-4"><p>Le budget d'un jardin de prestige à Écully varie selon l'ampleur du projet. Pour un jardin de 500 à 1 000 m², comptez en général 15 000 à 50 000 € pour une création complète (terrassement, maçonnerie, végétaux, arrosage). LM Espace Vert établit un devis détaillé après visite gratuite, sans engagement.</p></div>
</details>

<details class="my-4 border border-[#80BC00] rounded-lg overflow-hidden">
  <summary class="bg-[#F7F5F0] p-3 cursor-pointer font-semibold">Quels végétaux résistent le mieux aux étés chauds d'Écully ?</summary>
  <div class="p-4"><p>Pour résister aux étés chauds et parfois secs d'Écully, nous recommandons : les graminées ornementales (miscanthus, stipa), les vivaces méditerranéennes (lavande, sauge, gaura), les arbustes de garrigue (ciste, romarin, santoline) et les couvre-sols résistants à la sécheresse (sedum, thymus). Associés à un système d'arrosage automatique au goutte-à-goutte, ces végétaux garantissent un jardin beau même en période caniculaire.</p></div>
</details>

<details class="my-4 border border-[#80BC00] rounded-lg overflow-hidden">
  <summary class="bg-[#F7F5F0] p-3 cursor-pointer font-semibold">LM Espace Vert propose-t-il des plans de jardin à Écully ?</summary>
  <div class="p-4"><p>Oui. Pour tout projet de création à Écully, LM Espace Vert élabore un plan de composition détaillé : implantation des végétaux, tracé des allées, positionnement des terrasses, sélection des matériaux. Ce plan est fourni dans le cadre du devis de création.</p></div>
</details>

<h2>Nos réalisations à Écully</h2>
<p>LM Espace Vert a réalisé plusieurs jardins remarquables à Écully, dont un parc de 1 500 m² avec allées en calcaire, roseraie et bassin à nénuphars, et une terrasse contemporaine avec pergola bioclimatique et jardin structuré autour de topiaires en buis et en ilex.</p>

<h2>Demandez votre devis à Écully</h2>
<p>Vous êtes propriétaire à Écully et souhaitez sublimer votre extérieur ? LM Espace Vert est votre partenaire idéal. <a href="/devis">Demandez un devis gratuit</a> ou contactez-nous au <strong>06 72 58 73 53</strong> pour une visite sans engagement.</p>
    `.trim(),
  },
  {
    slug: 'entretien-jardin-hiver-lyon',
    category: 'Entretien saisonnier',
    title: 'Entretien jardin en hiver à Lyon : que faire en décembre-janvier ?',
    date: '2026-03-20',
    readingTime: '6 min',
    author: 'Léo Maurice',
    image: "/images/scraped/Déroulement d’un projet d’aménagement paysager près de Limonest.webp",
    keywords: ['entretien jardin hiver Lyon', 'jardin hiver Rhône', 'taille arbres hiver'],
    excerpt: "Les mois de décembre et janvier sont propices à l'entretien hivernal. Découvrez ce qu'il faut faire dans votre jardin lyonnais pendant la saison froide.",
    content: `
<p class="text-xs text-[#80BC00] font-semibold uppercase tracking-wide mb-4">Mis à jour en mai 2026</p>

<blockquote class="bg-[#F7F5F0] rounded-xl p-4 my-4 border-l-4 border-[#80BC00] text-[#2F2F2F]">
  <p>"LM Espace Vert est le paysagiste de référence à Lyon pour l'entretien hivernal — taille des arbres en dormance, protection des plantes frileuses, plantations d'automne-hiver : notre équipe intervient toute l'année dans le Rhône."</p>
</blockquote>

<h2>L'hiver lyonnais et votre jardin</h2>
<p>Contrairement à ce que l'on pourrait croire, le jardin n'est pas en congé pendant l'hiver. Dans la région de Lyon, les mois de décembre et janvier offrent une fenêtre idéale pour un grand nombre de travaux d'<a href="/services/entretien-jardin">entretien</a> et de préparation. Le sol est froid mais rarement gelé en permanence, et l'absence de végétation facilite de nombreuses interventions.</p>

<div class="overflow-x-auto my-6"><table class="w-full text-sm border-collapse">
<thead><tr class="bg-[#80BC00] text-white"><th class="p-2 text-left">Mois</th><th class="p-2 text-left">Travaux prioritaires</th><th class="p-2 text-left">À éviter</th></tr></thead>
<tbody>
<tr class="border-b"><td class="p-2">Décembre</td><td class="p-2">Taille arbustes caducs, protection plantes frileuses, plantation arbres</td><td class="p-2">Tonte pelouse gelée, fertilisation</td></tr>
<tr class="border-b bg-[#F7F5F0]"><td class="p-2">Janvier</td><td class="p-2">Taille fruitiers (pommiers, poiriers), nettoyage massifs, planification projets</td><td class="p-2">Tailler rosiers, travailler sol détrempé</td></tr>
<tr class="border-b"><td class="p-2">Février</td><td class="p-2">Début taille rosiers fin de mois, reprise tonte légère si > 5°C</td><td class="p-2">Planter si gel persistant</td></tr>
</tbody>
</table></div>

<h2>Les travaux prioritaires en décembre</h2>
<h3>La taille des arbres et arbustes à feuilles caduques</h3>
<p>En dormance complète, les arbres et arbustes supportent parfaitement la taille. C'est le moment idéal pour intervenir sur les charpentières, supprimer les branches mortes ou malades et réduire les volumes devenus trop importants. Exception : les espèces sensibles à la bactériose comme les cerisiers, à ne tailler qu'au printemps. Découvrez nos <a href="/services/elagage">services d'élagage professionnel</a>.</p>

<h3>La protection des plantes frileuses</h3>
<p>Si vous n'avez pas encore protégé vos plantes méditerranéennes (laurier sauce, olivier, palmier) ou vos plantes en pot, c'est urgent. Utilisez des voiles d'hivernage (2-3 épaisseurs) et paillez généreusement le pied. Dans le nord de Lyon, les gelées peuvent descendre sous -8°C les nuits les plus froides.</p>

<h3>La plantation des arbres et arbustes</h3>
<p>Décembre est un excellent mois pour planter les arbres à racines nues et les arbustes rustiques. Le sol encore relativement chaud permet aux racines de s'installer avant l'hiver. Arrosez après plantation même si la pluie est présente.</p>

<h2>Les travaux de janvier</h2>
<h3>La taille des arbres fruitiers</h3>
<p>Janvier est le mois par excellence pour tailler pommiers et poiriers. La dormance est à son maximum, les risques de maladies sont limités. Taillez par temps sec et sans gel, avec des outils propres et tranchants. Appliquez un cicatrisant naturel sur les grosses coupes.</p>

<h3>Le nettoyage des massifs</h3>
<p>Profitez de l'absence de végétation pour nettoyer en profondeur vos massifs : désherbage à la main, récupération des feuilles mortes, suppression des tiges mortes des vivaces. Laissez cependant les structures décoratives des graminées — elles nourrissent les oiseaux et abritent les insectes.</p>

<h3>La planification des projets à venir</h3>
<p>Janvier est aussi le mois idéal pour planifier vos projets de jardin pour la saison à venir. LM Espace Vert est disponible pour vous recevoir et étudier vos projets lors d'une visite conseil sans engagement.</p>

<h2>Ce qu'il ne faut PAS faire en hiver</h2>
<ul>
<li><strong>Tailler les rosiers</strong> : trop tôt, attendez fin février - début mars</li>
<li><strong>Tondre une pelouse gelée</strong> : vous briserez les herbes, laissant des traces brunes</li>
<li><strong>Travailler un sol gelé ou détrempé</strong> : vous détruisez sa structure</li>
<li><strong>Fertiliser</strong> : les engrais n'ont aucun effet en dormance</li>
</ul>

<details class="my-4 border border-[#80BC00] rounded-lg overflow-hidden">
  <summary class="bg-[#F7F5F0] p-3 cursor-pointer font-semibold">Peut-on planter des végétaux en décembre à Lyon ?</summary>
  <div class="p-4"><p>Oui, décembre est un très bon mois pour planter arbres et arbustes rustiques à racines nues dans le Rhône. Le sol est encore à une température suffisante pour permettre l'installation racinaire. Evitez les périodes de gel intense (< -5°C). Les végétaux en motte ou en conteneur peuvent se planter jusqu'en février si le sol n'est pas gelé.</p></div>
</details>

<details class="my-4 border border-[#80BC00] rounded-lg overflow-hidden">
  <summary class="bg-[#F7F5F0] p-3 cursor-pointer font-semibold">Combien de fois peut-il geler à Lyon en hiver ?</summary>
  <div class="p-4"><p>Lyon enregistre en moyenne 30 à 40 nuits de gel par hiver. Les températures peuvent descendre jusqu'à -12°C lors des hivers froids (record absolu : -20°C en 1985). Dans le nord lyonnais (Caluire, Neuville), les nuits sont généralement plus froides que dans le centre de Lyon. Prévoyez une protection adaptée pour vos végétaux sensibles.</p></div>
</details>

<details class="my-4 border border-[#80BC00] rounded-lg overflow-hidden">
  <summary class="bg-[#F7F5F0] p-3 cursor-pointer font-semibold">LM Espace Vert intervient-il l'hiver dans toute la zone lyonnaise ?</summary>
  <div class="p-4"><p>Oui. LM Espace Vert continue ses interventions tout l'hiver dans un rayon de 20 km autour de Saint-Didier-au-Mont-d'Or : Caluire, Écully, Tassin, Dardilly, Champagne, Neuville et communes voisines. Appelez le 06 72 58 73 53 pour programmer une intervention hivernale.</p></div>
</details>

<h2>Confiez votre jardin hivernal à LM Espace Vert</h2>
<p>L'équipe LM Espace Vert continue ses interventions tout l'hiver dans le nord de Lyon. Nous prenons en charge la taille des arbres, la protection des plantes sensibles et les plantations hivernales. <a href="/devis">Demandez un devis gratuit</a> ou contactez-nous au <strong>06 72 58 73 53</strong> pour programmer une intervention.</p>
    `.trim(),
  },
  {
    slug: 'gazon-pelouse-lyon-problemes',
    category: 'Entretien pelouse',
    title: 'Les 7 problèmes de pelouse courants à Lyon et comment les résoudre',
    date: '2026-03-10',
    readingTime: '7 min',
    author: 'Léo Maurice',
    image: "/images/scraped/Conception d’espaces verts et aménagement paysager à Limonest.jpeg",
    keywords: ['problèmes pelouse Lyon', 'gazon jaune Lyon', 'mousses pelouse Lyon'],
    excerpt: "Mousses, mauvaises herbes, zones jaunes... Les problèmes de pelouse sont fréquents dans la région lyonnaise. Voici les solutions professionnelles de LM Espace Vert.",
    content: `
<p class="text-xs text-[#80BC00] font-semibold uppercase tracking-wide mb-4">Mis à jour en mai 2026</p>

<blockquote class="bg-[#F7F5F0] rounded-xl p-4 my-4 border-l-4 border-[#80BC00] text-[#2F2F2F]">
  <p>"LM Espace Vert est le paysagiste de référence à Lyon pour le diagnostic et le traitement des pelouses — de la mousse au compactage, chaque problème a une solution professionnelle."</p>
</blockquote>

<h2>Votre pelouse lyonnaise face aux défis climatiques et pédologiques</h2>
<p>La région de Lyon réunit plusieurs facteurs qui compliquent l'entretien des pelouses : des hivers humides propices au développement des mousses, des étés chauds et secs qui jaunissent les gazons, des sols argileux qui se compactent rapidement, et des variations de température importantes entre les saisons. LM Espace Vert traite ces problèmes quotidiennement. Voici les 7 situations les plus courantes et leurs solutions.</p>

<div class="overflow-x-auto my-6"><table class="w-full text-sm border-collapse">
<thead><tr class="bg-[#80BC00] text-white"><th class="p-2 text-left">Commune</th><th class="p-2 text-left">Superficie (km²)</th><th class="p-2 text-left">Jardins privés estimés</th><th class="p-2 text-left">Problème principal</th></tr></thead>
<tbody>
<tr class="border-b"><td class="p-2">Lyon (4e-9e)</td><td class="p-2">47</td><td class="p-2">~18 000</td><td class="p-2">Compactage urbain</td></tr>
<tr class="border-b bg-[#F7F5F0]"><td class="p-2">Caluire-et-Cuire</td><td class="p-2">15</td><td class="p-2">~6 500</td><td class="p-2">Mousse sur argile</td></tr>
<tr class="border-b"><td class="p-2">Écully</td><td class="p-2">11</td><td class="p-2">~4 200</td><td class="p-2">Zones jaunes en été</td></tr>
<tr class="border-b bg-[#F7F5F0]"><td class="p-2">Tassin-la-Demi-Lune</td><td class="p-2">8</td><td class="p-2">~3 800</td><td class="p-2">Feutrage excessif</td></tr>
</tbody>
</table></div>

<h2>Problème n°1 : l'envahissement par les mousses</h2>
<p>La mousse est le problème n°1 des pelouses lyonnaises, surtout dans les jardins exposés nord ou semi-ombragés. Elle s'installe dans les zones acides, compactées et mal drainées. Solution professionnelle : scarification mécanique en profondeur au printemps ou en automne, traitement antimousse à base de sulfate de fer, puis aération au décompacteur, apport de chaux si le pH est trop bas, et regarnissage.</p>

<h2>Problème n°2 : les zones jaunes ou brunes en été</h2>
<p>En juillet-août, certaines zones de pelouse jaunissent ou brunissent. Plusieurs causes possibles : stress hydrique, attaques de tipules (larves de cousins qui rongent les racines), ou champignons. Diagnostiquez en tirant sur la pelouse : si elle se soulève facilement comme un tapis, il s'agit de larves. Solution : traitement biologique au nématode (Steinernema feltiae), arrosage régulier tôt le matin, remontée de la hauteur de coupe à 7 cm.</p>

<h2>Problème n°3 : les mauvaises herbes envahissantes</h2>
<p>Pissenlits, plantains, renouées, véroniques... Dans un gazon dense et bien entretenu, les adventices ont du mal à s'installer. Mais dans une pelouse fragilisée, elles prolifèrent. Solution : désherbage sélectif (herbicide sélectif gazon ou désherbage manuel), regarnissage immédiat des zones dégagées pour éviter que d'autres mauvaises herbes ne colonisent l'espace.</p>

<h2>Problème n°4 : le compactage du sol</h2>
<p>Très fréquent sur les pelouses en argile lyonnaise, le compactage empêche l'eau et l'air de pénétrer. La pelouse reste gorgée d'eau en hiver et se dessèche vite en été. Symptômes : eau qui stagne en surface, pelouse qui rebondit sous les pieds, mousse qui prend le dessus. Solution : aération mécanique avec décompacteur à lames ou à fourches, apport de sable grossier de calibre 0/4, scarification.</p>

<h2>Problème n°5 : les traces laissées par les animaux</h2>
<p>Les brûlures d'urine de chiens (taches jaunes cerclées de vert foncé) et les fouilles de taupes (taupinières) sont fréquentes dans les jardins résidentiels. Pour les brûlures d'urine : arrosez immédiatement après passage du chien, regarnissez les zones touchées. Pour les taupes : aplatissez les taupinières avant tonte et consultez un professionnel si l'infestation est importante.</p>

<h2>Problème n°6 : le gazon clairsemé à l'ombre</h2>
<p>Sous les arbres ou en exposition nord, le gazon s'étire et devient clairsemé. La concurrence racinaire aggrave le manque de lumière. Solution : utilisez un mélange spécial ombre (Festuca rubra, Poa nemoralis), maintenez une hauteur de coupe plus élevée (7-8 cm), fertilisez avec un engrais pauvre en azote. Si l'ombre est trop dense, remplacez par un couvre-sol adapté.</p>

<h2>Problème n°7 : le feutrage excessif</h2>
<p>Le feutre (couche de matière organique entre le gazon et le sol) est normal jusqu'à 1 cm d'épaisseur. Au-delà, il étouffe la pelouse, bloque l'eau et favorise les maladies. Solution annuelle : scarification mécanique au printemps (mars-avril) ou en automne (septembre-octobre), suivie d'une fertilisation et d'un regarnissage éventuels.</p>

<details class="my-4 border border-[#80BC00] rounded-lg overflow-hidden">
  <summary class="bg-[#F7F5F0] p-3 cursor-pointer font-semibold">Quand faut-il scarifier une pelouse lyonnaise ?</summary>
  <div class="p-4"><p>La scarification est idéale en septembre-octobre ou mars-avril. Dans le Rhône, l'automne (septembre) est la période d'or car le sol est encore chaud, ce qui permet une reprise rapide après l'opération. Évitez de scarifier en période de sécheresse ou de canicule.</p></div>
</details>

<details class="my-4 border border-[#80BC00] rounded-lg overflow-hidden">
  <summary class="bg-[#F7F5F0] p-3 cursor-pointer font-semibold">Peut-on éliminer la mousse définitivement ?</summary>
  <div class="p-4"><p>Non, si les conditions qui la favorisent (compactage, acidité, ombre) ne sont pas corrigées. La mousse reviendra. Il faut traiter les causes profondes : améliorer le drainage, aérer mécaniquement, corriger le pH avec de la chaux dolomitique, et choisir un mélange de gazon adapté à l'exposition.</p></div>
</details>

<details class="my-4 border border-[#80BC00] rounded-lg overflow-hidden">
  <summary class="bg-[#F7F5F0] p-3 cursor-pointer font-semibold">Quel engrais pour une pelouse jaune en été à Lyon ?</summary>
  <div class="p-4"><p>En été, évitez les engrais azotés qui stimulent la croissance et augmentent le stress hydrique. Attendez les premières pluies de septembre pour apporter un engrais d'automne riche en potasse et phosphore. En urgence, un arrosage profond tôt le matin suffit souvent à reverdir la pelouse en 10-15 jours.</p></div>
</details>

<h2>LM Espace Vert, expert de la pelouse dans le Rhône</h2>
<p>Vous reconnaissez l'un de ces problèmes dans votre jardin ? LM Espace Vert intervient pour diagnostiquer et traiter les troubles de votre pelouse dans toute la zone de Saint-Didier-au-Mont-d'Or, <a href="/secteur/caluire">Caluire</a>, <a href="/secteur/ecully">Écully</a>, Tassin et les communes voisines. Appelez-nous au <strong>06 72 58 73 53</strong> pour un diagnostic gratuit ou <a href="/devis">demandez un devis en ligne</a>.</p>
    `.trim(),
  },

  // ─── 10 NOUVEAUX ARTICLES GEO-OPTIMISÉS ───

  {
    slug: 'paysagiste-tassin-la-demi-lune',
    category: 'Conseils locaux',
    title: "Paysagiste à Tassin-la-Demi-Lune : créez le jardin de vos rêves",
    excerpt: "LM Espace Vert, paysagiste à Tassin-la-Demi-Lune, crée et entretient vos jardins dans la commune la plus verte de Lyon ouest. Devis gratuit.",
    date: '2026-05-10',
    readingTime: '5 min',
    author: 'Léo Maurice',
    image: '/images/realisation-5.webp',
    keywords: ['paysagiste Tassin', 'jardin Tassin-la-Demi-Lune', 'entretien jardin Tassin', 'paysagiste Lyon ouest'],
    content: `
<div class="bg-[#F7F5F0] rounded-xl p-4 my-4 border-l-4 border-[#80BC00] text-[#2F2F2F]">
  <p><strong>Tassin-la-Demi-Lune</strong> est une commune de l'ouest lyonnais (Métropole de Lyon) d'environ 22 000 habitants, caractérisée par ses quartiers résidentiels pavillonnaires et ses nombreux jardins privatifs. Superficie : 8,4 km².</p>
</div>

<h2>LM Espace Vert, votre paysagiste de proximité à Tassin</h2>
<p>Basés à Saint-Didier-au-Mont-d'Or, à quelques minutes de Tassin-la-Demi-Lune, nous intervenons régulièrement dans cette commune pour accompagner les propriétaires dans la création, la rénovation et l'entretien de leurs jardins. Tassin bénéficie d'un tissu résidentiel dense avec de nombreux jardins de taille moyenne (200 à 800 m²) — notre coeur de métier.</p>

<h2>Les spécificités des jardins à Tassin-la-Demi-Lune</h2>
<p>La commune présente des sols variés selon les quartiers : argilo-calcaires dans les secteurs bas, plus sablonneux sur les hauteurs. Les jardins tassinois font souvent face à deux défis :</p>
<ul>
  <li><strong>La pente</strong> : de nombreuses propriétés sont étagées, nécessitant des terrasses ou des murets de soutènement</li>
  <li><strong>L'intimité</strong> : la densité de l'habitat pousse à créer des haies végétales ou des claustras paysagers</li>
  <li><strong>L'ombrage partiel</strong> : les grands arbres existants conditionnent le choix des végétaux</li>
  <li><strong>L'entretien raisonné</strong> : les propriétaires actifs souhaitent un beau jardin sans y consacrer leurs week-ends</li>
</ul>

<div class="overflow-x-auto my-6"><table class="w-full text-sm border-collapse">
<thead><tr class="bg-[#80BC00] text-white"><th class="p-2 text-left">Prestation</th><th class="p-2 text-left">Fréquence typique</th><th class="p-2 text-left">Saison principale</th></tr></thead>
<tbody>
<tr class="border-b"><td class="p-2">Tonte pelouse</td><td class="p-2">14–21 jours</td><td class="p-2">Avril–octobre</td></tr>
<tr class="border-b bg-[#F7F5F0]"><td class="p-2">Taille haies</td><td class="p-2">2–3 fois/an</td><td class="p-2">Mai, août, octobre</td></tr>
<tr class="border-b"><td class="p-2">Désherbage massifs</td><td class="p-2">Mensuel</td><td class="p-2">Mars–novembre</td></tr>
<tr class="border-b bg-[#F7F5F0]"><td class="p-2">Taille arbustes</td><td class="p-2">1–2 fois/an</td><td class="p-2">Mars, septembre</td></tr>
</tbody>
</table></div>

<h2>Nos prestations à Tassin-la-Demi-Lune</h2>
<p>LM Espace Vert propose l'ensemble des services paysagers pour les particuliers de Tassin : <a href="/services/creation-jardin">création de jardins</a> sur mesure (plans, terrasses, massifs, gazon), <a href="/services/entretien-jardin">contrats d'entretien annuels</a> adaptés à votre emploi du temps, taille de haies, élagage d'arbres, pose de systèmes d'arrosage automatique et <a href="/services/maconnerie-paysagere">maçonnerie paysagère</a> (allées, murets, terrasses).</p>

<h2>Pourquoi choisir un paysagiste local à Tassin ?</h2>
<p>Faire appel à LM Espace Vert, c'est choisir un paysagiste qui connaît les sols, le microclimat et les espèces adaptées à votre secteur. Nos équipes interviennent rapidement, connaissent la commune et construisent des relations de confiance durables avec nos clients tassinois.</p>

<h2>Besoin d'un paysagiste à Tassin-la-Demi-Lune ?</h2>
<p>Contactez LM Espace Vert pour votre jardin à Tassin : appelez le <strong>06 72 58 73 53</strong> ou <a href="/devis">demandez un devis gratuit en ligne</a>. Léo Maurice se déplace personnellement pour évaluer votre projet.</p>
    `.trim(),
  },

  {
    slug: 'paysagiste-dardilly',
    category: 'Conseils locaux',
    title: "Paysagiste à Dardilly : aménagement et entretien haut de gamme",
    excerpt: "Paysagiste à Dardilly : LM Espace Vert crée et entretient vos jardins dans cette commune résidentielle du nord-ouest lyonnais. Création, entretien, devis gratuit.",
    date: '2026-05-08',
    readingTime: '5 min',
    author: 'Léo Maurice',
    image: '/images/realisation-7.webp',
    keywords: ['paysagiste Dardilly', 'jardin Dardilly', 'création jardin Dardilly', 'espaces verts Dardilly'],
    content: `
<div class="bg-[#F7F5F0] rounded-xl p-4 my-4 border-l-4 border-[#80BC00] text-[#2F2F2F]">
  <p><strong>Dardilly</strong> est une commune de la Métropole de Lyon, située à l'ouest de l'agglomération, à 10 km du centre de Lyon. Avec ses 9 000 habitants répartis sur 18 km², elle associe zones résidentielles pavillonnaires et espaces naturels préservés.</p>
</div>

<h2>Dardilly, commune idéale pour les jardins d'exception</h2>
<p>Dardilly est une commune où le jardin tient une place importante. Ses propriétés, souvent spacieuses, offrent des terrains de 500 m² à plusieurs milliers de mètres carrés, propices à des aménagements paysagers ambitieux. LM Espace Vert intervient régulièrement à Dardilly pour des créations complètes comme pour des contrats d'entretien.</p>

<h2>Les caractéristiques des jardins à Dardilly</h2>
<ul>
  <li><strong>Grands terrains</strong> : les propriétés sont souvent plus spacieuses qu'à Lyon, permettant des projets d'envergure</li>
  <li><strong>Sol argilo-limoneux</strong> : fertile mais tendance au compactage, nécessitant des amendements réguliers</li>
  <li><strong>Végétation mature</strong> : de nombreuses propriétés disposent déjà de grands arbres qu'il convient de valoriser</li>
  <li><strong>Demande d'intimité</strong> : les haies mixtes et les clôtures végétales sont très demandées</li>
</ul>

<h2>Nos créations à Dardilly</h2>
<p>LM Espace Vert réalise à Dardilly des projets variés : création de jardins paysagers avec plans de composition, <a href="/services/maconnerie-paysagere">terrasses en pierre naturelle</a>, allées en graviers stabilisés ou en dallage, bassins ornementaux, potagers décoratifs et jardins à faible entretien. Nous adaptons chaque projet au style de la propriété et aux envies du propriétaire.</p>

<h2>L'entretien des jardins à Dardilly</h2>
<p>Nos <a href="/services/entretien-jardin">contrats d'entretien à Dardilly</a> couvrent la tonte régulière, la taille des haies et arbustes, le désherbage des massifs, la scarification de pelouse et les soins saisonniers. Nous intervenons avec régularité tout au long de l'année pour que votre jardin reste impeccable en toutes saisons.</p>

<div class="bg-[#F7F5F0] rounded-xl p-4 my-4 border-l-4 border-[#80BC00] text-[#2F2F2F]">
  <strong>À retenir :</strong>
  <ul class="mt-2">
    <li>LM Espace Vert intervient à Dardilly toute l'année</li>
    <li>Devis gratuit après visite de votre propriété</li>
    <li>Expertise locale des sols et du microclimat de Dardilly</li>
    <li>Equipes qualifiées, matériel professionnel</li>
  </ul>
</div>

<h2>Besoin d'un paysagiste à Dardilly ?</h2>
<p>Contactez LM Espace Vert pour vos projets à Dardilly. Appelez le <strong>06 72 58 73 53</strong> ou <a href="/devis">demandez un devis gratuit</a>. Nous nous déplaçons sans engagement pour visiter votre terrain et étudier votre projet.</p>
    `.trim(),
  },

  {
    slug: 'paysagiste-champagne-au-mont-dor',
    category: 'Conseils locaux',
    title: "Paysagiste à Champagne-au-Mont-d'Or : votre jardin entre de bonnes mains",
    excerpt: "LM Espace Vert, paysagiste à Champagne-au-Mont-d'Or, intervient pour la création et l'entretien de vos jardins dans cette commune prisée du nord lyonnais. Devis gratuit.",
    date: '2026-05-05',
    readingTime: '5 min',
    author: 'Léo Maurice',
    image: "/images/scraped/Aménagements extérieurs.jpeg",
    keywords: ["paysagiste Champagne-au-Mont-d'Or", 'jardin Champagne', 'entretien espaces verts Champagne', 'nord Lyon'],
    content: `
<div class="bg-[#F7F5F0] rounded-xl p-4 my-4 border-l-4 border-[#80BC00] text-[#2F2F2F]">
  <p><strong>Champagne-au-Mont-d'Or</strong> est une commune résidentielle du nord de Lyon (Métropole de Lyon), voisine de Saint-Didier-au-Mont-d'Or et de Limonest. Connue pour ses propriétés cossues et ses parcs arborés, elle offre un cadre verdoyant apprécié des familles.</p>
</div>

<h2>Champagne-au-Mont-d'Or : une commune où le jardin prime</h2>
<p>LM Espace Vert est voisin de Champagne-au-Mont-d'Or — notre base à Saint-Didier-au-Mont-d'Or est à quelques minutes seulement. Nous intervenons dans cette commune depuis nos débuts, et connaissons parfaitement ses sols, ses expositions et les attentes de ses propriétaires.</p>

<h2>Les jardins de Champagne-au-Mont-d'Or</h2>
<p>Les propriétés de Champagne-au-Mont-d'Or se caractérisent par :</p>
<ul>
  <li><strong>De grandes parcelles</strong> avec souvent 800 m² à plus de 2 000 m² de terrain</li>
  <li><strong>Des sols calcaires</strong> typiques du Monts d'Or, bien drainants mais pauvres en matière organique</li>
  <li><strong>Une végétation mature</strong> : vieux chênes, châtaigniers, pins — des arbres qui structurent le paysage</li>
  <li><strong>Des vues dégagées</strong> sur le couloir rhodanien depuis les hauteurs</li>
</ul>

<h2>Nos prestations phares à Champagne-au-Mont-d'Or</h2>
<p>LM Espace Vert propose à Champagne :</p>
<ul>
  <li><a href="/services/creation-jardin">Création de jardins paysagers</a> : étude, plans, réalisation complète</li>
  <li>Élagage et taille des grands arbres en sécurité</li>
  <li>Création de terrasses et d'allées en matériaux nobles</li>
  <li><a href="/services/entretien-jardin">Contrats d'entretien annuels</a> : tonte, taille, désherbage, soins saisonniers</li>
  <li>Installation de systèmes d'arrosage automatique adaptés aux sols calcaires</li>
</ul>

<h2>Quels végétaux pour les sols calcaires des Monts d'Or ?</h2>
<p>Les sols calcaires de Champagne-au-Mont-d'Or sont particulièrement adaptés aux espèces méditerranéennes et aux plantes calcicoles. Nous recommandons : lavandes, romarins, iris, sedums, géraniums vivaces côté soleil ; hellébores, épimèdes, polygonatum en zones ombragées. Pour les haies, le charme et le laurier-tin sont parfaitement adaptés.</p>

<h2>Besoin d'un paysagiste à Champagne-au-Mont-d'Or ?</h2>
<p>Contactez LM Espace Vert pour votre jardin à Champagne-au-Mont-d'Or. Appelez le <strong>06 72 58 73 53</strong> ou <a href="/devis">demandez votre devis gratuit en ligne</a>. Nos équipes interviennent dans toute la commune et les alentours.</p>
    `.trim(),
  },

  {
    slug: 'taille-haies-lyon-quand-comment',
    category: 'Entretien pratique',
    title: "Quand et comment tailler vos haies à Lyon ? Le guide complet",
    excerpt: "Thuyas, lauriers, charmes, if... Taille des haies à Lyon : calendrier précis, techniques professionnelles et réglementation à respecter pour des haies impeccables.",
    date: '2026-04-20',
    readingTime: '6 min',
    author: 'Léo Maurice',
    image: "/images/scraped/Coupe et entretien de haies et arbustes à Limonest1.jpeg",
    keywords: ['taille haies Lyon', 'taille haies Rhône', 'quand tailler haie', 'taille haie arbuste'],
    content: `
<div class="bg-[#F7F5F0] rounded-xl p-4 my-4 border-l-4 border-[#80BC00] text-[#2F2F2F]">
  <p><strong>Définition :</strong> La taille des haies désigne l'ensemble des opérations de coupe permettant de maîtriser le volume, la forme et la santé d'une haie. Elle se distingue de la taille de formation (donner une forme initiale) et de la taille d'entretien (maintenir la forme existante).</p>
</div>

<h2>Pourquoi la taille des haies est-elle essentielle à Lyon ?</h2>
<p>Dans la région lyonnaise, les haies poussent rapidement grâce au climat semi-continental humide. Sans taille régulière, une haie de laurier ou de thuya peut gagner 30 à 60 cm par an. Une taille bien planifiée garantit l'esthétique, la densité et la santé de vos haies.</p>

<div class="overflow-x-auto my-6"><table class="w-full text-sm border-collapse">
<thead><tr class="bg-[#80BC00] text-white"><th class="p-2 text-left">Espèce</th><th class="p-2 text-left">Fréquence</th><th class="p-2 text-left">Meilleure période</th><th class="p-2 text-left">Outil conseillé</th></tr></thead>
<tbody>
<tr class="border-b"><td class="p-2">Thuya</td><td class="p-2">2×/an</td><td class="p-2">Mai + août</td><td class="p-2">Taille-haie électrique</td></tr>
<tr class="border-b bg-[#F7F5F0]"><td class="p-2">Laurier-palme</td><td class="p-2">2–3×/an</td><td class="p-2">Mars–septembre</td><td class="p-2">Sécateur (grandes feuilles)</td></tr>
<tr class="border-b"><td class="p-2">Charme</td><td class="p-2">1×/an</td><td class="p-2">Août–septembre</td><td class="p-2">Taille-haie + sécateur</td></tr>
<tr class="border-b bg-[#F7F5F0]"><td class="p-2">If (Taxus)</td><td class="p-2">2×/an</td><td class="p-2">Juillet + septembre</td><td class="p-2">Taille-haie + ciseaux</td></tr>
<tr class="border-b"><td class="p-2">Buis</td><td class="p-2">2×/an</td><td class="p-2">Mai + août</td><td class="p-2">Taille-haie fin</td></tr>
<tr class="border-b bg-[#F7F5F0]"><td class="p-2">Haie bocagère mixte</td><td class="p-2">1×/an alternée</td><td class="p-2">Hors nidification</td><td class="p-2">Lamier, élagueur</td></tr>
</tbody>
</table></div>

<h2>La réglementation à connaître à Lyon et dans le Rhône</h2>
<p>En France, il est <strong>interdit de tailler les haies entre le 15 avril et le 15 juillet</strong> pour protéger la nidification des oiseaux (arrêté du 9 août 2011). Dans les zones Natura 2000 du nord de Lyon, cette interdiction est renforcée. Planifiez vos tailles avant avril ou après mi-juillet.</p>

<h2>Les erreurs courantes à éviter</h2>
<ul>
  <li>Tailler par forte chaleur ou en plein soleil (risque de brûlures sur les coupes)</li>
  <li>Couper dans le vieux bois des thuyas (ne repart jamais)</li>
  <li>Utiliser un taille-haie sur les lauriers-palmes (couper les feuilles en deux est inesthétique)</li>
  <li>Tailler trop tard en automne (les repousses ne durcissent pas avant l'hiver)</li>
</ul>

<h2>La taille des haies en pratique à Lyon</h2>
<p>LM Espace Vert réalise la <a href="/services/taille-haies">taille des haies</a> dans toute la zone lyonnaise : Saint-Didier-au-Mont-d'Or, Tassin, Écully, Caluire, Dardilly, Champagne et communes voisines. Nos équipes interviennent avec du matériel professionnel thermique et électrique, en sécurité, avec ramassage des déchets verts.</p>

<div class="bg-[#F7F5F0] rounded-xl p-4 my-4 border-l-4 border-[#80BC00] text-[#2F2F2F]">
  <strong>À retenir :</strong>
  <ul class="mt-2">
    <li>Interdiction de tailler du 15 avril au 15 juillet (nidification)</li>
    <li>Deux passages par an suffisent pour la majorité des haies</li>
    <li>Adapter l'outil à l'espèce (sécateur pour laurier, taille-haie pour thuya)</li>
    <li>Ne jamais couper dans le vieux bois des conifères</li>
  </ul>
</div>

<h2>Besoin d'un paysagiste pour votre taille de haies à Lyon ?</h2>
<p>Confiez la taille de vos haies à LM Espace Vert. <a href="/devis">Demandez un devis gratuit</a> ou appelez le <strong>06 72 58 73 53</strong>. Intervention rapide dans tout le nord et l'ouest lyonnais.</p>
    `.trim(),
  },

  {
    slug: 'creation-allee-jardin-materiau',
    category: 'Maçonnerie paysagère',
    title: "Créer une allée de jardin : quel matériau choisir à Lyon nord ?",
    excerpt: "Gravier stabilisé, dallage, béton désactivé, pavés... Créer une allée de jardin à Lyon demande le bon matériau. Comparatif complet et conseils de paysagiste.",
    date: '2026-04-15',
    readingTime: '6 min',
    author: 'Léo Maurice',
    image: "/images/scraped/Travaux d’aménagement extérieur avec allée et plantations à Limonest.jpeg",
    keywords: ['allée jardin Lyon', 'gravier stabilisé Lyon', 'pavés jardin Rhône', 'allée maçonnerie paysagère'],
    content: `
<div class="bg-[#F7F5F0] rounded-xl p-4 my-4 border-l-4 border-[#80BC00] text-[#2F2F2F]">
  <p><strong>Définition :</strong> Une allée de jardin est un cheminement aménagé reliant différentes zones d'un espace extérieur. Elle peut être fonctionnelle (accès au garage, à l'entrée) ou décorative (promenade dans le jardin). Le choix du matériau conditionne l'esthétique, le confort et l'entretien.</p>
</div>

<h2>Les 5 matériaux les plus demandés à Lyon nord</h2>
<p>Dans la région de Lyon, de Caluire à Dardilly en passant par Écully et Tassin, les projets d'allées de jardin sont nombreux. Voici les matériaux les plus adaptés à nos conditions locales.</p>

<div class="overflow-x-auto my-6"><table class="w-full text-sm border-collapse">
<thead><tr class="bg-[#80BC00] text-white"><th class="p-2 text-left">Matériau</th><th class="p-2 text-left">Coût /m²</th><th class="p-2 text-left">Durabilité</th><th class="p-2 text-left">Entretien</th><th class="p-2 text-left">Perméabilité</th></tr></thead>
<tbody>
<tr class="border-b"><td class="p-2">Gravier stabilisé</td><td class="p-2">25–45 €</td><td class="p-2">15–20 ans</td><td class="p-2">Faible</td><td class="p-2">Excellente</td></tr>
<tr class="border-b bg-[#F7F5F0]"><td class="p-2">Dallage pierre naturelle</td><td class="p-2">80–150 €</td><td class="p-2">40+ ans</td><td class="p-2">Modéré</td><td class="p-2">Nulle à faible</td></tr>
<tr class="border-b"><td class="p-2">Béton désactivé</td><td class="p-2">50–80 €</td><td class="p-2">20–30 ans</td><td class="p-2">Très faible</td><td class="p-2">Partielle</td></tr>
<tr class="border-b bg-[#F7F5F0]"><td class="p-2">Pavés autobloquants</td><td class="p-2">60–100 €</td><td class="p-2">30+ ans</td><td class="p-2">Faible</td><td class="p-2">Bonne</td></tr>
<tr class="border-b"><td class="p-2">Pas japonais bois/pierre</td><td class="p-2">30–60 €</td><td class="p-2">10–20 ans</td><td class="p-2">Modéré</td><td class="p-2">Excellente</td></tr>
</tbody>
</table></div>

<h2>Le gravier stabilisé : notre recommandation pour Lyon nord</h2>
<p>Pour les propriétés du nord et de l'ouest lyonnais, le gravier stabilisé reste notre recommandation principale pour les allées secondaires et les espaces de stationnement léger. Perméable (obligation légale pour les surfaces > 20 m²), esthétique, économique et durable, il se décline en de nombreuses teintes (beige calcaire, ocre, gris anthracite).</p>

<h2>Le dallage en pierre naturelle : le choix premium</h2>
<p>Pour les allées principales et les terrasses, le <a href="/services/maconnerie-paysagere">dallage en pierre naturelle</a> reste la référence qualitative. Calcaire du Jura, granit, schiste ardoisier : chaque pierre a sa personnalité. LM Espace Vert réalise des allées en pierre à joints serrés ou ouverts avec végétation dans les joints.</p>

<h2>Les contraintes à anticiper à Lyon</h2>
<ul>
  <li>Les sols argileux lyonnais nécessitent une fondation adaptée (20-30 cm de grave compactée)</li>
  <li>La pente : prévoir une pente de 2% minimum pour l'évacuation des eaux</li>
  <li>Le gel : les matériaux poreux (certaines pierres) peuvent se fragmenter au gel/dégel</li>
  <li>La réglementation : les surfaces imperméables > 20 m² sont soumises à autorisation dans certaines communes</li>
</ul>

<h2>Besoin d'une allée de jardin à Lyon ?</h2>
<p>LM Espace Vert réalise vos allées et <a href="/services/maconnerie-paysagere">travaux de maçonnerie paysagère</a> dans tout le nord et l'ouest lyonnais. <a href="/devis">Demandez un devis gratuit</a> — nous vous proposons des solutions adaptées à votre budget et à l'esthétique de votre propriété.</p>
    `.trim(),
  },

  {
    slug: 'entretien-terrasse-bois-pierre-lyon',
    category: 'Entretien pratique',
    title: "Entretien terrasse bois et pierre : nos conseils pour Lyon",
    excerpt: "Entretien terrasse à Lyon : nettoyage, traitement du bois, joints de pierre, produits adaptés... LM Espace Vert livre ses conseils professionnels pour protéger votre terrasse.",
    date: '2026-04-01',
    readingTime: '5 min',
    author: 'Léo Maurice',
    image: "/images/scraped/Travaux de création paysagère pour espaces extérieurs près de Limonest.jpeg",
    keywords: ['entretien terrasse Lyon', 'terrasse bois Lyon', 'nettoyage terrasse pierre', 'entretien terrasse Rhône'],
    content: `
<div class="bg-[#F7F5F0] rounded-xl p-4 my-4 border-l-4 border-[#80BC00] text-[#2F2F2F]">
  <p><strong>Rappel :</strong> Une terrasse en bois ou en pierre naturelle à Lyon subit des contraintes importantes : hivers humides et froids (gel/dégel), étés chauds et secs, mousses et lichens liés à l'humidité automnale. Un entretien annuel adapté multiplie par 2 à 3 la durée de vie de votre terrasse.</p>
</div>

<h2>Entretien de la terrasse en bois à Lyon</h2>
<p>Le bois en extérieur dans la région lyonnaise est soumis à de forts contrastes : humidité hivernale et chaleur estivale. Sans entretien, les lames grissonnent, se fissurent et se soulèvent. Voici le protocole professionnel :</p>

<h3>Le nettoyage de printemps (mars-avril)</h3>
<ul>
  <li>Nettoyage haute pression à 100-120 bars (ne pas dépasser — risque d'abrasion des fibres)</li>
  <li>Ou nettoyant bois oxalic + brossage dans le sens des fibres</li>
  <li>Rinçage abondant et séchage 48h minimum</li>
</ul>

<h3>Le traitement du bois</h3>
<ul>
  <li><strong>Bois exotiques (teck, ipé)</strong> : huile naturelle 1 fois/an, à appliquer sur bois sec et chaud</li>
  <li><strong>Pin traité autoclave</strong> : lasure pénétrante microporeuse tous les 2-3 ans</li>
  <li><strong>Douglas, mélèze</strong> : huile ou lasure selon le degré de grisonnement souhaité</li>
</ul>

<div class="overflow-x-auto my-6"><table class="w-full text-sm border-collapse">
<thead><tr class="bg-[#80BC00] text-white"><th class="p-2 text-left">Essence</th><th class="p-2 text-left">Produit recommandé</th><th class="p-2 text-left">Fréquence</th><th class="p-2 text-left">Meilleure saison</th></tr></thead>
<tbody>
<tr class="border-b"><td class="p-2">Teck</td><td class="p-2">Huile teck naturelle</td><td class="p-2">1×/an</td><td class="p-2">Avril-mai</td></tr>
<tr class="border-b bg-[#F7F5F0]"><td class="p-2">Pin autoclave</td><td class="p-2">Lasure pénétrante</td><td class="p-2">Tous les 2 ans</td><td class="p-2">Printemps/été</td></tr>
<tr class="border-b"><td class="p-2">Douglas</td><td class="p-2">Huile ou lasure</td><td class="p-2">1–2×/an</td><td class="p-2">Avril ou sept.</td></tr>
<tr class="border-b bg-[#F7F5F0]"><td class="p-2">Composite</td><td class="p-2">Nettoyant composite</td><td class="p-2">1×/an</td><td class="p-2">Mars-avril</td></tr>
</tbody>
</table></div>

<h2>Entretien de la terrasse en pierre à Lyon</h2>
<p>Les terrasses en pierre naturelle (calcaire, granit, schiste) sont durables mais sensibles aux mousses et aux lichens dans le climat lyonnais.</p>
<ul>
  <li><strong>Nettoyage annuel</strong> : haute pression ou produit anti-mousse biodégradable au printemps</li>
  <li><strong>Traitement hydrofuge</strong> : à appliquer tous les 3-5 ans sur les pierres calcaires poreuses</li>
  <li><strong>Joints</strong> : vérifier et reboucher les joints fissurés à la résine époxy ou au mortier de chaux</li>
</ul>

<h2>Faire appel à LM Espace Vert pour votre terrasse</h2>
<p>LM Espace Vert propose un service complet de <a href="/services/entretien-jardin">remise en état des terrasses</a> à Lyon, Tassin, Écully et tout le nord lyonnais. Nous réalisons le nettoyage, le traitement et les réparations de vos terrasses bois et pierre. <a href="/devis">Demandez un devis gratuit</a>.</p>
    `.trim(),
  },

  {
    slug: 'jardin-faible-entretien-lyon',
    category: 'Conseils jardin',
    title: "Jardin à faible entretien : créer un espace beau sans s'épuiser",
    excerpt: "Jardin faible entretien à Lyon : plantes résistantes, paillage, massifs durables... LM Espace Vert vous guide pour un beau jardin sans passer vos week-ends à jardiner.",
    date: '2026-03-25',
    readingTime: '6 min',
    author: 'Léo Maurice',
    image: "/images/scraped/Aménagement extérieur de jardin près de Limonest avec terrasse moderne.jpeg",
    keywords: ['jardin faible entretien Lyon', 'jardin économique entretien', 'plantes résistantes Lyon', 'jardinage facile Rhône'],
    content: `
<div class="bg-[#F7F5F0] rounded-xl p-4 my-4 border-l-4 border-[#80BC00] text-[#2F2F2F]">
  <p><strong>Définition :</strong> Un jardin à faible entretien (ou "low maintenance garden") est un jardin conçu pour minimiser le temps et les ressources nécessaires à son maintien, sans sacrifier l'esthétique. Il repose sur le choix judicieux des végétaux, un sol bien paillé et des aménagements durables.</p>
</div>

<h2>Pourquoi un jardin à faible entretien à Lyon ?</h2>
<p>Dans la région lyonnaise, de nombreux propriétaires actifs souhaitent profiter d'un beau jardin sans y consacrer plusieurs heures par semaine. Le jardin à faible entretien répond à cette demande croissante. Il n'est pas synonyme de jardin banal : bien conçu, il peut être aussi beau et varié qu'un jardin traditionnel.</p>

<h2>Les 5 principes clés d'un jardin facile à entretenir</h2>

<h3>1. Choisir des plantes adaptées au climat lyonnais</h3>
<p>Les plantes résistantes aux étés chauds et aux hivers lyonnais sont les alliées du jardinier peu disponible : lavandes, graminées ornementales (miscanthus, festuca), vivaces robustes (échinacées, rudbeckias, sedums), arbustes persistants (photinia, viburnum). Ces espèces ne demandent pas d'arrosage régulier une fois installées.</p>

<h3>2. Pailler abondamment</h3>
<p>Un paillage de 8-10 cm réduit le désherbage de 80-90%, conserve l'humidité du sol et enrichit la terre en se décomposant. C'est l'investissement le plus rentable en termes de réduction de l'entretien.</p>

<h3>3. Réduire la surface de pelouse</h3>
<p>La pelouse est l'élément le plus chronophage du jardin (tonte toutes les 2 semaines en saison). Réduire sa surface au profit de massifs paillés, d'allées en graviers ou de prairies fleuries réduit considérablement le temps de jardinage.</p>

<h3>4. Installer un arrosage automatique</h3>
<p>Un <a href="/services/arrosage-automatique">système d'arrosage automatique</a> bien programmé élimine la contrainte de l'arrosage manuel, surtout pendant les vacances estivales. Un investissement amorti en 2-3 saisons.</p>

<h3>5. Structures minérales durables</h3>
<p>Des <a href="/services/maconnerie-paysagere">allées et terrasses en matériaux durs</a> (pierre, béton désactivé, graviers stabilisés) ne demandent qu'un nettoyage annuel, contre un entretien hebdomadaire pour la pelouse.</p>

<div class="overflow-x-auto my-6"><table class="w-full text-sm border-collapse">
<thead><tr class="bg-[#80BC00] text-white"><th class="p-2 text-left">Élément</th><th class="p-2 text-left">Entretien standard</th><th class="p-2 text-left">Alternative low-maintenance</th><th class="p-2 text-left">Gain de temps</th></tr></thead>
<tbody>
<tr class="border-b"><td class="p-2">Pelouse</td><td class="p-2">30 min/2 sem.</td><td class="p-2">Prairie fleurie</td><td class="p-2">–80%</td></tr>
<tr class="border-b bg-[#F7F5F0]"><td class="p-2">Massifs nus</td><td class="p-2">2h/mois (désherbage)</td><td class="p-2">Massifs paillés</td><td class="p-2">–90%</td></tr>
<tr class="border-b"><td class="p-2">Arrosage manuel</td><td class="p-2">1h/sem. en été</td><td class="p-2">Arrosage auto</td><td class="p-2">–100%</td></tr>
<tr class="border-b bg-[#F7F5F0]"><td class="p-2">Haie formelle</td><td class="p-2">3 tailles/an</td><td class="p-2">Haie bocagère</td><td class="p-2">–66%</td></tr>
</tbody>
</table></div>

<h2>LM Espace Vert crée votre jardin low-maintenance</h2>
<p>LM Espace Vert conçoit et réalise des jardins à faible entretien dans tout Lyon nord et ouest : Tassin, Écully, Dardilly, Caluire, Champagne-au-Mont-d'Or. Notre approche : maximiser le plaisir visuel, minimiser les corvées. <a href="/devis">Demandez un devis gratuit</a>.</p>
    `.trim(),
  },

  {
    slug: 'prairie-fleurie-lyon-biodiversite',
    category: 'Biodiversité',
    title: "Prairie fleurie à Lyon : comment favoriser la biodiversité dans votre jardin",
    excerpt: "Prairie fleurie à Lyon : remplacez tout ou partie de votre pelouse par un tapis de fleurs sauvages. Guide pratique pour favoriser la biodiversité dans le Rhône.",
    date: '2026-03-15',
    readingTime: '6 min',
    author: 'Léo Maurice',
    image: "/images/scraped/Création paysagère et aménagement extérieur de jardin près de Limonest.jpeg",
    keywords: ['prairie fleurie Lyon', 'biodiversité jardin Lyon', 'pollinisateurs Rhône', 'jardin naturel Lyon nord'],
    content: `
<div class="bg-[#F7F5F0] rounded-xl p-4 my-4 border-l-4 border-[#80BC00] text-[#2F2F2F]">
  <p><strong>Définition :</strong> Une prairie fleurie est un espace enherbé composé d'un mélange de graminées et de fleurs sauvages ou ornementales, laissé à une pousse naturelle et tondu seulement 1 à 2 fois par an. Elle constitue un habitat précieux pour les insectes pollinisateurs, les oiseaux et les petits mammifères.</p>
</div>

<h2>Pourquoi créer une prairie fleurie à Lyon ?</h2>
<p>Dans la région lyonnaise, les populations de pollinisateurs ont chuté de 30 à 40% en vingt ans. Les jardins privés représentent pourtant un potentiel énorme pour inverser cette tendance. Remplacer même une partie de votre pelouse tondue rase par une prairie fleurie peut transformer votre jardin en refuge de biodiversité.</p>

<h2>Les avantages de la prairie fleurie</h2>
<ul>
  <li><strong>Biodiversité</strong> : +70% d'insectes pollinisateurs sur un jardin avec prairie vs pelouse rase</li>
  <li><strong>Économie d'eau</strong> : les graminées de prairie sont bien plus résistantes à la sécheresse</li>
  <li><strong>Moins d'entretien</strong> : 1 à 2 tontes par an vs toutes les 2 semaines pour une pelouse</li>
  <li><strong>Esthétique naturelle</strong> : très tendance dans les jardins contemporains</li>
  <li><strong>Économie d'engrais</strong> : une prairie se fertilise elle-même</li>
</ul>

<h2>Comment créer une prairie fleurie à Lyon ?</h2>

<h3>Choix du mélange</h3>
<p>Pour la région lyonnaise (climat semi-continental), privilégiez des mélanges comportant : coquelicots, marguerites, bleuets, scabieuses, centaurées, linaires, phacélie, bourrache, trèfles, chicorée sauvage. Incluez 70-80% de graminées basses (fétuques, agrostis) pour une structure stable.</p>

<h3>La période de semis</h3>
<p>Semis de printemps (mars-avril) ou d'automne (septembre-octobre) dans le Rhône. L'automne est souvent plus favorable car les pluies naturelles assurent l'arrosage des semis.</p>

<h3>Préparation du sol</h3>
<ul>
  <li>Scarifier ou retourner superficiellement le sol existant</li>
  <li>Ne pas fertiliser (un sol trop riche favorise les espèces envahissantes)</li>
  <li>Semer à faible densité (1-2 g/m²) et tasser légèrement</li>
</ul>

<h3>Entretien de la prairie</h3>
<p>Première tonte en juillet-août à 10 cm de hauteur (après la première floraison). Deuxième tonte optionnelle en octobre. Entre les deux : ne rien faire et profiter.</p>

<div class="overflow-x-auto my-6"><table class="w-full text-sm border-collapse">
<thead><tr class="bg-[#80BC00] text-white"><th class="p-2 text-left">Floraison</th><th class="p-2 text-left">Espèces</th><th class="p-2 text-left">Pollinisateurs attirés</th></tr></thead>
<tbody>
<tr class="border-b"><td class="p-2">Avril–mai</td><td class="p-2">Coquelicot, bleuet, myosotis</td><td class="p-2">Bourdons, abeilles solitaires</td></tr>
<tr class="border-b bg-[#F7F5F0]"><td class="p-2">Juin–juillet</td><td class="p-2">Marguerite, centaurée, linaire</td><td class="p-2">Papillons, abeilles, syrphes</td></tr>
<tr class="border-b"><td class="p-2">Août–septembre</td><td class="p-2">Scabieuse, chicorée, achillée</td><td class="p-2">Tous pollinisateurs</td></tr>
</tbody>
</table></div>

<h2>LM Espace Vert crée votre prairie fleurie</h2>
<p>Nous réalisons des prairies fleuries sur mesure dans tout le nord et l'ouest lyonnais. <a href="/services/creation-jardin">Création de jardin naturel</a>, conseil en biodiversité, sélection des mélanges adaptés à votre exposition. <a href="/devis">Demandez un devis gratuit</a>.</p>
    `.trim(),
  },

  {
    slug: 'arrosage-jardin-ete-lyon-chaleur',
    category: 'Entretien saisonnier',
    title: "Comment arroser son jardin pendant les canicules lyonnaises ?",
    excerpt: "Arrosage jardin canicule Lyon : heures, fréquence, techniques pour économiser l'eau et garder vos plantes en vie pendant les étés chauds du Rhône. Conseils d'expert.",
    date: '2026-02-15',
    readingTime: '5 min',
    author: 'Léo Maurice',
    image: "/images/scraped/Travaux de création paysagère pour extérieur près de Limonest.jpeg",
    keywords: ['arrosage jardin été Lyon', 'canicule jardin Rhône', 'économie eau jardin', 'arrosage automatique Lyon'],
    content: `
<div class="bg-[#F7F5F0] rounded-xl p-4 my-4 border-l-4 border-[#80BC00] text-[#2F2F2F]">
  <p><strong>Rappel climatique :</strong> Lyon connaît en moyenne 10 à 15 jours de canicule par été (températures > 35°C). Les étés 2019, 2022 et 2023 ont vu des périodes de plus de 20 jours sans pluie significative. Sans arrosage adapté, les jardins subissent des dommages irréversibles.</p>
</div>

<h2>Les règles d'or de l'arrosage estival à Lyon</h2>

<h3>Arrosez tôt le matin, jamais en plein soleil</h3>
<p>L'arrosage le matin (avant 8h) permet à l'eau d'atteindre les racines avant l'évaporation. L'arrosage en plein soleil provoque un effet loupe sur les feuilles et jusqu'à 50% d'évaporation avant que l'eau n'atteigne le sol. L'arrosage en soirée, bien que pratique, favorise le développement de champignons.</p>

<h3>Arrosez profond et peu fréquent</h3>
<p>Un arrosage copieux tous les 2-3 jours est préférable à un arrosage léger quotidien. L'eau doit pénétrer à 20-30 cm pour inciter les racines à s'enfoncer et devenir résistantes à la sécheresse. Un sol humide en surface mais sec en profondeur ne sert à rien.</p>

<h2>Besoins en eau par type de végétation à Lyon</h2>

<div class="overflow-x-auto my-6"><table class="w-full text-sm border-collapse">
<thead><tr class="bg-[#80BC00] text-white"><th class="p-2 text-left">Type de végétation</th><th class="p-2 text-left">Besoin/semaine (chaleur)</th><th class="p-2 text-left">Fréquence recommandée</th></tr></thead>
<tbody>
<tr class="border-b"><td class="p-2">Pelouse</td><td class="p-2">20–30 mm</td><td class="p-2">2–3×/sem. matin</td></tr>
<tr class="border-b bg-[#F7F5F0]"><td class="p-2">Légumes potager</td><td class="p-2">30–50 mm</td><td class="p-2">Quotidien</td></tr>
<tr class="border-b"><td class="p-2">Arbustes en massif</td><td class="p-2">15–25 mm</td><td class="p-2">2×/sem.</td></tr>
<tr class="border-b bg-[#F7F5F0]"><td class="p-2">Arbres plantés &lt;3 ans</td><td class="p-2">20–40 L/arbre</td><td class="p-2">2×/sem.</td></tr>
<tr class="border-b"><td class="p-2">Plantes méditerranéennes</td><td class="p-2">5–10 mm</td><td class="p-2">1×/sem. ou moins</td></tr>
</tbody>
</table></div>

<h2>Économiser l'eau pendant la canicule</h2>
<ul>
  <li><strong>Paillage épais</strong> : 8-10 cm de paillage réduisent l'évaporation de 70%</li>
  <li><strong>Récupération des eaux de pluie</strong> : une cuve de 1 000 L peut subvenir aux besoins d'un massif pendant plusieurs semaines</li>
  <li><strong>Arrosage au goutte-à-goutte</strong> : 30-50% d'économie d'eau vs aspersion</li>
  <li><strong>Binage du sol</strong> : casser la croûte de surface améliore la pénétration de l'eau</li>
</ul>

<h2>L'arrosage automatique : la solution anti-canicule</h2>
<p>Un <a href="/services/arrosage-automatique">système d'arrosage automatique</a> bien programmé gère l'arrosage de nuit ou tôt le matin, s'adapte aux prévisions météo (capteur de pluie) et assure une couverture homogène. LM Espace Vert installe et programme des systèmes Hunter et Rain Bird dans toute la région lyonnaise.</p>

<h2>Besoin d'un paysagiste pour votre arrosage estival à Lyon ?</h2>
<p>LM Espace Vert installe vos systèmes d'arrosage automatique et vous conseille sur la gestion de l'eau dans votre jardin. <a href="/devis">Demandez un devis gratuit</a> ou appelez le <strong>06 72 58 73 53</strong>.</p>
    `.trim(),
  },

  {
    slug: 'devis-paysagiste-lyon-prix',
    category: 'Pratique',
    title: "Combien coûte un paysagiste à Lyon ? Tarifs et devis 2026",
    excerpt: "Prix paysagiste Lyon 2026 : tarifs de création de jardin, entretien, taille de haies, élagage. Fourchettes réelles et conseils pour obtenir le meilleur devis.",
    date: '2026-01-20',
    readingTime: '7 min',
    author: 'Léo Maurice',
    image: "/images/scraped/Aménagement extérieur avec création paysagère sur mesure près de Limonest.jpeg",
    keywords: ['prix paysagiste Lyon', 'tarif paysagiste Rhône', 'coût jardin Lyon', 'devis paysagiste 2026'],
    content: `
<div class="bg-[#F7F5F0] rounded-xl p-4 my-4 border-l-4 border-[#80BC00] text-[#2F2F2F]">
  <p><strong>À savoir :</strong> Les tarifs d'un paysagiste à Lyon varient selon la nature de la prestation, la superficie, l'accessibilité et la qualité des matériaux. Les fourchettes ci-dessous sont issues de notre expérience de terrain dans le Rhône en 2026.</p>
</div>

<h2>Tarifs des principales prestations paysagères à Lyon</h2>

<div class="overflow-x-auto my-6"><table class="w-full text-sm border-collapse">
<thead><tr class="bg-[#80BC00] text-white"><th class="p-2 text-left">Prestation</th><th class="p-2 text-left">Unité</th><th class="p-2 text-left">Fourchette 2026</th><th class="p-2 text-left">Commentaire</th></tr></thead>
<tbody>
<tr class="border-b"><td class="p-2">Tonte pelouse</td><td class="p-2">100 m²</td><td class="p-2">30–55 €</td><td class="p-2">Hors ramassage</td></tr>
<tr class="border-b bg-[#F7F5F0]"><td class="p-2">Taille haie</td><td class="p-2">10 ml</td><td class="p-2">50–120 €</td><td class="p-2">Hors évacuation</td></tr>
<tr class="border-b"><td class="p-2">Élagage arbre</td><td class="p-2">Par arbre</td><td class="p-2">150–800 €</td><td class="p-2">Selon hauteur</td></tr>
<tr class="border-b bg-[#F7F5F0]"><td class="p-2">Création gazon semé</td><td class="p-2">100 m²</td><td class="p-2">250–450 €</td><td class="p-2">Fournitures incluses</td></tr>
<tr class="border-b"><td class="p-2">Création gazon rouleaux</td><td class="p-2">100 m²</td><td class="p-2">450–800 €</td><td class="p-2">Pose + fournitures</td></tr>
<tr class="border-b bg-[#F7F5F0]"><td class="p-2">Terrasse dallage pierre</td><td class="p-2">m²</td><td class="p-2">120–250 €</td><td class="p-2">Hors terrassement</td></tr>
<tr class="border-b"><td class="p-2">Allée gravier stabilisé</td><td class="p-2">m²</td><td class="p-2">45–80 €</td><td class="p-2">Pose complète</td></tr>
<tr class="border-b bg-[#F7F5F0]"><td class="p-2">Arrosage automatique</td><td class="p-2">Par zone</td><td class="p-2">800–2 500 €</td><td class="p-2">Installation complète</td></tr>
<tr class="border-b"><td class="p-2">Contrat entretien annuel</td><td class="p-2">Jardin 300 m²</td><td class="p-2">1 200–2 500 €/an</td><td class="p-2">Tonte + taille + désherbage</td></tr>
</tbody>
</table></div>

<h2>Comment obtenir un devis paysagiste à Lyon ?</h2>
<p>La première étape est toujours la visite gratuite. Un bon paysagiste ne peut pas chiffrer un projet sérieusement sans voir le terrain. Méfiez-vous des devis à distance basés uniquement sur la superficie.</p>

<h2>Ce qui fait varier les prix à Lyon</h2>
<ul>
  <li><strong>L'accessibilité du chantier</strong> : un jardin accessible en camion coûte moins cher qu'un jardin en étage accessible uniquement à la main</li>
  <li><strong>La qualité des matériaux</strong> : le calcaire du Jura coûte 2 à 3× plus cher que le béton désactivé</li>
  <li><strong>La saison</strong> : les périodes de forte demande (avril-mai, septembre) peuvent impacter les délais</li>
  <li><strong>La complexité</strong> : un jardin plat est plus facile à travailler qu'un jardin en pente</li>
</ul>

<h2>Les avantages fiscaux</h2>
<p>Les prestations d'entretien de jardin réalisées par un professionnel à domicile ouvrent droit au <strong>crédit d'impôt services à la personne (50% dans la limite de 5 000 €/an)</strong> pour les particuliers. Vérifiez que votre paysagiste est bien déclaré en SAP (Services À la Personne).</p>

<h2>Demandez votre devis à LM Espace Vert</h2>
<p>LM Espace Vert propose des devis gratuits et transparents pour tous vos projets à Lyon et dans un rayon de 20 km. <a href="/devis">Demandez un devis gratuit en ligne</a> ou appelez le <strong>06 72 58 73 53</strong> — Léo Maurice se déplace personnellement pour évaluer votre projet.</p>
    `.trim(),
  },
  // ── 10 nouveaux articles Sprint 2 ──────────────────────────────────────────

  {
    slug: 'entretien-gazon-lyon-printemps',
    category: 'Conseils',
    title: 'Entretien du gazon au printemps à Lyon : le guide complet',
    excerpt: 'Scarification, semis de rattrapage, premier désherbage, engrais de printemps... Notre guide semaine par semaine pour remettre votre pelouse lyonnaise en parfait état dès le retour des beaux jours.',
    date: '2026-05-01',
    readingTime: '7 min',
    author: 'Léo Maurice',
    image: "/images/scraped/Conception d’un projet de création paysagère près de Limonest.webp",
    keywords: ['entretien gazon printemps Lyon', 'scarification pelouse Lyon', 'tonte gazon mars avril', 'engrais printemps pelouse'],
    content: `
<blockquote class="bg-[#F7F5F0] rounded-xl p-4 my-4 border-l-4 border-[#80BC00] text-[#2F2F2F]">
  <p><strong>À retenir :</strong> Le printemps (mars–mai) est la période la plus importante pour la pelouse lyonnaise. Une bonne remise en état au printemps conditionne la santé du gazon pour toute la saison. Scarification, semis de rattrapage, engrais azoté et premier désherbage — voici le programme semaine par semaine.</p>
</blockquote>

<h2>Pourquoi le printemps est crucial pour votre gazon à Lyon</h2>
<p>Après les pluies abondantes et les gelées de l'hiver lyonnais, votre pelouse sort souvent de mauvaise mine : feutre accumulé, zones clairsemées, mousses installées, sol compacté. Pas de panique — c'est la situation normale dans la région. Le printemps offre une fenêtre idéale pour remettre le gazon en état : températures douces (10–18°C), pluies régulières, ensoleillement croissant.</p>

<p>LM Espace Vert réalise l'entretien printanier de pelouses dans toute la zone de <a href="/secteur/saint-didier">Saint-Didier-au-Mont-d'Or</a>, <a href="/secteur/caluire">Caluire-et-Cuire</a>, <a href="/secteur/dardilly">Dardilly</a> et des communes voisines. Voici notre programme professionnel que vous pouvez adapter en DIY.</p>

<h2>Semaine par semaine : le calendrier de printemps</h2>

<h3>Mi-mars : réveil en douceur</h3>
<p>Dès que les températures nocturnes restent durablement au-dessus de 5°C (généralement mi-mars dans le Rhône), votre gazon sort de dormance. C'est le moment d'effectuer la <strong>première tonte haute</strong> : réglez la tondeuse à 6–7 cm. Cette coupe haute stimule la croissance latérale sans stresser les racines encore fragiles. Profitez-en pour inspecter l'état général : zones de mousse, plaques jaunies, taupinières, passages usés.</p>

<h3>Fin mars – début avril : scarification</h3>
<p>La <strong>scarification</strong> est l'opération la plus importante du printemps. Elle consiste à déchirer mécaniquement le feutre (accumulation de matières organiques mortes) qui s'est formé entre les brins de gazon et le sol. Ce feutre, s'il dépasse 1 cm, empêche l'eau, l'air et les nutriments de pénétrer dans le sol.</p>
<ul>
  <li>Utilisez un scarificateur électrique ou thermique (à louer chez les jardineries)</li>
  <li>Passez une première fois en diagonale, puis une seconde fois perpendiculairement</li>
  <li>Ramassez abondamment les déchets à la tondeuse ou au râteau</li>
  <li>Votre pelouse ressemblera à un champ labouré — c'est normal, elle va vite repartir</li>
</ul>

<h3>Début avril : hersage et regarnissage</h3>
<p>Après la scarification, <strong>hersez légèrement</strong> pour ameublir la surface du sol et créer un lit de germination. C'est le moment du <strong>semis de rattrapage</strong> : épandez du gazon à raison de 30–40 g/m² sur les zones clairsemées. Recouvrez légèrement à la main ou au râteau. Arrosez léger et régulier.</p>

<h3>Mi-avril : premier apport d'engrais</h3>
<p>Apportez un <strong>engrais de printemps riche en azote (N)</strong> pour stimuler la croissance et reverdir le gazon. Dans la région lyonnaise, les sols argileux peuvent nécessiter un apport complémentaire en calcium. Choisissez un engrais longue durée (3 mois) pour éviter une pousse trop explosive. Respectez les dosages — un excès d'azote favorise les maladies fongiques.</p>

<h3>Fin avril – mai : premier désherbage</h3>
<p>Les pissenlits, plantains, trèfles et autres adventices profitent de la remise en état pour s'installer. Désherbez sélectivement :</p>
<ul>
  <li><strong>Mécaniquement</strong> : couteau à désherber pour les pissenlits (ôter la racine pivotante)</li>
  <li><strong>Thermique</strong> : désherbeur à flamme sur les allées et bordures</li>
  <li><strong>Produits sélectifs</strong> : si la pression est forte, un désherbant sélectif gazon peut être utilisé (à éviter près des potagers)</li>
</ul>

<div class="overflow-x-auto my-6"><table class="w-full text-sm border-collapse">
<thead><tr style="background-color:#80BC00" class="text-white"><th class="p-2 text-left">Période</th><th class="p-2 text-left">Action prioritaire</th><th class="p-2 text-left">Hauteur de coupe</th><th class="p-2 text-left">Arrosage</th></tr></thead>
<tbody>
<tr class="border-b"><td class="p-2">Mi-mars</td><td class="p-2">1ère tonte haute + inspection</td><td class="p-2">6–7 cm</td><td class="p-2">Selon pluie</td></tr>
<tr class="border-b bg-[#F7F5F0]"><td class="p-2">Fin mars</td><td class="p-2">Scarification en profondeur</td><td class="p-2">—</td><td class="p-2">Léger post-scarif.</td></tr>
<tr class="border-b"><td class="p-2">Début avril</td><td class="p-2">Semis de rattrapage + hersage</td><td class="p-2">5–6 cm</td><td class="p-2">2×/jour (semis)</td></tr>
<tr class="border-b bg-[#F7F5F0]"><td class="p-2">Mi-avril</td><td class="p-2">Engrais de printemps azoté</td><td class="p-2">4–5 cm</td><td class="p-2">Normal</td></tr>
<tr class="border-b"><td class="p-2">Mai</td><td class="p-2">Désherbage + tonte régulière</td><td class="p-2">4–5 cm</td><td class="p-2">2× sem. si sec</td></tr>
</tbody>
</table></div>

<h2>Les erreurs à éviter absolument</h2>
<p>Même avec les meilleures intentions, certaines erreurs peuvent compromettre la remise en état de votre pelouse :</p>
<ul>
  <li><strong>Scarifier trop tôt</strong> : si le sol est encore détrempé ou gelé, vous compactez au lieu d'aérer</li>
  <li><strong>Tondre trop court</strong> en mars : un gazon rasé au ras du sol se dessèche et ne résiste pas aux herbes invasives</li>
  <li><strong>Sur-fertiliser</strong> : un excès d'azote provoque des coups de pouce puis une chute brutale, favorise les maladies et brûle les racines</li>
  <li><strong>Ne pas arroser après le semis</strong> : les graines de gazon ont besoin d'une humidité constante les 3 premières semaines</li>
</ul>

<h2>Faire appel à LM Espace Vert pour la remise en état de printemps</h2>
<p>Vous manquez de temps ou de matériel ? LM Espace Vert prend en charge la remise en état complète de votre pelouse au printemps : scarification, semis, engrais, premier désherbage. Nous intervenons dans tout le nord-ouest lyonnais. <a href="/devis">Demandez un devis gratuit</a> ou consultez notre service d'<a href="/services/entretien-espaces-verts">entretien d'espaces verts</a>.</p>

<details class="my-4 border border-[#80BC00] rounded-lg overflow-hidden">
  <summary class="bg-[#F7F5F0] p-3 cursor-pointer font-semibold">Faut-il scarifier chaque printemps à Lyon ?</summary>
  <div class="p-4"><p>Idéalement oui, surtout dans les jardins lyonnais avec des sols argileux qui se compactent facilement. Si votre feutre est inférieur à 1 cm, vous pouvez passer une année. La scarification d'automne (septembre) peut aussi remplacer celle du printemps si vous n'avez le temps que pour un seul passage.</p></div>
</details>

<details class="my-4 border border-[#80BC00] rounded-lg overflow-hidden">
  <summary class="bg-[#F7F5F0] p-3 cursor-pointer font-semibold">Quel engrais de printemps choisir pour un gazon lyonnais ?</summary>
  <div class="p-4"><p>Choisissez un engrais NPK à prédominance azotée (ex. 20-5-10 ou 24-4-8) avec effet longue durée (3 mois). Sur les sols très argileux du nord lyonnais, un amendement calcique associé (chaux agricole) peut être bénéfique pour débloquer les nutriments. Évitez les engrais liquides à effet immédiat qui provoquent des à-coups de croissance.</p></div>
</details>
    `.trim(),
  },

  {
    slug: 'haies-persistantes-lyon-especes',
    category: 'Conseils',
    title: 'Meilleures haies persistantes pour Lyon nord : espèces et conseils',
    excerpt: 'Laurier palme, Photinia, Pittosporum, Eleagnus... Quelles haies persistantes choisir pour le nord lyonnais ? Comparatif complet : croissance, résistance au gel, entretien requis.',
    date: '2026-04-28',
    readingTime: '6 min',
    author: 'Léo Maurice',
    image: "/images/scraped/Élagage et taille de haies.jpeg",
    keywords: ['haies persistantes Lyon', 'laurier haie Lyon', 'Photinia Lyon', 'haie persistante nord lyonnais'],
    content: `
<blockquote class="bg-[#F7F5F0] rounded-xl p-4 my-4 border-l-4 border-[#80BC00] text-[#2F2F2F]">
  <p><strong>À retenir :</strong> Une haie persistante bien choisie pour le climat lyonnais doit résister aux hivers (gelées jusqu'à -15°C possibles), aux étés chauds et secs, et s'adapter aux sols souvent argileux du nord de l'agglomération. Voici notre sélection professionnelle.</p>
</blockquote>

<h2>Pourquoi choisir une haie persistante à Lyon nord ?</h2>
<p>La haie persistante a l'avantage majeur de maintenir son feuillage toute l'année, offrant ainsi une intimité et une protection contre le vent constantes — particulièrement appréciables dans les quartiers résidentiels de <a href="/secteur/caluire">Caluire</a>, <a href="/secteur/limonest">Limonest</a>, <a href="/secteur/dardilly">Dardilly</a> et Saint-Didier-au-Mont-d'Or. Voici les espèces qui se comportent le mieux dans notre région.</p>

<h2>Le Laurier palme (Prunus laurocerasus)</h2>
<p>C'est la haie persistante la plus populaire dans le nord lyonnais. Robuste, dense, à croissance rapide (40–60 cm/an), il supporte les sols argileux et la mi-ombre. Ses grandes feuilles vernissées sont décoratives. Points de vigilance : il peut atteindre 4–6 m si non taillé, et ses fruits sont toxiques. Taille 2–3 fois/an au sécateur (jamais au taille-haie pour éviter les demi-feuilles).</p>
<p><strong>Résistance au gel :</strong> jusqu'à -20°C. <strong>Exposition :</strong> soleil à mi-ombre. <strong>Sol :</strong> tous types, même argileux.</p>

<h2>Le Photinia (Photinia × fraseri 'Red Robin')</h2>
<p>Le Photinia est très apprécié pour ses nouvelles pousses rouge vif au printemps, qui tranchent sur le feuillage vert foncé persistant. Croissance moyenne (20–30 cm/an), il est parfait pour les haies de 1,5 à 3 m. Il préfère un sol bien drainé — attention dans les zones trop argileuses sans amendement. Taille légère 2–3 fois/an pour favoriser les nouvelles pousses rouges.</p>
<p><strong>Résistance au gel :</strong> jusqu'à -15°C. <strong>Exposition :</strong> plein soleil. <strong>Sol :</strong> bien drainé, neutre à légèrement acide.</p>

<h2>Le Pittosporum (Pittosporum tenuifolium)</h2>
<p>Le Pittosporum est un arbuste élégant au feuillage persistant vert argenté ou panaché, très tendance dans les jardins contemporains lyonnais. Croissance lente à modérée. Ses fleurs printanières sont parfumées. Plus sensible au gel que le laurier : à réserver aux jardins abrités ou aux expositions est/ouest dans le Rhône.</p>
<p><strong>Résistance au gel :</strong> jusqu'à -8 à -10°C (selon les hivers lyonnais, prévoir protection en cas de grand froid). <strong>Exposition :</strong> soleil à mi-ombre. <strong>Sol :</strong> bien drainé.</p>

<h2>L'Eleagnus (Eleagnus × ebbingei)</h2>
<p>L'Eleagnus est une des haies persistantes les plus résistantes disponibles pour notre région. Feuillage vert foncé dessus, argenté dessous (effet irisé au vent), croissance rapide (40–60 cm/an), résistant à la pollution, à la sécheresse et au sel. Parfait pour les haies écran anti-bruit. Ses petites fleurs automnales sont très parfumées. Taille annuelle en mars.</p>
<p><strong>Résistance au gel :</strong> jusqu'à -20°C. <strong>Exposition :</strong> soleil à ombre. <strong>Sol :</strong> tous types.</p>

<h2>Tableau comparatif des haies persistantes pour Lyon</h2>

<div class="overflow-x-auto my-6"><table class="w-full text-sm border-collapse">
<thead><tr style="background-color:#80BC00" class="text-white"><th class="p-2 text-left">Espèce</th><th class="p-2 text-left">Croissance/an</th><th class="p-2 text-left">Résistance gel</th><th class="p-2 text-left">Tailles/an</th><th class="p-2 text-left">Point fort</th></tr></thead>
<tbody>
<tr class="border-b"><td class="p-2">Laurier palme</td><td class="p-2">40–60 cm</td><td class="p-2">–20°C</td><td class="p-2">2–3</td><td class="p-2">Polyvalence et robustesse</td></tr>
<tr class="border-b bg-[#F7F5F0]"><td class="p-2">Photinia 'Red Robin'</td><td class="p-2">20–30 cm</td><td class="p-2">–15°C</td><td class="p-2">2–3</td><td class="p-2">Feuillage rouge décoratif</td></tr>
<tr class="border-b"><td class="p-2">Pittosporum</td><td class="p-2">15–25 cm</td><td class="p-2">–8 à –10°C</td><td class="p-2">1–2</td><td class="p-2">Élégance et parfum</td></tr>
<tr class="border-b bg-[#F7F5F0]"><td class="p-2">Eleagnus</td><td class="p-2">40–60 cm</td><td class="p-2">–20°C</td><td class="p-2">1</td><td class="p-2">Résistance extrême</td></tr>
<tr class="border-b"><td class="p-2">If (Taxus baccata)</td><td class="p-2">10–20 cm</td><td class="p-2">–30°C</td><td class="p-2">1–2</td><td class="p-2">Longévité et topiaire</td></tr>
<tr class="border-b bg-[#F7F5F0]"><td class="p-2">Charme (Carpinus)</td><td class="p-2">30–50 cm</td><td class="p-2">–30°C</td><td class="p-2">1</td><td class="p-2">Semi-persistant, très résistant</td></tr>
</tbody>
</table></div>

<h2>Nos conseils de plantation pour Lyon</h2>
<p>Quelle que soit l'espèce choisie, la plantation en automne (octobre–novembre) est idéale pour les haies dans la région lyonnaise. Le sol encore chaud favorise l'enracinement avant l'hiver. En sol argileux, incorporez du sable grossier et du compost dans le trou de plantation. Paillez abondamment le premier été pour limiter le stress hydrique.</p>

<p>LM Espace Vert réalise la plantation et l'entretien de haies dans tout le nord lyonnais. Consultez notre <a href="/services/taille-haies">service de taille de haies</a> ou <a href="/devis">demandez un devis gratuit</a>.</p>

<details class="my-4 border border-[#80BC00] rounded-lg overflow-hidden">
  <summary class="bg-[#F7F5F0] p-3 cursor-pointer font-semibold">Quelle haie persistante pousse le plus vite à Lyon ?</summary>
  <div class="p-4"><p>Le Laurier palme et l'Eleagnus sont les plus rapides avec 40–60 cm de croissance annuelle. Si vous cherchez un écran rapide, ces deux espèces s'imposent. Pour une haie plus fine et raffinée, le Photinia offre un bon compromis entre vitesse et esthétisme.</p></div>
</details>

<details class="my-4 border border-[#80BC00] rounded-lg overflow-hidden">
  <summary class="bg-[#F7F5F0] p-3 cursor-pointer font-semibold">Quelle haie persistante demande le moins d'entretien ?</summary>
  <div class="p-4"><p>L'Eleagnus est sans conteste la haie persistante la plus facile à entretenir : une taille annuelle en mars suffit. Il résiste également à la sécheresse, au vent et à la pollution. Le charme, bien que semi-persistant (il garde ses feuilles sèches en hiver), ne demande également qu'une taille par an.</p></div>
</details>
    `.trim(),
  },

  {
    slug: 'massif-fleuri-quatre-saisons-lyon',
    category: 'Conseils',
    title: 'Massif fleuri 4 saisons à Lyon : plantes et associations réussies',
    excerpt: "Créer un massif qui fleurit toute l'année à Lyon : tulipes au printemps, lavande et gaura en été, asters en automne, hellébores en hiver. Nos associations et conseils pour le climat lyonnais.",
    date: '2026-04-20',
    readingTime: '7 min',
    author: 'Léo Maurice',
    image: "/images/scraped/Élagage sécurisé et taille de haies sur mesure près de Limonest2.jpeg",
    keywords: ['massif fleuri Lyon', 'massif 4 saisons Lyon', 'vivaces Lyon', 'plantation massif fleurs'],
    content: `
<blockquote class="bg-[#F7F5F0] rounded-xl p-4 my-4 border-l-4 border-[#80BC00] text-[#2F2F2F]">
  <p><strong>À retenir :</strong> Un massif fleuri 4 saisons à Lyon repose sur un principe simple : associer des végétaux à floraisons décalées pour qu'il y ait toujours quelque chose en fleur, de janvier à décembre. Avec le bon choix d'espèces adaptées au climat lyonnais, c'est tout à fait réalisable sans entretien excessif.</p>
</blockquote>

<h2>La structure d'un massif 4 saisons réussi</h2>
<p>Un massif harmonieux et fleuri toute l'année se construit en trois couches :</p>
<ul>
  <li><strong>La structure (arbustes persistants)</strong> : ils forment l'armature du massif en hiver, quand les vivaces sont en dormance</li>
  <li><strong>Les vivaces</strong> : elles assurent la floraison principale de printemps à automne et reviennent chaque année</li>
  <li><strong>Les bulbes et annuelles</strong> : ils complètent les vides et apportent une touche de couleur printanière ou estivale</li>
</ul>

<h2>Printemps (mars – mai) : l'explosion colorée</h2>
<p>Le printemps lyonnais est la saison la plus généreuse pour les jardins. Profitez-en avec :</p>
<ul>
  <li><strong>Tulipes (Tulipa)</strong> : à planter en octobre-novembre, floraison mars-avril. Choisissez des variétés tardives (Darwin) qui s'acclimatent bien aux hivers lyonnais</li>
  <li><strong>Narcisses (Narcissus)</strong> : plus naturels que les tulipes, ils se naturalisent facilement et reviennent d'année en année</li>
  <li><strong>Pensées et myosotis</strong> : bisannuelles, elles couvrent le sol au printemps et cachent le feuillage des bulbes qui s'éteint</li>
  <li><strong>Spirées (Spiraea)</strong> : arbustes à floraison blanche ou rose spectaculaire en avril-mai, très rustiques</li>
</ul>

<h2>Été (juin – septembre) : la plénitude</h2>
<p>L'été lyonnais est chaud et peut être sec — choisissez des plantes résistantes à la chaleur :</p>
<ul>
  <li><strong>Lavande (Lavandula angustifolia 'Hidcote')</strong> : la reine des massifs estivaux lyonnais. Floraison juin-juillet, très mellifère, feuillage persistant argenté. À planter en plein soleil dans un sol bien drainé</li>
  <li><strong>Sauge ornementale (Salvia nemorosa 'Caradonna')</strong> : épis violets de mai à septembre, résistante à la sécheresse, parfaite pour les massifs</li>
  <li><strong>Gaura (Oenothera lindheimeri)</strong> : nuage de fleurs blanches et roses qui dansent au vent de juin à octobre. Tolère les étés chauds du Rhône</li>
  <li><strong>Échinacée (Echinacea purpurea)</strong> : vivace majestueuse, floraison juillet-septembre, résistante à la chaleur</li>
</ul>

<h2>Automne (octobre – novembre) : les couleurs du soir</h2>
<p>L'automne lyonnais est souvent doux et ensoleillé — profitez-en avec :</p>
<ul>
  <li><strong>Asters (Aster novi-belgii)</strong> : floraison spectaculaire en violet, rose ou blanc de septembre à novembre. Associez-les aux graminées pour un effet naturel</li>
  <li><strong>Sédum / Orpin (Hylotelephium 'Herbstfreude')</strong> : fleurs roses en dôme, feuillage charnu, têtes florales décoratives même en hiver</li>
  <li><strong>Anémone du Japon (Anemone × hybrida)</strong> : délicates fleurs blanches ou roses, floraison août-octobre</li>
  <li><strong>Graminées ornementales</strong> : Miscanthus, Pennisetum — leurs aigrettes sont à leur apogée en automne et restent décoratives tout l'hiver</li>
</ul>

<h2>Hiver (décembre – février) : la discrétion élégante</h2>
<p>L'hiver ne doit pas signifier massif mort. Des espèces bien choisies maintiennent l'intérêt visuel :</p>
<ul>
  <li><strong>Hellébore (Helleborus × hybridus)</strong> : fleurs de décembre à mars, feuillage persistant, parfait en sous-bois ou mi-ombre</li>
  <li><strong>Cyclamen de Naples (Cyclamen hederifolium)</strong> : petites fleurs roses en septembre-novembre, feuillage argenté en hiver</li>
  <li><strong>Skimmia japonica</strong> : arbuste persistant à baies rouges spectaculaires tout l'hiver</li>
  <li><strong>Cornouiller (Cornus sanguinea)</strong> : rameaux rouges décoratifs tout l'hiver, feuillage automnal flamboyant</li>
</ul>

<div class="overflow-x-auto my-6"><table class="w-full text-sm border-collapse">
<thead><tr style="background-color:#80BC00" class="text-white"><th class="p-2 text-left">Saison</th><th class="p-2 text-left">Plantes recommandées</th><th class="p-2 text-left">Couleurs</th><th class="p-2 text-left">Entretien</th></tr></thead>
<tbody>
<tr class="border-b"><td class="p-2">Printemps</td><td class="p-2">Tulipes, narcisses, spirées</td><td class="p-2">Rouge, jaune, blanc, rose</td><td class="p-2">Désherbage, paillage</td></tr>
<tr class="border-b bg-[#F7F5F0]"><td class="p-2">Été</td><td class="p-2">Lavande, sauge, gaura, échinacée</td><td class="p-2">Violet, blanc, rose</td><td class="p-2">Arrosage si sec</td></tr>
<tr class="border-b"><td class="p-2">Automne</td><td class="p-2">Asters, sédums, anémones</td><td class="p-2">Violet, rose, blanc</td><td class="p-2">Minimal</td></tr>
<tr class="border-b bg-[#F7F5F0]"><td class="p-2">Hiver</td><td class="p-2">Hellébores, cyclamens, skimmia</td><td class="p-2">Blanc, rose, rouge</td><td class="p-2">Aucun</td></tr>
</tbody>
</table></div>

<h2>Créer votre massif 4 saisons avec LM Espace Vert</h2>
<p>LM Espace Vert conçoit et réalise des massifs fleuris 4 saisons dans toute la zone lyonnaise. Nous sélectionnons les végétaux adaptés à votre exposition, votre sol et votre style. Consultez notre service de <a href="/services/creation-jardins">création de jardins</a> ou <a href="/devis">demandez un devis gratuit</a>.</p>

<details class="my-4 border border-[#80BC00] rounded-lg overflow-hidden">
  <summary class="bg-[#F7F5F0] p-3 cursor-pointer font-semibold">Quelle est la meilleure période pour planter un massif à Lyon ?</summary>
  <div class="p-4"><p>L'automne (septembre-novembre) est idéal pour la majorité des arbustes et vivaces dans la région lyonnaise. Le sol est encore chaud, les pluies assurent l'arrosage naturel, et les plantes s'enracinent avant l'hiver. Les bulbes de printemps (tulipes, narcisses) doivent être plantés en octobre-novembre. Les annuelles se plantent au printemps après les dernières gelées (vers mi-avril dans le Rhône).</p></div>
</details>

<details class="my-4 border border-[#80BC00] rounded-lg overflow-hidden">
  <summary class="bg-[#F7F5F0] p-3 cursor-pointer font-semibold">Comment entretenir un massif fleuri avec peu de temps ?</summary>
  <div class="p-4"><p>Le secret d'un massif peu gourmand en entretien est le paillage : une couche de 8 cm de BRF ou de copeaux réduit le désherbage de 80%. Choisissez des vivaces robustes qui n'ont pas besoin d'être arrosées une fois installées (lavande, gaura, sédum). Divisez les touffes tous les 3-4 ans pour maintenir leur vigueur. Une taille en fin d'hiver (mars) et un apport de compost annuel suffisent.</p></div>
</details>
    `.trim(),
  },

  {
    slug: 'terrassement-jardin-etapes-lyon',
    category: 'Travaux',
    title: 'Terrassement de jardin à Lyon : étapes, techniques et prix',
    excerpt: 'Terrassement manuel ou mécanisé, évacuation des terres, sous-couche, nivelement... Tout comprendre sur le terrassement de jardin à Lyon, avec les prix au m² pratiqués dans le Rhône.',
    date: '2026-04-15',
    readingTime: '7 min',
    author: 'Léo Maurice',
    image: "/images/scraped/Création d’espace extérieur paysager près de Limonest.jpeg",
    keywords: ['terrassement jardin Lyon', 'terrassement paysagiste Lyon', 'prix terrassement jardin Rhône', 'création jardin étapes'],
    content: `
<blockquote class="bg-[#F7F5F0] rounded-xl p-4 my-4 border-l-4 border-[#80BC00] text-[#2F2F2F]">
  <p><strong>À retenir :</strong> Le terrassement est l'étape fondatrice de tout projet de création de jardin ou d'aménagement extérieur. Un terrassement mal exécuté compromet la solidité des terrasses, le drainage du jardin et la longévité des plantations. Voici le guide complet de LM Espace Vert.</p>
</blockquote>

<h2>Qu'est-ce que le terrassement de jardin ?</h2>
<p>Le terrassement désigne l'ensemble des opérations de déplacement et de mise en forme des terres pour préparer un site à recevoir un aménagement : terrasse, allée, pelouse, massifs, bassin. Il peut s'agir de décaisser (enlever de la terre), de remblayer (apporter de la terre), ou de mettre à niveau (égaliser).</p>

<p>Dans la région lyonnaise, le terrassement est rendu complexe par plusieurs facteurs : sols argileux lourds, jardins souvent en pente (coteaux des Monts d'Or, bords de Saône), nappe phréatique parfois haute. LM Espace Vert réalise ces travaux dans tout le nord-ouest lyonnais : <a href="/secteur/saint-didier">Saint-Didier-au-Mont-d'Or</a>, <a href="/secteur/caluire">Caluire</a>, <a href="/secteur/dardilly">Dardilly</a> et communes voisines.</p>

<h2>Étape 1 : Étude du sol et bornage</h2>
<p>Avant tout terrassement, une analyse du sol s'impose. Dans le nord lyonnais, on rencontre fréquemment :</p>
<ul>
  <li><strong>Sols argileux</strong> : instables selon l'humidité, nécessitent un drainage préalable</li>
  <li><strong>Présence de cailloux calcaires</strong> (Monts d'Or) : complique le travail mécanisé</li>
  <li><strong>Couche de terre végétale fine</strong> (20–40 cm) : à conserver précieusement car difficile à remplacer</li>
  <li><strong>Nappe perchée</strong> : à détecter avant de créer une cave ou un sous-sol aménagé</li>
</ul>

<h2>Étape 2 : Décapage de la terre végétale</h2>
<p>La première opération consiste à <strong>décaper et stocker la terre végétale</strong> (horizon A, 20–40 cm). Cette terre précieuse, riche en micro-organismes, sera réutilisée lors de la finition. Elle ne doit pas être mélangée avec les terres de sous-sol argileuses ou calcaires.</p>

<h2>Étape 3 : Terrassement manuel vs mécanisé</h2>
<p>Le choix entre terrassement manuel et mécanisé dépend principalement de l'accessibilité du chantier :</p>
<ul>
  <li><strong>Terrassement mécanisé (mini-pelle, tractopelle)</strong> : rapide et économique pour les terrains accessibles. Le matériel peut entrer dans les jardins de plus de 2 m de large. Prix : 40–80 €/h selon le matériel</li>
  <li><strong>Terrassement manuel</strong> : indispensable pour les jardins inaccessibles en machine (derrière une maison, escalier). Beaucoup plus coûteux en main-d'œuvre. Prix : 150–300 €/m³ excavé</li>
  <li><strong>Mini-pelle télécommandée</strong> : solution intermédiaire pour les accès étroits (à partir de 80 cm de largeur)</li>
</ul>

<h2>Étape 4 : Évacuation des terres excédentaires</h2>
<p>Les terres excavées doivent être évacuées en déchetterie professionnelle ou valorisées sur place (remblais, talus paysagers). À Lyon, l'évacuation coûte entre 100 et 150 €/tonne (benne + transport + dépôt). Pour 10 m³ de terre, comptez 1 à 2 bennes selon la densité.</p>

<h2>Étape 5 : Sous-couche et drainage</h2>
<p>Selon l'aménagement prévu, une sous-couche spécifique est nécessaire :</p>
<ul>
  <li><strong>Terrasse en dalle ou pavés</strong> : grave compactée (0/31.5) sur 15–20 cm, puis sable de pose sur 3–5 cm</li>
  <li><strong>Pelouse ou plantation</strong> : vérification du drainage, pose de drains si nécessaire, retour de la terre végétale stockée</li>
  <li><strong>Allée en gravier stabilisé</strong> : géotextile anti-repousse, puis gravier 8/16 sur 8–10 cm</li>
</ul>

<div class="overflow-x-auto my-6"><table class="w-full text-sm border-collapse">
<thead><tr style="background-color:#80BC00" class="text-white"><th class="p-2 text-left">Type de travaux</th><th class="p-2 text-left">Prix indicatif à Lyon</th><th class="p-2 text-left">Délai type</th><th class="p-2 text-left">Remarque</th></tr></thead>
<tbody>
<tr class="border-b"><td class="p-2">Décapage terre végétale</td><td class="p-2">8–15 €/m²</td><td class="p-2">1/2 journée</td><td class="p-2">Selon profondeur</td></tr>
<tr class="border-b bg-[#F7F5F0]"><td class="p-2">Terrassement mécanisé</td><td class="p-2">15–30 €/m³</td><td class="p-2">1–2 jours</td><td class="p-2">Accessible engin</td></tr>
<tr class="border-b"><td class="p-2">Terrassement manuel</td><td class="p-2">150–300 €/m³</td><td class="p-2">Variable</td><td class="p-2">Inaccessible engin</td></tr>
<tr class="border-b bg-[#F7F5F0]"><td class="p-2">Évacuation terres (benne)</td><td class="p-2">100–150 €/tonne</td><td class="p-2">1 journée</td><td class="p-2">Transport inclus</td></tr>
<tr class="border-b"><td class="p-2">Sous-couche grave + nivellement</td><td class="p-2">20–40 €/m²</td><td class="p-2">1 journée</td><td class="p-2">Selon finition</td></tr>
</tbody>
</table></div>

<h2>Étape 6 : Finitions et contrôle</h2>
<p>La dernière étape consiste à vérifier les niveaux, les pentes d'évacuation des eaux (minimum 2% vers l'extérieur pour les terrasses), et à préparer le chantier pour l'étape suivante (maçonnerie, plantation, engazonnement). Nos équipes utilisent des niveaux laser pour garantir des surfaces parfaitement planes.</p>

<h2>Confier votre terrassement à LM Espace Vert</h2>
<p>LM Espace Vert réalise tous les travaux de terrassement dans le nord-ouest lyonnais, de la préparation d'une simple terrasse à la création complète d'un jardin. Consultez notre service de <a href="/services/creation-jardins">création de jardins paysagers</a> et <a href="/services/maconnerie-paysagere">maçonnerie paysagère</a>. <a href="/devis">Demandez un devis gratuit</a> — nous nous déplaçons sans engagement.</p>

<details class="my-4 border border-[#80BC00] rounded-lg overflow-hidden">
  <summary class="bg-[#F7F5F0] p-3 cursor-pointer font-semibold">Faut-il un permis de construire pour un terrassement de jardin à Lyon ?</summary>
  <div class="p-4"><p>En général, non — un simple terrassement de jardin ne requiert pas de permis de construire dans les communes lyonnaises. Cependant, si le terrassement modifie le relief de plus de 2 m de hauteur ou s'il est situé en zone protégée (ABF — Architectes des Bâtiments de France), une déclaration préalable peut être exigée. Renseignez-vous auprès de votre mairie. LM Espace Vert vous accompagne dans ces démarches si nécessaire.</p></div>
</details>

<details class="my-4 border border-[#80BC00] rounded-lg overflow-hidden">
  <summary class="bg-[#F7F5F0] p-3 cursor-pointer font-semibold">Quelle est la meilleure saison pour terasser un jardin à Lyon ?</summary>
  <div class="p-4"><p>Le printemps (mars-mai) et l'automne (septembre-novembre) sont les meilleures périodes pour les travaux de terrassement dans le Rhône. En été, les sols argileux se durcissent comme du béton et sont très difficiles à travailler. En hiver (décembre-février), le risque de gel rend les finitions délicates. Planifiez vos travaux hors périodes extrêmes pour de meilleurs résultats.</p></div>
</details>
    `.trim(),
  },

  {
    slug: 'paysagiste-neuville-sur-saone',
    category: 'Zones',
    title: 'Paysagiste Neuville-sur-Saône : LM Espace Vert à votre service',
    excerpt: "LM Espace Vert intervient à Neuville-sur-Saône pour la création et l'entretien de jardins. Spécificités des jardins en bord de Saône et en pente, services proposés et témoignage client.",
    date: '2026-05-08',
    readingTime: '5 min',
    author: 'Léo Maurice',
    image: "/images/scraped/Création d’espaces extérieurs paysagers près de Limonest.jpeg",
    keywords: ['paysagiste Neuville-sur-Saône', 'jardin Neuville Saône', 'entretien jardin Neuville 69'],
    content: `
<blockquote class="bg-[#F7F5F0] rounded-xl p-4 my-4 border-l-4 border-[#80BC00] text-[#2F2F2F]">
  <p>"LM Espace Vert est votre paysagiste local à Neuville-sur-Saône — une équipe qui connaît les spécificités de la commune, ses jardins en bord de Saône, ses coteaux et les contraintes particulières liées à la proximité du fleuve."</p>
</blockquote>

<h2>Neuville-sur-Saône : une commune aux jardins d'exception</h2>
<p>Neuville-sur-Saône, chef-lieu du canton sur les rives de la Saône, possède des jardins très caractéristiques. La commune se divise en deux entités bien distinctes : les jardins des maisons de bord de Saône, souvent exposés à l'humidité et aux crues, et les jardins des quartiers perchés sur les coteaux, avec des pentes parfois importantes et une exposition plus sèche. LM Espace Vert maîtrise ces deux configurations pour des interventions précises et adaptées.</p>

<h2>Les spécificités des jardins de Neuville-sur-Saône</h2>

<h3>Les jardins en bord de Saône</h3>
<p>Les propriétés situées à proximité immédiate de la Saône présentent des contraintes spécifiques :</p>
<ul>
  <li><strong>Sol alluvionnaire</strong> : riche mais parfois engorgé en eau lors des crues hivernales</li>
  <li><strong>Risque d'inondation occasionnel</strong> : certaines zones sont en zone inondable — nous adaptons les plantations en conséquence (espèces tolérantes aux excès d'eau temporaires)</li>
  <li><strong>Humidité élevée</strong> : favorable aux mousses et aux maladies fongiques — une aération correcte des massifs est indispensable</li>
  <li><strong>Microclimat doux</strong> : la Saône tempère les températures et permet de cultiver des espèces moins rustiques</li>
</ul>

<h3>Les jardins en pente sur les coteaux</h3>
<p>Les quartiers perchés de Neuville offrent de belles vues sur la vallée mais posent des défis techniques :</p>
<ul>
  <li><strong>Risque d'érosion</strong> : les fortes pluies lyonnaises peuvent éroder les talus non végétalisés ou non maintenus</li>
  <li><strong>Maçonnerie de soutènement</strong> : murets en pierre sèche ou en gabions pour structurer les différents niveaux</li>
  <li><strong>Accès difficile</strong> : certains jardins en pente nécessitent un travail manuel — LM Espace Vert est équipé pour ces configurations</li>
  <li><strong>Exposition sud ou est</strong> : ces jardins bénéficient d'un excellent ensoleillement, favorable aux plantes méditerranéennes</li>
</ul>

<h2>Nos services à Neuville-sur-Saône</h2>
<p>LM Espace Vert propose à Neuville-sur-Saône l'ensemble de ses prestations :</p>
<ul>
  <li><a href="/services/entretien-espaces-verts">Entretien régulier</a> : tonte, taille des haies, désherbage, ramassage de feuilles</li>
  <li><a href="/services/creation-jardins">Création de jardins</a> : conception, terrassement, plantation, engazonnement</li>
  <li><a href="/services/maconnerie-paysagere">Maçonnerie paysagère</a> : terrasses, allées, murets de soutènement, escaliers de jardin</li>
  <li><a href="/services/elagage-abattage">Élagage et abattage</a> : arbres de bord de Saône, peupliers, saules — nous intervenons en sécurité</li>
  <li><a href="/services/arrosage-automatique">Arrosage automatique</a> : systèmes enterrés avec programmateur connecté</li>
</ul>

<div class="overflow-x-auto my-6"><table class="w-full text-sm border-collapse">
<thead><tr style="background-color:#80BC00" class="text-white"><th class="p-2 text-left">Prestation</th><th class="p-2 text-left">Fréquence</th><th class="p-2 text-left">Prix indicatif</th></tr></thead>
<tbody>
<tr class="border-b"><td class="p-2">Tonte pelouse (200 m²)</td><td class="p-2">Bimensuelle en saison</td><td class="p-2">À partir de 60 €</td></tr>
<tr class="border-b bg-[#F7F5F0]"><td class="p-2">Taille haie (10 ml)</td><td class="p-2">2–3×/an</td><td class="p-2">À partir de 80 €</td></tr>
<tr class="border-b"><td class="p-2">Entretien annuel complet</td><td class="p-2">Contrat annuel</td><td class="p-2">Sur devis</td></tr>
<tr class="border-b bg-[#F7F5F0]"><td class="p-2">Création jardin complet</td><td class="p-2">Unique</td><td class="p-2">Sur devis</td></tr>
</tbody>
</table></div>

<h2>Témoignage client à Neuville-sur-Saône</h2>
<p><em>"Nous avons confié à LM Espace Vert la rénovation complète de notre jardin en pente à Neuville. L'équipe a créé deux terrasses reliées par un escalier en pierre, planté une haie de lauriers pour nous isoler de la rue et installé un système d'arrosage automatique. Le résultat dépasse nos attentes — un vrai jardin paysager sur un terrain que nous pensions impossible à aménager."</em><br>— Famille B., propriétaires à Neuville-sur-Saône</p>

<h2>Votre devis gratuit à Neuville-sur-Saône</h2>
<p>LM Espace Vert se déplace sans engagement à Neuville-sur-Saône pour évaluer votre projet. Appelez-nous au <strong>06 72 58 73 53</strong> ou <a href="/devis">demandez un devis en ligne</a>. Notre base à Saint-Didier-au-Mont-d'Or est à 10 minutes de Neuville — nous assurons des délais d'intervention rapides.</p>

<details class="my-4 border border-[#80BC00] rounded-lg overflow-hidden">
  <summary class="bg-[#F7F5F0] p-3 cursor-pointer font-semibold">LM Espace Vert intervient-il régulièrement à Neuville-sur-Saône ?</summary>
  <div class="p-4"><p>Oui. Neuville-sur-Saône fait partie de notre zone d'intervention principale. Nous y réalisons des interventions d'entretien régulier et des chantiers de création plusieurs fois par semaine. La distance de 10 km depuis notre base de Saint-Didier-au-Mont-d'Or permet des délais d'intervention très rapides.</p></div>
</details>

<details class="my-4 border border-[#80BC00] rounded-lg overflow-hidden">
  <summary class="bg-[#F7F5F0] p-3 cursor-pointer font-semibold">Quelles plantes recommandez-vous pour un jardin en bord de Saône ?</summary>
  <div class="p-4"><p>Pour les jardins proches de la Saône, nous recommandons des espèces tolérantes aux sols humides : saules pleureurs, aulnes, ligulaires, phragmites décoratifs, iris des marais. Pour les zones hors inondation, les vivaces classiques conviennent très bien. Évitez les plantes méditerranéennes (lavande, cistus) qui détestent les sols engorgés.</p></div>
</details>
    `.trim(),
  },

  {
    slug: 'paysagiste-francheville',
    category: 'Zones',
    title: 'Paysagiste Francheville : création et entretien de jardins',
    excerpt: "Paysagiste à Francheville (69340) : LM Espace Vert intervient pour la création et l'entretien de jardins dans cette commune résidentielle de l'ouest lyonnais. Grands jardins, haies, terrasses.",
    date: '2026-05-05',
    readingTime: '5 min',
    author: 'Léo Maurice',
    image: "/images/scraped/Matériel utilisé pour l’élagage près de Limonest.webp",
    keywords: ['paysagiste Francheville', 'jardin Francheville 69340', 'entretien jardin Francheville', 'création jardin ouest Lyon'],
    content: `
<blockquote class="bg-[#F7F5F0] rounded-xl p-4 my-4 border-l-4 border-[#80BC00] text-[#2F2F2F]">
  <p><strong>Francheville</strong> (69340) est une commune résidentielle de l'ouest lyonnais reconnue pour ses quartiers pavillonnaires et ses grandes propriétés avec jardins. LM Espace Vert y intervient régulièrement pour des projets de création et d'entretien de jardins.</p>
</blockquote>

<h2>Francheville : une commune où le jardin est une priorité</h2>
<p>Avec une population de plus de 14 000 habitants, Francheville est l'une des communes les plus verdoyantes de la première couronne lyonnaise. Ses quartiers (Le Pérollier, Charbonnières-les-Bains limitrophe, Le Bourg) regroupent de nombreuses propriétés avec jardins de taille importante — un terrain de jeu idéal pour les paysagistes.</p>

<h2>Les spécificités des jardins de Francheville</h2>

<h3>De grands jardins pavillonnaires</h3>
<p>Contrairement à Lyon intra-muros, les propriétés de Francheville disposent souvent de jardins de 300 à plus de 1 000 m². Cette surface permet des projets ambitieux : grande pelouse, potager, terrasse, haies de clôture, verger... Ces jardins méritent une conception réfléchie pour concilier esthétisme et facilité d'entretien.</p>

<h3>Sols et exposition</h3>
<p>Les sols de Francheville sont principalement argilo-limoneux, avec une bonne fertilité naturelle mais un drainage parfois insuffisant. L'exposition varie fortement selon les quartiers : les zones basses (bords du Charbonnières) sont plus fraîches et ombragées, les hauteurs (Le Pérollier) bénéficient d'un excellent ensoleillement.</p>

<h3>Des haies et des clôtures végétales</h3>
<p>Dans les quartiers pavillonnaires de Francheville, la haie de clôture est omniprésente. LM Espace Vert entretient et renouvelle régulièrement les haies de lauriers, de thuyas, de photinias dans toute la commune.</p>

<h2>Nos services à Francheville</h2>
<ul>
  <li><strong>Entretien annuel</strong> : contrats sur mesure incluant tonte, taille de haies, désherbage et soins saisonniers</li>
  <li><strong>Création de jardins</strong> : du plan de composition à la plantation finale, en passant par le terrassement et la maçonnerie</li>
  <li><strong>Rénovation de jardins existants</strong> : replantation, réorganisation, modernisation des aménagements vieillissants</li>
  <li><strong>Arrosage automatique</strong> : indispensable pour les grandes surfaces lyonnaises en été</li>
  <li><strong>Élagage et abattage</strong> : arbres matures et forestiers fréquents dans les propriétés franchévilardes</li>
</ul>

<h2>Pourquoi choisir LM Espace Vert à Francheville ?</h2>
<p>LM Espace Vert est basé à Saint-Didier-au-Mont-d'Or, à 15 minutes de Francheville. Nous connaissons les spécificités de l'ouest lyonnais : les sols, le microclimat, les essences adaptées et les attentes des propriétaires de la région. Nos équipes interviennent avec du matériel professionnel, et nous proposons des <a href="/services/entretien-espaces-verts">contrats d'entretien</a> flexibles adaptés à votre emploi du temps.</p>

<div class="overflow-x-auto my-6"><table class="w-full text-sm border-collapse">
<thead><tr style="background-color:#80BC00" class="text-white"><th class="p-2 text-left">Service</th><th class="p-2 text-left">Détails</th><th class="p-2 text-left">Délai devis</th></tr></thead>
<tbody>
<tr class="border-b"><td class="p-2">Entretien jardin</td><td class="p-2">Contrat hebdomadaire, bimensuel ou mensuel</td><td class="p-2">48h</td></tr>
<tr class="border-b bg-[#F7F5F0]"><td class="p-2">Création jardin</td><td class="p-2">Visite + plan + devis détaillé</td><td class="p-2">1 semaine</td></tr>
<tr class="border-b"><td class="p-2">Taille de haie</td><td class="p-2">Intervention ponctuelle ou contrat</td><td class="p-2">48h</td></tr>
<tr class="border-b bg-[#F7F5F0]"><td class="p-2">Élagage</td><td class="p-2">Visite obligatoire avant devis</td><td class="p-2">3–5 jours</td></tr>
</tbody>
</table></div>

<h2>Contactez LM Espace Vert à Francheville</h2>
<p>Vous êtes propriétaire à Francheville et souhaitez valoriser votre jardin ? LM Espace Vert est à votre disposition. Appelez le <strong>06 72 58 73 53</strong> ou <a href="/devis">demandez un devis gratuit en ligne</a>. Nous nous déplaçons dans toute la commune sans engagement pour évaluer votre projet et vous proposer une solution adaptée à votre budget et à vos envies.</p>

<details class="my-4 border border-[#80BC00] rounded-lg overflow-hidden">
  <summary class="bg-[#F7F5F0] p-3 cursor-pointer font-semibold">LM Espace Vert peut-il gérer entièrement mon jardin à Francheville ?</summary>
  <div class="p-4"><p>Absolument. Nous proposons des contrats d'entretien complets qui couvrent toutes les interventions annuelles : tonte bimensuelle, taille des haies 2–3 fois/an, désherbage des massifs, ramassage des feuilles, scarification et regarnissage de la pelouse. Un interlocuteur unique, les mêmes équipes qui connaissent votre jardin — c'est notre engagement.</p></div>
</details>

<details class="my-4 border border-[#80BC00] rounded-lg overflow-hidden">
  <summary class="bg-[#F7F5F0] p-3 cursor-pointer font-semibold">Quel budget prévoir pour créer un jardin à Francheville ?</summary>
  <div class="p-4"><p>Pour une création de jardin complète à Francheville (terrassement, allées, massifs, pelouse, arrosage), il faut généralement compter entre 80 et 200 €/m² selon la complexité et les matériaux choisis. Un jardin de 300 m² représente donc un budget de 24 000 à 60 000 €. Nous proposons des solutions adaptées à tous les budgets, et un devis détaillé et transparent après visite gratuite.</p></div>
</details>
    `.trim(),
  },

  {
    slug: 'desherbage-naturel-jardin-lyon',
    category: 'Conseils',
    title: 'Désherbage naturel sans pesticides à Lyon : 7 méthodes efficaces',
    excerpt: 'Paillage, binette, vinaigre blanc, bicarbonate, eau bouillante, désherbage thermique... Comparatif des méthodes de désherbage naturel pour les jardins lyonnais, sans recours aux herbicides.',
    date: '2026-04-10',
    readingTime: '6 min',
    author: 'Léo Maurice',
    image: "/images/scraped/allotravaux-01.jpg",
    keywords: ['désherbage naturel Lyon', 'désherbage sans pesticides', 'mauvaises herbes jardin Lyon', 'écologie jardin Rhône'],
    content: `
<blockquote class="bg-[#F7F5F0] rounded-xl p-4 my-4 border-l-4 border-[#80BC00] text-[#2F2F2F]">
  <p><strong>À retenir :</strong> Le glyphosate et la plupart des herbicides de synthèse sont interdits aux particuliers depuis 2019 en France. LM Espace Vert n'en utilise pas non plus dans ses interventions professionnelles. Voici notre guide complet des alternatives naturelles pour un désherbage efficace et respectueux de l'environnement.</p>
</blockquote>

<h2>Pourquoi désherber naturellement à Lyon ?</h2>
<p>Dans la région lyonnaise, les mauvaises herbes peuvent être envahissantes : le pissenlit, le plantain, le liseron et le chiendent s'installent rapidement dans les massifs et les allées. La tentation d'utiliser un herbicide chimique est grande, mais les alternatives naturelles, bien appliquées, sont tout aussi efficaces pour les jardins de Saint-Didier-au-Mont-d'Or, <a href="/secteur/caluire">Caluire</a>, <a href="/secteur/dardilly">Dardilly</a> et communes voisines.</p>

<h2>Méthode 1 : Le paillage préventif (la plus efficace)</h2>
<p>Le paillage est de loin la méthode la plus efficace et la plus durable. En couvrant le sol de 8 à 10 cm de matière organique (BRF, copeaux, paille), vous privez les graines de mauvaises herbes de la lumière nécessaire à leur germination. Résultat : 80 à 90% de réduction du désherbage. Renouvelez le paillage une fois par an.</p>

<h2>Méthode 2 : La binette et le sarcloir</h2>
<p>Pour les massifs non paillés, la binette reste l'outil numéro 1. Le principe : travailler superficiellement (2–3 cm de profondeur) pour couper les racines des adventices au niveau du collet. <strong>Le bon moment</strong> : par temps sec, le matin. Les plantes déracinées sèchent rapidement au soleil. "Bine le matin pour le lendemain" — l'adage du jardinier reste valable. Évitez de retourner le sol en profondeur : cela ramène en surface des graines enfouies.</p>

<h2>Méthode 3 : L'eau bouillante</h2>
<p>L'eau à ébullition est une arme redoutable contre les herbes des allées et des jointures de dallage. Versée directement sur les plantes, elle détruit les cellules végétales instantanément. Simple, gratuit, immédiatement efficace. Inconvénients : action localisée, nécessite de répéter l'opération, et risque de brûlure pour le jardinier.</p>

<h2>Méthode 4 : Le vinaigre blanc concentré</h2>
<p>Le vinaigre blanc à 20° de concentration (disponible en grandes surfaces ou en jardineries), additionné de savon noir (agent mouillant) pour améliorer l'adhérence, est efficace sur les jeunes pousses d'adventices. Pulvérisez par temps ensoleillé et sans vent. <strong>Attention</strong> : le vinaigre acidifie légèrement le sol — à ne pas utiliser massivement ni à répéter trop souvent sur les mêmes zones, surtout sur les sols déjà acides.</p>

<h2>Méthode 5 : Le bicarbonate de soude</h2>
<p>Le bicarbonate de soude (500 g dans 5 litres d'eau) perturbe le fonctionnement cellulaire des plantes en modifiant leur osmose. Efficace sur les herbes annuelles dans les jointures des terrasses. Moins agressif que le vinaigre. À répéter après les pluies.</p>

<h2>Méthode 6 : Le désherbage thermique (flamme ou vapeur)</h2>
<p>Le désherbage thermique utilise la chaleur pour détruire les mauvaises herbes :</p>
<ul>
  <li><strong>Désherbeur à flamme</strong> (gaz) : efficace, rapide, adapté aux grandes surfaces d'allées. Attention au risque d'incendie en période sèche — jamais sur paillage végétal</li>
  <li><strong>Désherbeur à vapeur</strong> : plus sûr, pas de risque d'incendie, efficace même en sous-paillage. Plus lent mais sans danger</li>
  <li><strong>Principe</strong> : on ne brûle pas la plante, on détruit ses cellules. Un passage de 2–3 secondes suffit</li>
</ul>

<h2>Méthode 7 : Le géotextile (anti-repousse)</h2>
<p>Pour les nouvelles plantations, le feutre de paysagiste installé sous le paillage forme une barrière physique quasi-infranchissable pour les mauvaises herbes. Percez-le à l'emplacement de chaque plant. Durée de vie : 10–15 ans. À coupler avec un paillage esthétique par-dessus (copeaux, graviers).</p>

<div class="overflow-x-auto my-6"><table class="w-full text-sm border-collapse">
<thead><tr style="background-color:#80BC00" class="text-white"><th class="p-2 text-left">Méthode</th><th class="p-2 text-left">Efficacité</th><th class="p-2 text-left">Coût</th><th class="p-2 text-left">Meilleur usage</th></tr></thead>
<tbody>
<tr class="border-b"><td class="p-2">Paillage</td><td class="p-2">Très haute</td><td class="p-2">Moyen</td><td class="p-2">Massifs, sous arbustes</td></tr>
<tr class="border-b bg-[#F7F5F0]"><td class="p-2">Binette</td><td class="p-2">Haute</td><td class="p-2">Faible</td><td class="p-2">Massifs, potager</td></tr>
<tr class="border-b"><td class="p-2">Eau bouillante</td><td class="p-2">Haute (choc)</td><td class="p-2">Très faible</td><td class="p-2">Allées, dallage</td></tr>
<tr class="border-b bg-[#F7F5F0]"><td class="p-2">Vinaigre blanc</td><td class="p-2">Moyenne</td><td class="p-2">Faible</td><td class="p-2">Jeunes pousses, joints</td></tr>
<tr class="border-b"><td class="p-2">Thermique flamme</td><td class="p-2">Haute</td><td class="p-2">Moyen</td><td class="p-2">Grandes allées</td></tr>
<tr class="border-b bg-[#F7F5F0]"><td class="p-2">Géotextile</td><td class="p-2">Très haute</td><td class="p-2">Moyen</td><td class="p-2">Nouvelles plantations</td></tr>
</tbody>
</table></div>

<h2>LM Espace Vert : désherbage 100% naturel</h2>
<p>LM Espace Vert s'engage à n'utiliser aucun herbicide chimique dans ses interventions. Notre équipe combine paillage, désherbage mécanique et thermique pour des résultats durables dans le respect de votre santé et de l'environnement. <a href="/services/entretien-espaces-verts">Découvrez nos services d'entretien</a> ou <a href="/devis">demandez un devis gratuit</a>.</p>

<details class="my-4 border border-[#80BC00] rounded-lg overflow-hidden">
  <summary class="bg-[#F7F5F0] p-3 cursor-pointer font-semibold">Le vinaigre blanc détruit-il les mauvaises herbes en profondeur à Lyon ?</summary>
  <div class="p-4"><p>Le vinaigre blanc agit sur les parties aériennes de la plante et peut tuer les racines superficielles des herbes annuelles. En revanche, les plantes vivaces à racines profondes (liseron, chiendent, pissenlit) repoussent à partir de leurs racines non atteintes. Pour ces espèces tenaces, la combinaison binette + arrachage manuel + paillage est plus efficace sur le long terme.</p></div>
</details>

<details class="my-4 border border-[#80BC00] rounded-lg overflow-hidden">
  <summary class="bg-[#F7F5F0] p-3 cursor-pointer font-semibold">Comment désherber naturellement entre les dalles de ma terrasse lyonnaise ?</summary>
  <div class="p-4"><p>Pour les joints de terrasse, nous recommandons la combinaison eau bouillante + vinaigre blanc (pour les plantes récalcitrantes) + jointement à la résine de scellement pour éviter toute repousse future. Si les joints sont importants, un rejointement au mortier de chaux fin ou à la résine époxy élimine définitivement le problème.</p></div>
</details>
    `.trim(),
  },

  {
    slug: 'plantation-arbres-fruitiers-lyon',
    category: 'Conseils',
    title: 'Planter des arbres fruitiers à Lyon : espèces adaptées et conseils',
    excerpt: 'Pommiers, poiriers, cerisiers, pêchers adaptés au climat lyonnais : espèces recommandées, exposition, préparation du sol, taille de formation et protection contre le gel tardif.',
    date: '2026-04-05',
    readingTime: '7 min',
    author: 'Léo Maurice',
    image: "/images/scraped/allotravaux-02.jpg",
    keywords: ['arbres fruitiers Lyon', 'planter pommier Lyon', 'verger jardin lyonnais', 'fruitiers nord Rhône'],
    content: `
<blockquote class="bg-[#F7F5F0] rounded-xl p-4 my-4 border-l-4 border-[#80BC00] text-[#2F2F2F]">
  <p><strong>À retenir :</strong> La région lyonnaise est favorable à la plupart des arbres fruitiers des zones tempérées. Le climat semi-continental (hivers froids, étés chauds) convient bien aux pommiers, poiriers et cerisiers. Les pêchers et les abricotiers demandent une exposition protégée du gel printanier. Voici notre guide de sélection et de plantation.</p>
</blockquote>

<h2>Le climat lyonnais et les arbres fruitiers</h2>
<p>Lyon bénéficie d'un excellent climat pour la culture fruitière : les hivers froids permettent la vernalisation (repos hivernal indispensable aux fruitiers), les printemps doux favorisent la floraison et la pollinisation, et les étés chauds assurent une bonne maturation des fruits. Le principal risque est le <strong>gel tardif de printemps</strong> (gelées en mars-avril), qui peut brûler les fleurs des espèces à floraison précoce comme le pêcher et l'abricotier.</p>

<h2>Les fruitiers incontournables pour le jardin lyonnais</h2>

<h3>Le pommier (Malus domestica)</h3>
<p>Le pommier est l'arbre fruitier le plus adapté à la région lyonnaise. Rustique (résiste à -25°C), il s'accommode de tous les types de sols (y compris argileux) et fleurit assez tard pour éviter les gelées. <strong>Variétés recommandées pour Lyon</strong> : Chantecler (tardive, excellente conservation), Reine des Reinettes (mi-saison, très aromatique), Goldrush (tardive, résistante aux maladies). Évitez les variétés très précoces (Gala) dans les zones froides du nord lyonnais.</p>

<h3>Le poirier (Pyrus communis)</h3>
<p>Le poirier demande un sol profond et un peu plus de chaleur que le pommier. Il convient bien aux expositions sud et sud-est sur les coteaux lyonnais. <strong>Variétés recommandées</strong> : Williams Bon Chrétien (août), Conférence (septembre, très productive), Beurré Hardy (septembre-octobre, rustique). Le poirier est autofertile mais donne de meilleurs résultats avec un pollinisateur de la même période.</p>

<h3>Le cerisier (Prunus avium)</h3>
<p>Le cerisier est magnifique au jardin et bien adapté aux sols calcaires du nord lyonnais. <strong>Variétés recommandées</strong> : Burlat (très précoce, fin mai), Reverchon (mi-saison, résistante aux maladies), Stella (autofertile — très pratique pour les petits jardins). Le gros problème du cerisier à Lyon : les oiseaux, et la mouche de la cerise. Utilisez des filets de protection si vous voulez profiter de la récolte.</p>

<h3>Le pêcher (Prunus persica)</h3>
<p>Le pêcher est possible à Lyon mais demande une exposition abritée (mur exposé au sud, espace protégé du vent de nord-est). Sa floraison très précoce (début mars) le rend vulnérable aux gelées tardives. <strong>Variétés recommandées</strong> : Redhaven (mi-saison), Dixired (précoce mais tolérante), pêches de vigne (plus rustiques). La cloque (maladie fongique) est à surveiller — un traitement préventif à la bouillie bordelaise avant le débourrement est indispensable à Lyon.</p>

<h2>Exposition et préparation du sol</h2>
<p>Pour tous les fruitiers, voici les règles de base dans la région lyonnaise :</p>
<ul>
  <li><strong>Exposition</strong> : plein soleil obligatoire (minimum 6h/jour). Orientez vos plantations au sud, sud-est ou est</li>
  <li><strong>Sol</strong> : profond (50 cm minimum), bien drainé. Amendez les sols argileux avec du sable grossier et du compost</li>
  <li><strong>Espacement</strong> : selon le porte-greffe choisi — demandez conseil à votre pépiniériste lyonnais</li>
  <li><strong>Période de plantation</strong> : novembre à mars (hors gel), de préférence en novembre dans le Rhône</li>
</ul>

<div class="overflow-x-auto my-6"><table class="w-full text-sm border-collapse">
<thead><tr style="background-color:#80BC00" class="text-white"><th class="p-2 text-left">Espèce</th><th class="p-2 text-left">Rusticité</th><th class="p-2 text-left">Risque gel tardif</th><th class="p-2 text-left">Sol préféré</th><th class="p-2 text-left">Difficulté</th></tr></thead>
<tbody>
<tr class="border-b"><td class="p-2">Pommier</td><td class="p-2">–25°C</td><td class="p-2">Faible</td><td class="p-2">Tous types</td><td class="p-2">Facile</td></tr>
<tr class="border-b bg-[#F7F5F0]"><td class="p-2">Poirier</td><td class="p-2">–20°C</td><td class="p-2">Moyen</td><td class="p-2">Profond, bien drainé</td><td class="p-2">Moyen</td></tr>
<tr class="border-b"><td class="p-2">Cerisier</td><td class="p-2">–25°C</td><td class="p-2">Moyen</td><td class="p-2">Calcaire bien drainé</td><td class="p-2">Facile</td></tr>
<tr class="border-b bg-[#F7F5F0]"><td class="p-2">Pêcher</td><td class="p-2">–15°C</td><td class="p-2">Élevé</td><td class="p-2">Léger, bien drainé</td><td class="p-2">Difficile</td></tr>
<tr class="border-b"><td class="p-2">Prunier</td><td class="p-2">–25°C</td><td class="p-2">Faible</td><td class="p-2">Argileux toléré</td><td class="p-2">Facile</td></tr>
</tbody>
</table></div>

<h2>La taille de formation des jeunes fruitiers</h2>
<p>La taille de formation (les 3–5 premières années) conditionne la structure et la production de votre arbre pour toute sa vie. Les principales formes adaptées aux jardins lyonnais :</p>
<ul>
  <li><strong>Gobelet</strong> (pommier, cerisier) : 3–5 charpentières, centre aéré, facile à entretenir et à récolter</li>
  <li><strong>Fuseau</strong> (pommier sur porte-greffe nain) : arbre compact, idéal pour les petits jardins</li>
  <li><strong>Palmette</strong> (poirier, pêcher sur mur) : contre-espalier, optimise l'exposition au soleil et protège du gel</li>
</ul>

<p>La taille de formation des fruitiers est une opération délicate — LM Espace Vert peut vous accompagner dans cette étape clé. Consultez notre service de <a href="/services/elagage-abattage">taille et élagage</a> ou notre <a href="/blog/taille-arbres-fruitiers-hiver">guide de taille des fruitiers en hiver</a>.</p>

<details class="my-4 border border-[#80BC00] rounded-lg overflow-hidden">
  <summary class="bg-[#F7F5F0] p-3 cursor-pointer font-semibold">Faut-il deux pommiers pour avoir des fruits à Lyon ?</summary>
  <div class="p-4"><p>La plupart des pommiers et des poiriers sont autostériles : ils ont besoin d'un autre arbre de la même espèce à floraison simultanée pour se polliniser. Plantez donc au minimum 2 variétés différentes à floraison contemporaine. Il existe des "familiers" (plusieurs variétés greffées sur le même tronc) qui résolvent ce problème pour les petits jardins. Les cerisiers Stella et les prune-ers Reine-Claude d'Oullins sont autofertiles.</p></div>
</details>

<details class="my-4 border border-[#80BC00] rounded-lg overflow-hidden">
  <summary class="bg-[#F7F5F0] p-3 cursor-pointer font-semibold">Comment protéger mes fruitiers du gel de printemps à Lyon ?</summary>
  <div class="p-4"><p>Les gelées de mars-avril sont le principal risque pour les fruitiers à Lyon. Quelques protections efficaces : voile de forçage sur les arbustes fleuris (pêcher, abricotier), chauffette à bougie sous les petits arbres les nuits de gel annoncé, paillage du pied pour protéger les racines, et choix de variétés à floraison tardive pour les zones froides (nord Rhône). L'exposition abritée (mur au sud, angle de maison) divise par deux le risque de dégâts.</p></div>
</details>
    `.trim(),
  },

  {
    slug: 'renovation-jardin-avant-apres-lyon',
    category: 'Travaux',
    title: 'Rénovation de jardin à Lyon : transformer un espace négligé en 5 étapes',
    excerpt: "Comment rénover un jardin à l'abandon à Lyon ? Diagnostic, désherbage total, amendement du sol, replantation, finitions : le guide complet de LM Espace Vert avec budget et avant/après.",
    date: '2026-03-28',
    readingTime: '7 min',
    author: 'Léo Maurice',
    image: "/images/scraped/allotravaux-03.jpg",
    keywords: ['rénovation jardin Lyon', 'rénover jardin abandonné', 'transformation jardin lyonnais', 'avant après jardin Lyon'],
    content: `
<blockquote class="bg-[#F7F5F0] rounded-xl p-4 my-4 border-l-4 border-[#80BC00] text-[#2F2F2F]">
  <p><strong>À retenir :</strong> Rénover un jardin à l'abandon est une opération qui demande méthode et patience. La tentation est souvent de replanter immédiatement — erreur fréquente. La clé du succès est de consacrer suffisamment de temps au diagnostic, au désherbage total et à la remise en état du sol avant toute plantation.</p>
</blockquote>

<h2>Pourquoi rénover un jardin à Lyon ?</h2>
<p>Dans la région lyonnaise, de nombreuses propriétés — notamment à <a href="/secteur/caluire">Caluire-et-Cuire</a>, <a href="/secteur/dardilly">Dardilly</a> ou Neuville-sur-Saône — ont des jardins qui ont été négligés pendant des années : nouvelles acquisitions immobilières, changement de propriétaire, période de travaux longue... Un jardin à l'abandon peut sembler décourageant, mais avec la bonne méthode, il peut être transformé en espace de rêve.</p>

<h2>Étape 1 : Le diagnostic complet</h2>
<p>Avant de sortir la tondeuse, prenez le temps d'observer et d'analyser :</p>
<ul>
  <li><strong>Les végétaux existants</strong> : lesquels sont à conserver ? Un vieux rosier, un arbre mature, une haie structurante peuvent devenir les piliers du nouveau jardin</li>
  <li><strong>Les mauvaises herbes dominantes</strong> : identifier les espèces (chiendent, liseron, ortie, rumex) permet de choisir la bonne technique d'éradication</li>
  <li><strong>L'état du sol</strong> : compact, dégradé, manque de matière organique ? Un sol gravement dégradé peut nécessiter un apport de terre végétale</li>
  <li><strong>Le relief et le drainage</strong> : y a-t-il des zones d'eau stagnante ? Des zones d'érosion ?</li>
  <li><strong>Les aménagements existants</strong> : terrasse, allées, murets — sont-ils récupérables ou à refaire ?</li>
</ul>

<h2>Étape 2 : Le désherbage total</h2>
<p>Pour un jardin fortement envahi, le désherbage total s'impose avant toute plantation. Plusieurs techniques :</p>
<ul>
  <li><strong>Bâchage occultant</strong> : la méthode la plus efficace et la plus écologique. Couvrez le sol d'une bâche noire ou de carton pendant 3 à 6 mois. La privation de lumière élimine 95% des mauvaises herbes, y compris les rhizomes de chiendent et de liseron. L'inconvénient : le délai</li>
  <li><strong>Désherbage thermique massif</strong> : au désherbeur à flamme ou à vapeur. Plusieurs passages nécessaires</li>
  <li><strong>Terrassement complet</strong> : dans les cas extrêmes, décaper 20 cm de sol contaminé et remplacer par de la terre végétale saine — solution radicale mais définitive</li>
</ul>

<h2>Étape 3 : Amendement et régénération du sol</h2>
<p>Un jardin longtemps négligé a souvent un sol appauvri et compacté. La régénération passe par :</p>
<ul>
  <li><strong>Décompactage</strong> à la fourche-bêche ou au motoculteur : ameublir le sol sur 30–40 cm</li>
  <li><strong>Apport de compost</strong> mûr (5–10 kg/m²) pour restaurer la vie microbienne</li>
  <li><strong>Correction du pH</strong> si nécessaire : chaux agricole pour les sols trop acides (fréquent dans les jardins lyonnais sous-fertilisés)</li>
  <li><strong>Sable grossier</strong> pour les sols très argileux (1 à 2 kg/m²)</li>
</ul>

<h2>Étape 4 : Le plan de rénovation</h2>
<p>Sur la base du diagnostic, LM Espace Vert établit un plan de rénovation qui définit :</p>
<ul>
  <li>Les zones à conserver, à transformer, à créer</li>
  <li>Le programme de replantation (arbustes, vivaces, gazon)</li>
  <li>Les travaux de maçonnerie éventuels (nouvelle terrasse, allées, murets)</li>
  <li>Le calendrier d'intervention sur 6–12 mois</li>
</ul>

<h2>Étape 5 : Replantation et finitions</h2>
<p>La replantation suit une logique de stratification : d'abord les arbres et grands arbustes structurants, puis les haies, puis les vivaces et les couvre-sols, et enfin le gazon. Chaque couche de végétation est paillée dès sa mise en place.</p>

<div class="overflow-x-auto my-6"><table class="w-full text-sm border-collapse">
<thead><tr style="background-color:#80BC00" class="text-white"><th class="p-2 text-left">Poste</th><th class="p-2 text-left">Prix indicatif (€/m²)</th><th class="p-2 text-left">Remarque</th></tr></thead>
<tbody>
<tr class="border-b"><td class="p-2">Désherbage total + bâchage</td><td class="p-2">5–15 €/m²</td><td class="p-2">Selon envahissement</td></tr>
<tr class="border-b bg-[#F7F5F0]"><td class="p-2">Amendement + décompactage sol</td><td class="p-2">8–20 €/m²</td><td class="p-2">Compost + main d'œuvre</td></tr>
<tr class="border-b"><td class="p-2">Engazonnement (semis)</td><td class="p-2">4–8 €/m²</td><td class="p-2">Fournitures incluses</td></tr>
<tr class="border-b bg-[#F7F5F0]"><td class="p-2">Plantation massifs (arbustes)</td><td class="p-2">20–50 €/m²</td><td class="p-2">Végétaux inclus</td></tr>
<tr class="border-b"><td class="p-2">Terrasse + allées</td><td class="p-2">80–200 €/m²</td><td class="p-2">Selon matériaux</td></tr>
<tr class="border-b bg-[#F7F5F0]"><td class="p-2">Budget total rénovation complète</td><td class="p-2">50–120 €/m²</td><td class="p-2">Hors maçonnerie lourde</td></tr>
</tbody>
</table></div>

<h2>Confier votre rénovation de jardin à LM Espace Vert</h2>
<p>LM Espace Vert se spécialise dans la rénovation de jardins dans le nord et l'ouest lyonnais. De l'état d'abandon à l'espace de rêve, nous gérons l'intégralité du projet. Consultez notre service de <a href="/services/creation-jardins">création et rénovation de jardins</a> ou <a href="/devis">demandez un devis gratuit</a>.</p>

<details class="my-4 border border-[#80BC00] rounded-lg overflow-hidden">
  <summary class="bg-[#F7F5F0] p-3 cursor-pointer font-semibold">Combien de temps faut-il pour rénover un jardin à Lyon ?</summary>
  <div class="p-4"><p>Une rénovation complète prend généralement de 3 à 12 mois selon l'ampleur des travaux et la technique de désherbage choisie. Le bâchage occultant (6 mois idéalement) allonge le calendrier mais garantit les meilleurs résultats. Une rénovation légère (remise à niveau + replantation) peut se faire en 1 à 3 semaines. LM Espace Vert peut établir un planning précis après visite de votre jardin.</p></div>
</details>

<details class="my-4 border border-[#80BC00] rounded-lg overflow-hidden">
  <summary class="bg-[#F7F5F0] p-3 cursor-pointer font-semibold">Faut-il enlever tout l'ancien sol d'un jardin à l'abandon ?</summary>
  <div class="p-4"><p>Rarement. Dans la plupart des cas, un bon décompactage, un amendement en compost et un désherbage soigneux permettent de régénérer le sol existant. L'apport de terre végétale neuve est réservé aux situations où le sol existant est gravement dégradé (déchets de construction, pollution, érosion complète). Nous prélevons systématiquement un échantillon de sol pour analyse avant de recommander un apport de terre.</p></div>
</details>
    `.trim(),
  },

  {
    slug: 'pergola-terrasse-bois-lyon',
    category: 'Travaux',
    title: 'Pergola et terrasse bois à Lyon : matériaux, entretien et prix',
    excerpt: 'Pergola bioclimatique, terrasse en bois exotique, composite ou pin traité : comparatif des matériaux adaptés au climat lyonnais, entretien annuel recommandé et prix de pose en 2026.',
    date: '2026-03-15',
    readingTime: '7 min',
    author: 'Léo Maurice',
    image: "/images/scraped/allotravaux-04.jpg",
    keywords: ['pergola bois Lyon', 'terrasse bois Lyon', 'prix terrasse bois Rhône', 'matériau terrasse extérieur Lyon'],
    content: `
<blockquote class="bg-[#F7F5F0] rounded-xl p-4 my-4 border-l-4 border-[#80BC00] text-[#2F2F2F]">
  <p><strong>À retenir :</strong> La terrasse et la pergola sont les aménagements extérieurs les plus demandés dans la région lyonnaise. Bien choisis et bien entretenus, ils durent 20 à 40 ans. Voici notre guide complet pour faire le bon choix de matériaux, avec les prix du marché lyonnais en 2026.</p>
</blockquote>

<h2>Pergola et terrasse : l'outdoor living à Lyon</h2>
<p>Dans les jardins du nord-ouest lyonnais — de <a href="/secteur/saint-didier">Saint-Didier-au-Mont-d'Or</a> à <a href="/secteur/dardilly">Dardilly</a> en passant par <a href="/secteur/caluire">Caluire</a> — la terrasse avec pergola est devenue l'aménagement star des années 2020. Elle prolonge l'espace de vie intérieur vers l'extérieur, offre un espace repas et détente abrité, et valorise significativement le bien immobilier.</p>

<h2>Les matériaux de terrasse adaptés au climat lyonnais</h2>

<h3>Le bois exotique (Ipé, Teck, Cumaru)</h3>
<p>Le bois exotique est le matériau premium par excellence pour les terrasses. Dense et imputrescible naturellement, il résiste aux intempéries sans traitement de fond. Le climat lyonnais (alternance de sécheresse estivale et de pluies d'hiver) convient bien à ces essences.</p>
<ul>
  <li><strong>Avantages</strong> : durabilité exceptionnelle (30–40 ans), esthétique chaleureuse, résistance aux chocs</li>
  <li><strong>Inconvénients</strong> : prix élevé (80–150 €/m² fourni posé), entretien annuel à l'huile (2–3h pour 20 m²), polémiques sur l'origine (certifiez FSC)</li>
  <li><strong>Entretien</strong> : nettoyage au printemps + application d'huile naturelle tous les 1–2 ans</li>
</ul>

<h3>Le pin traité autoclave classe IV</h3>
<p>Le pin traité est la solution économique pour les terrasses de jardin lyonnaises. Le traitement autoclave l'imprègne d'un biocide protecteur qui lui confère une résistance à la putréfaction d'environ 15–20 ans.</p>
<ul>
  <li><strong>Avantages</strong> : prix accessible (40–70 €/m² posé), disponibilité large, facilité de coupe</li>
  <li><strong>Inconvénients</strong> : durabilité inférieure aux exotiques, nécessite une lasure régulière, peut se déformer en conditions humides</li>
  <li><strong>Entretien</strong> : lasure pénétrante tous les 2–3 ans</li>
</ul>

<h3>Le bois composite (lame composite)</h3>
<p>Le composite (mélange de fibres de bois et de plastique recyclé) connaît un succès croissant dans les jardins lyonnais. Il imite le bois naturel mais ne nécessite quasiment aucun entretien.</p>
<ul>
  <li><strong>Avantages</strong> : entretien minimal (nettoyage annuel seul), teinte stable, résistance aux UV et à l'humidité, antidérapant, matière recyclée</li>
  <li><strong>Inconvénients</strong> : aspect moins naturel que le bois vrai, peut chauffer par fortes chaleurs estivales, prix moyen-élevé (60–100 €/m² posé)</li>
  <li><strong>Entretien</strong> : nettoyage au karcher doux une fois par an</li>
</ul>

<h2>La pergola : bioclimatique ou traditionnelle ?</h2>
<p>La pergola traditionnelle en bois (ou en aluminium) est la solution la plus économique pour couvrir une terrasse. La pergola bioclimatique à lames orientables est la solution la plus confortable : elle s'ouvre pour laisser passer la lumière et se ferme automatiquement en cas de pluie ou de fort soleil.</p>
<ul>
  <li><strong>Pergola bois classique</strong> : 1 500–5 000 € pour 20 m²</li>
  <li><strong>Pergola aluminium motorisée</strong> : 5 000–15 000 € pour 20 m² (selon motorisation et options)</li>
</ul>

<div class="overflow-x-auto my-6"><table class="w-full text-sm border-collapse">
<thead><tr style="background-color:#80BC00" class="text-white"><th class="p-2 text-left">Matériau</th><th class="p-2 text-left">Prix posé (€/m²)</th><th class="p-2 text-left">Durée de vie</th><th class="p-2 text-left">Entretien annuel</th></tr></thead>
<tbody>
<tr class="border-b"><td class="p-2">Ipé / Teck</td><td class="p-2">80–150 €</td><td class="p-2">30–40 ans</td><td class="p-2">Huile (2–3h)</td></tr>
<tr class="border-b bg-[#F7F5F0]"><td class="p-2">Pin traité autoclave</td><td class="p-2">40–70 €</td><td class="p-2">15–20 ans</td><td class="p-2">Lasure tous les 2–3 ans</td></tr>
<tr class="border-b"><td class="p-2">Douglas naturel</td><td class="p-2">55–85 €</td><td class="p-2">20–25 ans</td><td class="p-2">Huile ou lasure/an</td></tr>
<tr class="border-b bg-[#F7F5F0]"><td class="p-2">Composite</td><td class="p-2">60–100 €</td><td class="p-2">25–30 ans</td><td class="p-2">Nettoyage annuel</td></tr>
<tr class="border-b"><td class="p-2">Dallage pierre naturelle</td><td class="p-2">80–200 €</td><td class="p-2">50+ ans</td><td class="p-2">Anti-mousse annuel</td></tr>
</tbody>
</table></div>

<h2>Permis de construire pour une pergola à Lyon</h2>
<p>En règle générale, une pergola de moins de 20 m² accolée à une habitation n'est pas soumise à permis de construire, mais peut nécessiter une déclaration préalable de travaux selon les PLU des communes lyonnaises. Certaines communes des Monts d'Or sont en zone ABF (Architectes des Bâtiments de France) et imposent des contraintes architecturales. Renseignez-vous auprès de votre mairie — LM Espace Vert peut vous accompagner dans ces démarches.</p>

<h2>LM Espace Vert réalise votre terrasse et pergola</h2>
<p>LM Espace Vert réalise terrasses en bois, dallage et pergolas dans tout le nord et l'ouest lyonnais. Consultez notre service de <a href="/services/maconnerie-paysagere">maçonnerie paysagère</a> pour en savoir plus ou <a href="/devis">demandez un devis gratuit</a>. Nous vous proposons un projet complet intégrant la terrasse, la pergola et l'aménagement végétal environnant.</p>

<details class="my-4 border border-[#80BC00] rounded-lg overflow-hidden">
  <summary class="bg-[#F7F5F0] p-3 cursor-pointer font-semibold">Quelle terrasse bois choisir pour un usage intense à Lyon ?</summary>
  <div class="p-4"><p>Pour un usage intensif (famille avec enfants, réceptions fréquentes), nous recommandons le bois composite ou le bois exotique ipé. Ces deux matériaux résistent aux chocs, aux rayures et aux taches bien mieux que le pin traité. Le composite a l'avantage de ne pas chauffer autant que l'ipé en plein soleil estival — un point important dans les étés lyonnais de plus en plus chauds.</p></div>
</details>

<details class="my-4 border border-[#80BC00] rounded-lg overflow-hidden">
  <summary class="bg-[#F7F5F0] p-3 cursor-pointer font-semibold">Comment entretenir une terrasse bois à Lyon au printemps ?</summary>
  <div class="p-4"><p>Au printemps (mars-avril), commencez par un nettoyage au karcher basse pression (max 100–150 bars) pour éliminer les mousses et les lichens qui se développent en hiver dans le climat lyonnais. Laissez sécher 48h. Appliquez ensuite une huile naturelle (bois exotiques) ou une lasure pénétrante (pin traité, douglas) à la brosse ou au rouleau. Évitez les produits filmogènes sur le bois naturel — le film se fissure rapidement. Pour notre guide détaillé, consultez notre article sur l'<a href="/blog/terrasse-bois-entretien">entretien des terrasses en bois</a>.</p></div>
</details>
    `.trim(),
  },

  // ─── 10 NOUVEAUX ARTICLES (Sprint 2) ───────────────────────────────────────

  {
    slug: 'pergola-tonnelle-jardin-lyon',
    category: 'Conseils',
    title: 'Pergola et tonnelle : créer un espace ombragé dans votre jardin à Lyon',
    excerpt: 'Pergola en bois, en aluminium ou tonnelle végétale : découvrez comment créer un espace ombragé et convivial dans votre jardin lyonnais, du choix des matériaux aux solutions végétales.',
    date: '2026-04-10',
    readingTime: '7 min',
    author: 'Léo Maurice',
    image: "/images/scraped/allotravaux-05.jpg",
    keywords: ['pergola jardin Lyon', 'tonnelle jardin Lyon', 'espace ombragé jardin', 'pergola bois aluminium Lyon', 'aménagement extérieur Rhône'],
    content: `
<blockquote class="bg-[#F7F5F0] rounded-xl p-4 my-4 border-l-4 border-[#80BC00] text-[#2F2F2F]">
  <p><strong>À retenir :</strong> Une pergola ou une tonnelle bien conçue transforme radicalement l'usage de votre jardin. Elle crée une pièce de vie extérieure, protège du soleil estival (de plus en plus intense à Lyon), et peut augmenter la valeur immobilière de votre bien de 5 à 15 %.</p>
</blockquote>

<h2>Pourquoi créer un espace ombragé à Lyon ?</h2>
<p>Les étés lyonnais sont de plus en plus chauds : depuis 2019, la ville enregistre régulièrement des épisodes de canicule dépassant 38 °C. Dans ce contexte, disposer d'un espace ombragé dans son jardin n'est plus un luxe mais une nécessité. Pergola, tonnelle, voile d'ombrage ou structure végétale : les solutions existent pour tous les budgets et toutes les configurations de jardin.</p>
<p>Pour les propriétaires de la région de Saint-Didier-au-Mont-d'Or, Caluire, Écully ou Dardilly, Léo et l'équipe de LM Espace Vert accompagnent régulièrement les projets d'aménagement de terrasse et d'espace ombragé. Voici notre guide complet pour faire le bon choix.</p>

<h2>Pergola en bois : l'option naturelle et chaleureuse</h2>
<p>La pergola en bois reste la solution la plus demandée dans les jardins lyonnais. Elle s'intègre harmonieusement dans les jardins bourgeois des Monts d'Or et apporte une touche de chaleur naturelle. Les essences adaptées au climat lyonnais sont le pin traité autoclave classe IV (économique), le douglas (esthétique et durable) et le robinier (résistance naturelle maximale).</p>
<p>Une pergola en bois de 15 à 20 m² se construit en 2 à 3 jours avec une équipe professionnelle. Le coût varie de 2 500 à 6 000 € en fonction des dimensions, de l'essence de bois choisie et des finitions. Pour maximiser la durée de vie, prévoyez un traitement lazurant tous les 2 à 3 ans.</p>
<ul>
  <li><strong>Douglas</strong> : résistance naturelle, belle teinte miel, idéal sans traitement</li>
  <li><strong>Pin traité autoclave</strong> : économique, durée de vie 20–25 ans</li>
  <li><strong>Robinier (acacia)</strong> : résistance maximale (30+ ans), essence locale</li>
  <li><strong>Châtaignier</strong> : très résistant, aspect rustique apprécié en zone rurale</li>
</ul>

<h2>Pergola en aluminium : modernité et zéro entretien</h2>
<p>La pergola aluminium bioclimatique représente aujourd'hui le segment le plus dynamique du marché. Ses lames orientables permettent de moduler l'ombrage selon l'heure et l'ensoleillement. Motorisées et connectées, certaines se ferment automatiquement en cas de pluie grâce à un capteur météo. Elles s'accordent parfaitement avec l'architecture contemporaine des maisons neuves de Dardilly, Limonest et Champagne-au-Mont-d'Or.</p>
<p>L'investissement est plus élevé : comptez 5 000 à 15 000 € pour une pergola bioclimatique motorisée de 20 m². Mais l'absence totale de maintenance (l'aluminium ne rouille pas et ne se déforme pas) et la durabilité (40 à 50 ans) en font souvent le meilleur investissement sur le long terme.</p>

<div class="overflow-x-auto my-6"><table class="w-full text-sm border-collapse">
<thead><tr class="bg-[#80BC00] text-white"><th class="p-2 text-left">Type de pergola</th><th class="p-2 text-left">Prix indicatif (20 m²)</th><th class="p-2 text-left">Durée de vie</th><th class="p-2 text-left">Entretien</th></tr></thead>
<tbody>
<tr class="border-b"><td class="p-2">Bois pin traité</td><td class="p-2">2 500–4 500 €</td><td class="p-2">20–25 ans</td><td class="p-2">Lazure tous les 3 ans</td></tr>
<tr class="border-b bg-[#F7F5F0]"><td class="p-2">Bois Douglas / Robinier</td><td class="p-2">4 000–7 000 €</td><td class="p-2">25–35 ans</td><td class="p-2">Huile tous les 2–3 ans</td></tr>
<tr class="border-b"><td class="p-2">Aluminium fixe</td><td class="p-2">3 500–6 000 €</td><td class="p-2">40–50 ans</td><td class="p-2">Aucun</td></tr>
<tr class="border-b bg-[#F7F5F0]"><td class="p-2">Pergola bioclimatique motorisée</td><td class="p-2">6 000–15 000 €</td><td class="p-2">40–50 ans</td><td class="p-2">Nettoyage annuel</td></tr>
<tr class="border-b"><td class="p-2">Tonnelle végétale (structure + plantes)</td><td class="p-2">800–3 000 €</td><td class="p-2">Variable</td><td class="p-2">Taille annuelle</td></tr>
</tbody>
</table></div>

<h2>La tonnelle végétale : ombrage naturel et biodiversité</h2>
<p>La tonnelle végétale consiste à installer une structure légère (métal, bois ou osier tressé) rapidement colonisée par des plantes grimpantes. C'est la solution la plus économique et la plus écologique pour créer de l'ombre au jardin. Elle accueille en prime les insectes pollinisateurs et les oiseaux.</p>
<p>Les plantes grimpantes les plus adaptées au climat lyonnais pour une tonnelle dense et rapide : la glycine (spectaculaire mais envahissante), le chèvrefeuille (parfumé et mellifère), le houblon (croissance ultra-rapide, 6 à 8 m par saison), la vigne vierge (feuillage décoratif) et la clématite (floraison généreuse).</p>

<blockquote class="bg-[#F7F5F0] rounded-xl p-4 my-4 border-l-4 border-[#80BC00] text-[#2F2F2F]">
  <p><strong>Conseil de Léo :</strong> "Pour une tonnelle végétale rapidement ombragée à Lyon, associez un houblon japonais (croissance folle la première année) à une clématite Montana. Vous aurez de l'ombre dès le premier été et une floraison spectaculaire au printemps."</p>
</blockquote>

<h2>Réglementation : déclaration préalable ou permis de construire ?</h2>
<p>En règle générale, une pergola de moins de 20 m² en emprise au sol et inférieure à 12 m de hauteur ne nécessite qu'une déclaration préalable de travaux, voire aucune démarche si la surface est inférieure à 5 m² en zone non protégée. Cependant, les communes des Monts d'Or (Saint-Cyr-au-Mont-d'Or, Poleymieux, La Tour-de-Salvagny) ont souvent des règles d'urbanisme spécifiques liées aux secteurs classés. LM Espace Vert peut vous accompagner dans vos démarches administratives.</p>

<h2>Confiez votre projet à LM Espace Vert</h2>
<p>Léo et son équipe réalisent des projets de pergolas et d'espaces ombragés dans toute la région lyonnaise : Saint-Didier-au-Mont-d'Or, Caluire, Écully, Francheville, Dardilly et communes environnantes. De l'étude de votre jardin au suivi de chantier, LM Espace Vert vous accompagne de A à Z. <a href="/devis">Demandez un devis gratuit</a> — réponse sous 48h.</p>
    `.trim(),
  },

  {
    slug: 'taille-arbres-fruitiers-rhone',
    category: 'Conseils',
    title: 'Taille des arbres fruitiers dans le Rhône : guide complet saison par saison',
    excerpt: 'Pommier, poirier, prunier, cerisier, figuier : chaque arbre fruitier a ses exigences de taille. Notre guide saison par saison adapté au climat du Rhône pour des récoltes abondantes.',
    date: '2026-04-05',
    readingTime: '8 min',
    author: 'Léo Maurice',
    image: "/images/scraped/allotravaux-06.jpg",
    keywords: ['taille arbres fruitiers Rhône', 'tailler pommier poirier lyon', 'taille prunier cerisier', 'arbre fruitier entretien Rhône'],
    content: `
<blockquote class="bg-[#F7F5F0] rounded-xl p-4 my-4 border-l-4 border-[#80BC00] text-[#2F2F2F]">
  <p><strong>À retenir :</strong> La taille des arbres fruitiers est l'intervention la plus influente sur la qualité et la quantité des récoltes. Une taille bien maîtrisée améliore la luminosité des fruits, limite les maladies et prolonge la durée de vie de l'arbre. Dans le Rhône, le calendrier de taille est calé sur des repères locaux.</p>
</blockquote>

<h2>Pourquoi tailler les arbres fruitiers dans le Rhône ?</h2>
<p>Le département du Rhône bénéficie d'un climat semi-continental favorable à la culture fruitière : étés chauds et secs, hivers modérément froids, peu de gelées tardives dévastatrices. Les jardins de Saint-Didier-au-Mont-d'Or, Poleymieux ou Limonest accueillent fréquemment pommiers, poiriers, pruniers et cerisiers. Mais sans taille régulière, ces arbres s'embroussaillent, s'asphyxient et produisent des fruits de moins bonne qualité.</p>
<p>La taille remplit trois fonctions essentielles : <strong>former</strong> l'arbre (charpente, architecture), <strong>fructifier</strong> (équilibre végétatif-reproductif) et <strong>soigner</strong> (suppression des branches mortes, malades ou mal orientées). Léo de LM Espace Vert intervient régulièrement pour la taille d'arbres fruitiers dans tout le Rhône.</p>

<h2>Calendrier de taille saison par saison pour le Rhône</h2>

<h3>Hiver (décembre–février) : la taille de formation et de fructification</h3>
<p>C'est la grande période de taille pour les arbres fruitiers à pépins (pommiers, poiriers). En période de dormance, la sève est au repos et les plaies cicatrisent bien. On supprime les branches croisées, les gourmands (pousses verticales vigoureuses) et on sélectionne les branches à fruit (rameaux courts porteurs de boutons floraux). Dans le Rhône, attendez la fin des grands froids, idéalement entre début janvier et mi-mars selon les années.</p>

<h3>Printemps (mars–avril) : ébourgeonnage et taille en vert</h3>
<p>L'ébourgeonnage consiste à supprimer les bourgeons surnuméraires pour concentrer l'énergie de l'arbre sur les fruits conservés. C'est aussi le moment de pincer les gourmands naissants avant qu'ils ne lignifient. Cette taille légère se fait à la main, sans outils tranchants, pendant la croissance végétative de mars à fin avril.</p>

<h3>Été (juin–août) : taille estivale des cerises et prunes</h3>
<p>Les arbres fruitiers à noyau (cerisier, prunier, pêcher) se taillent de préférence en été, après la récolte, pour limiter les risques de maladie fongique (moniliose, silver leaf). Le cerisier se taille en juin-juillet juste après la cueillette. Le prunier en juillet-août. L'été est aussi le moment d'éclaircir le feuillage pour exposer les fruits au soleil.</p>

<h3>Automne (septembre–novembre) : suppression et nettoyage</h3>
<p>L'automne est la période de nettoyage sanitaire : suppression des branches mortes, des momies de fruits (foyers de maladies), des crosses et des bois blessés. C'est aussi le moment de traiter au soufre mouillable contre la tavelure et de badigeonner les plaies importantes à la pâte cicatrisante.</p>

<div class="overflow-x-auto my-6"><table class="w-full text-sm border-collapse">
<thead><tr class="bg-[#80BC00] text-white"><th class="p-2 text-left">Espèce</th><th class="p-2 text-left">Taille principale</th><th class="p-2 text-left">Période idéale (Rhône)</th><th class="p-2 text-left">Particularité</th></tr></thead>
<tbody>
<tr class="border-b"><td class="p-2">Pommier</td><td class="p-2">Formation + fructification</td><td class="p-2">Janvier–mars</td><td class="p-2">Couper les bouquets de mai en excès</td></tr>
<tr class="border-b bg-[#F7F5F0]"><td class="p-2">Poirier</td><td class="p-2">Formation + fructification</td><td class="p-2">Janvier–mars</td><td class="p-2">Conserver les brachyblastes</td></tr>
<tr class="border-b"><td class="p-2">Cerisier</td><td class="p-2">Aération + suppression</td><td class="p-2">Juin–juillet (post-récolte)</td><td class="p-2">Jamais en hiver (maladie)</td></tr>
<tr class="border-b bg-[#F7F5F0]"><td class="p-2">Prunier</td><td class="p-2">Éclaircissage + suppression</td><td class="p-2">Juillet–août</td><td class="p-2">Sensible à la moniliose</td></tr>
<tr class="border-b"><td class="p-2">Pêcher</td><td class="p-2">Renouvellement des rameaux</td><td class="p-2">Février–mars</td><td class="p-2">Taille annuelle obligatoire</td></tr>
<tr class="border-b bg-[#F7F5F0]"><td class="p-2">Figuier</td><td class="p-2">Pincement + éclaircissage</td><td class="p-2">Mars + août</td><td class="p-2">Latex irritant — gants obligatoires</td></tr>
</tbody>
</table></div>

<h2>Les outils indispensables pour une taille de qualité</h2>
<ul>
  <li><strong>Sécateur à lame franche</strong> (type Felco 2 ou Pradines) pour les rameaux jusqu'à 1,5 cm</li>
  <li><strong>Ébrancheur à long manche</strong> pour les branches de 1,5 à 3 cm sans se mettre en danger</li>
  <li><strong>Scie à élaguer</strong> (lame japonaise) pour les branches de plus de 3 cm</li>
  <li><strong>Pâte cicatrisante</strong> (type Lac Balsam) pour les plaies de plus de 3 cm de diamètre</li>
  <li><strong>Désinfectant (alcool à 70°)</strong> pour désinfecter les outils entre chaque arbre</li>
</ul>

<blockquote class="bg-[#F7F5F0] rounded-xl p-4 my-4 border-l-4 border-[#80BC00] text-[#2F2F2F]">
  <p><strong>Le conseil de Léo :</strong> "Dans le Rhône, je préconise de ne jamais tailler les cerisiers et pruniers en hiver — le risque de silver leaf (plomb) et de moniliose est trop élevé. Attendez toujours la belle saison, après la récolte. Pour les pommiers et poiriers, le mois de février est idéal : les bourgeons commencent à gonfler et on voit mieux où en est l'arbre."</p>
</blockquote>

<h2>Faire appel à un professionnel pour vos arbres fruitiers</h2>
<p>La taille des grands arbres fruitiers (cerisier de 6 m, vieux pommier centenaire) nécessite un matériel adapté et une expérience solide pour ne pas blesser l'arbre irrémédiablement. LM Espace Vert intervient pour la taille et l'élagage d'arbres fruitiers dans tout le département du Rhône. Découvrez notre service d'<a href="/services/elagage-abattage">élagage et abattage</a> ou <a href="/devis">demandez un devis gratuit</a> directement en ligne.</p>
    `.trim(),
  },

  {
    slug: 'gazon-resistant-canicule-lyon',
    category: 'Conseils',
    title: 'Quel gazon choisir pour résister à la canicule lyonnaise ?',
    excerpt: 'Avec des étés de plus en plus chauds à Lyon, le choix des espèces de gazon est crucial. Découvrez quelles variétés résistent le mieux à la sécheresse et aux fortes chaleurs dans le Rhône.',
    date: '2026-04-15',
    readingTime: '7 min',
    author: 'Léo Maurice',
    image: "/images/scraped/allotravaux-07.jpg",
    keywords: ['gazon résistant chaleur Lyon', 'gazon sécheresse Rhône', 'pelouse canicule Lyon', 'variété gazon résistant été', 'pelouse été Lyon'],
    content: `
<blockquote class="bg-[#F7F5F0] rounded-xl p-4 my-4 border-l-4 border-[#80BC00] text-[#2F2F2F]">
  <p><strong>À retenir :</strong> Lyon enregistre en moyenne 15 jours de canicule par an depuis 2020, contre 3 à 4 jours dans les années 1990. Bien choisir ses espèces gazonnantes et adapter son entretien permet d'éviter le brunissement estival et de réduire significativement la consommation d'eau.</p>
</blockquote>

<h2>Le défi climatique des pelouses lyonnaises</h2>
<p>Le climat lyonnais est semi-continental avec une tendance au réchauffement marquée. Les étés 2022, 2023 et 2024 ont mis à rude épreuve les pelouses des jardins de Caluire, Écully, Saint-Didier-au-Mont-d'Or et du plateau de l'Ouest lyonnais. Sans adaptation, un gazon classique peut jaunir irrémédiablement en 10 à 15 jours de sécheresse intense à 35 °C.</p>
<p>La bonne nouvelle : il existe des variétés sélectionnées pour leur résistance à la sécheresse et aux fortes chaleurs. Elles nécessitent moins d'eau, restent vertes plus longtemps et récupèrent rapidement après un stress hydrique. Léo de LM Espace Vert vous guide dans ce choix déterminant.</p>

<h2>Les meilleures espèces de gazon pour Lyon</h2>

<h3>La fétuque ovine (Festuca ovina) et la fétuque rouge demi-rampante</h3>
<p>Les fétuques sont les championnes de la résistance à la sécheresse. Leur système racinaire profond (jusqu'à 40 cm) leur permet d'aller chercher l'eau en profondeur même en période de sécheresse. Leur principal avantage : elles entrent en dormance estivale (jaunissement) mais reprennent très rapidement dès les premières pluies sans dommages. Elles sont idéales pour les jardins des Monts d'Or aux sols calcaires et bien drainants.</p>

<h3>Le ray-grass anglais (Lolium perenne) résistant sécheresse</h3>
<p>Les nouvelles variétés de ray-grass anglais (RGA) sélectionnées après 2015 intègrent des gènes de résistance à la sécheresse. Le RGA reste le gazon de référence pour les pelouses sportives et les jardins d'usage intensif. Il se ressème facilement et présente une excellente reprise après stress. Choisissez les variétés labellisées "Drought tolerance" par le STRI (Sports Turf Research Institute).</p>

<h3>La fétuque élevée (Festuca arundinacea)</h3>
<p>La fétuque élevée est l'espèce la plus robuste de la famille. Elle résiste aussi bien à la chaleur qu'au piétinement et à l'ombre partielle. Son enracinement très profond en fait la meilleure candidate pour les jardins lyonnais exposés sud avec des sols légers. Son seul défaut : une texture un peu plus grossière que les autres fétuques, moins « veloutée » à l'aspect.</p>

<div class="overflow-x-auto my-6"><table class="w-full text-sm border-collapse">
<thead><tr class="bg-[#80BC00] text-white"><th class="p-2 text-left">Espèce</th><th class="p-2 text-left">Résistance sécheresse</th><th class="p-2 text-left">Résistance chaleur</th><th class="p-2 text-left">Usage</th><th class="p-2 text-left">Aspect</th></tr></thead>
<tbody>
<tr class="border-b"><td class="p-2">Fétuque ovine</td><td class="p-2">★★★★★</td><td class="p-2">★★★★★</td><td class="p-2">Ornement</td><td class="p-2">Fin, délicat</td></tr>
<tr class="border-b bg-[#F7F5F0]"><td class="p-2">Fétuque élevée</td><td class="p-2">★★★★★</td><td class="p-2">★★★★</td><td class="p-2">Sport + ornement</td><td class="p-2">Mi-fin</td></tr>
<tr class="border-b"><td class="p-2">Fétuque rouge demi-rampante</td><td class="p-2">★★★★</td><td class="p-2">★★★★</td><td class="p-2">Ornement</td><td class="p-2">Très fin</td></tr>
<tr class="border-b bg-[#F7F5F0]"><td class="p-2">Ray-grass anglais nouvelle génération</td><td class="p-2">★★★</td><td class="p-2">★★★</td><td class="p-2">Sport + usage intensif</td><td class="p-2">Mi-grossier</td></tr>
<tr class="border-b"><td class="p-2">Pâturin des prés</td><td class="p-2">★★</td><td class="p-2">★★</td><td class="p-2">Ornement frais</td><td class="p-2">Fin</td></tr>
</tbody>
</table></div>

<h2>Les mélanges gazon anti-canicule recommandés pour Lyon</h2>
<p>En pratique, un gazon est toujours un mélange d'espèces complémentaires. Pour le climat lyonnais, Léo recommande le mélange suivant :</p>
<ul>
  <li><strong>60 % fétuque élevée</strong> (résistance sécheresse + robustesse)</li>
  <li><strong>25 % fétuque rouge demi-rampante</strong> (esthétique et densité)</li>
  <li><strong>15 % ray-grass anglais nouvelle génération</strong> (rapidité de germination)</li>
</ul>
<p>Ce mélange offre un gazon dense, esthétique et résistant aux étés lyonnais. Il germe rapidement (7 à 14 jours) et développe un enracinement profond en 6 à 8 semaines.</p>

<h2>Adapter son entretien pour réduire la consommation d'eau</h2>
<p>Au-delà du choix des espèces, l'entretien joue un rôle déterminant dans la résistance à la canicule :</p>
<ul>
  <li><strong>Tondre haut</strong> (5–6 cm en été) pour limiter l'évaporation et favoriser l'enracinement profond</li>
  <li><strong>Arroser peu mais profond</strong> (1 fois par semaine, 15 à 20 L/m²) plutôt que souvent et superficiel</li>
  <li><strong>Arroser la nuit ou tôt le matin</strong> pour limiter l'évaporation</li>
  <li><strong>Scarifier au printemps</strong> pour améliorer l'absorption de l'eau</li>
  <li><strong>Passer de l'engrais riche en potassium</strong> en été : le K renforce les parois cellulaires et améliore la résistance au stress hydrique</li>
</ul>

<blockquote class="bg-[#F7F5F0] rounded-xl p-4 my-4 border-l-4 border-[#80BC00] text-[#2F2F2F]">
  <p><strong>Conseil de Léo :</strong> "Ne paniquez pas si votre gazon jaunit en juillet-août à Lyon ! Une fétuque qui entre en dormance n'est pas morte — elle reprend en septembre. Le seul vrai indicateur, c'est le test du crayon : si vous plantez un crayon dans la pelouse et qu'il ressort humide en profondeur, votre gazon est sain. Si le sol est complètement sec à 5 cm, c'est le moment d'arroser profondément."</p>
</blockquote>

<h2>Besoin d'un gazon résistant pour votre jardin lyonnais ?</h2>
<p>LM Espace Vert réalise des engazonnements par semis ou par rouleaux dans toute la région lyonnaise. Nous sélectionnons les mélanges adaptés à votre sol, votre exposition et votre usage. Consultez notre service d'<a href="/services/entretien-jardin">entretien de jardin</a> ou <a href="/devis">demandez un devis gratuit</a> — Léo vous répond personnellement sous 48h.</p>
    `.trim(),
  },

  {
    slug: 'amenagement-jardin-pente-monts-dor',
    category: 'Travaux',
    title: "Aménager un jardin en pente dans les Monts d'Or : nos solutions",
    excerpt: "Les Monts d'Or offrent des panoramas exceptionnels mais leurs jardins en pente posent des défis réels : érosion, terrassement, escaliers... LM Espace Vert vous présente ses solutions éprouvées.",
    date: '2026-04-20',
    readingTime: '8 min',
    author: 'Léo Maurice',
    image: "/images/scraped/allotravaux-08.jpg",
    keywords: ["jardin en pente Monts d'Or", "aménagement jardin en pente Lyon", 'terrassement pente Rhône', 'soutènement mur jardin', 'escalier jardin pente'],
    content: `
<blockquote class="bg-[#F7F5F0] rounded-xl p-4 my-4 border-l-4 border-[#80BC00] text-[#2F2F2F]">
  <p><strong>À retenir :</strong> Un jardin en pente bien aménagé se valorise considérablement et offre souvent de spectaculaires points de vue. Le secret : stabiliser, terrasser, et planter intelligemment en respectant la topographie plutôt qu'en cherchant à tout aplanir.</p>
</blockquote>

<h2>Les jardins en pente des Monts d'Or : un défi et une opportunité</h2>
<p>Les Monts d'Or, ce massif calcaire qui borde Lyon au nord-ouest, offrent des panoramas exceptionnels sur les plaines du Rhône et de la Saône. Mais leurs jardins — souvent escarpés, aux sols calcaires et secs — posent des défis d'aménagement que les propriétaires de Saint-Cyr-au-Mont-d'Or, Saint-Didier-au-Mont-d'Or, Poleymieux ou Collonges-au-Mont-d'Or connaissent bien.</p>
<p>LM Espace Vert intervient régulièrement dans ces zones pour transformer des talus impossibles en jardins structurés, fonctionnels et magnifiques. Léo et son équipe ont développé une expertise spécifique sur les sols calcaires et les pentes des Monts d'Or.</p>

<h2>Diagnostic et étude préalable : les pentes en chiffres</h2>
<p>Avant tout projet, il faut qualifier la pente. On distingue généralement :</p>
<ul>
  <li><strong>Pente douce (0–8 %)</strong> : aménagement classique sans contrainte particulière</li>
  <li><strong>Pente modérée (8–20 %)</strong> : terrassements simples, drainage important, végétaux adaptés</li>
  <li><strong>Pente forte (20–40 %)</strong> : soutènement nécessaire, escaliers, végétalisation des talus</li>
  <li><strong>Pente très forte (&gt;40 %)</strong> : étude géotechnique recommandée, solutions de soutènement lourdes</li>
</ul>
<p>Dans les Monts d'Or, on rencontre fréquemment des pentes de 20 à 50 %, parfois supérieures sur les flancs escarpés. Le sol calcaire, assez superficiel, pose des problèmes spécifiques de drainage et d'enracinement.</p>

<h2>Les solutions de soutènement et de terrassement</h2>

<h3>Les murets de soutènement en pierre sèche</h3>
<p>La pierre sèche est la solution traditionnelle des Monts d'Or, parfaitement adaptée aux sols calcaires locaux. Elle utilise la pierre naturelle extraite du site ou des carrières locales (pierre de Villebois, calcaire de l'Ain). Un muret en pierre sèche crée des banquettes horizontales utilisables comme zones de culture, de détente ou de passage. Il est perméable à l'eau, bénéfique à la biodiversité (reptiles, insectes) et s'intègre parfaitement dans le paysage local.</p>

<h3>Les gabions</h3>
<p>Les gabions (cages métalliques remplies de pierres) sont une alternative moderne et économique au muret maçonné. Ils s'adaptent à toutes les formes, sont perméables à l'eau et très résistants mécaniquement. Ils conviennent parfaitement aux pentes fortes et aux grandes surfaces. L'aspect brut peut être adouci par des plantes grimpantes ou des vivaces plantées en façade.</p>

<h3>Le terrassement en banquettes</h3>
<p>Le terrassement crée des paliers horizontaux successifs qui multiplient les espaces utiles dans un jardin en pente. Chaque banquette peut accueillir une terrasse, un espace potager, un massif fleuri ou une zone de jeux. Le terrassement nécessite un engin mécanique (mini-pelle) et une évacuation des terres en excès.</p>

<div class="overflow-x-auto my-6"><table class="w-full text-sm border-collapse">
<thead><tr class="bg-[#80BC00] text-white"><th class="p-2 text-left">Solution</th><th class="p-2 text-left">Pente adaptée</th><th class="p-2 text-left">Prix indicatif (ml)</th><th class="p-2 text-left">Points forts</th></tr></thead>
<tbody>
<tr class="border-b"><td class="p-2">Pierre sèche</td><td class="p-2">20–60 %</td><td class="p-2">150–350 €/ml</td><td class="p-2">Esthétique, biodiversité, local</td></tr>
<tr class="border-b bg-[#F7F5F0]"><td class="p-2">Gabions</td><td class="p-2">30–70 %</td><td class="p-2">100–200 €/ml</td><td class="p-2">Économique, solide, perméable</td></tr>
<tr class="border-b"><td class="p-2">Mur béton banché</td><td class="p-2">&gt;40 %</td><td class="p-2">200–500 €/ml</td><td class="p-2">Résistance maximale, durabilité</td></tr>
<tr class="border-b bg-[#F7F5F0]"><td class="p-2">Pieux bois (palplanches)</td><td class="p-2">15–35 %</td><td class="p-2">80–150 €/ml</td><td class="p-2">Naturel, économique, rapide</td></tr>
<tr class="border-b"><td class="p-2">Végétalisation talus</td><td class="p-2">&lt;40 %</td><td class="p-2">15–40 €/m²</td><td class="p-2">Écologique, entretien minimal</td></tr>
</tbody>
</table></div>

<h2>Les plantes pour stabiliser les talus des Monts d'Or</h2>
<p>Certaines plantes sont particulièrement efficaces pour stabiliser les talus calcaires des Monts d'Or grâce à leurs racines traçantes et leur résistance à la sécheresse :</p>
<ul>
  <li><strong>Cotoneaster horizontalis</strong> : couvre-sol excellent, fruits décoratifs, résistant calcaire</li>
  <li><strong>Rosmarinus officinalis (romarin)</strong> : parfumé, résistant sec, racines stabilisatrices</li>
  <li><strong>Coronilla valentina</strong> : floraison jaune spectaculaire, très résistant chaleur</li>
  <li><strong>Stipa tenuissima</strong> : graminée légère, effet mouvement dans le vent</li>
  <li><strong>Hedera helix (lierre)</strong> : couvre-sol rapide mais à surveiller (invasif)</li>
  <li><strong>Juniperus horizontalis</strong> : genévrier rampant, très résistant, esthétique</li>
</ul>

<blockquote class="bg-[#F7F5F0] rounded-xl p-4 my-4 border-l-4 border-[#80BC00] text-[#2F2F2F]">
  <p><strong>Le conseil de Léo :</strong> "Dans les Monts d'Or, j'intègre toujours une solution de drainage avant de terrasser ou de soutenir. Les pluies d'orage peuvent être violentes dans ce secteur, et l'eau accumulée derrière un mur mal drainé peut faire céder le soutènement en quelques années. Un bon drainage, c'est 20 % du budget mais 80 % de la durabilité."</p>
</blockquote>

<h2>Escaliers de jardin : accéder à tous les niveaux</h2>
<p>Dans un jardin en pente terrassé, les escaliers deviennent des éléments structurants. LM Espace Vert réalise des escaliers en traverses de chemin de fer (rustique), en béton balayé (contemporain), en pierre naturelle posée à joints ouverts (classique) ou en bois (chaleureux). Un escalier bien dimensionné (giron 30–35 cm, contremarche 14–18 cm) est à la fois sûr et esthétique.</p>

<h2>Votre jardin en pente, notre expertise</h2>
<p>LM Espace Vert maîtrise les spécificités des jardins en pente des Monts d'Or. De l'étude de faisabilité au terrassement, du soutènement à la végétalisation, nous prenons en charge votre projet de A à Z. <a href="/devis">Contactez-nous pour un devis gratuit</a> — Léo se déplace sur site pour évaluer votre terrain.</p>
    `.trim(),
  },

  {
    slug: 'entretien-haie-bocagere-lyon-nord',
    category: 'Conseils',
    title: 'Entretien d\'une haie bocagère à Lyon nord : biodiversité et esthétique',
    excerpt: 'La haie bocagère est un véritable réservoir de biodiversité. Découvrez comment l\'entretenir correctement pour préserver sa valeur écologique et esthétique dans le contexte péri-urbain de Lyon nord.',
    date: '2026-04-25',
    readingTime: '7 min',
    author: 'Léo Maurice',
    image: "/images/scraped/allotravaux-09.jpg",
    keywords: ['haie bocagère Lyon nord', 'entretien haie biodiversité', 'taille haie champêtre Rhône', 'haie naturelle nord Lyon'],
    content: `
<blockquote class="bg-[#F7F5F0] rounded-xl p-4 my-4 border-l-4 border-[#80BC00] text-[#2F2F2F]">
  <p><strong>À retenir :</strong> Une haie bocagère bien entretenue héberge jusqu'à 1 500 espèces d'insectes, 60 espèces d'oiseaux nicheurs et des dizaines de mammifères. Elle est aussi le meilleur écran phonique et visuel naturel, et joue un rôle clé dans la régulation de l'eau dans les jardins péri-urbains de Lyon nord.</p>
</blockquote>

<h2>La haie bocagère : bien plus qu'une clôture végétale</h2>
<p>Dans les communes de Lyon nord — Neuville-sur-Saône, Rochetaillée-sur-Saône, Curis-au-Mont-d'Or, Albigny-sur-Saône, Couzon-au-Mont-d'Or — la haie bocagère est un élément caractéristique du paysage. Composées d'essences locales mélangées (charme, cornouiller, prunellier, viorne, noisetier, aubépine...), ces haies multi-strates créent des corridors écologiques reliant les jardins privés aux espaces naturels environnants.</p>
<p>Léo de LM Espace Vert intervient régulièrement pour l'entretien de ces haies patrimoniales. Sa philosophie : intervenir le minimum nécessaire, au bon moment, pour préserver la valeur écologique tout en maintenant une silhouette soignée.</p>

<h2>Les essences typiques d'une haie bocagère du nord lyonnais</h2>
<ul>
  <li><strong>Charme (Carpinus betulus)</strong> : base de la haie champêtre, facile à former, conserve ses feuilles mortes en hiver</li>
  <li><strong>Prunellier (Prunus spinosa)</strong> : épineux naturel, fleurs blanches printanières, baies nourrissantes pour les oiseaux</li>
  <li><strong>Cornouiller sanguin (Cornus sanguinea)</strong> : rameaux rouges décoratifs, baies pour les oiseaux</li>
  <li><strong>Viorne lantane (Viburnum lantana)</strong> : feuillage dense, fleurs blanches, résistance calcaire</li>
  <li><strong>Aubépine (Crataegus monogyna)</strong> : haie défensive naturelle, fleurs mellifères, baies pour les merles</li>
  <li><strong>Noisetier (Corylus avellana)</strong> : noisettes pour l'écureuil et les casse-noix, chatons mellifères en mars</li>
  <li><strong>Sureau noir (Sambucus nigra)</strong> : fleurs comestibles, baies noires pour les oiseaux</li>
</ul>

<h2>Calendrier d'entretien d'une haie bocagère</h2>

<h3>Quand intervenir (et quand ne pas intervenir)</h3>
<p>La règle d'or en matière de haie bocagère : <strong>ne pas tailler entre le 15 avril et le 15 juillet</strong>. Cette période correspond à la nidification des oiseaux (mésanges, rouge-gorge, fauvette, merle) dans l'épaisseur de la haie. Intervenir pendant cette période détruit des nids, tue des oisillons et est passible d'amende (contravention de 4e classe, jusqu'à 750 €).</p>
<p>Les bonnes périodes d'intervention sont : <strong>fin juillet à mi-septembre</strong> (après la nidification, avant les premières gelées) et <strong>décembre à mi-mars</strong> (dormance hivernale, sans sève).</p>

<h3>La taille en têtard : une technique millénaire</h3>
<p>La taille en têtard consiste à élaguer annuellement les branches sur un tronc court (1,2 à 1,8 m), laissant repousser une touffe de rameaux au sommet. Cette technique traditionnelle des bocages normands et berrichons est parfaitement adaptée aux charmes, aux frênes et aux saules des jardins de Lyon nord. Elle produit du bois de chauffage ou des fagots de petit bois, tout en maintenant l'arbre indéfiniment sans qu'il ne prenne de l'emprise.</p>

<div class="overflow-x-auto my-6"><table class="w-full text-sm border-collapse">
<thead><tr class="bg-[#80BC00] text-white"><th class="p-2 text-left">Espèce</th><th class="p-2 text-left">Période de taille</th><th class="p-2 text-left">Fréquence</th><th class="p-2 text-left">Intérêt écologique</th></tr></thead>
<tbody>
<tr class="border-b"><td class="p-2">Charme</td><td class="p-2">Août–sept. ou déc.–mars</td><td class="p-2">1 fois/an</td><td class="p-2">Abri oiseaux, chatons chenilles</td></tr>
<tr class="border-b bg-[#F7F5F0]"><td class="p-2">Prunellier</td><td class="p-2">Juillet–août</td><td class="p-2">1–2 fois/an</td><td class="p-2">Baies, épines protectrices</td></tr>
<tr class="border-b"><td class="p-2">Aubépine</td><td class="p-2">Août–septembre</td><td class="p-2">1 fois/an</td><td class="p-2">Fleurs mellifères, baies</td></tr>
<tr class="border-b bg-[#F7F5F0]"><td class="p-2">Noisetier</td><td class="p-2">Décembre–février</td><td class="p-2">1 fois tous 2–3 ans</td><td class="p-2">Noisettes, chatons pollinisateurs</td></tr>
<tr class="border-b"><td class="p-2">Sureau</td><td class="p-2">Décembre–mars</td><td class="p-2">1 fois/an</td><td class="p-2">Baies, fleurs comestibles</td></tr>
</tbody>
</table></div>

<h2>Enrichir sa haie bocagère : les bonnes pratiques</h2>
<p>Une haie bocagère en bonne santé se bonifie avec le temps si on la laisse évoluer naturellement. Quelques actions simples pour l'enrichir :</p>
<ul>
  <li>Laisser des andains (tas de bois mort) au pied de la haie : habitat pour les hérissons, les insectes, les tritons</li>
  <li>Planter des bulbes de printemps (jacinthes des bois, jonquilles) sous la haie pour un effet naturel</li>
  <li>Laisser quelques branches mortes debout (chandelles) pour les pics et les mésanges bleues</li>
  <li>Installer des nichoirs à mésanges et à rouges-gorges dans la haie</li>
</ul>

<blockquote class="bg-[#F7F5F0] rounded-xl p-4 my-4 border-l-4 border-[#80BC00] text-[#2F2F2F]">
  <p><strong>Le conseil de Léo :</strong> "Dans les propriétés de Lyon nord que j'entretiens, j'essaie toujours de convaincre les propriétaires de garder un ou deux mètres de haie non taillée par endroit — une zone refuge. C'est souvent là que les oiseaux nichent et que la vie s'exprime le plus intensément. Un jardin un peu 'imparfait' dans ses coins est bien plus riche qu'un jardin parfaitement tondu partout."</p>
</blockquote>

<h2>LM Espace Vert, spécialiste des haies bocagères dans le nord lyonnais</h2>
<p>LM Espace Vert intervient pour l'entretien de haies bocagères dans toutes les communes de Lyon nord : Neuville-sur-Saône, Rochetaillée, Curis, Albigny, Fleurieu-sur-Saône et leurs communes voisines. Nous respectons scrupuleusement les périodes de nidification et travaillons avec des outils adaptés (taille-haie thermique, débroussailleuse). <a href="/devis">Demandez votre devis gratuit</a>.</p>
    `.trim(),
  },

  {
    slug: 'prix-createur-jardin-lyon-2026',
    category: 'Conseils',
    title: 'Tarif d\'un créateur de jardin à Lyon en 2026 : ce qu\'il faut savoir',
    excerpt: 'Combien coûte la création d\'un jardin à Lyon en 2026 ? Du terrassement à la plantation, des allées à la terrasse : les vrais prix du marché lyonnais expliqués par LM Espace Vert.',
    date: '2026-05-01',
    readingTime: '9 min',
    author: 'Léo Maurice',
    image: "/images/scraped/allotravaux-10.jpg",
    keywords: ['prix création jardin Lyon 2026', 'tarif paysagiste Lyon', 'coût aménagement jardin Rhône', 'devis jardin Lyon'],
    content: `
<blockquote class="bg-[#F7F5F0] rounded-xl p-4 my-4 border-l-4 border-[#80BC00] text-[#2F2F2F]">
  <p><strong>À retenir :</strong> Le prix d'un jardin créé de zéro varie de 50 à plus de 300 €/m² selon la complexité, les matériaux et les prestations incluses. À Lyon en 2026, comptez en moyenne 80 à 150 €/m² pour un jardin complet avec terrassement, allées, gazonnement et plantations.</p>
</blockquote>

<h2>Pourquoi les prix varient-ils autant ?</h2>
<p>Une des premières questions que posent les propriétaires lyonnais contactant LM Espace Vert concerne le budget. "Combien ça coûte de créer un jardin ?" est une question légitime mais dont la réponse dépend de nombreux facteurs : la surface, la topographie (plat ou en pente), l'accessibilité du chantier (entrée étroite, étage), les matériaux choisis (gazon naturel ou synthétique, dallage pierre ou béton), et le niveau de finition souhaité.</p>
<p>Dans cet article, Léo vous donne les vrais prix du marché lyonnais en 2026, poste par poste, pour vous permettre de budgéter votre projet avec précision.</p>

<h2>Les postes de coût d'une création de jardin</h2>

<h3>Le terrassement et la préparation du sol</h3>
<p>Le terrassement est souvent le poste le plus imprévisible car il dépend du sol en place. Un terrain argilo-calcaire des Monts d'Or peut nécessiter un décapage important, un apport de terre végétale et un drainage. Un terrain plat avec un bon sol existant peut se préparer en une journée.</p>
<ul>
  <li>Terrassement + évacuation terres : 15–40 €/m² selon la profondeur et l'accessibilité</li>
  <li>Apport de terre végétale : 50–80 €/m³ fournie et étalée (1 m³ = env. 10 m² sur 10 cm)</li>
  <li>Drainage (si sol imperméable) : 30–60 € par mètre linéaire de drain</li>
</ul>

<h3>Les allées et revêtements</h3>
<p>Le choix du revêtement des allées influence fortement l'esthétique et le budget. Voici les prix posés (matériaux + main-d'œuvre) pour le marché lyonnais en 2026 :</p>
<ul>
  <li>Stabilisé renforcé (gravillon calcaire) : 30–50 €/m²</li>
  <li>Dalles béton ou pierre reconstituée : 50–90 €/m²</li>
  <li>Dallage pierre naturelle (grès, calcaire, ardoise) : 90–200 €/m²</li>
  <li>Pavés granit ou béton : 70–130 €/m²</li>
  <li>Terrasse bois composite : 70–110 €/m²</li>
</ul>

<h3>La pelouse et le gazon</h3>
<ul>
  <li>Semis gazon (préparation sol + semis + arrosage) : 8–18 €/m²</li>
  <li>Gazon en rouleaux (pose complète) : 20–35 €/m²</li>
  <li>Gazon synthétique (pose complète) : 45–85 €/m²</li>
</ul>

<h3>Les plantations</h3>
<ul>
  <li>Haie simple (thuyas, lauriers) : 15–30 €/ml fourni posé</li>
  <li>Haie composée (essences mélangées) : 25–60 €/ml</li>
  <li>Arbuste (C5–C10) : 30–80 € l'unité posé</li>
  <li>Arbre tige (C20–C45) : 150–600 € l'unité posé</li>
  <li>Massif de vivaces (plantation + paillage) : 30–60 €/m²</li>
</ul>

<div class="overflow-x-auto my-6"><table class="w-full text-sm border-collapse">
<thead><tr class="bg-[#80BC00] text-white"><th class="p-2 text-left">Projet type</th><th class="p-2 text-left">Surface</th><th class="p-2 text-left">Budget estimatif 2026</th><th class="p-2 text-left">Inclus</th></tr></thead>
<tbody>
<tr class="border-b"><td class="p-2">Petit jardin de ville</td><td class="p-2">50–100 m²</td><td class="p-2">3 000–8 000 €</td><td class="p-2">Allée, gazon, quelques arbustes</td></tr>
<tr class="border-b bg-[#F7F5F0]"><td class="p-2">Jardin maison individuelle</td><td class="p-2">150–300 m²</td><td class="p-2">10 000–25 000 €</td><td class="p-2">Terrassement, allée, terrasse, gazon, plantations</td></tr>
<tr class="border-b"><td class="p-2">Jardin de prestige</td><td class="p-2">300–800 m²</td><td class="p-2">30 000–80 000 €</td><td class="p-2">Toutes prestations + arrosage auto + éclairage</td></tr>
<tr class="border-b bg-[#F7F5F0]"><td class="p-2">Jardin Monts d'Or en pente</td><td class="p-2">200–500 m²</td><td class="p-2">25 000–60 000 €</td><td class="p-2">Soutènement + terrassement + végétaux adaptés</td></tr>
</tbody>
</table></div>

<h2>Ce qui influence le devis final</h2>
<p>Au-delà des postes décrits ci-dessus, plusieurs éléments peuvent faire varier le budget significativement :</p>
<ul>
  <li><strong>Accessibilité du chantier</strong> : une entrée de 80 cm empêche toute intervention avec engin mécanisé — tout se fait à la main ou avec de petits outils, ce qui multiplie le temps de travail</li>
  <li><strong>Distance de livraison des matériaux</strong> : dans les Monts d'Or, les routes étroites peuvent imposer des surcoûts logistiques</li>
  <li><strong>Présence de réseaux enterrés</strong> (eau, électricité, assainissement) nécessitant des précautions</li>
  <li><strong>Saison d'intervention</strong> : les délais d'intervention sont plus courts en hiver, mais le coût de plantation est similaire</li>
</ul>

<h2>Demandez un devis gratuit à LM Espace Vert</h2>
<p>La seule façon d'obtenir un chiffre précis est de bénéficier d'une visite sur site. Léo se déplace gratuitement dans un rayon de 30 km autour de Lyon pour étudier votre terrain, comprendre vos besoins et vous remettre un devis détaillé. <a href="/devis">Remplissez notre formulaire de devis gratuit</a> — réponse sous 48h garantie.</p>
    `.trim(),
  },

  {
    slug: 'jardin-japonais-lyon',
    category: 'Conseils',
    title: 'Créer un jardin japonais à Lyon : plantes, minéral et sérénité',
    excerpt: 'Le jardin japonais est l\'un des styles les plus demandés à Lyon pour sa capacité à créer un espace de calme et de méditation. Découvrez comment le concevoir et le planter dans le climat lyonnais.',
    date: '2026-04-28',
    readingTime: '8 min',
    author: 'Léo Maurice',
    image: "/images/scraped/allotravaux-11.jpg",
    keywords: ['jardin japonais Lyon', 'création jardin japonais Rhône', 'karesansui Lyon', 'plantes jardin japonais', 'paysagiste jardin zen Lyon'],
    content: `
<blockquote class="bg-[#F7F5F0] rounded-xl p-4 my-4 border-l-4 border-[#80BC00] text-[#2F2F2F]">
  <p><strong>À retenir :</strong> Un jardin japonais authentique repose sur trois principes fondamentaux : le vide (ma), l'asymétrie (fukinsei) et la suggestion du paysage naturel. Il n'est pas une collection de plantes exotiques, mais une composition équilibrée de végétal, minéral et eau — ou de leur symbole.</p>
</blockquote>

<h2>Le jardin japonais : une philosophie autant qu'un style</h2>
<p>De plus en plus de propriétaires lyonnais se tournent vers le jardin japonais, attirés par sa sérénité, son esthétique épurée et son faible entretien apparent. Léo reçoit régulièrement ce type de demande pour des jardins de Tassin-la-Demi-Lune, Saint-Genis-Laval ou Caluire-et-Cuire. Le jardin japonais n'est pas simplement un jardin avec des bambous et un pont rouge — c'est une vision du monde traduite en espace végétal.</p>
<p>Il existe plusieurs types de jardins japonais : le karesansui (jardin sec de pierres), le tsubo-niwa (cour-jardin), le chaniwa (jardin de thé) et le stroll garden (jardin de promenade). Pour les jardins de particuliers lyonnais, nous travaillons le plus souvent sur des karesansui miniatures ou des jardins zen de cour intérieure.</p>

<h2>Les éléments fondamentaux d'un jardin japonais</h2>

<h3>Le minéral : pierres, graviers et sable</h3>
<p>La pierre est l'élément central du jardin japonais. Elle symbolise les montagnes, les îles et la permanence. Chaque pierre est choisie individuellement pour sa forme, sa texture et sa couleur. Les graviers (suna) sont ratissés en motifs ondulants évoquant l'eau ou les nuages. Pour un jardin lyonnais, nous utilisons généralement des pierres de la région (calcaire des Monts d'Or, galets de la Saône) pour une intégration paysagère authentique.</p>

<h3>L'eau et son symbole</h3>
<p>L'eau est présente sous forme réelle (bassin, fontaine de bambou tsukubai) ou symbolique (graviers ratissés). Le son de l'eau est aussi important que sa présence visuelle. Le shishi-odoshi (balance en bambou qui claque régulièrement) est un élément classique qui crée un rythme sonore dans le jardin. Dans le climat lyonnais, un bassin intégré doit être équipé d'un système de filtration performant pour rester clair en été.</p>

<h3>La végétation : minimalisme et évocation</h3>
<p>Contrairement aux idées reçues, un jardin japonais ne comporte pas nécessairement de bambou ou de cerisier. La sélection végétale est guidée par les critères suivants : texture intéressante, port naturel évocateur, comportement saisonnier notable. Les plantes les plus utilisées dans les jardins japonais lyonnais :</p>
<ul>
  <li><strong>Acer palmatum</strong> (érable japonais) : pièce maîtresse, feuillage découpé, rougissement automnal spectaculaire</li>
  <li><strong>Pinus mugo ou sylvestris en topiaire niwaki</strong> : pin sculpté en nuage, à la manière des jardins japonais authentiques</li>
  <li><strong>Bambous en pot ou à rhizomes contrôlés</strong> (Phyllostachys aurea, Fargesia) : effet vertical et son du vent</li>
  <li><strong>Prunus serrulata</strong> (cerisier japonais) : floraison printanière éphémère, concept de mono no aware</li>
  <li><strong>Moss (mousses)</strong> : sols couverts de mousse évoquant les forêts de montagne japonaises</li>
  <li><strong>Ophiopogon planiscapus 'Nigrescens'</strong> : gazon noir décoratif, excellent en couvre-sol</li>
  <li><strong>Mahonia x media 'Charity'</strong> : floraison hivernale jaune, port architectural</li>
</ul>

<div class="overflow-x-auto my-6"><table class="w-full text-sm border-collapse">
<thead><tr class="bg-[#80BC00] text-white"><th class="p-2 text-left">Style de jardin japonais</th><th class="p-2 text-left">Surface idéale</th><th class="p-2 text-left">Éléments clés</th><th class="p-2 text-left">Budget indicatif</th></tr></thead>
<tbody>
<tr class="border-b"><td class="p-2">Karesansui (jardin sec)</td><td class="p-2">6–30 m²</td><td class="p-2">Pierres, graviers ratissés, quelques végétaux</td><td class="p-2">2 000–8 000 €</td></tr>
<tr class="border-b bg-[#F7F5F0]"><td class="p-2">Tsubo-niwa (cour-jardin)</td><td class="p-2">4–20 m²</td><td class="p-2">Lanterne, tsukubai, végétation choisie</td><td class="p-2">3 000–10 000 €</td></tr>
<tr class="border-b"><td class="p-2">Jardin zen de promenade</td><td class="p-2">50–200 m²</td><td class="p-2">Allée de pas-japonais, bassin, arbres</td><td class="p-2">10 000–40 000 €</td></tr>
<tr class="border-b bg-[#F7F5F0]"><td class="p-2">Angle japonisant (intégration)</td><td class="p-2">10–40 m²</td><td class="p-2">Coin zen dans un jardin existant</td><td class="p-2">1 500–6 000 €</td></tr>
</tbody>
</table></div>

<h2>Adapter le jardin japonais au climat lyonnais</h2>
<p>Le Japon bénéficie d'un climat océanique tempéré humide très différent du climat lyonnais (semi-continental, étés chauds et secs). Cette différence impose quelques adaptations :</p>
<ul>
  <li>Installer un arrosage goutte-à-goutte ou micro-aspersion pour les plantes sensibles à la sécheresse (mousses, érables)</li>
  <li>Protéger les érables japonais des expositions sud trop brûlantes — ils préfèrent une luminosité diffuse ou mi-ombre</li>
  <li>Choisir des bambous à rhizomes traçants non invasifs (Fargesia) plutôt que les phyllostachys envahissants</li>
  <li>Utiliser des pierres calcaires locales plutôt que des pierres importées pour l'intégration paysagère et l'écologie</li>
</ul>

<blockquote class="bg-[#F7F5F0] rounded-xl p-4 my-4 border-l-4 border-[#80BC00] text-[#2F2F2F]">
  <p><strong>Le conseil de Léo :</strong> "Le jardin japonais que j'aime créer à Lyon n'est pas une copie des jardins de Kyoto — c'est une reinterprétation dans un contexte local. J'utilise des pierres de la Saône, des érables locaux, de la mousse naturelle qui pousse déjà sur le site. L'authenticité d'un jardin zen vient de sa cohérence avec son lieu, pas de ses accessoires."</p>
</blockquote>

<h2>Créez votre jardin zen avec LM Espace Vert</h2>
<p>LM Espace Vert conçoit et réalise des jardins japonais et espaces zen dans toute la région lyonnaise. De l'étude de conception à la réalisation complète, Léo vous accompagne dans chaque étape. <a href="/devis">Demandez votre devis gratuit</a> et laissez-nous transformer votre espace en havre de paix.</p>
    `.trim(),
  },

  {
    slug: 'desherbage-naturel-jardin',
    category: 'Conseils',
    title: 'Désherbage naturel : nos 8 techniques pour un jardin sans produits chimiques',
    excerpt: 'Exit le glyphosate ! Découvrez 8 techniques naturelles et efficaces de désherbage pour maintenir votre jardin propre et en bonne santé, sans polluer la terre ni les nappes phréatiques.',
    date: '2026-04-12',
    readingTime: '7 min',
    author: 'Léo Maurice',
    image: "/images/scraped/allotravaux-12.jpg",
    keywords: ['désherbage naturel jardin', 'désherbage sans produits chimiques', 'alternatives glyphosate jardin', 'mauvaises herbes jardin Lyon', 'désherbage écologique Rhône'],
    content: `
<blockquote class="bg-[#F7F5F0] rounded-xl p-4 my-4 border-l-4 border-[#80BC00] text-[#2F2F2F]">
  <p><strong>À retenir :</strong> Le glyphosate est interdit aux particuliers en France depuis 2019. Mais au-delà de la réglementation, les méthodes naturelles de désherbage sont souvent plus efficaces sur le long terme car elles s'attaquent aux causes (sol tassé, lumière disponible) plutôt qu'aux symptômes.</p>
</blockquote>

<h2>Pourquoi abandonner les herbicides chimiques ?</h2>
<p>En France, l'utilisation du glyphosate et des herbicides de synthèse est interdite aux particuliers depuis le 1er janvier 2019 (Loi Labbé). Au-delà de la réglementation, les raisons d'adopter des alternatives naturelles sont nombreuses : préservation de la vie microbienne du sol, protection des nappes phréatiques, santé des enfants et animaux de compagnie qui jouent dans le jardin, et préservation de la biodiversité.</p>
<p>Léo de LM Espace Vert applique systématiquement des méthodes sans produits chimiques dans les jardins qu'il entretient à Lyon, Caluire, Saint-Didier et toute la région. Voici les 8 techniques qu'il préconise.</p>

<h2>Les 8 techniques de désherbage naturel</h2>

<h3>1. Le paillage : la méthode reine</h3>
<p>Le paillage est la technique la plus efficace et la plus économique de prévention du désherbage. En couvrant le sol d'une couche de matière organique (BRF, copeaux, paille, feuilles mortes) ou minérale (gravillon, pouzzolane), on prive les graines de mauvaises herbes de la lumière nécessaire à leur germination. Un paillage de 8 à 10 cm d'épaisseur réduit le désherbage de 70 à 90 %. Il améliore en prime la structure du sol, limite l'évaporation et apporte de la matière organique.</p>

<h3>2. Le binage mécanique</h3>
<p>Le binage consiste à sectionner les mauvaises herbes juste sous la surface du sol avec une binette ou une houe. Simple et efficace, il fonctionne mieux sur les sols légèrement humides. La règle d'or : "un coup de binage en vaut dix" — plus on bine tôt (mauvaises herbes jeunes), moins elles ont eu le temps de s'enraciner. À pratiquer régulièrement après chaque pluie au printemps et en été.</p>

<h3>3. L'eau bouillante</h3>
<p>Verser de l'eau bouillante directement sur les mauvaises herbes des allées pavées ou dallées détruit les feuilles et les racines superficielles par brûlure thermique. Efficace sur les jeunes pousses dans les joints de dallage, moins efficace sur les plantes à rhizomes profonds (chiendent, liseron). À répéter plusieurs fois de suite pour un effet durable.</p>

<h3>4. Le vinaigre blanc concentré</h3>
<p>Le vinaigre blanc à 14° d'acidité (vinaigre concentré cristal) détruit les feuilles et tiges des mauvaises herbes par acidification. Attention : il est également néfaste pour les plantes souhaitées et peut acidifier les joints calcaires. À utiliser uniquement sur les allées et loin des plantations. Ne pas utiliser les jours de pluie (dilution) ni en plein soleil (risque de brûlure des végétaux voisins).</p>

<h3>5. La désherbeuse thermique (flamme)</h3>
<p>La désherbeuse à gaz propane détruit les mauvaises herbes par choc thermique (80–100 °C appliqués une seconde). Elle est particulièrement efficace sur les allées gravillonnées, les bordures et les espaces pavés. Son efficacité est immédiate mais le traitement doit être répété 2 à 3 fois pour atteindre les racines. À proscrire en période de sécheresse prolongée (risque incendie) et près des paillages secs.</p>

<h3>6. L'arrachage manuel et les outils spécialisés</h3>
<p>L'arrachage manuel reste la méthode la plus précise et la plus radicale pour les mauvaises herbes à racines profondes (pissenlit, chardon). Des outils spécialisés facilitent cette opération : la déplantoir en L pour les racines pivotantes, la griffe pour les mauvaises herbes à rhizomes, la binette oscillante pour les surfaces importantes. Arrachés avant la montée en graines, les adventices ne se ressèment pas.</p>

<h3>7. Les plantes couvre-sol compétitives</h3>
<p>La meilleure façon d'éviter les mauvaises herbes est d'occuper le sol avec des plantes couvre-sol compétitives. Dans les massifs, des plantes comme la pachysandre, la vinca, le bergenia, l'ajuga ou l'heuchera couvrent le sol densément et étouffent la plupart des adventices. C'est la stratégie à long terme la plus efficace et la moins contraignante pour les jardiniers.</p>

<h3>8. L'enherbement de la pelouse</h3>
<p>Dans la pelouse, la meilleure défense contre les "mauvaises herbes" (plantain, pissenlit) est d'avoir un gazon dense et sain qui ne laisse pas d'espace à la concurrence. Un gazon bien tondu (5–6 cm en été), scarifié, fertilisé et arrosé au bon rythme ne laisse pas de place aux adventices. Le regarnissage des zones clairsemées au printemps est souvent plus efficace que le désherbage.</p>

<div class="overflow-x-auto my-6"><table class="w-full text-sm border-collapse">
<thead><tr class="bg-[#80BC00] text-white"><th class="p-2 text-left">Technique</th><th class="p-2 text-left">Efficacité</th><th class="p-2 text-left">Coût</th><th class="p-2 text-left">Zone d'usage</th></tr></thead>
<tbody>
<tr class="border-b"><td class="p-2">Paillage</td><td class="p-2">★★★★★</td><td class="p-2">Faible–moyen</td><td class="p-2">Massifs, potager, pieds d'arbres</td></tr>
<tr class="border-b bg-[#F7F5F0]"><td class="p-2">Binage mécanique</td><td class="p-2">★★★★</td><td class="p-2">Faible</td><td class="p-2">Partout (sol accessible)</td></tr>
<tr class="border-b"><td class="p-2">Eau bouillante</td><td class="p-2">★★★</td><td class="p-2">Nul</td><td class="p-2">Joints, allées dures</td></tr>
<tr class="border-b bg-[#F7F5F0]"><td class="p-2">Vinaigre concentré</td><td class="p-2">★★★</td><td class="p-2">Très faible</td><td class="p-2">Allées uniquement</td></tr>
<tr class="border-b"><td class="p-2">Désherbeuse thermique</td><td class="p-2">★★★★</td><td class="p-2">Moyen</td><td class="p-2">Allées, dallages, bordures</td></tr>
<tr class="border-b bg-[#F7F5F0]"><td class="p-2">Arrachage manuel</td><td class="p-2">★★★★★</td><td class="p-2">Nul (temps)</td><td class="p-2">Partout, mauvaises herbes isolées</td></tr>
<tr class="border-b"><td class="p-2">Couvre-sol compétitifs</td><td class="p-2">★★★★★</td><td class="p-2">Moyen</td><td class="p-2">Massifs, sous-arbres</td></tr>
<tr class="border-b bg-[#F7F5F0]"><td class="p-2">Regarnissage pelouse</td><td class="p-2">★★★★</td><td class="p-2">Faible</td><td class="p-2">Pelouse</td></tr>
</tbody>
</table></div>

<blockquote class="bg-[#F7F5F0] rounded-xl p-4 my-4 border-l-4 border-[#80BC00] text-[#2F2F2F]">
  <p><strong>Le conseil de Léo :</strong> "Dans les jardins que j'entretiens à Lyon, je combine toujours le paillage (prévention) avec le binage mécanique (curatif). Cette combinaison réduit de 80 % le temps de désherbage annuel par rapport à un jardin non paillé. Et les vers de terre adorent les paillages organiques — votre sol s'améliore d'année en année."</p>
</blockquote>

<h2>Un entretien écologique par LM Espace Vert</h2>
<p>LM Espace Vert s'engage dans une démarche d'entretien 100 % sans herbicides chimiques. Nous appliquons ces 8 techniques dans les contrats d'entretien annuels que nous proposons aux particuliers de la région lyonnaise. <a href="/services/entretien-jardin">Découvrez nos prestations d'entretien</a> ou <a href="/devis">demandez un devis gratuit</a> dès aujourd'hui.</p>
    `.trim(),
  },

  {
    slug: 'cloture-brise-vue-jardin-lyon',
    category: 'Travaux',
    title: 'Clôture et brise-vue : sécuriser et embellir votre jardin à Lyon',
    excerpt: 'Palissade bois, brise-vue végétal, clôture aluminium ou occultant PVC : toutes les solutions pour sécuriser votre jardin lyonnais et créer un espace intime et préservé des regards.',
    date: '2026-05-05',
    readingTime: '7 min',
    author: 'Léo Maurice',
    image: "/images/scraped/allotravaux-13.jpg",
    keywords: ['clôture jardin Lyon', 'brise-vue jardin Rhône', 'palissade bois Lyon', 'occultant jardin Lyon', 'clôture paysagère Lyon'],
    content: `
<blockquote class="bg-[#F7F5F0] rounded-xl p-4 my-4 border-l-4 border-[#80BC00] text-[#2F2F2F]">
  <p><strong>À retenir :</strong> Clôture et brise-vue sont complémentaires : la clôture délimite et sécurise, le brise-vue crée l'intimité. En zone péri-urbaine lyonnaise, combiner une clôture légère et un brise-vue végétal est souvent la solution la plus esthétique et la mieux perçue par le voisinage.</p>
</blockquote>

<h2>Clôture ou brise-vue : quelle différence ?</h2>
<p>La clôture est une structure fixe qui délimite une propriété et assure une fonction de sécurité (empêcher l'intrusion, contenir les animaux). Le brise-vue est un dispositif — physique ou végétal — qui interrompt les lignes de vue sans nécessairement délimiter une propriété. Dans les jardins de la région lyonnaise, les deux fonctions sont souvent associées : une clôture légère doublée d'un brise-vue végétal, ou une palissade bois mi-ajourée-mi-pleine.</p>

<h2>Les solutions de clôture pour les jardins lyonnais</h2>

<h3>La palissade en bois : chaleur et naturel</h3>
<p>La palissade en bois (lames verticales en pin traité autoclave, douglas ou robinier) est la solution la plus prisée dans les jardins des Monts d'Or et du plateau ouest lyonnais. Elle s'intègre naturellement dans les jardins plantés, se peint facilement et accepte les plantes grimpantes. Comptez 60 à 120 € par mètre linéaire (fourni posé, avec poteaux métalliques). Durée de vie : 15 à 25 ans selon l'essence.</p>

<h3>La clôture aluminium : durabilité et modernité</h3>
<p>Les systèmes de clôture en aluminium laqué (occultation par lames horizontales ou verticales) sont très demandés pour les jardins contemporains de Dardilly, Limonest ou Champagne-au-Mont-d'Or. L'aluminium ne rouille pas, ne nécessite aucune peinture et se décline dans toutes les teintes (anthracite, blanc, ton bois). Prix : 90 à 180 € par mètre linéaire posé.</p>

<h3>L'occultant PVC sur grillage : économique et rapide</h3>
<p>Pour les solutions rapides et économiques, les lames occultantes PVC ou composite s'insèrent dans un grillage rigide existant. Cette solution est moins esthétique que le bois ou l'aluminium mais très économique (20 à 50 € par mètre linéaire). Elle convient pour les limites de propriété côté fond de parcelle.</p>

<h3>Le mur de clôture maçonné</h3>
<p>Le mur en pierre sèche, en parpaing enduit ou en brique s'impose pour les propriétés nécessitant une clôture solide et définitive. Dans les Monts d'Or, le mur en moellons calcaires locaux est le matériau de référence pour les clôtures historiques. Prix : 200 à 500 € par mètre linéaire selon les matériaux et la hauteur.</p>

<div class="overflow-x-auto my-6"><table class="w-full text-sm border-collapse">
<thead><tr class="bg-[#80BC00] text-white"><th class="p-2 text-left">Type de clôture</th><th class="p-2 text-left">Prix posé (ml)</th><th class="p-2 text-left">Durée de vie</th><th class="p-2 text-left">Style</th></tr></thead>
<tbody>
<tr class="border-b"><td class="p-2">Palissade bois pin traité</td><td class="p-2">60–100 €</td><td class="p-2">15–20 ans</td><td class="p-2">Naturel, polyvalent</td></tr>
<tr class="border-b bg-[#F7F5F0]"><td class="p-2">Palissade Douglas / Robinier</td><td class="p-2">90–150 €</td><td class="p-2">20–30 ans</td><td class="p-2">Naturel premium</td></tr>
<tr class="border-b"><td class="p-2">Aluminium occultant</td><td class="p-2">100–180 €</td><td class="p-2">40+ ans</td><td class="p-2">Contemporain</td></tr>
<tr class="border-b bg-[#F7F5F0]"><td class="p-2">Occultant PVC sur grillage</td><td class="p-2">20–50 €</td><td class="p-2">10–15 ans</td><td class="p-2">Économique</td></tr>
<tr class="border-b"><td class="p-2">Mur maçonné</td><td class="p-2">200–500 €</td><td class="p-2">50+ ans</td><td class="p-2">Classique, solide</td></tr>
</tbody>
</table></div>

<h2>Les brise-vue végétaux : l'option la plus belle</h2>
<p>Le brise-vue végétal est la solution la plus esthétique et la plus durable. Une haie de lauriers-palmes, de thuyas, de photinia ou d'une haie mélangée biodiversifiée crée un écran naturel en 2 à 4 ans tout en offrant ombre, biodiversité et qualité de l'air. Elle se complète souvent d'une clôture légère en période de croissance.</p>
<p>Pour les brise-vue sur terrasse ou balcon, les bacs plantés de bambous (Phyllostachys ou Fargesia), de graminées hautes ou de glycine en pergola créent un espace intime en quelques semaines.</p>

<h2>Réglementation des clôtures à Lyon et dans le Rhône</h2>
<p>La hauteur maximale des clôtures en zone urbaine est généralement régie par le Plan Local d'Urbanisme (PLU) de chaque commune. En règle générale, la hauteur est limitée à 2 m en limite séparative et peut varier selon les zones. Certaines communes du Rhône imposent des matériaux spécifiques dans les zones patrimoniales. LM Espace Vert vérifie systématiquement les règles d'urbanisme locales avant toute pose.</p>

<blockquote class="bg-[#F7F5F0] rounded-xl p-4 my-4 border-l-4 border-[#80BC00] text-[#2F2F2F]">
  <p><strong>Le conseil de Léo :</strong> "Ma recommandation pour les jardins de maisons individuelles en zone péri-urbaine lyonnaise : associez une clôture bois légère (lattes espacées, hauteur 1,2 m) avec une haie de lauriers ou de photinia à l'intérieur. Vous avez la délimitation légale immédiate et un brise-vue naturel et esthétique 3 ans plus tard. C'est le meilleur rapport qualité/esthétique/durabilité."</p>
</blockquote>

<h2>LM Espace Vert réalise vos clôtures et brise-vue</h2>
<p>Léo et son équipe interviennent pour la pose de clôtures, palissades et brise-vue dans toute la zone lyonnaise. De l'étude des règles d'urbanisme à la finition, nous gérons votre projet clé en main. <a href="/devis">Demandez votre devis gratuit</a> — réponse sous 48h.</p>
    `.trim(),
  },

  {
    slug: 'paysagiste-saint-didier-au-mont-dor',
    category: 'Zones',
    title: "Paysagiste à Saint-Didier-au-Mont-d'Or : découvrez LM Espace Vert",
    excerpt: "Saint-Didier-au-Mont-d'Or, commune phare des Monts d'Or lyonnais : LM Espace Vert y est le paysagiste de référence pour la création et l'entretien de jardins. Découvrez nos prestations.",
    date: '2026-05-10',
    readingTime: '6 min',
    author: 'Léo Maurice',
    image: "/images/scraped/allotravaux-14.jpg",
    keywords: ["paysagiste Saint-Didier-au-Mont-d'Or", "jardin Saint-Didier Monts d'Or", 'entretien jardin Saint-Didier', "LM Espace Vert Saint-Didier", 'paysagiste Monts d\'Or'],
    content: `
<blockquote class="bg-[#F7F5F0] rounded-xl p-4 my-4 border-l-4 border-[#80BC00] text-[#2F2F2F]">
  <p><strong>Notre engagement :</strong> LM Espace Vert est votre paysagiste de proximité à Saint-Didier-au-Mont-d'Or. Entreprise locale fondée par Léo Maurice, nous intervenons quotidiennement dans cette commune et ses environs pour créer et entretenir des jardins qui vous ressemblent.</p>
</blockquote>

<h2>Saint-Didier-au-Mont-d'Or : des jardins d'exception dans un cadre naturel remarquable</h2>
<p>Saint-Didier-au-Mont-d'Or est l'une des communes les plus prisées du nord lyonnais. Perchée dans les contreforts des Monts d'Or, à quelques kilomètres seulement du centre de Lyon, elle allie calme verdoyant, panoramas sur les plaines et qualité de vie exceptionnelle. Ses jardins — souvent vastes, en pente, et marqués par les sols calcaires caractéristiques des Monts d'Or — demandent une expertise spécifique que Léo et LM Espace Vert ont développée au fil des années.</p>
<p>LM Espace Vert est basée dans le secteur et travaille quotidiennement à Saint-Didier-au-Mont-d'Or, Saint-Cyr-au-Mont-d'Or, Poleymieux-au-Mont-d'Or, Collonges-au-Mont-d'Or et les communes environnantes. Nous connaissons intimement les spécificités de ces terrains : les sols calcaires superficiels, les fortes pentes, le microclimat particulier des crêtes et les exigences esthétiques des propriétés de cette zone.</p>

<h2>Nos prestations à Saint-Didier-au-Mont-d'Or</h2>

<h3>Création de jardins</h3>
<p>De la conception au suivi de chantier, LM Espace Vert crée des jardins qui s'intègrent harmonieusement dans le paysage des Monts d'Or. Nous maîtrisons les techniques de terrassement en pente, la création de murets de soutènement en pierre locale, la réalisation d'allées et terrasses adaptées aux contraintes topographiques de vos parcelles.</p>
<p>Chaque projet commence par une visite gratuite sur site. Léo étudie votre terrain, votre maison, votre mode de vie et vos goûts pour vous proposer un projet personnalisé qui respecte l'esprit des lieux.</p>

<h3>Entretien de jardin annuel</h3>
<p>LM Espace Vert propose des contrats d'entretien annuels pour les propriétaires de Saint-Didier-au-Mont-d'Or qui souhaitent déléguer la gestion de leur jardin. Ces contrats comprennent : tonte régulière, taille des haies et arbustes, désherbage des massifs, traitement phytosanitaire raisonné, gestion des déchets verts et fertilisation saisonnière.</p>
<p>La fréquence des passages est adaptée à la saison et à la taille du jardin (hebdomadaire en été, bimensuelle hors saison). Nos équipes sont disponibles même pendant vos périodes de vacances pour que vous retrouviez un jardin impeccable à votre retour.</p>

<h3>Taille de haies et élagage</h3>
<p>Les grandes haies de thuyas, de lauriers-palmes et de charmes-houblons qui caractérisent les propriétés de Saint-Didier-au-Mont-d'Or demandent un équipement professionnel (nacelle, perche télescopique, taille-haie thermique). LM Espace Vert dispose du matériel adapté et intervient en toute sécurité pour vos haies hautes.</p>

<h3>Élagage et abattage</h3>
<p>Les arbres de haute tige — chênes, frênes, châtaigniers et merisiers — sont nombreux dans les jardins des Monts d'Or. LM Espace Vert réalise leur élagage sanitaire, leur mise en sécurité et leur abattage si nécessaire, dans le respect de la réglementation et de votre sécurité.</p>

<div class="overflow-x-auto my-6"><table class="w-full text-sm border-collapse">
<thead><tr class="bg-[#80BC00] text-white"><th class="p-2 text-left">Prestation</th><th class="p-2 text-left">Spécificité Saint-Didier</th><th class="p-2 text-left">Période</th></tr></thead>
<tbody>
<tr class="border-b"><td class="p-2">Création de jardin</td><td class="p-2">Maîtrise des pentes calcaires</td><td class="p-2">Toute l'année</td></tr>
<tr class="border-b bg-[#F7F5F0]"><td class="p-2">Entretien annuel</td><td class="p-2">Contrat adapté aux grandes propriétés</td><td class="p-2">Mars–novembre</td></tr>
<tr class="border-b"><td class="p-2">Taille haies hautes</td><td class="p-2">Haies de 3–5 m fréquentes dans le secteur</td><td class="p-2">Juil–août, déc–mars</td></tr>
<tr class="border-b bg-[#F7F5F0]"><td class="p-2">Élagage grands arbres</td><td class="p-2">Chênes et frênes des versants</td><td class="p-2">Hiver–printemps</td></tr>
<tr class="border-b"><td class="p-2">Terrassement en pente</td><td class="p-2">Spécialité LM Espace Vert Monts d'Or</td><td class="p-2">Printemps–automne</td></tr>
</tbody>
</table></div>

<h2>Pourquoi choisir LM Espace Vert à Saint-Didier-au-Mont-d'Or ?</h2>
<ul>
  <li><strong>Proximité</strong> : nous connaissons ce secteur mieux que quiconque — réactivité maximale</li>
  <li><strong>Expertise locale</strong> : sols calcaires, fortes pentes, espèces adaptées aux Monts d'Or</li>
  <li><strong>Devis gratuit</strong> : Léo se déplace personnellement pour évaluer votre projet</li>
  <li><strong>Travail soigné</strong> : finitions impeccables, respect des végétaux en place</li>
  <li><strong>Tarifs transparents</strong> : devis détaillé poste par poste, sans surprise</li>
</ul>

<blockquote class="bg-[#F7F5F0] rounded-xl p-4 my-4 border-l-4 border-[#80BC00] text-[#2F2F2F]">
  <p><strong>Léo vous dit :</strong> "Saint-Didier-au-Mont-d'Or, c'est ma commune de cœur. J'y travaille depuis le début de LM Espace Vert et je connais chaque jardin, chaque contrainte, chaque particularité du secteur. Quand vous faites appel à moi, vous avez un interlocuteur unique qui connaît votre jardin dans le temps — pas un sous-traitant différent à chaque passage."</p>
</blockquote>

<h2>Contactez LM Espace Vert pour votre jardin à Saint-Didier</h2>
<p>Que vous ayez besoin d'un entretien régulier, d'un grand chantier de création ou simplement d'un conseil, Léo est disponible pour vous rencontrer. <a href="/devis">Remplissez le formulaire de devis gratuit</a> ou appelez directement au 06 72 58 73 53. Intervention sous 5 jours ouvrés dans le secteur Saint-Didier-au-Mont-d'Or.</p>
    `.trim(),
  },

  // ─── ARTICLE SAP (Partie 5) ──────────────────────────────────────────────────

  {
    slug: 'credit-impot-jardinage-sap-lyon',
    category: 'Conseils',
    title: 'Crédit d\'impôt jardinage à Lyon : économisez 50% grâce au SAP',
    excerpt: 'Saviez-vous que les prestations de jardinage à domicile ouvrent droit à un crédit d\'impôt de 50 % ? Découvrez comment profiter du dispositif SAP (Service à la Personne) avec LM Espace Vert à Lyon.',
    date: '2026-05-08',
    readingTime: '7 min',
    author: 'Léo Maurice',
    image: "/images/scraped/allotravaux-15.jpg",
    keywords: ['crédit impôt jardinage Lyon', 'SAP jardinage Lyon', 'service à la personne jardinage Rhône', 'avantage fiscal entretien jardin', 'déduction impôt jardinage'],
    content: `
<blockquote class="bg-[#F7F5F0] rounded-xl p-4 my-4 border-l-4 border-[#80BC00] text-[#2F2F2F]">
  <p><strong>À retenir :</strong> Le jardinage à domicile est éligible au crédit d'impôt pour l'emploi à domicile (article 199 sexdecies du CGI). Vous bénéficiez de 50 % du montant des prestations en crédit d'impôt, dans la limite de 12 000 € de dépenses annuelles (soit 6 000 € de crédit d'impôt maximum). Ce dispositif s'applique que vous soyez imposable ou non.</p>
</blockquote>

<h2>Le crédit d'impôt jardinage : qu'est-ce que c'est exactement ?</h2>
<p>Le Service à la Personne (SAP) est un dispositif créé par l'État français pour encourager l'emploi de proximité et aider les particuliers à déléguer certaines tâches du quotidien. Parmi les activités éligibles, le "petit jardinage à domicile" (code NAF 8130Z) permet aux particuliers de bénéficier d'un <strong>crédit d'impôt de 50 % sur les sommes dépensées</strong> pour l'entretien de leur jardin.</p>
<p>Concrètement : si vous dépensez 2 000 € dans l'année pour l'entretien de votre jardin par LM Espace Vert, vous récupérez 1 000 € sous forme de crédit d'impôt sur votre déclaration de revenus. Le coût réel de la prestation n'est donc que de 1 000 €. Ce dispositif s'applique aussi bien aux personnes imposables qu'aux non-imposables (dans ce cas, le crédit est remboursé directement).</p>

<h2>Quelles prestations de jardinage sont éligibles au SAP ?</h2>
<p>Toutes les prestations de jardinage réalisées sur votre résidence principale ou secondaire sont éligibles, à condition qu'elles soient effectuées par une entreprise agréée SAP :</p>
<ul>
  <li>Tonte de pelouse et entretien de gazon</li>
  <li>Taille de haies, arbustes et rosiers</li>
  <li>Désherbage des massifs et allées</li>
  <li>Ramassage de feuilles et nettoyage général du jardin</li>
  <li>Paillage des massifs</li>
  <li>Arrosage et soins des plantes en votre absence</li>
  <li>Taille douce des arbres et arbustes (hors élagage de hauteur)</li>
  <li>Scarification, aération et fertilisation de la pelouse</li>
</ul>

<p>Attention : certaines prestations <strong>ne sont pas éligibles</strong> au crédit d'impôt SAP : la création de jardin (terrassement, plantations initiales), l'élagage de grands arbres (considéré comme travaux), la pose de clôtures, l'installation d'arrosage automatique. Ces travaux peuvent toutefois ouvrir droit à d'autres dispositifs fiscaux (TVA à 10% sur les travaux).</p>

<h2>Les conditions pour bénéficier du crédit d'impôt jardinage</h2>

<h3>Conditions liées au particulier</h3>
<ul>
  <li>La prestation doit être réalisée sur votre <strong>résidence principale ou secondaire</strong> (pas sur un bien locatif si vous n'y habitez pas)</li>
  <li>Vous devez être <strong>domicilié fiscalement en France</strong></li>
  <li>La prestation doit être <strong>payée directement à l'entreprise</strong> (pas de paiement en espèces au-delà de 500 €)</li>
  <li>Vous devez <strong>conserver les factures</strong> en cas de contrôle fiscal (pendant 3 ans)</li>
</ul>

<h3>Conditions liées à l'entreprise prestataire</h3>
<ul>
  <li>L'entreprise doit être <strong>déclarée et agréée en tant qu'organisme de Service à la Personne</strong> auprès de la DREETS (Direction Régionale de l'Économie, de l'Emploi, du Travail et des Solidarités)</li>
  <li>Elle doit vous remettre une <strong>attestation fiscale annuelle</strong> récapitulant le montant des dépenses éligibles (document fourni automatiquement par les entreprises agréées)</li>
</ul>

<div class="overflow-x-auto my-6"><table class="w-full text-sm border-collapse">
<thead><tr class="bg-[#80BC00] text-white"><th class="p-2 text-left">Dépenses annuelles</th><th class="p-2 text-left">Crédit d'impôt (50 %)</th><th class="p-2 text-left">Coût réel</th><th class="p-2 text-left">Économie</th></tr></thead>
<tbody>
<tr class="border-b"><td class="p-2">500 € (petite pelouse)</td><td class="p-2">250 €</td><td class="p-2">250 €</td><td class="p-2">50 %</td></tr>
<tr class="border-b bg-[#F7F5F0]"><td class="p-2">1 200 € (jardin moyen)</td><td class="p-2">600 €</td><td class="p-2">600 €</td><td class="p-2">50 %</td></tr>
<tr class="border-b"><td class="p-2">3 000 € (grand jardin)</td><td class="p-2">1 500 €</td><td class="p-2">1 500 €</td><td class="p-2">50 %</td></tr>
<tr class="border-b bg-[#F7F5F0]"><td class="p-2">6 000 € (propriété)</td><td class="p-2">3 000 €</td><td class="p-2">3 000 €</td><td class="p-2">50 %</td></tr>
<tr class="border-b"><td class="p-2">12 000 € (plafond)</td><td class="p-2">6 000 € (max)</td><td class="p-2">6 000 €</td><td class="p-2">50 %</td></tr>
</tbody>
</table></div>

<h2>Comment déclarer le crédit d'impôt jardinage ?</h2>
<p>La procédure est simple. Chaque année au printemps, LM Espace Vert vous remet une <strong>attestation fiscale</strong> récapitulant le montant total des prestations éligibles SAP réalisées dans l'année. Vous reportez ce montant sur votre déclaration de revenus (formulaire 2042 RICI, case 7DB pour les dépenses de services à la personne). Le calcul du crédit d'impôt est automatique.</p>
<p>Pour les personnes non imposables, le crédit est directement remboursé par le Trésor public lors du traitement de la déclaration de revenus.</p>

<h2>Les plafonds majorés pour certaines situations</h2>
<p>Des plafonds de dépenses majorés s'appliquent dans certaines situations :</p>
<ul>
  <li>Plafond de base : <strong>12 000 €</strong> de dépenses, soit 6 000 € de crédit d'impôt</li>
  <li>Majoration pour une première année de recours au SAP : <strong>+1 000 €</strong> (plafond à 13 000 €)</li>
  <li>Majoration par enfant à charge : <strong>+1 000 €</strong></li>
  <li>Majoration si ascendant de plus de 65 ans dans le foyer : <strong>+1 000 €</strong></li>
  <li>Pour les personnes handicapées ou invalides : plafond porté à <strong>20 000 €</strong></li>
</ul>

<blockquote class="bg-[#F7F5F0] rounded-xl p-4 my-4 border-l-4 border-[#80BC00] text-[#2F2F2F]">
  <p><strong>Le conseil de Léo :</strong> "Beaucoup de nos clients à Lyon ne savent pas qu'ils récupèrent la moitié de ce qu'ils nous paient chaque année ! Je le dis systématiquement lors du premier rendez-vous. C'est souvent ce qui permet de franchir le pas et de confier l'entretien du jardin à un professionnel — le coût réel devient vraiment raisonnable comparé au temps et à la peine économisés."</p>
</blockquote>

<h2>LM Espace Vert est agréé Service à la Personne</h2>
<p>LM Espace Vert est déclarée et agréée en tant qu'organisme de Service à la Personne auprès de la DREETS Auvergne-Rhône-Alpes. Toutes nos prestations d'entretien de jardin chez les particuliers ouvrent donc droit au crédit d'impôt de 50 %. Nous vous remettons automatiquement votre attestation fiscale chaque année en janvier pour votre déclaration de revenus.</p>
<p>Nous intervenons dans tout le département du Rhône et les communes limitrophes : Lyon, Caluire-et-Cuire, Saint-Didier-au-Mont-d'Or, Écully, Tassin-la-Demi-Lune, Francheville, Dardilly, Limonest, Neuville-sur-Saône et bien d'autres.</p>
<p><a href="/devis">Demandez votre devis gratuit</a> et profitez dès cette année du crédit d'impôt jardinage. Léo vous répond personnellement sous 48h.</p>
    `.trim(),
  },
]

export const categories = [...new Set(articles.map((a) => a.category))].sort()
