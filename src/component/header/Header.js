import React from "react";
import "./header.css";
import SentenceAnimation from "./sentences";

const Header = () => {
  return (
    <div className="header_container">
      <div className="header_sub">
        <div className="header_left"></div>
        <div className="header_middle">
          <h3 className="header_title">creative studio</h3>
          <p className="header_para">
            WE DESIGN AND BUILD LOVABLE DIGITAL PRODUCTS, BRANDS, AND
            EXPERIENCES.
          </p>
        </div>
        <div className="header_right"></div>
      </div>

      <div className="header_grid">
        <div className="header_sub_grid">
          <h2 className="grid_text">design</h2>
        </div>
        <div className="header_sub_grid">
          <h2 className="grid_text"></h2>
        </div>
        <div className="header_sub_grid">
          <h2 className="grid_text sm">&</h2>
        </div>
        <div className="header_sub_grid">
          <h2 className="grid_text">Technology.</h2>
        </div>
      </div>

      <div className="video">
        <video autoPlay playsInline muted loop crossOrigin="anonymous">
          <source
            src="https://cdn.sanity.io/files/f3tpxs09/production/f7c533514e697633ae912646f5b296ee600340a9.mp4"
            type="video/mp4"
          />
        </video>
      </div>

    </div>
  );
};

export default Header;
