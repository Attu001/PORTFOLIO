import React from 'react'
import './Workcard.css'
import { NavLink } from 'react-router-dom'

const Workcard = (props) => {
  return (
    
    <div className="project-card">
        <img src={props.imgsrc} alt="" />
        <h2 className='project-title'>{props.title}</h2>
        <div className="pro-details">
        <p>{props.text}</p>
        </div>
        <div className="pro-btn">
            <NavLink to={props.view} className="btn">View</NavLink>
            <NavLink to="url.cpm" className="btn">Source</NavLink>
        </div>
    </div>

  )
}

export default Workcard