'use client'
import {
  BellIcon,
  ChevronDown,
  Menu,
  SearchIcon,
  UserCircle,
} from 'lucide-react'
import { Dispatch, SetStateAction } from 'react'

import '../sass/components/header.scss'

interface HeaderProps {
  setIsNavOpen: Dispatch<SetStateAction<boolean>>
}

const Header = function ({ setIsNavOpen }: HeaderProps) {
  return (
    <header className="header">
      <Menu onClick={() => setIsNavOpen(true)} className="header__open-nav" />
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
