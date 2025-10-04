"use client"; // Required for client-side features like AOS

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-16 px-6 sm:px-8 lg:px-12 font-inter">
      <Services />
    </div>
  );
};

const Services = () => {
  return (
    <div
      id="services"
      className="max-w-7xl mx-auto text-center"
      data-aos="fade-up"
    >
      {/* Section Title */}
      <h1
        className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4"
        data-aos="fade-down"
        data-aos-delay="100"
      >
        My Services
      </h1>

      {/* Section Subtitle */}
      <p
        className="text-lg sm:text-xl text-gray-600 mb-12"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Websites that stand out, one page at a time.
      </p>

      {/* Service Blocks */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Service Block 1 */}
        <div
          className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center border border-gray-100"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          <img src="/first.svg" className="mb-6 w-16 h-16" alt="service 1" />
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">
            What I can do for you
          </h3>
          <p className="text-gray-600 mb-6">
            Faster, better pages that your users will love. Here’s what I
            provide:
          </p>
          <ul className="space-y-2 text-gray-700">
            <li className="bg-gray-100 py-2 px-4 rounded-lg">Web Development</li>
            <li className="bg-gray-100 py-2 px-4 rounded-lg">
              Web & Mobile App Development
            </li>
            <li className="bg-gray-100 py-2 px-4 rounded-lg">Debugging</li>
          </ul>
        </div>

        {/* Service Block 2 */}
        <div
          className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center border border-gray-100"
          data-aos="zoom-in"
          data-aos-delay="500"
        >
          <img src="/first2.svg" className="mb-6 w-16 h-16" alt="service 2" />
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">
            Beautiful Websites
          </h3>
          <p className="text-gray-600 mb-6">
            Smooth, interactive and animated websites that delight your users.
          </p>
          <ul className="space-y-2 text-gray-700">
            <li className="bg-gray-100 py-2 px-4 rounded-lg">
              User Research & Testing
            </li>
            <li className="bg-gray-100 py-2 px-4 rounded-lg">
              Website Animations
            </li>
            <li className="bg-gray-100 py-2 px-4 rounded-lg">
              Landing Page Development
            </li>
          </ul>
        </div>

        {/* Service Block 3 */}
        <div
          className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center border border-gray-100"
          data-aos="zoom-in"
          data-aos-delay="700"
        >
          <img src="/first3.svg" className="mb-6 w-16 h-16" alt="service 3" />
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">
            My Skills
          </h3>
          <p className="text-gray-600 mb-6">Technologies I work with:</p>
          <ul className="space-y-2 text-gray-700">
            <li className="bg-gray-100 py-2 px-4 rounded-lg">HTML</li>
            <li className="bg-gray-100 py-2 px-4 rounded-lg">CSS</li>
            <li className="bg-gray-100 py-2 px-4 rounded-lg">JavaScript</li>
            <li className="bg-gray-100 py-2 px-4 rounded-lg">Next.js</li>
            <li className="bg-gray-100 py-2 px-4 rounded-lg">TypeScript</li>
            <li className="bg-gray-100 py-2 px-4 rounded-lg">TailwindCSS</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
