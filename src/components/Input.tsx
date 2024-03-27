import { ComponentPropsWithoutRef, ReactNode } from 'react'
import '../sass/components/input.scss'

interface InputProps {
  htmlFor: string
  label: string
  children?: ReactNode
}

const Input = function ({
  htmlFor,
  label,
  children,
  ...inputProps
}: InputProps & ComponentPropsWithoutRef<'input'>) {
  return (
    <label className="input" htmlFor={htmlFor}>
      {label}
      <input {...inputProps} />
      {children}
    </label>
  )
}

export default Input
