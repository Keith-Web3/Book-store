import { ComponentPropsWithRef, ReactNode } from 'react'

import '@/sass/components/auth-btn.scss'

interface ButtonProps {
  children: ReactNode
}

const Button = function ({
  children,
  ...props
}: ButtonProps & ComponentPropsWithRef<'button'>) {
  return <button className="auth-btn">{children}</button>
}

export default Button
