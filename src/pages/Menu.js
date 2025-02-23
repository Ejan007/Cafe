import React, { useState } from "react";
import menuData from "../data/menuData";
import Filter from "../components/Filter";

function MenuStyled() {
  const [selectedSection, setSelectedSection] = useState("");

  const sections = menuData.map((section) => section.section);

  const filteredMenuData = selectedSection
    ? menuData.filter((section) => section.section === selectedSection)
    : menuData;

  const handleDownload = () => {
    // Replace with the actual path to your PDF file
    const link = document.createElement('a');
    link.href = 'menu.pdf';
    link.download = 'menu.pdf';
    link.click();
  };

  return (
    <div className="min-h-screen w-full bg-[#f5e6d3] text-[#333] font-serif relative">
      <div className="max-w-5xl mx-auto py-10 px-4 sm:px-6 lg:px-8 shadow-lg rounded-lg">
        <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#a67c52] via-[#8b5e34] to-[#6e3f1b]">
          Our Menu
        </h1>

        <Filter
          sections={sections}
          selectedSection={selectedSection}
          onSelectSection={setSelectedSection}
        />

        {filteredMenuData.map((section, idx) => (
          <section key={idx} className="mb-12">
            <h2 className="text-2xl font-semibold uppercase tracking-widest text-center mb-6 text-[#8b5e34]">
              {section.section}
            </h2>
            <div className="space-y-6">
              {section.items.map((item, i) => (
                <div
                  key={i}
                  className="pb-4 mb-4 border-b border-dotted border-gray-300 bg-white p-4 rounded-lg shadow-md"
                >
                  <div className="flex justify-between items-center w-full">
                    <h3 className="font-bold text-lg text-[#8b5e34] text-center flex-1">{item.title}</h3>
                    {item.price && (
                      <p className="text-sm font-semibold text-gray-800 ml-auto">
                        {item.price}                       
                      </p>
                    )}
                  </div>
                  {item.description && (
                    <p className="text-sm text-gray-700 mt-1 text-center">{item.description}</p>
                  )}
                </div>
              ))}
            </div>
          </section>
        ))}
        <p className="text-xs text-center text-gray-500 mt-10">
          Please inform staff of any allergy or dietary requirements.
          Weekend Surcharge 10% and Public Holiday 15% Surcharge applies.
        </p>
      </div>
      <button
        onClick={handleDownload}
        className="fixed bottom-5 right-5 z-50 bg-gradient-to-r from-[#a67c52] to-[#6e3f1b] text-white px-3 py-2 text-xs md:px-6 md:py-3 md:text-base rounded-full shadow-xl hover:scale-105 transform transition duration-300 flex items-center space-x-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V3"
          />
        </svg>
        <span>Download Menu</span>
      </button>
    </div>
  );
}

export default MenuStyled;
