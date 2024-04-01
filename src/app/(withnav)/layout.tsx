import { ReactNode } from 'react'

import '@/sass/layouts/navLayout.scss'
import ClientLayout from './ClientLayout'
import { getMe } from '@/actions/server'

interface NavLayoutProps {
  children: ReactNode
}

const NavLayout = async function ({ children }: NavLayoutProps) {
  const user = await getMe()
  return (
    <div className="nav-layout">
      <ClientLayout>
        <main>{children}</main>
      </ClientLayout>
    </div>
  )
}

export default NavLayout
