import React, { useState } from "react";

// Dynamically import all images from the "./sec" folder
function importAll(r) {
  return r.keys().map(r);
}

// This will create an array with all matching image modules
const images = importAll(require.context("../images/", false, /\.(png|jpe?g|svg)$/));
console.log("Gallery image paths:", images);

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="pt-32 p-4"> {/* Added pt-20 to offset the navbar */}
      <h1 className="text-7xl font-bold text-center mb-8">Gallery</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Gallery Image ${index + 1}`}
            className="cursor-pointer object-cover h-48 w-full rounded shadow hover:opacity-80 transition-opacity"
            onClick={() => setSelectedImage(img)}
          />
        ))}
      </div>
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Enlarged"
            className="max-h-[90%] max-w-[90%] rounded shadow-lg"
          />
        </div>
      )}
    </div>
  );
}

export default Gallery;