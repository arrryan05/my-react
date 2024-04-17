import React from "react";

const Footer = () => {
  return (
    <footer class="w-full">
      <div class="w-full mx-auto p-12">
        <div class="grid justify-evenly grid-cols-1 gap-4 md:grid-cols-3">
          <img
            src="https://chooseacacia.com/wp-content/uploads/2024/01/logo_final_acacia-logo-hor.png"
            alt="logo"
            className="w-40"
          />
          <div class="grid col-span-2 justify-between grid-cols-1 md:grid-cols-4 gap-4">
            <ul className="">
              <p class="block mb-3 font-sans text-lg antialiased font-semibold leading-normal text-black">
                Services
              </p>
              <li>
                <button class="block py-1.5 font-sans text-xs font-normal leading-relaxed text-gray-700 antialiased transition-colors hover:text-black">
                  Strategy and Assessment
                </button>
              </li>
              <li>
                <button class="block py-1.5 font-sans text-xs font-normal leading-relaxed text-gray-700 antialiased transition-colors hover:text-black">
                  AI Strategy
                </button>
              </li>
              <li>
                <button class="block py-1.5 font-sans text-xs font-normal leading-relaxed text-gray-700 antialiased transition-colors hover:text-black">
                  Sourcing Advisory
                </button>
              </li>
              <li>
                <button class="block py-1.5 tracking-tight font-sans text-xs font-normal leading-relaxed text-gray-700 antialiased transition-colors hover:text-black">
                  Advisory Boards and Coaching
                </button>
              </li>
              <li>
                <button class="block py-1.5 font-sans text-xs font-normal leading-relaxed text-gray-700 antialiased transition-colors hover:text-black">
                  Talent Solutions
                </button>
              </li>
            </ul>
            <ul>
              <p class="block mb-3 font-sans text-lg antialiased font-semibold leading-normal text-black">
                Resources
              </p>
              <li>
                <button class="block py-1.5 font-sans text-xs font-normal leading-relaxed text-gray-700 antialiased transition-colors hover:text-black">
                  Featured Insights
                </button>
              </li>
            </ul>
            <ul>
              <p class="block mb-3 font-sans text-lg antialiased font-semibold leading-normal text-black">
                About Us
              </p>
              <li>
                <button class="block py-1.5 font-sans text-xs font-normal leading-relaxed text-gray-700 antialiased transition-colors hover:text-black">
                  Our Mission
                </button>
              </li>
              <li>
                <button class="block py-1.5 font-sans text-xs font-normal leading-relaxed text-gray-700 antialiased transition-colors hover:text-black">
                  Acacia Values
                </button>
              </li>
              <li>
                <button class="block py-1.5 font-sans text-xs font-normal leading-relaxed text-gray-700 antialiased transition-colors hover:text-black">
                  Meet Our Advisors
                </button>
              </li>
              <li>
                <button class="block py-1.5 font-sans text-xs font-normal leading-relaxed text-gray-700 antialiased transition-colors hover:text-black">
                  Acacia Leadership
                </button>
              </li>
            </ul>
            <ul>
              <p class="block mb-3 font-sans text-lg antialiased font-semibold leading-normal text-black">
                Contact Us
              </p>
              <li>
                <a href="https://www.linkedin.com/company/acacia-advisors">
                  <img src="./linkedin.svg" className="w-12" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
