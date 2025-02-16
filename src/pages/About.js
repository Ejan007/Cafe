import React from "react";

function About() {
  return (
    <div>
      {/* Navbar is included on this page */}
      <main className="container mx-auto px-8 py-8">
        {/* Main About Section */}
        <section className="max-w-5xl mx-auto mb-12">
          <h1 className="mt-12 text-5xl font-bold text-center mb-6 pt-20">About Us</h1>
          <p className="text-center text-lg mb-6">
            We are surpassing your expectations.
          </p>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Image */}
            <div className="w-full">
              <img
                src="cafe.jpg"
                alt="Cafe"
                className="h-80 w-full object-cover rounded-lg shadow"
              />
            </div>
            {/* Text */}
            <div className="w-full">
              <h2 className="text-3xl font-semibold mb-3">15 Years of Experience</h2>
              <p className="text-lg text-gray-700 mb-3">
                Cafe Himalayan Brew is a charming cafe inspired by the beauty and culture of the Himalayan region.
                Founded by <span className="font-bold">Dinesh Devkota</span>, who has excelled in hospitality for 15 years.
              </p>
              <p className="text-lg text-gray-700 mb-3">
                The cafe offers an inviting ambiance with earthy tones and traditional decor. We serve premium,
                ethically sourced coffee and tea. Our menu features diverse dishes infused with Australian Cuisine.
                It also serves as a <span className="font-bold">cultural hub</span> for local people.
              </p>
              <p className="text-lg text-gray-700 mb-3">
                In summary, <span className="font-bold">Cafe Himalayan Brew</span> is a haven where the flavors of coffee come to life.
                With a focus on premium beverages and wholesome cuisine, we celebrate the region’s 
                <span className="font-bold"> cultural heritage</span> and foster a 
                <span className="font-bold"> sense of community</span>.
              </p>
            </div>
          </div>
        </section>

        {/* New Section: Opening Hours & Map */}
        <section className="max-w-5xl mx-auto p-6 bg-white shadow rounded-md">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Opening Hours & Contact on Left */}
            <div className="flex flex-col justify-center space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">Hours</h3>
                <ul className="text-lg">
                  <li>Mon: 7:30am - 4pm</li>
                  <li>Tue: 7:30am - 4pm</li>
                  <li>Wed: 7:30am - 4pm</li>
                  <li>Thu: 7:30am - 4pm</li>
                  <li>Fri: 7:30am - 4pm</li>
                  <li>Sat: 8am - 4pm</li>
                  <li>Sun: 8am - 4pm</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Have a Query?</h3>
                <p className="text-lg mb-2">Reach out to us anytime.</p>
                <a
                  href="/contact"
                  className="inline-block bg-[#8b5e34] text-white px-4 py-2 rounded text-center hover:bg-[#6e3f1b] transition"
                >
                  Contact Us
                </a>
              </div>
            </div>
            {/* Map & Directions on Right */}
            <div className="flex flex-col items-end space-y-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3251.537085216772!2d149.06256297652885!3d-35.41672320088999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b17cb78f10df3a5%3A0x8b083deb6e290c5c!2sCafe%20Himalayan%20Brew%20Tuggeranong!5e0!3m2!1sen!2sau!4v1739702289693!5m2!1sen!2sau"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Cafe Location"
                className="rounded shadow"
              ></iframe>
              <a
                href="https://goo.gl/maps/your-location-here"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#8b5e34] text-white px-4 py-2 rounded text-center hover:bg-[#6e3f1b] transition"
              >
                Get Directions
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default About;
