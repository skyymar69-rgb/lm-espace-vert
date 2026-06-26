import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Phone, Star, ArrowRight, CheckCircle, Clock, ChevronDown } from 'lucide-react'
import { JsonLd } from '@/components/seo/json-ld'
import { notFound } from 'next/navigation'

type VilleData = {
  slug: string
  nom: string
  nomComplet: string
  codePostal: string
  departement: string
  description: string
  specificite: string
  distance: string
  services: string[]
  quartiers: string[]
  metaTitle: string
  metaDescription: string
  faq: { q: string; a: string }[]
  testimonial: { prenom: string; quartier: string; texte: string }
  nearbyVilles: { slug: string; nom: string }[]
  jardinsEntretenus: string
  delaiIntervention: string
  gpsLat: number
  gpsLng: number
}

const villes: Record<string, VilleData> = {
  caluire: {
    slug: 'caluire',
    nom: 'Caluire-et-Cuire',
    nomComplet: 'Caluire-et-Cuire',
    codePostal: '69300',
    departement: 'Rhône',
    description: "Caluire-et-Cuire bénéficie d'un cadre verdoyant au confluent du Rhône et de la Saône. LM Espace Vert intervient régulièrement dans cette commune résidentielle pour l'entretien de jardins bourgeois et la création d'espaces extérieurs contemporains.",
    specificite: "avec ses villas et ses parcs privés",
    distance: "8 km",
    services: ["Entretien régulier de jardins bourgeois · dès 120 €/passage", "Élagage des grands arbres · devis sur site", "Création terrasses et allées · à partir de 2 800 €", "Arrosage automatique · à partir de 1 500 €"],
    quartiers: ["Mont Cindre", "Caluire-Village", "Cuire-le-Bas", "Vassieux"],
    metaTitle: "Paysagiste Caluire-et-Cuire (69300) — LM Espace Vert",
    metaDescription: "Paysagiste à Caluire-et-Cuire : création de jardins, entretien, élagage. LM Espace Vert intervient à 8 km de Saint-Didier-au-Mont-d'Or. Devis gratuit.",
    faq: [
      {
        q: "Quelles sont les règles de taille de haies à Caluire-et-Cuire ?",
        a: "À Caluire-et-Cuire, la taille des haies mitoyennes est régie par le Code civil : les haies de plus de 2 m doivent être plantées à 2 m de la limite de propriété, et celles de moins de 2 m à 0,5 m. LM Espace Vert respecte scrupuleusement ces règles et vous conseille lors de chaque intervention.",
      },
      {
        q: "Intervenez-vous dans le quartier de Mont Cindre à Caluire ?",
        a: "Oui, nous intervenons régulièrement dans le quartier de Mont Cindre et dans tout Caluire-et-Cuire. La proximité avec Saint-Didier-au-Mont-d'Or (8 km) nous permet des interventions rapides, même pour des entretiens ponctuels ou des urgences (branches dangereuses, etc.).",
      },
      {
        q: "Proposez-vous des contrats d'entretien annuels à Caluire ?",
        a: "Absolument. Nous proposons des contrats d'entretien mensuels ou bimensuels à Caluire-et-Cuire : tonte, taille, désherbage, traitement. Ces forfaits annuels sont particulièrement appréciés des propriétaires de grandes villas dans les quartiers de Vassieux et Cuire-le-Bas.",
      },
    ],
    testimonial: {
      prenom: "Françoise B.",
      quartier: "Cuire-le-Bas",
      texte: "Léo et son équipe entretiennent notre jardin depuis 3 ans. Travail irréprochable, toujours à l'heure et très professionnel. Notre haie de thuyas est parfaitement taillée à chaque passage !",
    },
    nearbyVilles: [
      { slug: 'champagne', nom: "Champagne-au-Mont-d'Or" },
      { slug: 'saint-cyr', nom: "Saint-Cyr-au-Mont-d'Or" },
      { slug: 'collonges', nom: 'Collonges-au-Mont-d\'Or' },
    ],
    jardinsEntretenus: '45',
    delaiIntervention: '48h',
    gpsLat: 45.8267,
    gpsLng: 4.8617,
  },
  ecuelly: {
    slug: 'ecuelly',
    nom: 'Écully',
    nomComplet: 'Écully',
    codePostal: '69130',
    departement: 'Rhône',
    description: "Ville résidentielle prisée au ouest de Lyon, Écully est connue pour ses propriétés de prestige et ses jardins soignés. LM Espace Vert réalise des aménagements haut de gamme adaptés au niveau d'exigence de cette commune.",
    specificite: "avec ses propriétés de prestige et jardins d'exception",
    distance: "10 km",
    services: ["Création jardins contemporains · à partir de 4 000 €", "Maçonnerie paysagère haut de gamme · terrasses dès 180 €/m²", "Entretien contrats annuels · dès 160 €/passage", "Élagage arbres remarquables · devis gratuit"],
    quartiers: ["Le Pérollier", "Chanteloup", "La Grange Blanche", "Les Barolles"],
    metaTitle: "Paysagiste Écully (69130) — LM Espace Vert",
    metaDescription: "Paysagiste à Écully : création de jardins haut de gamme, terrasses, entretien. LM Espace Vert intervient à 10 km. Devis gratuit sous 24h.",
    faq: [
      {
        q: "Réalisez-vous des jardins contemporains pour les propriétés de prestige à Écully ?",
        a: "Oui, Écully est l'une de nos communes d'intervention où nous réalisons les projets les plus ambitieux : jardins contemporains avec terrasses en pierre naturelle, bassins décoratifs, massifs structurés et éclairage paysager. Nous avons réalisé plusieurs projets remarqués dans les quartiers de Chanteloup et du Pérollier.",
      },
      {
        q: "Quels délais pour un projet de création de jardin à Écully ?",
        a: "Pour un projet de création complet à Écully, nous comptons en général 2 à 4 semaines entre la visite gratuite et le début du chantier, selon notre planning. La durée du chantier varie de 1 semaine pour un jardin de 200 m² à 4-6 semaines pour une propriété de grand standing.",
      },
      {
        q: "Proposez-vous la maçonnerie paysagère (terrasses, murets) à Écully ?",
        a: "Tout à fait. La maçonnerie paysagère représente une grande partie de nos interventions à Écully : terrasses en travertin ou en lame de bois composite, murets en pierres naturelles, escaliers extérieurs, allées pavées. Nous gérons l'intégralité du chantier, de la préparation du terrain à la finition.",
      },
    ],
    testimonial: {
      prenom: "Nicolas V.",
      quartier: "Chanteloup",
      texte: "Excellent travail pour la création de notre terrasse et jardin. LM Espace Vert a su comprendre notre vision et la dépasser. Les massifs sont magnifiques, l'arrosage automatique fonctionne parfaitement. Très professionnel.",
    },
    nearbyVilles: [
      { slug: 'tassin', nom: 'Tassin-la-Demi-Lune' },
      { slug: 'dardilly', nom: 'Dardilly' },
      { slug: 'francheville', nom: 'Francheville' },
    ],
    jardinsEntretenus: '38',
    delaiIntervention: '48h',
    gpsLat: 45.7697,
    gpsLng: 4.7783,
  },
  tassin: {
    slug: 'tassin',
    nom: 'Tassin-la-Demi-Lune',
    nomComplet: 'Tassin-la-Demi-Lune',
    codePostal: '69160',
    departement: 'Rhône',
    description: "Tassin-la-Demi-Lune est une ville dynamique à l'ouest de Lyon, avec de nombreux pavillons et jardins à entretenir. LM Espace Vert y propose des solutions d'aménagement modernes pour les familles et les professionnels.",
    specificite: "avec ses pavillons modernes et jardins familiaux",
    distance: "12 km",
    services: ["Entretien pelouses et haies · dès 90 €/passage", "Création espaces de vie outdoor · à partir de 2 000 €", "Engazonnement semis ou rouleaux · à partir de 8 €/m²", "Arrosage automatique · à partir de 1 500 €"],
    quartiers: ["Centre-ville", "Les Brosses", "Méginand", "Les Plaines"],
    metaTitle: "Paysagiste Tassin-la-Demi-Lune (69160) — LM Espace Vert",
    metaDescription: "Paysagiste à Tassin-la-Demi-Lune : entretien jardins, pelouses, haies, terrasses. LM Espace Vert à 12 km. Devis gratuit.",
    faq: [
      {
        q: "Faites-vous l'entretien régulier de jardins pavillonnaires à Tassin ?",
        a: "Oui, l'entretien de jardins pavillonnaires est notre spécialité à Tassin-la-Demi-Lune. Nous proposons des passages toutes les 2 ou 4 semaines selon vos besoins : tonte de pelouse, taille de haies, désherbage des massifs et ramassage des déchets verts. Tarifs clairs et sans surprise.",
      },
      {
        q: "Peut-on installer un arrosage automatique dans un jardin de 300 m² à Tassin ?",
        a: "Tout à fait, c'est exactement la superficie idéale pour un arrosage automatique. À Tassin-la-Demi-Lune, nous installons des systèmes Hunter ou Rain Bird avec programmateur intelligent. Comptez entre 1 500 € et 3 500 € selon la complexité du réseau, avec une installation en 1 à 2 jours.",
      },
      {
        q: "Quelles plantes sont adaptées aux jardins exposés ouest à Tassin ?",
        a: "Pour les jardins exposés ouest à Tassin, nous recommandons les hortensias paniculata, les rosiers arbustifs, les graminées (miscanthus, pennisetum) et les hydrangeas. Ces espèces tolèrent bien le soleil de l'après-midi et la chaleur estivale du bassin lyonnais tout en restant peu exigeantes en entretien.",
      },
    ],
    testimonial: {
      prenom: "Julie M.",
      quartier: "Les Brosses",
      texte: "Super satisfaite de l'entretien de notre jardin à Tassin. Léo est ponctuel, propre et fait du bon travail. Notre pelouse est enfin impeccable et les haies bien droites. Je recommande sans hésitation !",
    },
    nearbyVilles: [
      { slug: 'ecuelly', nom: 'Écully' },
      { slug: 'francheville', nom: 'Francheville' },
      { slug: 'craponne', nom: 'Craponne' },
    ],
    jardinsEntretenus: '52',
    delaiIntervention: '48h',
    gpsLat: 45.7655,
    gpsLng: 4.7778,
  },
  limonest: {
    slug: 'limonest',
    nom: 'Limonest',
    nomComplet: 'Limonest',
    codePostal: '69760',
    departement: 'Rhône',
    description: "Limonest et ses alentours font partie de notre zone d'intervention principale. Nous réalisons régulièrement des créations paysagères ambitieuses dans cette commune verdoyante, comme en témoignent nos réalisations récentes.",
    specificite: "notre terrain de prédilection pour les créations ambitieuses",
    distance: "5 km",
    services: ["Création jardins paysagers · à partir de 3 000 €", "Aménagement extérieur complet clé en main", "Entretien contrats · dès 110 €/passage", "Maçonnerie paysagère · allées dès 80 €/m²"],
    quartiers: ["Centre", "Les Mouilles", "La Mouilière", "Domaine de Lacour"],
    metaTitle: "Paysagiste Limonest (69760) — LM Espace Vert",
    metaDescription: "Paysagiste à Limonest : créations paysagères, jardins contemporains, terrasses. LM Espace Vert intervient à 5 km. Devis gratuit sous 24h.",
    faq: [
      {
        q: "LM Espace Vert est-il disponible rapidement pour un projet à Limonest ?",
        a: "Limonest fait partie de notre zone d'intervention principale, à seulement 5 km de notre base de Saint-Didier-au-Mont-d'Or. Nous pouvons généralement réaliser une visite gratuite sous 48h et démarrer un chantier sous 1 à 2 semaines selon notre planning. C'est l'une de nos communes d'intervention les plus fréquentes.",
      },
      {
        q: "Réalisez-vous des allées et terrasses en dallage naturel à Limonest ?",
        a: "Oui, la maçonnerie paysagère est très demandée à Limonest pour les belles propriétés du Domaine de Lacour et des Mouilles. Nous posons des allées en granit, en calcaire ou en grès, des terrasses en travertin et des murets en pierres sèches, toujours en accord avec l'architecture locale.",
      },
      {
        q: "Proposez-vous des projets d'aménagement paysager clé en main à Limonest ?",
        a: "Absolument. L'aménagement clé en main est notre approche privilégiée à Limonest : de la conception du plan jusqu'à la plantation finale, en passant par le terrassement, la maçonnerie et l'installation de l'arrosage. Un seul interlocuteur, un seul devis, zéro stress pour vous.",
      },
    ],
    testimonial: {
      prenom: "Patrick R.",
      quartier: "Les Mouilles",
      texte: "LM Espace Vert a transformé notre terrain brut de 1 200 m² en un jardin magnifique. Plan détaillé, respect des délais, matériaux de qualité. Résultat au-delà de nos attentes. Merci Léo !",
    },
    nearbyVilles: [
      { slug: 'dardilly', nom: 'Dardilly' },
      { slug: 'champagne', nom: "Champagne-au-Mont-d'Or" },
      { slug: 'curis', nom: 'Curis-au-Mont-d\'Or' },
    ],
    jardinsEntretenus: '61',
    delaiIntervention: '24h',
    gpsLat: 45.8283,
    gpsLng: 4.7750,
  },
  dardilly: {
    slug: 'dardilly',
    nom: 'Dardilly',
    nomComplet: 'Dardilly',
    codePostal: '69570',
    departement: 'Rhône',
    description: "Dardilly, commune résidentielle de l'ouest lyonnais proche de l'A6, offre un cadre de vie agréable avec de nombreuses maisons individuelles. LM Espace Vert y intervient pour la création et l'entretien de jardins de qualité.",
    specificite: "avec ses maisons individuelles et parcs résidentiels",
    distance: "7 km",
    services: ["Entretien espaces verts · dès 100 €/passage", "Création massifs et pelouses · à partir de 1 500 €", "Élagage et taille haies · devis gratuit", "Maçonnerie allées et clôtures · à partir de 75 €/m²"],
    quartiers: ["Le Bourg", "La Chapelle", "Les Grandes Roches", "Lacipière"],
    metaTitle: "Paysagiste Dardilly (69570) — LM Espace Vert",
    metaDescription: "Paysagiste à Dardilly : entretien jardins, création massifs, élagage, haies. LM Espace Vert à 7 km. Devis gratuit.",
    faq: [
      {
        q: "Faites-vous l'élagage des grands arbres à Dardilly ?",
        a: "Oui, l'élagage est l'une de nos prestations phares à Dardilly où de nombreuses propriétés possèdent de grands chênes, châtaigniers et platanes. Nous intervenons avec nacelle ou en grimpe selon les accès, et gérons l'évacuation des bois coupés. Devis gratuit après évaluation sur site.",
      },
      {
        q: "Quel est le prix d'un entretien de jardin mensuel à Dardilly ?",
        a: "Le tarif d'un entretien mensuel à Dardilly dépend de la superficie et des prestations incluses. Pour un jardin de 500 m² avec tonte, taille et désherbage, comptez entre 120 € et 200 € par passage. Nous établissons un forfait annualisé après visite gratuite pour éviter les mauvaises surprises.",
      },
      {
        q: "Intervenez-vous pour les entreprises et copropriétés à Dardilly ?",
        a: "Absolument. Dardilly abrite de nombreuses zones d'activités et résidences. Nous gérons des espaces verts professionnels à l'année : tonte régulière, taille d'ornement, entretien des massifs et traitement phytosanitaire raisonné. Devis adapté aux volumes et aux exigences de chaque site.",
      },
    ],
    testimonial: {
      prenom: "Bernard T.",
      quartier: "Les Grandes Roches",
      texte: "Très bon travail d'élagage sur nos trois grands chênes. L'équipe était professionnelle, efficace et a tout nettoyé derrière elle. Le jardin est méconnaissable, dans le bon sens du terme. Tarif correct pour la qualité.",
    },
    nearbyVilles: [
      { slug: 'limonest', nom: 'Limonest' },
      { slug: 'ecuelly', nom: 'Écully' },
      { slug: 'saint-cyr', nom: "Saint-Cyr-au-Mont-d'Or" },
    ],
    jardinsEntretenus: '43',
    delaiIntervention: '48h',
    gpsLat: 45.8117,
    gpsLng: 4.7800,
  },
  champagne: {
    slug: 'champagne',
    nom: "Champagne-au-Mont-d'Or",
    nomComplet: "Champagne-au-Mont-d'Or",
    codePostal: '69410',
    departement: 'Rhône',
    description: "Champagne-au-Mont-d'Or est une commune résidentielle de prestige sur les coteaux du Mont d'Or, à quelques kilomètres de Saint-Didier-au-Mont-d'Or. LM Espace Vert y est particulièrement actif pour des projets d'aménagement haut de gamme.",
    specificite: "sur les coteaux du Mont d'Or, commune voisine de Saint-Didier",
    distance: "3 km",
    services: ["Création jardins haut de gamme · à partir de 3 500 €", "Entretien propriétés de prestige · contrat dès 140 €/mois", "Élagage arbres remarquables · devis après visite", "Terrasses en pierre naturelle · à partir de 200 €/m²"],
    quartiers: ["Le Village", "Les Balmes", "Reculon", "La Côte"],
    metaTitle: "Paysagiste Champagne-au-Mont-d'Or (69410) — LM Espace Vert",
    metaDescription: "Paysagiste à Champagne-au-Mont-d'Or : aménagement haut de gamme, jardins prestige, entretien. LM Espace Vert voisin à 3 km. Devis gratuit.",
    faq: [
      {
        q: "LM Espace Vert intervient-il souvent à Champagne-au-Mont-d'Or ?",
        a: "Champagne-au-Mont-d'Or est notre commune la plus proche (3 km de Saint-Didier-au-Mont-d'Or) et l'une de celles où nous intervenons le plus fréquemment. Nous y avons de nombreux clients fidèles dans les quartiers des Balmes et de Reculon pour l'entretien régulier et les créations de jardins.",
      },
      {
        q: "Quels services proposez-vous pour les propriétés de prestige à Champagne ?",
        a: "Pour les propriétés de prestige des coteaux du Mont d'Or, nous proposons des créations paysagères haut de gamme avec terrasses en travertin, massifs structurés, haies architecturées, éclairage extérieur et arrosage automatique. Nous gérons aussi l'entretien annuel de ces propriétés avec un contrat adapté.",
      },
      {
        q: "Traitez-vous les vignes et oliviers des jardins méditerranéens à Champagne ?",
        a: "Oui, les jardins inspirés du style méditerranéen sont nombreux sur les coteaux de Champagne grâce à l'exposition favorable. Nous intervenons pour la taille des oliviers, des lauriers et des cyprès méditerranéens, ainsi que pour le conseil sur les espèces adaptées au microclimat des coteaux du Mont d'Or.",
      },
    ],
    testimonial: {
      prenom: "Isabelle D.",
      quartier: "Les Balmes",
      texte: "Léo a créé notre jardin de A à Z il y a 2 ans et revient chaque mois pour l'entretien. Un vrai professionnel passionné par son travail. Notre terrasse en travertin est superbe et les massifs fleurissent toute l'année.",
    },
    nearbyVilles: [
      { slug: 'caluire', nom: 'Caluire-et-Cuire' },
      { slug: 'saint-cyr', nom: "Saint-Cyr-au-Mont-d'Or" },
      { slug: 'collonges', nom: 'Collonges-au-Mont-d\'Or' },
    ],
    jardinsEntretenus: '78',
    delaiIntervention: '24h',
    gpsLat: 45.8483,
    gpsLng: 4.7983,
  },

  // --- 6 NOUVELLES VILLES ---
  neuville: {
    slug: 'neuville',
    nom: 'Neuville-sur-Saône',
    nomComplet: 'Neuville-sur-Saône',
    codePostal: '69250',
    departement: 'Rhône',
    description: "Neuville-sur-Saône, charmante ville de bord de Saône à 15 km au nord de Lyon, allie patrimoine historique et cadre verdoyant. LM Espace Vert y intervient pour la création et l'entretien de jardins adaptés aux maisons de caractère et aux pavillons récents de cette commune dynamique.",
    specificite: "au bord de la Saône, entre patrimoine et modernité",
    distance: "15 km",
    services: ["Création jardins de ville et pavillonnaires · à partir de 2 000 €", "Entretien haies et pelouses · dès 95 €/passage", "Maçonnerie paysagère allées et terrasses · à partir de 80 €/m²", "Élagage bord de rivière · devis gratuit"],
    quartiers: ["Centre historique", "Les Balmes", "La Saône", "Les Verchères"],
    metaTitle: "Paysagiste Neuville-sur-Saône (69250) — LM Espace Vert",
    metaDescription: "Paysagiste à Neuville-sur-Saône : création de jardins, entretien, élagage, terrasses. LM Espace Vert intervient à 15 km. Devis gratuit.",
    faq: [
      {
        q: "Intervenez-vous pour les jardins en bord de Saône à Neuville ?",
        a: "Oui, nous avons l'habitude des spécificités des jardins en bord de Saône à Neuville-sur-Saône : terrain souvent humide, risques d'inondation, végétation hygrophile adaptée. Nous sélectionnons des essences tolérantes à l'humidité (saules, saules pleureurs, aulnes, iris des marais) et aménageons des zones drainées pour les espaces de vie.",
      },
      {
        q: "Proposez-vous la création de jardins pour les maisons de caractère à Neuville ?",
        a: "Absolument. Neuville-sur-Saône possède de belles maisons de caractère dans son centre historique qui méritent des jardins à la hauteur. Nous créons des jardins classiques ou contemporains en harmonie avec l'architecture, avec des murets en pierres, des allées pavées et des massifs floraux raffinés.",
      },
      {
        q: "Quel est votre délai d'intervention à Neuville-sur-Saône ?",
        a: "Malgré la distance de 15 km, nous intervenons régulièrement à Neuville-sur-Saône. La visite gratuite peut être planifiée sous 48 à 72h. Pour les urgences (arbres dangereux, dégâts de tempête), nous faisons notre maximum pour intervenir sous 24h. Contactez-nous par téléphone ou WhatsApp pour les situations urgentes.",
      },
    ],
    testimonial: {
      prenom: "Alain F.",
      quartier: "Centre historique",
      texte: "Belle réalisation pour notre jardin de maison ancienne. LM Espace Vert a parfaitement respecté le style de notre demeure tout en apportant une touche moderne. Les pierres naturelles de l'allée sont magnifiques. Je recommande !",
    },
    nearbyVilles: [
      { slug: 'curis', nom: 'Curis-au-Mont-d\'Or' },
      { slug: 'collonges', nom: 'Collonges-au-Mont-d\'Or' },
      { slug: 'saint-cyr', nom: "Saint-Cyr-au-Mont-d'Or" },
    ],
    jardinsEntretenus: '29',
    delaiIntervention: '72h',
    gpsLat: 45.8783,
    gpsLng: 4.8317,
  },
  craponne: {
    slug: 'craponne',
    nom: 'Craponne',
    nomComplet: 'Craponne',
    codePostal: '69290',
    departement: 'Rhône',
    description: "Craponne, commune résidentielle au sud-ouest de Lyon, est appréciée pour ses lotissements modernes et ses nombreuses maisons avec jardin. LM Espace Vert y réalise des aménagements fonctionnels et esthétiques, adaptés aux familles et aux actifs qui souhaitent profiter de leur extérieur sans en subir l'entretien.",
    specificite: "avec ses lotissements résidentiels et jardins de maisons neuves",
    distance: "16 km",
    services: ["Création jardins de lotissement · à partir de 2 500 €", "Engazonnement et semis de pelouse · dès 8 €/m²", "Pose de terrasses bois composite · à partir de 120 €/m²", "Contrats d'entretien régulier · dès 90 €/passage"],
    quartiers: ["Le Bourg", "La Rivoire", "La Croix Rouge", "Les Hauts de Craponne"],
    metaTitle: "Paysagiste Craponne (69290) — LM Espace Vert",
    metaDescription: "Paysagiste à Craponne : création de jardins, engazonnement, terrasses, entretien. LM Espace Vert intervient à 16 km. Devis gratuit.",
    faq: [
      {
        q: "Intervenez-vous pour les jardins de maisons neuves à Craponne ?",
        a: "Oui, c'est une demande fréquente à Craponne où de nombreux lotissements proposent des maisons avec terrain nu. Nous prenons en charge la totalité de la création : apport de terre végétale, engazonnement, plantation des massifs et haies, allées et terrasses. Nous transformons un terrain vide en un jardin agréable en quelques jours.",
      },
      {
        q: "Faites-vous la pose de terrasses bois et composite à Craponne ?",
        a: "Absolument. La terrasse en lame de bois composite est très demandée à Craponne pour sa durabilité et son entretien facile. Nous posons des terrasses sur lambourdes, intégrées au niveau du jardin ou en surhaussé, avec garde-corps et éclairage si souhaité. Devis sous 48h.",
      },
      {
        q: "Quel gazon choisir pour un jardin à Craponne ?",
        a: "Pour les jardins de Craponne, nous recommandons les mélanges de graminées adaptés au climat lyonnais (ray-grass, fétuque, poa pratensis). Pour les zones ombragées, nous privilégions les mélanges ombre-mi-ombre. Nous proposons aussi des pelouses synthétiques haut de gamme pour les zones de passage intense ou les petits jardins.",
      },
    ],
    testimonial: {
      prenom: "Sandrine L.",
      quartier: "Les Hauts de Craponne",
      texte: "Nouvelle maison, jardin créé de zéro par LM Espace Vert. En 3 jours, nous avons une pelouse, des massifs, une terrasse et une allée. Travail rapide et soigné, prix correct. On est ravis du résultat !",
    },
    nearbyVilles: [
      { slug: 'tassin', nom: 'Tassin-la-Demi-Lune' },
      { slug: 'ecuelly', nom: 'Écully' },
      { slug: 'francheville', nom: 'Francheville' },
    ],
    jardinsEntretenus: '34',
    delaiIntervention: '48h',
    gpsLat: 45.7467,
    gpsLng: 4.7317,
  },
  francheville: {
    slug: 'francheville',
    nom: 'Francheville',
    nomComplet: 'Francheville',
    codePostal: '69340',
    departement: 'Rhône',
    description: "Francheville, commune verdoyante au sud-ouest de Lyon bordée par le Parc du Vallon, offre un environnement naturel exceptionnel à ses habitants. LM Espace Vert y crée et entretient des jardins qui s'intègrent harmonieusement dans ce paysage bocager privilégié.",
    specificite: "aux portes du Parc du Vallon, dans un cadre naturel préservé",
    distance: "14 km",
    services: ["Création jardins naturels et écologiques · à partir de 2 200 €", "Entretien jardins familiaux · dès 95 €/passage", "Taille arbres fruitiers · à partir de 80 € par arbre", "Aménagement potagers en carrés · à partir de 600 €"],
    quartiers: ["Le Bourg", "Francheville-le-Haut", "Francheville-le-Bas", "Les Pins"],
    metaTitle: "Paysagiste Francheville (69340) — LM Espace Vert",
    metaDescription: "Paysagiste à Francheville : création jardins naturels, entretien, potagers, arbres fruitiers. LM Espace Vert intervient à 14 km. Devis gratuit.",
    faq: [
      {
        q: "Créez-vous des jardins écologiques et naturels à Francheville ?",
        a: "Oui, Francheville est une commune où la sensibilité écologique est forte. Nous proposons des jardins naturels avec des plantes indigènes favorisant la biodiversité, des zones de prairie fleurie, des hôtels à insectes et des systèmes de récupération des eaux de pluie. Ces jardins sont beaux et bons pour l'environnement.",
      },
      {
        q: "Intervenez-vous pour la taille des arbres fruitiers à Francheville ?",
        a: "Tout à fait. La taille des arbres fruitiers (pommiers, poiriers, pruniers, cerisiers) est une expertise que nous mettons à profit à Francheville. Nous intervenons en taille de formation pour les jeunes arbres et en taille de fructification pour les arbres adultes, selon les règles de l'art et dans le respect du cycle végétatif.",
      },
      {
        q: "Proposez-vous l'aménagement de potagers à Francheville ?",
        a: "Absolument, les potagers sont très demandés à Francheville pour ce cadre naturel. Nous créons des potagers en carrés surélevés (en bois, en pierre, en métal corten), avec un accès facile, une irrigation goutte-à-goutte intégrée et un composteur. Un jardin productif et esthétique à la fois.",
      },
    ],
    testimonial: {
      prenom: "Mireille G.",
      quartier: "Francheville-le-Haut",
      texte: "LM Espace Vert a aménagé notre grand jardin avec un potager surélevé, une prairie fleurie et un coin de repos. C'est exactement ce qu'on voulait : un jardin naturel, beau et utile. Léo a vraiment compris notre projet.",
    },
    nearbyVilles: [
      { slug: 'tassin', nom: 'Tassin-la-Demi-Lune' },
      { slug: 'craponne', nom: 'Craponne' },
      { slug: 'ecuelly', nom: 'Écully' },
    ],
    jardinsEntretenus: '27',
    delaiIntervention: '48h',
    gpsLat: 45.7300,
    gpsLng: 4.7583,
  },
  'saint-cyr': {
    slug: 'saint-cyr',
    nom: "Saint-Cyr-au-Mont-d'Or",
    nomComplet: "Saint-Cyr-au-Mont-d'Or",
    codePostal: '69450',
    departement: 'Rhône',
    description: "Saint-Cyr-au-Mont-d'Or, perché sur les coteaux dominant la Saône, est un village résidentiel d'exception prisé pour ses vues panoramiques et ses propriétés cossues. LM Espace Vert y réalise des jardins haut de gamme à la hauteur de ce cadre exceptionnel.",
    specificite: "sur les coteaux du Mont d'Or avec vues panoramiques sur Lyon",
    distance: "10 km",
    services: ["Création jardins panoramiques et terrasses vues · à partir de 3 500 €", "Entretien propriétés d'exception · dès 140 €/passage", "Aménagement talus et murets de soutènement · sur devis", "Élagage et mise en valeur de la vue · devis gratuit"],
    quartiers: ["Le Village", "Les Garennes", "La Croix", "Les Coteaux"],
    metaTitle: "Paysagiste Saint-Cyr-au-Mont-d'Or (69450) — LM Espace Vert",
    metaDescription: "Paysagiste à Saint-Cyr-au-Mont-d'Or : jardins panoramiques, terrasses, entretien propriétés. LM Espace Vert à 10 km. Devis gratuit.",
    faq: [
      {
        q: "Créez-vous des jardins en terrasses pour les propriétés en pente à Saint-Cyr ?",
        a: "Oui, c'est notre spécialité sur les coteaux de Saint-Cyr-au-Mont-d'Or. Les terrains en forte pente nécessitent des aménagements spécifiques : murs de soutènement en pierres sèches ou en gabions, jardins en paliers, escaliers naturels. Ces solutions techniques créent des espaces utilisables tout en valorisant la vue sur Lyon et la Saône.",
      },
      {
        q: "Comment dégager et valoriser la vue panoramique dans un jardin à Saint-Cyr ?",
        a: "Pour valoriser les vues sur Lyon depuis Saint-Cyr-au-Mont-d'Or, nous intervenons sur l'élagage sélectif des arbres qui obstruent le panorama, la création de fenêtres paysagères dans les haies, et la conception de terrasses orientées plein sud-est. Chaque intervention est pensée pour maximiser le potentiel visuel de votre propriété.",
      },
      {
        q: "Gérez-vous les glissements de terrain dans les jardins en pente à Saint-Cyr ?",
        a: "Les jardins en pente des coteaux du Mont d'Or nécessitent des solutions anti-érosion que nous maîtrisons parfaitement : enrochements naturels, filets végétalisés, plantes couvre-sol à racines profondes (heuchères, géraniums vivaces, gramens). Nous évaluons chaque situation et proposons des solutions durables lors de la visite gratuite.",
      },
    ],
    testimonial: {
      prenom: "Christophe M.",
      quartier: "Les Garennes",
      texte: "Projet complexe sur terrain en forte pente à Saint-Cyr. LM Espace Vert a réalisé 3 terrasses en pierre sèche avec escaliers naturels. La vue sur Lyon est préservée et le jardin est enfin utilisable. Un travail remarquable !",
    },
    nearbyVilles: [
      { slug: 'champagne', nom: "Champagne-au-Mont-d'Or" },
      { slug: 'collonges', nom: 'Collonges-au-Mont-d\'Or' },
      { slug: 'curis', nom: 'Curis-au-Mont-d\'Or' },
    ],
    jardinsEntretenus: '32',
    delaiIntervention: '48h',
    gpsLat: 45.8583,
    gpsLng: 4.8167,
  },
  curis: {
    slug: 'curis',
    nom: 'Curis-au-Mont-d\'Or',
    nomComplet: 'Curis-au-Mont-d\'Or',
    codePostal: '69250',
    departement: 'Rhône',
    description: "Curis-au-Mont-d'Or est un petit village authentique sur les coteaux du Mont d'Or, entre forêts et vignes, offrant un cadre de vie préservé à moins de 20 km de Lyon. LM Espace Vert y réalise des jardins qui s'inscrivent dans ce paysage naturel remarquable.",
    specificite: "au cœur des coteaux du Mont d'Or, entre forêts et vignes",
    distance: "12 km",
    services: ["Création jardins naturels intégrés au paysage · à partir de 2 000 €", "Entretien jardins de village · dès 90 €/passage", "Taille vignes ornementales et haies · devis sur site", "Terrasses et murets pierres sèches · à partir de 160 €/m²"],
    quartiers: ["Le Village", "Les Côtes", "La Forêt", "Les Vignes"],
    metaTitle: "Paysagiste Curis-au-Mont-d'Or (69250) — LM Espace Vert",
    metaDescription: "Paysagiste à Curis-au-Mont-d'Or : création jardins, entretien, terrasses pierre sèche. LM Espace Vert intervient à 12 km. Devis gratuit.",
    faq: [
      {
        q: "Intervenez-vous à Curis-au-Mont-d'Or malgré la petite taille du village ?",
        a: "Oui, nous intervenons régulièrement à Curis-au-Mont-d'Or. La commune est à 12 km de notre base et sur notre axe d'intervention des coteaux du Mont d'Or. Même pour les petits jardins de village, nous nous déplaçons avec plaisir. Appelez-nous ou envoyez un message WhatsApp pour organiser une visite gratuite.",
      },
      {
        q: "Quelles plantes recommandez-vous pour un jardin sur les coteaux du Mont d'Or ?",
        a: "Les coteaux du Mont d'Or bénéficient d'un microclimat favorable. Nous recommandons les lavandes, les romarin, les thyms, les cistes et les graminées (stipa, pennisetum) pour les zones ensoleillées. Pour les bordures forestières, des hellébores, des hostas et des fougères créent de beaux jardins d'ombre.",
      },
      {
        q: "Gérez-vous l'entretien des jardins de vieilles maisons de village à Curis ?",
        a: "Absolument. Les maisons de village de Curis-au-Mont-d'Or ont souvent de beaux jardins anciens avec de vieux arbres fruitiers, des roses grimpantes et des haies de charmes. Nous les entretenons en respectant leur caractère patrimonial : taille douce des rosiers anciens, entretien des arbres fruitiers, régénération des haies.",
      },
    ],
    testimonial: {
      prenom: "Véronique H.",
      quartier: "Le Village",
      texte: "Très satisfaite de l'aménagement de notre jardin de village à Curis. LM Espace Vert a su respecter le caractère rustique de notre maison tout en créant un jardin contemporain et facile à entretenir. Bravo !",
    },
    nearbyVilles: [
      { slug: 'neuville', nom: 'Neuville-sur-Saône' },
      { slug: 'saint-cyr', nom: "Saint-Cyr-au-Mont-d'Or" },
      { slug: 'collonges', nom: 'Collonges-au-Mont-d\'Or' },
    ],
    jardinsEntretenus: '18',
    delaiIntervention: '48h',
    gpsLat: 45.8833,
    gpsLng: 4.8283,
  },
  collonges: {
    slug: 'collonges',
    nom: 'Collonges-au-Mont-d\'Or',
    nomComplet: 'Collonges-au-Mont-d\'Or',
    codePostal: '69660',
    departement: 'Rhône',
    description: "Collonges-au-Mont-d'Or, commune résidentielle sur les rives de la Saône au nord de Lyon, est connue pour son célèbre restaurant trois étoiles et ses belles demeures bourgeoises. LM Espace Vert y réalise des jardins d'exception à la hauteur du prestige de cette commune.",
    specificite: "sur les rives de la Saône, commune de prestige au nord de Lyon",
    distance: "11 km",
    services: ["Création jardins de prestige en bord de Saône · à partir de 3 500 €", "Entretien propriétés haut de gamme · contrat annuel dès 180 €/mois", "Aménagement berges et abords rivière", "Taille architecturée et topiaire · 2-4 passages/an"],
    quartiers: ["Le Bourg", "Les Berges de la Saône", "Les Coteaux", "La Rivière"],
    metaTitle: "Paysagiste Collonges-au-Mont-d'Or (69660) — LM Espace Vert",
    metaDescription: "Paysagiste à Collonges-au-Mont-d'Or : jardins prestige, berges Saône, topiaire, entretien. LM Espace Vert à 11 km. Devis gratuit.",
    faq: [
      {
        q: "Créez-vous des jardins en bord de Saône à Collonges ?",
        a: "Oui, les jardins en bord de Saône à Collonges-au-Mont-d'Or sont une de nos spécialités. Nous sélectionnons des espèces adaptées à la proximité de l'eau et aux variations de niveau (saules, iris, pontédéries, massettes), créons des berges naturalisées et aménageons des terrasses avec vue sur la rivière.",
      },
      {
        q: "Proposez-vous la taille architecturée et le topiaire à Collonges ?",
        a: "Absolument. La taille architecturée (buis, ifs, photinias taillés en formes géométriques) est très appréciée pour les jardins de prestige de Collonges. Nous intervenons 2 à 4 fois par an pour maintenir des formes précises et soignées. Nous proposons aussi de redonner une forme à des topiaires anciens négligés.",
      },
      {
        q: "Quel entretien pour les grands parcs privés à Collonges-au-Mont-d'Or ?",
        a: "Les grandes propriétés de Collonges nécessitent un entretien structuré. Nous proposons des contrats annuels avec planning précis : tonte bi-mensuelle en saison, taille saisonnière, traitement phytosanitaire raisonné, ramassage des feuilles en automne. Un responsable de secteur est dédié à votre propriété pour assurer la continuité.",
      },
    ],
    testimonial: {
      prenom: "Marie-Anne P.",
      quartier: "Les Berges de la Saône",
      texte: "Magnifique travail pour notre propriété au bord de la Saône. LM Espace Vert a su créer un jardin élégant mêlant plantes de berge et espaces de réception. Un service haut de gamme, à la hauteur de notre demeure. Merci !",
    },
    nearbyVilles: [
      { slug: 'saint-cyr', nom: "Saint-Cyr-au-Mont-d'Or" },
      { slug: 'champagne', nom: "Champagne-au-Mont-d'Or" },
      { slug: 'neuville', nom: 'Neuville-sur-Saône' },
    ],
    jardinsEntretenus: '22',
    delaiIntervention: '48h',
    gpsLat: 45.8650,
    gpsLng: 4.8367,
  },

  // --- 4 NOUVELLES VILLES ---
  'saint-didier': {
    slug: 'saint-didier',
    nom: "Saint-Didier-au-Mont-d'Or",
    nomComplet: "Saint-Didier-au-Mont-d'Or",
    codePostal: '69370',
    departement: 'Rhône',
    description: "Saint-Didier-au-Mont-d'Or, c'est notre commune de base — le cœur de notre activité. Perché à 500 m d'altitude sur les contreforts des Monts d'Or, le village allie résidences cossues, forêts de chênes et vignes en terrasses. Les jardins y sont généreux, souvent orientés plein sud, avec des vues dégagées sur la plaine lyonnaise. LM Espace Vert connaît chaque rue, chaque type de sol et chaque nuance de ce territoire.",
    specificite: "notre commune d'origine, terrain de prédilection depuis 2019",
    distance: "0 km",
    services: ["Création complète de jardins paysagers · à partir de 2 500 €", "Entretien régulier mensuel ou bimensuel · dès 90 €/passage", "Élagage et taille raisonnée des arbres · devis gratuit", "Maçonnerie paysagère : terrasses, allées, murets · sur mesure"],
    quartiers: ["Le Village", "Les Bruyères", "Les Essarts", "La Ronzière", "La Chèvre d'Or"],
    metaTitle: "Paysagiste Saint-Didier-au-Mont-d'Or (69370) — LM Espace Vert",
    metaDescription: "Paysagiste à Saint-Didier-au-Mont-d'Or : création de jardins, entretien, élagage, terrasses. LM Espace Vert, votre artisan local depuis 2019. Devis gratuit.",
    faq: [
      {
        q: "LM Espace Vert est-il réellement basé à Saint-Didier-au-Mont-d'Or ?",
        a: "Oui, Saint-Didier-au-Mont-d'Or est notre commune de base depuis la création de l'entreprise en 2019. Nous connaissons parfaitement le territoire : le type de sol argileux sur les hauteurs, les micro-expositions, les contraintes d'accès dans les ruelles du village et les essences qui s'adaptent le mieux au microclimat des Monts d'Or. C'est notre terrain de jeu quotidien.",
      },
      {
        q: "Quels jardins avez-vous réalisés à Saint-Didier-au-Mont-d'Or ?",
        a: "Nous avons réalisé des dizaines de projets à Saint-Didier-au-Mont-d'Or depuis 2019 : jardins contemporains en terrasses pour profiter de la vue, aménagements naturels intégrés au paysage bocager, créations clé en main pour maisons neuves et rénovations complètes de jardins anciens. Demandez à voir notre book local lors de la visite gratuite.",
      },
      {
        q: "Intervenez-vous en urgence à Saint-Didier-au-Mont-d'Or ?",
        a: "Étant basés dans la commune, nous pouvons intervenir très rapidement en cas d'urgence : branches menaçantes après tempête, arbre penché, haie à tailler avant un événement. Appelez-nous directement au 06 72 58 73 53 pour les situations urgentes. Nous faisons notre maximum pour intervenir le jour même ou le lendemain.",
      },
    ],
    testimonial: {
      prenom: "Thomas G.",
      quartier: "Les Bruyères",
      texte: "Léo connaît notre jardin comme sa poche — il vit dans le village ! Il nous a créé une terrasse en pierre de Bourgogne avec vue sur Lyon, des massifs de graminées résistants à la sécheresse et un arrosage automatique. Un travail de professionnel passionné.",
    },
    nearbyVilles: [
      { slug: 'champagne', nom: "Champagne-au-Mont-d'Or" },
      { slug: 'saint-cyr', nom: "Saint-Cyr-au-Mont-d'Or" },
      { slug: 'poleymieux', nom: 'Poleymieux-au-Mont-d\'Or' },
    ],
    jardinsEntretenus: '95',
    delaiIntervention: '24h',
    gpsLat: 45.8338,
    gpsLng: 4.8033,
  },
  charbonnieres: {
    slug: 'charbonnieres',
    nom: 'Charbonnières-les-Bains',
    nomComplet: 'Charbonnières-les-Bains',
    codePostal: '69260',
    departement: 'Rhône',
    description: "Charbonnières-les-Bains est une élégante commune thermale à l'ouest de Lyon, réputée pour son casino, ses villas Art Déco et ses parcs arborés. Les jardins y sont souvent de belle taille, entourés de haies structurées et d'arbres centenaires. LM Espace Vert y intervient pour des créations et des entretiens à la hauteur des demeures de prestige de cette commune résidentielle prisée.",
    specificite: "station thermale de prestige, villas et parcs arborés haut de gamme",
    distance: "8 km",
    services: ["Entretien parcs et jardins de prestige · contrat annuel dès 150 €/mois", "Création jardins contemporains avec terrasses · à partir de 3 000 €", "Élagage des arbres centenaires · devis sur site", "Arrosage automatique intelligent · à partir de 1 800 €"],
    quartiers: ["Le Bourg", "Les Thermes", "La Chaponnière", "Les Hauts de Charbonnières"],
    metaTitle: "Paysagiste Charbonnières-les-Bains (69260) — LM Espace Vert",
    metaDescription: "Paysagiste à Charbonnières-les-Bains : jardins prestige, entretien parcs, élagage, terrasses. LM Espace Vert à 8 km. Devis gratuit sous 24h.",
    faq: [
      {
        q: "Intervenez-vous pour les jardins des villas Art Déco à Charbonnières ?",
        a: "Oui, Charbonnières-les-Bains possède un patrimoine architectural remarquable avec ses villas des années 1920-1930 et leurs jardins d'époque. Nous sommes sensibles à l'histoire de ces propriétés et créons des jardins qui respectent le style architectural tout en apportant des solutions contemporaines : arrosage automatique discret, massifs faciles d'entretien et éclairage paysager élégant.",
      },
      {
        q: "Comment gérez-vous l'élagage des grands arbres à Charbonnières ?",
        a: "Les propriétés de Charbonnières-les-Bains abritent souvent de vieux cèdres, séquoias et platanes. Nous réalisons des élagages raisonnés en préservant la structure de l'arbre : suppression des branches mortes ou dangereuses, rééquilibrage du houppier, réduction de hauteur si nécessaire. Nous travaillons toujours avec un arboriste certifié pour les arbres remarquables.",
      },
      {
        q: "Quel est votre délai d'intervention à Charbonnières-les-Bains ?",
        a: "Charbonnières-les-Bains est à environ 8 km de notre base de Saint-Didier-au-Mont-d'Or. Nous pouvons généralement proposer une visite gratuite sous 48 à 72h et démarrer un chantier dans les 2 semaines suivant l'acceptation du devis. Pour l'entretien régulier, nous intégrons facilement cette commune dans nos tournées du secteur ouest lyonnais.",
      },
    ],
    testimonial: {
      prenom: "Hélène B.",
      quartier: "Les Thermes",
      texte: "LM Espace Vert entretient notre parc de 2 000 m² depuis un an. Résultat irréprochable à chaque passage : pelouse parfaite, haies nettes, massifs soignés. Léo est ponctuel, sérieux et ses tarifs sont justes. Je recommande vivement.",
    },
    nearbyVilles: [
      { slug: 'tassin', nom: 'Tassin-la-Demi-Lune' },
      { slug: 'ecuelly', nom: 'Écully' },
      { slug: 'saint-didier', nom: "Saint-Didier-au-Mont-d'Or" },
    ],
    jardinsEntretenus: '41',
    delaiIntervention: '48h',
    gpsLat: 45.7900,
    gpsLng: 4.7617,
  },
  poleymieux: {
    slug: 'poleymieux',
    nom: 'Poleymieux-au-Mont-d\'Or',
    nomComplet: 'Poleymieux-au-Mont-d\'Or',
    codePostal: '69250',
    departement: 'Rhône',
    description: "Poleymieux-au-Mont-d'Or est un village authentique niché au cœur des Monts d'Or, connu pour son microclimat favorable et ses paysages de bocage préservés. Le village, classé parmi les plus beaux sites du Rhône, abrite des propriétés rurales avec de vastes jardins ouverts sur la nature environnante. LM Espace Vert y crée des jardins qui s'inscrivent naturellement dans ce paysage d'exception.",
    specificite: "au cœur des Monts d'Or, bocage préservé et microclimat favorable",
    distance: "6 km",
    services: ["Création jardins naturels intégrés au bocage · à partir de 2 000 €", "Entretien jardins ruraux et propriétés · dès 100 €/passage", "Taille fruitiers, haies bocagères et clôtures végétales", "Aménagement potagers et vergers · sur mesure"],
    quartiers: ["Le Village", "Les Grandes Terres", "La Goutte", "La Croix Rosier"],
    metaTitle: "Paysagiste Poleymieux-au-Mont-d'Or (69250) — LM Espace Vert",
    metaDescription: "Paysagiste à Poleymieux-au-Mont-d'Or : création jardins naturels, entretien, vergers, potagers. LM Espace Vert à 6 km. Devis gratuit.",
    faq: [
      {
        q: "Créez-vous des jardins respectueux du paysage bocager à Poleymieux ?",
        a: "Absolument. Poleymieux-au-Mont-d'Or est un site naturel remarquable et nous y travaillons avec une approche paysagère respectueuse : utilisation d'essences locales (charme, noisetier, prunellier, aubépine pour les haies bocagères), intégration dans la topographie existante, et création de jardins qui dialoguent avec le paysage agricole environnant.",
      },
      {
        q: "Intervenez-vous pour les propriétés rurales avec grands terrains à Poleymieux ?",
        a: "Oui, nous aimons les grands projets ruraux. À Poleymieux-au-Mont-d'Or, nous gérons des propriétés de 2 000 m² à plusieurs hectares : création de vergers avec des variétés anciennes, aménagement de prairies fleuries, taille des haies bocagères en période légale et création de jardins potagers productifs et esthétiques.",
      },
      {
        q: "Quelle est la meilleure période pour planter à Poleymieux-au-Mont-d'Or ?",
        a: "Sur les hauteurs des Monts d'Or, les conditions climatiques sont légèrement plus fraîches qu'en plaine lyonnaise. Nous recommandons les plantations en automne (octobre-novembre) pour les arbres et arbustes à feuilles caduques, et au printemps (mars-avril) pour les vivaces et les potagers. La période estivale est à éviter sans arrosage adapté.",
      },
    ],
    testimonial: {
      prenom: "Gérard M.",
      quartier: "Le Village",
      texte: "LM Espace Vert a transformé notre grande propriété rurale en un jardin harmonieux. Verger planté, haies bocagères taillées, potager en carrés surélevés — tout est parfait. Léo comprend vraiment le paysage des Monts d'Or. Excellent travail !",
    },
    nearbyVilles: [
      { slug: 'saint-didier', nom: "Saint-Didier-au-Mont-d'Or" },
      { slug: 'saint-cyr', nom: "Saint-Cyr-au-Mont-d'Or" },
      { slug: 'curis', nom: 'Curis-au-Mont-d\'Or' },
    ],
    jardinsEntretenus: '16',
    delaiIntervention: '48h',
    gpsLat: 45.8650,
    gpsLng: 4.7867,
  },
  albigny: {
    slug: 'albigny',
    nom: 'Albigny-sur-Saône',
    nomComplet: 'Albigny-sur-Saône',
    codePostal: '69250',
    departement: 'Rhône',
    description: "Albigny-sur-Saône est une commune résidentielle en bord de Saône, entre Neuville-sur-Saône et Collonges-au-Mont-d'Or. Le village allie charme des maisons de bord de rivière, prairies alluviales et quelques coteaux boisés. LM Espace Vert y propose des créations et des entretiens de jardins adaptés aux spécificités de ce cadre fluvial préservé.",
    specificite: "bord de Saône, entre prairies alluviales et coteaux boisés",
    distance: "13 km",
    services: ["Création jardins de bord de rivière · à partir de 2 500 €", "Entretien jardins et pelouses · dès 110 €/passage", "Élagage raisonné des arbres de berge", "Maçonnerie paysagère : terrasses et escaliers extérieurs"],
    quartiers: ["Le Village", "Les Berges", "La Prairie", "Les Coteaux"],
    metaTitle: "Paysagiste Albigny-sur-Saône (69250) — LM Espace Vert",
    metaDescription: "Paysagiste à Albigny-sur-Saône : création jardins, entretien pelouses, élagage, terrasses. LM Espace Vert intervient à 13 km. Devis gratuit.",
    faq: [
      {
        q: "Quelles spécificités pour les jardins en bord de Saône à Albigny ?",
        a: "Les jardins d'Albigny-sur-Saône en bord de Saône présentent des sols alluviaux riches mais souvent humides, voire inondables certaines années. Nous sélectionnons des espèces tolérantes à l'humidité pour les zones basses (carex, iris des marais, saules) et réservons les espèces classiques aux zones plus hautes et drainées. La préparation du sol est une étape clé que nous maîtrisons parfaitement.",
      },
      {
        q: "Proposez-vous des contrats d'entretien à Albigny-sur-Saône ?",
        a: "Oui, nous proposons des contrats d'entretien réguliers à Albigny-sur-Saône intégrés dans nos tournées du secteur Saône nord. Selon la superficie et les prestations, les passages peuvent être hebdomadaires, bimensuels ou mensuels. Le contrat inclut tonte, taille, désherbage et ramassage des déchets verts.",
      },
      {
        q: "Intervenez-vous malgré la distance de 13 km ?",
        a: "Absolument. Albigny-sur-Saône se trouve sur notre axe d'intervention nord, entre Collonges-au-Mont-d'Or et Neuville-sur-Saône. Nous réalisons régulièrement des chantiers dans ce secteur et pouvons proposer une visite gratuite sous 48 à 72h. Pas de frais de déplacement supplémentaire dans notre rayon de 20 km.",
      },
    ],
    testimonial: {
      prenom: "Nathalie C.",
      quartier: "Les Berges",
      texte: "Notre jardin en bord de Saône posait des problèmes d'humidité. LM Espace Vert a trouvé la solution : drainage, plantes adaptées et terrasse surélevée. Maintenant c'est un vrai havre de paix. Merci pour votre expertise et votre écoute !",
    },
    nearbyVilles: [
      { slug: 'neuville', nom: 'Neuville-sur-Saône' },
      { slug: 'collonges', nom: 'Collonges-au-Mont-d\'Or' },
      { slug: 'saint-cyr', nom: "Saint-Cyr-au-Mont-d'Or" },
    ],
    jardinsEntretenus: '14',
    delaiIntervention: '48h',
    gpsLat: 45.8733,
    gpsLng: 4.8400,
  },
}

