"use client";

import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaTwitter, FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: 'ease-out-cubic' });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappMessage = `Hello, my name is ${formData.name}. ${formData.email ? `My email is ${formData.email}.` : ''} Here is my message: ${formData.message}`;
    const phoneNumber = "2349034982572";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappURL, "_blank");
  };

  const socialLinks = [
    { icon: FaTwitter, url: "https://x.com/Alisha__O", color: "hover:text-blue-400" },
    { icon: FaLinkedin, url: "https://www.linkedin.com/in/alisha-ogwara-191b5934a/", color: "hover:text-blue-600" },
    { icon: FaGithub, url: "https://github.com/Ogfejiro", color: "hover:text-gray-700" },
  ];

  const contactMethods = [
    {
      icon: FaWhatsapp,
      label: "WhatsApp",
      value: "+234 903 498 2572",
      action: () => window.open(`https://wa.me/2349034982572`, "_blank"),
      color: "text-green-500"
    },
    {
      icon: FaEnvelope,
      label: "Email",
      value: "ogwaraprecious8@gmail",
      action: () => window.location.href = "mailto:ogwaraprecious8@gmail.com",
      color: "text-red-500"
    },
    {
      icon: FaMapMarkerAlt,
      label: "Location",
      value: "Nigeria",
      action: null,
      color: "text-blue-500"
    }
  ];

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white overflow-hidden py-20"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full -translate-x-48 -translate-y-48"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100 rounded-full translate-x-48 translate-y-48"></div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Header */}
        <div
          className="text-center mb-16"
          data-aos="fade-up"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? Let's create something amazing together. 
            I'm always excited to take on new challenges and build exceptional digital experiences.
          </p>
          <div className="h-1 w-24 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mt-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div
            className="space-y-8"
            data-aos="fade-right"
          >
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Whether you have a project in mind, need technical consultation, 
                or just want to connect, I'd love to hear from you. Let's start a conversation!
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <div
                  key={method.label}
                  className={`flex items-center p-4 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 ${method.action ? 'cursor-pointer hover:scale-105' : ''}`}
                  onClick={method.action}
                  data-aos="fade-right"
                  data-aos-delay={100 * index}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-4 ${method.color} bg-gray-50`}>
                    <method.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{method.label}</div>
                    <div className="text-gray-600">{method.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div
              className="pt-6"
              data-aos="fade-right"
              data-aos-delay="400"
            >
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-gray-600 text-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-110 ${social.color}`}
                  >
                    <social.icon />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-2">Send a Message</h3>
            <p className="text-gray-600 mb-8">Let's discuss your project needs</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Message *
                </label>
                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, timeline, and any specific requirements..."
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-vertical"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <span className="flex items-center justify-center gap-3">
                  <FaWhatsapp className="w-5 h-5" />
                  Send via WhatsApp
                </span>
              </button>

              <p className="text-sm text-gray-500 text-center mt-4">
                Your message will be sent directly to my WhatsApp for quick response
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;