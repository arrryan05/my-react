import React, { useContext, useEffect, useState } from "react";
import { ContactAnimation } from "../Pages/home/home";

const Header2 = () => {
  const [isAtTop, setIsAtTop] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const { toAnimate, updateVariable } = useContext(ContactAnimation);

  useEffect(() => {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 0) {
        setIsAtTop(false);
      } else {
        setIsAtTop(true);
      }
    });
  }, [isAtTop]);

  return (
    <div
      className={`w-full fixed top-0 z-50  px-6 hidden lg:flex ${
        isAtTop ? "bg-transparent py-4" : "bg-white shadow-lg"
      }`}
    >
      <div className="w-full flex flex-wrap items-center justify-between mx-auto p-4">
        <button
          className={`flex items-center space-x-3 text-xl font-semibold ${
            isAtTop ? "text-white" : "text-black"
          } `}
        >
          realAlzation
        </button>

        <div className="flex">
          <div
            className={`text-xs font-semibold px-4 py-1 ${
              isAtTop ? "text-white" : "text-black"
            } hover:text-yellow-500 hover:cursor-pointer relative`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Services
            {isHovered && (
              <div
                className="absolute w-64 -left-14 py-6"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className="w-full bg-cyan-500 p-2 flex flex-col rounded-md">
                  <div className="w-full px-6 py-4 text-white hover:text-cyan-500 hover:bg-white rounded-md hover:cursor-pointer">
                    Strategy and Assesment
                  </div>
                  <div className="w-full px-6 py-4 text-white hover:text-cyan-500 hover:bg-white rounded-md hover:cursor-pointer">
                    Advisory Board and Coaching
                  </div>
                  <div className="w-full px-6 py-4 text-white hover:text-cyan-500 hover:bg-white rounded-md hover:cursor-pointer">
                    AI Strategy
                  </div>
                  <div className="w-full px-6 py-4 text-white hover:text-cyan-500 hover:bg-white rounded-md hover:cursor-pointer">
                    Sourcing Advisory
                  </div>
                  <div className="w-full px-6 py-4 text-white hover:text-cyan-500 hover:bg-white rounded-md hover:cursor-pointer">
                    Talent Solutions
                  </div>
                </div>
              </div>
            )}
          </div>
          <div
            className={`text-xs font-semibold px-4 py-1 ${
              isAtTop ? "text-white" : "text-black"
            } hover:text-yellow-500 hover:cursor-pointer`}
          >
            Resources
          </div>
          <div
            className={`text-xs font-semibold  px-4 py-1 ${
              isAtTop ? "text-white" : "text-black"
            } hover:text-yellow-500 hover:cursor-pointer`}
          >
            About Us
          </div>
          <div
            className={`text-xs font-semibold px-4 py-1 ${
              isAtTop ? "text-white" : "text-black"
            } ${
              isAtTop && toAnimate
                ? "hover:text-neutral-700"
                : "hover:text-yellow-500"
            } hover:cursor-pointer`}
            onMouseEnter={() => updateVariable(true)}
            onMouseLeave={() => updateVariable(false)}
          >
            Contact Us
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header2;
