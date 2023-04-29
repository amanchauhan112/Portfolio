import myimg from "../assets/images/my1.jpg";
import "../assets/css/about.css";
import about_bg from "../assets/images/about_bg.jpg";
import Tilty from "react-tilty";
import useMedia from "../assets/css/useMedia";
import CLLogo from "../assets/images/cllogo.png";
import STLogo from "../assets/images/STLogo.png";
import Skills from "./skills";

const About = () => {
  const matches = useMedia("(min-width:500px)");
  return (
    <div
      className="about_main_div pt-5"
      style={{ backgroundImage: `url(${about_bg})` }}
    >     
      <h1 className="who_am_i">Who Am I?</h1>    

      <div className="row d-flex text-center justify-content-center">
        <div
          className={matches ? "col-7 mx-4 mt-5" : "col-11 mt-5"}
          style={{ backdropFilter: "brightness(0.5)", borderRadius: "20px" }}
        >
          <p className="about_left">
          Hello! I'm Aman Chauhan. I completed my Bachelor of Technology from Guru Tegh Bahadur Institute of Technology, Delhi, India ( 2018-2022 ). 
          I am a MERN Stack Developer. I have created multiple projects using ReactJS and Nodejs. 
          I worked at Cantilever Labs as MERN Stack Intern for 6 months and at Sigaram Technologies for 1 year as ReactJS Developer. 
          I am a self-inspired person and self-disciplined person. I believe in putting my best and my thinking is that if you are doing your 
          work with your best efforts, definitely you will get success in that work.
          </p>
        </div>
        <div className="col-4 d-flex justify-content-center">
          <div className="mt-4">
            <img src={myimg} className="myimg" alt="myPic" />
          </div>
        </div>
      </div>
          <div className={matches?"row mt-5 mx-5":"row mt-5"}>
            <Tilty
              axis="X"
              glare="false"
              max="45"
              perspective={1000}
              easing="cubic-bezier(.03,.98,.52,.99)"
              className="col-sm Tilt shadow py-5"
              style={{
                transformStyle: "preserve-3d",
                backgroundColor: "#FAFAFA",
                margin: "1vh 2vw",
                borderRadius: "1rem",                
                marginLeft:matches?"":"22px",
                maxWidth:matches?"":"22rem"
              }}
            >
              <div
                style={{transform: "translateZ(30px)"}}>
              <h3 style={{fontWeight: "600" }}>MERN Stack Intern (6 Months)</h3>
                         <a href="https://www.cantileverlabs.com/" target="_blank" rel="noreferrer">
                  <img src={CLLogo} alt="cllogo"  height="50" width="200" className="my-2" />
                </a>
                <ul className="tilty_points">
                  <li>Added high impact components like dashboard and payment gateways.
                  </li>
                  <li>
                    Added components that are visited by <b>5000+ </b>students.
                  </li>
                  <li>Worked with Api’s and Improved UI-UX of the website.</li>
                </ul>
              </div>
            </Tilty>
            <Tilty
              axis="X"
              glare="false"
              max="45"
              perspective={1000}
              easing="cubic-bezier(.03,.98,.52,.99)"
              className="col-sm Tilt  shadow py-5"
              style={{
                transformStyle: "preserve-3d",
                backgroundColor: "#FAFAFA",
                margin: "1vh 4vw",
                borderRadius: "1rem",
                padding: "0.5rem",
                marginLeft:matches?"":"22px",
                maxWidth:matches?"":"22rem"
              }}
            >
              <div style={{transform: "translateZ(30px)"}}>
                <h3 style={{fontWeight: "600" }}>ReactJS Developer (1 year)</h3>

                <a
                  href="https://www.sigaramtech.com/?msclkid=e08a4fefcec111ec9bb0bff2c726d4ae"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={STLogo} alt="stlogo"  height="20" width="20" />
                  <span
                    style={{
                      fontSize: "25px",
                      fontWeight: "700",
                      marginLeft: "10px",
                      color: "black",
                    }}
                  >
                    Sigaram Technology
                  </span>
                </a>

                <ul className="tilty_points">
                  <li>Worked on Dashboard and added lots of different features</li>
                  <li>Worked with Api’s and UI-UX of the dashboard.</li>
                  <li>Managed tasks on day-to-day basis.</li>
                </ul>
              </div>
            </Tilty>
          </div>
          <Skills />
    </div>
  );
};

export default About;
