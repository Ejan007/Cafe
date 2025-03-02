import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    enquiryType: "General Enquiry",
    message: ""
  });
  const [feedback, setFeedback] = useState("");

  // Handle input changes for controlled fields
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (data.success) {
        setFeedback("Message sent successfully!");
        // Reset form fields
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          enquiryType: "General Enquiry",
          message: ""
        });
      } else {
        setFeedback(data.message || "Failed to send message.");
      }
    } catch (error) {
      setFeedback("Error sending message.");
    }
  };

  // Clear feedback after 3 seconds
  useEffect(() => {
    if (feedback) {
      const timer = setTimeout(() => setFeedback(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [feedback]);

  return (
    <div className="min-h-screen bg-[#f5e6d3] text-gray-800">
      {/* Title & Subheading */}
      <div className="container mx-auto text-center pt-36 pb-16 px-4 sm:px-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-3">Contact Us</h1>
        <p className="text-lg text-gray-700">
          We'd love to hear from you! Send us a message and we'll get back to you as soon as possible.
        </p>
      </div>

      {/* Feedback Message */}
      {feedback && (
        <div className="container mx-auto px-4 sm:px-8 mb-4">
          <div className="p-4 bg-green-200 text-green-800 font-semibold text-center rounded transition-opacity duration-500">
            {feedback}
          </div>
        </div>
      )}

      {/* Two-Column Layout */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-8 items-start pb-12 px-4 sm:px-8">
        {/* Left Column: Contact Form */}
        <div className="bg-white rounded-xl shadow-xl p-6 sm:p-8">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label htmlFor="firstName" className="block text-sm font-medium mb-1">
                  First name *
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="First name *"
                  className="w-full p-3 border border-gray-300 rounded"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex-1">
                <label htmlFor="lastName" className="block text-sm font-medium mb-1">
                  Last name *
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Last name *"
                  className="w-full p-3 border border-gray-300 rounded"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email *"
                className="w-full p-3 border border-gray-300 rounded"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-1">
                Phone *
              </label>
              <input
                id="phone"
                name="phone"
                type="text"
                placeholder="Phone *"
                className="w-full p-3 border border-gray-300 rounded"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="enquiryType" className="block text-sm font-medium mb-1">
                Enquiry Type *
              </label>
              <select
                id="enquiryType"
                name="enquiryType"
                className="w-full p-3 border border-gray-300 rounded"
                value={formData.enquiryType}
                onChange={handleChange}
                required
              >
                <option value="Booking">Booking</option>
                <option value="Catering">Catering</option>
                <option value="General Enquiry">General Enquiry</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Message *"
                className="w-full p-3 border border-gray-300 rounded h-32"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full p-3 bg-[#596a64] text-white rounded hover:bg-[#46534f] transition-colors"
            >
              Send
            </button>
          </form>
        </div>

        {/* Vertical Divider (hidden on mobile) */}
        <div className="hidden md:block w-1 bg-gray-300 h-full mx-auto"></div>

        {/* Right Column: Contact Info */}
        <div className="bg-white rounded-xl shadow-xl p-6 sm:p-8">
          <div className="grid grid-rows-2 gap-8 text-center mt-4">
            <div className="grid grid-cols-2 gap-4 items-center">
              <div className="flex flex-col items-center gap-2">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-lg" />
                <h3 className="text-md font-semibold">Address</h3>
                <p className="text-sm">
                  72 Anketell and, Reed St S,<br />
                  Greenway ACT.
                </p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <FontAwesomeIcon icon={faPhone} className="text-lg" />
                <h3 className="text-md font-semibold">Phone</h3>
                <p className="text-sm">0448892194</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 items-center">
              <div className="flex flex-col items-center gap-2">
                <FontAwesomeIcon icon={faEnvelope} className="text-lg" />
                <h3 className="text-md font-semibold">Email</h3>
                <p className="text-sm">info@mysite.com</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="text-lg">👍</div>
                <h3 className="text-md font-semibold">Follow</h3>
                <div className="flex justify-center gap-4 text-gray-600">
                  <a href="#" className="hover:text-gray-900" aria-label="Facebook">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                  <a href="#" className="hover:text-gray-900" aria-label="Instagram">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a href="#" className="hover:text-gray-900" aria-label="Twitter">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;