import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// If you need icons, install @fortawesome/free-solid-svg-icons and @fortawesome/free-brands-svg-icons
// Then import specific icons below. Example:
import { faMapMarkerAlt, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

function Contact() {
  return (
    <div className="min-h-screen pt-20 px-6 bg-[#f5e6d3] text-gray-800">
      {/* Title & Subheading */}
      <h1 className="text-4xl font-bold text-center mb-2 pt-40">Let's Connect</h1>
      <p className="text-center text-lg mb-10">
        I'm a paragraph. Click here to add your own text and edit me.
        Let your users get to know you.
      </p>

      {/* Two-Column Layout */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-8 items-start">
        {/* Left Column: Contact Form */}
        <div>
          <form className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label htmlFor="firstName" className="block text-sm font-medium mb-1">
                  First name *
                </label>
                <input
                  id="firstName"
                  type="text"
                  placeholder="First name *"
                  className="w-full p-3 border border-gray-300 rounded"
                />
              </div>
              <div className="flex-1">
                <label htmlFor="lastName" className="block text-sm font-medium mb-1">
                  Last name *
                </label>
                <input
                  id="lastName"
                  type="text"
                  placeholder="Last name *"
                  className="w-full p-3 border border-gray-300 rounded"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email *
              </label>
              <input
                id="email"
                type="email"
                placeholder="Email *"
                className="w-full p-3 border border-gray-300 rounded"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Message"
                className="w-full p-3 border border-gray-300 rounded h-32"
              ></textarea>
            </div>

            <button className="w-full p-3 bg-[#596a64] text-white rounded hover:bg-[#46534f] transition-colors">
              Send
            </button>
          </form>
        </div>

        {/* Vertical Divider (hidden on small screens) */}
        <div className="hidden md:block w-1 bg-gray-300 h-full mx-auto"></div>

        {/* Right Column: Contact Info */}
        <div className="grid grid-rows-2 gap-8 text-center">
          <div className="grid grid-cols-2 gap-4 items-center">
            {/* Address */}
            <div className="flex flex-col items-center gap-2">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-lg" />
              <h3 className="text-md font-semibold">Address</h3>
              <p className="text-sm">
                500 Terry Francine St.
                <br />
                San Francisco, CA 94158
              </p>
            </div>
            {/* Phone */}
            <div className="flex flex-col items-center gap-2">
              <FontAwesomeIcon icon={faPhone} className="text-lg" />
              <h3 className="text-md font-semibold">Phone</h3>
              <p className="text-sm">123-456-7890</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 items-center">
            {/* Email */}
            <div className="flex flex-col items-center gap-2">
              <FontAwesomeIcon icon={faEnvelope} className="text-lg" />
              <h3 className="text-md font-semibold">Email</h3>
              <p className="text-sm">info@mysite.com</p>
            </div>
            {/* Follow */}
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
  );
}

export default Contact;
