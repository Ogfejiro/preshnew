"use client"; // This directive marks the component as a Client Component

import React, { useState, useMemo } from 'react';
// If you're using @next/font/google, you might import it here:
// import { Inter } from 'next/font/google';
// const inter = Inter = Inter({ subsets: ['latin'] });

// Project Card component (can be moved to a separate file like components/ProjectCard.jsx)
const ProjectCard = ({ project }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl flex flex-col">
    <img
      src={project.imageUrl}
      alt={project.name}
      className="w-full h-48 object-cover"
      onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/400x250/E2E8F0/475569?text=Image+Error`; }}
    />
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.name}</h3>
      <p className="text-gray-600 text-sm mb-4 flex-grow">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag, index) => (
          <span key={index} className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
            {tag}
          </span>
        ))}
      </div>
      <a
        href="#" // Replace with actual project link, consider using Next.js <Link> component
        className="inline-block bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-200 text-center mt-auto"
      >
        View Project
      </a>
    </div>
  </div>
);

// Pagination component (can be moved to a separate file like components/Pagination.jsx)
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    // Changed justify-center to justify-start to align pagination to the left
    <nav className="flex justify-start items-center space-x-2 mt-8 font-inter">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 shadow-sm"
      >
        Previous
      </button>
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => onPageChange(number)}
          className={`px-4 py-2 rounded-md transition-colors duration-200 shadow-sm
            ${currentPage === number
              ? 'bg-blue-600 text-white shadow-md'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
        >
          {number}
        </button>
      ))}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 shadow-sm"
      >
        Next
      </button>
    </nav>
  );
};


// The main ProjectPage component
const Project = () => {
  // Demo project data
  const projects = useMemo(() => [
    {
      id: '1',
      name: 'Automobile landing-page',
      description: 'A landing page for a car manufacturer, fully animated showcasing every activity of the company.',
      imageUrl: './project 1.png',
      tags: ['React', 'Firebase', 'Tailwindcss'],
    },
    {
      id: '2',
      name: 'An Autolocksmith landing-page',
      description: 'A simple landing page of an locksmith company, showcasing every activity in the companies.',
      imageUrl: './project 2.png',
      tags: ['Next.js', 'Firebase', 'Tailwind CSS'],
    },
    {
      id: '3',
      name: 'Weather Dashboard',
      description: 'A dynamic weather dashboard that displays real-time weather information for any city using a third-party API.',
      imageUrl: './project 3.png',
      tags: ['JavaScript', 'HTML', 'CSS', 'OpenWeatherMap API'],
    },
    {
      id: '4',
      name: 'Personal Blog Site',
      description: 'A responsive personal blog site with a clean design, markdown support, and comment sections.',
      imageUrl: 'https://placehold.co/400x250/94A3B8/94A3B8?text=Project+4',
      tags: ['Gatsby', 'GraphQL', 'Netlify CMS'],
    },
    {
      id: '5',
      name: 'Recipe Finder',
      description: 'An application that allows users to search for recipes based on ingredients and dietary preferences.',
      imageUrl: 'https://placehold.co/400x250/64748B/E2E8F0?text=Project+5',
      tags: ['React', 'Redux', 'Spoonacular API'],
    },
    {
      id: '6',
      name: 'Portfolio Website',
      description: 'A modern and interactive portfolio website showcasing various projects, skills, and contact information.',
      imageUrl: 'https://placehold.co/400x250/475569/F0F4F8?text=Project+6',
      tags: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    },
    {
      id: '7',
      name: 'Chat Application',
      description: 'A real-time chat application with user authentication, private messaging, and group chat features.',
      imageUrl: 'https://placehold.co/400x250/334155/CBD5E1?text=Project+7',
      tags: ['React', 'Socket.IO', 'Express.js'],
    },
    {
      id: '8',
      name: 'Expense Tracker',
      description: 'A simple expense tracker to help users manage their finances by logging income and expenses.',
      imageUrl: 'https://placehold.co/400x250/1E293B/94A3B8?text=Project+8',
      tags: ['Angular', 'TypeScript', 'IndexedDB'],
    },
    {
      id: '9',
      name: 'Movie Database',
      description: 'A comprehensive movie database application with search, filter, and detailed movie information.',
      imageUrl: 'https://placehold.co/400x250/0F172A/64748B?text=Project+9',
      tags: ['React Native', 'TheMovieDB API'],
    },
    {
      id: '10',
      name: 'Online Quiz Platform',
      description: 'An interactive online quiz platform with multiple categories, scoring, and leaderboards.',
      imageUrl: 'https://placehold.co/400x250/F0F4F8/334155?text=Project+10',
      tags: ['Svelte', 'Node.js', 'PostgreSQL'],
    },
    {
      id: '11',
      name: 'Fitness Tracker',
      description: 'An application to track fitness activities, set goals, and monitor progress over time.',
      imageUrl: 'https://placehold.co/400x250/E2E8F0/475569?text=Project+11',
      tags: ['React', 'Firebase', 'Chart.js'],
    },
    {
      id: '12',
      name: 'Book Recommendation System',
      description: 'A system that recommends books to users based on their reading history and preferences.',
      imageUrl: 'https://placehold.co/400x250/CBD5E1/64748B?text=Project+12',
      tags: ['Python', 'Flask', 'Machine Learning'],
    },
  ], []);

  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 3; // Number of projects to display per page

  // Calculate total pages
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  // Get projects for the current page
  const currentProjects = useMemo(() => {
    const startIndex = (currentPage - 1) * projectsPerPage;
    const endIndex = startIndex + projectsPerPage;
    return projects.slice(startIndex, endIndex);
  }, [currentPage, projects, projectsPerPage]);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Scroll to top of the project list when page changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    // Changed background to a dark gradient and adjusted text colors for contrast
    <div className="min-h-screen  p-4 sm:p-8 font-inter text-white">
      <header className="text-center py-10">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-white">My Projects</h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Explore a collection of my recent works, showcasing my skills in web development and design.
        </p>
      </header>

      <main className="container mx-auto px-4">
        {currentProjects.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-300 text-lg py-10">No projects to display.</p>
        )}

        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
      </main>

      
    </div>
  );
};

export default Project;
