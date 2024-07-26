import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ContentContainer = ({ children, setIsPulling }) => {
  const [position, setPosition] = useState({ x: 0, y: 0, scale: 1 });

  useEffect(() => {
    const handleScroll = (event) => {
      const contentElement = document.getElementById('content');
      if (contentElement) {
        const contentHeight = contentElement.clientHeight;
        const scrollPosition = window.scrollY;

        // Calculate pulling distance and scaling factor based on scroll position and content height
        const pullDistance = scrollPosition * 0.5; // Adjust the multiplier for desired effect
        const scaleFactor = 1 - (pullDistance / contentHeight) * 0.5; // Adjust the multiplier for desired scaling

        setPosition({
          x: 0, // Adjust x-axis position if needed
          y: pullDistance,
          scale: scaleFactor,
        });

        // Check if the content is fully pulled
        if (scaleFactor <= 0.2) { // Adjust the threshold as needed
          setIsPulling(false);
        } else {
          setIsPulling(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setIsPulling]);

  return (
    <motion.div
      className="content-container"
      style={{
        position: 'absolute',
        top: position.y,
        left: position.x,
        scale: position.scale,
      }}
    >
      {children}
    </motion.div>
  );
};

export default ContentContainer;