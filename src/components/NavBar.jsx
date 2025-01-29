import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import mainLogo from "../assets/ClickHunts.png";
import { motion } from "framer-motion";

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
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuToggle = () => setIsOpen(!isOpen);

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="p-4 max-w-6xl mx-auto"
    >
      <div
        className={`flex justify-between w-full items-center transition-all duration-300 ${
          isSticky
            ? "fixed top-0 left-0 right-0 bg-white shadow-md z-10 transform transition-all duration-300 ease-in-out py-6"
            : "relative"
        }`}
      >
        {/* Navbar Container */}
        <div className="w-full max-w-6xl mx-auto flex justify-between items-center">
          <motion.img
            src={mainLogo}
            alt="Click Hunts"
            className="h-10"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />

          {/* Hamburger Menu */}
          <div className="md:hidden">
            <button
              className="relative w-8 h-6"
              onClick={handleMenuToggle}
              aria-label="Toggle Menu"
            >
              {/* Top Line */}
              <motion.span
                initial={{ rotate: 0, y: -8 }}
                animate={{
                  rotate: isOpen ? 45 : 0,
                  y: isOpen ? 0 : -8,
                }}
                className="absolute block w-full h-0.5 bg-gray-800 transform origin-center"
              />
              {/* Bottom Line */}
              <motion.span
                initial={{ rotate: 0, y: 8 }}
                animate={{
                  rotate: isOpen ? -45 : 0,
                  y: isOpen ? 0 : 8,
                }}
                className="absolute block w-full h-0.5 bg-gray-800 transform origin-center"
              />
            </button>
          </div>

          {/* Desktop Menu */}
          <motion.div
            className="hidden md:flex gap-6"
            initial="hidden"
            animate="visible"
          >
            {menuItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.url}
                className={({ isActive }) =>
                  isActive ? "font-bold text-gray-800" : "text-gray-500"
                }
              >
                {item.title}
              </NavLink>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="md:hidden mt-4 flex flex-col gap-4 bg-gray-100 p-4 rounded-xl"
        >
          {menuItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.url}
              className={({ isActive }) =>
                isActive ? "font-bold text-gray-800" : "text-gray-500"
              }
              onClick={() => setIsOpen(false)}
            >
              {item.title}
            </NavLink>
          ))}
        </motion.div>
      )}
    </motion.div>
  );
};

export default NavBar;
