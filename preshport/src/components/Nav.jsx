"use client";
import React, { useEffect } from "react";
import { User, Folder, Briefcase, Mail } from "lucide-react"; // icons

const Nav = () => {
  useEffect(() => {
    // ✅ Enable smooth scrolling globally
    document.documentElement.classList.add("scroll-smooth");
  }, []);

  return (
    <>
      {/* Desktop Nav */}
      <nav className="hidden md:block bg-white backdrop-blur-md rounded-2xl border border-gray-200 shadow-md z-20 py-4 font-inter transition-colors duration-500">
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-2xl font-bold text-gray-900">
            Ogwara Alisha
          </h1>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a
              href="#about"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              About
            </a>
            <a
              href="#services"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Services
            </a>
            <a
              href="#project"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Nav */}
      {/* Mobile Bottom Nav */}
<div className="md:hidden fixed bottom-0 left-0 w-full bg-transparent backdrop-blur-md border-t border-gray-200 flex justify-around items-center py-3 z-50">
  <a href="#about" className="flex flex-col items-center text-gray-600 hover:text-blue-600">
    <User size={22} />
    <span className="text-xs">About</span>
  </a>
  <a href="#services" className="flex flex-col items-center text-gray-600 hover:text-blue-600">
    <Folder size={22} />
    <span className="text-xs">Services</span>
  </a>
  <a href="#project" className="flex flex-col items-center text-gray-600 hover:text-blue-600">
    <Briefcase size={22} />
    <span className="text-xs">Project</span>
  </a>
  <a href="#contact" className="flex flex-col items-center text-gray-600 hover:text-blue-600">
    <Mail size={22} />
    <span className="text-xs">Contact</span>
  </a>
</div>

    </>
  );
};

export default Nav;
