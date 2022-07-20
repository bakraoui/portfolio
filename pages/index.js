import React from 'react'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Skills from '../components/Skills'
import StudyExperiences from '../components/StudyExperiences'
import Welcome from '../components/Welcome'
function index() {


  return (
    <>  
      <Welcome />
      <About />
      <StudyExperiences />
      <Skills />
      <Contact />
      <Footer />
    </>
  )
}

export default index