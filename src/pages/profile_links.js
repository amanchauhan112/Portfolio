import React from 'react';
import '../css/heading.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin ,faGithub,faWordpress,faTwitter,faFacebook} from '@fortawesome/free-brands-svg-icons'

const Profile_links = () => {
  return (
    <div className="div">
      <h1 className="heading">PROFILE LINKS</h1><br/>
<hr style={{color:"white"}}/>
  
<br/><br/>

<h1 className="subheading">
<FontAwesomeIcon icon={faGithub} style={{color:"white"}}/>
&nbsp; GITHUB</h1>
<hr style={{color:"white",width:"165px"}}/>

  <a className="content" href="https://github.com/amanchauhan112">https://github.com/amanchauhan112</a>

<br/><br/>
<h1 className="subheading">
<FontAwesomeIcon icon={faLinkedin} style={{color:"cornflowerblue"}}/>
 &nbsp; LINKEDIN</h1>
<hr style={{color:"white",width:"190px"}}/>

  <a className="content" href="https://www.linkedin.com/in/aman-chauhan-2b51471b6">www.linkedin.com/in/aman-chauhan-2b51471b6</a>

<br/><br/>
<h1 className="subheading">
<FontAwesomeIcon icon={faWordpress} style={{color:"white"}}/>
 &nbsp;  WORDPRESS WEBSITE</h1>
<hr style={{color:"white",width:"380px"}}/>

  <a  className="content" href="https://trashsetgo.wordpress.com/">
    
    https://trashsetgo.wordpress.com/</a>
      
    </div>
  );
};

export default Profile_links;