import { Button } from '@/components/ui/button'

import { useGis } from '@/hooks/use-gis'

import { Loader2Icon } from 'lucide-react'

export function GisRefreshButton() {
  const query = useGis()

  function invalidate() {
    query.refetch()
  }

  return (
    <div className='pt-2'>
      <Button
        onClick={invalidate}
        size='sm'
        className='flex max-w-max mx-auto'
        disabled={query.fetchStatus !== 'idle'}
      >
        {query.fetchStatus === 'fetching' && (
          <Loader2Icon size='1em' className='animate-spin mr-2' />
        )}
        Perbarui Data
      </Button>
    </div>
  )
}
