import Link from 'next/link'

import Input from '@/components/Input'
import Button from '../Button'

import '@/sass/pages/login.scss'

interface LoginProps {}

const Login = function ({}: LoginProps) {
  return (
    <div className="login">
      <p className="login__header">Welcome back</p>
      <p className="login__subheader">
        Welcome back, please enter your details
      </p>
      <form action="">
        <Input
          htmlFor="email"
          label="email"
          type="email"
          placeholder="enter your email"
        />
        <Input
          htmlFor="password"
          label="password"
          type="password"
          placeholder="enter your password"
        />
        <div className="login__options">
          <label htmlFor="remember">
            <input type="checkbox" id="remember" />
            Remember for 30 days
          </label>
          <Link href="/">forgot password</Link>
        </div>
        <Button>sign in</Button>
      </form>
    </div>
  )
}

export default Login
