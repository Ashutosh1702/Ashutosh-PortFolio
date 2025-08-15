import React from "react";
import { education } from "../../constants"; // Import the education data
import { useTheme } from "../../contexts/ThemeContext";

const Education = () => {
  const { isDarkMode } = useTheme();
  return (
    <section
      id="education"
      className={`py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans ${
        isDarkMode ? 'bg-skills-gradient clip-path-custom-3' : 'bg-gray-50'
      }`}
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className={`text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className={`mt-4 text-lg font-semibold ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          My education has been a journey of learning and development. Here are the details of my academic background
        </p>
      </div>

      {/* Education Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className={`absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 h-full ${
          isDarkMode ? 'bg-white' : 'bg-gray-400'
        }`}></div>

        {/* Education Entries */}
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`flex flex-col sm:flex-row items-center mb-16 ${
              index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
            }`}
          >
            {/* Timeline Circle */}
            <div className={`absolute sm:left-1/2 left-0 transform -translate-x-1/2 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10 p-1 ${
              isDarkMode ? 'bg-white' : 'bg-gray-100'
            }`}>
              <img
                src={edu.img}
                alt={edu.school}
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
                {/* School Logo/Image */}
                <div className="w-24 h-16 bg-white rounded-md overflow-hidden flex items-center justify-center p-2">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>

                {/* Degree, School Name, and Date */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className={`text-xl sm:text-xl font-semibold ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {edu.degree}
                    </h3>
                    <h4 className={`text-md sm:text-sm ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {edu.school}
                    </h4>
                  </div>
                  {/* Date at the bottom */}
                  <p className={`text-sm mt-2 ${
                    isDarkMode ? 'text-gray-500' : 'text-gray-500'
                  }`}>{edu.date}</p>
                </div>
              </div>

              <p className={`mt-4 font-bold ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>Grade: {edu.grade}</p>
              <p className={`mt-4 ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>{edu.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
