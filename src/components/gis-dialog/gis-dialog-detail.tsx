import { Badge } from '@/components/ui/badge'

import { useGisDialog } from '@/hooks/use-gis-dialog'

import { cn, getFloodColorByLevel, getFloodTextByLevel, mToKm } from '@/lib/utils'
import { TCoordinateItem } from '@/~types'

export function GisDialogData(props: { className?: string }) {
  const data = useGisDialog((selector) => selector.data)

  if (!data) return null

  const color = getFloodColorByLevel(data.level)
  const level = getFloodTextByLevel(data.level)
  const radius = mToKm(data.radius)

  return (
    <div className={cn('grid gap-2', props.className)}>
      <div className='grid grid-cols-7 text-sm'>
        <div className='font-semibold col-span-2'>Lokasi:</div>
        <div className='font-medium col-span-5'>{data.location}</div>
      </div>

      <div className='grid grid-cols-7 text-sm'>
        <div className='font-semibold col-span-2'>Level:</div>
        <div className='font-medium col-span-5'>
          <Badge variant='secondary' className={cn('select-none', color)}>
            {level}
          </Badge>
        </div>
      </div>

      <div className='grid grid-cols-7 text-sm'>
        <div className='font-semibold col-span-2'>Koordinat:</div>
        <div className='font-medium col-span-5'>
          {data.coordinates[0]}, {data.coordinates[1]}
        </div>
      </div>

      <div className='grid grid-cols-7 text-sm'>
        <div className='font-semibold col-span-2'>Radius:</div>
        <div className='font-medium col-span-5'>{radius}</div>
      </div>

      <div>
        <p className='font-semibold text-sm mb-2'>Keterangan:</p>
        <Description type={data.level} />
      </div>
    </div>
  )
}

function Description(props: { type: TCoordinateItem['level'] }) {
  if (props.type === 'high') {
    return (
      <p className='text-sm text-balance text-gray-600'>
        Area ini memiliki resiko banjir yang tinggi, harap waspada untuk memperhatikan kondisi
        cuaca. Selalu siapkan persediaan seperti sepatu boots, jas hujan, dan payung.
      </p>
    )
  }

  if (props.type === 'medium') {
    return (
      <p className='text-sm text-balance text-gray-600'>
        Area ini memiliki risiko banjir yang cukup, sebaiknya tetap waspada terhadap kondisi cuaca
        dan siapkan langkah-langkah pencegahan.
      </p>
    )
  }

  return (
    <p className='text-sm text-balance text-gray-600'>
      Risiko banjir di area ini tergolong rendah, tetap perhatikan perkembangan cuaca untuk
      kesigapan Anda.
    </p>
  )
}
