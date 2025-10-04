"use client"; // Required because we use hooks

import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", message: "" });

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappMessage = `Hello, my name is ${formData.name}. 
Here is my message: ${formData.message}`;

    const phoneNumber = "2349034982572";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <section
      id="contact"
      className="py-20 bg-white rounded-xl shadow-md mt-16 text-gray-800 transition-colors duration-500"
      data-aos="fade-up"
    >
      <div className="container mx-auto px-4 text-center">
        {/* Title */}
        <h2
          className="text-4xl font-bold mb-6 text-gray-900"
          data-aos="fade-down"
        >
          Get in Touch!
        </h2>
        <p
          className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto"
          data-aos="zoom-in"
        >
          I'm always open to new opportunities and collaborations.
        </p>

        {/* Contact Form */}
        <div
          className="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-lg border border-gray-200"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <h3 className="text-2xl font-semibold mb-6 text-gray-900">
            Send Me a Message
          </h3>
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name Field */}
            <div data-aos="fade-right">
              <label
                htmlFor="name"
                className="block text-left text-gray-700 text-sm font-medium mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-gray-50 text-gray-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 shadow-sm"
                placeholder="Your Name"
                required
              />
            </div>

            {/* Message Field */}
            <div data-aos="zoom-in">
              <label
                htmlFor="message"
                className="block text-left text-gray-700 text-sm font-medium mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-gray-50 text-gray-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 shadow-sm"
                placeholder="Your message..."
                required
              ></textarea>
            </div>

            {/* WhatsApp Button */}
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500"
              data-aos="zoom-in-up"
            >
              Send via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
