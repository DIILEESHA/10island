// Footer.js

import React, { useEffect } from "react";
import "./footer.css";
import { FaRegHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer_main">
      <div className="footer_container">
        <div
          className="bottom_para_section_footer"
          data-aos="fade-up-right"
          data-aos-duration="2000"
        >
          <p className="footer_para ">Let’s make something great together</p>
        </div>

        <div className="alo" data-aos="fade-up-left" data-aos-duration="2000">
          <div className="bottom_para_section_footer2">
            <p className="footer_para2">
              <a
                className="linka jkl footer_para2"
                href="mailto:hello@10islands.com"
              >
                hello@10islands.com
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="bottom_footer">
        <h2 className="copyright">© 2023 14ISLANDS</h2>

        <ul className="footer_ul">
          <li className="footer_li">INSTAGRAM</li>
          <li className="footer_li">X / TWITTER</li>
          <li className="footer_li">LINKEDIN</li>
          <li className="footer_li">DRIBBBLE</li>
          <li className="footer_li">PRIVACY</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
