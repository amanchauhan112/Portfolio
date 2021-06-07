import React, { useState } from 'react';
import {
    Nav,
    NavLink,
    NavMenu,
  } from './navbarElements';
  import Sidebarr from '../sidebar/Sidebar';

import './navbar.css';

import { IconContext } from 'react-icons';


    function Navbar() {

    return (
        <div className="container" id="root" >
            
      <IconContext.Provider value={{ color: '#fff' }}>
      <Sidebarr />
<div className="extra"></div>
        <Nav className="navbar navbar-container">
        <h1  ><a className="myname" href="/">Aman Chauhan</a></h1>


<NavMenu>

<NavLink to="/" className="nav_items">
    Home
</NavLink>

<NavLink to="/about" className="nav_items" >
    About
</NavLink>

<NavLink to="/projects" className="nav_items" >
    Projects
</NavLink>


</NavMenu>

<a className="resume" href="https://drive.google.com/file/d/1fRAskMtln9DyIpC0xNjxnR9RAOi0VHyk/view?usp=sharing">Resume</a>

</Nav>


{/* <nav class="navbar">

<Sidebarr />

    <div class="navbar-container">
   
        <a class="navbar-logo" href="/">
            Aman Chauhan<i class="fab fa-typo3"></i>
            </a>
        
        <div class="menu-icon">
            <i class="fas fa-bars"></i>
            </div>
      
        <ul className="nav-menu">
        <h1>sdfds</h1>
            <li class="nav-item"><a class="nav-links" href="/">Home</a></li>
            <li class="nav-item"><a class="nav-links" href="/about">Aout</a></li>
            <li class="nav-item"><a class="nav-links" href="/projects">Projects</a></li>
            <li>
                
        <a href="https://drive.google.com/file/d/1OwprR-2_KJOOH07qpJJtlbMsa_xE_lKY/view" class="nav-links-mobile">Download Resume</a>
        </li>
            </ul>
            <a href="https://drive.google.com/file/d/1OwprR-2_KJOOH07qpJJtlbMsa_xE_lKY/view" class="btn-mobile"><button class="btn btn--outline btn--medium">Download Resume</button>
            </a>
        </div>
</nav> */}
        </IconContext.Provider>
        </div>
    )
}

export default Navbar
