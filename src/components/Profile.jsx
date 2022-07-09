import React, { useEffect } from 'react'
import ProfilePic from '../assets/img/aboutMe/perfil-2.jpeg'

import { DiJavascript1,DiReact } from "react-icons/di";
import { SiStyledcomponents,SiChakraui,SiRedux } from "react-icons/si";

import Aos from 'aos';

const Profile = () => {
  
  useEffect(()=>{
    Aos.init({ duration:1000 })
  },[])

  return (
    <section className='section-container'>
      <h2 data-aos='fade-right' id='aboutMe' className='section__title'>About me</h2>
      <div className='grid__container'>
        <div data-aos="zoom-in" className='profile__pic-container'>
          <img className='profile__pic' src={ProfilePic} alt="Profile Pic" />
        </div>
        <div className='about_me__description' data-aos="zoom-in">
          <p className='about_me__text'>My name is Isaid Graterol, i graduated in mechatronics engineering in 2018, and my beginnings in the area of programming began in 2013 while i was in college, i started learning assembler and C, where i developed some projects at an academical level, from that moment to now i have oriented everything i knew to web development using <span className='highlight__text'>JavaScript, HTML5, CSS3, SASS, ReactJs and Redux.</span>
          </p>
          <p className='about_me__p'>Here are a few technologies i’ve been working with recently:</p>
          <ul className='grid__container skills__container'>
            <li className='skills__item'>JavaScript (ES6+)<DiJavascript1 className='skills__icon'/></li>
            <li className='skills__item'>React Js<DiReact className='skills__icon'/></li>
            <li className='skills__item'>Styled Components<SiStyledcomponents className='skills__icon'/></li>
            <li className='skills__item'>Chakra UI<SiChakraui className='skills__icon'/></li>
            <li className='skills__item'>Redux Thunk<SiRedux className='skills__icon'/></li>
            <li className='skills__item'>Redux Toolkit<SiRedux className='skills__icon'/></li>
          </ul>
        </div>
      </div>
     
    </section>
  )
}

export default Profile
