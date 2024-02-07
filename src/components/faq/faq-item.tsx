import { cn } from '@/lib/utils'

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../ui/collapsible'

import { ChevronUpIcon } from 'lucide-react'
import { useState } from 'react'

type TProps = {
  title: string
  answer: string
  id: string
}

export function FaqItem(props: TProps) {
  const [open, setOpen] = useState(false)

  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <CollapsibleTrigger className='h-14 py-1 text-sm pr-4 flex items-center border-t border-b w-full text-start font-medium'>
        {props.title}
        <ChevronUpIcon size='1em' className={cn('ml-auto transition', open && 'rotate-180')} />
      </CollapsibleTrigger>
      <CollapsibleContent className='CollapsibleContent pt-2 pb-3 text-sm'>
        {props.answer}
      </CollapsibleContent>
    </Collapsible>
  )
}
