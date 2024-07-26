import React from 'react'
import './Workcard.css'
import Workcard from './Workcard'
import Workdata from './Workdata'



const Work = () => {
  return (
    <div className='workcontainer'>
        <h1 className='project-heading'>Projects</h1>
        <div className="project-container">
            {Workdata.map((item,index)=>{
                return(
                  
                <Workcard
                      key={item.id}
                      imgsrc={item.imgsrc}
                       title={item.title}
                        text={item.text}
                         view={item.view} />
                
                )
            })};
               
        </div>
      
    </div>
  )
}

export default Work;