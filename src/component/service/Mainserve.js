import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { IoArrowForwardSharp } from "react-icons/io5";
import "../header/header.css";

const Mainserve = () => {
  const [animationComplete, setAnimationComplete] = useState(false);
  const controls = useAnimation();

  const scaleAnimation = {
    scale: 1,
    transition: {
      duration: 1.2, // Adjust the duration of the animation
      ease: [0.25, 0.46, 0.45, 0.94], // Custom cubic bezier easing
    },
  };

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
      scale: 1,
      color: "#ff8c00", // Change to the desired hover color
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 150,
      },
    },
  };
  return (
    <div>
      <motion.div
        className={`header_container ${
          animationComplete ? "animation-complete" : ""
        }`}
        animate={controls}
        initial={{ y: 50, opacity: -1, x: 0 }}
        style={
          {zIndex:1}
        }
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
          >
            <p
              className="header_para"
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              WE WORK CLOSELY WITH OUR CLIENTS TO CREATE OUTSTANDING EXPERIENCES
              FOR THEIR CUSTOMERS
            </p>
            <h3
              className="header_title two"
              data-aos="fade-up-left"
              data-aos-duration="2000"
            >
              service
              <div className="arrow">
                <IoArrowForwardSharp className="arrower" />
              </div>
            </h3>
          </motion.div>
          <div
            className={`header_right ${animationComplete ? "fade-in" : ""}`}
          ></div>
        </div>
      </motion.div>

      <div className="main_card">
        <div
          className="sub_img_card 
        
        "
          data-aos="fade-up"
          data-aos-anchor-placement="center-center "
          data-aos-duration="2000"
        >

<img src="https://www.14islands.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Ff3tpxs09%2Fproduction%2Fe73b68935430755ad6430ac804d7a5bd31143186-1656x1106.jpg%3Frect%3D0%2C1%2C1656%2C1104%26w%3D1656%26h%3D1104%26fit%3Dmax%26auto%3Dformat&w=16&q=75" alt="" />

        </div>
        <div
          className="sub_img_card 
        
        "
          data-aos="fade-up"
          data-aos-anchor-placement="center-center "
          data-aos-duration="2000"
        ></div>
        <div
          className="sub_img_card 
        
        "
          data-aos="fade-up"
          data-aos-anchor-placement="center-center "
          data-aos-duration="2000"
        ></div>
        <div
          className="sub_img_card 
        
        "
          data-aos="fade-up"
          data-aos-anchor-placement="center-center "
          data-aos-duration="2000"
        ></div>
        <div
          className="sub_img_card 
        
        "
          data-aos="fade-up"
          data-aos-anchor-placement="center-center "
          data-aos-duration="2000"
        ></div>
        <div
          className="sub_img_card 
        
        "
          data-aos="fade-up"
          data-aos-anchor-placement="center-center "
          data-aos-duration="2000"
        ></div>
        <div
          className="sub_img_card 
        
        "
          data-aos="fade-up"
          data-aos-anchor-placement="center-center "
          data-aos-duration="2000"
        ></div>
        <div
          className="sub_img_card 
        
        "
          data-aos="fade-up"
          data-aos-anchor-placement="center-center "
          data-aos-duration="2000"
        ></div>
      </div>
    </div>
  );
};

export default Mainserve;
