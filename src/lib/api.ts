import { TCoordinateItem } from '@/~types'

import { random, sleep } from 'radash'

export async function getFloodArea(): Promise<Array<TCoordinateItem>> {
  await sleep(random(1000, 2500))

  return [
    {
      level: 'high',
      radius: 350,
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
      radius: 125,
      location: 'Kebon Sawo, Royal, Kota Serang',
      coordinates: [-6.110569, 106.15708],
    },
    {
      level: 'medium',
      radius: 100,
      location: 'Perumahan Taman Widya Asri, Taktakan, Kota Serang',
      coordinates: [-6.118589333148454, 106.13971373010448],
    },
    {
      level: 'medium',
      radius: 200,
      location: 'Pasar Rau, Kota Serang',
      coordinates: [-6.111635336773558, 106.16663086776647],
    },
    {
      level: 'low',
      radius: 80,
      location: 'Percetakan Ciceri, Kota Serang',
      coordinates: [-6.119610901483034, 106.17110732360533],
    },
    {
      level: 'medium',
      radius: 100,
      location: 'Cinanggung, Kota Serang',
      coordinates: [-6.111255611605909, 106.16919594058271],
    },
    {
      level: 'high',
      radius: 200,
      location: 'Pasar Lama, Kota Serang',
      coordinates: [-6.110924896637629, 106.15453179277621],
    },
    {
      level: 'medium',
      radius: 200,
      location: 'Perum BSD, Kota Serang',
      coordinates: [-6.103112502326494, 106.13329873873786],
    },
    {
      level: 'high',
      radius: 125,
      location: 'Kp. Magersari, Kota Serang',
      coordinates: [-6.1119456377913846, 106.15201720082186],
    },
    {
      level: 'high',
      radius: 250,
      location: 'Jalan Syech Nawawi Albantani Cidadap, Kota Serang',
      coordinates: [-6.132394654818057, 106.20320971699242],
    },
  ]
}
