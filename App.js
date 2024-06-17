import React  from 'react';
import Navbar from './Components/navbar/Navbar'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from "./Components/Home"
import About from "./Components/About"
import Services from "./Components/Services"




const App =()=>{
  return (
    <div className='App'>
      <Navbar/>
        

        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/services" element={<Services/>}></Route>
        
          
          

        </Routes>
        
    </div>
    
      
  )
}

export default App;

