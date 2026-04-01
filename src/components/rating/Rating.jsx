import React from "react";

const Rating = () => {
  return (
    <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] mt-20">
      <div className="w-[90%] md:w-[70%] mx-auto flex flex-col md:flex-row items-center justify-around text-center py-10 md:py-15 gap-8 md:gap-0">
        <div className="text-white">
          <span className="text-3xl md:text-4xl font-bold">50K+</span>
          <p>Active Users</p>
        </div>

        <div className="hidden md:flex divider divider-horizontal text-white before:bg-white after:bg-white"></div>

        <div className="text-white">
          <span className="text-3xl md:text-4xl font-bold">200+</span>
          <p>Tools</p>
        </div>

        <div className="hidden md:flex divider divider-horizontal text-white before:bg-white after:bg-white"></div>

        <div className="text-white">
          <span className="text-3xl md:text-4xl font-bold">4.9</span>
          <p>Rating</p>
        </div>
      </div>
    </div>
  );
};

export default Rating;
