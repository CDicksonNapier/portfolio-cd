import React from 'react'
import './footer.css'

// importing the required icons
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa6"

// Building the footer component - simple footer with permalinks and socials - refers back to the main sections and established links
const Footer = () => {
  return (
    <footer>
      {/* Links  */}
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
        <li><a href='artPortfolio'>Art Portfolio</a></li>
        <li><a href='SpellingBees'>Spelling Bee'z</a></li>
        <li><a href='Notflix'>Notflix</a></li>
      </ul>
      {/* Social Icons */}
      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/chrisdickson86/" target='_blank' rel='noreferrer'><FaLinkedin/></a>
        <a href="https://github.com/CDicksonNapier?tab=repositories" target='_blank' rel='noreferrer'><FaGithub/></a>      
      </div>
      {/* Copyright */}
      <div className="footer__copyright">
        <small>&copy; Chris Dickson 2023</small>
      </div>
    </footer>
  )
}
// exporting the footer component
export default Footer