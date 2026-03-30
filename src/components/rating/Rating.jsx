import React from "react";

const Rating = () => {
  return (
    <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] mt-21.25">
      <div className="w-[70%] mx-auto flex justify-around p-15 items-center  text-center ">
        <div className="text-white">
          <span className="text-4xl font-bold">50K+</span>
          <p>Active Users</p>
        </div>
        <div className="divider divider-horizontal text-white before:bg-white after:bg-white"></div>
        <div className="text-white">
          <span className="text-4xl font-bold">200+</span>
          <p>Tools</p>
        </div>
        <div className="divider divider-horizontal text-white before:bg-white after:bg-white"></div>
        <div className="text-white">
          <span className="text-4xl font-bold">4.9</span>
          <p>Rating</p>
        </div>
      </div>
    </div>
  );
};

export default Rating;
