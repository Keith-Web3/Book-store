import Header from '@/components/Header'
import NavBar from '@/components/NavBar'
import { ReactNode } from 'react'
import '@/sass/layouts/navLayout.scss'

interface NavLayoutProps {
  children: ReactNode
}

const NavLayout = function ({ children }: NavLayoutProps) {
  return (
    <div className="nav-layout">
      <Header />
      <main>{children}</main>
      <NavBar />
    </div>
  )
}

export default NavLayout
