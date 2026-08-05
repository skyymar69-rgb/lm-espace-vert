// Source de vérité unique pour les chiffres de l'entreprise.
// Valeurs confirmées par le client (fiche Google Business « LM Espace Vert »).

export const FOUNDED_YEAR = 2019
export const CURRENT_YEAR = 2026
export const EXPERIENCE_YEARS = CURRENT_YEAR - FOUNDED_YEAR // 7

// Avis Google — valeurs réelles confirmées (fiche Google : 5/5 · 20 avis)
export const GOOGLE_RATING = '5,0' // affichage FR
export const GOOGLE_RATING_NUM = '5' // pour schema.org
export const GOOGLE_REVIEWS = 20 // chiffre réel Google

// Volume d'activité
export const PROJECTS_DONE = '200+'
export const CLIENTS = '200+'

// Coordonnées
export const PHONE_DISPLAY = '06 72 58 73 53'
export const PHONE_E164 = '+33672587353'
export const PHONE_WA = '33672587353'
export const EMAIL = 'contact@lm-espace-vert.fr'

// Délais de réponse — formulation unique déclinée par canal
export const RESPONSE_PHONE = 'Réponse en moins de 2h en semaine'
export const RESPONSE_FORM = 'Réponse sous 24h'
export const RESPONSE_QUOTE = 'Devis après visite sous 48h'
