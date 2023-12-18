import React, { useState, useEffect } from "react";
import "./header.css";

const sentences = [
  <div style={{ display: "flex", flexDirection: "column", height: "auto" }}>
    <h4 className="dg2" style={{ color: "#a2a2a9" }}>
      Digital Innovation
    </h4>
    <h4 className="dg">to seize opportunities,</h4>
  </div>,

  <div style={{ display: "flex", flexDirection: "column" }}>
    <h4 className="dg2" style={{ color: "#a2a2a9" }}>
      Lovable Products
    </h4>
    <h4 className="dg">from vision to launch</h4>
  </div>,
  <div style={{ display: "flex", flexDirection: "column" }}>
    <h4 className="dg2" style={{ color: "#a2a2a9" }}>
      Branded Experiences
    </h4>
    <h4 className="dg">that grow your business</h4>
  </div>,
];

const SentenceAnimation = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
    }, 4000); // Change the duration as needed (3000 milliseconds = 3 seconds)

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="sunta">
      <div
        className="sentence-container"
        data-aos="fade-up-right"
        data-aos-duration="2000"
      >
        <div className="senta">
          <h4 className={`sentence jh ${currentIndex === 0 ? "show" : "hide"}`}>
            {sentences[0]}
          </h4>
          <h1 className={`sentence ${currentIndex === 1 ? "show" : "hide"}`}>
            {sentences[1]}
          </h1>

          <h1 className={`sentence ${currentIndex === 2 ? "show" : "hide"}`}>
            {sentences[2]}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default SentenceAnimation;
