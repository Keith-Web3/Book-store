import { LayoutGrid, List, PlusIcon } from 'lucide-react'
import '../sass/pages/homepage.scss'

export default function Home() {
  return (
    <div className="homepage">
      <header className="homepage__header">
        <h1>products</h1>
        <button>
          <PlusIcon />
          New eBook
        </button>
      </header>
      <div className="homepage__nav">
        <ul className="homepage__tabs">
          <li className="active">all</li>
          <li>published</li>
          <li>draft</li>
        </ul>
        <ul className="homepage__layout">
          <li className="active">
            <List color="#67686a" />
          </li>
          <li>
            <LayoutGrid color="#67686a" />
          </li>
        </ul>
      </div>
    </div>
  )
}
