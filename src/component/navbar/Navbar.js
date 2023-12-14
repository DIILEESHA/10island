import React from "react";
import "./nav.css";
import ParticleComponent from "../particle/ParticleComponent";

const Navbar = () => {
  return (
    <div
      className="nav_container "
      data-aos="fade-down"
      data-aos-duration="2000"
    >
      <div className="nav_left">
        <div data-aos="fade-up" data-aos-anchor-placement="center-bottom"></div>
        <h2 className="nav_title">14islands</h2>
      </div>
      <div className="nav_middle">
        <ul className="nav_ul">
          <li>work</li>
          <li>services</li>
          <li>culture</li>
          <li>journal</li>
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
