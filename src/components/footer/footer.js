import React from 'react'
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin ,faGithub,faWordpress,faTwitter,faFacebook} from '@fortawesome/free-brands-svg-icons'

const footer = () => {
    return (
        
        <div className="footer">
<div style={{width:"100%",color:"white"}}><h2>FOLLOW ME :</h2></div>
         <div style={{display:"flex",justifyContent:"center"}}>
<a href="https://github.com/amanchauhan112">
      {/* {{color:"steelblue"}}{{color:"royalblue"}} */}
      <FontAwesomeIcon icon={faLinkedin} style={{color:"red"}}/> </a>
    

      <a href="https://www.linkedin.com/in/aman-chauhan-2b51471b6/"style={{marginLeft:"2%"}}>
      {/* <FontAwesomeIcon icon={faGithub} style={{color:"black"}}/></a> */}
      <FontAwesomeIcon icon={faGithub} style={{color:"red"}}/></a>
   

      <a  href="https://trashsetgo.wordpress.com"style={{marginLeft:"2%"}}>
      {/* <FontAwesomeIcon icon={faWordpress} style={{color:"cornflowerblue"}}/></a> */}
      <FontAwesomeIcon icon={faWordpress} style={{color:"red"}}/></a>
     

      <a  href="https://twitter.com/Amanchauhan2801" style={{marginLeft:"2%"}}>
      {/* <FontAwesomeIcon icon={faTwitter} style={{color:"white"}}/></a> */}
      <FontAwesomeIcon icon={faTwitter} style={{color:"red"}}/></a>
   
     

      <a  href="https://m.facebook.com/aman.chauhan.9809" style={{marginLeft:"2%"}}>
      {/* <FontAwesomeIcon icon={faFacebook} style={{color:"blue"}}/></a> */}
      <FontAwesomeIcon icon={faFacebook} style={{color:"red"}}/></a>
      
      </div>
{/* <div style={{width:"100%",color:"white",display:"flex",justifyContent:"center",marginTop:"15px"}}>
    <h4><a href="../../pages/home">HOME </a>&emsp; |  </h4> 
    <h4>  &emsp;ABOUT &emsp;|</h4>
    <h4>&emsp;EDUCATION&emsp; |</h4>
    <h4>&emsp;SKILLS &emsp;|</h4>
    <h4>&emsp;PROJECTS &emsp;|</h4>
    <h4>&emsp;PROFILE LINKS</h4>
    </div> */}

        </div>

    )
}

export default footer
