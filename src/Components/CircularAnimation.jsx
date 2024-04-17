import React, { useEffect, useRef, useState } from "react";

const CircularAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const divRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (divRef.current) {
        const topOffset = divRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        const halfwayPoint = windowHeight / 2;

        if (topOffset < halfwayPoint && !isVisible) {
          setIsVisible(true);
        } else if (topOffset >= halfwayPoint && isVisible) {
          setIsVisible(false);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isVisible]);

  return (
    <div className="w-full h-96 md:w-1/2 flex justify-center ">
      <div ref={divRef} className="w-96 h-full  relative transition-all">
        <div
          className={`w-40 md:w-44 h-40 md:h-44 flex justify-center items-center rounded-full opacity-85 bg-sky-800 absolute top-0 right-0 transition-all ${
            isVisible
              ? "transform -translate-x-[30%] translate-y-[30%] md:-translate-x-[20%] md:translate-y-[20%] ease-in duration-500 "
              : ""
          }`}
        >
          <img
            src="https://chooseacacia.com/wp-content/uploads/2024/01/circle-icon-navy.png"
            alt=""
            className="w-3/5 h-3/5 "
          />
        </div>
        <div
          className={`w-40 md:w-44 h-40 md:h-44 flex justify-center items-center rounded-full opacity-85 bg-cyan-500 absolute top-0 left-0 transition-all ${
            isVisible
              ? "transform translate-x-[30%] translate-y-[30%] md:translate-x-[20%] md:translate-y-[20%] ease-in duration-500"
              : ""
          }`}
        >
          <img
            src="https://chooseacacia.com/wp-content/uploads/2024/01/circle-icon-teal.png"
            alt=""
            className="w-3/5 h-3/5 "
          />
        </div>
        <div
          className={`w-40 md:w-44 h-40 md:h-44 flex justify-center items-center rounded-full opacity-85 bg-yellow-500 absolute bottom-0 left-1/2 transform -translate-x-1/2 transition-all ${
            isVisible
              ? "transform -translate-y-[35%] md:-translate-y-[25%] ease-in duration-500"
              : ""
          }`}
        >
          <img
            src="https://chooseacacia.com/wp-content/uploads/2024/01/circle-icon-gold.png"
            alt=""
            className="w-3/5 h-3/5 "
          />
        </div>
      </div>
    </div>
  );
};

export default CircularAnimation;
