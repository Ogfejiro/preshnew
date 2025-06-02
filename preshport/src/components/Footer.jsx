"use client"; // This directive is necessary if you were to add any client-side interactivity

import React from 'react';

const Footer = ({ name, linkedin, github }) => {
  return (
    <footer className="bg-white py-12 shadow-inner mt-16">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-700 text-lg mb-4">
          &copy; {new Date().getFullYear()} {name}. All rights reserved.
        </p>
        <div className="flex justify-center items-center space-x-6 mb-8">
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 transition-colors duration-300 transform hover:scale-110"
            aria-label="LinkedIn Profile"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition-colors duration-300 transform hover:scale-110"
            aria-label="GitHub Profile"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.529 2.341 1.088 2.91.829.092-.64.359-1.088.65-1.338-2.22-.253-4.555-1.113-4.555-4.93 0-1.091.39-1.984 1.029-2.682-.103-.253-.446-1.272.098-2.65 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0112 6.865c.85.004 1.7.115 2.5.352 1.909-1.29 2.747-1.022 2.747-1.022.546 1.379.202 2.398.099 2.65.64.698 1.028 1.591 1.028 2.682 0 3.829-2.339 4.673-4.566 4.92.359.307.678.915.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.59.688.482C21.137 20.218 24 16.463 24 12.017 24 6.484 19.522 2 14 2h-2z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
        <p className="text-gray-500 text-sm">
          Designed and built with passion.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
