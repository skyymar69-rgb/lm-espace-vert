// Conseil de jardinage automatique selon le mois

const tips: Record<number, { label: string; title: string; tip: string; icon: string; color: string }> = {
  1:  { label: 'Janvier', icon: '❄️', color: 'bg-blue-50 border-blue-200 text-blue-800',
        title: 'Protégez vos plantes du gel',
        tip: 'Couvrez les plantes fragiles avec un voile hivernal. Taillez les arbres fruitiers par temps sec.' },
  2:  { label: 'Février', icon: '🌱', color: 'bg-blue-50 border-blue-200 text-blue-800',
        title: 'Préparez la saison',
        tip: 'Commencez les semis sous abri. Taillez les rosiers avant la reprise végétative.' },
  3:  { label: 'Mars', icon: '🌸', color: 'bg-green-50 border-green-200 text-green-800',
        title: 'Réveil du jardin',
        tip: 'Désherbez, scarifiez la pelouse et apportez un engrais de printemps. Plantez les vivaces.' },
  4:  { label: 'Avril', icon: '🌼', color: 'bg-green-50 border-green-200 text-green-800',
        title: 'Pleine activité',
        tip: 'Semez les gazons, plantez les annuelles. Arrosez régulièrement si les pluies sont rares.' },
  5:  { label: 'Mai', icon: '🌿', color: 'bg-green-50 border-green-200 text-green-800',
        title: 'Taille des haies',
        tip: 'Tondez régulièrement, taillez les haies après la floraison. C\'est le bon moment pour les massifs.' },
  6:  { label: 'Juin', icon: '☀️', color: 'bg-yellow-50 border-yellow-200 text-yellow-800',
        title: 'Arrosage & entretien',
        tip: 'Arrosez tôt le matin pour limiter l\'évaporation. Paillez les pieds des plantes pour conserver l\'humidité.' },
  7:  { label: 'Juillet', icon: '🌞', color: 'bg-orange-50 border-orange-200 text-orange-800',
        title: 'Canicule : protégez',
        tip: 'Arrosage quotidien pour les jardinières et potagers. Évitez de tondre par forte chaleur.' },
  8:  { label: 'Août', icon: '🌻', color: 'bg-orange-50 border-orange-200 text-orange-800',
        title: 'Entretien estival',
        tip: 'Continuez l\'arrosage. Supprimez les fleurs fanées pour prolonger la floraison.' },
  9:  { label: 'Septembre', icon: '🍂', color: 'bg-amber-50 border-amber-200 text-amber-800',
        title: 'Plantations d\'automne',
        tip: 'Excellent mois pour planter arbres et arbustes. Semez un gazon d\'automne pour combler les zones chauve.' },
  10: { label: 'Octobre', icon: '🍁', color: 'bg-amber-50 border-amber-200 text-amber-800',
        title: 'Ramassage des feuilles',
        tip: 'Ramassez les feuilles mortes pour éviter les maladies. Plantez les bulbes printaniers.' },
  11: { label: 'Novembre', icon: '🌧️', color: 'bg-slate-50 border-slate-200 text-slate-700',
        title: 'Préparation hivernale',
        tip: 'Taillez les arbres fruitiers. Rentrez les plantes fragiles. Préparez le sol pour le printemps.' },
  12: { label: 'Décembre', icon: '⛄', color: 'bg-blue-50 border-blue-200 text-blue-800',
        title: 'Repos végétatif',
        tip: 'Protégez les plantes du gel. C\'est la période idéale pour planifier les aménagements du printemps.' },
}

export function SeasonalTip() {
  const month = new Date().getMonth() + 1
  const tip = tips[month] ?? tips[1]

  return (
    <div className={`flex gap-3 rounded-xl border p-4 ${tip.color}`}>
      <span className="text-2xl flex-shrink-0 mt-0.5" aria-hidden="true">{tip.icon}</span>
      <div>
        <p className="text-xs font-bold uppercase tracking-wider opacity-70 mb-0.5">
          Conseil du mois — {tip.label}
        </p>
        <p className="font-semibold text-sm mb-1">{tip.title}</p>
        <p className="text-sm opacity-80 leading-relaxed">{tip.tip}</p>
      </div>
    </div>
  )
}
