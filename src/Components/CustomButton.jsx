import React from "react";

const CustomButton = ({ buttonText = "" }) => {
  return (
    <button className="relative w-fit inline-flex items-center justify-center py-1 pl-8 pr-2 overflow-hidden font-semibold text-black transition-all duration-150 ease-in-out rounded-2xl hover:pl-2 hover:pr-8 bg-yellow-500 hover:bg-white border border-yellow-500 group">
      <span className="absolute left-1">
        <svg height="20" width="20" xmlns="http://www.w3.org/2000/svg">
          <circle
            r="10"
            cx="10"
            cy="10"
            fill="#FCDB77"
            className="group-hover:fill-white"
          />
        </svg>
      </span>
      <span className="absolute right-1">
        <svg height="20" width="20" xmlns="http://www.w3.org/2000/svg">
          <circle
            r="10"
            cx="10"
            cy="10"
            fill="#EAB308"
            className="group-hover:fill-#FCDB77"
          />
          <path
            d="M9 5l6 5-6 5M11 10H3"
            fill="none"
            stroke="#16A34A"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="opacity-0 group-hover:opacity-100"
          />
        </svg>
      </span>

      <span className="relative w-full text-left transition-colors duration-500 ease-in-out">
        {buttonText}
      </span>
    </button>
  );
};

export default CustomButton;
