"use client"; // This directive is necessary because this component uses useState

import React, { useState } from 'react';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage mobile menu visibility

  return (
    <nav className="bg-white py-4 shadow-md font-inter">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo/Name */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Ogwara Precious</h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <ul className="flex gap-12 text-gray-700 font-medium">
            <li>
              <a href="/" className="hover:text-blue-600 transition-colors duration-200">About</a>
            </li>
            <li>
              <a href="/" className="hover:text-blue-600 transition-colors duration-200">Services</a>
            </li>
            <li>
              <a href="/" className="hover:text-blue-600 transition-colors duration-200">Project</a>
            </li>
            <li>
              <a href="/" className="hover:text-blue-600 transition-colors duration-200">Contact</a>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Button (Hamburger Icon) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 rounded-md p-2"
            aria-label="Toggle navigation menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white mt-2 pb-4 border-t border-gray-100">
          <ul className="flex flex-col items-center space-y-4 text-gray-700 font-medium">
            <li>
              <a href="/" className="hover:text-blue-600 transition-colors duration-200" onClick={() => setIsOpen(false)}>About</a>
            </li>
            <li>
              <a href="/" className="hover:text-blue-600 transition-colors duration-200" onClick={() => setIsOpen(false)}>Services</a>
            </li>
            <li>
              <a href="/" className="hover:text-blue-600 transition-colors duration-200" onClick={() => setIsOpen(false)}>Project</a>
            </li>
            <li>
              <a href="/" className="hover:text-blue-600 transition-colors duration-200" onClick={() => setIsOpen(false)}>Contact</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;
