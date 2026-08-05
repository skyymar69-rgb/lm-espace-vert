/**
 * Script de génération du guide PDF "50 conseils pour un jardin impeccable"
 * LM Espace Vert — Paysagiste Saint-Didier-au-Mont-d'Or
 *
 * Run: node scripts/generate-guide-pdf.mjs
 * Output: public/50-conseils-jardin-lm-espace-vert.pdf
 */

import { createWriteStream } from 'fs'
import { resolve, dirname, join } from 'path'
import { fileURLToPath } from 'url'
import React from 'react'
import {
  Document, Page, Text, View, StyleSheet, Font, Image,
  renderToStream,
} from '@react-pdf/renderer'

const __dirname = dirname(fileURLToPath(import.meta.url))
const OUTPUT = resolve(__dirname, '../public/50-conseils-jardin-lm-espace-vert.pdf')

// Fontsource local paths (installed in pnpm store)
const FONT_BASE = resolve(__dirname, '../../../node_modules/.pnpm/@fontsource+montserrat@5.2.8/node_modules/@fontsource/montserrat/files')

// ── Fonts ──────────────────────────────────────────────────────────────────
Font.register({
  family: 'Montserrat',
  fonts: [
    { src: join(FONT_BASE, 'montserrat-latin-400-normal.woff'), fontWeight: 400 },
    { src: join(FONT_BASE, 'montserrat-latin-600-normal.woff'), fontWeight: 600 },
    { src: join(FONT_BASE, 'montserrat-latin-700-normal.woff'), fontWeight: 700 },
    { src: join(FONT_BASE, 'montserrat-latin-800-normal.woff'), fontWeight: 800 },
  ],
})

// ── Palette ────────────────────────────────────────────────────────────────
const C = {
  forestDark: '#243238', forest: '#2E4138', primary: '#4A6320',
  lime: '#749A30', limeLight: '#A8CC6A', limeFaint: '#EDF2E2',
  offWhite: '#F4F1E9', white: '#FFFFFF',
  textDark: '#1C1C1C', textMid: '#3D3D3D', textLight: '#6B7280',
  border: '#E7E2D6', terracotta: '#9E4B47',
}

