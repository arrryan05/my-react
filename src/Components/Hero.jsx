import React from "react";
import CustomButton from "./CustomButton";

const Hero = () => {
  return (
    <div
      className="w-full h-screen flex justify-center items-center flex-col gap-4"
      style={{
        backgroundImage:
          'url("https://chooseacacia.com/wp-content/uploads/2024/01/AdobeStock_2516269-scaled.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="px-6 text-5xl md:text-6xl md:w-1/3 font-bold text-white">
        Spark Ideas Into Action
      </div>
      <div className="text-white md:w-3/4 px-6">
        Acacia empowers business and technology decisions that control costs,
        mitigate risks and deliver exceptional business value with breakthrough
        technologies like AI.
      </div>
      <CustomButton buttonText="Speak to an Expert Today" />
    </div>
  );
};

export default Hero;
