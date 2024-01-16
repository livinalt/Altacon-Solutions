import React from 'react'
import About from './Components/About'
import ContactMe from './Components/ContactMe'
import FeaturedWork from './Components/FeaturedWork'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import PersonalWorks from './Components/PersonalWorks'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div>
          
      <Navbar/>
      <Hero/>
      <About/>
      <FeaturedWork/>
      <PersonalWorks/>
      <ContactMe/>
      <Footer/>
      
    </div>
  )
}

export default App;