// ── Styles ─────────────────────────────────────────────────────────────────
const s = StyleSheet.create({
  // paddingBottom réserve l'espace du pied de page fixe → plus aucun texte ne passe dessous.
  page: { fontFamily: 'Montserrat', backgroundColor: C.white, paddingBottom: 52 },
  darkPage: { fontFamily: 'Montserrat', backgroundColor: C.forestDark },

  // Cover
  coverOverlay: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: C.forestDark, opacity: 0.84 },
  coverContent: { flex: 1, paddingHorizontal: 56, paddingTop: 72, paddingBottom: 48, justifyContent: 'space-between' },
  coverBadge: { backgroundColor: C.lime, borderRadius: 20, paddingHorizontal: 14, paddingVertical: 5, alignSelf: 'flex-start', marginBottom: 22 },
  coverBadgeText: { color: C.forestDark, fontSize: 9, fontWeight: 700, letterSpacing: 1.5 },
  coverEyebrow: { color: C.limeLight, fontSize: 11, fontWeight: 600, letterSpacing: 3, marginBottom: 14 },
  coverNumber: { color: C.lime, fontSize: 108, fontWeight: 800, lineHeight: 1, marginBottom: -6 },
  coverTitle: { color: C.white, fontSize: 30, fontWeight: 800, lineHeight: 1.2, marginBottom: 18 },
  coverDivider: { height: 3, backgroundColor: C.lime, width: 56, marginVertical: 20, borderRadius: 2 },
  coverSubtitle: { color: 'rgba(255,255,255,0.72)', fontSize: 13, fontWeight: 400, lineHeight: 1.65, maxWidth: 370 },
  coverAuthorRow: { flexDirection: 'row', alignItems: 'center', gap: 14 },
  coverAvatarBox: { width: 50, height: 50, borderRadius: 25, backgroundColor: C.lime, alignItems: 'center', justifyContent: 'center' },
  coverAvatarText: { color: C.forestDark, fontSize: 20, fontWeight: 800 },
  coverAuthorName: { color: C.white, fontSize: 13, fontWeight: 700 },
  coverAuthorRole: { color: 'rgba(255,255,255,0.55)', fontSize: 10 },
  coverFooter: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', borderTopWidth: 1, borderTopColor: 'rgba(255,255,255,0.15)', paddingTop: 18 },
  coverFooterText: { color: 'rgba(255,255,255,0.45)', fontSize: 9 },
  coverSeal: { backgroundColor: 'rgba(128,188,0,0.15)', borderWidth: 1, borderColor: C.lime, borderRadius: 8, paddingHorizontal: 12, paddingVertical: 7, alignItems: 'center' },
  coverSealText: { color: C.lime, fontSize: 9, fontWeight: 700 },
  coverSealSub: { color: 'rgba(255,255,255,0.5)', fontSize: 8 },

  // TOC
  tocHeader: { backgroundColor: C.forestDark, paddingHorizontal: 56, paddingVertical: 42, marginBottom: 28 },
  tocHeaderEyebrow: { color: C.lime, fontSize: 10, fontWeight: 700, letterSpacing: 2.5, marginBottom: 7 },
  tocHeaderTitle: { color: C.white, fontSize: 22, fontWeight: 800 },
  tocBody: { paddingHorizontal: 56 },
  tocRow: { flexDirection: 'row', alignItems: 'center', paddingVertical: 8, borderBottomWidth: 1, borderBottomColor: C.border },
  tocDot: { width: 8, height: 8, borderRadius: 4, backgroundColor: C.lime, marginRight: 12 },
  tocRowText: { flex: 1, color: C.textMid, fontSize: 11 },
  tocRowNum: { color: C.lime, fontSize: 11, fontWeight: 700 },

  // Header/Footer
  pageHeader: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 40, paddingTop: 22, paddingBottom: 10, borderBottomWidth: 1, borderBottomColor: C.border, marginBottom: 26 },
  pageHeaderLogo: { color: C.primary, fontSize: 10, fontWeight: 700 },
  pageHeaderTitle: { color: C.textLight, fontSize: 9 },
  pageHeaderPage: { color: C.lime, fontSize: 9, fontWeight: 700 },
  pageFooter: { position: 'absolute', bottom: 0, left: 0, right: 0, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 40, paddingVertical: 12, borderTopWidth: 1, borderTopColor: C.border, backgroundColor: C.white },
  pageFooterText: { color: C.textLight, fontSize: 8 },
  pageFooterWeb: { color: C.lime, fontSize: 8, fontWeight: 600 },

  // Section header
  sectionHdr: { marginHorizontal: 40, marginBottom: 18, borderRadius: 10, padding: 20 },
  sectionEyebrow: { color: 'rgba(255,255,255,0.65)', fontSize: 9, fontWeight: 600, letterSpacing: 2, marginBottom: 3 },
  sectionTitle: { color: C.white, fontSize: 20, fontWeight: 800 },
  sectionSub: { color: 'rgba(255,255,255,0.7)', fontSize: 10, marginTop: 3 },

  // Cards
  cards: { flexDirection: 'row', flexWrap: 'wrap', gap: 13, paddingHorizontal: 40, marginBottom: 13 },
  card: { width: '47%', borderRadius: 9, padding: 15, borderLeftWidth: 3, borderLeftColor: C.lime, borderTopWidth: 1, borderRightWidth: 1, borderBottomWidth: 1, borderTopColor: C.border, borderRightColor: C.border, borderBottomColor: C.border },
  cardNum: { color: C.lime, fontSize: 21, fontWeight: 800, lineHeight: 1, marginBottom: 5 },
  cardTitle: { color: C.primary, fontSize: 11, fontWeight: 700, marginBottom: 5, lineHeight: 1.3 },
  cardBody: { color: C.textMid, fontSize: 9.5, lineHeight: 1.65 },
  cardTag: { marginTop: 7, alignSelf: 'flex-start', backgroundColor: C.limeFaint, borderRadius: 9, paddingHorizontal: 7, paddingVertical: 2 },
  cardTagText: { color: C.primary, fontSize: 8, fontWeight: 600 },

  // Pro tip
  proTip: { marginHorizontal: 40, marginBottom: 13, borderRadius: 9, backgroundColor: C.limeFaint, padding: 14, flexDirection: 'row', gap: 11, alignItems: 'flex-start' },
  proTipIcon: { width: 26, height: 26, borderRadius: 13, backgroundColor: C.lime, alignItems: 'center', justifyContent: 'center', flexShrink: 0 },
  proTipIconText: { color: C.forestDark, fontSize: 13 },
  proTipLabel: { color: C.primary, fontSize: 9, fontWeight: 700, letterSpacing: 1.5, marginBottom: 3 },
  proTipText: { color: C.textMid, fontSize: 9.5, lineHeight: 1.6 },

  // Warning
  warningBox: { marginHorizontal: 40, marginBottom: 13, borderRadius: 9, backgroundColor: '#FEF3C7', borderWidth: 1, borderColor: '#F59E0B', padding: 13 },
  warningLabel: { color: '#B45309', fontSize: 9, fontWeight: 700, marginBottom: 2 },
  warningText: { color: '#92400E', fontSize: 9.5, lineHeight: 1.6 },

  // Checklist
  checkRow: { flexDirection: 'row', alignItems: 'flex-start', gap: 7, marginBottom: 5, paddingHorizontal: 40 },
  checkBox: { width: 13, height: 13, borderRadius: 3, backgroundColor: C.lime, alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 },
  checkMark: { color: C.white, fontSize: 7, fontWeight: 700 },
  checkText: { color: C.textMid, fontSize: 9.5, lineHeight: 1.6, flex: 1 },

  // Back page
  backContent: { flex: 1, paddingHorizontal: 56, paddingVertical: 56, justifyContent: 'space-between' },
  backTitle: { color: C.white, fontSize: 26, fontWeight: 800, marginBottom: 10 },
  backSub: { color: 'rgba(255,255,255,0.7)', fontSize: 12, lineHeight: 1.7, marginBottom: 28 },
  backContactGrid: { flexDirection: 'row', gap: 16, marginBottom: 28 },
  backContactCard: { flex: 1, backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: 9, padding: 16, borderWidth: 1, borderColor: 'rgba(255,255,255,0.1)' },
  backContactLabel: { color: C.lime, fontSize: 9, fontWeight: 700, letterSpacing: 1.5, marginBottom: 5 },
  backContactValue: { color: C.white, fontSize: 11, fontWeight: 600 },
  backContactSub: { color: 'rgba(255,255,255,0.45)', fontSize: 8, marginTop: 2 },
  backCta: { backgroundColor: C.terracotta, borderRadius: 28, paddingVertical: 15, alignItems: 'center', marginBottom: 28 },
  backCtaText: { color: C.white, fontSize: 13, fontWeight: 800 },
  backCtaSub: { color: 'rgba(255,255,255,0.8)', fontSize: 9.5, marginTop: 2 },
  backBadgeRow: { flexDirection: 'row', gap: 14, marginBottom: 22 },
  backBadge: { flex: 1, backgroundColor: 'rgba(128,188,0,0.12)', borderRadius: 8, padding: 11, borderWidth: 1, borderColor: 'rgba(128,188,0,0.28)' },
  backBadgeIcon: { color: C.lime, fontSize: 15, marginBottom: 4 },
  backBadgeLabel: { color: C.white, fontSize: 8.5, fontWeight: 700, marginBottom: 1 },
  backBadgeSub: { color: 'rgba(255,255,255,0.45)', fontSize: 7.5 },
  backLegal: { borderTopWidth: 1, borderTopColor: 'rgba(255,255,255,0.1)', paddingTop: 18 },
  backLegalText: { color: 'rgba(255,255,255,0.3)', fontSize: 7.5, lineHeight: 1.7 },
})

