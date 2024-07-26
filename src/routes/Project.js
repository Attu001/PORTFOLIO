import React from 'react'
import Navbar from '../Componentes/Navbar'
import Footer from '../Componentes/Footer'
import Hero2 from '../Componentes/Hero2'
import PricingCard from '../Componentes/PricingCard'
import Work from '../Componentes/Work'

const Project = () => {
  return (
    <div>
      <Navbar/>
      <Hero2 heading="PROJECTS." text="Some of my recents works"/>
        <Work/>
      <PricingCard/>
      <Footer/>

    </div>
  )
}

export default Project