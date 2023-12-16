import React from "react";
import "./nav.css";

const Navbar = () => {
  return (
    <div
      className="nav_container gty"
    
    >
      <div className="nav_left">
        <div data-aos="fade-up" data-aos-anchor-placement="center-bottom"></div>

        <a className="linka" href="/">

        <h2 className="nav_title">14islands</h2>
        </a>
      </div>
      <div className="nav_middle">
        <ul className="nav_ul">
          <li>work</li>
          <li>services</li>
          <li>culture</li>
        </ul>
      </div>
      <div className="nav_right">
        <ul className="right_ul">
          <li className="right_li">contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
