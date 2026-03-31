import React from "react";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const footer = () => {
  return (
    <div className="bg-[#101727] text-white p-30">
      <div className="container mx-auto flex justify-between items-center">
        <div className="space-y-3">
          <h2 className="text-2xl font-bold">DigiTools</h2>
          <p className="text-gray-400">Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
        </div>
        <ul className="text-gray-400">
          <li className="text-xl text-white font-bold">Product</li>
          <li>Features</li>
          <li>Pricing</li>
          <li>Templates</li>
          <li>Integrations</li>
        </ul>
        <ul className="text-gray-400">
          <li className="text-xl text-white font-bold">Company</li>
          <li>About</li>
          <li>Blog</li>
          <li>Careers</li>
          <li>Press</li>
        </ul>
        <ul className="text-gray-400">
          <li className="text-xl text-white font-bold">Resources</li>
          <li>Documentation</li>
          <li>Help Center</li>
          <li>Community</li>
          <li>Contact</li>
        </ul>
        <div className="space-y-3.5">
          <p className="text-xl font-bold">Social Links</p>
          <div className="flex gap-4">
            <div className="bg-white w-7 h-7 rounded-full flex justify-center items-center">
              <FaInstagram className="text-black" />
            </div>
            <div className="bg-white w-7 h-7 rounded-full flex justify-center items-center">
              <FaFacebookSquare className="text-black" />
            </div>
            <div className="bg-white w-7 h-7 rounded-full flex justify-center items-center">
              <FaXTwitter className="text-black" />
            </div>
          </div>
        </div>
      </div>
      <div className="divider text-gray-500 before:bg-gray-500 after:bg-gray-500"></div>
      <div className="flex justify-between">
        <p>© 2026 Digitools. All rights reserved.</p>
        <div className="flex gap-5">
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
          <p>Cookies</p>
        </div>
      </div>
    </div>
  );
};

export default footer;
