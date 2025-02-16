import React from "react";

function About() {
  return (
    <div>
      {/* Navbar is included on this page */}
    

      <div className="min-h-screen bg-white text-[#60462c] p-8 pt-24">
        <h1 className="text-5xl font-bold text-center mb-6">About Us</h1>
        <p className="text-center text-lg mb-10">We are surpassing your expectations.</p>

        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Left Side - Image Placeholder */}
          <div className="w-full md:w-1/3">
            <div className="h-80 bg-gray-300 rounded-lg flex items-center justify-center shadow-lg">
              <p className="text-gray-600">Owner's Image Here</p>
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div className="w-full md:w-2/3">
            <h2 className="text-3xl font-semibold mb-4">15 Years of Experience</h2>
            <p className="text-lg text-gray-700 mb-4">
              Cafe Himalayan Brew is a charming cafe inspired by the beauty and culture of the Himalayan region.
              Founded by <span className="font-bold">Dinesh Devkota</span>, who has excelled in hospitality for the past 15 years.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              The cafe offers an inviting ambiance with earthy tones and traditional decor. We serve premium,
              ethically sourced coffee and tea. Our menu features diverse dishes infused with Australian Cuisine.
              It also serves as a <span className="font-bold">cultural hub</span> for local people.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              In summary, <span className="font-bold">Cafe Himalayan Brew</span> is a heaven where the flavors of coffee come to life.
              With a focus on premium beverages and wholesome cuisine, the cafe celebrates the region’s <span className="font-bold">cultural heritage</span>.
              It aims to create <span className="font-bold">genuine connections</span> and foster a <span className="font-bold">sense of community</span>,
              offering a place for relaxation, artistic expression, and cultural exploration.
            </p>

            <p className="text-xl font-semibold mt-6">- Signature</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
