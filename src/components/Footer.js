import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
        {/* Hours */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Hours</h3>
          <ul className="text-sm">
            <li>Mon: 7:30am - 4pm</li>
            <li>Tue: 7:30am - 4pm</li>
            <li>Wed: 7:30am - 4pm</li>
            <li>Thu: 7:30am - 4pm</li>
            <li>Fri: 7:30am - 4pm</li>
            <li>Sat: 8am - 4pm</li>
            <li>Sun: 8am - 4pm</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Social</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="#" aria-label="Facebook" className="hover:text-gray-400">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-gray-400">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-gray-400">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
        </div>

        {/* Address */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Address</h3>
          <p className="text-sm">
            72 Anketell and, Reed St S,<br />
            Greenway ACT
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <p className="text-sm">Email: info@cafehimalayanbrew.com</p>
          <p className="text-sm">Phone: 0448892194</p>
        </div>
      </div>
      <div className="mt-8 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Cafe Himalayan Brew. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
