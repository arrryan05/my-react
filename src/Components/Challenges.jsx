import React from "react";

const Challenges = () => {
  return (
    <div className="flex flex-col md:flex-row p-6 w-full gap-6">
      <div className="flex flex-col gap-4 justify-center w-full md:w-1/2 text-center md:text-start">
        <div className="text-5xl bold">Solve Your Biggest Challenges</div>
        <p className="text-xl text-gray-600">
          The pace of technological evolution demands you to adapt to win in an
          ever-changing business climate.
        </p>
        <p className="text-xl text-gray-600">
          Acacia is the force multiplier you need for a people and technology
          strategy that delivers true competitive advantage. Our advisors are
          tech-forward, and business value-driven, with the experience to help
          you turn strategy into reality.
        </p>
      </div>
      <div className="w-full md:w-1/2 object-cover flex justify-center items-center">
        <img src="./Capture.JPG" alt="Challenges" />
      </div>
    </div>
  );
};

export default Challenges;
