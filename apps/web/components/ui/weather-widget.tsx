// Weather widget using Open-Meteo (free, no API key)
// Fetched server-side at request time

type WeatherData = {
  temperature: number
  weathercode: number
}

const weatherDescriptions: Record<number, { label: string; emoji: string }> = {
  0:  { label: 'Ensoleillé', emoji: '☀️' },
  1:  { label: 'Peu nuageux', emoji: '🌤️' },
  2:  { label: 'Partiellement nuageux', emoji: '⛅' },
  3:  { label: 'Couvert', emoji: '☁️' },
  45: { label: 'Brouillard', emoji: '🌫️' },
  48: { label: 'Brouillard', emoji: '🌫️' },
  51: { label: 'Bruine', emoji: '🌦️' },
  53: { label: 'Bruine', emoji: '🌦️' },
  61: { label: 'Pluie', emoji: '🌧️' },
  63: { label: 'Pluie', emoji: '🌧️' },
  65: { label: 'Pluie forte', emoji: '🌧️' },
  71: { label: 'Neige', emoji: '🌨️' },
  80: { label: 'Averses', emoji: '🌦️' },
  95: { label: 'Orageux', emoji: '⛈️' },
}

async function fetchWeather(): Promise<WeatherData | null> {
  try {
    const res = await fetch(
      'https://api.open-meteo.com/v1/forecast?latitude=45.833&longitude=4.800&current=temperature_2m,weathercode&timezone=Europe%2FParis',
      { next: { revalidate: 1800 } } // 30 min cache
    )
    if (!res.ok) return null
    const data = await res.json()
    return {
      temperature: Math.round(data.current.temperature_2m),
      weathercode: data.current.weathercode,
    }
  } catch {
    return null
  }
}

export async function WeatherWidget() {
  const weather = await fetchWeather()
  if (!weather) return null

  const { label, emoji } = weatherDescriptions[weather.weathercode] ?? { label: 'Variable', emoji: '🌡️' }

  return (
    <div className="weather-widget" title={`Météo actuelle à Saint-Didier-au-Mont-d'Or`}>
      <span aria-hidden="true">{emoji}</span>
      <span>
        <span className="font-bold">{weather.temperature}°C</span>
        <span className="mx-1 opacity-70">·</span>
        <span className="opacity-90">{label}</span>
      </span>
    </div>
  )
}