// ── Data ──────────────────────────────────────────────────────────────────
const SECTIONS = [
  {
    id: 'printemps', label: 'SAISON 1', title: 'Printemps', subtitle: 'Mars – Mai  •  Le réveil du jardin',
    bg: '#1A5C3F', conseilStart: 1,
    conseils: [
      { titre: 'Nettoyez avant de planter', corps: "Ramassez feuilles mortes, mousses et débris hivernaux. Un sol propre prévient les maladies fongiques et favorise l'aération racinaire dès les premières chaleurs.", tag: 'Nettoyage' },
      { titre: "Taillez les rosiers en mars", corps: "Attendez que les bourgeons gonflent. Coupez à 45° au-dessus d'un œil extérieur, en laissant 3-5 tiges saines. Désinfectez le sécateur entre chaque rosier.", tag: 'Taille' },
      { titre: 'Divisez les vivaces', corps: "Avril est idéal pour diviser hostas, achillées et graminées. Détachez des touffes de la taille d'un poing, replantez aussitôt et arrosez copieusement. La division régénère les plantes épuisées.", tag: 'Plantation' },
      { titre: 'Scarifiez la pelouse', corps: "Passez le scarificateur mi-mars sur sol ressuyé en deux directions croisées. Votre gazon respirera mieux et absorbera engrais et eau plus efficacement.", tag: 'Pelouse' },
      { titre: "Apportez l'engrais de fond", corps: "Épandez un engrais NPK équilibré (15-15-15) début avril, par temps couvert. Évitez gel et forte chaleur. Arrosez après l'épandage pour activer la minéralisation.", tag: 'Fertilisation' },
      { titre: 'Resemez les zones chauve', corps: "Griffez légèrement le sol, semez un mélange adapté à 30 g/m², tassez avec un rouleau. Maintenez humide 3 semaines. Mi-mars à mi-avril = période optimale.", tag: 'Pelouse' },
      { titre: 'Traitez les fourmilières', corps: "Au printemps les fourmis envahissent gazon et massifs. Utilisez un produit certifié Ecocert ou versez de l'eau bouillante. Répétez après 10 jours si nécessaire.", tag: 'Traitement' },
      { titre: 'Installez un paillage frais', corps: "Disposez 7-10 cm de paillis de bois (BRF, écorces) autour des arbustes en avril. Laissez 5 cm libres autour du collet. Le paillage réduit l'arrosage de 40 % et freine les adventices.", tag: 'Paillage' },
      { titre: 'Plantez les annuelles en mai', corps: "Après les saints de glace (11-13 mai), installez impatientes, pétunias, géraniums. Enrichissez de compost. Arrosez au pied, jamais sur le feuillage, pour prévenir l'oïdium.", tag: 'Plantation' },
      { titre: "Vérifiez l'arrosage automatique", corps: "Ouvrez les vannes prudemment, repérez fuites et buses bouchées. Nettoyez les filtres à l'acide citrique dilué. Un arrosage mal réglé gaspille jusqu'à 30 % d'eau.", tag: 'Arrosage' },
      { titre: 'Taillez les haies au réveil', corps: "Attendez fin mai pour respecter les nids. Taillez au-dessus de la dernière pousse verte. Une haie en trapèze (base plus large) reçoit davantage de lumière et se garnit mieux.", tag: 'Taille' },
      { titre: 'Préparez bacs et jardinières', corps: "Changez la moitié du terreau. Ajoutez argile expansée pour le drainage. Incorporez des billes de rétention d'eau si vous êtes souvent absent.", tag: 'Potager' },
    ],
  },
  {
    id: 'ete', label: 'SAISON 2', title: 'Été', subtitle: 'Juin – Août  •  Protéger & entretenir',
    bg: '#7C4008', conseilStart: 13,
    conseils: [
      { titre: 'Arrosez tôt le matin ou le soir', corps: "L'évapotranspiration est maximale de 10h à 16h. Arroser en dehors de ces créneaux divise les pertes par 3. Privilégiez l'arrosage à la base — feuillage sec = moins de maladies.", tag: 'Arrosage' },
      { titre: 'Relevez la hauteur de coupe', corps: "En été, tondez à 6-7 cm au lieu de 4-5 cm. Les brins plus longs font de l'ombre aux racines, réduisent le stress hydrique et gardent la pelouse verte lors des canicules.", tag: 'Pelouse' },
      { titre: 'Pincez les tomates', corps: "Retirez les gourmands (pousses axillaires) chaque semaine. Pour les courgettes, pincez l'extrémité des tiges après 5-6 fruits pour concentrer l'énergie sur les fruits déjà formés.", tag: 'Potager' },
      { titre: 'Tuteurez les vivaces hautes', corps: "Delphinium, achillée, rudbeckia s'inclinent sous leur propre poids. Installez tuteurs bambou ou anneaux de maintien. Attachez à la raphia naturelle pour ne pas étrangler les tiges.", tag: 'Entretien' },
      { titre: 'Désherbez chaque semaine', corps: "Un désherbage hebdomadaire empêche les adventices de monter en graines. Utilisez une binette par temps chaud et sec : les mauvaises herbes coupées dessèchent sur place.", tag: 'Désherbage' },
      { titre: 'Traitez la chlorose', corps: "Feuilles jaunes à nervures vertes = carence en fer. Appliquez du chélate de fer en arrosage ou foliaire. Vérifiez le pH : un sol trop calcaire bloque l'assimilation du fer.", tag: 'Traitement' },
      { titre: 'Récupérez les eaux de pluie', corps: "Connectez un récupérateur (500-1000 L) à vos gouttières. L'eau de pluie est douce, non calcaire, idéale pour les acidophiles. Elle peut couvrir 50 % de vos besoins d'arrosage.", tag: 'Arrosage' },
      { titre: 'Supprimez les fleurs fanées', corps: "L'efflorescence (deadheading) prolonge la floraison en empêchant la formation de graines. Coupez au-dessus de la première feuille saine sous la fleur. Rosiers, dahlias, lavandes y répondent particulièrement bien.", tag: 'Entretien' },
      { titre: 'Protégez les jeunes plants', corps: "Les plants de moins d'un an souffrent davantage. Installez une ombrière 30 % aux heures les plus chaudes. Augmentez la fréquence d'arrosage et paillez généreusement le pied.", tag: 'Plantation' },
      { titre: 'Taillez les haies persistantes', corps: "Juin est la dernière fenêtre pour une taille sévère du laurier, photinia et troène. Après juillet, toute taille importante stresse la plante pendant la canicule.", tag: 'Taille' },
      { titre: 'Fertilisez en mi-saison', corps: "En juillet, apportez un engrais liquide riche en potasse (0-0-30) aux tomates et fruitiers. La potasse renforce la résistance à la sécheresse et améliore le goût des fruits.", tag: 'Fertilisation' },
      { titre: 'Inspectez les nuisibles', corps: "Passez 10 minutes par semaine à inspecter le dessous des feuilles (pucerons, araignées rouges). Intervenez dès les premiers signes avec savon noir dilué à 2 % : efficace et non toxique.", tag: 'Traitement' },
    ],
  },
  {
    id: 'automne', label: 'SAISON 3', title: 'Automne', subtitle: "Septembre – Novembre  •  Préparer l'hiver",
    bg: '#6B2D0C', conseilStart: 25,
    conseils: [
      { titre: 'Resemez la pelouse', corps: "Mi-août à mi-octobre : période dorée pour le semis ou sursemis. Le sol encore chaud favorise la germination, et les pluies d'automne réduisent l'arrosage nécessaire.", tag: 'Pelouse' },
      { titre: "Plantez les bulbes d'automne", corps: "Tulipes, jonquilles, jacinthes : plantez de septembre à novembre, pointe vers le haut, à 3 fois le diamètre en profondeur. Mélangez sable et compost pour drainer.", tag: 'Plantation' },
      { titre: 'Composez les feuilles mortes', corps: "Ne brûlez pas les feuilles ! Constituez un tas humide sur 60 cm (terreau en 18 mois) ou broyez-les en mulch direct sur gazon avec la tondeuse. Valeur fertilisante élevée.", tag: 'Compostage' },
      { titre: 'Rentrez les plantes frileuses', corps: "Avant les premières gelées (-2°C la nuit), rentrez bananiers, bougainvillées, agapanthes. Réduisez l'arrosage à 1 fois/mois. Stockez en cave froide (5-10°C) et non lumineuse.", tag: 'Hivernage' },
      { titre: 'Taillez les arbres fruitiers', corps: "Après la chute complète des feuilles (novembre), taillez pommiers et poiriers. Supprimez bois mort, branches croisées et gourmands. Appliquez cicatrisant sur les plaies de coupe.", tag: 'Taille' },
      { titre: "Drainisez les zones gorgées d'eau", corps: "Les zones qui stagnent en hiver signalent un sol compacté. Aérez au croc, incorporez du sable grossier. Pour les cas sévères, un drain perforé enterré à 40 cm résout le problème définitivement.", tag: 'Sol' },
      { titre: "Enrichissez le sol avant l'hiver", corps: "Incorporez fumier décomposé ou compost mûr (3-5 L/m²) dans les massifs en octobre. Les gelées fragmenteront les mottes, et le printemps trouvera un sol riche en humus.", tag: 'Fertilisation' },
      { titre: 'Protégez les plantes sensibles', corps: "Enveloppez palmiers et agaves de toile de jute. Paillez généreusement le pied (15-20 cm) avec paille, feuilles ou BRF pour isoler les racines du gel.", tag: 'Hivernage' },
      { titre: "Coupez l'eau de l'arrosage auto.", corps: "Avant le premier gel, vidangez tuyaux et arroseurs. Soufflez les canalisations à l'air comprimé. Les têtes d'arroseur gelées et explosées représentent la réparation la plus coûteuse de l'hiver.", tag: 'Arrosage' },
      { titre: 'Taillez les graminées ornementales', corps: "Attendez mars pour les miscanthus — leur silhouette hivernale est décorative et protège le cœur. Les carex et festuca persistants ne se taillent pas, on retire seulement les feuilles sèches.", tag: 'Taille' },
      { titre: "Nettoyez et rangez l'outillage", corps: "Huilez les lames, affûtez sécateurs et cisailles. Un outil bien entretenu dure 10 fois plus longtemps. Videz les tondeuses d'essence si stockage de plus de 30 jours.", tag: 'Matériel' },
      { titre: 'Semez les engrais verts', corps: "Phacélie, moutarde, trèfle incarnat : semez en septembre sur potagers vidés. Ces plantes protègent le sol de l'érosion et restituent de l'azote lors de leur enfouissement au printemps.", tag: 'Potager' },
    ],
  },
  {
    id: 'hiver', label: 'SAISON 4', title: 'Hiver', subtitle: 'Décembre – Février  •  Repos et planification',
    bg: '#1A3A5C', conseilStart: 37,
    conseils: [
      { titre: 'Planifiez vos travaux de printemps', corps: "Commandez vos semences en janvier-février, dessinez l'implantation des massifs, chiffrez vos projets. Les commandes anticipées évitent les ruptures de stock de variétés rares.", tag: 'Planification' },
      { titre: "Traitez à l'huile de dormance", corps: "Sur fruitiers et rosiers, appliquez une huile d'hiver entre décembre et février (hors gel). Ce traitement asphyxie les œufs d'insectes et spores fongiques hivernants.", tag: 'Traitement' },
      { titre: 'Entretenez vos outils motorisés', corps: "Janvier : rares files d'attente chez le réparateur. Changez bougies, filtres à air, courroie de transmission. Affûtez la lame : 0 déchirure d'herbe au printemps.", tag: 'Matériel' },
      { titre: 'Retournez votre tas de compost', corps: "Aérez le compost à la fourche pour apporter l'oxygène indispensable à la décomposition. Si la température interne ne monte pas, ajoutez matière azotée (tontes, épluchures) et humidifiez.", tag: 'Compostage' },
      { titre: 'Protégez les plantes en pot du gel', corps: "Les pots perdent leur chaleur par les parois. Enveloppez-les de toile de jute ou polystyrène. Surélevez-les avec des cales pour assurer le drainage et éviter les racines gelées.", tag: 'Hivernage' },
      { titre: 'Taillez les arbres caducs', corps: "Décembre-février : idéal pour tailler hêtres, chênes, érables et charmes. La sève n'est pas montée, les cicatrisations seront parfaites. Visualisez la charpente avant de couper.", tag: 'Taille' },
      { titre: 'Semez sous abri en février', corps: "Tomates, poivrons et aubergines nécessitent 10-12 semaines avant repiquage. Semez en alvéoles sous châssis chauffant (18-22°C) dès mi-février. Terreau léger, arrosage modéré.", tag: 'Potager' },
      { titre: 'Nourrissez les oiseaux du jardin', corps: "Mangeoires et nichoirs : les mésanges et rouges-gorges consomment des milliers d'insectes nuisibles de mars à septembre. Un jardin accueillant les oiseaux se traite 30 % moins.", tag: 'Biodiversité' },
      { titre: 'Calcez les sols acides', corps: "Hiver est la meilleure fenêtre pour un apport de calcaire sur sols trop acides (pH < 6). La pluie dilue progressivement le produit. Faites un test pH (5 €) pour doser précisément.", tag: 'Sol' },
      { titre: 'Inspectez après les tempêtes', corps: "Après chaque épisode venteux, repérez les branches cassées en suspension (branches 'pendantes') et inclinations anormales. Signalez-les à un élagueur avant qu'elles ne tombent.", tag: 'Sécurité' },
    ],
  },
  {
    id: 'annee', label: "TOUTE L'ANNÉE", title: 'Les essentiels', subtitle: '12 mois sur 12  •  Gestes fondamentaux',
    bg: '#425D07', conseilStart: 47,
    conseils: [
      { titre: 'Testez votre sol tous les 3 ans', corps: "Un test de sol complet (pH, NPK, matière organique, 20-30 €) oriente 3 ans de fertilisation. Vous évitez les surdoses coûteuses et les carences invisibles qui freinent la croissance.", tag: 'Sol' },
      { titre: 'Adoptez le paillage permanent', corps: "Garder le sol couvert 12 mois sur 12 est le geste n°1 du jardinier professionnel. Moins d'arrosage, moins de désherbage, sol vivant riche en vers de terre. Alternez BRF, paille et compost.", tag: 'Paillage' },
      { titre: 'Tenez un carnet de jardin', corps: "Notez dates de floraison, interventions, réussites et échecs. Un carnet de 2 ans est votre meilleur outil d'amélioration. Photos datées pour comparer d'une saison à l'autre.", tag: 'Méthode' },
      { titre: 'Faites appel à un professionnel', corps: "Élagage en hauteur, abattage, raccordement d'arrosage automatique nécessitent une habilitation professionnelle. Un paysagiste certifié applique les techniques conformes aux normes pour des arbres en bonne santé.", tag: 'Sécurité' },
    ],
  },
]

