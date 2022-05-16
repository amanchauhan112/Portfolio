import { faFacebook, faGithub, faLinkedin, faTwitter, faWordpress } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import "../../assets/css/footer.css";
import "../../assets/css/projects.css";
const Footer2 = () => {
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

            {/* <div className="social-icons">
              <a
                className="social-icon-link linkedin"
                href="https://github.com/amanchauhan112"
                aria-label="Github"
              >
                <i className="fab fa-github" aria-hidden="true"></i>
              </a>
              <a
                className="social-icon-link facebook"
                href="https://www.linkedin.com/in/aman-chauhan-2b51471b6/"
                aria-label="Facebook"
              >
                <i className="fab fa-linkedin" aria-hidden="true"></i>
              </a>
              <a
                className="social-icon-link facebook"
                href="https://m.facebook.com/aman.chauhan.9809"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                className="social-icon-link instagram"
                href="https://trashsetgo.wordpress.com "
                aria-label="Instagram"
              >
                <i className="fab fa-wordpress"></i>
              </a>
              <a
                className="social-icon-link twitter"
                href="https://twitter.com/Amanchauhan2801"
                aria-label="LinkedIn"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </div> */}
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
        <a target={"_blank"} rel="noreferrer" href="https://twitter.com/Amanchauhan2801">
          <FontAwesomeIcon icon={faTwitter} style={{ color: "white" }} />
        </a>
        &emsp;
        <a target={"_blank"} rel="noreferrer" href="https://m.facebook.com/aman.chauhan.9809">
          <FontAwesomeIcon icon={faFacebook} style={{ color: "white" }} />
        </a>
      </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Footer2