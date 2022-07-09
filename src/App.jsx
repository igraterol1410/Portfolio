import { useEffect } from 'react'
import Header from './components/Header'
import Profile from './components/Profile'
import Experience from './components/Experience'
import Proyects from './components/Projects'
import SocialLinks from './components/SocialLinks'
import Contact from './components/Contact'
import './scss/app.scss'
import MainBanner from './components/MainBanner'

import Aos from 'aos';

function App() { 
  
  useEffect(()=>{
    Aos.init({ duration:700 })
  },[])

  return (
    <div className="portfolio-container">
      <Header />
      <MainBanner />
      <Profile />
      <Experience />
      <Proyects />
      <Contact />
      <SocialLinks />
    </div>
  )
}

export default App
