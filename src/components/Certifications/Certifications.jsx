import React from "react";
import { certifications } from "../constants";

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">CERTIFICATIONS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A showcase of my completed courses and certifications from various platforms
        </p>
      </div>

      {/* Certification Cards */}
      <div className="grid gap-10">
        {certifications.map((cert, index) => (
          <div
            key={cert.id}
            className="flex flex-col sm:flex-row items-center sm:items-start bg-gray-900 border border-white shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] rounded-2xl p-6 hover:scale-[1.02] transition-transform duration-300"
          >
            {/* Logo/Image */}
            <div className="w-24 h-24 sm:w-28 sm:h-28 bg-white rounded-md overflow-hidden flex-shrink-0">
              <img
                src={cert.img}
                alt={cert.platform}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text Content */}
            <div className="sm:ml-6 mt-4 sm:mt-0 text-center sm:text-left">
              <h3 className="text-xl sm:text-2xl font-semibold text-white">
                {cert.title}
              </h3>
              <p className="text-gray-300 text-sm sm:text-base">
                {cert.platform}
              </p>
              <p className="text-gray-500 text-sm mt-1">{cert.date}</p>
              <p className="mt-3 text-gray-400">{cert.desc}</p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-4 py-2 text-sm font-medium rounded-lg border border-gray-400 text-gray-300 bg-[#8245ec] hover:bg-purple-600 transition-colors"
              >
                View Certificate
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
