import React from "react";

const Tabs = ({ isActive, setIsActive, carts }) => {
  console.log(isActive);
  return (
    <div className="mt-30">
      <div className="text-center space-y-3">
        <h1 className="text-5xl font-bold">Premium Digital Tools</h1>
        <p className="text-gray-400">
          Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.
        </p>
      </div>

      <div className="tabs tabs-box justify-center mt-3 bg-transparent">
        <input onClick={() => setIsActive("products")} type="radio" name="my_tabs_1" className="tab w-40 rounded-full" aria-label="Products" defaultChecked />
        <input onClick={() => setIsActive("cart")} type="radio" name="my_tabs_1" className="tab w-40 rounded-full" aria-label={`Cart ${carts.length == 0 ? "" : carts.length}`} />
      </div>
    </div>
  );
};

export default Tabs;
