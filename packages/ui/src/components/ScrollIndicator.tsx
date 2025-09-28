import React, { useState, useEffect } from 'react';

const ScrollIndicator: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkScrollPosition = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const isAtTop = scrollTop < 100;
      setIsVisible(isAtTop);
    };

    // Check initial position
    checkScrollPosition();

    // Add scroll listener
    window.addEventListener('scroll', checkScrollPosition);
    return () => window.removeEventListener('scroll', checkScrollPosition);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-50">
      <a
        href="#solutions"
        onClick={(e) => {
          e.preventDefault();
          const element = document.getElementById('solutions');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }}
      >
        <svg
          className="w-8 h-8 text-gray-400"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </a>
    </div>
  );
};

export default ScrollIndicator;
