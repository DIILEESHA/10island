// CustomCursor.js
import React, { useEffect, useState } from 'react';
import './CursorLine.css';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const rotateCursor = () => {
      setRotation((prevRotation) => (prevRotation + 36) % 360);
      requestAnimationFrame(rotateCursor);
    };

    document.addEventListener('mousemove', updateCursorPosition);
    rotateCursor();

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []);

  const renderIslands = () => {
    const islands = [];
    for (let i = 0; i < 10; i++) {
      islands.push(<div key={i} className="island" style={{ transform: `rotate(${i * 36}deg)` }} />);
    }
    return islands;
  };

  return (
    <div className="custom-cursor">
      <div className="cursor-circle" style={{ transform: `rotate(${rotation}deg)` }}>
        {renderIslands()}
      </div>
      <div className="cursor-dot" style={{ transform: `translate(-50%, -50%) rotate(${rotation}deg)` }} />
    </div>
  );
};

export default CustomCursor;
