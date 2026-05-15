'use client'

import { useState, useEffect } from 'react'

interface WeatherData {
  temperature: number
  weathercode: number
  windspeed: number
  is_day: number
}

function getWeatherInfo(code: number, isDay: boolean): { emoji: string; label: string } {
  if (code === 0)  return { emoji: isDay ? '☀️' : '🌙', label: 'Ciel dégagé' }
  if (code <= 3)   return { emoji: isDay ? '⛅' : '🌤️', label: 'Nuageux' }
  if (code <= 48)  return { emoji: '🌫️', label: 'Brouillard' }
  if (code <= 57)  return { emoji: '🌦️', label: 'Bruine' }
  if (code <= 67)  return { emoji: '🌧️', label: 'Pluie' }
  if (code <= 77)  return { emoji: '❄️', label: 'Neige' }
  if (code <= 82)  return { emoji: '🌦️', label: 'Averses' }
  if (code <= 86)  return { emoji: '🌨️', label: 'Averses neige' }
  return                  { emoji: '⛈️', label: 'Orage' }
}

export function WeatherWidget() {
  const [weather, setWeather]   = useState<WeatherData | null>(null)
  const [expanded, setExpanded] = useState(false)
  const [loading, setLoading]   = useState(true)

  useEffect(() => {
    const controller = new AbortController()
    fetch(
      'https://api.open-meteo.com/v1/forecast?latitude=45.7578&longitude=4.8320&current_weather=true&wind_speed_unit=kmh',
      { signal: controller.signal }
    )
      .then(r => r.json())
      .then(d => {
        if (d?.current_weather) setWeather(d.current_weather)
        setLoading(false)
      })
      .catch(() => setLoading(false))
    return () => controller.abort()
  }, [])

  if (loading) {
    return (
      <div
        className="hidden md:block rounded-full animate-pulse"
        style={{ backgroundColor: 'rgba(128,188,0,0.08)', width: 72, height: 26 }}
        aria-hidden="true"
      />
    )
  }

  if (!weather) return null

  const { emoji, label } = getWeatherInfo(weather.weathercode, weather.is_day === 1)
  const temp = Math.round(weather.temperature)

  return (
    <div className="relative hidden md:block">
      <button
        onClick={() => setExpanded(v => !v)}
        title={`Météo Lyon — ${label}`}
        aria-label={`Météo Lyon : ${temp}°C, ${label}`}
        aria-expanded={expanded}
        className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold transition-all hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#80BC00]"
        style={{
          backgroundColor: 'rgba(128,188,0,0.10)',
          color: '#425D07',
          border: '1px solid rgba(128,188,0,0.25)',
        }}
      >
        <span className="text-sm leading-none" aria-hidden="true">{emoji}</span>
        <span>{temp}°</span>
        <span className="opacity-70">Lyon</span>
      </button>

      {expanded && (
        <>
          <div className="fixed inset-0 z-30" onClick={() => setExpanded(false)} aria-hidden="true" />
          <div
            className="absolute left-0 top-full mt-2 z-40 rounded-2xl p-4 w-52 animate-fade-in"
            style={{ backgroundColor: '#ffffff', border: '1px solid #EDEDED', boxShadow: '0 8px 32px rgba(0,0,0,0.10)' }}
          >
            <div className="flex items-center gap-3 mb-3 pb-3" style={{ borderBottom: '1px solid #EDEDED' }}>
              <span className="text-3xl leading-none" aria-hidden="true">{emoji}</span>
              <div>
                <p className="font-bold text-lg leading-tight" style={{ color: '#1A2E03' }}>{temp}°C</p>
                <p className="text-xs" style={{ color: '#5C606B' }}>{label}</p>
              </div>
            </div>
            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between">
                <span style={{ color: '#5C606B' }}>💨 Vent</span>
                <span className="font-semibold" style={{ color: '#1A2E03' }}>{Math.round(weather.windspeed)} km/h</span>
              </div>
              <div className="flex items-center justify-between">
                <span style={{ color: '#5C606B' }}>🌿 Jardinage</span>
                <span className="font-semibold" style={{ color: weather.weathercode <= 3 ? '#425D07' : '#5C606B' }}>
                  {weather.weathercode <= 3 ? 'Idéal ✓' : weather.weathercode >= 61 ? 'À éviter' : 'Correct'}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span style={{ color: '#5C606B' }}>📍 Ville</span>
                <span className="font-semibold" style={{ color: '#1A2E03' }}>Lyon</span>
              </div>
            </div>
            <p className="mt-3 text-center text-[10px]" style={{ color: '#AAAAAA' }}>Open-Meteo · Temps réel</p>
          </div>
        </>
      )}
    </div>
  )
}
