import React from 'react';
import { FileText } from 'lucide-react'; // Using lucide-react for icons

// Main App component that renders the Services section
const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 font-inter">
      <Services />
    </div>
  );
};

const Services = () => {
  return (
    // Main container for the services section, with max-width and auto margins for centering
    <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
      {/* Section Title */}
      <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 rounded-lg">
        My Services
      </h1>
      {/* Section Subtitle */}
      <p className="text-lg sm:text-xl text-gray-600 mb-12 rounded-lg">
        Website that shows uniquness, one page at a time.
      </p>

      {/* Responsive grid/flex container for service blocks */}
      {/* On small screens (default), it's a column layout with gap-8 */}
      {/* On medium screens (md), it becomes a grid with 2 columns */}
      {/* On large screens (lg), it becomes a grid with 3 columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Service Block 1 */}
        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
          {/* Icon/Image */}
          {/* Using lucide-react icon as a robust alternative to file.svg */}
          <img src="/first.svg" className="text-blue-600 mb-4" size={48} />
          {/* Fallback for Image if needed, though lucide is preferred here */}
          {/* <img src="https://placehold.co/40x40/000000/FFFFFF?text=File" alt='file' className="mb-4 rounded-lg" /> */}
          
          {/* Service Block Title */}
          <h3 className="text-2xl font-semibold text-gray-800 mb-3 rounded-lg">
            What I can do for you
          </h3>
          {/* Service Block Description */}
          <p className="text-gray-600 mb-4 rounded-lg">
            Faster, better Pages that your users love. Here's all the services I provide:
          </p>
          {/* Service List */}
          <ul className="text-gray-700 space-y-2 list-none p-0 rounded-lg">
            <li className="bg-gray-100 py-1 px-3 rounded-md">Web Development</li>
            <li className="bg-gray-100 py-1 px-3 rounded-md">Web and Mobile App Development</li>
            <li className="bg-gray-100 py-1 px-3 rounded-md">Debugging</li>
          </ul>
        </div>

        {/* Service Block 2 (Identical structure for consistency) */}
        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
          <img src="/first2.svg" className="text-green-600 mb-4" size={48} />
          <h3 className="text-2xl font-semibold text-gray-800 mb-3 rounded-lg">
            What I can do for you
          </h3>
          <p className="text-gray-600 mb-4 rounded-lg">
            Beautiful and animated Websites that your users would always want to use. 
          </p>
          <ul className="text-gray-700 space-y-2 list-none p-0 rounded-lg">
            <li className="bg-gray-100 py-1 px-3 rounded-md">User Research & Testing</li>
            <li className="bg-gray-100 py-1 px-3 rounded-md">Website Animations</li>
            <li className="bg-gray-100 py-1 px-3 rounded-md">Landing page Development</li>
          </ul>
        </div>

        {/* Service Block 3 (Identical structure for consistency) */}
        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
          <img src="/first3.svg" className="text-purple-600 mb-4" size={48} />
          <h3 className="text-2xl font-semibold text-gray-800 mb-3 rounded-lg">
            What I can do for you
          </h3>
          <p className="text-gray-600 mb-4 rounded-lg">
            Faster, better products that your users love. Here's all the services I provide:
          </p>
          <ul className="text-gray-700 space-y-2 list-none p-0 rounded-lg">
            <li className="bg-gray-100 py-1 px-3 rounded-md">Brand Identity Design</li>
            <li className="bg-gray-100 py-1 px-3 rounded-md">Content Strategy</li>
            <li className="bg-gray-100 py-1 px-3 rounded-md">Accessibility Audits</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App; // Exporting App as the default component
