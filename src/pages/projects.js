import React from 'react';
import '../css/heading.css';
import './projects.css';
import './footer.css';

const Projects = () => {
  return (
    
    <div className="div" >
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.13.1/css/all.css" integrity="sha384-xxzQGERXS00kBmZW/6qxqJPyxW3UR0BPsL4c8ILaIWXva5kFi7TxkIIaMiKtqV1Q" crossorigin="anonymous"></link>
      <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@700&amp;display=swap" rel="stylesheet"></link>

{/* 

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
</p> */}

<div class="cards">
  {/* <h1>Check out My Work.</h1> */}
  <div class="cards__container">
    <div class="cards__wrapper">
      <ul class="cards__items">
        <li class="cards__item">
          <a class="cards__item__link" href="https://luff-chat.web.app/">
            <figure class="cards__item__pic-wrap" data-category="MERN App">
            <img class="cards__item__img" alt="Travel" src="https://cdn.discordapp.com/attachments/725022555273953282/844964395402395648/unknown.png"/>
            </figure>
            <div class="cards__item__info">
              <h5 class="cards__item__text">Let's-Chat: Global Chat app .Hop in with random people Around the world, chat with them make new friends and have fun.</h5>
            </div>
            </a>
            </li>
            
             <li class="cards__item"><a class="cards__item__link" href="https://luff-shortclips.web.app/">
               <figure class="cards__item__pic-wrap" data-category="MERN App"><img class="cards__item__img" alt="Travel" src="https://cdn.discordapp.com/attachments/725022555273953282/844965664213303296/unknown.png"/>

               </figure>
             <div class="cards__item__info"><h5 class="cards__item__text">Annadata: This is a app where you can send food to a needy person.This website aims at helping those who needs food.We can collect food
from places that has excess of food and can supply it to the needy.</h5>
             </div>
             </a>
             </li>
             {/* <li class="cards__item"><a class="cards__item__link" href="https://luff-dating-21bf1.web.app/"><figure class="cards__item__pic-wrap" data-category="MERN App"><img class="cards__item__img" alt="Travel" src="https://cdn.discordapp.com/attachments/725022555273953282/844965264511860776/unknown.png"></figure><div class="cards__item__info"><h5 class="cards__item__text">Luff-Dating: This is a dating platform where people can meet and if they like each other, those two individuals may become lovers one day.</h5></div></a></li> */}
            </ul>

            {/* <ul class="cards__items">
            <li class="cards__item"><a class="cards__item__link" href="https://github.com/Luffyguy/Luff-Notes"><figure class="cards__item__pic-wrap" data-category="MERN App"><img class="cards__item__img" alt="Travel" src="https://i.imgur.com/nEH25nJ.png"></figure><div class="cards__item__info"><h5 class="cards__item__text">Luff-Notes: online Notes maker, lets you create, edit and delete Notes</h5></div></a></li>
            <li class="cards__item"><a class="cards__item__link" href="https://github.com/Luffyguy/Luff-Docs"><figure class="cards__item__pic-wrap" data-category="MERN App"><img class="cards__item__img" alt="Travel" src="https://i.imgur.com/FL7O1Cr.png"></figure><div class="cards__item__info"><h5 class="cards__item__text">Luff-Docs: online Ducument Editor, lets you Downoad and Print pages </h5></div></a></li>
            </ul> */}
    
            {/* <ul class="cards__items">
            <li class="cards__item"><a class="cards__item__link" href="https://github.com/Luffyguy/Covid-Tracker"><figure class="cards__item__pic-wrap" data-category="Reactjs App"><img class="cards__item__img" alt="Travel" src="https://i.imgur.com/UezoUu3.png"></figure><div class="cards__item__info"><h5 class="cards__item__text">Covid Tracker: Stay updated about the Covid cases in India</h5></div></a></li>
            <li class="cards__item"><a class="cards__item__link" href="https://github.com/Luffyguy/Luffy-Desktop-Assistant"><figure class="cards__item__pic-wrap" data-category="Adventure"><img class="cards__item__img" alt="Travel" src="https://i.imgur.com/xMq9pVR.png"></figure><div class="cards__item__info"><h5 class="cards__item__text">Luffy-Bot: your personal Desktop Assistant, It interacts with use, plays songs and has many games included.</h5></div><a></li>
            </ul> */}

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
                        <a class="social-logo" href="/">Aman Chauhan</a>
                      </div>

                          <small class="website-rights">Aman-Portfolio © 2021</small>
                         
                          <div class="social-icons">
                            <a class="social-icon-link linkedin" href="https://github.com/amanchauhan112" aria-label="Github"><i class="fab fa-github" aria-hidden="true"></i></a>
                            <a class="social-icon-link facebook" href="https://www.linkedin.com/in/aman-chauhan-2b51471b6/" aria-label="Facebook"><i class="fab fa-linkedin" aria-hidden="true"></i></a>
                            <a class="social-icon-link facebook" href="https://m.facebook.com/aman.chauhan.9809" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                            <a class="social-icon-link instagram" href="https://trashsetgo.wordpress.com " aria-label="Instagram"><i class="fab fa-wordpress"></i></a>
                            <a class="social-icon-link twitter" href="https://twitter.com/Amanchauhan2801" aria-label="LinkedIn"><i class="fab fa-twitter"></i></a>
                          </div>


            </div>
            </section>
            </div>
 </div>
  );
};

export default Projects;