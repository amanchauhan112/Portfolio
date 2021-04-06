// import React from 'react';
import '../css/heading.css';
import myimg from '../images/my.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin ,faGithub,faWordpress,faTwitter,faFacebook} from '@fortawesome/free-brands-svg-icons'
import './style.css';

const About = () => {
  return (
   <div className="div">
      <h1 className="heading">About</h1>
      <h1 className="subheading">I'm Aman Chauhan ,a web Devloper who uses React to devlop websites</h1>
<a href="https://github.com/amanchauhan112">
      <FontAwesomeIcon icon={faLinkedin} style={{color:"white"}}/> </a>
      &emsp;
      <a href="https://www.linkedin.com/in/aman-chauhan-2b51471b6/">
      <FontAwesomeIcon icon={faGithub} style={{color:"white"}}/></a>
      &emsp;
      <a  href="https://trashsetgo.wordpress.com">
      <FontAwesomeIcon icon={faWordpress} style={{color:"white"}}/></a>
      &emsp;
      <a  href="https://twitter.com/Amanchauhan2801">
      <FontAwesomeIcon icon={faTwitter} style={{color:"white"}}/></a>
      &emsp;
      <a  href="https://m.facebook.com/aman.chauhan.9809">
      <FontAwesomeIcon icon={faFacebook} style={{color:"white"}}/></a>

<div  className="content" style={{width:"500px",marginTop:"50px"}}>
      <p className="content font text" style={{float:"left"}}>I currently am a student of GTBIT.I startes d my web dev journey in my 2nd semester      
     , that time I only knew HTML & css .I created websites using that and also I learnt Bootstrap.
     Today I use ReactJS to devlop Websites.
     I specialise in creating beautiful websites using best practice accesibility andm latest web standards.
     All my sites are loving and hand coded.

        </p>
      </div>
        <img  src={myimg} style={{width:"300px",height:"350px",float:"right",borderRadius:"20%",marginRight:"60px"}} alt="myPic"/> 
     
    </div>
  );
};

export default About;