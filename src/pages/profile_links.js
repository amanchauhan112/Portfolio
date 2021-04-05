import React from 'react';
import '../css/heading.css';
const Profile_links = () => {
  return (
    <div className="div">
      <h1 className="heading">PROFILE LINKS</h1><br/>
<hr style={{color:"white"}}/>
  
<br/><br/>
<h1 className="subheading">GITHUB</h1>
<hr style={{color:"white",width:"125px"}}/>

  <a className="content" href="https://github.com/amanchauhan112">https://github.com/amanchauhan112</a>

<br/><br/>
<h1 className="subheading">LINKEDIN</h1>
<hr style={{color:"white",width:"160px"}}/>

  <a className="content" href="https://www.linkedin.com/in/aman-chauhan-2b51471b6">www.linkedin.com/in/aman-chauhan-2b51471b6</a>

<br/><br/>
<h1 className="subheading">WORDPRESS WEBSITE</h1>
<hr style={{color:"white",width:"350px"}}/>

  <a  className="content" href="https://trashsetgo.wordpress.com/">https://trashsetgo.wordpress.com/</a>
      
    </div>
  );
};

export default Profile_links;