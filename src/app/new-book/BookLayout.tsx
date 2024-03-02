'use client'

import Link from 'next/link'
import { ChevronLeft, PencilIcon, EyeIcon, ChevronRight } from 'lucide-react'
import Editor from './Editor'
import { useReducer } from 'react'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'

interface BookLayoutProps {}

const checkIsValid = function (obj: {
  title: string
  price: string
  description: string
  isValid: boolean
}) {
  return !!(
    obj.title.trim().length &&
    obj.price.trim().length &&
    obj.description.trim().length
  )
}
const reducer = function (
  state: {
    title: string
    price: string
    description: string
    isValid: boolean
  },
  action: { type: string; payload: string }
) {
  const isValid = checkIsValid({ ...state, [action.type]: action.payload })
  switch (action.type) {
    case 'title': {
      return { ...state, title: action.payload, isValid }
    }
    case 'price': {
      return { ...state, price: action.payload, isValid }
    }
    case 'description': {
      return { ...state, description: action.payload, isValid }
    }
    default: {
      return state
    }
  }
}

const BookLayout = function ({}: BookLayoutProps) {
  const [state, dispatch] = useReducer(reducer, {
    title: '',
    price: '',
    description: '',
    isValid: false,
  })
  const router = useRouter()
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
          <button
            disabled={!state.isValid}
            onClick={async function () {
              const card = { ...state, status: 'draft' }
              const toastId = toast.loading('Saving book to drafts')
              try {
                await fetch(`/new-book/api`, {
                  method: 'POST',
                  body: JSON.stringify(card),
                  headers: {
                    'Content-Type': 'application/json',
                  },
                })
                toast.dismiss(toastId)
                toast.success('Saved book to drafts')
                // router.push('/store/products')
              } catch (err: any) {
                toast.dismiss(toastId)
                toast.error(err.message)
              }
            }}
          >
            save as draft
          </button>
          <button
            disabled={!state.isValid}
            onClick={async function () {
              const card = { ...state, status: 'published' }
              const toastId = toast.loading('Publishing...')
              try {
                await fetch(`/new-book/api`, {
                  method: 'POST',
                  body: JSON.stringify(card),
                  headers: {
                    'Content-Type': 'application/json',
                  },
                })
                toast.dismiss(toastId)
                toast.success('Published book successfully')
                // router.push('/store/products')
              } catch (err: any) {
                toast.dismiss(toastId)
                toast.error(err.message)
              }
            }}
          >
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
        <Editor dispatch={dispatch} />
      </section>
    </div>
  )
}

export default BookLayout
