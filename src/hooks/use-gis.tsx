import { getFloodArea } from '@/lib/api'

import { useQuery } from '@tanstack/react-query'

export function useGis() {
  return useQuery({
    queryKey: ['gis'],
    queryFn() {
      return getFloodArea()
    },
  })
}
