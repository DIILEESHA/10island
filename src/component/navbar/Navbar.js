import React, { useState } from "react";
import "./nav.css";
import { Link } from "react-router-dom";
import DarkModeToggle from "../DarkMode/DarkModeToggle";

const Navbar = () => {
  const [open, isOpen] = useState(false);
  return (
    <div className="nav_container gty">
      <div className="nav_left">
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom "
          data-aos-duration="2000"
        ></div>

        <a className="linka" href="/">
          <h2 className="nav_title">10islands</h2>
        </a>
      </div>
      <div className="nav_middle">
        <ul className="nav_ul">
          <li>work</li>
          <li>services</li>

          <li>
            <Link className="linka" to="/culture">
              culture
            </Link>
          </li>
        </ul>
      </div>
      <div className="nav_right">
        <ul className="right_ul">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              gap: "30px",
            }}
          >
            <li className="right_li">contact</li>
            <li className="right_li">
              <DarkModeToggle />
            </li>
          </div>
          <li className="right_l">
            <DarkModeToggle />
          </li>
          <li className="right_l" onClick={() => isOpen(!open)}>
            Menu
          </li>

          {/* <h2 style={{zIndex:1}} onClick={() => isOpen(!open)}>gg</h2> */}
        </ul>
      </div>

      <div
        className="mobile_ul_section"
        style={{ right: open ? "0px" : "-50000vw" }}
      >
        <ul className="mobile_ul">
          <li className="mobile_li">t</li>
          <li className="mobile_li">t</li>
          <li className="mobile_li">t</li>
          <li className="mobile_li">t</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
