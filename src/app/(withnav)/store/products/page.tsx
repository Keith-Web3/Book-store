import '@/sass/pages/homepage.scss'
import Books from './books'
import { getBooks } from '@/utils/server'
import { Card } from '@/app/types'
import BookCard from '@/components/Card'

export default async function Home({
  searchParams,
}: {
  searchParams: { page: number }
}) {
  const currentPage = Number(searchParams?.page) || 1
  const limit = 5
  const data = await getBooks(currentPage, limit)

  return (
    <div className="homepage">
      <Books
        limit={limit}
        totalBooks={data.totalBooks}
        totalPages={data.totalPages}
      >
        {data.books?.map((card: Card) => (
          <BookCard key={card.id} {...card} />
        ))}
      </Books>
    </div>
  )
}
