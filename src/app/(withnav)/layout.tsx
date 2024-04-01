import { ReactNode } from 'react'

import '@/sass/layouts/navLayout.scss'
import ClientLayout from './ClientLayout'
import { getMe } from '@/actions/server'
import Providers from '@/providers/RootProvider'

interface NavLayoutProps {
  children: ReactNode
}

const NavLayout = async function ({ children }: NavLayoutProps) {
  const user = await getMe() //get user on server and store to cache

  return (
    <div className="nav-layout">
      <Providers>
        <ClientLayout>
          <main>{children}</main>
        </ClientLayout>
      </Providers>
    </div>
  )
}

export default NavLayout
