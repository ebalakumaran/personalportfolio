import React from 'react'
import CTA from './headerbuttons'
import './header.css'
import ME from '../../assets/me.png'
import HeaderSocials from './headersocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Balakumaran E</h1>
        <h5 className='text-light'>Software Engineer</h5>
        <CTA/>
        <HeaderSocials/>

        <div className='me'>
          <img src={ME} alt='me'></img>
        </div>

        <a href='#contact' className='scroll_down'>Scroll down</a>
      </div>
    </header>
  )
}

export default Header