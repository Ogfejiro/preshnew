"use client";
import React, { useState, useEffect } from "react";
import { ModeToggle } from "./ModeToggle";
import { User, Folder, Briefcase, Mail } from "lucide-react"; // icons

const Nav = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // ✅ Enable smooth scrolling globally
    document.documentElement.classList.add("scroll-smooth");
  }, [darkMode]);

  return (
    <>
      {/* Desktop Nav */}
      <nav className="hidden md:block bg-white/30 backdrop-blur-lg rounded-2xl border border-white/30 shadow-lg z-20 dark:bg-gray-900 py-4 shadow-md font-inter transition-colors duration-500">
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Ogwara Alisha
          </h1>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a
              href="#about"
              className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              About
            </a>
            <a
              href="#services"
              className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              Services
            </a>
            <a
              href="#project"
              className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              Contact
            </a>

            <ModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Nav */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-t border-gray-200 dark:border-gray-700 flex justify-around items-center py-3 z-50">
        <a href="#about" className="flex flex-col items-center text-gray-600 dark:text-gray-300 hover:text-blue-600">
          <User size={22} />
          <span className="text-xs">About</span>
        </a>
        <a href="#services" className="flex flex-col items-center text-gray-600 dark:text-gray-300 hover:text-blue-600">
          <Folder size={22} />
          <span className="text-xs">Services</span>
        </a>
        <a href="#project" className="flex flex-col items-center text-gray-600 dark:text-gray-300 hover:text-blue-600">
          <Briefcase size={22} />
          <span className="text-xs">Project</span>
        </a>
        <a href="#contact" className="flex flex-col items-center text-gray-600 dark:text-gray-300 hover:text-blue-600">
          <Mail size={22} />
          <span className="text-xs">Contact</span>
        </a>
      </div>
    </>
  );
};

export default Nav;
