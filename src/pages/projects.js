import React from 'react';
import '../css/heading.css';

const Projects = () => {
  return (
    <div className="div" >
<h1 className="heading">Projects</h1>
{/* <hr style={{color:"white"}}/> */}

<br></br>

<h1 className="subheading">ANNADATA | Full-Stack</h1>
<hr style={{color:"white",width:"350px"}}/>

<p className="content">
• This website aims at helping those who needs food.We can collect food
from places that has excess of food and can supply it to the needy.
</p>
<br></br>

<h1 className="subheading">TRASHSETGO | Full-Stack</h1>
<hr style={{color:"white",width:"380px"}}/>

<p className="content">
• This website aims at cleaning your surrounding.People can gather
through this website to know where is trash and can clean it for a step
towards ”Swachh Bharat”
</p>
<br></br>

<h1 className="subheading">PAWPALS | Full-Stack</h1>
<hr style={{color:"white",width:"320px"}}/>

<p className="content">
• This website aims at helping street dogs.People can tell ourteam where
the doggo is in trouble and nearby team members to that location can
take it to nearby hospital or clinic.
</p>   
<br></br>



<h1 className="subheading">CERTIFICATE</h1>
<hr style={{color:"white",width:"220px"}}/>

<h2 className="subheading">MACHINE LEARNING | Udemy</h2>
<a className="content" href="https://www.udemy.com/certificate/UC-21c2f30e-4111-4685-9c6c-11398107752b/"> certificate</a>
<p className="content">
• Machine Learning A-z course from Udemy . In this I learned about
Regression ,Clustering ,Classification of data.
</p>

 </div>
  );
};

export default Projects;