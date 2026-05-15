export type Article = {
  slug: string
  category: string
  title: string
  excerpt: string
  content: string
  date: string
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
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80',
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
    readingTime: '7 min',
    author: 'Léo Maurice',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
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
<p>LM Espace Vert intervient dans un rayon de 20 km autour de <a href="/secteur/caluire">Caluire-et-Cuire</a>, <a href="/secteur/ecully">Écully</a>, <a href="/secteur/limonest">Limonest</a> et tout le nord-ouest lyonnais. <a href="/devis">Demandez un devis gratuit</a> ou appelez directement au 06 74 73 46 98.</p>

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
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4aaae?w=800&q=80',
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
<p>LM Espace Vert intervient dans un rayon de 20 km autour de <a href="/secteur/caluire">Caluire-et-Cuire</a>, <a href="/secteur/ecully">Écully</a>, <a href="/secteur/limonest">Limonest</a> et tout le nord-ouest lyonnais. <a href="/devis">Demandez un devis gratuit</a> ou appelez directement au 06 74 73 46 98.</p>

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
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80',
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
    readingTime: '6 min',
    author: 'Léo Maurice',
    image: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?w=800&q=80',
    keywords: ['élagage arbres', 'taille arbres fruitiers', 'quand élaguer', 'arboriste Lyon'],
    content: `
<h2>L'élagage : une nécessité pour la santé et la sécurité</h2>
<p>Un arbre mal taillé ou jamais entretenu peut devenir dangereux. Branches mortes, charpentières affaiblies, bois fendu : les risques sont réels, surtout lors des tempêtes qui frappent régulièrement la région lyonnaise.</p>

<h2>Pourquoi élaguer ?</h2>
<ul>
<li><strong>Sécurité</strong> : éliminer les branches susceptibles de tomber sur des personnes ou des biens</li>
<li><strong>Santé</strong> : favoriser la circulation de l'air, limiter les maladies et les parasites</li>
<li><strong>Esthétique</strong> : maintenir un port harmonieux et équilibré</li>
<li><strong>Luminosité</strong> : alléger la couronne pour laisser passer la lumière</li>
</ul>

<h2>Quand intervenir ?</h2>
<p><strong>Arbres à feuilles caduques</strong> : en végétation (mars-octobre) ou en dormance (novembre-février). La taille en dormance est moins stressante pour l'arbre. <strong>Arbres fruitiers</strong> : hors gel, fin d'hiver (janvier-mars) pour les pommiers, poiriers et pêchers. <strong>Résineux</strong> : évitez les fortes chaleurs et les grands froids. Le printemps et l'automne sont idéaux.</p>

<h2>Les coupes à éviter</h2>
<p>L'écimage (coupe des branches maîtresses à mi-longueur) est à proscrire absolument. Cette pratique affaiblit l'arbre, favorise les maladies et crée des repousses anarchiques. Seul un arboriste qualifié doit intervenir sur les grosses branches.</p>

<h2>LM Espace Vert, votre spécialiste de l'élagage</h2>
<p>Notre équipe est formée aux techniques d'élagage raisonné. Nous intervenons en sécurité avec du matériel professionnel dans toute la zone de Saint-Didier-au-Mont-d'Or, Caluire, Neuville-sur-Saône et les communes environnantes.</p>
    `.trim(),
  },
  {
    slug: 'creation-jardin-paysager-etapes',
    category: 'Création de jardins',
    title: "Créer un jardin paysager : les 7 étapes clés d'un beau projet",
    excerpt: "De l'esquisse au chantier, un jardin réussi se construit méthodiquement. Découvrez le processus complet de création d'un espace paysager professionnel.",
    date: '2025-12-10',
    readingTime: '8 min',
    author: 'Léo Maurice',
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4aaae?w=800&q=80',
    keywords: ['création jardin paysager', 'aménagement jardin étapes', 'paysagiste création jardin'],
    content: `
<h2>Un jardin réussi se planifie</h2>
<p>La création d'un jardin ne s'improvise pas. Chez LM Espace Vert, nous suivons un processus rigoureux en 7 étapes pour garantir un résultat à la hauteur de vos attentes.</p>

<h2>Étape 1 : L'analyse du terrain</h2>
<p>Exposition (nord, sud, est, ouest), type de sol (argileux, calcaire, sableux), drainage, relief, ensoleillement, vents dominants… Chaque paramètre influence les choix végétaux et les aménagements.</p>

<h2>Étape 2 : L'écoute de vos besoins</h2>
<p>Jardin de contemplation ou actif ? Potager intégré ? Espace de jeux pour enfants ? Lieu de réception ? Vos usages définissent les zones fonctionnelles.</p>

<h2>Étape 3 : Le plan de composition</h2>
<p>Un plan coté formalise les volumes, les allées, les massifs, les espaces minéraux et les zones de plantation. Il est le contrat visuel entre vous et nous.</p>

<h2>Étape 4 : La sélection végétale</h2>
<p>Nous choisissons des végétaux adaptés à votre sol et à votre climat local, en privilégiant les espèces résistantes aux étés chauds et aux hivers lyonnais.</p>

<h2>Étape 5 : Les travaux de terrassement et de maçonnerie</h2>
<p>Terrasses, allées, dallages, murets : les éléments structurants sont réalisés en premier, avant toute plantation.</p>

<h2>Étape 6 : Les plantations</h2>
<p>Arbres, arbustes, vivaces, gazon — tout est mis en place selon les densités et les saisons recommandées.</p>

<h2>Étape 7 : Le suivi post-plantation</h2>
<p>Un jardin fraîchement créé nécessite un arrosage et un suivi attentifs durant les premières saisons. Nous assurons ce suivi pour garantir la reprise des végétaux.</p>
    `.trim(),
  },
  {
    slug: 'pelouse-entretien-annuel',
    category: 'Entretien',
    title: "Le calendrier complet d'entretien de votre pelouse",
    excerpt: "Tonte, scarification, aération, semis, fertilisation… Chaque mois a ses tâches. Suivez ce calendrier adapté au climat de la région lyonnaise.",
    date: '2025-11-15',
    readingTime: '7 min',
    author: 'Léo Maurice',
    image: 'https://images.unsplash.com/photo-1628352081506-83c43123e54d?w=800&q=80',
    keywords: ['entretien pelouse', 'tonte gazon', 'calendrier pelouse', 'scarification gazon'],
    content: `
<h2>Un programme mensuel pour une pelouse impeccable</h2>
<p>Dans la région de Lyon et du nord Rhône, le climat semi-continental impose un programme d'entretien adapté. Voici notre calendrier professionnel.</p>

<h2>Janvier - Février : Repos et préparation</h2>
<p>Évitez de marcher sur une pelouse gelée. Profitez-en pour affûter et réviser vos outils. Commandez vos semences et engrais.</p>

<h2>Mars : Réveil de la pelouse</h2>
<p>Première tonte haute (6-7 cm). Scarification légère. Semis des zones clairsemées. Premier apport d'engrais de printemps riche en azote.</p>

<h2>Avril - Mai : Pleine croissance</h2>
<p>Tonte régulière toutes les semaines (hauteur 4-5 cm). Arrosage si pas de pluie. Désherbage sélectif des adventices (pissenlits, plantains).</p>

<h2>Juin - Août : Gestion de la chaleur</h2>
<p>Remontez la hauteur de coupe à 6-7 cm pour protéger le sol. Arrosage préférable le matin tôt. Suspension de la fertilisation azotée.</p>

<h2>Septembre - Octobre : La grande remise en état</h2>
<p>C'est <strong>la période la plus importante de l'année</strong> pour la pelouse. Scarification en profondeur, aération mécanique, regarnissage des zones dégarnies, apport d'engrais d'automne riche en potasse et phosphore.</p>

<h2>Novembre - Décembre : Derniers soins</h2>
<p>Dernière tonte avant l'hiver (hauteur 5 cm). Ramassage soigneux des feuilles. Traitement anti-mousse si nécessaire.</p>

<h2>Faire appel à LM Espace Vert</h2>
<p>Nous proposons des contrats d'entretien de pelouse adaptés à vos besoins, de l'intervention ponctuelle au suivi annuel complet. Contactez-nous pour un devis.</p>
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
    image: 'https://images.unsplash.com/photo-1621929747188-0b4dc28498d2?w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1628352081506-83c43123e54d?w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4aaae?w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4aaae?w=800&q=80',
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
    readingTime: '5 min',
    author: 'Léo Maurice',
    image: 'https://images.unsplash.com/photo-1628352081506-83c43123e54d?w=800&q=80',
    keywords: ['gazon rouleaux', 'semis gazon', 'engazonnement', 'créer pelouse'],
    content: `
<h2>Deux méthodes, deux profils</h2>
<p>Le gazon en rouleaux et le semis sont les deux façons principales de créer une pelouse. Le choix dépend de votre budget, du temps que vous pouvez consacrer à l'entretien initial et de vos délais.</p>

<h2>Le gazon en rouleaux</h2>
<p><strong>Avantages :</strong> résultat immédiat (3-4 semaines pour s'enraciner), idéal pour les pentes (le rouleau tient le sol), pelouse plus dense dès le départ, moins d'arrosage nécessaire.<br>
<strong>Inconvénients :</strong> plus cher (3 à 5× plus que le semis), choix limité aux mélanges standards, risque de rejet si le sol n'est pas bien préparé.</p>

<h2>Le semis</h2>
<p><strong>Avantages :</strong> économique, large choix de mélanges (gazon sportif, ombre, fleuri…), meilleure adaptation à long terme.<br>
<strong>Inconvénients :</strong> délai de 6-8 semaines avant une pelouse présentable, arrosage intensif les premières semaines, sensible aux mauvaises herbes en germination.</p>

<h2>La préparation du sol : clé du succès</h2>
<p>Quelle que soit la méthode choisie, la préparation du sol est déterminante : bêchage à 20 cm, élimination des cailloux et racines, apport de sable et de compost, nivellement, tassement léger.</p>

<h2>Les meilleures périodes dans le Rhône</h2>
<p>Septembre-octobre est la période optimale des deux méthodes. Le printemps (mars-avril) est une alternative, mais les chaleurs estivales peuvent stresser le gazon récent.</p>
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
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4aaae?w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4aaae?w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4aaae?w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4aaae?w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4aaae?w=800&q=80',
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
<p>Nous proposons des contrats d'entretien sur mesure pour les particuliers et les professionnels de Saint-Didier-au-Mont-d'Or et dans un rayon de 20 km. Appelez-nous au 06 74 73 46 98 pour une visite gratuite.</p>
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
    image: 'https://images.unsplash.com/photo-1628352081506-83c43123e54d?w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80',
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
  <div class="p-4"><p>Oui. LM Espace Vert assure des interventions d'urgence pour l'élagage et l'abattage après les tempêtes dans toute la commune de Caluire-et-Cuire. Appelez le 06 74 73 46 98 pour une intervention rapide.</p></div>
</details>

<details class="my-4 border border-[#80BC00] rounded-lg overflow-hidden">
  <summary class="bg-[#F7F5F0] p-3 cursor-pointer font-semibold">Quels sont les végétaux à éviter dans les jardins argileux de Caluire ?</summary>
  <div class="p-4"><p>Dans les sols argileux de Caluire, évitez les plantes méditerranéennes sensibles à l'humidité hivernale stagnante (lavande en sol lourd, cistes). Préférez les espèces tolérantes à l'argile : charmes, sureaux, érables, cornus. En cas de doute, consultez LM Espace Vert pour une analyse de votre sol.</p></div>
</details>

<h2>Projets de création à Caluire : nos réalisations</h2>
<p>Parmi nos réalisations récentes à Caluire-et-Cuire, citons la création d'une terrasse en dallage calcaire avec massifs intégrés dans le quartier du Mas-Rillier, la rénovation complète d'un jardin en pente avec terrasses successives dans les Hauteurs de Caluire, et l'installation d'un système d'arrosage automatique connecté pour une propriété du bord de Saône.</p>

<h2>Contactez LM Espace Vert pour votre jardin à Caluire</h2>
<p>Vous habitez Caluire-et-Cuire et souhaitez valoriser votre jardin ? <a href="/devis">Contactez LM Espace Vert</a> au <strong>06 74 73 46 98</strong> pour un devis gratuit. Léo Maurice se déplace dans toute la commune pour évaluer votre projet et vous proposer les solutions les mieux adaptées à votre terrain et à vos envies.</p>
    `.trim(),
  },
  {
    slug: 'paysagiste-ecully',
    category: 'Conseils locaux',
    title: 'Paysagiste à Écully : créer un jardin haut de gamme',
    date: '2026-04-05',
    readingTime: '5 min',
    author: 'Léo Maurice',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
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
<p>Vous êtes propriétaire à Écully et souhaitez sublimer votre extérieur ? LM Espace Vert est votre partenaire idéal. <a href="/devis">Demandez un devis gratuit</a> ou contactez-nous au <strong>06 74 73 46 98</strong> pour une visite sans engagement.</p>
    `.trim(),
  },
  {
    slug: 'entretien-jardin-hiver-lyon',
    category: 'Entretien saisonnier',
    title: 'Entretien jardin en hiver à Lyon : que faire en décembre-janvier ?',
    date: '2026-03-20',
    readingTime: '6 min',
    author: 'Léo Maurice',
    image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=800&q=80',
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
  <div class="p-4"><p>Oui. LM Espace Vert continue ses interventions tout l'hiver dans un rayon de 20 km autour de Saint-Didier-au-Mont-d'Or : Caluire, Écully, Tassin, Dardilly, Champagne, Neuville et communes voisines. Appelez le 06 74 73 46 98 pour programmer une intervention hivernale.</p></div>
</details>

<h2>Confiez votre jardin hivernal à LM Espace Vert</h2>
<p>L'équipe LM Espace Vert continue ses interventions tout l'hiver dans le nord de Lyon. Nous prenons en charge la taille des arbres, la protection des plantes sensibles et les plantations hivernales. <a href="/devis">Demandez un devis gratuit</a> ou contactez-nous au <strong>06 74 73 46 98</strong> pour programmer une intervention.</p>
    `.trim(),
  },
  {
    slug: 'gazon-pelouse-lyon-problemes',
    category: 'Entretien pelouse',
    title: 'Les 7 problèmes de pelouse courants à Lyon et comment les résoudre',
    date: '2026-03-10',
    readingTime: '7 min',
    author: 'Léo Maurice',
    image: 'https://images.unsplash.com/photo-1628352081506-83c43123e54d?w=800&q=80',
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
<p>Vous reconnaissez l'un de ces problèmes dans votre jardin ? LM Espace Vert intervient pour diagnostiquer et traiter les troubles de votre pelouse dans toute la zone de Saint-Didier-au-Mont-d'Or, <a href="/secteur/caluire">Caluire</a>, <a href="/secteur/ecully">Écully</a>, Tassin et les communes voisines. Appelez-nous au <strong>06 74 73 46 98</strong> pour un diagnostic gratuit ou <a href="/devis">demandez un devis en ligne</a>.</p>
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
    image: '/images/realisation-1.jpg',
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
<p>Contactez LM Espace Vert pour votre jardin à Tassin : appelez le <strong>06 74 73 46 98</strong> ou <a href="/devis">demandez un devis gratuit en ligne</a>. Léo Maurice se déplace personnellement pour évaluer votre projet.</p>
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
    image: '/images/realisation-3.jpg',
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
<p>Contactez LM Espace Vert pour vos projets à Dardilly. Appelez le <strong>06 74 73 46 98</strong> ou <a href="/devis">demandez un devis gratuit</a>. Nous nous déplaçons sans engagement pour visiter votre terrain et étudier votre projet.</p>
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
    image: '/images/realisation-5.jpg',
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
<p>Contactez LM Espace Vert pour votre jardin à Champagne-au-Mont-d'Or. Appelez le <strong>06 74 73 46 98</strong> ou <a href="/devis">demandez votre devis gratuit en ligne</a>. Nos équipes interviennent dans toute la commune et les alentours.</p>
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
    image: '/images/entretien-espaces-verts.webp',
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
<p>Confiez la taille de vos haies à LM Espace Vert. <a href="/devis">Demandez un devis gratuit</a> ou appelez le <strong>06 74 73 46 98</strong>. Intervention rapide dans tout le nord et l'ouest lyonnais.</p>
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
    image: '/images/realisation-10.jpg',
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
    image: '/images/realisation-7.jpg',
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
    image: '/images/realisation-4.jpg',
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
    image: '/images/vente-vegetaux.webp',
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
    image: '/images/arrosage-automatique.webp',
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
<p>LM Espace Vert installe vos systèmes d'arrosage automatique et vous conseille sur la gestion de l'eau dans votre jardin. <a href="/devis">Demandez un devis gratuit</a> ou appelez le <strong>06 74 73 46 98</strong>.</p>
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
    image: '/images/travaux-paysagers.webp',
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
<p>LM Espace Vert propose des devis gratuits et transparents pour tous vos projets à Lyon et dans un rayon de 20 km. <a href="/devis">Demandez un devis gratuit en ligne</a> ou appelez le <strong>06 74 73 46 98</strong> — Léo Maurice se déplace personnellement pour évaluer votre projet.</p>
    `.trim(),
  },
]

export const categories = [...new Set(articles.map((a) => a.category))].sort()
