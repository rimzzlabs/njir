import { useGis } from '@/hooks/use-gis'

import { GisAreaItem } from './gis-area-item'

import type { LatLngExpression } from 'leaflet'
import { Loader2Icon } from 'lucide-react'
import { MapContainer, TileLayer } from 'react-leaflet'

export function Gis() {
  const query = useGis()

  const centerMap = [-6.118547, 106.153355] as LatLngExpression

  if (query.status === 'pending') {
    return (
      <div className='py-4'>
        <div className='flex flex-col items-center justify-center gap-2 w-full h-96 md:h-[30rem] aspect-square md:aspect-video rounded-md overflow-hidden bg-gray-100'>
          <Loader2Icon size='4rem' className='animate-spin' />
          <p className='text-sm'>Memuat Data</p>
        </div>
      </div>
    )
  }

  if (query.status === 'error') {
    return <p className='text-center py-4'>Terjadi error ketika memuat data</p>
  }

  return (
    <section className='py-4'>
      <div className='rounded-md overflow-hidden'>
        <MapContainer
          zoom={13}
          center={centerMap}
          scrollWheelZoom={false}
          className='w-full h-96 md:h-[30rem] '
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />

          {query.data.map((item, i) => (
            <GisAreaItem {...item} key={item.location + i} />
          ))}
        </MapContainer>
      </div>
    </section>
  )
}
