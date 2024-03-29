import Input from '@/components/Input'
import Link from 'next/link'
import Button from '../Button'

import '@/sass/pages/signup.scss'

interface SignupProps {}

const Signup = function ({}: SignupProps) {
  return (
    <div className="signup">
      <p className="signup__header">Hello bookworm 🪱</p>
      <p className="signup__subheader">
        📚 Sign up to unlock a world of literary wonders! 🌟
      </p>
      <form action="">
        <Input
          htmlFor="name"
          label="name"
          type="text"
          placeholder="enter your name"
        />
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
        <Input
          htmlFor="passwordConfirm"
          label="confirm password"
          type="password"
          placeholder="confirm your password"
        />
        <Button>sign up</Button>
      </form>
      <p className="signup__login">
        Already have an account? <Link href="/login">Sign in</Link>{' '}
      </p>
    </div>
  )
}

export default Signup
