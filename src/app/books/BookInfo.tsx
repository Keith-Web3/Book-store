'use client'

import { useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import { ReactNode } from 'react'

import { formatDate } from '@/utils/format'
import '@/sass/pages/book-info.scss'
import { getBook } from '@/actions/server'
import Button from './Button'
import { StarIcon } from 'lucide-react'

interface BookInfoProps {
  children?: ReactNode
}

const BookInfo = function ({ children }: BookInfoProps) {
  const params = useParams<{ id: string }>()
  const { data: bookInfo } = useQuery({
    queryKey: ['book', params.id],
    queryFn: () => getBook(params.id),
  })

  const stars = Array(5)
    .fill(null)
    .map((_el, idx) => {
      const id = `${idx}` + bookInfo._id

      if (idx < Math.round(bookInfo.ratingsAverage)) {
        return <StarIcon fill="#613db7" color="#613db7" key={id} />
      }
      return <StarIcon key={id} />
    })

  return (
    <div className="book-info">
      {children}
      <section className="book-info__main">
        <Image
          className="book-info__img"
          src={bookInfo.coverImg}
          width={200}
          height={375}
          alt={bookInfo.title}
        />
        <header className="book-info__header">
          <h1>{bookInfo.title}</h1>
          <p>{bookInfo.status}</p>
        </header>
        <div className="book-info__description">
          <div className="reviews">
            <p>{bookInfo.ratingsAverage?.toFixed(1)}</p>
            <div>{stars}</div>
            <p>({bookInfo.ratingsQuantity}) Review</p>
          </div>
          <h2>description</h2>
          <p>{bookInfo.description}</p>
        </div>
        <ul className="book-info__about">
          <li>
            <p>book language</p>
            <p>english</p>
          </li>
          <li>
            <p>author name</p>
            <p>{bookInfo.author.name}</p>
          </li>
          <li>
            <p>post time</p>
            <p>{formatDate(bookInfo.createdAt)}</p>
          </li>
          <li>
            <p>number of pages</p>
            <p>180 page</p>
          </li>
          <li>
            <p>price</p>
            <p>${bookInfo.price}</p>
          </li>
        </ul>
        <div className="book-info__cta">
          <Button>view all reviews</Button>
          <Button>rate book</Button>
        </div>
      </section>
    </div>
  )
}

export default BookInfo
