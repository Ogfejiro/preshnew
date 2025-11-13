"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ 
      duration: 1000, 
      once: true,
      easing: 'ease-out-cubic'
    });
  }, []);

  const technologies = [
    { name: 'React', color: 'bg-blue-100 text-blue-800 border-blue-200' },
    { name: 'Next.js', color: 'bg-gray-100 text-gray-800 border-gray-200' },
    { name: 'TypeScript', color: 'bg-blue-100 text-blue-800 border-blue-200' },
    { name: 'Tailwind CSS', color: 'bg-cyan-100 text-cyan-800 border-cyan-200' },
    { name: 'JavaScript', color: 'bg-yellow-100 text-yellow-800 border-yellow-200' },
  ];

  return (
    <div
      id="about"
      className="min-h-screen w-full bg-white px-4 sm:px-8 font-inter text-gray-800 flex items-center justify-center overflow-hidden relative"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>
      
      {/* Minimal background elements - constrained to not cause overflow */}
      <div className="absolute top-0 right-0 w-48 h-48 sm:w-72 sm:h-72 bg-blue-50 rounded-full -translate-y-1/2 translate-x-1/2 sm:-translate-y-36 sm:translate-x-36"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-purple-50 rounded-full translate-y-1/2 -translate-x-1/2 sm:translate-y-48 sm:-translate-x-48"></div>

      <div className="container mx-auto py-8 sm:py-16 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left" data-aos="fade-right">
            {/* Badge */}
            <div 
              className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-6 border border-blue-200"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-600 rounded-full"></div>
              Available for new projects
            </div>

            <h1
              className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-4 text-gray-900"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Crafting digital experiences where{' '}
              <span className="text-blue-600 relative inline-block">
                art meets
                <div className="absolute bottom-1 left-0 w-full h-2 bg-yellow-100 -rotate-1 z-0"></div>
              </span>{' '}
              technology.
            </h1>
            
            <p
              className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Hi! I'm <span className="font-semibold text-blue-600">Ogwara Precious Alisha</span>, a passionate frontend developer with 4 years of experience building clean, intuitive, and visually balanced interfaces.
            </p>

            {/* CTA Buttons */}
            <div 
              className="flex flex-col sm:flex-row gap-3"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <a
                href="https://wa.me/2349034982572"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 sm:py-4 sm:px-8 rounded-lg sm:rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-200 text-sm sm:text-base"
              >
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893c0-3.189-1.248-6.189-3.515-8.447"/>
                  </svg>
                  Let's Collaborate
                </span>
              </a>
              
              <a
                href="./project"
                className="group inline-flex items-center justify-center border border-gray-300 hover:border-gray-400 hover:bg-gray-50 text-gray-700 font-semibold py-3 px-6 sm:py-4 sm:px-8 rounded-lg sm:rounded-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-200 text-sm sm:text-base"
              >
                View My Work
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div
            className="lg:w-1/2 flex justify-center items-center mt-8 lg:mt-0"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <div className="relative">
              {/* Main image container */}
              <div className="relative bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-lg sm:shadow-2xl border border-gray-100 transform group hover:scale-105 transition-transform duration-500 max-w-xs sm:max-w-md">
                <img
                  src="./about.jpg"
                  alt="Ogwara Precious Alisha"
                  className="rounded-xl sm:rounded-2xl object-cover w-full h-auto"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src =
                      "https://placehold.co/400x500/E2E8F0/475569?text=Ogwara+Precious+Alisha";
                  }}
                />
              </div>
              
              {/* Experience badge */}
              <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 bg-green-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg sm:rounded-xl shadow-lg">
                <div className="flex items-center gap-1 sm:gap-2">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"></div>
                  <span className="font-semibold text-xs sm:text-sm">4+ Years Exp</span>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 w-6 h-6 sm:w-8 sm:h-8 bg-yellow-400 rounded-full shadow-lg"></div>
              <div className="absolute -bottom-3 left-8 sm:-bottom-6 sm:left-10 w-4 h-4 sm:w-6 sm:h-6 bg-blue-500 rounded-full shadow-lg"></div>
            </div>
          </div>
        </div>

        {/* Skills/Technologies Section */}
        <div 
          className="mt-12 sm:mt-20 max-w-4xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-center mb-8 sm:mb-12 text-gray-900">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {technologies.map((tech, index) => (
              <div
                key={tech.name}
                className={`px-4 py-2 sm:px-6 sm:py-3 rounded-lg border font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg text-sm sm:text-base ${tech.color}`}
                data-aos="zoom-in"
                data-aos-delay={700 + index * 100}
              >
                {tech.name}
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info Section */}
        <div 
          className="mt-12 sm:mt-20 grid md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          <div className="text-center p-4 sm:p-6 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h4 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">Creative Design</h4>
            <p className="text-gray-600 text-xs sm:text-sm">Beautiful, user-centered designs that engage and convert visitors</p>
          </div>

          <div className="text-center p-4 sm:p-6 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h4 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">Clean Code</h4>
            <p className="text-gray-600 text-xs sm:text-sm">Scalable, maintainable code following industry best practices</p>
          </div>

          <div className="text-center p-4 sm:p-6 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h4 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">Fast Performance</h4>
            <p className="text-gray-600 text-xs sm:text-sm">Optimized applications that load quickly and run smoothly</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;