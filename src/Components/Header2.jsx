import React, { useEffect, useState } from "react";

const Header2 = () => {
  const [isAtTop, setIsAtTop] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

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
      className={`w-full fixed top-0 z-50 py-4 hidden lg:flex ${
        isAtTop ? "bg-transparent" : "bg-white"
      }`}
    >
      <div className="w-full flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3">
          <img
            className="h-8"
            src={`${isAtTop ? "./logoTop.png" : "./logo.png"}`}
            alt="Acacia Advisors"
          />
        </a>

        <div className="flex">
          <div
            className={`text-sm font-semibold px-4 py-1 ${
              isAtTop ? "text-white" : "text-black"
            } hover:text-yellow-500 hover:cursor-pointer relative`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            SERVICES
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
            className={`text-sm font-semibold px-4 py-1 ${
              isAtTop ? "text-white" : "text-black"
            } hover:text-yellow-500 hover:cursor-pointer`}
          >
            RESOURCES
          </div>
          <div
            className={`text-sm font-semibold  px-4 py-1 ${
              isAtTop ? "text-white" : "text-black"
            } hover:text-yellow-500 hover:cursor-pointer`}
          >
            ABOUT US
          </div>
          <div
            className={`text-sm font-semibold px-4 py-1 ${
              isAtTop ? "text-white" : "text-black"
            } hover:text-yellow-500 hover:cursor-pointer`}
          >
            CONTACT US
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header2;
