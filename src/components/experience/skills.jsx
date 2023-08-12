import React from 'react'
import {BsPatchCheckFill} from 'react-icons/bs'

const Skills = (props) => {

  return (
    <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>{props.skill}</h4>
                <small className='text-light'>{props.explevel}</small>
              </div>
    </article>
  )
}

export default Skills