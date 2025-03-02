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
          <ul className="text-sm space-y-1">
            <li className="flex items-center justify-center md:justify-start gap-2 sm:gap-9">
              <span>Monday:</span>
              <span>7:30am - 4pm</span>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2 sm:gap-9">
              <span>Tuesday:</span>
              <span>7:30am - 4pm</span>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2 sm:gap-3">
              <span>Wednesday:</span>
              <span>7:30am - 4pm</span>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2 sm:gap-7">
              <span>Thursday:</span>
              <span>7:30am - 4pm</span>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2 sm:gap-12">
              <span>Friday:</span>
              <span>7:30am - 4pm</span>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2 sm:gap-8">
              <span>Saturday:</span>
              <span>8:00am - 4pm</span>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2 sm:gap-10">
              <span>Sunday:</span>
              <span>8:00am - 4pm</span>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Social</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="https://www.facebook.com/people/Cafe-Himalayan-Brew/100094930447837"
              aria-label="Facebook"
              className="hover:text-[#1877F2]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a
              href="https://www.instagram.com/cafehimalayanbrew/"
              aria-label="Instagram"
              className="hover:text-pink-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
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
