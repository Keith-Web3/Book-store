import { ReactNode } from 'react'

import '@/sass/layouts/navLayout.scss'
import ClientLayout from './ClientLayout'

interface NavLayoutProps {
  children: ReactNode
}

const NavLayout = async function ({ children }: NavLayoutProps) {
  return (
    <div className="nav-layout">
      <ClientLayout>
        <main>{children}</main>
      </ClientLayout>
    </div>
  )
}

export default NavLayout
