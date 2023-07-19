import React, { useEffect, useRef, useState } from 'react';


const AnimatedContainer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      const containerTop = container.getBoundingClientRect().top;
      const containerHeight = container.offsetHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      // Check if the container is in the viewport
      if (containerTop < scrollTop + window.innerHeight * 0.8 && containerTop + containerHeight > scrollTop) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    const restartAnimation = () => {
      const container = containerRef.current;
      container.scrollIntoView({ behavior: 'smooth' });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run the check initially

    // Restart animation on scroll bar click
    window.addEventListener('scroll', restartAnimation);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', restartAnimation);
    };
  }, []);

  return (
    <div ref={containerRef} className={`animated-container ${isVisible ? 'visible' : ''}`}>
      <h1 className="animated-heading">Hello, World!</h1>
    </div>
  );
};

export default AnimatedContainer;
