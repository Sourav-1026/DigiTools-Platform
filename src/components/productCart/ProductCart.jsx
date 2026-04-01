import React from "react";
import { BsCartFill } from "react-icons/bs";
import { toast } from "react-toastify";

const ProductCart = ({ carts, setCarts }) => {
  const totalprice = carts.reduce((sum, item) => sum + item.price, 0);
  console.log(carts);
  const handlePayment = () => {
    setCarts([]);
    toast.success("Payment Successfull");
  };
  const handleRemove = (item) => {
    const filterCarts = carts.filter((c) => c.title !== item.title);
    setCarts(filterCarts);
    toast.success("Item Removed!");
  };
  return (
    <div className="px-3 md:px-20 lg:px-30 mt-10 mb-30 ">
      <div className="border border-gray-300 rounded-lg p-2 md:p-8">
        <h1 className="text-2xl font-bold">Your Cart</h1>
        {carts.length === 0 ? (
          <div className="bg-base-200 rounded-lg p-1 md:p-5 mt-5">
            <p className="text-gray-400 text-xl font-bold">Your Cart Is Empty</p>
            <div className="flex justify-center items-center mt-6">
              <BsCartFill className="w-16 h-16 md:w-32 md:h-32" />
            </div>
          </div>
        ) : (
          <>
            <div className="space-y-3 mt-3">
              {carts.map((item) => (
                <div key={item.tite}>
                  <div className="flex justify-between items-center bg-base-200 border border-gray-300 shadow-md rounded-md p-1 md:p-5">
                    <div className="flex items-center gap-2">
                      <img src={item.image} alt="" />
                      <div className="">
                        <h4 className="text-xl font-bold">{item.title}</h4>
                        <span>${item.price}</span>
                      </div>
                    </div>
                    <button onClick={() => handleRemove(item)} className="text-red-700">
                      Remove
                    </button>
                  </div>
                </div>
              ))}
              <div className="flex justify-between items-center border border-gray-300 shadow-md rounded-md p-5">
                <p>Total:</p>
                <span className="text-xl font-bold">$ {totalprice}</span>
              </div>
              <button onClick={() => handlePayment()} className="w-full p-5 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white">
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductCart;
