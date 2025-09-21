"use client"; // This directive is necessary because this component uses useState

import React, { useState, useEffect } from "react";
import { ModeToggle } from "./ModeToggle";
import { Menu, X } from "lucide-react"; // icons for mobile menu

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage mobile menu
  const [darkMode, setDarkMode] = useState(false);

  // ✅ Apply/remove dark mode on <html> tag globally
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="bg-white dark:bg-gray-900 py-4 shadow-md font-inter transition-colors duration-500">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo/Name */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Ogwara Precious
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <a
            href="#about"
            className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            About
          </a>
          <a
            href="#project"
            className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            Projects
          </a>
          <a
            href="#services"
            className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            Services
          </a>
          <a
            href="#contact"
            className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            Contact
          </a>

          {/* Mode Toggle */}
          <ModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>

        {/* Mobile Menu Button + ModeToggle */}
        <div className="md:hidden flex items-center gap-4">
          <ModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 dark:text-gray-200 focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-4 pt-4 pb-6 space-y-4">
          <a
            href="#about"
            className="block text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            About
          </a>
          <a
            href="#project"
            className="block text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            Projects
          </a>
          <a
            href="#services"
            className="block text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            Services
          </a>
          <a
            href="#contact"
            className="block text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Nav;
