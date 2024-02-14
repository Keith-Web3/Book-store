import { ChevronLeft, ChevronRight, EyeIcon, PencilIcon } from 'lucide-react'
import Link from 'next/link'
import Editor from './Editor'
import '@/sass/pages/new-book.scss'

interface NewBookProps {}

const NewBook = function ({}: NewBookProps) {
  return (
    <div className="new-book">
      <header className="new-book__header">
        <Link className="new-book__close-btn" href="/store/products">
          <button>
            <ChevronLeft />
            close
          </button>
        </Link>
        <div className="new-book__view">
          <button className="active">
            <PencilIcon />
            editor
          </button>
          <button>
            <EyeIcon />
            preview
          </button>
        </div>
        <div className="new-book__save-options">
          <button>save as draft</button>
          <button>
            publish
            <ChevronRight />
          </button>
        </div>
      </header>
      <section className="new-book__main">
        <ul>
          <li>General</li>
          <li>Cover</li>
          <li>Pricing</li>
          <li>Files</li>
        </ul>
        <Editor />
      </section>
    </div>
  )
}

export default NewBook
