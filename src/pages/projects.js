import React from "react";
import "../css/projects.css";
import "../css/footer.css";
import useMedia  from "../css/useMedia";
const Projects = () => {
const matches=useMedia("(max-width:600px)")
  return (
    <div className="project_main_div" style={{ width: `100%` }}>
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.13.1/css/all.css"
        integrity="sha384-xxzQGERXS00kBmZW/6qxqJPyxW3UR0BPsL4c8ILaIWXva5kFi7TxkIIaMiKtqV1Q"
        crossorigin="anonymous"
      ></link>
      <link
        href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@700&amp;display=swap"
        rel="stylesheet"
      ></link>

      <h2
        style={{ color: "white", fontFamily: "serif", fontSize: "40px" }}
        className="pt-5"
      >
        My Projects
      </h2>
      <div class="cards">
        <div class="cards__container">
          <div class="cards__wrapper">
            <ul class="cards__items" style={{marginRight:matches?"30px":""}}>
              <div class="cards__div">
                <li class="cards__item">
                  <a
                    class="cards__item__link"
                    href="https://letus-chat.herokuapp.com/login"
                  >
                    <figure
                      class="cards__item__pic-wrap"
                      data-category="MERN App"
                    >
                      <img
                        class="cards__item__img"
                        alt="Travel"
                        src="https://media.discordapp.net/attachments/827789384031273021/849649393384554506/unknown.png"
                      />
                    </figure>
                    <div class="cards__item__info">
                      <h5 class="cards__item__text">
                        Let's-Chat: Global Chat app .Hop in with random people
                        Around the world, chat with them make new friends and
                        have fun.
                      </h5>
                    </div>
                  </a>
                </li>
              </div>

              <div>
                <li class="cards__item">
                  <a
                    class="cards__item__link"
                    href="https://topshop-b8262.web.app/"
                  >
                    <figure
                      class="cards__item__pic-wrap"
                      data-category="MERN App"
                    >
                      <img
                        class="cards__item__img"
                        alt="Travel"
                        src="https://media.discordapp.net/attachments/827789384031273021/889205115700002887/unknown.png?width=739&height=670"
                      />
                    </figure>
                    <div class="cards__item__info">
                      <h5 class="cards__item__text">
                        TopShop : This is a{" "}
                        <strong style={{ fontWeight: "800" }}>
                          shopping site
                        </strong>{" "}
                        , where users can go and buy items, also, they can add
                        their own items as well. It includes{" "}
                        <strong style={{ fontWeight: "800" }}>
                          Razorpay Payment Gateway
                        </strong>{" "}
                        to pay for the required item.
                      </h5>
                    </div>
                  </a>
                </li>
              </div>

              <li class="cards__item">
                <a
                  class="cards__item__link"
                  href="https://understanding450.web.app/"
                >
                  <figure
                    class="cards__item__pic-wrap"
                    data-category="React App"
                  >
                    <img
                      class="cards__item__img"
                      alt="Travel"
                      src="https://media.discordapp.net/attachments/827789384031273021/849654133204189234/unknown.png?width=468&height=406"
                    />
                  </figure>
                  <div class="cards__item__info">
                    <h5 class="cards__item__text">
                      Understanding 450: This is a platform where students can
                      take help for DSA Sheet i.e. Final 450 Sheet made by Love
                      Babbar to practice DSA.
                    </h5>
                  </div>
                </a>
              </li>

              <li class="cards__item">
                <a
                  class="cards__item__link"
                  href="https://festivalsind.web.app/"
                >
                  <figure
                    class="cards__item__pic-wrap"
                    data-category="React App"
                  >
                    <img
                      class="cards__item__img"
                      alt="Travel"
                      src="https://media.discordapp.net/attachments/827789384031273021/865184927929597982/unknown.png?width=1440&height=655"
                    />
                  </figure>
                  <div class="cards__item__info">
                    <h5 class="cards__item__text">
                      Festivals:This site will help you to know about Indian
                      festivals.
                    </h5>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-container">
        {/* <section class="footer-subscription">
                
             <p class="footer-subscription-heading">ASK ME ANYTHING HERE</p>
                <p class="footer-subscription-text">Send me an Email</p><div class="input-areas">
                  
                  <form><input class="footer-input" name="email" type="email" placeholder="Your Email"><input class="footer-input" name="Content" type="Write your message" placeholder="Write your message"><button class="btn btn--outline btn--medium">Submit</button></form>
                  </div>
                  </section> */}
        <section class="social-media">
          <div class="social-media-wrap">
            <div class="footer-logo">
              <a class="social-logo" href="/">
                Aman Chauhan
              </a>
            </div>

            <small class="website-rights">Aman-Portfolio © 2021</small>

            <div class="social-icons">
              <a
                class="social-icon-link linkedin"
                href="https://github.com/amanchauhan112"
                aria-label="Github"
              >
                <i class="fab fa-github" aria-hidden="true"></i>
              </a>
              <a
                class="social-icon-link facebook"
                href="https://www.linkedin.com/in/aman-chauhan-2b51471b6/"
                aria-label="Facebook"
              >
                <i class="fab fa-linkedin" aria-hidden="true"></i>
              </a>
              <a
                class="social-icon-link facebook"
                href="https://m.facebook.com/aman.chauhan.9809"
                aria-label="Facebook"
              >
                <i class="fab fa-facebook-f"></i>
              </a>
              <a
                class="social-icon-link instagram"
                href="https://trashsetgo.wordpress.com "
                aria-label="Instagram"
              >
                <i class="fab fa-wordpress"></i>
              </a>
              <a
                class="social-icon-link twitter"
                href="https://twitter.com/Amanchauhan2801"
                aria-label="LinkedIn"
              >
                <i class="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;
