// import React, { useState } from 'react';

import {
    Nav,
    NavLink,
    // Bars,
    NavMenu,
    // NavBtn,
    // NavBtnLink
  } from './navbarElements';
  import Sidebarr from '../sidebar/Sidebar';

import './navbar.css';
import { IconContext } from 'react-icons';


    function Navbar() {

    return (
        <div className="container">
            
      <IconContext.Provider value={{ color: '#fff' }}>
      <Sidebarr />

        <Nav className="navbar">

<NavMenu>

{/* <NavLink to="/" activeStyle>
<img src={require('../../images/gg.png')} alt='Home' />
</NavLink> */}
<NavLink to="/" >
    Home
</NavLink>

<NavLink to="/about" >
    About
</NavLink>
<NavLink to="/education" >
    Education
</NavLink>
<NavLink to="/skills" >
    Skills
</NavLink>
<NavLink to="/projects" >
    Projects
</NavLink>
<NavLink to="/profile_links" >
    Profile Links
</NavLink>
{/* <NavBtnLink to="/signin">Sign In</NavBtnLink> */}

</NavMenu>
{/* <NavBtn>
    <NavBtnLink to="/signin">Sign In</NavBtnLink>
</NavBtn> */}

</Nav>
        </IconContext.Provider>
        </div>
    )
}

export default Navbar
