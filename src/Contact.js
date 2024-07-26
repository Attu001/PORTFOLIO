import React from 'react'
import Navbar from './Componentes/Navbar'
import Footer from './Componentes/Footer'
import Hero2 from './Componentes/Hero2'
import Form from './Componentes/Form'
const Contact = () => {
  return (
    <div>
      <Navbar/>
      <Hero2 heading="CONTACT ME." text="Let's have a chat" />
      <Form/>
        <Footer/>
    </div>
  )
}

export default Contact