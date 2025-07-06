import { motion, useInView } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  const navbarRef = useRef(null);
  const isInView = useInView(navbarRef, { once: true });
  const [hasHovered, setHasHovered] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleStorage = () => {
      const hoverState = localStorage.getItem("hasHovered") === "true";
      setHasHovered(hoverState);
    };

    handleStorage();
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  const shouldAnimate = isInView && hasHovered;

  const logoAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: [0.33, 1, 0.68, 1] },
    },
  };

  const rightElementsAnimation = {
    hidden: { opacity: 0, y: -100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: [0.33, 1, 0.68, 1] },
    },
  };

  const menuDropdownAnimation = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.2, ease: "easeIn" },
    },
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      ref={navbarRef}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-6"
    >
      {/* Logo */}
      <motion.div
        className="flex items-center"
        initial="hidden"
        animate={shouldAnimate ? "visible" : "hidden"}
        variants={logoAnimation}
      >
        <img
          src="/BEYOND.png"
          alt="Beyond Logo"
          className="h-8 md:h-10 w-auto"
        />
      </motion.div>

      {/* Desktop Navigation & CTA Button */}
      <motion.div
        className="hidden md:flex items-center space-x-6"
        initial="hidden"
        animate={shouldAnimate ? "visible" : "hidden"}
        variants={rightElementsAnimation}
      >
        {/* "Let's Talk" button (Hidden on Mobile) */}
        <button className="hidden md:flex items-center px-4 py-2 border-2 border-gray-300 rounded-full hover:shadow-lg transition">
          <span className="h-2 w-2 bg-green-500 rounded-full mr-2"></span>
          Let's Talk
        </button>

        {/* Menu Button */}
        <div
          className="flex items-center space-x-2 cursor-pointer"
          onClick={toggleMenu}
        >
          <span className="text-gray-700">Menu</span>
          <div className="space-y-1 pr-4">
            <div className="w-6 h-0.5 bg-gray-700"></div>
            <div className="w-6 h-0.5 bg-gray-700"></div>
          </div>
        </div>
      </motion.div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center cursor-pointer" onClick={toggleMenu}>
        <div className="space-y-1">
          <div className="w-6 h-0.5 bg-gray-700"></div>
          <div className="w-6 h-0.5 bg-gray-700"></div>
        </div>
      </div>

      {/* Mobile & Desktop Dropdown Menu */}
      {isMenuOpen && (
        <motion.div
          className="absolute top-16 right-6 w-48 bg-white border shadow-lg rounded-lg p-4"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={menuDropdownAnimation}
        >
          <ul className="flex flex-col space-y-4">
            <li>
              <Link to="/" className="hover:text-blue-600 cursor-pointer">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-600 cursor-pointer">About</Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-blue-600 cursor-pointer">Services</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-600 cursor-pointer">Contact</Link>
            </li>
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
