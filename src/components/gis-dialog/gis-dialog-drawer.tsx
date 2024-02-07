import { Button } from '@/components/ui/button'
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerClose,
} from '@/components/ui/drawer'

import { useGisDialog } from '@/hooks/use-gis-dialog'

export function GisDialogDrawer(props: React.PropsWithChildren) {
  const open = useGisDialog((store) => store.open)
  const data = useGisDialog((store) => store.data)
  const closeDialog = useGisDialog((store) => store.closeDialog)

  return (
    <Drawer
      open={open}
      onOpenChange={(nextValue) => {
        if (nextValue === false) closeDialog()
      }}
    >
      <DrawerContent className='h-5/6'>
        <DrawerHeader className='text-left'>
          <DrawerTitle>Detail Area</DrawerTitle>
          <DrawerDescription>Detail area kemungkinan banjir di {data?.location}.</DrawerDescription>
        </DrawerHeader>
        {props.children}
        <DrawerFooter className='pt-2'>
          <DrawerClose asChild>
            <Button>Tutup</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
