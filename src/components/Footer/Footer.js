import React from "react";
import './Footer.css'

const Footer = () => (
  //   <footer>
  // <div id="footer">
  //   <a href="http://www.womenchefs.org/">
  //     <img
  //     id="women-chefs"
  //       src="https://inthekitchencookingschool.com/wp-content/uploads/wcr.jpg"
  //       alt="Women Chefs & Restauratuers"
  //     />
  //   </a>
  //   <a href="http://www.iacp.com/">
  //     <img
  //     id="assosiation"
  //       src="https://inthekitchencookingschool.com/wp-content/uploads/iacp.jpg"
  //       alt="international Assosiation of Culinary Professionals"
  //     />
  //   </a>
  //   <a href="http://www.ldei.org/">
  //     <img
  //     id="les-dames"
  //       src="https://inthekitchencookingschool.com/wp-content/uploads/lesdames.jpg"
  //       alt="Les Dames d'Escoffier"
  //     />
  //   </a>
  // </div>
  // </footer>
  <footer class="marketing-site-footer">
  <div class="row medium-unstack">
    <div class="medium-4 columns">
      <h4 class="marketing-site-footer-name">In the kitchen</h4>
      <p>The only place to learn how to efficiently pleasure those taste buds</p>
      <ul class="menu marketing-site-footer-menu-social simple">
        <li><a href="#"><i class="fa fa-youtube-square" aria-hidden="true"></i></a></li>
         <li><a href="#"><i class="fa fa-facebook-square" aria-hidden="true"></i></a></li>
         <li><a href="#"><i class="fa fa-twitter-square" aria-hidden="true"></i></a></li>
      </ul>
    </div>
    <div class="medium-4 columns">
       <h4 class="marketing-site-footer-title">Contact Info</h4>
      <div class="marketing-site-footer-block">
        <i class="fa fa-map-marker" aria-hidden="true"></i>
        <p>100 W Rincon<br/>San Francisco, CA 94015</p>
      </div>
      <div class="marketing-site-footer-block">
        <i class="fa fa-phone" aria-hidden="true"></i>
        <p>1 (800) 555-5555</p>
      </div>
      <div class="marketing-site-footer-block">
        <i class="fa fa-envelope-o" aria-hidden="true"></i>
        <p>yetirules@fakeemail.com</p>
      </div>
    </div>
    <div class="medium-4 columns">
      <h4 class="marketing-site-footer-title">Instagram</h4>
      <div class="row small-up-3">
        <div class="column column-block">
          <img src="https://placehold.it/75" alt="" />
        </div>
        <div class="column column-block">
          <img src="https://placehold.it/75" alt="" />
        </div>
        <div class="column column-block">
          <img src="https://placehold.it/75" alt="" />
        </div>
        <div class="column column-block">
          <img src="https://placehold.it/75" alt="" />
        </div>
        <div class="column column-block">
          <img src="https://placehold.it/75" alt="" />
        </div>
        <div class="column column-block">
          <img src="https://placehold.it/75" alt="" />
        </div>
      </div>
    </div>
  </div>
  <div class="marketing-site-footer-bottom">
    <div class="row large-unstack align-middle">
      <div class="column">
        <p>&copy; 2017 No rights reserved</p>
      </div>
      <div class="column">
        <ul class="menu marketing-site-footer-bottom-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Works</a></li>
          <li><a href="#">News</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </div>
  </div>
</footer>
);
export default Footer;
