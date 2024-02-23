'use client'

import Image from 'next/image'
import '../sass/components/card.scss'
import { formatPrice } from '@/utils/format'
interface BookCardProps {
  status: 'published' | 'draft'
  title: string
  price: number
  sales: number
  coverImg: string
}

const BookCard = async function ({
  status,
  title,
  price,
  sales,
  coverImg,
}: BookCardProps) {
  return (
    <div className="book-card">
      <Image
        className="book-card__image"
        src={coverImg}
        width={200}
        height={375}
        alt={title}
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
          <p>{sales === 0 ? '-' : formatPrice(price * sales)}</p>
        </div>
      </div>
    </div>
  )
}

export default BookCard
