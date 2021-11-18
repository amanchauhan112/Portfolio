import React from "react";
import "../css/style.css";
import About from "./about";
import Projects from "./projects";

import { Nav, NavLink, NavMenu } from "../components/navbar/navbarElements";
import { Link } from "react-scroll";
import "../components/navbar/navbar.css";
import { IconContext } from "react-icons";
import useMedia from "../css/useMedia";

const Home = () => {
  // function App() {
  //   return (
  //     <div>
  //       <ParticleBackground />
  //       <CenterTitle />
  //     </div>
  //   );
  // }
  const matches = useMedia("(min-width : 500px )");
  return (
    <div style={{overflow:"hidden"}}>
          
      <IconContext.Provider value={{ color: "#fff" }}>
          <Nav>
            <NavMenu>
              <NavLink to="/" className="nav_items">
                <Link to="homediv">Home</Link>
              </NavLink>
              <NavLink to="" className="nav_items">
                <Link to="aboutdiv">About</Link>
              </NavLink>

              <NavLink to="" className="nav_items">
                <Link to="projectdiv">Projects</Link>
              </NavLink>
<NavLink to="" className="nav_items py-1">
  {matches?
         <a className="resume" href="https://drive.google.com/file/d/1EUaHEdzDbGspdGIAKLavQLbscAT2hSA0/view?usp=sharing">Resume</a> 
:""}
</NavLink>
              <NavLink
                to="/Aman's Portfolio.apk"
                className="resume"
                target="_blank"
                download
                style={{
                  color: "yellow",
                  fontWeight: "600",
                  background: "none",
                }}
              >
                (Apk)
              </NavLink>
            </NavMenu>
          </Nav>
        </IconContext.Provider>

      <div className="home_main_div pt-5" id="homediv">
        <br></br>
        <h1 className="subheading heeh">Hello , I am Aman Chauhan</h1>
        <br></br>
        <p className="subheading">
          Web Developer & Competitive Programmer <br />I create websites using
          MERN Stack
        </p>
      </div>
      <div id="aboutdiv">
        <About />
      </div>
      <div id="projectdiv">
        <Projects />
      </div>
    </div>
  );
};

export default Home;