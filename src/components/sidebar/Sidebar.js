import React, { useState } from 'react';

// import {
//     Nav,
//     // NavLink,
//     // Bars,
//     // NavMenu,
//     // NavBtn,
//     // NavBtnLink
//   } from '../navbar/navbarElements';
//-----------------------
import './Sidebar.css';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from '../sidebar/SidebarData';
import useMedia from "../../css/useMedia"
import { IconContext } from 'react-icons';
import {Link} from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';

    function Sidebarr() {
    const [sidebar, setSidebar] = useState(false);
const matches=useMedia("(max-width:500px)");
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <div className="container" >
      {   matches &&   
      <IconContext.Provider value={{ color: '#fff' }}>

   
        
{/* <Link to="#" className="menu-bars" style={{'margin':'10px'}}> */}
<FaIcons.FaBars onClick={showSidebar} className="menu-bars" style={{'margin':'10px'}}/>

{/* </Link> */}
<nav className={sidebar ? 'nav-menu active' : 'nav-menu'}  > {/*onMouseLeave={showSidebar} */}
          <ul className='nav-menu-items' onClick={showSidebar}>
            {/* <li className='navbar-toggle'> */}
            {/* <div class="menu-icon"><i class="fas fa-bars"></i></div> */}
              {/* <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link> */}
            {/* </li> */}
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
               
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
{  matches && <li className="nav-text nav-text-resume">
                  <a href="https://drive.google.com/file/d/1fRAskMtln9DyIpC0xNjxnR9RAOi0VHyk/view?usp=sharing">
                <AiIcons.AiFillFilePdf />
                  
                    <span>Resume</span>
                  </a>
                </li>  }
                
                 <li className="nav-text nav-text-resume">
                  <Link to="/Aman's Portfolio.apk" target="_blank" download>
                <AiIcons.AiFillAppstore style={{color:"yellow"}} />
                  
                    <span style={{color:"yellow"}} >Apk</span>
                  </Link>
                </li>
          </ul>
        </nav>
     

        </IconContext.Provider>}
        </div>
    )
}

export default Sidebarr;
