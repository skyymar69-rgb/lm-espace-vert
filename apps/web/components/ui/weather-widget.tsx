'use client'

import React from 'react'
import { useState, useEffect } from 'react'
import {
  Sun,
  Moon,
  CloudSun,
  Cloud,
  CloudFog,
  CloudDrizzle,
  CloudRain,
  Snowflake,
  CloudLightning,
  Wind,
  Leaf,
  MapPin,
} from 'lucide-react'
import type { LucideProps } from 'lucide-react'

type IconFC = React.ComponentType<LucideProps>

interface WeatherData {
  temperature: number
  weathercode: number
  windspeed: number
  is_day: number
}

function getWeatherInfo(code: number, isDay: boolean): { Icon: IconFC; label: string } {
  if (code === 0)  return { Icon: isDay ? Sun : Moon,          label: 'Ciel dégagé' }
  if (code <= 3)   return { Icon: isDay ? CloudSun : Cloud,    label: 'Nuageux' }
  if (code <= 48)  return { Icon: CloudFog,                    label: 'Brouillard' }
  if (code <= 57)  return { Icon: CloudDrizzle,                label: 'Bruine' }
  if (code <= 67)  return { Icon: CloudRain,                   label: 'Pluie' }
  if (code <= 77)  return { Icon: Snowflake,                   label: 'Neige' }
  if (code <= 82)  return { Icon: CloudDrizzle,                label: 'Averses' }
  if (code <= 86)  return { Icon: Snowflake,                   label: 'Averses neige' }
  return                  { Icon: CloudLightning,              label: 'Orage' }
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
        style={{ backgroundColor: 'rgba(116,154,48,0.08)', width: 72, height: 26 }}
        aria-hidden="true"
      />
    )
  }

  if (!weather) return null

  const { Icon, label } = getWeatherInfo(weather.weathercode, weather.is_day === 1)
  const temp = Math.round(weather.temperature)

  return (
    <div className="relative hidden md:block">
      <button
        onClick={() => setExpanded(v => !v)}
        title={`Météo Lyon — ${label}`}
        aria-label={`Météo Lyon : ${temp}°C, ${label}`}
        aria-expanded={expanded}
        className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold transition-all hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#749A30]"
        style={{
          backgroundColor: 'rgba(116,154,48,0.10)',
          color: '#4A6320',
          border: '1px solid rgba(116,154,48,0.25)',
        }}
      >
        <Icon size={14} aria-hidden="true" />
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
              <Icon size={32} aria-hidden="true" style={{ color: '#4A6320', flexShrink: 0 }} />
              <div>
                <p className="font-bold text-lg leading-tight" style={{ color: '#1A2E03' }}>{temp}°C</p>
                <p className="text-xs" style={{ color: '#5C606B' }}>{label}</p>
              </div>
            </div>
            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1" style={{ color: '#5C606B' }}>
                  <Wind size={12} aria-hidden="true" /> Vent
                </span>
                <span className="font-semibold" style={{ color: '#1A2E03' }}>{Math.round(weather.windspeed)} km/h</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1" style={{ color: '#5C606B' }}>
                  <Leaf size={12} aria-hidden="true" /> Jardinage
                </span>
                <span className="font-semibold" style={{ color: weather.weathercode <= 3 ? '#4A6320' : '#5C606B' }}>
                  {weather.weathercode <= 3 ? 'Idéal ✓' : weather.weathercode >= 61 ? 'À éviter' : 'Correct'}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1" style={{ color: '#5C606B' }}>
                  <MapPin size={12} aria-hidden="true" /> Ville
                </span>
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
