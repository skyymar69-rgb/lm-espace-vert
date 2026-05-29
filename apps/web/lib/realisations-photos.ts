// Source de vérité unique — photos réelles des chantiers LM Espace Vert.
// 42 photos uniques (aucun doublon), converties en WebP optimisé (≤1600px, q82).
// Chaque entrée porte un alt concret + une description longue (SEO/accessibilité).

export type PhotoCat =
  | 'creation'
  | 'maconnerie'
  | 'engazonnement'
  | 'plantation'
  | 'elagage'
  | 'entretien'

export type Realisation = {
  src: string
  alt: string
  title: string
  description: string
  cat: PhotoCat
  ville: string
  orient: 'paysage' | 'portrait'
}

export const photoCategories: { id: 'tout' | PhotoCat; label: string }[] = [
  { id: 'tout', label: 'Toutes nos réalisations' },
  { id: 'creation', label: 'Création & aménagement' },
  { id: 'maconnerie', label: 'Maçonnerie & terrasses' },
  { id: 'engazonnement', label: 'Engazonnement' },
  { id: 'plantation', label: 'Plantation & massifs' },
  { id: 'elagage', label: 'Élagage & taille' },
  { id: 'entretien', label: 'Entretien' },
]

export const catLabel: Record<PhotoCat, string> = {
  creation: 'Création',
  maconnerie: 'Maçonnerie',
  engazonnement: 'Engazonnement',
  plantation: 'Plantation',
  elagage: 'Élagage',
  entretien: 'Entretien',
}

const B = '/images/realisations'

