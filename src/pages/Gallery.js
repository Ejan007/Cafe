import React, { useState } from "react";

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(require.context("../images/", false, /\.(png|jpe?g|svg)$/));
console.log("Gallery image paths:", images);

function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handlePrev = (e) => {
    // Prevent propagation so clicking button doesn't close overlay.
    e.stopPropagation();
    setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="pt-32 p-4 bg-[#f5e6d3]">
      <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-center mb-8">
        Gallery
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Gallery Image ${index + 1}`}
            className="cursor-pointer object-cover h-40 sm:h-48 w-full rounded shadow hover:opacity-80 transition-opacity"
            onClick={() => setSelectedIndex(index)}
          />
        ))}
      </div>
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-gray-900 bg-opacity-85 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedIndex(null)}
        >
          <button
            className="absolute left-8 text-white text-3xl focus:outline-none"
            onClick={handlePrev}
          >
            &#8592;
          </button>
          <img
            src={images[selectedIndex]}
            alt="Enlarged"
            className="max-h-[90%] max-w-[90%] rounded shadow-lg"
          />
          <button
            className="absolute right-8 text-white text-3xl focus:outline-none"
            onClick={handleNext}
          >
            &#8594;
          </button>
        </div>
      )}
    </div>
  );
}

export default Gallery;