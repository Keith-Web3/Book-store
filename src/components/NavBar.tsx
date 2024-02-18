'use client'
import {
  CloudLightningIcon,
  ComputerIcon,
  HomeIcon,
  MailIcon,
  SettingsIcon,
  StoreIcon,
} from 'lucide-react'
import '../sass/components/navbar.scss'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

interface NavBarProps {}

const NavBar = function ({}: NavBarProps) {
  const pathname = usePathname()
  const paths = pathname.split('/').slice(1)

  return (
    <nav className="navbar">
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
          <li className="nav-header">store</li>
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
    </nav>
  )
}

export default NavBar
