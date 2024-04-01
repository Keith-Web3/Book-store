'use client'
import { ReactNode, useState } from 'react'

import Header from '@/components/Header'
import NavBar from '@/components/NavBar'

interface ClientLayoutProps {
  children: ReactNode
}

const ClientLayout = function ({ children }: ClientLayoutProps) {
  const [isNavOpen, setIsNavOpen] = useState(false)
  return (
    <>
      <Header setIsNavOpen={setIsNavOpen} />
      <main>{children}</main>
      <NavBar isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
    </>
  )
}

export default ClientLayout
