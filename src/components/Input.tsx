'use client'
import { ComponentPropsWithoutRef, useState } from 'react'
import '../sass/components/input.scss'
import { EyeIcon, EyeOffIcon } from 'lucide-react'

interface InputProps {
  htmlFor: string
  label: string
}

const Input = function ({
  htmlFor,
  label,
  ...inputProps
}: InputProps & ComponentPropsWithoutRef<'input'>) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  return (
    <label className="input" htmlFor={htmlFor}>
      {label}
      <input
        {...inputProps}
        type={isPasswordVisible ? 'text' : inputProps.type}
      />
      {inputProps.type === 'password' ? (
        isPasswordVisible ? (
          <EyeIcon
            onClick={() => setIsPasswordVisible(prev => !prev)}
            color="#909195"
          />
        ) : (
          <EyeOffIcon
            onClick={() => setIsPasswordVisible(prev => !prev)}
            color="#909195"
          />
        )
      ) : null}
    </label>
  )
}

export default Input
