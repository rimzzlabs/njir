import { useGisDialog } from '@/hooks/use-gis-dialog'

import { TCoordinateItem } from '@/~types'

import type { LatLngExpression } from 'leaflet'
import { CircleMarker } from 'react-leaflet'

function getColor(level: TCoordinateItem['level']) {
  switch (level) {
    case 'high':
      return 'red'
    case 'medium':
      return 'orange'
    default:
      return 'yellow'
  }
}

export function GisAreaItem(props: TCoordinateItem) {
  const openGis = useGisDialog((store) => store.openDialog)

  const color = getColor(props.level)

  function onClickLayer() {
    openGis(props)
  }

  return (
    <CircleMarker
      eventHandlers={{
        click: onClickLayer,
      }}
      center={props.coordinates as LatLngExpression}
      pathOptions={{ color }}
      radius={props.radius}
    />
  )
}
