'use client'

import { useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'
import Image from 'next/image'

import { formatDate } from '@/utils/format'
import '@/sass/pages/book-info.scss'
import { getBook } from '@/actions/server'
import Button from './Button'
import { ReactNode } from 'react'

interface BookInfoProps {
  children?: ReactNode
}

const BookInfo = function ({ children }: BookInfoProps) {
  const params = useParams<{ id: string }>()
  const { data: bookInfo } = useQuery({
    queryKey: ['book', params.id],
    queryFn: () => getBook(params.id),
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
