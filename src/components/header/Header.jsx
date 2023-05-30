import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/sed.jpg'
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Sedrick Gobina</h1>
        <h5 className='text-light'>Network Engineer</h5>
        <CTA/>
        <HeaderSocial />

        

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header