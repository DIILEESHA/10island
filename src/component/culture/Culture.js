import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useDrag } from "react-use-gesture";
import vide from "../video/vide.mp4";
import ParticleComponent from "../particle/ParticleComponent";
import "./culture.css";

import "../header/header.css";
import culture from "./culture.json";
import { Parallax } from "react-parallax";

const Culture = () => {
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
    }, 1600);

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
      <div>
        <ParticleComponent />
      </div>
      <div className="header_sub  duke">
        <div
          className={`header_left ${animationComplete ? "fade-in" : ""}`}
        ></div>
        <motion.div
          className={`header_middle  ${animationComplete ? "fade-in" : ""}`}
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
            MEET THE ISLANDERS
          </h3>
          <p
            className="header_para"
            data-aos="fade-up-left"
            data-aos-duration="2000"
          >
            EVERY AWESOME THING YOU SEE EXISTS BECAUSE SOMEONE LIKE YOU DECIDED
            TO MAKE IT.
          </p>
        </motion.div>
        <div
          className={`header_right ${animationComplete ? "fade-in" : ""}`}
        ></div>
      </div>

      <div className={`header_grid no ${animationComplete ? "fade-in" : ""}`}>
        <div
          className="header_sub_grid "
          data-aos="fade-up-right"
          data-aos-duration="2000"
        >
          <h2 className="grid_text ">team</h2>
        </div>
        <div className="header_sub_grid buha">
          <h2 className="grid_text"></h2>
        </div>
        <div className="header_sub_grid">
          <h2 className="grid_text sm  sm2">&</h2>
        </div>

        <div
          className="header_sub_grid"
          data-aos="fade-up-left"
          data-aos-duration="2000"
        >
          <h2 className="grid_text  lk sm2">culture.</h2>
        </div>

        <div className="header_sub_grider">
          <div className="header_sub_grid lgr">
            <h2 className="grid_text sm  lg">
              & <span>culture</span>
            </h2>
          </div>
        </div>
      </div>
      <div className="cultural">
        {culture.slice(0, 6).map((serves) => (
          <div
            className="sub_cultural "
            data-aos="fade-up-left"
            data-aos-duration="2000"
          >
            <img className="parallax-img" src={serves.img} alt="" />
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Culture;
