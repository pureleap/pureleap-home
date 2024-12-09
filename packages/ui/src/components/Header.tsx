import React, { useState } from 'react';

interface HeaderProps {
  className?: string;
}

/**
 * Header component that provides navigation functionality
 * @param props - Component properties
 * @returns Header component with responsive navigation
 */
export const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 bg-gray-50 z-50 ${className}`}
      style={{ backgroundColor: '#fbfbff' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-end items-center h-16">
          {/* Desktop Navigation */}
          <nav className="hidden sm:block">
            <a
              href="#about"
              className="text-black-500 hover:text-orange-500 px-3 py-2 rounded-md font-xl font-serif"
            >
              Home
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-black-500 hover:text-orange-500"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isMenuOpen
                      ? 'M6 18L18 6M6 6l12 12'
                      : 'M4 6h16M4 12h16M4 18h16'
                  }
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 text-right">
              <a
                href="#about"
                className="block px-3 py-2 rounded-md text-base font-medium text-black-500 hover:text-orange-500 font-serif"
              >
                About
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
