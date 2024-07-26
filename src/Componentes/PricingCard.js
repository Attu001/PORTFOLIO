import React from 'react'
import './PricingCard.css'
import { Link } from 'react-router-dom'

const PricingCard = () => {
  return (
    <div className='card-container'>
    <div className='pricing'>
        <div className="card">
            <h3>- Basic -</h3>
            <span className='bar'></span>
            <p className='btc'>$100 </p>
            <p>- Days 3 -</p>
            <p>- Pages 3 -</p>
            <p>-  Featured- </p>
            <p>- Resonsive Design- </p>
            <Link to="/contact" className='btn' >PURCHASE NOW</Link>
        </div>
    </div>
    <div className='pricing'>
        <div className="card">
            <h3>- Basic -</h3>
            <span className='bar'></span>
            <p className='btc'>$100 </p>
            <p>- Days 3 -</p>
            <p>- Pages 3 -</p>
            <p>-  Featured- </p>
            <p>- Resonsive Design- </p>
            <Link to="/contact" className='btn' >PURCHASE NOW</Link>
        </div>
    </div>
    <div className='pricing'>
        <div className="card">
            <h3>- Premium -</h3>
            <span className='bar'></span>
            <p className='btc'>$200 </p>
            <p>- Days 5 -</p>
            <p>- Pages 8 -</p>
            <p>-  Featured - </p>
            <p>- Resonsive Design- </p>
            <Link to="/contact" className='btn' >PURCHASE NOW</Link>
        </div>
    </div>
    </div>
  )
}

export default PricingCard