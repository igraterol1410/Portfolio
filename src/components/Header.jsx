import React from 'react'
import Logo from '../assets/Logo-Portafolio-removebg-preview.webp'

const header = () => {
  return (
    <header className='portfolio-header'>
            <div className='header-icon-container'>
              <img src={Logo} alt="" />
            </div>
            <div className='header-menu'>
                <ul className='menu-list'>
                  <li className='menu-list-item'>
                    <a href="#aboutMe">
                      About
                    </a>
                  </li>
                  <li className='menu-list-item'>
                    <a href="#experience">
                      Experience
                    </a>
                  </li>
                  <li className='menu-list-item'>
                    <a href="#projects">
                      Projects
                    </a>
                  </li>
                  <li className='menu-list-item'>
                    <a href="#contact">
                      Contact
                    </a>
                  </li>
                  <li className='menu-list-item'>
                    <a href="#skills">
                      Skills
                    </a>
                  </li>
                </ul>
            </div>
    </header>
  )
}

export default header
