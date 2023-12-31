import React, { useState } from "react";
import "./nav.css";
import { Link } from "react-router-dom";
import DarkModeToggle from "../DarkMode/DarkModeToggle";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const handleClicks = () => {
    // Scroll to the top of the SingleItemDetail component
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleClicksBottom = () => {
    // Scroll to the top of the SingleItemDetail component
    window.scrollTo({ bottom: 0, behavior: "smooth" });
  };
  const [open, isOpen] = useState(false);
  return (
    <div className="nav_container gty">
      <div className="nav_left">
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom "
          data-aos-duration="2000"
        ></div>

        <a className="linka" href="/" onClick={handleClicks}>
          <h2 className="nav_title">10islands</h2>
        </a>
      </div>
      <div className="nav_middle">
        <ul className="nav_ul">
          <li>
            <ScrollLink
              to="work" // Specify the ID of the target element (footer in this case)
              spy={true}
              smooth={true}
              style={{ cursor: "pointer" }}
              offset={-70}
              duration={1500}
            >
              work
            </ScrollLink>
          </li>
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
              gap: "20px",
            }}
          >
            <li className="right_li">
              <ScrollLink
                to="contact" // Specify the ID of the target element (footer in this case)
                spy={true}
                smooth={true}
                style={{ cursor: "pointer" }}
                offset={-70}
                duration={1500}
              >
                contact
              </ScrollLink>
            </li>
            <li className="right_li">
              <DarkModeToggle />
            </li>
          </div>

          {/* <h2 style={{zIndex:1}} onClick={() => isOpen(!open)}>gg</h2> */}
        </ul>

        <ul className="ela">
          <li className="right_l" onClick={() => isOpen(!open)}>
            Menu
          </li>
          <li className="right_l">
            <DarkModeToggle />
          </li>
        </ul>
      </div>

      <div
        className="mobile_ul_section"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom "
        data-aos-duration="2000"
        style={{ right: open ? "0px" : "-50000vw" }}
      >
        <ul className="mobile_ul">
          <div className="mobala">
            <li
              className="mobile_li"
              onClick={() => handleClicks && isOpen(!open)}
            >
              <Link className="linka" to="/culture">
                work
              </Link>
            </li>
            <li
              className="mobile_li"
              onClick={() => handleClicks && isOpen(!open)}
            >
              <Link className="linka" to="/">
                service
              </Link>
            </li>
            <li
              className="mobile_li"
              onClick={() => handleClicks && isOpen(!open)}
            >
              <Link className="linka" to="/culture">
                culture
              </Link>
            </li>
            <li
              className="mobile_li"
              onClick={() => handleClicksBottom && isOpen(!open)}
            >
              contact
            </li>
          </div>

          <div className="susa">
            <h6
              style={{
                fontSize: "11px",
                fontSmooth: "small",

                fontWeight: "500",
                lineHeight: "1.6",
              }}
            >
              © 2023
              <del style={{ margin: "0px 5px" }}>10ISLANDS © 2023.</del>
              <br /> Made with passion by DILLEESHA
            </h6>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
