import React from "react";

function About() {
  return (
    <div className="relative bg-[#f5e6d3] min-h-screen">
      <main className="container mx-auto px-8 py-16">
        {/* About Us Card */}
        <section className="max-w-5xl mx-auto bg-white rounded-xl shadow-xl p-10">
          <h1 className="text-5xl font-bold text-center mb-8">About Us</h1>
          <p className="text-center text-lg text-gray-800 mb-8">
            We are surpassing your expectations.
          </p>
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            {/* Image */}
            <div>
              <img
                src="cafe.jpg"
                alt="Cafe"
                className="h-80 w-full object-cover rounded-lg shadow-lg"
              />
            </div>
            {/* Text */}
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold text-[#8b5e34]">
                15 Years of Experience
              </h2>
              <p className="text-lg text-gray-700">
                Cafe Himalayan Brew is a charming cafe inspired by the beauty and culture of the Himalayan region.
                Founded by <span className="font-bold">Dinesh Devkota</span>, who has excelled in hospitality for 15 years.
              </p>
              <p className="text-lg text-gray-700">
                The cafe offers an inviting ambiance with earthy tones and traditional decor. We serve premium, ethically sourced coffee and tea.
                Our menu features diverse dishes infused with Australian Cuisine. It also serves as a <span className="font-bold">cultural hub</span> for local people.
              </p>
              <p className="text-lg text-gray-700">
                In summary, <span className="font-bold">Cafe Himalayan Brew</span> is a haven where the flavors of coffee come to life.
                With a focus on premium beverages and wholesome cuisine, we celebrate the region’s <span className="font-bold">cultural heritage</span> and foster a <span className="font-bold">sense of community</span>.
              </p>
            </div>
          </div>
        </section>

        {/* Hours and Map Card */}
        <section className="max-w-5xl mx-auto bg-white rounded-xl shadow-xl p-10 mt-12">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Hours & Contact */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-2 text-[#8b5e34]">Hours</h3>
                <ul className="text-lg text-gray-700 space-y-1">
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
                <h3 className="text-2xl font-bold mb-2 text-[#8b5e34]">Have a Query?</h3>
                <p className="text-lg text-gray-700 mb-3">
                  Reach out to us anytime.
                </p>
                <a
                  href="/contact"
                  className="inline-block bg-[#8b5e34] text-white px-6 py-3 rounded-full text-center hover:bg-[#6e3f1b] transition"
                >
                  Contact Us
                </a>
              </div>
            </div>
            {/* Map & Directions */}
            <div className="space-y-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3251.537085216772!2d149.06256297652885!3d-35.41672320088999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b17cb78f10df3a5%3A0x8b083deb6e290c5c!2sCafe%20Himalayan%20Brew%20Tuggeranong!5e0!3m2!1sen!2sau!4v1739702289693!5m2!1sen!2sau"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Cafe Location"
                className="rounded-lg shadow-lg"
              ></iframe>
              <a
                href="https://goo.gl/maps/your-location-here"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#8b5e34] text-white px-6 py-3 rounded-full text-center hover:bg-[#6e3f1b] transition"
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
