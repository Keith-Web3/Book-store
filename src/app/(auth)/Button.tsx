'use client'
import { ComponentPropsWithRef, ReactNode } from 'react'
import { useFormStatus } from 'react-dom'

import '@/sass/components/auth-btn.scss'
import toast from 'react-hot-toast'

interface ButtonProps {
  children: ReactNode
}

const Button = function ({
  children,
  ...props
}: ButtonProps & ComponentPropsWithRef<'button'>) {
  const { pending } = useFormStatus()
  return (
    <button className="auth-btn" disabled={pending} {...props}>
      {children}
    </button>
  )
}

export default Button
