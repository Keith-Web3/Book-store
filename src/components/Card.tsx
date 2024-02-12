import Image from 'next/image'
import '../sass/components/card.scss'
import { formatPrice } from '@/utils/format'
interface BookCardProps {
  status: 'published' | 'draft'
  title: string
  price: number
  sales: number
}

const BookCard = async function ({
  status,
  title,
  price,
  sales,
}: BookCardProps) {
  const res = await fetch(
    `https://api.unsplash.com/photos/random?query=cover&orientation=portrait&client_id=${process.env.UNSPLASH_CLIENT_ID}`
  )
  const book = await res.json()

  return (
    <div className="book-card">
      <Image
        className="book-card__image"
        src={book.urls.full}
        width={200}
        height={375}
        alt={book.alt_description}
      />
      <p className={`book-card__status ${status}`}>{status}</p>
      <p className="book-card__title">{title}</p>
      <div className="line" />
      <div className="book-card__footer">
        <div>
          <p>price</p>
          <p>{formatPrice(price)}</p>
        </div>
        <div>
          <p>sales</p>
          <p>{sales || '-'}</p>
        </div>
        <div>
          <p>revenue</p>
          <p>{formatPrice(price * sales)}</p>
        </div>
      </div>
    </div>
  )
}

export default BookCard
