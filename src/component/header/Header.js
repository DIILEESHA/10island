// Header.jsx

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import "./header.css";
import vide from '../video/vide.mp4';

const Header = () => {
  const [animationComplete, setAnimationComplete] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setAnimationComplete(true);
      controls.start({ opacity: 1, y: 0, transition: { duration: 1 } });
    }, 1500); // Set the duration of the animation (3 seconds in this case)

    return () => clearTimeout(timeoutId);
  }, [controls]);

  return (
    <motion.div
      className={`header_container ${animationComplete ? "animation-complete" : ""}`}
      animate={controls}
      initial={{ y: 50, opacity: 0 }}
    >
      <div className="header_sub">
        <div className={`header_left ${animationComplete ? "fade-in" : ""}`}></div>
        <div className={`header_middle ${animationComplete ? "fade-in" : ""}`}>
          <h3 className="header_title">creative studio</h3>
          <p className="header_para">
            WE DESIGN AND BUILD LOVABLE DIGITAL PRODUCTS, BRANDS, AND EXPERIENCES.
          </p>
        </div>
        <div className={`header_right ${animationComplete ? "fade-in" : ""}`}></div>
      </div>

      <div className={`header_grid ${animationComplete ? "fade-in" : ""}`}>
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

      <div className={`video-container ${animationComplete ? "fade-in" : ""}`}>
        <video
          autoPlay
          playsInline
          muted
          loop
          crossOrigin="anonymous"
          style={{ width: "100%", height: "auto" }}
        >
          <source src={vide} type="video/mp4" />
        </video>
      </div>
    </motion.div>
  );
};

export default Header;
