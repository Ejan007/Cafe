import React from "react";

function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#fbe7c6] to-[#ffe6a7] text-[#60462c] p-8">
      <h1 className="text-6xl font-bold text-center mb-8 pt-20">Contact Us</h1>
      <p className="text-center text-xl mb-10">
        We’d love to hear from you! Reach out with any questions or feedback.
      </p>

      <div className="max-w-2xl mx-auto">
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border border-[#856746] rounded-lg"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border border-[#856746] rounded-lg"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-3 border border-[#856746] rounded-lg h-32"
          ></textarea>
          <button className="w-full p-3 bg-[#60462c] text-white rounded-lg hover:bg-[#856746] transition-all">
            Send Message
          </button>
        </form>
      </div>

      {/* New Catering Section */}
      <section className="max-w-2xl mx-auto mt-12 p-6 bg-white bg-opacity-90 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-4">Catering Services</h2>
        <p className="text-center text-lg">
          Planning an event? Let us bring our signature Himalayan flavors and cozy ambience
          right to your doorstep. We cater for birthdays, meetings, weddings and more!
        </p>
      </section>

      <div className="text-center mt-8">
        <p className="text-lg">📍 123 Coffee Street, Himalayan City</p>
        <p className="text-lg">📞 (123) 456-7890</p>
      </div>
    </div>
  );
}

export default Contact;
