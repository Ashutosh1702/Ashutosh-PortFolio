import React, { useState } from "react";
import { projects } from "../../constants";
import { useTheme } from "../../contexts/ThemeContext";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const { isDarkMode } = useTheme();

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id="work"
      className={`py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative ${
        isDarkMode ? '' : 'bg-white'
      }`}
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className={`text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>PROJECTS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className={`mt-4 text-lg font-semibold ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </p>
      </div>

      {/* All Projects - Featured Layout */}
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className={`border-2 border-purple-500 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-2 transition-all duration-300 h-full flex flex-col ${
              isDarkMode 
                ? 'bg-gradient-to-br from-gray-900 to-gray-800' 
                : 'bg-white shadow-lg'
            }`}
          >
            {/* Featured Badge */}
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs font-bold px-3 py-1 text-center">
              {index === 0 ? "⭐ FEATURED PROJECT" : "🚀 FEATURED PROJECT"}
            </div>
            
            <div className="p-4">
              <img
                src={project.image}
                alt={project.title}
                className={`w-full h-52 object-contain rounded-xl ${
                  isDarkMode 
                    ? 'bg-gradient-to-br from-purple-900/20 to-blue-900/20' 
                    : 'bg-gradient-to-br from-purple-100/50 to-blue-100/50'
                }`}
              />
            </div>
            
            <div className="p-5 flex-grow flex flex-col">
              <h3 className={`text-2xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                {project.title}
              </h3>
              
              <p className={`mb-4 text-sm line-clamp-3 flex-grow ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {project.description}
              </p>
              
              <div className="mb-4">
                {project.tags.slice(0, 4).map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs font-semibold rounded-full px-2 py-1 mr-2 mb-2"
                  >
                    {tag}
                  </span>
                ))}
                {project.tags.length > 4 && (
                  <span className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                    +{project.tags.length - 4} more
                  </span>
                )}
              </div>
              
              {/* Action buttons for all projects */}
              <div className="flex gap-2 mt-auto">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className={`flex-1 px-3 py-2 rounded-lg text-sm font-semibold text-center transition-all duration-300 ${
                    isDarkMode 
                      ? 'bg-gray-800 hover:bg-purple-800 text-gray-300 hover:text-white' 
                      : 'bg-gray-100 hover:bg-purple-100 text-gray-700 hover:text-purple-800 border border-gray-300'
                  }`}
                >
                  View Code
                </a>
                <a
                  href={project.webapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-3 py-2 rounded-lg text-sm font-semibold text-center transition-all duration-300"
                >
                  View Live
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Container */}
      {selectedProject && (
        <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 ${
          isDarkMode ? 'bg-black bg-opacity-90' : 'bg-gray-900 bg-opacity-75'
        }`}>
          <div className={`rounded-xl shadow-2xl lg:w-full w-[90%] max-w-3xl overflow-hidden relative ${
            isDarkMode ? 'bg-gray-900' : 'bg-white'
          }`}>
            <div className="flex justify-end p-4">
              <button
                onClick={handleCloseModal}
                className={`text-3xl font-bold hover:text-purple-500 ${
                  isDarkMode ? 'text-white' : 'text-gray-700'
                }`}
              >
                &times;
              </button>
            </div>

            <div className="flex flex-col">
              <div className={`w-full flex justify-center px-4 ${
                isDarkMode ? 'bg-gray-900' : 'bg-gray-50'
              }`}>
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="lg:w-full w-[95%] object-contain rounded-xl shadow-2xl"
                />
              </div>
              <div className="lg:p-8 p-6">
                <h3 className={`lg:text-3xl font-bold mb-4 text-md ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {selectedProject.title}
                </h3>
                <p className={`mb-6 lg:text-base text-xs ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {selectedProject.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className={`text-xs font-semibold rounded-full px-2 py-1 ${
                        isDarkMode 
                          ? 'bg-[#251f38] text-purple-500' 
                          : 'bg-purple-100 text-purple-700'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-1/2 lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center transition-all duration-300 ${
                      isDarkMode 
                        ? 'bg-gray-800 hover:bg-purple-800 text-gray-400 hover:text-white' 
                        : 'bg-gray-100 hover:bg-purple-100 text-gray-700 hover:text-purple-800 border border-gray-300'
                    }`}
                  >
                    View Code
                  </a>
                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 bg-purple-600 hover:bg-purple-800 text-white lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center transition-all duration-300"
                  >
                    View Live
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
