import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const RotatingArrow2 = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    // Rotate the arrow by -90 degrees after 20 seconds
    const rotateTimeout = setTimeout(() => {
      setRotation(-90);
    }, 20000);

    // Rotate the arrow back to its normal position after another 10 seconds
    const resetTimeout = setTimeout(() => {
      setRotation(0);
    }, 30000);

    // Cleanup the timeouts to avoid memory leaks
    return () => {
      clearTimeout(rotateTimeout);
      clearTimeout(resetTimeout);
    };
  }, []);

  return (
    <motion.div
      className="arrow"
      style={{
        width: 0,
        height: 0,
        borderTop: '10px solid transparent',
        borderBottom: '10px solid transparent',
        borderRight: '20px solid red',
        transform: `rotate(${rotation}deg)`,
        transition: 'transform 0.5s ease-in-out',
      }}
    />
  );
};

export default RotatingArrow2;
