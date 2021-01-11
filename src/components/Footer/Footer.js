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
    <footer>
      <div></div>

      <div></div>

      <div></div>
    </footer>
  );
};
export default Footer;
