import { TCoordinateItem } from '@/~types'

import { QueryClient } from '@tanstack/react-query'
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: process.env.NODE_ENV !== 'development' } },
})

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function mToKm(meter: number) {
  if (meter < 1000) {
    return `${meter}m`
  }
  return `${meter / 1000}km`
}

export function getFloodColorByLevel(level?: TCoordinateItem['level']) {
  switch (level) {
    case 'high':
      return 'bg-red-500 text-white'
    case 'medium':
      return 'bg-yellow-400 text-gray-800'
    default:
      return 'bg-emerald-600 text-white'
  }
}

export function getFloodTextByLevel(level?: TCoordinateItem['level']) {
  switch (level) {
    case 'high':
      return 'Tinggi'
    case 'medium':
      return 'Waspada'
    default:
      return 'Rendah'
  }
}

export function getAreaColorByLevel(level: TCoordinateItem['level']) {
  switch (level) {
    case 'high':
      return '#ef4444'
    case 'medium':
      return '#facc15'
    default:
      return '#059669'
  }
}
