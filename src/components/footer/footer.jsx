import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Balakumaran E</a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Skills</a></li>
        <li><a href='#portfolio'>Experience</a></li>
        <li><a href='#certifications'>Certifications</a></li>
        <li><a href='#contact'>Contact Me</a></li>
      </ul>
      <div className="footer__socials">
        <a href='https://www.facebook.com/Balakumaran.242002/' target='_blank'><FaFacebookF/></a>
        <a href='https://www.instagram.com/balakumaran_e/' target='_blank'><FiInstagram/></a>
        <a href='https://twitter.com/balakumaran_e_' target='_blank'><IoLogoTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>All rights reserved &copy; Balakumaran E</small>
      </div>
    </footer>
  )
}

export default Footer