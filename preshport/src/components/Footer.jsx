"use client"; // Required for client-side features like AOS

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Linkedin, Github, MessageCircle } from "lucide-react"; // use MessageCircle for WhatsApp-like icon

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <footer
      className="bg-white  py-12 shadow-inner mt-16 transition-colors duration-500"
      data-aos="fade-up"
    >
      <div className="container mx-auto px-4 text-center">
        {/* Copyright */}
        <p
          className="text-gray-700 dark:text-gray-300 text-lg mb-4"
          data-aos="fade-down"
          data-aos-delay="100"
        >
          &copy; {new Date().getFullYear()} Precious Ogwara. All rights reserved.
        </p>

        {/* Social Icons */}
        <div
          className="flex justify-center items-center space-x-6 mb-8"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/precious-ogwara-191b5934a"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors duration-300 transform hover:scale-110"
            aria-label="LinkedIn Profile"
            data-aos="flip-left"
            data-aos-delay="400"
          >
            <Linkedin className="w-8 h-8" />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Ogfejiro"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 transform hover:scale-110"
            aria-label="GitHub Profile"
            data-aos="flip-right"
            data-aos-delay="600"
          >
            <Github className="w-8 h-8" />
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/2348138127202" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-green-500 transition-colors duration-300 transform hover:scale-110"
            aria-label="WhatsApp"
            data-aos="flip-up"
            data-aos-delay="800"
          >
            <MessageCircle className="w-8 h-8" />
          </a>
        </div>

        {/* Tagline */}
        <p
          className="text-gray-500 dark:text-gray-400 text-sm"
          data-aos="fade-up"
          data-aos-delay="1200"
        >
          Designed and built by alisha.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
