import React from 'react';
import '../css/heading.css';
const Home = () => {
  return (
    <div className="div" style={{textAlign:"center",backgroundColor:""}}>
      {/* <h1 className="heading">Home</h1>
<hr style={{color:"white"}}/> */}

      <p>
        <br></br>
<h1 className="subheading">Hello , I am Aman Chauhan</h1>
<br></br>
<p className="subheading">Web Devloper </p>
<p className="subheading"><i>HTML_CSS,JS,REACTJS</i></p>
<h3 className="subheading">Email</h3>
<center>
<hr style={{color:"white",width:"240px"}}/>
</center>

<span className="content">amanchauhan2801@gmail.com </span>

<br></br>

<br></br>
<h3 className="subheading" >Contact</h3>
{/* <hr style={{color:"white",width:"240px"}}/> */}

<span className="content">9990405573 </span>

      </p>
    
    </div>
  );
};

export default Home;