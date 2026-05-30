// Source de vérité unique pour les chiffres de l'entreprise.
// ⚠️ À CONFIRMER PAR LE CLIENT : remplacer par les vraies valeurs Google Business.
// (Le site contenait des valeurs contradictoires — 5,0/28 vs 4,9/47, 5 ans vs 7 ans.
//  Unifié ici de façon cohérente ; modifiable en un seul endroit.)

export const FOUNDED_YEAR = 2019
export const CURRENT_YEAR = 2026
export const EXPERIENCE_YEARS = CURRENT_YEAR - FOUNDED_YEAR // 7

// Avis Google — valeurs unifiées (à confirmer avec la fiche Google Business réelle)
export const GOOGLE_RATING = '4,9' // affichage FR
export const GOOGLE_RATING_NUM = '4.9' // pour schema.org
export const GOOGLE_REVIEWS = 15 // chiffre réel Google (vu sur lmespacevert.fr)

// Volume d'activité
export const PROJECTS_DONE = '200+'
export const CLIENTS = '200+'

// Coordonnées
export const PHONE_DISPLAY = '06 72 58 73 53'
export const PHONE_E164 = '+33672587353'
export const PHONE_WA = '33672587353'
export const EMAIL = 'contact@lmespacevert.fr'

// Délais de réponse — formulation unique déclinée par canal
export const RESPONSE_PHONE = 'Réponse en moins de 2h en semaine'
export const RESPONSE_FORM = 'Réponse sous 24h'
export const RESPONSE_QUOTE = 'Devis après visite sous 48h'
