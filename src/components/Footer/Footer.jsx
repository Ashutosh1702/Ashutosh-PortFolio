import React from "react";
import { FaLinkedin, FaGithub, FaPhone, FaEnvelope } from "react-icons/fa";
import { useTheme } from "../../contexts/ThemeContext";

const Footer = () => {
  const { isDarkMode } = useTheme();
  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className={`py-8 px-[12vw] md:px-[7vw] lg:px-[20vw] ${
      isDarkMode ? 'text-white' : 'text-gray-900 bg-gray-50'
    }`}>
      <div className="container mx-auto text-center">
        {/* Name / Logo */}
        <h2 className="text-xl font-semibold text-purple-500">Ashutosh Kumar</h2>

        {/* Navigation Links - Responsive */}
        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "projects" },
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className={`hover:text-purple-500 text-sm sm:text-base my-1 ${
                isDarkMode ? 'text-white' : 'text-gray-700'
              }`}
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Media Icons - Responsive */}
        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          {[
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/ashutosh-kumar-791887276/" },
            { icon: <FaGithub />, link: "https://github.com/Ashutosh1702" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-xl hover:text-purple-500 transition-transform transform hover:scale-110 ${
                isDarkMode ? 'text-white' : 'text-gray-700'
              }`}
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Contact Information */}
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 mt-6">
          <div className={`flex items-center space-x-2 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            <FaPhone className="text-purple-500" />
            <a href="tel:+917779883377" className="hover:text-purple-500 transition-colors">
              +91 7779883377
            </a>
          </div>
          <div className={`flex items-center space-x-2 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            <FaEnvelope className="text-purple-500" />
            <a href="mailto:ashucreater06@gmail.com" className="hover:text-purple-500 transition-colors">
              ashucreater06@gmail.com
            </a>
          </div>
        </div>

        {/* Copyright Text */}
        <p className="text-sm text-gray-400 mt-6">
          © 2025 Ashutosh Kumar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
