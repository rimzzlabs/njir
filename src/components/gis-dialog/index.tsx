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

import { GisDialogData } from './gis-dialog-detail'
import { GisDialogDrawer } from './gis-dialog-drawer'

import { useMediaQuery } from '@uidotdev/usehooks'

export function GisDialog() {
  const open = useGisDialog((store) => store.open)
  const data = useGisDialog((store) => store.data)
  const closeDialog = useGisDialog((store) => store.closeDialog)
  const isSmallDevice = useMediaQuery('only screen and (max-width : 768px)')

  if (isSmallDevice) {
    return (
      <GisDialogDrawer>
        <GisDialogData className='px-4' />
      </GisDialogDrawer>
    )
  }

  return (
    <Dialog open={open} onOpenChange={() => closeDialog()}>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Detail Area</DialogTitle>
          <DialogDescription>Detail area kemungkinan banjir di {data?.location}.</DialogDescription>
        </DialogHeader>
        <GisDialogData />
        <DialogFooter>
          <Button onClick={closeDialog}>Tutup</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
