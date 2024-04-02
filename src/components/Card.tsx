'use client'

import Image from 'next/image'
import Link from 'next/link'
import '../sass/components/card.scss'
import { formatPrice } from '@/utils/format'
import { QueryClient } from '@tanstack/react-query'
import { getBook } from '@/actions/server'
interface BookCardProps {
  status: 'published' | 'draft'
  title: string
  price: number
  sales: number
  coverImg: string
  id: string
}

const BookCard = async function ({
  status,
  title,
  price,
  sales,
  coverImg,
  id,
}: BookCardProps) {
  const queryClient = new QueryClient()
  return (
    <Link
      href={`/books/${id}`}
      className="book-card"
      onMouseEnter={async () => {
        const queryState = queryClient.getQueryState(['book', id])
        if (queryState) return

        await queryClient.prefetchQuery({
          queryKey: ['book', id],
          queryFn: () => getBook(id),
        })
      }}
    >
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
    </Link>
  )
}

export default BookCard
