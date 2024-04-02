import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query'
import BookInfo from '../BookInfo'

interface BooksPageProps {
  params: {
    id: string
  }
}

const BooksPage = async function ({ params }: BooksPageProps) {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['book', params.id],
    queryFn: async () => {
      const response = await fetch(
        `${process.env.SERVER_URL}/v1/books/${params.id}`
      )
      const data = await response.json()

      return data.data?.book
    },
  })

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <BookInfo />
    </HydrationBoundary>
  )
}

export default BooksPage
