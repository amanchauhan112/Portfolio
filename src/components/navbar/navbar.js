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
        <div class="container">
            
      <IconContext.Provider value={{ color: '#fff' }}>
      <Sidebarr />

        <Nav className="navbar">

<NavMenu>

{/* <NavLink to="/" activeStyle>
<img src={require('../../images/gg.png')} alt='Home' />
</NavLink> */}
<NavLink to="/" activeStyle>
    Home
</NavLink>

<NavLink to="/about" activeStyle>
    About
</NavLink>
<NavLink to="/education" activeStyle>
    Education
</NavLink>
<NavLink to="/skills" activeStyle>
    Skills
</NavLink>
<NavLink to="/projects" activeStyle>
    Projects
</NavLink>
<NavLink to="/profile_links" activeStyle>
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
