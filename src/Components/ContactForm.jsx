import React from "react";
import CustomButton from "./CustomButton";

const ContactForm = () => {
  return (
    <div className="container-fluid mt-20 mx-auto bg-gradient-to-tr from-sky-900 to-cyan-500 ">
      <div className="flex flex-wrap justify-center gap-10 p-6">
        <div className="w-full text-white md:w-5/12 flex flex-col justify-center">
          <p className="mb-4 text-center md:text-start text-4xl lg:text-6xl font-semibold tracking-wide ">
            Begin Your AI Transformation
          </p>
          <p className="mb-4 text-xl text-center md:text-start">
            Partner with Acacia for a strategic approach to AI. Schedule your
            complimentary strategy session today and take the first step towards
            AI-driven success.
          </p>
        </div>
        <div className="py-10 w-full md:w-5/12 ">
          <form className="py-6">
            <div className="mb-4">
              <input
                type="text"
                className="bg-white placeholder-neutral-400 w-full px-4 py-2 text-xl outline-none"
                placeholder="NAME"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                className="bg-white outline-none placeholder-neutral-400 w-full px-4 py-2 text-xl"
                placeholder="EMAIL"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                className="bg-white outline-none placeholder-neutral-400 w-full px-4 py-2 text-xl"
                placeholder="COMPANY"
              />
            </div>
            <div className="mb-4">
              <textarea
                className="w-full rounded placeholder-neutral-400 bg-white outline-none px-4 py-2 text-xl"
                rows="6"
                placeholder="MESSAGE"
              ></textarea>
            </div>
            <CustomButton buttonText="Send" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
