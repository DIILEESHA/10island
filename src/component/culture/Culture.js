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
    <div className="header_container">
      <motion.div
        data-header-container={animationComplete ? "animation-complete" : ""}
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
              EVERY AWESOME THING YOU SEE EXISTS BECAUSE SOMEONE LIKE YOU
              DECIDED TO MAKE IT.
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

        <div className="culture_values">
          <div className="cultrue_sub_values">
            <h2
              className="values_title"
              data-aos="fade-up-left"
              data-aos-duration="2000"
            >
              OUR VALUES
            </h2>
          </div>
          <div className="cultrue_sub_values">
            <div className="demo" data-aos="fade-up" data-aos-duration="2000">
              <h2 className="sub_culture_topic">Be inclusive</h2>
              <p className="sub_culture_para">
                Foster an open environment built on trust, where everyone feels
                empowered to be themselves and make contributions.
              </p>
            </div>
            <div
              className="demo"
              data-aos="fade-up-left"
              data-aos-duration="3000"
            >
              <h2 className="sub_culture_topic">Make waves</h2>
              <p className="sub_culture_para">
                Take pride in your craft. Nurture, stimulate and hone it. People
                always recognize when something is made with passion.
              </p>
            </div>
            <div
              className="demo"
              data-aos="fade-up-left"
              data-aos-duration="3000"
            >
              <h2 className="sub_culture_topic">Care to share</h2>
              <p className="sub_culture_para">
                Communication is the key to successful collaboration. Keep
                people informed, and share your feedback, learnings and wins.
              </p>
            </div>
            <div
              className="demo"
              data-aos="fade-up-left"
              data-aos-duration="3000"
            >
              <h2 className="sub_culture_topic">Enjoy the ride</h2>
              <p className="sub_culture_para">
                Embrace every challenge as a creative opportunity. Be brave,
                take risks and explore ideas. But most of all, have fun!
              </p>
            </div>
          </div>
        </div>
        <div
          className="bottom_culture_section"
          data-aos="fade-up-right"
          data-aos-duration="2000"
        >
          <p className="bottom_culture">
            <span className="cooler">Out of the box —</span>
            Our international team represents a mix of experiences, talents, and
            skills that enrich our collective creativity.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Culture;
