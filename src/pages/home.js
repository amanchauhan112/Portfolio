import React from 'react';
import '../css/style.css';
import About from './about';
import Projects from './projects';


const Home = () => {

  // function App() {
  //   return (
  //     <div>
  //       <ParticleBackground />
  //       <CenterTitle />
  //     </div>
  //   );
  // }
  return (
    <>
    <div className="home_main_div">
 
      
        <br></br>
<h1 className="subheading heeh">Hello , I am Aman Chauhan</h1>
<br></br>
<p className="subheading">Web Developer & Competitive Programmer <br/>
I create websites using MERN Stack</p>

    </div>
    <About/>

    <Projects/>
    </>    
  );
};

export default Home;