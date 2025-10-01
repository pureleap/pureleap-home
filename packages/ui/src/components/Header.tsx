import React, { useState } from 'react';

import PureleapLogo from './../img/pureleap_logo_optimised.png';

interface HeaderProps {
  className?: string;
  visible?: boolean;
}

/**
 * Header component that provides navigation functionality
 * @param props - Component properties including visibility control
 * @returns Header component with responsive navigation
 */
export const Header: React.FC<HeaderProps> = ({ className = '', visible = true }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 bg-gray-50 z-50 transition-all ease-in-out duration-500 ${className} ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
      }`}
      style={{ backgroundColor: '#fbfbff' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="/" className="flex-shrink-0 h-full flex items-center">
            <img src={PureleapLogo} alt="Pureleap Logo" className="h-full" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden sm:block">
            <a href="/" className="text-black-500 hover:text-orange-500 text-2xl font-handwritten">
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
                <title>Hamburger Icon</title>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
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
                href="/"
                className="block px-3 py-2 rounded-md text-base font-medium text-black-500 hover:text-orange-500 font-sans"
              >
                Home
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
