import { faGithub, faLinkedin, faWordpress } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import "../../assets/css/footer.css";
import "../../assets/css/projects.css";
const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <section className="social-media">
          <div className="social-media-wrap">
            <div className="footer-logo">
              <a className="social-logo" href="/">
                Aman Chauhan
              </a>
            </div>

            <small className="website-rights">Aman-Portfolio © 2021</small>

            <div className='mb-4'>
              <a target={"_blank"} rel="noreferrer" href="https://www.linkedin.com/in/aman-chauhan-2b51471b6/">
                <FontAwesomeIcon icon={faLinkedin} style={{ color: "white" }} />
              </a>
              &emsp;
              <a target={"_blank"} rel="noreferrer" href="https://github.com/amanchauhan112">
                <FontAwesomeIcon icon={faGithub} style={{ color: "white" }} />
              </a>
              &emsp;
              <a target={"_blank"} rel="noreferrer" href="https://trashsetgo.wordpress.com">
                <FontAwesomeIcon icon={faWordpress} style={{ color: "white" }} />
              </a>
              &emsp;
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Footer