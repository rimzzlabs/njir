import { TCoordinateItem } from '@/~types'

import { random, sleep } from 'radash'

export async function getFloodArea(): Promise<Array<TCoordinateItem>> {
  await sleep(random(1000, 2500))

  return [
    {
      level: 'high',
      radius: 1230,
      location: 'Legok Sukmajaya, Kota Serang',
      coordinates: [-6.107922, 106.139423],
    },
    {
      level: 'medium',
      radius: 200,
      location: 'Cimuncang Kelurahan, Kota Serang',
      coordinates: [-6.11516, 106.159916],
    },
    {
      level: 'low',
      radius: 400,
      location: 'Kebon Sawo, Royal, Kota Serang',
      coordinates: [-6.110569, 106.15708],
    },
    {
      level: 'medium',
      radius: 400,
      location: 'Pasar Rau, Kota Serang',
      coordinates: [-6.111635336773558, 106.16663086776647],
    },
  ]
}
