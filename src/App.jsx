import React from 'react'
import Hero from './sections/Hero'
import NavBar from './components/Navbar'
import Skills from './sections/Skills'
import Experience from './components/Experience/Experience'
import Certifications from './components/Certifications/Certifications'
import Work from './components/Work/Work'
import Education from './components/Education/Education'
import Footer from './components/Footer/Footer'
import Contact from './components/Contact/Contact'
const App = () => {
  return (
    <>
        <NavBar/>
        <Hero/>
        <Skills/>
        <Experience/>
        <Certifications/>
        <Work/>
        <Education/>
        <Contact/>
        <Footer/>

    </>
  )
}

export default App
