/* eslint-disable jsx-a11y/anchor-is-valid */
import { ContactMail } from "@material-ui/icons";
import React from "react";
import "./Footer.css";
import jquery from "jquery";

const Footer = () => {
  const container = () => {
    document.onclick((event) => {
      event.onclick.document.getElementbyId("#contact-panel");
      if (
        container === event.target && // if the target of the click isn't the container...
        container.has(event.target).length === 0
      ) {
        // ... nor a descendant of the container
        container.removeClass("is-active");
      }
    });
  };

  return (
    <footer class="marketing-site-footer">
      <div class="row medium-unstack">
        <div class="medium-4 columns">
          <h4 class="marketing-site-footer-name">In the kitchen</h4>
          <p>You came to the best place to get Chef'd Up</p>
          <ul class="menu marketing-site-footer-menu-social simple">
            <li>
              <a href="#">
                <i class="fa fa-youtube-square" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="#" class="social-icon-button facebook">
                <i class="fa fa-facebook" aria-hidden="true"></i>
                <span></span>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-twitter-square" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
        <div class="medium-4 columns">
          <h4 class="marketing-site-footer-title">Contact Info</h4>
          <div class="marketing-site-footer-block">
            <i class="fa fa-map-marker" aria-hidden="true"></i>
            <p>
              100 W Rincon
              <br />
              San Francisco, CA 94015
            </p>
          </div>

          <i class="fa fa-phone" aria-hidden="true"></i>
          <p>1 (800) 555-5555</p>

          <div class="marketing-site-footer-block">
            <i class="fa fa-envelope-o" aria-hidden="true"></i>
            <p>pootytank@fakeemail.com</p>
          </div>
        </div>
        <div class="medium-4 columns">
          <h4 class="marketing-site-footer-title">Assosiates</h4>
          <div class="row small-up-3">
            <a href="http://www.womenchefs.org/">
              <img
                id="women-chefs"
                src="https://inthekitchencookingschool.com/wp-content/uploads/wcr.jpg"
                alt="Women Chefs & Restauratuers"
              />
            </a>

            <a href="http://www.iacp.com/">
              <img
                id="assosiation"
                src="https://inthekitchencookingschool.com/wp-content/uploads/iacp.jpg"
                alt="international Assosiation of Culinary Professionals"
              />
            </a>

            <a href="http://www.ldei.org/">
              <img
                id="les-dames"
                src="https://inthekitchencookingschool.com/wp-content/uploads/lesdames.jpg"
                alt="Les Dames d'Escoffier"
              />
            </a>
          </div>
        </div>
      </div>
      <div class="marketing-site-footer-bottom">
        <div class="column">
          <p>&copy; 2020 No rights reserved</p>
        </div>
        <div class="column">
          <ul class="menu marketing-site-footer-bottom-links">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Login</a>
            </li>
            <li>
              <a href="#">Signup</a>
            </li>
            <li>
              <a href="#">Classes</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
