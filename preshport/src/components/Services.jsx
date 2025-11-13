"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
} from "react-icons/si";

const services = [
  {
    title: "Frontend Development",
    description: "Building responsive, interactive user interfaces with modern frameworks like React and Next.js that provide seamless user experiences across all devices.",
    icon: SiReact,
    color: "#61DAFB",
    features: ["React & Next.js", "Responsive Design", "Performance Optimization", "Cross-browser Compatibility"]
  },
  
  {
    title: "Web Applications",
    description: "Developing full-featured web applications with clean architecture, state management, and integration with various APIs and services.",
    icon: SiNextdotjs,
    color: "#000000",
    features: ["Single Page Apps", "API Integration", "State Management", "Progressive Web Apps"]
  },
  {
    title: "Performance Optimization",
    description: "Optimizing web applications for speed and efficiency, ensuring fast load times and smooth interactions for better user retention.",
    icon: SiJavascript,
    color: "#F7DF1E",
    features: ["Code Splitting", "Lazy Loading", "Bundle Optimization", "Core Web Vitals"]
  },
  {
    title: "TypeScript Development",
    description: "Building robust and maintainable applications with TypeScript for better code quality, developer experience, and fewer runtime errors.",
    icon: SiTypescript,
    color: "#3178C6",
    features: ["Type Safety", "Better IntelliSense", "Refactoring", "Team Collaboration"]
  },
  {
    title: "Modern Styling",
    description: "Implementing beautiful, consistent designs using modern CSS frameworks and methodologies for maintainable and scalable styling.",
    icon: SiTailwindcss,
    color: "#06B6D4",
    features: ["Tailwind CSS", "CSS-in-JS", "Design Tokens", "Component Libraries"]
  }
];

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section id="services" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-white py-20">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full -translate-x-48 -translate-y-48"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100 rounded-full translate-x-48 translate-y-48"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        {/* Header */}
        <div
          className="text-center mb-20"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            My Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I offer comprehensive frontend development services to bring your digital ideas to life with clean code, modern design, and exceptional user experiences.
          </p>
          <div className="h-1 w-24 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mt-8"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay={100 * index}
            >
              {/* Icon Container */}
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                style={{ backgroundColor: `${service.color}20` }}
              >
                <service.icon 
                  className="w-8 h-8" 
                  style={{ color: service.color }}
                />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features List */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li 
                    key={featureIndex}
                    className="flex items-center text-sm text-gray-700"
                    data-aos="fade-right"
                    data-aos-delay={100 * featureIndex}
                  >
                    <div 
                      className="w-2 h-2 rounded-full mr-3 flex-shrink-0"
                      style={{ backgroundColor: service.color }}
                    ></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              <div className="absolute inset-[2px] rounded-2xl bg-white -z-10"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;