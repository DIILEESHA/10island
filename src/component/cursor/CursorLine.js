// CursorTrail.js
import React, { useState, useEffect } from 'react';
import './CursorLine.css';

const CursorTrail = () => {
  const [trail, setTrail] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const newTrailItem = {
      x: clientX,
      y: clientY,
      color: getRandomColor(),
      shape: getRandomShape(),
    };

    setTrail((prevTrail) => [...prevTrail, newTrailItem]);
    setIsVisible(true);

    // Reset trail and visibility after 4 seconds
    setTimeout(() => {
      setTrail([]);
      setIsVisible(false);
    }, 40);
  };

  const getRandomColor = () => {
    const colors = ['#FF0000', '#00FF00', '#0000FF', '#FF00FF', '#FFFF00', '#00FFFF'];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const getRandomShape = () => {
    const shapes = ['circle', 'heart'];
    return shapes[Math.floor(Math.random() * shapes.length)];
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className={`cursor-trail ${isVisible ? 'visible' : ''}`}>
      {trail.map((item, index) => (
        <div
          key={index}
          className={`trail-item ${item.shape}`}
          style={{ left: item.x, top: item.y, backgroundColor: item.color }}
        ></div>
      ))}
    </div>
  );
};

export default CursorTrail;
