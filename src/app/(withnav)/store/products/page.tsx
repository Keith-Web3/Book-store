import '@/sass/pages/homepage.scss'
import Books from './books'
import { getBooks } from '@/utils/server'

export default async function Home({
  searchParams,
}: {
  searchParams: { page: string; filter: string }
}) {
  const books = await getBooks()

  return (
    <div className="homepage">
      <Books books={books} />
    </div>
  )
}
