import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import emailjs from '@emailjs/browser';

// Initialize EmailJS
emailjs.init("IbAD2eHIw7cNzVX2v");

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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        phone: formData.phone,
        enquiry_type: formData.enquiryType,
        message: formData.message,
        subject: `New ${formData.enquiryType} from ${formData.firstName} ${formData.lastName}`
      };

      const result = await emailjs.send(
        'service_46j5sqe',    // Your service ID
        'template_1r26ouo',   // Your template ID
        templateParams
      );

      if (result.status === 200) {
        setFeedback("Thank you! Your message has been sent successfully.");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          enquiryType: "General Enquiry",
          message: ""
        });
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setFeedback("Sorry, there was a problem sending your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Clear feedback after 5 seconds
  useEffect(() => {
    if (feedback) {
      const timer = setTimeout(() => setFeedback(""), 5000);
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
          <div className={`p-4 ${
            feedback.includes("successfully") 
              ? "bg-green-200 text-green-800" 
              : "bg-red-200 text-red-800"
          } font-semibold text-center rounded transition-opacity duration-500`}>
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
                  placeholder="First name"
                  className="w-full p-3 border border-gray-300 rounded"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
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
                  placeholder="Last name"
                  className="w-full p-3 border border-gray-300 rounded"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
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
                placeholder="Email"
                className="w-full p-3 border border-gray-300 rounded"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-1">
                Phone *
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Phone"
                className="w-full p-3 border border-gray-300 rounded"
                value={formData.phone}
                onChange={handleChange}
                required
                disabled={isSubmitting}
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
                disabled={isSubmitting}
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
                placeholder="Your message"
                className="w-full p-3 border border-gray-300 rounded h-32"
                value={formData.message}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full p-3 bg-[#596a64] text-white rounded hover:bg-[#46534f] transition-colors disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
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
                <p className="text-sm">+61 448 892 194</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 items-center">
              <div className="flex flex-col items-center gap-2">
                <FontAwesomeIcon icon={faEnvelope} className="text-lg" />
                <h3 className="text-md font-semibold">Email</h3>
                <p className="text-sm">contact@cafehimalayanbrew.com.au</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="text-lg">👍</div>
                <h3 className="text-md font-semibold">Follow</h3>
                <div className="flex justify-center gap-4 text-gray-600">
                  <a href="#" className="hover:text-[#1877F2]" aria-label="Facebook">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                  <a href="#" className="hover:text-pink-500" aria-label="Instagram">
                    <FontAwesomeIcon icon={faInstagram} />
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