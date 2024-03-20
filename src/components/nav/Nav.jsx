// importing dependencies, icons and the useState
import React from 'react'
import './nav.css'
import { AiOutlineHome } from "react-icons/ai"
import { AiOutlineUser } from "react-icons/ai"
import { BiBook } from "react-icons/bi"
import { MdDesignServices } from "react-icons/md"
import { BiSolidMessageSquareDetail } from "react-icons/bi"
import { useState } from 'react'


// Building the nav component - will sit slightly of the bottom of the screen and is fixed and will show whereever the user is on the screen 
const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    // nav links with the imported icons and ternary operator to show the active link 
  
    <nav>      
      <a href="#" onClick ={()=>setActiveNav('#')} className={activeNav === '#' ? 'active' : ''} ><AiOutlineHome /></a>
      <a href="#about" onClick ={()=>setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''} ><AiOutlineUser /></a>
      <a href="#experience" onClick ={()=>setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook /></a>
      <a href="#portfolio" onClick ={()=>setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><MdDesignServices /></a>
      <a href="#contact" onClick ={()=>setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiSolidMessageSquareDetail /></a>     
    </nav>

  )
}
// exporting the nav component
export default Nav