import React, { useContext } from "react";
import CustomButton from "./CustomButton";
import { ContactAnimation } from "../Pages/home/home";

const Hero = () => {
  const { toAnimate } = useContext(ContactAnimation);

  return (
    <div
      className="w-full h-screen md:h-[125vh] flex justify-center items-center flex-col gap-4 pt-10 relative overflow-hidden"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://chooseacacia.com/wp-content/uploads/2024/01/AdobeStock_2516269-scaled.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {toAnimate && (
        <div className="absolute w-40 h-20 bg-yellow-500 rounded-b-full top-0 -right-2 z-25">
          {" "}
        </div>
      )}

      <div className="w-full flex justify-center items-center px-6 pt-8 md:pt-6">
        <div className="max-w-xl flex flex-col gap-4">
          <div className="text-center text-4xl md:text-5xl font-bold text-white">
            Spark Ideas <br className="hidden md:block" /> Into Action
          </div>
          <div className="text-white text-center text-sm md:text-base">
            realAlzation empowers business and technology decisions that control
            costs, mitigate risks and deliver exceptional business value with
            breakthrough technologies like AI.
          </div>
          <div className="w-full flex justify-center pt-10">
            <CustomButton buttonText="Speak to an Expert Today" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
