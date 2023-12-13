import React, { useEffect, useState } from "react";
import { motion, useAnimation, useCycle } from "framer-motion";
import { useDrag } from "react-use-gesture";
import "./header.css";
import vide from "../video/vide.mp4";

const Header = () => {
  const [animationComplete, setAnimationComplete] = useState(false);
  const [showImages, setShowImages] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setAnimationComplete(true);
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 3 },
      });
    }, 1100);

    return () => clearTimeout(timeoutId);
  }, [controls]);

  const textVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    hover: {
      scale: 1.1,
      color: "#ff8c00",
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 150,
      },
    },
  };

  const bind = useDrag(
    ({ movement: [mx] }) => {
      if (mx < -50) {
        setShowImages(true);
      }
    },
    {
      filterTaps: true,
      rubberband: true,
    }
  );

  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 100) {
      // Adjust the scroll threshold based on your layout
      setShowImages(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      className={`header_container ${
        animationComplete ? "animation-complete" : ""
      }`}
      animate={controls}
      initial={{ y: 50, opacity: -1, x: 0 }}
      {...bind()}
      style={{ zIndex: 1 }}
    >
      <div className="header_sub">
        <div
          className={`header_left ${animationComplete ? "fade-in" : ""}`}
        ></div>
        <motion.div
          className={`header_middle ${animationComplete ? "fade-in" : ""}`}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          variants={textVariants}
          onClick={() => setShowImages(true)}
        >
          <h3
            className="header_title"
            data-aos="fade-up-left"
            data-aos-duration="2000"
          >
            creative studio
          </h3>
          <p
            className="header_para"
            data-aos="fade-up-left"
            data-aos-duration="2000"
          >
            WE DESIGN AND BUILD LOVABLE DIGITAL PRODUCTS, BRANDS, AND
            EXPERIENCES.
          </p>
        </motion.div>
        <div
          className={`header_right ${animationComplete ? "fade-in" : ""}`}
        ></div>
      </div>

      {showImages && (
        <div className="image-container">
          {/* Add your images here */}
          <img src="image1.jpg" alt="Image 1" />
          <img src="image2.jpg" alt="Image 2" />
          {/* ... add more images as needed ... */}
        </div>
      )}

      <div className={`header_grid  ${animationComplete ? "fade-in" : ""}`}>
        <div
          className="header_sub_grid "
          data-aos="fade-up-right"
          data-aos-duration="2000"
        >
          <h2 className="grid_text ">
            design
          </h2>
        </div>
        <div className="header_sub_grid">
          <h2 className="grid_text"></h2>
        </div>
        <div className="header_sub_grid">
          <h2 className="grid_text sm ">
            &
            {/* &<div className="tube"></div> */}
          </h2>
        </div>
        <div
          className="header_sub_grid"
          data-aos="fade-up-left"

          data-aos-duration="2000"
        >
          <h2 className="grid_text  lk">
            Technology.
            <div className="tube"></div>
          </h2>
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