export const realisationsPhotos: Realisation[] = [
  { src: `${B}/lm-01.webp`, cat: 'creation', orient: 'paysage', ville: "Saint-Didier-au-Mont-d'Or",
    title: 'Terrassement d’un terrain en pente',
    alt: 'Terrain en pente terrassé et clôturé, prêt pour un aménagement paysager à Saint-Didier-au-Mont-d’Or',
    description: 'Préparation et terrassement d’un terrain en pente clôturé avant la création complète du jardin.' },

  { src: `${B}/lm-02.webp`, cat: 'maconnerie', orient: 'paysage', ville: 'Limonest',
    title: 'Préparation d’une cour et d’une allée',
    alt: 'Cour et allée de garage en cours de préparation par LM Espace Vert à Limonest',
    description: 'Décaissement et préparation du support d’une cour et d’une allée carrossable avant pose du revêtement.' },

  { src: `${B}/lm-03.webp`, cat: 'engazonnement', orient: 'paysage', ville: 'Écully',
    title: 'Préparation du sol avant engazonnement',
    alt: 'Sol nivelé et protégé par un géotextile avant la pose d’une nouvelle pelouse à Écully',
    description: 'Préparation du terrain et pose d’un géotextile, étape clé avant l’engazonnement d’une nouvelle pelouse.' },

  { src: `${B}/lm-04.webp`, cat: 'engazonnement', orient: 'paysage', ville: 'Écully',
    title: 'Nouvelle pelouse engazonnée',
    alt: 'Pelouse verte fraîchement engazonnée le long d’une clôture dans un jardin à Écully',
    description: 'Pelouse dense et homogène obtenue après préparation du sol et engazonnement réalisé par nos équipes.' },

  { src: `${B}/lm-05.webp`, cat: 'creation', orient: 'paysage', ville: 'Dardilly',
    title: 'Terrassement à la mini-pelle',
    alt: 'Terrassement d’un jardin à la mini-pelle mécanique sur un chantier paysager à Dardilly',
    description: 'Travaux de terrassement à la mini-pelle pour modeler le terrain avant l’aménagement du jardin.' },

  { src: `${B}/lm-06.webp`, cat: 'elagage', orient: 'paysage', ville: 'Limonest',
    title: 'Abattage et extraction d’arbre',
    alt: 'Pelleteuse extrayant une grosse souche d’arbre lors d’un abattage à Limonest',
    description: 'Abattage et extraction sécurisés d’un arbre à l’aide d’engins mécaniques, dessouchage compris.' },

  { src: `${B}/lm-07.webp`, cat: 'elagage', orient: 'paysage', ville: "Saint-Didier-au-Mont-d'Or",
    title: 'Abattage d’arbre et évacuation',
    alt: 'Tronc d’arbre abattu et bûches prêtes à être évacuées sur un chantier à Saint-Didier-au-Mont-d’Or',
    description: 'Abattage d’un arbre, débitage du tronc en bûches et évacuation complète des déchets verts.' },

  { src: `${B}/lm-08.webp`, cat: 'entretien', orient: 'portrait', ville: 'Tassin-la-Demi-Lune',
    title: 'Taille de haie soignée',
    alt: 'Haie parfaitement taillée et alignée le long d’une allée de jardin à Tassin-la-Demi-Lune',
    description: 'Taille nette et régulière d’une haie sur toute sa longueur pour un rendu impeccable et structuré.' },

  { src: `${B}/lm-09.webp`, cat: 'creation', orient: 'paysage', ville: 'Écully',
    title: 'Jardin contemporain avec piscine',
    alt: 'Jardin paysager contemporain avec piscine et pelouse soignée devant une maison moderne à Écully',
    description: 'Création d’un jardin contemporain : pelouse impeccable, abords de piscine et aménagement épuré.' },

  { src: `${B}/lm-10.webp`, cat: 'creation', orient: 'portrait', ville: 'Champagne-au-Mont-d’Or',
    title: 'Aménagement extérieur contemporain',
    alt: 'Aménagement paysager moderne avec terrasse et jeune arbre devant une maison contemporaine',
    description: 'Aménagement extérieur contemporain associant terrasse, pelouse et plantation d’un arbre d’ornement.' },

  { src: `${B}/lm-11.webp`, cat: 'plantation', orient: 'paysage', ville: 'Limonest',
    title: 'Plantation d’arbre et allée pavée',
    alt: 'Jeune arbre planté dans une pelouse bordée d’une allée pavée dans un jardin à Limonest',
    description: 'Plantation d’un arbre d’ornement au cœur d’une pelouse, en bordure d’une allée pavée soignée.' },

  { src: `${B}/lm-12.webp`, cat: 'creation', orient: 'paysage', ville: 'Dardilly',
    title: 'Création de massifs et aménagement',
    alt: 'Terrain en cours d’aménagement avec création de massifs paysagers à Dardilly',
    description: 'Modelage du terrain et création de massifs, première étape d’un aménagement paysager complet.' },

  { src: `${B}/lm-13.webp`, cat: 'maconnerie', orient: 'paysage', ville: "Saint-Cyr-au-Mont-d'Or",
    title: 'Allée pavée et pin parasol',
    alt: 'Allée pavée bordant une maison avec un grand pin parasol à Saint-Cyr-au-Mont-d’Or',
    description: 'Réalisation d’une allée pavée mettant en valeur un pin parasol et la façade de la propriété.' },

  { src: `${B}/lm-14.webp`, cat: 'maconnerie', orient: 'paysage', ville: 'Caluire-et-Cuire',
    title: 'Allée pavée le long de la façade',
    alt: 'Allée pavée réalisée le long de la façade d’une maison à Caluire-et-Cuire',
    description: 'Pose d’un dallage et d’une allée pavée structurant les abords immédiats de la maison.' },

  { src: `${B}/lm-15.webp`, cat: 'elagage', orient: 'portrait', ville: 'Limonest',
    title: 'Taille d’arbustes en topiaire',
    alt: 'Arbustes taillés en boules régulières le long d’une allée à Limonest',
    description: 'Taille ornementale d’arbustes en topiaires pour structurer et rythmer l’entrée de la propriété.' },

  { src: `${B}/lm-16.webp`, cat: 'creation', orient: 'portrait', ville: "Saint-Didier-au-Mont-d'Or",
    title: 'Pins parasols et escalier paysager',
    alt: 'Grands pins parasols surplombant un escalier paysager à Saint-Didier-au-Mont-d’Or',
    description: 'Mise en valeur de pins parasols existants et intégration d’un escalier paysager dans la pente.' },

  { src: `${B}/lm-17.webp`, cat: 'elagage', orient: 'portrait', ville: 'Écully',
    title: 'Taille ornementale de conifères',
    alt: 'Conifères taillés en topiaires ornementales dans un jardin à Écully',
    description: 'Taille de précision de conifères en topiaires, entretien régulier pour des formes nettes et durables.' },

  { src: `${B}/lm-18.webp`, cat: 'creation', orient: 'paysage', ville: 'Charbonnières-les-Bains',
    title: 'Jardin paysager arboré',
    alt: 'Vaste jardin paysager avec pelouse et massifs arborés à Charbonnières-les-Bains',
    description: 'Jardin paysager complet : grande pelouse, massifs structurés et sujets arborés harmonieusement disposés.' },

  { src: `${B}/lm-19.webp`, cat: 'creation', orient: 'portrait', ville: 'Dardilly',
    title: 'Aménagement d’un terrain en pente',
    alt: 'Terrain en pente préparé et terrassé le long d’une clôture en bois à Dardilly',
    description: 'Reprise d’un terrain en pente : terrassement et modelage avant plantation et engazonnement.' },

  { src: `${B}/lm-20.webp`, cat: 'elagage', orient: 'portrait', ville: 'Limonest',
    title: 'Élagage d’un arbre de haut jet',
    alt: 'Arbre fraîchement élagué se détachant sur un ciel bleu à Limonest',
    description: 'Élagage raisonné d’un arbre de haut jet pour le sécuriser, l’aérer et dégager les vues.' },

  { src: `${B}/lm-21.webp`, cat: 'maconnerie', orient: 'portrait', ville: 'Écully',
    title: 'Création d’une terrasse en bois',
    alt: 'Terrasse en bois exotique neuve en cours de finition le long d’une maison à Écully',
    description: 'Construction d’une terrasse en bois exotique sur ossature, pour un espace de vie extérieur durable.' },

  { src: `${B}/lm-22.webp`, cat: 'maconnerie', orient: 'portrait', ville: 'Écully',
    title: 'Pose d’une terrasse en bois',
    alt: 'Pose des lames d’une terrasse en bois le long d’une maison contemporaine à Écully',
    description: 'Pose soignée des lames d’une terrasse en bois, alignement et fixations réalisés dans les règles de l’art.' },

  { src: `${B}/lm-23.webp`, cat: 'maconnerie', orient: 'portrait', ville: 'Champagne-au-Mont-d’Or',
    title: 'Escalier de jardin en bois',
    alt: 'Escalier de jardin en bois nouvellement construit pour franchir un talus',
    description: 'Construction d’un escalier de jardin en bois permettant de franchir un dénivelé en toute sécurité.' },

  { src: `${B}/lm-24.webp`, cat: 'entretien', orient: 'paysage', ville: 'Tassin-la-Demi-Lune',
    title: 'Entretien de haie et de pelouse',
    alt: 'Haie taillée et pelouse entretenue dans un jardin résidentiel à Tassin-la-Demi-Lune',
    description: 'Entretien complet d’un jardin : taille de haie au cordeau et tonte régulière de la pelouse.' },

  { src: `${B}/lm-25.webp`, cat: 'maconnerie', orient: 'portrait', ville: 'Dardilly',
    title: 'Pose d’une clôture en bois',
    alt: 'Clôture en bois posée sur un terrain en pente terrassé à Dardilly',
    description: 'Installation d’une clôture en bois sur un terrain en pente, après terrassement et nivellement.' },

  { src: `${B}/lm-26.webp`, cat: 'creation', orient: 'portrait', ville: 'Limonest',
    title: 'Travaux de terrassement',
    alt: 'Godet de pelleteuse en action lors de travaux de terrassement à Limonest',
    description: 'Terrassement mécanisé pour préparer la plateforme d’un futur aménagement paysager.' },

  { src: `${B}/lm-27.webp`, cat: 'maconnerie', orient: 'portrait', ville: "Saint-Didier-au-Mont-d'Or",
    title: 'Bordures en acier Corten',
    alt: 'Bordures en acier Corten délimitant une allée paysagère à Saint-Didier-au-Mont-d’Or',
    description: 'Pose de bordures en acier Corten pour structurer une allée et séparer nettement les espaces.' },

  { src: `${B}/lm-28.webp`, cat: 'maconnerie', orient: 'portrait', ville: 'Caluire-et-Cuire',
    title: 'Allée et muret en pierre',
    alt: 'Allée en enrobé bordée d’un muret en pierre naturelle à Caluire-et-Cuire',
    description: 'Réalisation d’une allée carrossable bordée d’un muret en pierre pour un rendu élégant et durable.' },

  { src: `${B}/lm-29.webp`, cat: 'creation', orient: 'portrait', ville: 'Dardilly',
    title: 'Terrassement et mur de soutènement',
    alt: 'Pelleteuse réalisant un terrassement le long d’un mur de soutènement à Dardilly',
    description: 'Terrassement et préparation d’un mur de soutènement pour stabiliser un terrain en dénivelé.' },

  { src: `${B}/lm-30.webp`, cat: 'maconnerie', orient: 'portrait', ville: 'Écully',
    title: 'Terrasse bois et bassin',
    alt: 'Terrasse en bois avec bassin d’eau et muret paysager dans un jardin à Écully',
    description: 'Aménagement d’une terrasse en bois associée à un bassin et un muret, pour un espace détente raffiné.' },

  { src: `${B}/lm-31.webp`, cat: 'creation', orient: 'portrait', ville: 'Champagne-au-Mont-d’Or',
    title: 'Chantier d’aménagement extérieur',
    alt: 'Livraison de béton par camion-toupie sur un chantier d’aménagement extérieur',
    description: 'Coordination d’un chantier d’aménagement extérieur avec livraison de béton pour les ouvrages maçonnés.' },

  { src: `${B}/lm-32.webp`, cat: 'creation', orient: 'portrait', ville: 'Dardilly',
    title: 'Terrassement de grande ampleur',
    alt: 'Chantier de terrassement avec dumper et déplacement de terre à Dardilly',
    description: 'Terrassement de grande ampleur : déplacement et évacuation de terre à l’aide d’un dumper de chantier.' },

  { src: `${B}/lm-33.webp`, cat: 'creation', orient: 'portrait', ville: 'Limonest',
    title: 'Évacuation de terre',
    alt: 'Évacuation de terre par camion-benne et pelleteuse sur un chantier paysager à Limonest',
    description: 'Chargement et évacuation des terres excédentaires pour préparer le terrain à l’aménagement.' },

  { src: `${B}/lm-34.webp`, cat: 'maconnerie', orient: 'portrait', ville: 'Écully',
    title: 'Allée pavée et jardin contemporain',
    alt: 'Allée pavée traversant un jardin contemporain devant une maison moderne à Écully',
    description: 'Allée pavée intégrée à un jardin contemporain, alliant circulation pratique et esthétique soignée.' },

  { src: `${B}/lm-35.webp`, cat: 'maconnerie', orient: 'portrait', ville: "Saint-Didier-au-Mont-d'Or",
    title: 'Mur de soutènement en Corten',
    alt: 'Mur de soutènement en acier Corten avec massifs plantés à Saint-Didier-au-Mont-d’Or',
    description: 'Mur de soutènement en acier Corten habillé de massifs, pour rattraper un dénivelé avec élégance.' },

  { src: `${B}/lm-36.webp`, cat: 'maconnerie', orient: 'portrait', ville: 'Dardilly',
    title: 'Escalier extérieur sur talus',
    alt: 'Escalier en bois construit sur un talus paysager protégé par un géotextile à Dardilly',
    description: 'Construction d’un escalier extérieur sur talus pour sécuriser et faciliter l’accès au jardin.' },

  { src: `${B}/lm-37.webp`, cat: 'plantation', orient: 'portrait', ville: 'Limonest',
    title: 'Plantation d’arbre avec tuteur',
    alt: 'Jeune arbre planté et tuteuré le long d’une allée sur un chantier à Limonest',
    description: 'Plantation et tuteurage d’un jeune arbre pour assurer sa reprise et sa croissance droite.' },

  { src: `${B}/lm-38.webp`, cat: 'creation', orient: 'portrait', ville: 'Charbonnières-les-Bains',
    title: 'Aménagement d’entrée de propriété',
    alt: 'Entrée de propriété aménagée avec allée pavée et massifs à Charbonnières-les-Bains',
    description: 'Aménagement d’une entrée de propriété : allée pavée, massifs et plantations pour un accueil soigné.' },

  { src: `${B}/lm-39.webp`, cat: 'plantation', orient: 'portrait', ville: 'Charbonnières-les-Bains',
    title: 'Massif avant aménagement',
    alt: 'Massif de jardin avant plantation, sol nu et jeunes arbustes à Charbonnières-les-Bains',
    description: 'État initial d’un massif avant réaménagement : sol nu et arbustes épars en attente de plantation.' },

  { src: `${B}/lm-40.webp`, cat: 'plantation', orient: 'portrait', ville: 'Charbonnières-les-Bains',
    title: 'Massif fleuri d’azalées',
    alt: 'Massif courbe planté d’azalées roses en fleurs avec paillage à Charbonnières-les-Bains',
    description: 'Création d’un massif courbe planté d’azalées roses et paillé pour un entretien réduit et un effet immédiat.' },

  { src: `${B}/lm-41.webp`, cat: 'plantation', orient: 'paysage', ville: 'Charbonnières-les-Bains',
    title: 'Massif fleuri et pelouse',
    alt: 'Massif d’azalées roses en fleurs bordé d’une pelouse soignée à Charbonnières-les-Bains',
    description: 'Massif fleuri d’azalées mis en valeur par une pelouse impeccable, pour un jardin coloré et structuré.' },

  { src: `${B}/lm-42.webp`, cat: 'plantation', orient: 'portrait', ville: 'Charbonnières-les-Bains',
    title: 'Entrée fleurie de propriété',
    alt: 'Entrée de propriété avec massif fleuri rose et allée pavée à Charbonnières-les-Bains',
    description: 'Mise en scène fleurie de l’entrée d’une propriété, associant massif coloré et allée pavée.' },
]

// Paires avant / après vérifiées (même chantier).
export type BeforeAfter = {
  title: string
  ville: string
  tag: string
  description: string
  avant: string
  apres: string
}

export const beforeAfterPairs: BeforeAfter[] = [
  {
    title: 'Engazonnement complet d’un terrain',
    ville: 'Écully',
    tag: 'Engazonnement',
    description:
      'Remise en état d’un terrain : nivellement, pose d’un géotextile puis engazonnement. Une pelouse dense et homogène en quelques semaines.',
    avant: `${B}/lm-03.webp`,
    apres: `${B}/lm-04.webp`,
  },
  {
    title: 'Création d’un massif fleuri',
    ville: 'Charbonnières-les-Bains',
    tag: 'Plantation & massifs',
    description:
      'Transformation d’un massif au sol nu en une composition courbe d’azalées roses paillée, pour un jardin coloré et facile à entretenir.',
    avant: `${B}/lm-39.webp`,
    apres: `${B}/lm-40.webp`,
  },
]

// Photo héro principale (jardin contemporain avec piscine).
export const heroPhoto = {
  src: `${B}/lm-09.webp`,
  alt: 'Jardin paysager contemporain avec piscine et pelouse soignée réalisé par LM Espace Vert près de Lyon',
}