// ── Helpers ────────────────────────────────────────────────────────────────
const e = React.createElement
const T = (style, children, key) => e(Text, { style, key }, children)
const V = (style, children, key, extra = {}) => e(View, { style, key, ...extra }, children)

function PageHeader({ title, pageNum }) {
  return e(View, { style: s.pageHeader, fixed: true }, [
    T(s.pageHeaderLogo, 'LM ESPACE VERT', 'l'),
    T(s.pageHeaderTitle, title, 't'),
    T(s.pageHeaderPage, pageNum, 'p'),
  ])
}

function PageFooter() {
  return e(View, { style: s.pageFooter, fixed: true }, [
    T(s.pageFooterText, '© 2026 LM Espace Vert — Paysagiste Saint-Didier-au-Mont-d\'Or', 'l'),
    T(s.pageFooterWeb, 'www.lm-espace-vert.fr', 'w'),
    T(s.pageFooterText, '+33 6 72 58 73 53', 'r'),
  ])
}

function ConseilCard({ n, conseil }) {
  const num = String(n).padStart(2, '0')
  return V(s.card, [
    T(s.cardNum, num, 'n'),
    T(s.cardTitle, conseil.titre, 't'),
    T(s.cardBody, conseil.corps, 'b'),
    V(s.cardTag, T(s.cardTagText, conseil.tag, 'tt'), 'tg'),
  ], `c${n}`)
}

