import React from "react";
import { IoPlayOutline } from "react-icons/io5";
import bannerImage from "../../assets/banner.png";
import circleImage from "../../assets/Circle.png";
import play from "../../assets/Play.png";

const Banner = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-15 mt-10 md:mt-21.25">
        <div className="left space-y-4 text-center md:text-left">
          <div className="bg-[#E1E7FF] rounded-full p-2 w-fit mx-auto md:mx-0">
            <span className="flex items-center gap-2 bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
              <img src={circleImage} alt="" />
              <p className="font-semibold text-sm md:text-base">New: AI-Powered Tools Available</p>
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold">
            Supercharge Your <br /> Digital Workflow
          </h1>

          <p className="text-gray-500 text-sm md:text-base">
            Access premium AI tools, design assets, templates, and productivity <br className="hidden md:block" />
            software—all in one place. Start creating faster today. Explore Products
          </p>

          <div className="buttons flex flex-col sm:flex-row gap-2 justify-center md:justify-start">
            <button className="btn rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white">Explore Product</button>

            <button className="btn border border-purple-600 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent font-bold flex items-center justify-center gap-2">
              <img src={play} alt="" />
              Watch Demo
            </button>
          </div>
        </div>

        <div className="right w-full md:w-auto flex justify-center">
          <img src={bannerImage} alt="" className="w-[80%] sm:w-[60%] md:w-full" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
