import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkColor = isHome ? (isScrolled ? "text-[#856746]" : "text-white") : "text-[#856746]";
  const hoverClass = isHome ? (isScrolled ? "hover:text-[#60462c]" : "hover:text-gray-300") : "hover:text-[#60462c]";

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <motion.nav
      className={`fixed w-full z-10 py-4 transition-all duration-500 ${
        isHome ? (isScrolled ? "bg-white shadow-md" : "bg-transparent") : "bg-white shadow-md"
      }`}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="navbar-content flex justify-between items-center px-6 py-4 max-w-[1700px] mx-auto">
        <motion.div
          className="flex items-center transition-all duration-500"
          initial={{ x: -50 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/">
            <img
              src="/logo.PNG"
              alt="Logo"
              className="navbar-logo h-10 w-auto cursor-pointer no-select"
            />
          </Link>
          {/* Desktop Nav Title */}
          <AnimatePresence>
            {!isScrolled && isHome && (
              <motion.span
                className="navbar-title text-3xl font-bold no-select ml-3"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0 }}
                style={{ color: "#ffffff" }}
              >
                Cafe Himalayan Brew
              </motion.span>
            )}
          </AnimatePresence>
          {(!isHome || (isHome && isScrolled)) && (
            <span className="navbar-title text-3xl font-bold no-select ml-3" style={{ color: "#856746" }}>
              Cafe Himalayan Brew
            </span>
          )}
        </motion.div>

        {/* Desktop Navigation */}
        <motion.div className="hidden md:flex items-center space-x-8 no-select transition-all duration-500">
          <Link
            to="/"
            className={`relative text-lg ${navLinkColor} ${hoverClass} after:block after:h-[2px] after:w-0 after:bg-[#856746] after:transition-all after:duration-300 hover:after:w-full`}
          >
            Home
          </Link>
          <Link
            to="/menu"
            className={`relative text-lg ${navLinkColor} ${hoverClass} after:block after:h-[2px] after:w-0 after:bg-[#856746] after:transition-all after:duration-300 hover:after:w-full`}
          >
            Menu
          </Link>
          <Link
            to="/about"
            className={`relative text-lg ${navLinkColor} ${hoverClass} after:block after:h-[2px] after:w-0 after:bg-[#856746] after:transition-all after:duration-300 hover:after:w-full`}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={`relative text-lg ${navLinkColor} ${hoverClass} after:block after:h-[2px] after:w-0 after:bg-[#856746] after:transition-all after:duration-300 hover:after:w-full`}
          >
            Contact
          </Link>
        </motion.div>

       {/* Mobile Navigation Button */}
<div className="md:hidden">
  <button
    className={`transition duration-300 ${
      isScrolled ? "text-red-600" : "text-[white]"
    } hover:text-[#60462c] focus:outline-none`}
    aria-label="Toggle Menu"
    onClick={toggleMobileMenu}
  >
    {isMobileMenuOpen ? (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
          className={`${isScrolled ? "stroke-[#856746]" : "stroke-white"}`}
        />
      </svg>
    ) : (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16m-7 6h7"
          className={`${isScrolled ? "stroke-[#856746]" : "stroke-white"}`}
        />
      </svg>
    )}
  </button>
</div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden bg-white shadow-md"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center space-y-4 py-4">
              <Link
                to="/"
                className="text-xl text-[#856746] hover:text-[#60462c] transition duration-300"
                onClick={toggleMobileMenu}
              >
                Home
              </Link>
              <Link
                to="/menu"
                className="text-xl text-[#856746] hover:text-[#60462c] transition duration-300"
                onClick={toggleMobileMenu}
              >
                Menu
              </Link>
              <Link
                to="/about"
                className="text-xl text-[#856746] hover:text-[#60462c] transition duration-300"
                onClick={toggleMobileMenu}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-xl text-[#856746] hover:text-[#60462c] transition duration-300"
                onClick={toggleMobileMenu}
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;