// ── Document ───────────────────────────────────────────────────────────────
function GuidePDF() {
  const coverPage = e(Page, { size: 'A4', style: s.darkPage, key: 'cover' }, [
    e(Image, {
      key: 'bg',
      src: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=595&h=842&fit=crop&q=80',
      style: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 },
    }),
    V({ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: C.forestDark, opacity: 0.84 }, null, 'ov'),
    V(s.coverContent, [
      V({}, [
        V(s.coverBadge, T(s.coverBadgeText, 'GUIDE PROFESSIONNEL  •  ÉDITION 2026', 'bt'), 'badge'),
        T(s.coverEyebrow, 'LM Espace Vert — Paysagiste Lyon Nord', 'ey'),
        T(s.coverNumber, '50', 'num'),
        T(s.coverTitle, 'Conseils pour un\njardin impeccable\ntoute l\'année', 'ttl'),
        V(s.coverDivider, null, 'div'),
        T(s.coverSubtitle, 'Entretien · Taille · Arrosage · Engazonnement · Plantation\nLes conseils de terrain d\'un paysagiste professionnel — gratuit, sans inscription.', 'sub'),
      ], 'top'),
      V({}, [
        V(s.coverAuthorRow, [
          V(s.coverAvatarBox, T(s.coverAvatarText, 'L', 'al'), 'av'),
          V({}, [
            T(s.coverAuthorName, 'Léo Maurice', 'an'),
            T(s.coverAuthorRole, 'Fondateur & Paysagiste — LM Espace Vert', 'ar'),
          ], 'ainfo'),
        ], 'arow'),
        V({ height: 22 }, null, 'sp'),
        V(s.coverFooter, [
          V({}, [
            T(s.coverFooterText, 'www.lm-espace-vert.fr', 'cf1'),
            T(s.coverFooterText, 'contact@lm-espace-vert.fr', 'cf2'),
            T(s.coverFooterText, '06 72 58 73 53', 'cf3'),
          ], 'cfl'),
          V(s.coverSeal, [
            T(s.coverSealText, '✓ AGRÉÉ SAP', 'st'),
            T(s.coverSealSub, "Crédit d'impôt 50 %", 'ss'),
          ], 'seal'),
        ], 'cfooter'),
      ], 'bottom'),
    ], 'content'),
  ])

  const tocPage = e(Page, { size: 'A4', style: s.page, key: 'toc' }, [
    V(s.tocHeader, [
      T(s.tocHeaderEyebrow, 'SOMMAIRE', 'te'),
      T(s.tocHeaderTitle, '50 conseils — 4 saisons + essentiels', 'tt'),
    ], 'th'),
    V(s.tocBody, [
      ...[
        { num: '01 → 12', label: '🌱 Printemps (mars – mai) — Le réveil du jardin' },
        { num: '13 → 24', label: '☀️ Été (juin – août) — Protéger & entretenir' },
        { num: '25 → 36', label: "🍂 Automne (sept. – nov.) — Préparer l'hiver" },
        { num: '37 → 46', label: '❄️ Hiver (déc. – fév.) — Repos et planification' },
        { num: '47 → 50', label: '🌿 Essentiels — 12 mois sur 12' },
      ].map((row, i) =>
        V(s.tocRow, [
          V(s.tocDot, null, 'd'),
          T(s.tocRowText, row.label, 't'),
          T(s.tocRowNum, row.num, 'n'),
        ], `tr${i}`)
      ),
      V({ height: 28 }, null, 'sp1'),
      V(s.proTip, [
        V(s.proTipIcon, T(s.proTipIconText, '✦', 'pi'), 'piv'),
        V({ flex: 1 }, [
          T(s.proTipLabel, 'MOT DU PAYSAGISTE', 'pl'),
          T(s.proTipText,
            "Après plusieurs années à entretenir des jardins dans les Monts d'Or lyonnais, j'ai rassemblé dans ce guide les gestes qui font vraiment la différence entre un jardin \"passable\" et un jardin \"impeccable\". Chaque conseil est tiré de situations réelles, testées chez mes clients. Bonne lecture !\n\n— Léo Maurice, fondateur LM Espace Vert",
            'pt'),
        ], 'ptxt'),
      ], 'ptip'),
      V({ height: 18 }, null, 'sp2'),
      V(s.warningBox, [
        T(s.warningLabel, '⚠  IMPORTANT', 'wl'),
        T(s.warningText, "Certains travaux (élagage en hauteur, abattage, raccordement arrosage automatique) nécessitent un professionnel qualifié. Ne prenez aucun risque avec les arbres proches des réseaux ou des bâtiments. LM Espace Vert intervient rapidement sur Lyon nord — 06 72 58 73 53.", 'wt'),
      ], 'warn'),
    ], 'tb'),
    PageFooter(),
  ])

  const sectionPages = SECTIONS.map((section) => {
    const pairs = []
    for (let i = 0; i < section.conseils.length; i += 2) {
      pairs.push([section.conseils[i], section.conseils[i + 1] ?? null])
    }
    const last = section.conseilStart + section.conseils.length - 1

    return e(Page, { size: 'A4', style: s.page, key: section.id }, [
      PageHeader({ title: '50 Conseils — Guide jardin', pageNum: `Conseils ${section.conseilStart} → ${last}` }),
      V([s.sectionHdr, { backgroundColor: section.bg }], [
        T(s.sectionEyebrow, section.label, 'le'),
        T(s.sectionTitle, section.title, 'lt'),
        T(s.sectionSub, section.subtitle, 'ls'),
      ], 'sh'),
      ...pairs.map((pair, pi) =>
        V([s.cards], [
          ConseilCard({ n: section.conseilStart + pi * 2, conseil: pair[0] }),
          pair[1] ? ConseilCard({ n: section.conseilStart + pi * 2 + 1, conseil: pair[1] }) : null,
        ].filter(Boolean), `p${pi}`, { wrap: false })
      ),
      PageFooter(),
    ])
  })

  const checklistSections = [
    { label: '🌱 PRINTEMPS', items: ['Nettoyage général (déchets hivernaux, mousses)', 'Taille des rosiers (mars, avant débourrement)', 'Scarification pelouse + engrais de fond', 'Rempotage et remplacement du terreau des jardinières', "Vérification et remise en marche de l'arrosage automatique", 'Semis annuelles en intérieur puis repiquage après saints de glace'] },
    { label: '☀️ ÉTÉ', items: ['Arrosages matin ou soir (jamais en pleine journée)', 'Relever la hauteur de coupe tondeuse à 6-7 cm', 'Désherbage hebdomadaire des massifs', 'Efflorescence (fleurs fanées) sur rosiers et dahlias', 'Traitement préventif pucerons et araignées rouges', "Collecte et vérification du récupérateur d'eau de pluie"] },
    { label: '🍂 AUTOMNE', items: ['Sursemis ou resemis pelouse (septembre – octobre)', 'Plantation bulbes printaniers (septembre – novembre)', 'Compostage des feuilles mortes', 'Rentrée des plantes frileuses avant premières gelées', 'Taille des arbres fruitiers (après chute des feuilles)', "Coupure et vidange de l'arrosage automatique"] },
    { label: '❄️ HIVER', items: ["Traitement huile de dormance (fruitiers, rosiers)", 'Entretien préventif outillage (affûtage, huile, révision moteur)', 'Protection des pots et plantes sensibles au gel', 'Taille de formation des arbres caducs en dormance', 'Planification travaux et commandes semences printemps', 'Semis sous abri (tomates, poivrons) dès mi-février'] },
  ]

  const checklistPage = e(Page, { size: 'A4', style: s.page, key: 'checklist' }, [
    PageHeader({ title: '50 Conseils — Guide jardin', pageNum: 'Checklist saisonnière' }),
    V({ paddingHorizontal: 40, marginBottom: 18 }, [
      T({ color: C.primary, fontSize: 17, fontWeight: 800, marginBottom: 5 }, 'Checklist du jardinier', 't'),
      T({ color: C.textLight, fontSize: 10, lineHeight: 1.6 }, 'Cochez chaque tâche à sa saison pour ne rien oublier.', 's'),
    ], 'ch'),
    ...checklistSections.flatMap((season, si) => [
      V({ paddingHorizontal: 40, marginBottom: 5, marginTop: si > 0 ? 12 : 0 }, T({ color: C.primary, fontSize: 10, fontWeight: 700 }, season.label, 'sl'), `sl${si}`),
      ...season.items.map((item, ii) =>
        V(s.checkRow, [
          V(s.checkBox, T(s.checkMark, '✓', 'cm'), 'cb'),
          T(s.checkText, item, 'ct'),
        ], `cr${si}-${ii}`)
      ),
    ]),
    PageFooter(),
  ])

  const backPage = e(Page, { size: 'A4', style: s.darkPage, key: 'back' }, [
    V(s.backContent, [
      V({}, [
        T({ color: C.lime, fontSize: 9.5, fontWeight: 700, letterSpacing: 3, marginBottom: 12 }, 'VOTRE PAYSAGISTE À LYON NORD', 'ey'),
        T(s.backTitle, 'Besoin d\'un coup de main\npour votre jardin ?', 'bt'),
        T(s.backSub, "LM Espace Vert intervient dans un rayon de 20 km autour de Saint-Didier-au-Mont-d'Or (Caluire, Limonest, Écully, Dardilly, Champagne-au-Mont-d'Or et environs). Devis gratuit sous 48h.", 'bs'),
        V(s.backContactGrid, [
          V(s.backContactCard, [T(s.backContactLabel, 'TÉLÉPHONE', 'cl'), T(s.backContactValue, '06 72 58 73 53', 'cv'), T(s.backContactSub, 'Lun–Sam 8h–19h', 'cs')], 'c1'),
          V(s.backContactCard, [T(s.backContactLabel, 'EMAIL', 'cl'), T(s.backContactValue, 'contact@lm-espace-vert.fr', 'cv')], 'c2'),
          V(s.backContactCard, [T(s.backContactLabel, 'WEB', 'cl'), T(s.backContactValue, 'lm-espace-vert.fr', 'cv'), T(s.backContactSub, 'Devis en ligne 24h/24', 'cs')], 'c3'),
        ], 'cg'),
        V(s.backCta, [
          T(s.backCtaText, 'Demander un devis gratuit →', 'ct'),
          T(s.backCtaSub, 'www.lm-espace-vert.fr/devis', 'cs'),
        ], 'cta'),
        V(s.backBadgeRow, [
          V(s.backBadge, [T(s.backBadgeIcon, '✓', 'i'), T(s.backBadgeLabel, "Agréé SAP", 'l'), T(s.backBadgeSub, "Crédit d'impôt 50 %", 's')], 'b1'),
          V(s.backBadge, [T(s.backBadgeIcon, '✓', 'i'), T(s.backBadgeLabel, 'RC Pro assurée', 'l'), T(s.backBadgeSub, 'Travaux garantis', 's')], 'b2'),
          V(s.backBadge, [T(s.backBadgeIcon, '✓', 'i'), T(s.backBadgeLabel, 'CERTIPHYTO', 'l'), T(s.backBadgeSub, 'Traitement certifié', 's')], 'b3'),
        ], 'badges'),
      ], 'top'),
      V(s.backLegal, T(s.backLegalText,
        "LM ESPACE VERT — Paysagiste à Saint-Didier-au-Mont-d'Or (69370) — Interventions dans un rayon de 20 km autour de Lyon Nord.\nContact : contact@lm-espace-vert.fr — 06 72 58 73 53 — www.lm-espace-vert.fr\nSite réalisé par Kayzen Web — internet.kayzen-lyon.fr\nGuide fourni à titre informatif ; LM Espace Vert décline toute responsabilité pour des travaux réalisés sans professionnel qualifié.",
        'lt'), 'legal'),
    ], 'bc'),
  ])

  return e(Document, {
    title: '50 Conseils pour un jardin impeccable — LM Espace Vert',
    author: 'Léo Maurice — LM Espace Vert',
    subject: 'Guide jardinage professionnel',
    creator: 'LM Espace Vert',
    language: 'fr',
  }, [coverPage, tocPage, ...sectionPages, checklistPage, backPage])
}

// ── Run ────────────────────────────────────────────────────────────────────
console.log('🌿 Génération du guide PDF 50 conseils...')
const stream = await renderToStream(e(GuidePDF))
const output = createWriteStream(OUTPUT)
stream.pipe(output)
await new Promise((resolve, reject) => { output.on('finish', resolve); output.on('error', reject) })
console.log(`✅ PDF généré : ${OUTPUT}`)
