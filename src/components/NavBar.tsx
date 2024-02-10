import {
  CloudLightningIcon,
  ComputerIcon,
  HomeIcon,
  MailIcon,
  SettingsIcon,
  StoreIcon,
} from 'lucide-react'
import '../sass/components/navbar.scss'

interface NavBarProps {}

const NavBar = function ({}: NavBarProps) {
  return (
    <nav className="navbar">
      <ul className="navbar__icons">
        <li>
          <HomeIcon color="#67686a" />
        </li>
        <li>
          <StoreIcon color="#67686a" />
        </li>
        <li>
          <MailIcon color="#67686a" />
        </li>
        <li>
          <ComputerIcon color="#67686a" />
        </li>
        <li>
          <CloudLightningIcon color="#67686a" />
        </li>
        <li>
          <SettingsIcon color="#67686a" />
        </li>
      </ul>
      <ul className="navbar__links">
        <li className="nav-header">store</li>
        <li className="nav-item">products</li>
        <li className="nav-item">orders</li>
        <li className="nav-item">customers</li>
        <li className="nav-item">discounts</li>
        <li className="nav-item">bundles</li>
      </ul>
    </nav>
  )
}

export default NavBar
