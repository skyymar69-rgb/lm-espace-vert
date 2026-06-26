'use client'

import { ReactGoogleReviews } from 'react-google-reviews'
import 'react-google-reviews/dist/index.css'

/**
 * Carrousel défilant de TOUS les avis Google, alimenté par Featurable.
 *
 * Configuration : créer un widget gratuit sur https://featurable.com (connecté à
 * la fiche Google « LM Espace Vert »), choisir la mise en page « Carousel », puis
 * renseigner l'ID dans la variable d'environnement NEXT_PUBLIC_FEATURABLE_WIDGET_ID
 * (.env.local en local, et dans les variables d'environnement Vercel en production).
 *
 * Tant que l'ID n'est pas défini, on affiche `fallback` (les 3 vrais avis connus).
 * Les avis se mettent à jour automatiquement (Featurable resynchronise la fiche
 * Google toutes les ~48h).
 */
export function GoogleReviewsCarousel({ fallback }: { fallback: React.ReactNode }) {
  const featurableId = process.env.NEXT_PUBLIC_FEATURABLE_WIDGET_ID

  if (!featurableId) {
    return <>{fallback}</>
  }

  return (
    <ReactGoogleReviews
      layout="carousel"
      featurableId={featurableId}
      carouselAutoplay
      maxCharacters={250}
    />
  )
}
