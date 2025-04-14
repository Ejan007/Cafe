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
    const link = document.createElement("a");
    link.href = "menu.pdf";
    link.download = "menu.pdf";
    link.click();
  };

  return (
    <div className="min-h-screen w-full bg-[#faf6f1] text-[#2d1810] font-manrope">
      {/* Hero Section with Background */}
      <div className="w-full bg-[#8b5e34]/10 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#8b5e34] via-[#a67c52] to-[#6e3f1b]">
            Our Menu
          </h1>
          
          {/* Filter Section */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => setSelectedSection(section === selectedSection ? "" : section)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 border-2 
                  ${selectedSection === section 
                    ? 'bg-[#8b5e34] text-white border-[#8b5e34]' 
                    : 'bg-white text-[#8b5e34] border-[#8b5e34] hover:bg-[#8b5e34] hover:text-white'
                  }`}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Content */}
      <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {filteredMenuData.map((section, idx) => (
          <section key={idx} className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-[#6e3f1b] tracking-wide">
              {section.section}
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {section.items.map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-6 shadow-[0_4px_20px_rgba(139,94,52,0.1)] hover:shadow-[0_4px_25px_rgba(139,94,52,0.15)] transition-all duration-300"
                >
                  <div className="flex justify-between items-start gap-4">
                    <h3 className="font-bold text-xl text-[#8b5e34]">
                      {item.title}
                    </h3>
                    {item.price && (
                      <p className="font-semibold text-lg text-[#6e3f1b] whitespace-nowrap">
                        {item.price}
                      </p>
                    )}
                  </div>
                  {item.description && (
                    <p className="mt-2 text-[#666] leading-relaxed">
                      {item.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        ))}

        <p className="text-sm text-center text-[#666] mt-12 max-w-2xl mx-auto">
          Please inform staff of any allergy or dietary requirements. 
          Weekend Surcharge 10% and Public Holiday 15% Surcharge applies.
        </p>
      </div>

      {/* Download Button */}
      <button
        onClick={handleDownload}
        className="fixed bottom-6 right-6 z-50 bg-[#8b5e34] text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:bg-[#6e3f1b] transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
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
