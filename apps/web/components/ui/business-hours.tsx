// Business hours component — renders current open/closed status

type DayHours = {
  label: string
  open: string | null
  close: string | null
}

const schedule: DayHours[] = [
  { label: 'Lundi',    open: '08:00', close: '18:00' },
  { label: 'Mardi',   open: '08:00', close: '18:00' },
  { label: 'Mercredi',open: '08:00', close: '18:00' },
  { label: 'Jeudi',   open: '08:00', close: '18:00' },
  { label: 'Vendredi',open: '08:00', close: '18:00' },
  { label: 'Samedi',  open: '08:00', close: '12:00' },
  { label: 'Dimanche',open: null,    close: null },
]

function isOpenNow(): { open: boolean; message: string } {
  const now = new Date()
  const dayIndex = now.getDay() // 0=sunday
  // map: 0=dimanche, 1=lundi, … 6=samedi → schedule index
  const scheduleIndex = dayIndex === 0 ? 6 : dayIndex - 1
  const day = schedule[scheduleIndex]
  if (!day.open || !day.close) return { open: false, message: 'Fermé aujourd\'hui' }

  const [oh, om] = day.open.split(':').map(Number)
  const [ch, cm] = day.close.split(':').map(Number)
  const minutes = now.getHours() * 60 + now.getMinutes()
  const openMin = oh * 60 + om
  const closeMin = ch * 60 + cm

  if (minutes >= openMin && minutes < closeMin) {
    const remaining = closeMin - minutes
    const h = Math.floor(remaining / 60)
    const m = remaining % 60
    const msg = h > 0 ? `Ouvert · Ferme dans ${h}h${m > 0 ? m : ''}` : `Ouvert · Ferme dans ${m}min`
    return { open: true, message: msg }
  }
  // Next opening
  return { open: false, message: `Fermé · Ouvre ${day.open === '08:00' ? 'à 08h' : `à ${day.open}`}` }
}

type Props = {
  compact?: boolean
}

export function BusinessHours({ compact = false }: Props) {
  const status = isOpenNow()
  const today = new Date().getDay()
  const todayScheduleIndex = today === 0 ? 6 : today - 1

  if (compact) {
    return (
      <div className="flex items-center gap-2 text-sm">
        <span className={`status-dot ${status.open ? 'status-dot-pulse' : 'status-dot-closed'}`} />
        <span className={status.open ? 'text-green-600 font-semibold' : 'text-red-500 font-medium'}>
          {status.message}
        </span>
      </div>
    )
  }

  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        <span className={`status-dot ${status.open ? 'status-dot-pulse' : 'status-dot-closed'}`} />
        <span className={`font-semibold ${status.open ? 'text-green-600' : 'text-red-500'}`}>
          {status.message}
        </span>
      </div>
      <ul className="space-y-1.5 text-sm">
        {schedule.map((day, i) => (
          <li
            key={day.label}
            className={`flex justify-between py-1 px-2 rounded-md ${i === todayScheduleIndex ? 'bg-[--color-green-light] font-semibold' : ''}`}
          >
            <span className="text-[--color-fg-muted]">{day.label}</span>
            <span className={day.open ? 'text-[--color-fg]' : 'text-[--color-fg-subtle]'}>
              {day.open ? `${day.open} – ${day.close}` : 'Fermé'}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
