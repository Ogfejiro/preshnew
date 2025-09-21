"use client"; // This directive is necessary because this component uses useState

import React, { useState, useEffect } from "react";
import { ModeToggle } from "./ModeToggle";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage mobile menu visibility
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
        <div className="hidden md:flex items-center gap-4">
          {/* ✅ Only use ModeToggle, but pass state so it controls global dark mode */}
          <ModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
