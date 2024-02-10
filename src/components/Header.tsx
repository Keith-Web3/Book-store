import { BellIcon, ChevronDown, SearchIcon, UserCircle } from 'lucide-react'
import '../sass/components/header.scss'

interface HeaderProps {}

const Header = function ({}: HeaderProps) {
  return (
    <header className="header">
      <div className="header__search">
        <SearchIcon color="#67686a" />
        search...
      </div>
      <BellIcon color="#67686a" />
      <UserCircle color="#67686a" />
      <ChevronDown color="#67686a" />
    </header>
  )
}

export default Header
