import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/silva.jpg'
import HeaderSocial from './HeaderSocials'
const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello I'm called</h5>
                <h1>Sedrick Gobina</h1>
                <h5 className="text-light">Ethical Hacker, Cybercrime Analyst</h5>
                <CTA />
                <HeaderSocial />
                <div className="me">
                    <img src={ME} alt ="me"/>
                </div>
                <div>
                    <a href="#contact" className='scroll_down'>Scroll Down</a>
                </div>
            </div>
        </header>
    )
}
export default Header;