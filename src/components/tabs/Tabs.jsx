import React from "react";

const Tabs = ({ isActive, setIsActive, carts }) => {
  console.log(isActive);
  return (
    <div className="mt-10 md:mt-30">
      <div className="text-center space-y-3 px-4">
        <h1 className="text-3xl md:text-5xl font-bold">Premium Digital Tools</h1>

        <p className="text-gray-400 text-sm md:text-base">
          Choose from our curated collection of premium digital products designed
          <br className="hidden md:block" />
          to boost your productivity and creativity.
        </p>
      </div>

      <div className="tabs tabs-box justify-center mt-5 md:mt-3 bg-transparent flex flex-col sm:flex-row gap-2 sm:gap-0 items-center">
        <input
          onClick={() => setIsActive("products")}
          type="radio"
          name="my_tabs_1"
          className={`tab w-full sm:w-40 rounded-full text-sm md:text-base ${isActive === "products" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" : "bg-gray-200 text-black"}`}
          aria-label="Products"
          defaultChecked
        />

        <input
          onClick={() => setIsActive("cart")}
          type="radio"
          name="my_tabs_1"
          className={`tab w-full sm:w-40 rounded-full text-sm md:text-base ${isActive === "cart" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" : "bg-gray-200 text-black"}`}
          aria-label={`Cart (${carts.length})`}
        />
      </div>
    </div>
  );
};

export default Tabs;
