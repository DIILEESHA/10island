// SingleComponent.js

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import "./single.css";
import { Parallax } from "react-parallax";
import { useDrag } from "react-use-gesture";
import { useParams } from "react-router-dom";
import Serve from "../service/serve.json"; // Import your data source
import ParticleComponent from "../particle/ParticleComponent";

const SingleComponent = () => {
  const [animationComplete, setAnimationComplete] = useState(false);
  const controls = useAnimation();
  const { id } = useParams();

  const [showImages, setShowImages] = useState(false);

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

  const post = Serve[id];

  if (!post) {
    return <p>Post not found</p>;
  }

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

      <div className="header_sub me">
        <motion.div
          className={`header_left ${animationComplete ? "fade-in" : ""}`}
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
            industry
          </h3>
          <p
            style={{ textTransform: "uppercase" }}
            className="header_para"
            data-aos="fade-up-left"
            data-aos-duration="2000"
          >
            {post.category}
          </p>
        </motion.div>
        <motion.div
          className={`header_middle ${animationComplete ? "" : ""}`}
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
            awards
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

      <div className={`header_grider  ${animationComplete ? "fade-in" : ""}`}>
        <div data-aos="fade-up-right" data-aos-duration="2000">
          <h2 className="grid_text texter ">{post.name}</h2>
        </div>
      </div>

      <div>
        <Parallax
          className="single_img"
          style={{}}
          strength={150}
          bgImage={post.img}
        />
      </div>

      <div
        className="bottom_para_sectio"
        data-aos="fade-up-right"
        data-aos-duration="2000"
      >
        <p className="bottom_para rr">
          <span className="cooler">Quantum Wallet</span>
          is a revolutionary hardware wallet for your digital assets — most
          secure by a quantum leap.
        </p>
      </div>

      <div
        className="single_divide"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="2000"
      >
        <div className="singleone"></div>
        <div className="singleone">
          <p className="singleone_p">{post?.para}</p>
        </div>
      </div>

      <div className="videos">
        <video autoPlay playsInline muted loop crossOrigin="anonymous">
          <source src={post.video} type="video/mp4" />
        </video>
      </div>

      <div>1</div>
    </motion.div>
  );
};

export default SingleComponent;
