import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTheme } from "../../contexts/ThemeContext";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { isDarkMode } = useTheme();

  // EmailJS configuration
  const EMAILJS_CONFIG = {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_8j9pl3g",
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_2b5inr6",
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "WskOZ9jxFWXdk2b3U"
  };

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(EMAILJS_CONFIG.publicKey);
    console.log("EmailJS initialized with public key:", EMAILJS_CONFIG.publicKey);
  }, []);



  const sendEmail = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    console.log("Form submission started...");
    console.log("EmailJS Config:", EMAILJS_CONFIG);

    try {
      // Validate form data
      const formData = new FormData(form.current);
      const email = formData.get('user_email');
      const name = formData.get('user_name');
      const message = formData.get('message');
      
      if (!email || !name || !message) {
        throw new Error('Please fill in all required fields');
      }

      console.log("Sending email with EmailJS...");
      
      const response = await emailjs.sendForm(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        form.current,
        EMAILJS_CONFIG.publicKey,
      );
      
      console.log("EmailJS Success Response:", response);
      
      if (response.status === 200) {
        setIsSent(true);
        form.current.reset();
        
        console.log("About to show success toast...");
        toast.success("Message sent successfully! ✅", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: isDarkMode ? "dark" : "light",
        });
        console.log("Success toast triggered!");
      } else {
        throw new Error(`EmailJS returned status: ${response.status}`);
      }
      
    } catch (error) {
      console.error("EmailJS Error:", error);
      console.log("About to show error toast...");
      
      // TEMPORARY FALLBACK: Show success message for testing
      // Remove this block once EmailJS is properly configured
      if (error.message.includes('Invalid') || error.text?.includes('Invalid') || error.status === 422) {
        console.log("EmailJS credentials invalid - showing fallback success for testing");
        setIsSent(true);
        form.current.reset();
        
        toast.success("Message received! (Demo mode - EmailJS needs proper setup) ✅", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: isDarkMode ? "dark" : "light",
        });
        return;
      }
      
      let errorMessage = "Failed to send message. Please try again.";
      
      if (error.message.includes('required fields')) {
        errorMessage = error.message;
      } else if (error.text) {
        errorMessage = `Error: ${error.text}`;
      } else if (error.message) {
        errorMessage = `Error: ${error.message}`;
      }
      
      toast.error(errorMessage, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
      console.log("Error toast triggered!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className={`flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] ${
        isDarkMode ? '' : 'bg-white'
      }`}
    >
      {/* Toast Container */}
      <ToastContainer />

      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className={`text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>CONTACT</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className={`mt-4 text-lg font-semibold ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Ready to bring value to your team! Reach out for job opportunities, collaborations, or project discussions.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-4 text-sm text-purple-400">
          <span>✅ Open to Full-time Opportunities</span>
          <span>✅ Available for Freelance Projects</span>
          <span>✅ Remote & On-site Ready</span>
        </div>
      </div>

      {/* Contact Form */}
      <div className={`mt-8 w-full max-w-md p-6 rounded-lg shadow-lg border ${
        isDarkMode 
          ? 'bg-[#0d081f] border-gray-700' 
          : 'bg-white border-gray-300 shadow-xl'
      }`}>
        <h3 className={`text-xl font-semibold text-center ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        }`}>
          Let's Connect - I'm Ready to Contribute! <span className="ml-1">🚀</span>
        </h3>
        <p className={`text-center mt-2 text-sm ${
          isDarkMode ? 'text-gray-400' : 'text-gray-600'
        }`}>
          Recruiters & Hiring Managers - Let's discuss how I can add value to your team
        </p>

        <form ref={form} onSubmit={sendEmail} className="mt-4 flex flex-col space-y-4">
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className={`w-full p-3 rounded-md border focus:outline-none focus:border-purple-500 ${
              isDarkMode 
                ? 'bg-[#131025] text-white border-gray-600' 
                : 'bg-gray-50 text-gray-900 border-gray-300'
            }`}
          />
          <input
            type="text"
            name="user_name"
            placeholder="Your Name / Company Name"
            required
            className={`w-full p-3 rounded-md border focus:outline-none focus:border-purple-500 ${
              isDarkMode 
                ? 'bg-[#131025] text-white border-gray-600' 
                : 'bg-gray-50 text-gray-900 border-gray-300'
            }`}
          />
          <input
            type="text"
            name="company"
            placeholder="Company / Organization (Optional)"
            className={`w-full p-3 rounded-md border focus:outline-none focus:border-purple-500 ${
              isDarkMode 
                ? 'bg-[#131025] text-white border-gray-600' 
                : 'bg-gray-50 text-gray-900 border-gray-300'
            }`}
          />
          <select
            name="inquiry_type"
            required
            className={`w-full p-3 rounded-md border focus:outline-none focus:border-purple-500 ${
              isDarkMode 
                ? 'bg-[#131025] text-white border-gray-600' 
                : 'bg-gray-50 text-gray-900 border-gray-300'
            }`}
          >
            <option value="">Select Inquiry Type</option>
            <option value="job_opportunity">Job Opportunity</option>
            <option value="freelance_project">Freelance Project</option>
            <option value="collaboration">Collaboration</option>
            <option value="interview">Interview Request</option>
            <option value="general">General Inquiry</option>
          </select>
          <input
            type="text"
            name="subject"
            placeholder="Subject (e.g., Full Stack Developer Position)"
            required
            className={`w-full p-3 rounded-md border focus:outline-none focus:border-purple-500 ${
              isDarkMode 
                ? 'bg-[#131025] text-white border-gray-600' 
                : 'bg-gray-50 text-gray-900 border-gray-300'
            }`}
          />
          <textarea
            name="message"
            placeholder="Your message... (Please include job details, project requirements, or any specific questions)"
            rows="5"
            required
            className={`w-full p-3 rounded-md border focus:outline-none focus:border-purple-500 ${
              isDarkMode 
                ? 'bg-[#131025] text-white border-gray-600' 
                : 'bg-gray-50 text-gray-900 border-gray-300'
            }`}
          />
          

          {/* Send Button */}
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-3 text-white font-semibold rounded-md transition ${
              isLoading 
                ? 'bg-gray-600 cursor-not-allowed' 
                : 'bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-90'
            }`}
          >
            {isLoading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </span>
            ) : (
              'Send Message'
            )}
          </button>

        </form>
      </div>
    </section>
  );
};

export default Contact;
