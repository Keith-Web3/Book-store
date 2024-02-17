import '@/sass/pages/homepage.scss'
import BookCard from '@/components/Card'
import PageLayout from './pagelayout'
import { Card } from '@/app/types'

export default async function Home() {
  const cardsRes = await fetch(`${process.env.NEXT_PUBLIC_URL}/v1/books`, {
    cache: 'no-store',
  })
  const cards = await cardsRes.json()

  return (
    <div className="homepage">
      <PageLayout>
        {cards?.data.books.map((card: Card) => (
          <BookCard key={card._id} {...card} />
        ))}
      </PageLayout>
    </div>
  )
}
