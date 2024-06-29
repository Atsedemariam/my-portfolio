import React, { useState, useEffect } from 'react';
import './ScrollToTop.css'; // Optional: Add CSS for styling

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to scroll to the top of the page
  const scrollToTop = () => {

    console.log('Scroll to top function called');
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Function to scroll to the bottom of the page
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };

  // Effect to check scroll position and show/hide the button
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) { // Adjust this value as needed
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className={`scroll-to-top ${isVisible ? 'visible' : ''}`}>
      <button onClick={scrollToTop} aria-label="Scroll to top">
        &#8593; {/* Up arrow */}
      </button>
      <button onClick={scrollToBottom} aria-label="Scroll to bottom">
        &#8595; {/* Down arrow */}
      </button>
    </div>
  );
};

export default ScrollToTop;
