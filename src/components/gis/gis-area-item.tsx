import { useGisDialog } from '@/hooks/use-gis-dialog'

import { getAreaColorByLevel } from '@/lib/utils'
import { TCoordinateItem } from '@/~types'

import type { LatLngExpression } from 'leaflet'
import { Circle } from 'react-leaflet'

export function GisAreaItem(props: TCoordinateItem) {
  const openGis = useGisDialog((store) => store.openDialog)

  const color = getAreaColorByLevel(props.level)

  function onClickLayer() {
    openGis(props)
  }

  return (
    <Circle
      eventHandlers={{
        click: onClickLayer,
      }}
      center={props.coordinates as LatLngExpression}
      pathOptions={{ color }}
      radius={props.radius}
    />
  )
}
