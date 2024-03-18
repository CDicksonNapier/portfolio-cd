import React from 'react'
import CV from '../../assets/chrisdicksonCV.pdf'
// call to action component can be utilized anywhere in the project. 
const CTA = () => {
  return (
    //  CTA button component
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's talk</a>
        </div>
  )
}

export default CTA