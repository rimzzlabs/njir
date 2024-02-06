import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

import { useGisDialog } from '@/hooks/use-gis-dialog'

import { cn } from '@/lib/utils'
import { TCoordinateItem } from '@/~types'

import { Badge } from './ui/badge'

function getLevelColor(level?: TCoordinateItem['level']) {
  switch (level) {
    case 'high':
      return 'bg-red-500 text-white'
    case 'medium':
      return 'bg-orange-600 text-white'
    default:
      return 'bg-yellow-400 text-black'
  }
}

function getLevelText(level?: TCoordinateItem['level']) {
  switch (level) {
    case 'high':
      return 'Tinggi'
    case 'medium':
      return 'Waspada'
    default:
      return 'Rendah'
  }
}

export function GisDialog() {
  const open = useGisDialog((store) => store.open)
  const data = useGisDialog((store) => store.data)
  const closeDialog = useGisDialog((store) => store.closeDialog)

  const color = getLevelColor(data?.level)
  const level = getLevelText(data?.level)

  return (
    <Dialog open={open} onOpenChange={() => closeDialog()}>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Detail Area</DialogTitle>
          <DialogDescription>Detail area kemungkinan banjir di {data?.location}.</DialogDescription>
        </DialogHeader>

        <div className='grid gap-2'>
          <div className='grid grid-cols-7'>
            <p className='font-semibold col-span-2'>Lokasi:</p>
            <p className='font-medium col-span-5'>{data?.location}</p>
          </div>

          <div className='grid grid-cols-7'>
            <p className='font-semibold col-span-2'>Level:</p>
            <p className='font-medium col-span-5'>
              <Badge variant='secondary' className={cn('select-none', color)}>
                {level}
              </Badge>
            </p>
          </div>

          <div className='grid grid-cols-7'>
            <p className='font-semibold col-span-2'>Koordinat:</p>
            <p className='font-medium col-span-5'>
              {data?.coordinates?.[0]}, {data?.coordinates?.[1]}
            </p>
          </div>

          <div className='grid grid-cols-7'>
            <p className='font-semibold col-span-2'>Radius (m):</p>
            <p className='font-medium col-span-5'>{data?.radius} Meter</p>
          </div>
        </div>
        <DialogFooter>
          <Button onClick={closeDialog}>Tutup</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
