import myimg from '../images/my.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin ,faGithub,faWordpress,faTwitter,faFacebook} from '@fortawesome/free-brands-svg-icons'
import '../css/style.css';
import '../css/projects.css';

const About = () => {
  return (
    <div className="about_main_div"  >  

    <div><h1 className="subheading">Who Am I?</h1></div>

    <div>
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
    </div>
    <div  className="about_text_div">
    
    <div className="img_text">
       <div className="myimg_div">
          <img  src={myimg} className="myimg" alt="myPic"/> 
      </div>

           <p className="font text" >I currently am a student of GTBIT.I started my web dev journey in my 2nd semester      
          , that time I only knew HTML & css .I created websites using that and also I learnt Bootstrap.
          Today I use ReactJS to devlop Websites.
          I specialise in creating beautiful websites using best practice accesibility and latest web standards.
          All my sites are loving and hand coded.
          </p>
       </div>
    </div>

  </div>

);
};

export default About;