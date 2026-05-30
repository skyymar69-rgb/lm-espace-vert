type MonthTask = {
  month: number
  label: string
  tasks: string[]
  emoji: string
  season: string
}

const calendarData: MonthTask[] = [
  { month: 1,  label: 'Jan', emoji: '❄️', season: 'Hiver',     tasks: ['Taille arbres fruitiers', 'Protection gel', 'Planification annuelle'] },
  { month: 2,  label: 'Fév', emoji: '🌱', season: 'Hiver',     tasks: ['Taille rosiers', 'Semis sous abri', 'Commande végétaux'] },
  { month: 3,  label: 'Mar', emoji: '🌸', season: 'Printemps', tasks: ['Scarification pelouse', 'Plantation vivaces', 'Engrais de fond'] },
  { month: 4,  label: 'Avr', emoji: '🌼', season: 'Printemps', tasks: ['Semis gazon', 'Taille haies de printemps', 'Arrosage régulier'] },
  { month: 5,  label: 'Mai', emoji: '🌿', season: 'Printemps', tasks: ['Tonte hebdomadaire', 'Plantation annuelles', 'Désherbage massifs'] },
  { month: 6,  label: 'Jun', emoji: '☀️', season: 'Été',       tasks: ['Arrosage quotidien', 'Paillage', 'Taille haies topiaires'] },
  { month: 7,  label: 'Jul', emoji: '🌞', season: 'Été',       tasks: ['Arrosage matin/soir', 'Entretien gazons', 'Traitement maladies'] },
  { month: 8,  label: 'Aoû', emoji: '🌻', season: 'Été',       tasks: ['Fleurs fanées', 'Bouturage', 'Préparer sol automne'] },
  { month: 9,  label: 'Sep', emoji: '🍂', season: 'Automne',   tasks: ['Plantation arbres/arbustes', 'Semis gazon automne', 'Bulbes printaniers'] },
  { month: 10, label: 'Oct', emoji: '🍁', season: 'Automne',   tasks: ['Ramassage feuilles', 'Dernière tonte', 'Hivernage bassin'] },
  { month: 11, label: 'Nov', emoji: '🌧️', season: 'Automne',   tasks: ['Taille arbres', 'Rentrée plantes fragiles', 'Mulching'] },
  { month: 12, label: 'Déc', emoji: '⛄', season: 'Hiver',     tasks: ['Protection gel', 'Taille structure', 'Repos végétatif'] },
]

type Props = {
  compact?: boolean
  showMonth?: number
}

export function GardenCalendar({ compact = false, showMonth }: Props) {
  const currentMonth = showMonth ?? new Date().getMonth() + 1
  const current = calendarData.find((m) => m.month === currentMonth)!

  if (compact) {
    return (
      <div className="rounded-xl border border-[#EDEDED] bg-white p-4">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xl" aria-hidden="true">{current.emoji}</span>
          <div>
            <p className="font-bold text-sm" style={{ color: '#2F2F2F' }}>Travaux de {current.label}</p>
            <p className="text-xs" style={{ color: '#8C8F94' }}>{current.season}</p>
          </div>
        </div>
        <ul className="space-y-1">
          {current.tasks.map((task) => (
            <li key={task} className="flex items-center gap-2 text-sm" style={{ color: '#8C8F94' }}>
              <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#749A30' }} aria-hidden="true" />
              {task}
            </li>
          ))}
        </ul>
      </div>
    )
  }

  return (
    <div className="rounded-2xl border border-[#EDEDED] bg-white overflow-hidden">
      {/* Header */}
      <div className="px-6 py-4 text-white" style={{ backgroundColor: '#4A6320' }}>
        <h3 className="font-display font-bold text-lg">Calendrier d&apos;entretien</h3>
        <p className="text-sm opacity-80">Que faire dans votre jardin, mois par mois</p>
      </div>

      {/* Month grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-1 p-4">
        {calendarData.map((m) => (
          <button
            key={m.month}
            className="text-center p-2.5 rounded-lg transition-colors"
            style={
              m.month === currentMonth
                ? { backgroundColor: '#749A30', color: '#ffffff' }
                : { color: '#8C8F94' }
            }
          >
            <span className="block text-lg" aria-hidden="true">{m.emoji}</span>
            <span className="block text-xs font-semibold mt-0.5">{m.label}</span>
          </button>
        ))}
      </div>

      {/* Current month detail */}
      <div className="border-t border-[#EDEDED] px-6 py-4">
        <p className="font-semibold text-sm mb-2" style={{ color: '#2F2F2F' }}>
          Ce mois-ci ({current.label}) :
        </p>
        <ul className="space-y-1.5">
          {current.tasks.map((task) => (
            <li key={task} className="flex items-center gap-2 text-sm" style={{ color: '#8C8F94' }}>
              <span style={{ color: '#749A30' }} aria-hidden="true">✓</span>
              {task}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
