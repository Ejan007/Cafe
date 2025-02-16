import React from "react";

function Filter({ sections, selectedSection, onSelectSection }) {
  return (
    <div className="flex justify-center mb-8 space-x-4">
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
  );
}

export default Filter;