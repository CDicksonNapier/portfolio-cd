// Importing the dependencies and required components
import React from 'react'
import './experience.css'
// importing the required icons
import { SiAdobephotoshop } from "react-icons/si"
import { IoLogoFigma } from "react-icons/io5"
import { RiBlenderFill } from "react-icons/ri"
import { SiAutodesk } from "react-icons/si"
import { FaHtml5 } from "react-icons/fa"
import { FaCss3 } from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io5"
import { FaPhp } from "react-icons/fa"
import { TbFileTypeSql } from "react-icons/tb"
import { FaPython } from "react-icons/fa"

import Fade from 'react-awesome-reveal'

// building the experience section component
const Experience = () => {
  return (
    // returning the experience section component
    <section id="experience">
      <h5>What skills I have</h5>
      <h2>My Experience</h2>
      {/* breaking the tools/skills i know and have learned broken into design and development */}
      <div className="container experience__container">
      <Fade cascade damping={.75} >
      <div className="experience__design">
        {/* Design details */}
        <h3>Design</h3>
        <div className="experience__content">
        <artice className="experience__details">         
            <SiAdobephotoshop className='experience__details-icon' />
            <div>
              <h4>Adobe Photoshop</h4>
            <small className='text-light'>Experienced</small>        
            </div>                
          </artice>
        <artice className="experience__details">
            <IoLogoFigma className='experience__details-icon' />
            <div><h4>Figma</h4>
            <small className='text-light'>Experienced</small>  
            </div>                      
          </artice>
        <artice className="experience__details">
            <RiBlenderFill className='experience__details-icon' />
            <div>
             <h4>Blender</h4>
            <small className='text-light'>Intermediate</small>  
            </div>                       
          </artice>
        <artice className="experience__details">
            <SiAutodesk className='experience__details-icon' />
            <div><h4>3ds Max</h4>
            <small className='text-light'>Intermediate</small>     
            </div>                   
          </artice>         
          </div>         
          </div>
          {/* End of the design details */}
        <div className="experience__development">
          {/* Development details */}
        <h3>Development</h3>        
        <div className="experience__content">        
          <artice className="experience__details">
            <FaHtml5 className='experience__details-icon' />
            <div>
              <h4>HTML</h4>
            <small className='text-light'>Experienced</small>
            </div>                        
          </artice>
          <artice className="experience__details">
            <FaCss3 className='experience__details-icon' />
            <div>
             <h4>CSS</h4>
            <small className='text-light'>Intermediate</small> 
            </div>                        
          </artice>
          <artice className="experience__details">
            <IoLogoJavascript className='experience__details-icon' />
            <div>
              <h4>JavaScript</h4>
            <small className='text-light'>Intermediate</small> 
            </div>                       
          </artice>
          <artice className="experience__details">
            <FaPhp className='experience__details-icon' />
            <div>
             <h4>PHP</h4>
            <small className='text-light'>Intermediate</small>  
            </div>                       
          </artice>
          <artice className="experience__details">
            <TbFileTypeSql className='experience__details-icon' />
            <div>
              <h4>SQL</h4>
            <small className='text-light'>Intermediate</small>
            </div>                        
          </artice>
          <artice className="experience__details">
            <FaPython className='experience__details-icon' />
            <div>
             <h4>Python</h4>
            <small className='text-light'>Intermediate</small> 
            </div>                        
          </artice>
         
          {/* End of the design / development details cards  */}        
        </div>
     
      </div>
      </Fade>
    </div>
  </section>
  )
}
// exporting the experience section component
export default Experience