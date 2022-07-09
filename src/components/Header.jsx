import React, { useEffect, useRef, useState } from 'react'
import Logo from '../assets/Logo-Portafolio-removebg-preview.webp'

import { RiMenu5Line, RiCloseLine } from "react-icons/ri";

const header = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [headerScrolled, setHeaderScrolled] = useState(false)

  const handleMenuClick = () => {
    setShowMenu(!showMenu)
  }

  useEffect(() => {
    const handleScroll = () => {
      setHeaderScrolled(window.scrollY !== 0)
    }
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={headerScrolled ? 'portfolio-header fixed' : 'portfolio-header'}>
            <div className='header-icon-container'>
              <img className='header__img' src={Logo} alt="" />
            </div>
            <div className={showMenu ? 'header-menu show__menu' : 'header-menu'}>
                <ul className='menu-list'>
                  <li onClick={handleMenuClick} className='menu-list-item'>
                    <a href="#aboutMe">
                      About
                    </a>
                  </li>
                  <li onClick={handleMenuClick} className='menu-list-item'>
                    <a href="#experience">
                      Experience
                    </a>
                  </li>
                  <li onClick={handleMenuClick} className='menu-list-item'>
                    <a href="#projects">
                      Projects
                    </a>
                  </li>
                  <li onClick={handleMenuClick} className='menu-list-item'>
                    <a href="#contact">
                      Contact
                    </a>
                  </li>
                </ul>
            </div>
          <div className='responsive__header-icon'>
            <RiMenu5Line onClick={handleMenuClick} className={showMenu ?'menu__responsive-icon hide__menu-icon' : 'menu__responsive-icon'} />
            <RiCloseLine onClick={handleMenuClick} className={!showMenu ?'menu__responsive-icon hide__menu-icon' : 'menu__responsive-icon'} />
          </div>
    </header>
  )
}

export default header
