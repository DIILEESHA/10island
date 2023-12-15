import React, { useEffect, useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import "./CustomCursor.css";
import { IoArrowBack } from "react-icons/io5";

const CustomCursor = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 2500,
      smooth: "easeInOutQuad",
    });
  };

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setShowScrollButton(scrollY >= 150);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`cursor ${showScrollButton ? "show" : ""}`}>
      <div className="imger" onClick={scrollToTop}>
        <div className="cursor_imgset">
          <IoArrowBack className="ily" />
        </div>{" "}
        <div className="cursor_imgsete rotate">
          <img
            src="https://res.cloudinary.com/dwui0vhvc/image/upload/v1702662424/Beige_White_Modern_Concept_Football_Logo_6_dil0ps.png"
            alt=""
            className=""
          />
        </div>
      </div>
    </div>
  );
};

export default CustomCursor;
