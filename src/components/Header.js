import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white bg-opacity-80 backdrop-blur-md text-gray-800 shadow-lg' : 'bg-transparent text-white'}`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold hover:text-blue-500 transition duration-300">SD</Link>

          <div className="hidden md:flex space-x-8">
            {['Projects', 'Books'].map((item) => (
              <Link
                key={item}
                to={item === 'Politics' ? 'https://a16z.com/the-techno-optimist-manifesto/' : `/${item.toLowerCase()}`}
                className={`hover:text-blue-500 transition duration-300 ${location.pathname === `/${item.toLowerCase()}` ? 'border-b-2 border-blue-500' : ''}`}
                target={item === 'Politics' ? '_blank' : undefined}
                rel={item === 'Politics' ? 'noopener noreferrer' : undefined}
              >
                {item}
              </Link>
            ))}
          </div>

          <button
            className="md:hidden focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4 bg-white bg-opacity-90 backdrop-blur-md rounded-lg p-4 shadow-lg">
            {['Projects', 'Books'].map((item) => (
              <Link
                key={item}
                to={item === 'Politics' ? 'https://a16z.com/the-techno-optimist-manifesto/' : `/${item.toLowerCase()}`}
                className="block text-gray-800 hover:text-blue-500 transition duration-300"
                onClick={toggleMenu}
                target={item === 'Politics' ? '_blank' : undefined}
                rel={item === 'Politics' ? 'noopener noreferrer' : undefined}
              >
                {item}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;