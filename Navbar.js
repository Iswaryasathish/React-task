import React from 'react';
import {Link} from 'react-router-dom';
import "./Navbar.css";
 
const Navbar =()=>{
    
  return (
    <nav className='navbar'>
        <h1>React</h1>
        <ul className='nav-links'>
            <Link to="/" className='home'>
                <li>Home</li>
            </Link>
            <Link to="/about" className='about'>
                <li>About</li>
            </Link>
            
            <Link to="/services" className='services'>
                <li>Services</li>
            </Link>
            
        </ul>

           
    </nav>
  )
}

export default Navbar;