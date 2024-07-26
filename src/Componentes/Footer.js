import React from 'react'
import './Footer.css'
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-container">
            <div className="footer-left">
                <div className="location">
                    <FaHome size={20} style={{color:"white",marginRight:"2rem"}}/>
                </div>
                <div>
                    <p>Plot no.13,ramling colony,Jaysingpur.</p>
                    <p>Dist:Kolhapur.</p>
                </div>
            
            <div className="phone">
                <h4>
                <FaPhone size={20} style={{color:"white",marginRight:"2rem"}}/>
                9503169644
                </h4>
            
            </div>
            <div className="email">
                <h4>
                <FaMailBulk size={20} style={{color:"white",marginRight:"2rem"}}/>
                atishchavan066@gmail.com
                </h4>
            
            </div>
            </div>
            <div className="footer-right">
                <h4>
                    About Me
                </h4>
                <p>
                    This is me Atish Chavan.I enjoy discussing the new projects and design Challenges.</p>
                    <div className='social'>
                    <FaFacebook size={30} style={{color:"white",marginRight:"2rem"}}/>
                    <FaTwitter size={30} style={{color:"white",marginRight:"2rem"}}/>
                    <FaLinkedin size={30} style={{color:"white",marginRight:"2rem"}}/>


                    </div>
                
            </div>
        </div>
    </div>
  )
}

export default Footer