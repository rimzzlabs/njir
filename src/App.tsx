import { Gis } from '@/components/gis'
import { GisDialog } from '@/components/gis-dialog'
import { Header } from '@/components/header'

import { Layout } from '@/layout'
import { queryClient } from '@/lib/utils'

import { QueryClientProvider } from '@tanstack/react-query'

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Header />
        <Gis />
      </Layout>
      <GisDialog />
    </QueryClientProvider>
  )
}
