import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-8 px-[8vw] border-t border-gray-800">
      <div className="flex flex-col md:flex-row justify-between items-center">
        
        {/* Left Side */}
        <p className="text-sm text-center md:text-left mb-4 md:mb-0">
          © {new Date().getFullYear()} Dibyajyoti Newar. All rights reserved.
        </p>

        {/* Right Side - Social Links */}
        <div className="flex space-x-6 text-xl">
          <a
            href="https://github.com/Dibyajyoti-newar"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#8245ec] transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/dibyajyoti-newar"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#8245ec] transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:dibyajyotinewar709@gmail.com"
            className="hover:text-[#8245ec] transition-colors"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
