import React from 'react'
import './Form.css'

const Form = () => {
  return (
    <div className='form'>
        <label htmlFor="">Your name</label>
        <input type="text" />
        <label htmlFor="">Your email</label>
        <input type="email" />
        <label htmlFor="">Subject</label>
        <input type="text" />
        <label htmlFor="">Your message</label>
       <textarea name="" rows="6" placeholder='Type your message here' id=""></textarea>
        
        <button className='btn'>Submit</button>

    </div>
  )
}

export default Form