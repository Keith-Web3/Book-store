import '@/sass/pages/homepage.scss'
import PageLayout from './pagelayout'
import { getBooks } from '@/utils/server'
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query'

export default async function Home() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['books'],
    queryFn: getBooks,
  })

  return (
    <div className="homepage">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <PageLayout />
      </HydrationBoundary>
    </div>
  )
}
