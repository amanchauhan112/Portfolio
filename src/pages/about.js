// import React from 'react';
import '../css/heading.css';
import myimg from '../images/gg.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin ,faGithub,faWordpress,faTwitter,faFacebook} from '@fortawesome/free-brands-svg-icons'
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
<div style={{marginTop:"50px"}}>
<div  className="content" style={{width:"50px",float:"left"}}>
      <p className="content" style={{float:"left"}}>I currently am a student of GTBIT
      
      sasddddddddddddasdfdfdfdfdfdfdfdfdfdf
      asdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdf
      asdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdf
      sdf
      fsd
      fsdsdaf

      sfa
      sdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfs
      sasddddddddddddasdfdfdfdfdfdfdfdfdfdf
      asdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdf
      asdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdf
      sdf
      fsd
      fsdsdaf

      sfa
      sdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfs
       
      sasddddddddddddasdfdfdfdfdfdfdfdfdfdf
      asdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdf
      asdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdf
      sdf
      fsd
      fsdsdaf

      sfa
      sdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfs
      sasddddddddddddasdfdfdfdfdfdfdfdfdfdf
      asdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdf
      asdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdf
      sdf
      fsd
      fsdsdaf
      sasddddddddddddasdfdfdfdfdfdfdfdfdfdf
      asdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdf
      asdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdf
      sdf
      fsd
      fsdsdaf
        </p>
      </div>
        <img  src={myimg} style={{width:"300px",height:"400px",float:"right",borderRadius:"20%"}} alt="myPic"/> 
      </div>
    </div>
  );
};

export default About;