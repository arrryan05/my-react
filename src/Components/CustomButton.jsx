import React from "react";

const CustomButton = ({ buttonText = "" }) => {
  return (
    <div>
      <a
        href="#_"
        class="relative inline-flex items-center justify-center py-1 pl-8 pr-2 overflow-hidden font-semibold text-black transition-all duration-150 ease-in-out rounded-2xl hover:pl-2 hover:pr-8 bg-yellow-500 hover:bg-white border border-yellow-500 group"
      >
        <span class="absolute -left-0 ">
          <svg height="100" width="100" xmlns="http://www.w3.org/2000/svg">
            <circle
              r="10"
              cx="50"
              cy="50"
              fill="#FCDB77"
              className="group-hover:fill-white"
            />
          </svg>
        </span>
        <span class="absolute display-none right-0 duration-200 ease-out group-hover:display-block">
          <svg height="100" width="100" xmlns="http://www.w3.org/2000/svg">
            <circle
              r="10"
              cx="50"
              cy="50"
              fill="#EAB308"
              className="group-hover:fill-#FCDB77"
            />
          </svg>
        </span>

        <span class="relative w-full text-left transition-colors duration-200 ease-in-out ">
          {buttonText}
        </span>
      </a>
    </div>
  );
};

export default CustomButton;
