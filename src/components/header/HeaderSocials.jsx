// Importing dependencies  and icons
import React from 'react'
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"

const HeaderSocials = () => {
  return (
    // Social Icons and links to github and linkedin
    <div className='header__socials'>
        <a href="www.linkedin.com/in/chrisdickson86" target="_blank"><FaLinkedin/></a>
        <a href="https://github.com/CDicksonNapier" target="_blank"><FaGithub/></a>
    </div>
  )
}
// Exporting the HeaderSocials component
export default HeaderSocials