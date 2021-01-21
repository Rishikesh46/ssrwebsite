import React from "react";
import footerStyles from "../styles/surffooter.module.css";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

function SurfFooter({ styles, sociallinks }) {
  return (
    <div id={footerStyles.details}>
      <div className={footerStyles.footerdetails}>
        <div>
          <ul>
            <li>Portfolio</li>
            <li>Academy</li>
            <li>Events</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Gallery</li>
            <li>e-certificates</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className={footerStyles.email}>
          <p>
            <a href="#">info@surfboardventures.com</a>
          </p>
        </div>
        <div>
          <ul className={footerStyles.icons}>
            <li>
              <a href="https://twitter.com/surfboardvc">
                <FaTwitter size="2em" />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/Surfboard-Ventures-100337055057153/?modal=admin_todo_tour">
                <FaFacebook size="2em" />
              </a>
            </li>
            <li>
              <a href="/https://www.instagram.com/surfboardventures/">
                <FaInstagram size="2em" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default SurfFooter;
