// Importing Dependencies and Required Components
import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.jpg'
import HeaderSocials from './HeaderSocials'



const Header = () => {
  // returning the header component (what the user sees first)
  return (
    <header>
      <div className="container header__container">
    
        <h5>Hello I'm</h5>
        <h1>Chris</h1>
        <h5 className='text-light'>Designer & Developer</h5>
  
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt='profile_picture' />
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
      </header>
  )
}
// exporting the header component
export default Header