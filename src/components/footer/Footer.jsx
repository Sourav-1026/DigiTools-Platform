import React from "react";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const footer = () => {
  return (
    <div className="bg-[#101727] text-white px-6 py-12 md:px-10 md:py-16 lg:px-20 lg:py-20">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10 text-center sm:text-center lg:text-left">
        <div className="space-y-3 lg:col-span-2">
          <h2 className="text-2xl font-bold">DigiTools</h2>
          <p className="text-gray-400 text-sm md:text-base">Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
        </div>

        <ul className="text-gray-400 space-y-2">
          <li className="text-lg md:text-xl text-white font-bold mb-2">Product</li>
          <li>Features</li>
          <li>Pricing</li>
          <li>Templates</li>
          <li>Integrations</li>
        </ul>

        <ul className="text-gray-400 space-y-2">
          <li className="text-lg md:text-xl text-white font-bold mb-2">Company</li>
          <li>About</li>
          <li>Blog</li>
          <li>Careers</li>
          <li>Press</li>
        </ul>

        <ul className="text-gray-400 space-y-2">
          <li className="text-lg md:text-xl text-white font-bold mb-2">Resources</li>
          <li>Documentation</li>
          <li>Help Center</li>
          <li>Community</li>
          <li>Contact</li>
        </ul>

        <div className="space-y-3">
          <p className="text-lg md:text-xl font-bold">Social Links</p>
          <div className="flex gap-4 justify-center lg:justify-start">
            <div className="bg-white w-8 h-8 rounded-full flex justify-center items-center">
              <FaInstagram className="text-black" />
            </div>
            <div className="bg-white w-8 h-8 rounded-full flex justify-center items-center">
              <FaFacebookSquare className="text-black" />
            </div>
            <div className="bg-white w-8 h-8 rounded-full flex justify-center items-center">
              <FaXTwitter className="text-black" />
            </div>
          </div>
        </div>
      </div>

      <div className="divider text-gray-500 before:bg-gray-500 after:bg-gray-500 my-10"></div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        <p className="text-sm md:text-base">© 2026 Digitools. All rights reserved.</p>

        <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6 text-sm md:text-base">
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
          <p>Cookies</p>
        </div>
      </div>
    </div>
  );
};

export default footer;
