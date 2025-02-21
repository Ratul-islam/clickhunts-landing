import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import mainLogo from "../assets/ClickHunts.png";
import { motion, AnimatePresence } from "framer-motion";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const menuItems = [
    { title: "HOME", url: "/" },
    { title: "AFFILIATE", url: "/affiliate" },
    { title: "ADVERTISERS", url: "/advertisers" },
    { title: "OFFER", url: "/offer" },
    { title: "ABOUT US", url: "/about" },
    { title: "CONTACT US", url: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`w-full z-50 transition-all duration-300 ${
          isSticky 
            ? "fixed top-0 left-0 right-0 bg-white shadow-md" 
            : "relative bg-white"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <NavLink to="/" className="flex-shrink-0">
              <motion.img
                src={mainLogo}
                alt="Click Hunts"
                className="h-8 sm:h-10 w-auto"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
            </NavLink>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
              {menuItems.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.url}
                  className={({ isActive }) =>
                    `text-sm xl:text-base transition-colors duration-200 ${
                      isActive 
                        ? "font-bold text-[#067e95]" 
                        : "text-gray-600 hover:text-[#067e95]"
                    }`
                  }
                >
                  {item.title}
                </NavLink>
              ))}

              <div className="flex gap-2 ml-4">
                <button className="text-white bg-[#067e95] px-4 py-2 rounded-md text-sm font-semibold hover:bg-[#056e82] transition-colors duration-200">
                  Login
                </button>
                <button className="text-white bg-[#067e95] px-4 py-2 rounded-md text-sm font-semibold hover:bg-[#056e82] transition-colors duration-200">
                  Sign up
                </button>
              </div>
            </div>

            {/* Improved Hamburger Menu Button */}
            <button
              className="lg:hidden flex flex-col justify-center items-center w-8 h-8 relative"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              <span 
                className={`block w-6 h-0.5 bg-gray-800 rounded-full transition-all duration-300 ease-in-out ${
                  isOpen ? 'absolute rotate-45' : 'mb-1.5'
                }`}
              />
              <span 
                className={`block w-6 h-0.5 bg-gray-800 rounded-full transition-all duration-300 ease-in-out ${
                  isOpen ? 'opacity-0' : 'mb-1.5'
                }`}
              />
              <span 
                className={`block w-6 h-0.5 bg-gray-800 rounded-full transition-all duration-300 ease  -in-out ${
                  isOpen ? 'absolute -rotate-45' : ''
                }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
              onClick={() => setIsOpen(false)}
            />
          )}
        </AnimatePresence>

        {/* Mobile Menu */}
        <motion.div
          className={`fixed top-0 right-0 h-full w-[280px] bg-white shadow-xl z-40 transform transition-transform duration-300 ease-in-out lg:hidden ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          initial={false}
        >
          <div className="flex flex-col h-full pt-20 pb-6 px-6">
            <div className="flex-1 flex flex-col">
              {menuItems.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.url}
                  className={({ isActive }) =>
                    `py-3 text-base ${
                      isActive 
                        ? "font-bold text-[#067e95]" 
                        : "text-gray-600 hover:text-[#067e95]"
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </NavLink>
              ))}
            </div>

            <div className="mt-6 flex flex-col gap-3">
              <button className="w-full text-white bg-[#067e95] px-6 py-2.5 rounded-md font-semibold text-sm hover:bg-[#056e82] transition-colors duration-200">
                Login
              </button>
              <button className="w-full text-white bg-[#067e95] px-6 py-2.5 rounded-md font-semibold text-sm hover:bg-[#056e82] transition-colors duration-200">
                Sign up
              </button>
            </div>
          </div>
        </motion.div>
      </motion.nav>
    </>
  );
};

export default NavBar;