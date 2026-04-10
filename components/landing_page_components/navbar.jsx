import React from "react";

const Navbar = () => {
  return (
    <>
      {/* Top banner */}
      <div className="bg-blue-500 p-3 text-amber-50 border-2 cursor-pointer">
        <h2 className="flex justify-center">
          Flow TV: The AEO Edition, April 13-17 - Register Now
        </h2>
      </div>

      {/* Navbar */}
      <div className="bg-black flex justify-between items-center px-6 py-3">
        {/* Left section */}
        <div className="flex items-center gap-6">
          {/* SVG Logo */}
          <svg
            className="w-[140px] h-[40px] min-w-[140px] border"
            viewBox="0 0 108 19"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Icon */}
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M28.8562 0.5L19.6486 18.5H11L14.8534 11.04H14.6805C11.5015 15.1668 6.7583 17.8835 0 18.5V11.1433C0 11.1433 4.32345 10.8879 6.86508 8.21575H0V0.500142H7.71561V6.84612L7.88878 6.84541L11.0417 0.500142H16.8768V6.80588L17.0499 6.8056L20.3211 0.5H28.8562Z"
              fill="#146EF5"
            />

            {/* Text */}
            <text x="32" y="14" fill="white" fontSize="10" fontWeight="bold">
              Webflow
            </text>
          </svg>

          {/* Menu */}
          <ul className="flex gap-4 text-white font-semibold ">
            <li className="hover:text-blue-400 transition duration-300 cursor-pointer">
              Platform
            </li>
            <li className="hover:text-blue-400 transition duration-300 cursor-pointer">
              Solutions
            </li>
            <li className="hover:text-blue-400 transition duration-300 cursor-pointer">
              Resources
            </li>
            <li className="hover:text-blue-400 transition duration-300 cursor-pointer">
              Enterprise
            </li>
            <li className="hover:text-blue-400 transition duration-300 cursor-pointer">
              Pricing
            </li>
          </ul>
        </div>

        {/* Right section */}
        <div className="text-white font-bold flex gap-4 items-center">
          <div className="hover:text-blue-400 transition duration-300 cursor-pointer">
            Log in
          </div>
          <div className="hover:text-blue-400 transition duration-300 cursor-pointer">
            Contact Sales
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 transition duration-300 ease-out px-4 py-2 rounded cursor-pointer">
            Start for free
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
