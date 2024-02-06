import { TCoordinateItem } from '@/~types'

import { create } from 'zustand'

export type TUseGisDialog = {
  open: boolean
  data: TCoordinateItem | null
  closeDialog(): void
  openDialog(data: TCoordinateItem): void
}

export const useGisDialog = create<TUseGisDialog>((set) => ({
  open: false,
  data: null,
  openDialog: (data) => set({ data, open: true }),
  closeDialog: () => set({ open: false }),
}))
