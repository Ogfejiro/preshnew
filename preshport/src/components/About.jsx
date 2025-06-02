"use client"; // This directive is necessary because this component might use client-side features or be part of a client component tree

import React from 'react';
// Removed: import Image from 'next/image'; // This import caused the error
// Assuming Button is a custom component or you will style it with Tailwind directly.
// If it's a shadcn/ui button, ensure your shadcn/ui setup is correct.
// import { Button } from "@/components/ui/button"; // Keeping this import as it was in your original code

const About = () => {
  return (
    // Changed background to white and adjusted text colors for contrast
    <div className="min-h-screen bg-white p-4 sm:p-8 font-inter text-gray-800 flex items-center justify-center">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
          {/* Text Content */}
          <div className="md:w-1/1 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4 text-gray-900">
              I develop functional and engaging web and mobile applications.
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8">
              Hi! I'm Ogwara Precious, a developer based in Nigeria. I specialize in creating user-friendly and efficient digital products.
            </p>
            {/* Custom Button styled with Tailwind to match aesthetics */}
            <button className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white">
              Learn More
            </button>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 flex justify-center items-center">
            {/* Replaced Next.js Image component with a standard <img> tag */}
            <img
              src="./about.jpg" // Placeholder for file.svg, adjusted placeholder colors for white background
              alt='Developer illustration'
              // Removed width and height props as they are not needed for <img> with Tailwind's w-full/max-w-sm
              className="rounded-xl shadow-2xl object-cover w-full max-w-sm h-auto"
              // Removed priority prop as it's specific to next/image
              onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/400x400/E2E8F0/475569?text=Image+Error`; }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
