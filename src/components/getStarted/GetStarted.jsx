import React from "react";
import userImage from "../../assets/user.png";
import packageImage from "../../assets/package.png";
import rocketImage from "../../assets/rocket.png";

const GetStarted = () => {
  return (
    <div className="bg-[#F9FAFC] p-10 md:p-20 lg:p-30 text-center">
      <h2 className="text-2xl md:text-4xl font-bold mb-2">Get Started in 3 Steps</h2>
      <p className="text-gray-600">Start using premium digital tools in minutes, not hours.</p>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5 mt-10">
        <div className="rounded-md shadow-md p-3 border border-gray-200 pb-22">
          <div className="flex justify-end ">
            <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white h-8 w-8 rounded-full flex justify-center items-center">01</span>
          </div>
          <div className="bg-purple-200 w-30 h-30 rounded-full overflow-hidden flex justify-center items-center mx-auto mt-7">
            <img src={userImage} alt="" />
          </div>
          <h4 className="text-xl font-bold mt-4">Create Account</h4>
          <p className="text-gray-500 mt-4">Sign up for free in seconds. No credit card required to get started.</p>
        </div>
        <div className="rounded-md shadow-md p-3 border border-gray-200 pb-22">
          <div className="flex justify-end ">
            <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white h-8 w-8 rounded-full flex justify-center items-center">02</span>
          </div>
          <div className="bg-purple-200 w-30 h-30 rounded-full overflow-hidden flex justify-center items-center mx-auto mt-7">
            <img src={packageImage} alt="" />
          </div>
          <h4 className="text-xl font-bold mt-4">Choose Products</h4>
          <p className="text-gray-500 mt-4">Browse our catalog and select the tools that fit your needs.</p>
        </div>
        <div className="rounded-md shadow-md p-3 border border-gray-200 pb-22">
          <div className="flex justify-end ">
            <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white h-8 w-8 rounded-full flex justify-center items-center">03</span>
          </div>
          <div className="bg-purple-200 w-30 h-30 rounded-full overflow-hidden flex justify-center items-center mx-auto mt-7">
            <img className="h-fit w-fit " src={rocketImage} alt="" />
          </div>
          <h4 className="text-xl font-bold mt-4">Start Creating</h4>
          <p className="text-gray-500 mt-4">Download and start using your premium tools immediately.</p>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
