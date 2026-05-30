import React from 'react'
import {
  Snowflake,
  Sprout,
  FlowerIcon as Flower,
  Sun,
  Leaf,
  CloudRain,
  Thermometer,
  Umbrella,
} from 'lucide-react'
import type { LucideProps } from 'lucide-react'

type IconFC = React.ComponentType<LucideProps>

const monthIcons: Record<number, IconFC> = {
  1:  Snowflake,
  2:  Sprout,
  3:  Flower,
  4:  Flower,
  5:  Leaf,
  6:  Sun,
  7:  Thermometer,
  8:  Sun,
  9:  Leaf,
  10: Leaf,
  11: CloudRain,
  12: Umbrella,
}

type MonthTask = {
  month: number
  label: string
  tasks: string[]
  season: string
}

const calendarData: MonthTask[] = [
  { month: 1,  label: 'Jan', season: 'Hiver',     tasks: ['Taille arbres fruitiers', 'Protection gel', 'Planification annuelle'] },
  { month: 2,  label: 'Fév', season: 'Hiver',     tasks: ['Taille rosiers', 'Semis sous abri', 'Commande végétaux'] },
  { month: 3,  label: 'Mar', season: 'Printemps', tasks: ['Scarification pelouse', 'Plantation vivaces', 'Engrais de fond'] },
  { month: 4,  label: 'Avr', season: 'Printemps', tasks: ['Semis gazon', 'Taille haies de printemps', 'Arrosage régulier'] },
  { month: 5,  label: 'Mai', season: 'Printemps', tasks: ['Tonte hebdomadaire', 'Plantation annuelles', 'Désherbage massifs'] },
  { month: 6,  label: 'Jun', season: 'Été',       tasks: ['Arrosage quotidien', 'Paillage', 'Taille haies topiaires'] },
  { month: 7,  label: 'Jul', season: 'Été',       tasks: ['Arrosage matin/soir', 'Entretien gazons', 'Traitement maladies'] },
  { month: 8,  label: 'Aoû', season: 'Été',       tasks: ['Fleurs fanées', 'Bouturage', 'Préparer sol automne'] },
  { month: 9,  label: 'Sep', season: 'Automne',   tasks: ['Plantation arbres/arbustes', 'Semis gazon automne', 'Bulbes printaniers'] },
  { month: 10, label: 'Oct', season: 'Automne',   tasks: ['Ramassage feuilles', 'Dernière tonte', 'Hivernage bassin'] },
  { month: 11, label: 'Nov', season: 'Automne',   tasks: ['Taille arbres', 'Rentrée plantes fragiles', 'Mulching'] },
  { month: 12, label: 'Déc', season: 'Hiver',     tasks: ['Protection gel', 'Taille structure', 'Repos végétatif'] },
]

type Props = {
  compact?: boolean
  showMonth?: number
}

export function GardenCalendar({ compact = false, showMonth }: Props) {
  const currentMonth = showMonth ?? new Date().getMonth() + 1
  const current = calendarData.find((m) => m.month === currentMonth)!

  if (compact) {
    const Icon = monthIcons[current.month]
    return (
      <div className="rounded-xl border border-[#EDEDED] bg-white p-4">
        <div className="flex items-center gap-2 mb-3">
          <span className="inline-flex" aria-hidden="true">
            <Icon size={20} style={{ color: '#749A30' }} />
          </span>
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
        {calendarData.map((m) => {
          const Icon = monthIcons[m.month]
          return (
            <button
              key={m.month}
              className="text-center p-2.5 rounded-lg transition-colors"
              style={
                m.month === currentMonth
                  ? { backgroundColor: '#749A30', color: '#ffffff' }
                  : { color: '#8C8F94' }
              }
            >
              <span className="flex justify-center mb-0.5" aria-hidden="true">
                <Icon size={18} />
              </span>
              <span className="block text-xs font-semibold mt-0.5">{m.label}</span>
            </button>
          )
        })}
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
