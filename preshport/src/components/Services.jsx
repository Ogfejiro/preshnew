"use client"; // Required for client-side features like AOS

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Main App component that renders the Services section
const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 font-inter transition-colors duration-300">
      <Services />
    </div>
  );
};

const Services = () => {
  return (
    <div
    id="services"
      className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8"
      data-aos="fade-up"
    >
      {/* Section Title */}
      <h1
        className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-gray-100 mb-4 rounded-lg transition-colors duration-300"
        data-aos="fade-down"
        data-aos-delay="100"
      >
        My Services
      </h1>

      {/* Section Subtitle */}
      <p
        className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-12 rounded-lg transition-colors duration-300"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Website that shows uniqueness, one page at a time.
      </p>

      {/* Service Blocks */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Service Block 1 */}
        <div
          className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          <img src="/first.svg" className="mb-4 w-16 h-16" alt="service 1" />
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3 rounded-lg">
            What I can do for you
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4 rounded-lg">
            Faster, better Pages that your users love. Here's all the services I
            provide:
          </p>
          <ul className="text-gray-700 dark:text-gray-200 space-y-2 list-none p-0 rounded-lg">
            <li className="bg-gray-100 dark:bg-gray-700 py-1 px-3 rounded-md">
              Web Development
            </li>
            <li className="bg-gray-100 dark:bg-gray-700 py-1 px-3 rounded-md">
              Web and Mobile App Development
            </li>
            <li className="bg-gray-100 dark:bg-gray-700 py-1 px-3 rounded-md">
              Debugging
            </li>
          </ul>
        </div>

        {/* Service Block 2 */}
        <div
          className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center"
          data-aos="zoom-in"
          data-aos-delay="500"
        >
          <img src="/first2.svg" className="mb-4 w-16 h-16" alt="service 2" />
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3 rounded-lg">
            What I can do for you
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4 rounded-lg">
            Beautiful and animated Websites that your users would always want to
            use.
          </p>
          <ul className="text-gray-700 dark:text-gray-200 space-y-2 list-none p-0 rounded-lg">
            <li className="bg-gray-100 dark:bg-gray-700 py-1 px-3 rounded-md">
              User Research & Testing
            </li>
            <li className="bg-gray-100 dark:bg-gray-700 py-1 px-3 rounded-md">
              Website Animations
            </li>
            <li className="bg-gray-100 dark:bg-gray-700 py-1 px-3 rounded-md">
              Landing page Development
            </li>
          </ul>
        </div>

        {/* Service Block 3 */}
        <div
          className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center"
          data-aos="zoom-in"
          data-aos-delay="700"
        >
          <img src="/first3.svg" className="mb-4 w-16 h-16" alt="service 3" />
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3 rounded-lg">
            My Skills
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4 rounded-lg">
            Skills I am good at and work with:
          </p>
          <ul className="text-gray-700 dark:text-gray-200 space-y-2 list-none p-0 rounded-lg">
            <li className="bg-gray-100 dark:bg-gray-700 py-1 px-3 rounded-md">HTML</li>
            <li className="bg-gray-100 dark:bg-gray-700 py-1 px-3 rounded-md">CSS</li>
            <li className="bg-gray-100 dark:bg-gray-700 py-1 px-3 rounded-md">JavaScript</li>
            <li className="bg-gray-100 dark:bg-gray-700 py-1 px-3 rounded-md">Next.js</li>
            <li className="bg-gray-100 dark:bg-gray-700 py-1 px-3 rounded-md">TypeScript</li>
            <li className="bg-gray-100 dark:bg-gray-700 py-1 px-3 rounded-md">TailwindCSS</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
