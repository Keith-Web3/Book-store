'use client'
import { LayoutGrid, List, PlusIcon } from 'lucide-react'
import Link from 'next/link'
import { ReactNode, useState } from 'react'
interface PageLayoutProps {
  children: ReactNode
}

const PageLayout = function ({ children }: PageLayoutProps) {
  const [layout, setLayout] = useState('grid')
  const [filter, setFilter] = useState<'all' | 'published' | 'draft'>('all')
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
    </>
  )
}

export default PageLayout
