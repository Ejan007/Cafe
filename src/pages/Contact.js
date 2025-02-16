import React from "react";

function Contact() {
  return (
    <div className="min-h-screen bg-white text-[#60462c] p-8">
      <h1 className="text-5xl font-bold text-center mb-6">Contact Us</h1>
      <p className="text-center text-lg mb-8">We’d love to hear from you! Reach out with any questions or feedback.</p>

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

      <div className="text-center mt-8">
        <p className="text-lg">📍 123 Coffee Street, Himalayan City</p>
        <p className="text-lg">📞 (123) 456-7890</p>
      </div>
    </div>
  );
}

export default Contact;
