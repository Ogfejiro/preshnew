"use client"; // This directive is necessary because this component uses useState

import React, { useState } from 'react';

const Contact = ({ name, linkedin, github }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');
    // In a real application, you would send this data to a backend service
    // For demonstration, we'll just simulate a delay and success/failure
    setTimeout(() => {
      if (formData.name && formData.email && formData.message) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // Clear form
      } else {
        setStatus('Please fill in all fields.');
      }
    }, 1500);
  };

  return (
    // Changed background to white and adjusted text colors for contrast
    <section id="contact" className="py-16 bg-white rounded-xl shadow-2xl mt-16 text-gray-800">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6 text-gray-900">Get in Touch!</h2>
        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
          I'm always open to new opportunities and collaborations. Feel free to connect with me!
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            LinkedIn
          </a>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-gray-700 hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.529 2.341 1.088 2.91.829.092-.64.359-1.088.65-1.338-2.22-.253-4.555-1.113-4.555-4.93 0-1.091.39-1.984 1.029-2.682-.103-.253-.446-1.272.098-2.65 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0112 6.865c.85.004 1.7.115 2.5.352 1.909-1.29 2.747-1.022 2.747-1.022.546 1.379.202 2.398.099 2.65.64.698 1.028 1.591 1.028 2.682 0 3.829-2.339 4.673-4.566 4.92.359.307.678.915.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.59.688.482C21.137 20.218 24 16.463 24 12.017 24 6.484 19.522 2 14 2h-2z" clipRule="evenodd" />
            </svg>
            GitHub
          </a>
        </div>

        <div className="max-w-md mx-auto bg-gray-100 p-8 rounded-lg shadow-xl">
          <h3 className="text-2xl font-semibold mb-6 text-gray-900">Send Me a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-left text-gray-700 text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md bg-white text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-left text-gray-700 text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md bg-white text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="you@example.com"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-left text-gray-700 text-sm font-medium mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md bg-white text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your message..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-100"
            >
              Send Message
            </button>
            {status && <p className="mt-4 text-sm text-gray-700">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
