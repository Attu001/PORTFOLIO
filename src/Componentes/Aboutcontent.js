import React from 'react'
import './Aboutcontent.css'
import { Link } from 'react-router-dom'
import javaimg from '../assets/java-img.jpg';
import reactimg from '../assets/react-img.jpg';



const Aboutcontent = () => {
  return (
    <div className='aboutcontent'>
<div className="left">
<h1>Who Am I?</h1>
<p>I am a Full Stack Developer.I develop responsive secure website's.</p>
<Link to="/contact">
    <button className='btn'>CONTACT</button>

 </Link>
</div>
<div className="right">
        <div className="img-container">
            <div className="img-stack top">
                <img src={javaimg} alt="" className='img' />
            </div>
            <div className="img-stack bottom">
                <img src={reactimg} alt="" className='img' />
            </div>
        </div>

</div>
    </div>
  )
}

export default Aboutcontent