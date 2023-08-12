import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/commscope.jfif'
import IMG2 from '../../assets/edusera.jfif'
import IMG3 from '../../assets/devtown.jfif'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Work Experience</h5>
      <h2>Companies I Worked For</h2>
      <div className="container portfolio__container">
      <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt='Company Image'/>
          </div>
          <h3>CommScope ARRIS (Formerly Motorola India)</h3>
          <a href='/commscope' className='btn btn-primary'>More..</a>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG2} alt='Company Image'/>
          </div>
          <h3>Edusera</h3>
          <a href='/edusera' className='btn btn-primary'>More..</a>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG3} alt='Company Image'/>
          </div>
          <h3>DevTown</h3>
          <a href='/devtown' className='btn btn-primary'>More..</a>
        </article>
      </div>
    </section>
  )
}

export default Portfolio