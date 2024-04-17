import React, { useEffect, useState } from "react";

const Header = () => {
  const [isAtTop, setIsAtTop] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const genericHamburgerLine = `h-1 w-8 my-[3px] rounded-full transition ease transform duration-300`;

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
      className={`w-full fixed top-0 z-50 py-4 lg:hidden ${
        isOpen ? "bg-cyan-500" : isAtTop ? "bg-transparent" : "bg-white"
      }`}
    >
      <div className="w-full flex flex-wrap items-center justify-between mx-auto p-4">
        <button className="flex items-center space-x-3">
          <img
            className="h-8"
            src={`${isAtTop ? "./logoTop.png" : "./logo.png"}`}
            alt="Acacia Advisors"
          />
        </button>

        <button
          className="flex flex-col h-10 w-16 justify-center items-center group"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div
            className={`${genericHamburgerLine}  ${
              isAtTop ? "bg-white" : "bg-cyan-500"
            } ${isOpen ? "rotate-45 translate-y-[0.6rem] bg-white" : ""} `}
          />
          <div
            className={`${genericHamburgerLine} ${
              isAtTop ? "bg-white" : "bg-cyan-500"
            } ${isOpen ? "opacity-0" : ""}  `}
          />
          <div
            className={`${genericHamburgerLine} ${
              isAtTop ? "bg-white" : "bg-cyan-500"
            } ${isOpen ? "-rotate-45 -translate-y-[0.6rem] bg-white" : ""}  `}
          />
        </button>

        {isOpen ? (
          <div className="w-full flex flex-col pt-4 bg-cyan-500">
            <div
              className="w-full px-4 py-1 text-white flex hover:cursor-pointer hover:text-yellow-500"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              SERVICES
              <svg
                className={`ml-2 h-5 w-5 ${dropdownOpen ? "-rotate-180" : ""}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 14.293a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L10 11.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            {dropdownOpen && (
              <>
                <div className="w-full px-6 py-1 text-white hover:text-yellow-500 hover:cursor-pointer">
                  Strategy and Assesment
                </div>
                <div className="w-full px-6 py-1 text-white hover:text-yellow-500 hover:cursor-pointer">
                  Advisory Board and Coaching
                </div>
                <div className="w-full px-6 py-1 text-white hover:text-yellow-500 hover:cursor-pointer">
                  AI Strategy
                </div>
                <div className="w-full px-6 py-1 text-white hover:text-yellow-500 hover:cursor-pointer">
                  Sourcing Advisory
                </div>
                <div className="w-full px-6 py-1 text-white hover:text-yellow-500 hover:cursor-pointer">
                  Talent Solutions
                </div>
              </>
            )}
            <div className="w-full px-4 py-1 text-white hover:text-yellow-500 hover:cursor-pointer">
              RESOURCES
            </div>
            <div className="w-full px-4 py-1 text-white hover:text-yellow-500 hover:cursor-pointer">
              ABOUT US
            </div>
            <div className="w-full px-4 py-1 text-white hover:text-yellow-500 hover:cursor-pointer">
              CONTACT US
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Header;
