import React, { useEffect } from 'react'
import ProfilePic2 from '../assets/img/aboutMe/profile.gif'

import { DiJavascript1,DiReact } from "react-icons/di";
import { SiStyledcomponents,SiChakraui,SiRedux,SiFirebase,SiGatsby, SiTypescript, SiApollographql } from "react-icons/si";

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
          <img className='profile__pic' src={ProfilePic2} alt="Profile Pic" />
        </div>
        <div className='about_me__description' data-aos="zoom-in">
          <p className='about_me__text'>My name is Isaid Graterol, passionate Frontend Developer with 3+ years of experience crafting intuitive and efficient digital solutions. Proficient in ReactJs, NextJs, and TypeScript, I've successfully built high-impact user interfaces. My personal project, Cotify, a web app streamlining restaurant business calculations, showcases my ability to transform ideas into practical solutions. A self-taught problem-solver, I'm dedicated to quality and usability.
          </p>
          <p className='about_me__p'>Here are a few technologies i’ve been working with recently:</p>
          <ul className='grid__container skills__container'>
            <li className='skills__item'>JavaScript<DiJavascript1 className='skills__icon'/></li>
            <li className='skills__item'>TypeScript<SiTypescript className='skills__icon'/></li>
            <li className='skills__item'>GraphQL<SiApollographql className='skills__icon'/></li>
            <li className='skills__item'>React Js<DiReact className='skills__icon'/></li>
            <li className='skills__item'>Styled Components<SiStyledcomponents className='skills__icon'/></li>
            <li className='skills__item'>Chakra UI<SiChakraui className='skills__icon'/></li>
            <li className='skills__item'>Redux Thunk<SiRedux className='skills__icon'/></li>
            <li className='skills__item'>Redux Toolkit<SiRedux className='skills__icon'/></li>
            <li className='skills__item'>Firebase<SiFirebase className='skills__icon'/></li>
            <li className='skills__item'>GatsbyJs<SiGatsby className='skills__icon'/></li>
          </ul>
        </div>
      </div>
     
    </section>
  )
}

export default Profile
