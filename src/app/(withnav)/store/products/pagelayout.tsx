'use client'
import { Card } from '@/app/types'
import BookCard from '@/components/Card'
import { getBooks } from '@/utils/server'
import { useQuery } from '@tanstack/react-query'
import { LayoutGrid, List, PlusIcon } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
interface PageLayoutProps {}

const PageLayout = function ({}: PageLayoutProps) {
  const [layout, setLayout] = useState('grid')
  const [page, setPage] = useState('1')
  const [filter, setFilter] = useState<'all' | 'published' | 'draft'>('all')

  const { data: cards } = useQuery({ queryKey: ['books'], queryFn: getBooks })

  console.log(cards)
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
      <div className={`cards ${layout}`}>
        {cards?.map((card: Card) => (
          <BookCard key={card.id} {...card} />
        ))}
      </div>
    </>
  )
}

export default PageLayout
