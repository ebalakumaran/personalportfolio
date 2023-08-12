import React from 'react'
import './nav.css'
import { AiOutlineUser } from 'react-icons/ai'
import {AiOutlineHome} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import { FaLaptopCode } from 'react-icons/fa'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { useState } from 'react'
import {TbCertificate} from 'react-icons/tb'

const Nav = () => {
  const [activeNav,setActiveNav]=useState('#')
  return (
    <nav>
      <a href='#'onClick={()=>setActiveNav('#')} className={activeNav==='#'?'active':''}><AiOutlineHome/></a>
      <a href='#about' onClick={()=>setActiveNav('#about')} className={activeNav==='#about'?'active':''}><AiOutlineUser/></a>
      <a href='#experience' onClick={()=>setActiveNav('#experience')} className={activeNav==='#experience'?'active':''}><BiBook/></a>
      <a href='#portfolio' onClick={()=>setActiveNav('#services')} className={activeNav==='#services'?'active':''}><FaLaptopCode/></a>
      <a href='#certifications' onClick={()=>setActiveNav('#certifications')} className={activeNav==='#certifications'?'active':''}><TbCertificate/></a>
      <a href='#contact' onClick={()=>setActiveNav('#contact')} className={activeNav==='#contact'?'active':''}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav