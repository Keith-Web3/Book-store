import { ChevronLeft, ChevronRight, EyeIcon, PencilIcon } from 'lucide-react'
import Link from 'next/link'
import Editor from './Editor'
import '@/sass/pages/new-book.scss'
import BookLayout from './BookLayout'

interface NewBookProps {}

const NewBook = function ({}: NewBookProps) {
  return <BookLayout />
}

export default NewBook
