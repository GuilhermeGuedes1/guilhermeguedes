import './App.css'
import Header from './pages/home/components/header/Header'
import Hero from './pages/home/components/hero/Hero'
import Projects from './pages/home/components/projects/Projects'
import ShortAbout from './pages/home/components/shortAbout/ShortAbout'
import Contact from './pages/home/components/contact/Contact'
import { Footer } from './pages/home/components/footer/Footer'


function App() {


  return (
    <>
      <div>
        <Header/>
        <Hero />
        <Projects />
        <ShortAbout />
        <Contact />
        <Footer />
        
      </div>
    </>
  )
}

export default App
