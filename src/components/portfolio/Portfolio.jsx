// import dependencies and images
import React from 'react'
import './portfolio.css'
import SBEES from '../../assets/sbees.png'
import ARTFOLIO from '../../assets/art-portfolio-new.png'
import NOTFLIX from '../../assets/notflix_logo.png'






const Portfolio = () => {
  return (
    // Portfolio section with the recent projects and their respective links
    <section id="portfolio">
      <h5>Recent Work</h5>
      <h2>My Portfolio</h2>
      <div className="container portfolio__container">
        {/* Spelling Bee'z Honors project - still work in progress */}
      
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={SBEES} alt="Spelling Bee'z" />
          </div>
          <h3>Honours Project - Spelling Bee'z</h3>
          <div className="portfolio__item-cta">
             <a href="https://github.com/CDicksonNapier/spelling_beez/tree/main/sBees" className='btn'target='__blank'>Github</a>
          <a href="https://spellingbeez.co.uk/" className='btn btn-primary' target='__blank'>Live Demo</a>
          </div>         
        </article>
        {/* Original Art Portfolio re-visited  */}
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={ARTFOLIO} alt="Art portfolio" />
          </div>
          <h3>First year HND art portfolio. </h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/CDicksonNapier/art-portfolio" className='btn'target='__blank'>Github</a>
            <a href="https://cdicksonart.co.uk/" className='btn btn-primary' target='__blank'>Live Demo</a>
          </div>          
        </article>
      {/* Netflix clone made in python - need to work this in */}
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={NOTFLIX} alt="Netflix clone app " />
          </div>
          <h3>NotFlix -Coming soon</h3>
          <div className="portfolio__item-cta">
             <a href="www.github.com/CDicksonNapier/finalNotflix" className='btn'target='__blank'>Github</a>
          <a href="www.github.com/CDicksonNapier/finalNotflix" className='btn btn-primary' target='__blank'>Live Demo</a>
          </div>         
        </article>  
          
      </div>
    </section>
  )
}
// exporting the portfolio component
export default Portfolio