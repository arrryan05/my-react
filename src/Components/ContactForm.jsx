import React from "react";
import CustomButton from "./CustomButton";

const ContactForm = () => {
  return (
    <div className="container-fluid mt-20 mx-auto bg-gradient-to-tr from-sky-900 to-cyan-500 ">
      <div className="flex flex-wrap justify-center gap-6 px-6">
        <div className="w-full text-white md:w-5/12 flex flex-col justify-center pt-6 md:pt-0">
          <p className="mb-4 text-center md:text-start text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wide max-w-sm ">
            Elevate Your Business Strategy
          </p>
          <p className="mb-4 text-sm text-center md:text-start">
            Fill out the form and we will get back to you as soon as we can, so
            that we can help you make better decisions that lead to better
            outcomes.
          </p>
        </div>
        <div className="py-10 w-full md:w-5/12 ">
          <form className="">
            <div className="mb-4">
              <input
                type="text"
                className="bg-white rounded-sm placeholder-neutral-400 w-full px-4 py-2 text-sm outline-none"
                placeholder="NAME"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                className="bg-white rounded-sm outline-none placeholder-neutral-400 w-full px-4 py-2 text-sm"
                placeholder="EMAIL"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                className="bg-white rounded-sm outline-none placeholder-neutral-400 w-full px-4 py-2 text-sm"
                placeholder="COMPANY"
              />
            </div>
            <div className="mb-4">
              <textarea
                className="w-full rounded-sm placeholder-neutral-400 bg-white outline-none px-4 py-2 text-sm"
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
