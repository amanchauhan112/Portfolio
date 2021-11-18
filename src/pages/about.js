import myimg from "../images/my1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faWordpress,
  faTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import "../css/style.css";
import "../css/projects.css";
import about_bg from "../images/about_bg.jpg";
import Tilty from "react-tilty";

const About = () => {
  return (
    <div
      className="about_main_div pt-5"
      style={{ backgroundImage: `url(${about_bg})` }}
    >
      <div>
        <h1 className="subheading">Who Am I?</h1>
      </div>

      <div>
        <a href="https://www.linkedin.com/in/aman-chauhan-2b51471b6/">
          <FontAwesomeIcon icon={faLinkedin} style={{ color: "white" }} />
        </a>
        &emsp;
        <a href="https://github.com/amanchauhan112">
          <FontAwesomeIcon icon={faGithub} style={{ color: "white" }} />
        </a>
        &emsp;
        <a href="https://trashsetgo.wordpress.com">
          <FontAwesomeIcon icon={faWordpress} style={{ color: "white" }} />
        </a>
        &emsp;
        <a href="https://twitter.com/Amanchauhan2801">
          <FontAwesomeIcon icon={faTwitter} style={{ color: "white" }} />
        </a>
        &emsp;
        <a href="https://m.facebook.com/aman.chauhan.9809">
          <FontAwesomeIcon icon={faFacebook} style={{ color: "white" }} />
        </a>
      </div>
      <div className="about_text_div mt-5">
        {/* <div className="img_text">
          <div >
            <img src={myimg} className="myimg" alt="myPic" />
          </div>

          <p className="font text">
            I currently am a student of GTBIT.I started my web dev journey in my
            2nd semester , that time I only knew HTML & CSS .I created websites
            using that only and also I learnt Bootstrap at that time. Today, I
            use ReactJS,NodeJS,MONGODB to develop websites. I specialize in
            creating beautiful websites using best practice accesibility and
            latest web standards.
          </p>
        </div> */}
      </div>
      <div className="row d-flex text-center justify-content-center">
        <div
          className="col-7 mx-4"
          style={{ backdropFilter: "brightness(0.5)", borderRadius: "20px" }}
        >
          <p className="font about_left">
            Hello! I'm Aman . I currently am a student of GTBIT.I specialize in
            creating beautiful websites using best practice accesibility and
            latest web standards. I am a self-motivated Web Developer and a
            person slighty obsessed for code quality. If I'll be hired by you
            then it would be a great pleasure for me. I’m currently looking for
            opportunities.
          </p>
        </div>
        <div className="col-4 d-flex justify-content-center">
          <div className="mt-4">
            <img src={myimg} className="myimg" alt="myPic" />
          </div>
        </div>
      </div>
      <div>
        <div style={{ margin: "0px 20px" }} className="py-5">
          <div className="row d-flex justify-content-center">
            <Tilty
              axis="X"
              glare="false"
              max="45"
              perspective={1000}
              easing="cubic-bezier(.03,.98,.52,.99)"
              className="col-sm Tilt  p-4 shadow"
              style={{
                transformStyle: "preserve-3d",
                backgroundColor: "#FAFAFA",
                margin: "1vh 4vw",
                borderRadius: "1rem",
                padding: "0.5rem",
              }}
            >
              <div
                style={{
                  margin: "5%",
                  transform: "translateZ(30px)",
                  textAlign: "center",
                }}
              >
                <h3 style={{ color: "#000", fontWeight: "600" }}>My Skills</h3>
                <p>Web Dev: HTML,CSS,Bootstrap</p>
                <p>Frameworks:ReactJS,NodeJS,</p>
                <p>Languages:C++JavaScript,</p>
                <p>Other Tools:MongoDB,Git/Github</p>
                <br />
              </div>
            </Tilty>
            <Tilty
              axis="X"
              glare="false"
              max="45"
              perspective={1000}
              easing="cubic-bezier(.03,.98,.52,.99)"
              className="col-sm Tilt  p-4 shadow"
              style={{
                transformStyle: "preserve-3d",
                backgroundColor: "#FAFAFA",
                margin: "1vh 4vw",
                borderRadius: "1rem",
                padding: "0.5rem",
              }}
            >
              <div
                style={{
                  margin: "5%",
                  transform: "translateZ(30px)",
                  textAlign: "center",
                }}
              >
                <h3 style={{ color: "#000", fontWeight: "600" }}>
                  Internship:
                </h3>
                <b>
                  <a href="https://www.cantileverlabs.com/">Cantilever Labs</a>
                </b>
                <ul>
                  <li>
                    -Added <b>high impact</b> components like dashboard and
                    payment gateways.
                  </li>
                  <li>
                    -Added components that are visited by <b>5000+ </b>students.
                  </li>
                  <li>-Worked with Api’s and Improved UI-UX of the website.</li>
                </ul>
              </div>
            </Tilty>
            <Tilty
              axis="X"
              glare="false"
              max="45"
              perspective={1000}
              easing="cubic-bezier(.03,.98,.52,.99)"
              className="col-sm Tilt  p-4 shadow"
              style={{
                transformStyle: "preserve-3d",
                backgroundColor: "#FAFAFA",
                margin: "1vh 4vw",
                borderRadius: "1rem",
                padding: "0.5rem",
              }}
            >
              <div
                style={{
                  margin: "5%",
                  transform: "translateZ(30px)",
                  textAlign: "center",
                }}
              >
                <h3 style={{ color: "#000", fontWeight: "600" }}>
                  Programming Skills:
                </h3>
                <br />
                <p>
                  <b>GeeksForGeeks:</b> 240+ problems solved
                </p>
                <p>
                  <b>CodeChef:</b>1583 Rating{" "}
                </p>
                <p>
                  <b>HackerEarth:</b> 1272 Contest Rating
                </p>
              </div>
            </Tilty>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
