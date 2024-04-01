import '@/sass/pages/homepage.scss'
import Books from './books'
import { getBooks } from '@/actions/server'
import { Card } from '@/app/types'
import BookCard from '@/components/Card'
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query'

export default async function Home({
  searchParams,
}: {
  searchParams: { page: number }
}) {
  const currentPage = Number(searchParams?.page) || 1
  const limit = 10
  const data = await getBooks(currentPage, limit)

  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['books', `${currentPage}`],
    queryFn: () => getBooks(currentPage, limit),
  })

  return (
    <div className="homepage">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Books
          limit={limit}
          totalBooks={data.totalBooks}
          totalPages={data.totalPages}
        >
          {data.books?.map((card: Card) => (
            <BookCard key={card.id} {...card} />
          ))}
        </Books>
      </HydrationBoundary>
    </div>
  )
}
