'use client'
import {
  CloudLightningIcon,
  ComputerIcon,
  HomeIcon,
  MailIcon,
  SettingsIcon,
  StoreIcon,
  XIcon,
} from 'lucide-react'
import '../sass/components/navbar.scss'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Dispatch, SetStateAction } from 'react'
import { motion } from 'framer-motion'

interface NavBarProps {
  isNavOpen: boolean
  setIsNavOpen: Dispatch<SetStateAction<boolean>>
}

const NavBar = function ({ isNavOpen, setIsNavOpen }: NavBarProps) {
  const pathname = usePathname()
  const paths = pathname.split('/').slice(1)

  const variants = {
    visible: { opacity: 1, width: '100%' },
    hidden: { opacity: 0, width: '0' },
  }

  return (
    <motion.nav
      layout
      variants={variants}
      initial={isNavOpen ? 'hidden' : 'visible'}
      animate={isNavOpen ? 'visible' : 'hidden'}
      className="navbar"
    >
      <div className="navbar__icon-container">
        <ul className="navbar__icons">
          <li>
            <Link href="/">
              <HomeIcon color="#67686a" />
            </Link>
          </li>
          <li>
            <Link
              className={paths[0] === 'store' ? 'active' : ''}
              href="/store/products"
            >
              <StoreIcon color="#67686a" />
            </Link>
          </li>
          <li>
            <Link
              className={paths[0] === 'messages' ? 'active' : ''}
              href="/messages/product"
            >
              <MailIcon color="#67686a" />
            </Link>
          </li>
          <li>
            <Link
              className={paths[0] === 'system' ? 'active' : ''}
              href="/system/products"
            >
              <ComputerIcon color="#67686a" />
            </Link>
          </li>
          <li>
            <Link
              className={paths[0] === 'cloud' ? 'active' : ''}
              href="/cloud/products"
            >
              <CloudLightningIcon color="#67686a" />
            </Link>
          </li>
          <li>
            <Link
              className={paths[0] === 'settings' ? 'active' : ''}
              href="/settings/products"
            >
              <SettingsIcon color="#67686a" />
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar__links-container">
        <ul className="navbar__links">
          <li className="nav-header">
            store{' '}
            <XIcon
              className="navbar__close-btn"
              onClick={() => setIsNavOpen(false)}
            />
          </li>
          <li>
            <Link className="nav-item" href="./products">
              products
            </Link>
          </li>
          <li>
            <Link className="nav-item" href="./orders">
              orders
            </Link>
          </li>
          <li>
            <Link className="nav-item" href="./customers">
              customers
            </Link>
          </li>
          <li>
            <Link className="nav-item" href="./discounts">
              discounts
            </Link>
          </li>
          <li>
            <Link className="nav-item" href="./bundles">
              bundles
            </Link>
          </li>
        </ul>
      </div>
    </motion.nav>
  )
}

export default NavBar