export function generateStaticParams() {
  return Object.keys(villes).map((slug) => ({ ville: slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ ville: string }> }): Promise<Metadata> {
  const { ville: villeSlug } = await params
  const ville = villes[villeSlug]
  if (!ville) return {}

  // Titles and descriptions enriched with local SEO keywords
  const title = `Paysagiste ${ville.nom} (${ville.codePostal}) — Entretien, Création, Devis Gratuit | LM Espace Vert`
  const description = `LM Espace Vert, paysagiste à ${ville.nom} (${ville.codePostal}) : création de jardins, entretien, élagage, terrasses. Artisan local basé à ${ville.distance} — devis gratuit sous 24h. ${ville.services[0].split('·')[0].trim()} et plus.`

  return {
    title,
    description,
    keywords: [
      `paysagiste ${ville.nom}`,
      `paysagiste ${ville.codePostal}`,
      `entretien jardin ${ville.nom}`,
      `création jardin ${ville.nom}`,
      `élagage ${ville.nom}`,
      `devis gratuit paysagiste ${ville.nom}`,
      'LM Espace Vert',
      'paysagiste Lyon nord',
    ],
    alternates: { canonical: `https://www.lmespacevert.fr/secteur/${villeSlug}` },
    openGraph: {
      title,
      description,
      url: `https://www.lmespacevert.fr/secteur/${villeSlug}`,
      images: [{ url: '/images/realisations/lm-18.webp', width: 1200, height: 630, alt: `Paysagiste ${ville.nom} — LM Espace Vert` }],
    },
  }
}

export default async function SecteurPage({ params }: { params: Promise<{ ville: string }> }) {
  const { ville: villeSlug } = await params
  const ville = villes[villeSlug]
  if (!ville) notFound()

  const areaServedCity = {
    '@type': 'City',
    name: ville.nomComplet,
    postalCode: ville.codePostal,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: ville.gpsLat,
      longitude: ville.gpsLng,
    },
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `https://www.lmespacevert.fr/secteur/${villeSlug}`,
    name: 'LM Espace Vert',
    description: `Paysagiste professionnel intervenant à ${ville.nom} : création de jardins, entretien, élagage et maçonnerie paysagère. Devis gratuit.`,
    url: `https://www.lmespacevert.fr/secteur/${villeSlug}`,
    telephone: '+33672587353',
    areaServed: areaServedCity,
    address: {
      '@type': 'PostalAddress',
      addressLocality: "Saint-Didier-au-Mont-d'Or",
      postalCode: '69370',
      addressCountry: 'FR',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `Services paysagers à ${ville.nom}`,
      itemListElement: ville.services.map((s, i) => ({
        '@type': 'Offer',
        position: i + 1,
        itemOffered: {
          '@type': 'Service',
          name: s.split('·')[0].trim(),
          areaServed: areaServedCity,
        },
      })),
    },
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Paysagiste à ${ville.nom}`,
    description: `Création de jardins, entretien, élagage et maçonnerie paysagère à ${ville.nom} (${ville.codePostal}). Devis gratuit sous 24h.`,
    provider: {
      '@type': 'LocalBusiness',
      name: 'LM Espace Vert',
      '@id': 'https://www.lmespacevert.fr',
    },
    areaServed: areaServedCity,
    url: `https://www.lmespacevert.fr/secteur/${villeSlug}`,
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.lmespacevert.fr' },
      { '@type': 'ListItem', position: 2, name: 'Zones d\'intervention', item: 'https://www.lmespacevert.fr/secteurs' },
      { '@type': 'ListItem', position: 3, name: `Paysagiste ${ville.nom}`, item: `https://www.lmespacevert.fr/secteur/${villeSlug}` },
    ],
  }

  return (
    <>
      <JsonLd data={jsonLd} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* Breadcrumb */}
      <nav aria-label="Fil d'Ariane" className="border-b border-[#EDEDED] bg-white">
        <div className="container mx-auto max-w-7xl px-4 py-3 sm:px-6">
          <ol role="list" className="flex items-center gap-2 text-sm text-[#8C8F94]">
            <li><Link href="/" className="hover:text-[#2F2F2F]">Accueil</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href="/secteurs" className="hover:text-[#2F2F2F]">Zones d&apos;intervention</Link></li>
            <li aria-hidden="true">/</li>
            <li><span aria-current="page" className="text-[#2F2F2F]">Paysagiste {ville.nom}</span></li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative py-20 lg:py-28 overflow-hidden" style={{ backgroundColor: '#243238' }}>
        <div className="absolute inset-0 opacity-10">
          <Image src="/images/realisations/lm-18.webp" alt="" fill className="object-cover" />
        </div>
        <div className="relative container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <MapPin size={16} style={{ color: '#749A30' }} aria-hidden="true" />
              <span className="text-sm font-semibold" style={{ color: '#749A30' }}>{ville.nom} · {ville.codePostal} · {ville.distance} de notre base</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
              Paysagiste à {ville.nom}
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              {ville.description}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/devis"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors hover:bg-[#7E3A37]"
                style={{ backgroundColor: '#9E4B47', color: '#ffffff', boxShadow: '0 4px 20px rgba(158,75,71,0.35)' }}
              >
                Devis gratuit à {ville.nom} <ArrowRight size={14} />
              </Link>
              <a
                href="tel:+33674734698"
                className="inline-flex items-center gap-2 rounded-full border border-white/35 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
              >
                <Phone size={14} aria-hidden="true" /> 06 74 73 46 98
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats local */}
      <section className="bg-white border-b border-[#EDEDED]">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 py-8">
          <dl className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { value: ville.distance, label: `De Saint-Didier à ${ville.nom}` },
              { value: `${ville.jardinsEntretenus}+`, label: `Jardins entretenus à ${ville.nom}` },
              { value: ville.delaiIntervention, label: 'Délai d\'intervention moyen' },
              { value: '5★', label: 'Note Google · 20 avis' },
            ].map((s) => (
              <div key={s.label}>
                <dt className="font-display text-2xl sm:text-3xl font-bold" style={{ color: '#4A6320' }}>{s.value}</dt>
                <dd className="text-xs text-[#8C8F94] mt-1">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Services à [ville] */}
      <section className="py-20" style={{ backgroundColor: '#F4F1E9' }}>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#749A30' }}>Nos interventions</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold" style={{ color: '#4A6320' }}>
              Services paysagers à {ville.nom}
            </h2>
            <p className="text-[#8C8F94] mt-3">
              LM Espace Vert intervient à {ville.nom} {ville.specificite} pour tous vos projets d&apos;espaces verts.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {ville.services.map((service) => (
              <div key={service} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-[#EDEDED] shadow-sm">
                <CheckCircle size={18} style={{ color: '#749A30' }} className="mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span className="text-sm text-[#2F2F2F] font-medium">{service}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-3 mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full border border-[#EDEDED] bg-white px-6 py-3 text-sm font-semibold hover:border-[#749A30] hover:text-[#4A6320] transition-colors"
              style={{ color: '#2F2F2F' }}
            >
              Toutes nos prestations <ArrowRight size={14} />
            </Link>
            <Link
              href="/galerie"
              className="inline-flex items-center gap-2 rounded-full border border-[#EDEDED] bg-white px-6 py-3 text-sm font-semibold hover:border-[#749A30] hover:text-[#4A6320] transition-colors"
              style={{ color: '#2F2F2F' }}
            >
              Galerie de réalisations <ArrowRight size={14} />
            </Link>
            <Link
              href="/avant-apres"
              className="inline-flex items-center gap-2 rounded-full border border-[#EDEDED] bg-white px-6 py-3 text-sm font-semibold hover:border-[#749A30] hover:text-[#4A6320] transition-colors"
              style={{ color: '#2F2F2F' }}
            >
              Avant / Après <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Quartiers */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-2xl mx-auto text-center mb-8">
            <h2 className="font-display text-2xl font-bold" style={{ color: '#4A6320' }}>
              Quartiers et zones desservies à {ville.nom}
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-xl mx-auto">
            {ville.quartiers.map((q) => (
              <span key={q} className="flex items-center gap-1.5 rounded-full border border-[#EDEDED] bg-[#F4F1E9] px-4 py-1.5 text-sm text-[#8C8F94]">
                <MapPin size={11} aria-hidden="true" /> {q}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ ville-spécifique */}
      <section style={{ backgroundColor: '#F4F1E9' }} className="py-16">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="font-display text-2xl font-bold mb-8 text-center" style={{ color: '#4A6320' }}>
            Questions fréquentes — Paysagiste à {ville.nom}
          </h2>
          <div className="space-y-3">
            {ville.faq.map((item) => (
              <details key={item.q} className="group border border-[#EDEDED] rounded-xl overflow-hidden bg-white">
                <summary className="flex items-center justify-between px-5 py-4 cursor-pointer font-semibold text-sm list-none" style={{ color: '#2F2F2F' }}>
                  <span>{item.q}</span>
                  <ChevronDown size={16} className="shrink-0 ml-3 transition-transform group-open:rotate-180" style={{ color: '#749A30' }} aria-hidden="true" />
                </summary>
                <div className="px-5 pb-4 pt-1 text-sm leading-relaxed" style={{ color: '#8C8F94', backgroundColor: '#F4F1E9' }}>
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>


      {/* Villes proches — maillage interne */}
      <section style={{ backgroundColor: '#F4F1E9' }} className="py-14">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#749A30' }}>Secteurs voisins</p>
          <h2 className="font-display text-xl font-bold mb-6" style={{ color: '#4A6320' }}>
            Nous intervenons aussi dans les communes proches de {ville.nom}
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {ville.nearbyVilles.map((v) => (
              <Link
                key={v.slug}
                href={`/secteur/${v.slug}`}
                className="inline-flex items-center gap-2 rounded-full border border-[#EDEDED] bg-white px-5 py-2 text-sm font-medium hover:border-[#749A30] hover:text-[#4A6320] transition-colors"
                style={{ color: '#2F2F2F' }}
              >
                <MapPin size={12} style={{ color: '#749A30' }} aria-hidden="true" />
                {v.nom}
              </Link>
            ))}
            <Link
              href="/secteurs"
              className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition-opacity hover:opacity-80"
              style={{ backgroundColor: '#243238', color: '#ffffff' }}
            >
              Toutes nos zones <ArrowRight size={12} />
            </Link>
          </div>
        </div>
      </section>

      {/* Avis clients */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <h2 className="font-display text-2xl font-bold mb-3" style={{ color: '#4A6320' }}>
              Clients satisfaits à {ville.nom} et alentours
            </h2>
            <div className="flex items-center justify-center gap-1">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />)}
              <span className="ml-2 text-sm font-bold" style={{ color: '#2F2F2F' }}>5.0 — 20 avis Google</span>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { name: "Patricia Ferrere", city: "Il y a 1 semaine", text: "Envoi des devis et interventions très rapides et qualitatives. Léo est de très bon conseil, disponible pour échanger. Nous le conseillons !" },
              { name: "Gaelle Jaine", city: "Il y a 1 semaine", text: "Un début de collaboration qui se met en place de manière très fluide ! Merci !" },
              { name: "Marie-Laurence Coquet", city: "Il y a 3 semaines", text: "Travail soigné et de qualité. Entreprise très sérieuse." },
            ].map((t) => (
              <article key={t.name} className="bg-white rounded-2xl border border-[#EDEDED] p-6 shadow-sm">
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, i) => <Star key={i} size={12} className="fill-yellow-400 text-yellow-400" />)}
                </div>
                <blockquote className="text-sm text-[#8C8F94] italic leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</blockquote>
                <footer className="text-sm font-semibold" style={{ color: '#4A6320' }}>{t.name} — <span className="font-normal text-[#8C8F94]">{t.city}</span></footer>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: '#243238' }} className="py-20">
        <div className="container mx-auto max-w-xl px-4 sm:px-6 text-center">
          <div className="flex items-center justify-center gap-1 mb-3">
            <Clock size={14} style={{ color: '#749A30' }} aria-hidden="true" />
            <span className="text-sm" style={{ color: '#749A30' }}>Intervention sous 48h à {ville.nom}</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3">
            Votre projet à {ville.nom} ?<br />Nous sommes à {ville.distance}.
          </h2>
          <p className="text-white/70 mb-8">Devis gratuit · Sans engagement · Réponse sous 24h</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/devis"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors hover:bg-[#7E3A37]"
              style={{ backgroundColor: '#9E4B47', color: '#ffffff', boxShadow: '0 4px 20px rgba(158,75,71,0.35)' }}
            >
              Demander mon devis <ArrowRight size={14} />
            </Link>
            <a
              href="tel:+33674734698"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
            >
              <Phone size={14} /> 06 74 73 46 98
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
