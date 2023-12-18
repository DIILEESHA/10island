// SingleComponent.js

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import "./single.css";
import { Parallax } from "react-parallax";
import { useDrag } from "react-use-gesture";
import { Link, useParams } from "react-router-dom";
import Serve from "../service/serve.json"; // Import your data source
import ParticleComponent from "../particle/ParticleComponent";

import '../service/service.css'

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

  const handleClicks = () => {
    // Scroll to the top of the SingleItemDetail component
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const parallaxStrength = window.innerHeight / 2;

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

      <div className="single_img">
        <Parallax
          className="single_imger"
          style={{}}
          strength={parallaxStrength}
          bgImage={post.img}
        />
      </div>

      <div
        className="bottom_para_sectio"
        data-aos="fade-up-right"
        data-aos-duration="2000"
      >
        <p className="bottom_para rd">
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

      <div className="single_stack">
        <div className="single_stack_left">
          <h2
            className="values_title"
            data-aos="fade-up-left"
            data-aos-duration="2000"
          >
            TECHNOLOGIES
          </h2>
        </div>
        <div className="hi">
        <div className="single_stack_right">
          <div className="single_sub_stack_right">
            <div className="demo" data-aos="fade-up" data-aos-duration="2000">
              <h2 className="sub_culture_topic fdc">Javascript framework</h2>
              <p className="sub_culture_para">React</p>
            </div>{" "}
            <div className="demo" data-aos="fade-up" data-aos-duration="2000">
              <h2 className="sub_culture_topic">Web framework</h2>
              <p className="sub_culture_para">Gatsby</p>
            </div>
            <div className="demo" data-aos="fade-up" data-aos-duration="2000">
              <h2 className="sub_culture_topic">Animation library</h2>
              <p className="sub_culture_para">Framer Motion</p>
            </div>
            <div className="demo" data-aos="fade-up" data-aos-duration="2000">
              <h2 className="sub_culture_topic">Graphics library</h2>
              <p className="sub_culture_para">ThreeJS</p>
            </div>
          </div>
        </div>
        <div className="single_stack_right">
          <div className="single_sub_stack_right">
            <div className="demo" data-aos="fade-up" data-aos-duration="2000">
              <h2 className="sub_culture_topic">Database services</h2>
              <p className="sub_culture_para">Firebase</p>
            </div>{" "}
            <div className="demo" data-aos="fade-up" data-aos-duration="2000">
              <h2 className="sub_culture_topic">User analytics</h2>
              <p className="sub_culture_para">Google Tag Manager</p>
            </div>
            <div className="demo" data-aos="fade-up" data-aos-duration="2000">
              <h2 className="sub_culture_topic">CMS</h2>
              <p className="sub_culture_para">Prismic</p>
            </div>
            <div className="demo" data-aos="fade-up" data-aos-duration="2000">
              <h2 className="sub_culture_topic">Hosting platform</h2>
              <p className="sub_culture_para">Netlify</p>
            </div>
          </div>
        </div>
        </div>
      </div>
      <h2
        className="values_title"
        data-aos="fade-up-left"
        data-aos-duration="2000"
        style={{ marginBottom: "20px" }}
      >
        MORE WORK
      </h2>
      <div className="main_cards">
        {Serve.slice(0, 2).map((serves, index) => (
          <Link
            className="linka"
            to={`/single/${index}`}
            key={index}
            onClick={handleClicks}
          >
            <div
              className="sub_img_card"
              data-aos="fade-up"
              data-aos-anchor-placement={
                index % 2 === 0 ? "top-bottom" : "top-center"
              }
              data-aos-duration="2000"
            >
              <img className="gusa" src={serves.img_link} alt="" />

              <div
                className="texter_align"
                data-aos="fade-up-left"
                data-aos-anchor-placement={
                  index % 2 === 0 ? "top-bottom" : "top-center"
                }
                data-aos-duration="2000"
              >
                <div className="line">
                  <h2 className="main_card_texter1">{serves.name}</h2>
                  <div className="linerr">
                    <div className="liner"></div>
                    <h2 className="main_card_texter2">{serves.category}</h2>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </motion.div>
  );
};

export default SingleComponent;
