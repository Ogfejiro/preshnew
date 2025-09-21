"use client"; // This directive marks the component as a Client Component

import React, { useState, useMemo } from "react";

// ✅ Project Card component
const ProjectCard = ({ project }) => (
  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl flex flex-col">
    <img
      src={project.imageUrl}
      alt={project.name}
      className="w-full h-48 object-cover"
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = `https://placehold.co/400x250/E2E8F0/475569?text=Image+Error`;
      }}
    />
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
        {project.name}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-grow">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs font-medium rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-200 text-center mt-auto"
      >
        View Project
      </a>
    </div>
  </div>
);

// ✅ Pagination component
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="flex justify-start items-center space-x-2 mt-8 font-inter">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 shadow-sm"
      >
        Previous
      </button>
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => onPageChange(number)}
          className={`px-4 py-2 rounded-md transition-colors duration-200 shadow-sm
            ${
              currentPage === number
                ? "bg-blue-600 text-white shadow-md"
                : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600"
            }`}
        >
          {number}
        </button>
      ))}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 shadow-sm"
      >
        Next
      </button>
    </nav>
  );
};

// ✅ Main Project Component
const Project = () => {
  // Demo project data with links
  const projects = useMemo(
    () => [
      {
        id: "1",
        name: "Automobile landing-page",
        description:
          "A landing page for a car manufacturer, fully animated showcasing every activity of the company.",
        imageUrl: "./project 1.png",
        tags: ["React", "Firebase", "Tailwindcss"],
        link: "https://gisjohnsonautolocksmith.com/",
      },
      {
        id: "2",
        name: "An Autolocksmith landing-page",
        description:
          "A simple landing page of a locksmith company, showcasing every activity in the companies.",
        imageUrl: "./project 2.png",
        tags: ["Next.js", "Firebase", "Tailwind CSS"],
        link: "https://willowy-shortbread-3ded26.netlify.app/",
      },
      {
        id: "3",
        name: "Admin dashboard",
        description:
          "A dynamic admin-dashboard that shows real-time data information of a company using a third-party API.",
        imageUrl: "./dashboard.jpg",
        tags: ["Next.js", "Tailwindcss", "Shadcn"],
        link: "https://admin-eofj.vercel.app/",
      },
      {
        id: "4",
        name: "A loan app",
        description:
          "A loan app that helps loan companies know if you are eligible for a loan.",
        imageUrl: "./project 3.png",
        tags: ["Next.js, Tailwindcss, TypeScript"],
        link: "https://loanwise-b-team.vercel.app/",
      },
      {
        id: "5",
        name: "ZealTaste Foods",
        description:
          "A clone replica of an application that allows users to order food from a food brand based on dietary preferences.",
        imageUrl: "./zeal.jpg",
        tags: ["React", "Redux", "Spoonacular API"],
        link: "https://your-demo-url.com/recipe-finder",
      },
    ],
    []
  );

  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 3;

  // Total pages
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  // Get projects for the current page
  const currentProjects = useMemo(() => {
    const startIndex = (currentPage - 1) * projectsPerPage;
    const endIndex = startIndex + projectsPerPage;
    return projects.slice(startIndex, endIndex);
  }, [currentPage, projects, projectsPerPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-500 p-4 sm:p-8 font-inter text-gray-900 dark:text-white">
      <header className="text-center py-10">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">My Projects</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Explore a collection of my recent works, showcasing my skills in web
          development and design.
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
          <p className="text-center text-gray-600 dark:text-gray-300 text-lg py-10">
            No projects to display.
          </p>
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
