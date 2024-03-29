'use client'
import {
  ChevronLeft,
  ChevronRight,
  LayoutGrid,
  List,
  PlusIcon,
} from 'lucide-react'
import Link from 'next/link'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { ReactNode, useState } from 'react'
interface BooksProps {
  limit: number
  totalPages: number
  totalBooks: number
  children: ReactNode
}

const Books = function ({
  limit,
  totalPages,
  totalBooks,
  children,
}: BooksProps) {
  const [layout, setLayout] = useState('grid')
  const [filter, setFilter] = useState<'all' | 'published' | 'draft'>('all')

  const pathname = usePathname()
  const searchParams = useSearchParams()
  const { replace } = useRouter()
  const currentPage = Number(searchParams.get('page')) || 1

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams)
    params.set('page', pageNumber.toString())
    replace(`${pathname}?${params.toString()}`)
  }

  return (
    <>
      <header className="homepage__header">
        <h1>products</h1>
        <Link href="../new-book">
          <button>
            <PlusIcon />
            New eBook
          </button>
        </Link>
      </header>
      <div className="homepage__nav">
        <ul className="homepage__tabs">
          <li
            onClick={() => setFilter('all')}
            className={filter === 'all' ? 'active' : ''}
          >
            all
          </li>
          <li
            onClick={() => setFilter('published')}
            className={filter === 'published' ? 'active' : ''}
          >
            published
          </li>
          <li
            onClick={() => setFilter('draft')}
            className={filter === 'draft' ? 'active' : ''}
          >
            draft
          </li>
        </ul>
        <ul className="homepage__layout">
          <li
            onClick={() => setLayout('list')}
            className={layout === 'list' ? 'active' : ''}
          >
            <List color="#67686a" />
          </li>
          <li
            onClick={() => setLayout('grid')}
            className={layout === 'grid' ? 'active' : ''}
          >
            <LayoutGrid color="#67686a" />
          </li>
        </ul>
      </div>
      <div className={`cards ${layout}`}>{children}</div>
      <div className="homepage__pagination">
        <ChevronLeft
          aria-disabled={currentPage === 1}
          onClick={() => {
            if (currentPage === 1) return
            createPageURL(currentPage - 1)
          }}
        />
        <p>
          {limit * (currentPage - 1) + 1} -{' '}
          {limit * currentPage > totalBooks ? totalBooks : limit * currentPage}
        </p>
        <ChevronRight
          aria-disabled={currentPage === totalPages}
          onClick={() => {
            if (currentPage === totalPages) return
            createPageURL(currentPage + 1)
          }}
        />
      </div>
    </>
  )
}

export default Books
