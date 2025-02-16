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
        className="fixed top-40 right-10 bg-[#8b5e34] text-white px-4 py-2 rounded-lg shadow-md hover:bg-[#6e3f1b] transition duration-300"
      >
        Download Menu
      </button>
    </div>
  );
}

export default MenuStyled;
