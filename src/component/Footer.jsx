import React, { useState, useEffect } from 'react';
import { IoHomeOutline, IoGridOutline, IoPersonOutline, IoCartOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      // Scrolling down
      setShowNav(false);
    } else {
      // Scrolling up
      setShowNav(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      <div
        className={`fixed bottom-0 left-0 w-full bg-white shadow-lg transition-transform duration-300 ease-in-out z-50 md:hidden ${
          showNav ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="flex justify-around items-center p-2">
          <Link to="/" className="flex flex-col items-center text-gray-700 hover:text-blue-500">
            <IoHomeOutline className="text-2xl" />
            <span className="text-xs mt-1">Home</span>
          </Link>
          <Link to="#" className="flex flex-col items-center text-gray-700 hover:text-blue-500">
            <IoGridOutline className="text-2xl" />
            <span className="text-xs mt-1">Categories</span>
          </Link>
          <Link to="/account" className="flex flex-col items-center text-gray-700 hover:text-blue-500">
            <IoPersonOutline className="text-2xl" />
            <span className="text-xs mt-1">Account</span>
          </Link>
          <Link to="/cart" className="flex flex-col items-center text-gray-700 hover:text-blue-500">
            <IoCartOutline className="text-2xl" />
            <span className="text-xs mt-1">Cart</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;