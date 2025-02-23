import React, { useState } from "react";

function Filter({ sections, selectedSection, onSelectSection }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop View: Always show filter buttons */}
      <div className="hidden md:flex justify-center mb-8 space-x-4">
        {sections.map((section, idx) => (
          <button
            key={idx}
            onClick={() => onSelectSection(section)}
            className={`px-4 py-2 rounded-lg shadow-md transition duration-300 text-center font-semibold ${
              selectedSection === section
                ? "bg-[#8b5e34] text-white"
                : "bg-white text-[#8b5e34] border border-[#8b5e34]"
            }`}
          >
            {section}
          </button>
        ))}
      </div>

      {/* Mobile View: Show a "Filters" button that toggles the filter list */}
      <div className="md:hidden flex flex-col items-center mb-8">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="px-4 py-2 rounded-lg shadow-md transition duration-300 text-center font-semibold bg-[#8b5e34] text-white"
        >
          Filters
        </button>
        {isOpen && (
          <div className="mt-4 flex flex-wrap justify-center gap-4">
            {sections.map((section, idx) => (
              <button
                key={idx}
                onClick={() => {
                  onSelectSection(section);
                  setIsOpen(false);
                }}
                className={`px-4 py-2 rounded-lg shadow-md transition duration-300 text-center font-semibold ${
                  selectedSection === section
                    ? "bg-[#8b5e34] text-white"
                    : "bg-white text-[#8b5e34] border border-[#8b5e34]"
                }`}
              >
                {section}
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Filter;
