"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 p-4 sm:p-8 font-inter text-gray-800 dark:text-gray-200 flex items-center justify-center transition-colors duration-500">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
          {/* Text Content */}
          <div
            className="md:w-1/1 text-center md:text-left"
            data-aos="fade-right"
          >
            <h1
              className="text-4xl sm:text-5xl font-bold leading-tight mb-4 text-gray-900 dark:text-white"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              I develop functional and engaging web and mobile applications.
            </h1>
            <p
              className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Hi! I'm Ogwara Precious, a  Frontend Developer with 3years experience. I specialize
              in creating user-friendly and efficient digital websites.
            </p>
            
            <button
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500"
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              Contact Me
            </button>
          </div>

          {/* Image Section */}
          <div
            className="md:w-1/2 flex justify-center items-center"
            data-aos="fade-left"
          >
            <img
              src="./about.jpg"
              alt="Developer illustration"
              className="rounded-xl shadow-2xl object-cover w-full max-w-sm h-auto"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://placehold.co/400x400/E2E8F0/475569?text=Image+Error";
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
