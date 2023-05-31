
//import "C:\Users\CONCEPTS\Documents\my-app\src\components\navbar\navbar.css"
import React from 'react'
import './nav.css'
import { AiOutlineHome } from "react-icons/ai"
import { AiOutlineUser } from "react-icons/ai"
import {BiBook } from 'react-icons/bi'
import {RiServiceLine } from 'react-icons/ri'
import { BiMessageSquareDetail } from "react-icons/bi"
const Nav = () => {  
return (
    <nav className="navigation">
      <a href="#Home">
        <AiOutlineHome />
      </a>
      <a href="#about">
        <AiOutlineUser />
      </a>
      <a href="#contact">
        <BiMessageSquareDetail />
      </a>

      <a href="#eperience">
        <BiBook />
      </a>
      <a href="#services">
        <RiServiceLine />
      </a>
    
    </nav>
  );
}
export default Nav