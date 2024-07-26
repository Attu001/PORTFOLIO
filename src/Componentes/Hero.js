import React from 'react'
import './Hero.css'

import intro from '../assets/intro-bg.jpg';
import { Link } from 'react-router-dom';
const Hero = () => {
  return (
    <div className='hero'>
        <div className='mask'>
        <img src={intro} className='intro-img' alt="intro" />
        </div>
        <div className="content">
            <p>HI, I'M ATISH</p>
            <h1>Software Developer</h1>
            <div>
                <Link to='/project' className='btn'>Projects</Link>
                <Link to='/contact' className='btn btn-light'>Contact</Link>
            </div>
        </div>
        
    </div>
  )
}

export default Hero