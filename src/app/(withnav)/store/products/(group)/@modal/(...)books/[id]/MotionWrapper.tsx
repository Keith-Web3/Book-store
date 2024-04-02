'use client'

import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

import BookInfo from '@/app/books/BookInfo'
import { XIcon } from 'lucide-react'
import '@/sass/pages/book-modal.scss'

interface MotionWrapperProps {}

const MotionWrapper = function ({}: MotionWrapperProps) {
  const router = useRouter()
  return (
    <motion.div
      initial={{ y: '100%', opacity: 0 }}
      animate={{ y: '0', opacity: 1 }}
      exit={{ y: '-100%', opacity: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="book-modal"
    >
      <BookInfo>
        <XIcon onClick={router.back} />
      </BookInfo>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.3 }}
        className="backdrop"
      />
    </motion.div>
  )
}

export default MotionWrapper
