import React, { useEffect } from 'react'
import Animation from '../assets/img/aboutMe/animation.svg'

import Aos from 'aos';

const MainBanner = () => {
  return (
    <section className='section-container banner-content'>
        <div className='main-content'>
            <p className='banner__text'>Hi, my name is</p>
            <h1 data-aos="fade-up" className='banner__main_text'>Isaid Graterol</h1>
            <h2 data-aos="fade-up" className='banner__secundary_text'>I enjoy building things for the web. 🚀</h2>
        </div>
        {/* <img src={Animation} /> */}
        <img className='second-animation' src={Animation} />
    </section>
  )
}

export default MainBanner
