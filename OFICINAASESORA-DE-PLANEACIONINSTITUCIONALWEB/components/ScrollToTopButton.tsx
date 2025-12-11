import React, { useState, useEffect } from 'react';
import { ArrowUpIcon } from './icons/ArrowUpIcon';
import { ArrowDownIcon } from './icons/ArrowDownIcon';

const ScrollToTopButton: React.FC = () => {
  const [isAtTop, setIsAtTop] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button after scrolling down a bit
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Check if at the very top
      if (window.pageYOffset < 50) {
        setIsAtTop(true);
      } else {
        setIsAtTop(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    
    // Initial check
    toggleVisibility();

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  };

  const handleClick = () => {
    if (isAtTop) {
      scrollToBottom();
    } else {
      scrollToTop();
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`scroll-btn ${isVisible || isAtTop ? 'visible' : ''}`}
      aria-label={isAtTop ? 'Ir al final de la página' : 'Volver al inicio'}
    >
      {isAtTop ? <ArrowDownIcon /> : <ArrowUpIcon />}
    </button>
  );
};

export default ScrollToTopButton;
