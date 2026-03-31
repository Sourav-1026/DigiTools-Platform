import React, { useState } from "react";
import { FcCheckmark } from "react-icons/fc";
import { toast } from "react-toastify";

const DigitalTool = ({ tool, carts, setCarts }) => {
  const [isBuyNow, setIsBuyNow] = useState(false);
  const handleBuyNow = () => {
    setIsBuyNow(true);
    const isFound = carts.find((item) => item.title == tool.title);
    if (isFound) {
      toast.error("Item already added in cart");
      return;
    }

    setCarts([...carts, tool]);
    toast.success("Item added to cart");
  };
  return (
    <div className="border border-gray-300 shadow-md rounded-md p-3 space-y-4">
      <div className="flex justify-end">
        <span
          className={`px-2 py-1 rounded-full ${tool.tag === "Best Seller" ? "bg-[#FEF3C6] text-[#BB4D00]" : tool.tag === "New" ? "bg-[#DBFCE7] text-[#0A883E]" : tool.tag === "Popular" ? "bg-[#E1E7FF] text-purple-700" : ""}`}
        >
          {tool.tag}
        </span>
      </div>
      <div className="h-12 w-12 rounded-full border border-gray-300 flex justify-center items-center">
        <img src={tool.image} alt="" />
      </div>
      <h2 className="text-2xl font-bold">{tool.title}</h2>
      <p className="text-gray-400">{tool.description}</p>
      <p>
        <span className="text-2xl font-bold">${tool.price}</span>/{tool.billing}
      </p>
      <ul>
        <li className="flex items-center gap-2">
          <FcCheckmark />
          {tool.features}
        </li>
        <li className="flex items-center gap-2">
          <FcCheckmark />
          {tool.features_2}
        </li>
        <li className="flex items-center gap-2">
          <FcCheckmark />
          {tool.features_3}
        </li>
      </ul>
      <button onClick={() => handleBuyNow()} className={`btn text-white w-full rounded-full ${isBuyNow ? "bg-green-400" : "bg-linear-to-r from-[#4F39F6] to-[#9514FA]"} `}>
        {isBuyNow ? "Added to Cart" : "Buy Now"}
      </button>
    </div>
  );
};

export default DigitalTool;
