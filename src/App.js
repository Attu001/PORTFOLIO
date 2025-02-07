
import React from 'react';
import './index.css'
import Home from './routes/Home';
import Project from './routes/Project';
import About from './About';
import Contact from './Contact';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div>
      <Routes>
       <Route path='/'   element={<Home/>} />
        <Route path='/project' element={ <Project/>} />
        <Route path='/about' element={ <About/>}/>
         <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
