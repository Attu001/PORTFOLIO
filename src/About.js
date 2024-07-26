import React from 'react'
import Footer from './Componentes/Footer'
import Navbar from './Componentes/Navbar'
import Hero2 from './Componentes/Hero2'
import Aboutcontent from './Componentes/Aboutcontent'

const About = () => {
  return (
    <div> 
      <Navbar/>
      <Hero2 heading="ABOUT." text="I am friendly with  Full-Stack-Development"/>
      
      <Aboutcontent/>

    <Footer/>
</div>
  )
}

export default About