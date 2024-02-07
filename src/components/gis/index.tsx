import { useGis } from '@/hooks/use-gis'

import { GisAreaItem } from './gis-area-item'
import { GisRefreshButton } from './gis-refresh-button'

import type { LatLngExpression } from 'leaflet'
import { Loader2Icon } from 'lucide-react'
import { MapContainer, TileLayer } from 'react-leaflet'

export function Gis() {
  const query = useGis()

  const isPending = (() => {
    return query.status === 'pending' || query.isFetching
  })()

  const centerMap = [-6.118547, 106.153355] as LatLngExpression

  return (
    <div className='py-4'>
      {isPending && (
        <div className='flex flex-col items-center justify-center gap-2 w-full h-96 md:h-[30rem] aspect-square md:aspect-video rounded-md overflow-hidden bg-gray-100'>
          <Loader2Icon size='4rem' className='animate-spin' />
          <p className='text-sm'>Memuat Data</p>
        </div>
      )}

      {query.status === 'error' && !isPending && (
        <p className='text-center py-4'>Terjadi error ketika memuat data</p>
      )}

      {query.status === 'success' && !isPending && (
        <div className='rounded-md overflow-hidden'>
          <MapContainer zoom={13} center={centerMap} className='w-full h-96 md:h-[30rem] '>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />

            {query.data.map((item, i) => (
              <GisAreaItem {...item} key={item.location + i} />
            ))}
          </MapContainer>
        </div>
      )}

      <GisRefreshButton />
    </div>
  )
}
