import React, { useEffect, useState } from 'react';

interface ScrollIndicatorProps {
  targetId: string;
  children: React.ReactNode;
}

const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({ targetId, children }) => {
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
    <div className="fixed bottom-8 left-0 right-0 flex justify-center animate-bounce z-50">
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          const element = document.getElementById(targetId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }}
      >
        <span className="font-sans text-lg text-gray-400 hover:text-gray-600 flex items-center">
          {children}
        </span>
      </button>
    </div>
  );
};

export default ScrollIndicator;
