import React from "react";
import footerStyles from "../styles/footer.module.css";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div id={footerStyles.details}>
      <p>&nbsp;&nbsp; &copy; Follow us on </p>
      <ul className={footerStyles.icons}>
        <li>
          <a href="https://twitter.com/contentstack">
            <FaTwitter size="2em" />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/contentstack">
            <FaFacebook size="2em" />
          </a>
        </li>
        <li>
          <a href="/#">
            <FaInstagram size="2em" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
