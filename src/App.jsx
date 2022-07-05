import Header from './components/Header'
import Profile from './components/Profile'
import Experience from './components/Experience'
import Proyects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import './scss/app.scss'
import MainBanner from './components/MainBanner'

function App() {
  return (
    <div className="portfolio-container">
      <Header />
      <MainBanner />
      <Profile />
      <Experience />
      <Proyects />
      <Skills />
      <Contact />
    </div>
  )
}

export default App
