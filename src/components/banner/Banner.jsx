import React from "react";
import { IoPlayOutline } from "react-icons/io5";
import bannerImage from "../../assets/banner.png";
import circleImage from "../../assets/Circle.png";
import play from "../../assets/Play.png";

const Banner = () => {
  return (
    <div>
      <div className="flex justify-center gap-15 items-center mt-21.25">
        <div className="left space-y-4">
          <div className=" bg-[#E1E7FF] rounded-full p-2 w-fit">
            <span className="flex items-center gap-2 bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
              <img src={circleImage} alt="" />
              <p className="font-semibold">New: AI-Powered Tools Available</p>
            </span>
          </div>
          <h1 className="text-5xl font-bold">
            Supercharge Your <br /> Digital Workflow
          </h1>
          <p className="text-gray-500">
            Access premium AI tools, design assets, templates, and productivity <br /> software—all in one place. Start creating faster today. Explore Products
          </p>
          <div className="buttons flex gap-2">
            <button className="btn rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white">Explore Product</button>
            <button className="btn border border-purple-600 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent  font-bold">
              <img src={play} alt="" /> Watch Demo
            </button>
          </div>
        </div>
        <div className="right">
          <img src={bannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
