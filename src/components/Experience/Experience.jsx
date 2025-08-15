import React from "react";
import { experiences } from "../../constants"; // Import your data
import { useTheme } from "../../contexts/ThemeContext";

const Experience = () => {
  const { isDarkMode } = useTheme();
  return (
    <section
      id="experience"
      className={`py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans ${
        isDarkMode ? 'bg-skills-gradient clip-path-custom-2' : 'bg-white'
      }`}
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className={`text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className={`mt-4 text-lg font-semibold ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          A collection of my work experience and the roles I have taken in
          various organizations
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className={`absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 h-full ${
          isDarkMode ? 'bg-white' : 'bg-gray-400'
        }`}></div>

        {/* Experience Entries */}
        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`flex flex-col sm:flex-row items-center mb-16 ${
              index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
            }`}
          >
            {/* Timeline Circle */}
            <div className={`absolute sm:left-1/2 left-0 transform -translate-x-1/2 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10 p-1 ${
              isDarkMode ? 'bg-white' : 'bg-gray-100'
            }`}>
              <img
                src={experience.img}
                alt={experience.company}
                className="w-full h-full object-contain rounded-full"
              />
            </div>

            {/* Content Section */}
            <div
              className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl shadow-2xl border backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] ${
                isDarkMode 
                  ? 'border-white bg-gray-900' 
                  : 'border-gray-300 bg-white'
              } ${
                index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"
              } sm:ml-44 sm:mr-44 ml-8 transform transition-transform duration-300 hover:scale-105`}
            >
              {/* Flex container for image and text */}
              <div className="flex items-center space-x-6">
                {/* Company Logo/Image */}
                <div className="w-16 h-16 bg-white rounded-md overflow-hidden flex items-center justify-center p-2">
                  <img
                    src={experience.img}
                    alt={experience.company}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>

                {/* Role, Company Name, and Date */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className={`text-xl sm:text-2xl font-semibold ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {experience.role}
                    </h3>
                    <h4 className={`text-md sm:text-sm ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {experience.company}
                    </h4>
                  </div>
                  {/* Date at the bottom */}
                  <p className={`text-sm mt-2 ${
                    isDarkMode ? 'text-gray-500' : 'text-gray-500'
                  }`}>{experience.date}</p>
                </div>
              </div>

              <p className={`mt-4 ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>{experience.desc}</p>
              <div className="mt-4">
                <h5 className={`font-medium ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>Skills:</h5>
                <ul className="flex flex-wrap mt-2">
                  {experience.skills.map((skill, index) => (
                    <li
                      key={index}
                      className={`bg-[#8245ec] px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border ${
                        isDarkMode 
                          ? 'text-gray-300 border-gray-400' 
                          : 'text-white border-gray-300'
                      }`}
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
