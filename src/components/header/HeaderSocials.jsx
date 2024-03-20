// Importing dependencies  and icons
import React from 'react'
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"

const HeaderSocials = () => {
  return (
    // Social Icons and links to github and linkedin
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/chrisdickson86/" target='__blank'><FaLinkedin/></a>
        <a href="https://github.com/CDicksonNapier" target='__blank'><FaGithub/></a>
    </div>
  )
}
// Exporting the HeaderSocials component
export default HeaderSocials