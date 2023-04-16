import React from "react";
import About from "./about";
import Projects from "./projects";

import { Link } from "react-scroll";

import useMedia from "../assets/css/useMedia";
import "../assets/css/home.css";
import "../assets/css/Navbar.css";
import { NavLink } from "react-router-dom";
const Home = () => {
  const matches = useMedia("(min-width : 500px )");
  return (
    <div style={{ overflow: "hidden" }}>
      <div className="navbar_main">
        <Link to="homediv" className="nav_items">
          Home
        </Link>
        <Link to="aboutdiv" className="nav_items">
          About
        </Link>
        <Link to="projectdiv" className="nav_items">
          Projects
        </Link>

        <a
          className="nav_items py-1"
          href="https://drive.google.com/file/d/109gt34PWfh8vKVJVM1Fuvftp_n9EZGvB/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          {matches ? "Resume" : ""}
        </a>
       { matches&&<NavLink
          to="/Aman's Portfolio.apk"
          target="_blank"
          rel="noreferrer"
          download
          style={{
            color: "yellow",
            fontWeight: "600",
            background: "none",
          }}
        >
          (Apk)
        </NavLink>}
      </div>

      <div className="home_main_div" id="homediv">
        <h1 className="home_hello">HELLO</h1>
        <h1 className="home_myName"> I'm Aman Chauhan</h1>

        <p className="home_desc">Web Developer & Competitive Programmer </p>
        <p className="home_desc">I create websites using MERN Stack </p>
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
