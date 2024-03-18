// Importing the dependencies and required components 
import React from 'react'
import './about.css'
import ME from '../../assets/meTwo.jpg'
import { FaAward } from "react-icons/fa";
import { SiBookstack } from "react-icons/si";
import { FaComputer } from "react-icons/fa6"

import Fade from 'react-awesome-reveal'
const About = () => {
  // Building the about section component
  return (
    <section id="about">
      <h5>Get to know </h5>
      <h2> About Me!</h2>
      {/* The main about container */}
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src = {ME} alt="My pic for my portfolio" />
          </div>
        </div>
        {/* The content for the section */}
        <div className="about__content">
          <div className="about__cards">
            <Fade cascade damping={.75} >
            <article className="about__card">
              <FaComputer  className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ Years Experience</small>
            </article>
            <article className="about__card">
              <FaAward  className='about__icon'/>
              <h5>BSC Hons</h5>
              <small>Bachelors with Honours 2:1  </small>
            </article>
            <article className="about__card">
              <SiBookstack  className='about__icon'/>
              <h5>Design & Development</h5>
              <small>Skills in Design & Development</small>
            </article>   
            </Fade>       
          </div>
          <p>Hi thanks for visiting my portfolio site. I am a current student at Edinburgh's Napier University working toward my Bachelors with Honours degree. This portfolio and the other projects linked within are a cumulation of the hard work and effort I have put into my degree. I have a wide range of skills from art & design to 3d rendering and animation to web design and development. I even have cookery skills that I was able to transfer into my life as a student.  </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>          
        </div>
      </div>
    </section>
  )
}
// Exporting the about component

export default About