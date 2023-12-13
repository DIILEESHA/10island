import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import "./MistyRainbowCursor.css"; // Create a CSS file for styling



const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", updateCursorPosition);

    return () => {
      document.removeEventListener("mousemove", updateCursorPosition);
    };
  }, []);

  return (
    <motion.div
      className="custom-cursor"
      style={{ left: position.x, top: position.y }}
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.5, opacity: 0 }}
      transition={{ duration: 0.3 }}
    />
  );
};

export default CustomCursor;

