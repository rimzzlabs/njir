import { TCoordinateItem } from '@/~types'

import { QueryClient } from '@tanstack/react-query'
import { type ClassValue, clsx } from 'clsx'
import { random, sleep } from 'radash'
import { twMerge } from 'tailwind-merge'

export const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: process.env.NODE_ENV !== 'development' } },
})

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function getFloodArea(): Promise<Array<TCoordinateItem>> {
  await sleep(random(1000, 2500))

  return [
    {
      level: 'high',
      radius: 100,
      location: 'Legok Sukmajaya, Kota Serang',
      coordinates: [-6.107922, 106.139423],
    },
    {
      level: 'medium',
      radius: 60,
      location: 'Cimuncang Kelurahan, Kota Serang',
      coordinates: [-6.11516, 106.159916],
    },
    {
      level: 'low',
      radius: 40,
      location: 'Kebon Sawo, Royal, Kota Serang',
      coordinates: [-6.110569, 106.15708],
    },
    {
      level: 'medium',
      radius: 140,
      location: 'Pasar Rau, Kota Serang',
      coordinates: [-6.111635336773558, 106.16663086776647],
    },
  ]
}
