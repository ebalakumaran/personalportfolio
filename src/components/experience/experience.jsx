import React from 'react'
import './experience.css'
import Skills from './skills'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I have</h5>
      <h2>Proficiencies in My Arsenal</h2>

      <div className="container experience__container">
        <div className="experience__skills">
          <h3>Skills</h3>
          <div className='experience__content'>
            <Skills skill='Python' explevel='Experienced'/>
            <Skills skill='JavaScript' explevel='Experienced'/>
            <Skills skill='C' explevel='Experienced'/>
            <Skills skill='C++' explevel='Intermediate'/>
            <Skills skill='Java' explevel='Experienced'/>
            <Skills skill='HTML' explevel='Experienced'/>
            <Skills skill='CSS' explevel='Experienced'/>
            <Skills skill='React JS' explevel='Experienced'/>
            <Skills skill='Node JS' explevel='Experienced'/>
            <Skills skill='Express JS' explevel='Experienced'/>
            <Skills skill='Mongo DB' explevel='Experienced'/>
            <Skills skill='PHP' explevel='Experienced'/>
            <Skills skill='MySQL' explevel='Experienced'/>
            <Skills skill='Machine Learning' explevel='Intermediate'/>
            <Skills skill='Docker' explevel='Intermediate'/>
            <Skills skill='AWS' explevel='Intermediate'/>
            <Skills skill='GCP' explevel='Intermediate'/>
            <Skills skill='Linux' explevel='Experienced'/>
            <Skills skill='Jenkins' explevel='Intermediate'/>
            <Skills skill='Prompt Engineering' explevel='Intermediate'/>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Experience