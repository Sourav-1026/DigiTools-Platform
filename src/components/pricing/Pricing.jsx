import React from "react";
import { FcCheckmark } from "react-icons/fc";
import { IoMdCheckmark } from "react-icons/io";

const Pricing = () => {
  return (
    <div className="p-30">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-2">Simple, Transparent Pricing</h1>
        <p className="text-gray-600">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
      </div>
      <div className="container mx-auto grid grid-cols-3 gap-2.5 mt-10">
        <div className="border border-gray-200 rounded-md shadow-md p-2 space-y-2.5 bg-base-200">
          <h4 className="text-xl font-bold">Starter</h4>
          <p className="text-gray-400">Perfect for getting started</p>
          <p className="font-semibold">
            <span className="text-2xl font-bold">$0</span>/Month
          </p>
          <ul className="text-gray-400">
            <li className="flex items-center gap-1.5">
              <FcCheckmark />
              Access to 10 free tools
            </li>
            <li className="flex items-center gap-1.5">
              <FcCheckmark />
              Basic templates
            </li>
            <li className="flex items-center gap-1.5">
              <FcCheckmark />
              Community support
            </li>
            <li className="flex items-center gap-1.5">
              <FcCheckmark />1 project per month
            </li>
          </ul>
          <button className="btn w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white">Get Started Free</button>
        </div>
        <div className="border border-gray-200 rounded-lg shadow-md p-2 space-y-2.5 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white">
          <h4 className="text-xl font-bold">Pro</h4>
          <p className="">Best for professionals</p>
          <p className="font-semibold">
            <span className="text-2xl font-bold">$29</span>/Month
          </p>
          <ul>
            <li className="flex items-center gap-1.5">
              <IoMdCheckmark />
              Access to all premium tools
            </li>
            <li className="flex items-center gap-1.5">
              <IoMdCheckmark />
              Unlimited templates
            </li>
            <li className="flex items-center gap-1.5">
              <IoMdCheckmark />
              Priority support
            </li>
            <li className="flex items-center gap-1.5">
              <IoMdCheckmark />
              Unlimited projects
            </li>
            <li className="flex items-center gap-1.5">
              <IoMdCheckmark />
              Cloud sync
            </li>
            <li className="flex items-center gap-1.5">
              <IoMdCheckmark />
              Advanced analytics
            </li>
          </ul>
          <button className="btn w-full rounded-full bg-white">
            <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">Start Pro Trial</span>
          </button>
        </div>
        <div className="border border-gray-200 rounded-md shadow-md p-2 space-y-2.5 bg-base-200">
          <h4 className="text-xl font-bold">Enterprise</h4>
          <p className="text-gray-400">For teams and businesses</p>
          <p className="font-semibold">
            <span className="text-2xl font-bold">$99</span>/Month
          </p>
          <ul className="text-gray-400">
            <li className="flex items-center gap-1.5">
              <FcCheckmark />
              Everything in Pro
            </li>
            <li className="flex items-center gap-1.5">
              <FcCheckmark />
              Team collaboration
            </li>
            <li className="flex items-center gap-1.5">
              <FcCheckmark />
              Custom integrations
            </li>
            <li className="flex items-center gap-1.5">
              <FcCheckmark />
              Dedicated support
            </li>
            <li className="flex items-center gap-1.5">
              <FcCheckmark />
              SLA guarantee
            </li>
            <li className="flex items-center gap-1.5">
              <FcCheckmark />
              Custom branding
            </li>
          </ul>
          <button className="btn w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white">Contact Sales</button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
