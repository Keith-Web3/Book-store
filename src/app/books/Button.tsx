import { ComponentPropsWithoutRef, ReactNode } from 'react'

import '@/sass/components/book-info-btn.scss'

interface ButtonProps {
  children: ReactNode
}

const Button = function ({
  children,
  ...buttonProps
}: ButtonProps & ComponentPropsWithoutRef<'button'>) {
  return (
    <button className="book-info__btn" {...buttonProps}>
      {children}
    </button>
  )
}

export default Button
