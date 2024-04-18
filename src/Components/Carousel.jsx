import { useState } from "react";
import CustomButton from "./CustomButton";

const Carousel = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const accordionData = [
    {
      title: "Strategy and Assessment",
      content1: "Strategy and Assessment",
      content2:
        "Our Strategy and Assessment services act as a guiding light, that provides you with a tailored blueprint to transform your IT strategy into a potent catalyst for both margin expansion and enhanced business value.",
      image:
        "https://chooseacacia.com/wp-content/uploads/2024/01/tab-bg-strategy-and-assessment.jpg",
    },
    {
      title: "Advisory Boards",
      content1: "Advisory Boards",
      content2:
        "Our Advisory Boards are a conduit to better decisions and better outcomes. We connect you with seasoned executives whose collective wisdom helps you navigate the complexities of profitable growth in rapidly evolving markets.",
      image:
        "https://chooseacacia.com/wp-content/uploads/2024/01/tab-bg-advisory-board.jpeg",
    },
    {
      title: "Artificial Intelligence Enablement",
      content1: "Artificial Intelligence Enablement",
      content2:
        "realAlzation helps you harness AI as a powerhouse for strategic transformation. AI is no longer a shiny object, but a visionary’s ally for the future, optimize operations, elevate products/services, and uncover new revenue streams.",
      image:
        "https://chooseacacia.com/wp-content/uploads/2024/01/tab-bg-ai-enablement.jpg",
    },
    {
      title: "Sourcing Advisory",
      content1: "Sourcing Advisory",
      content2:
        "Our sourcing experts help you turn challenges into opportunities with strategic partnerships to achieve your business goals. We guide you through sourcing decisions that reduce costs, enhance service quality, and mitigate risks, positioning you for sustainable growth and success.",
      image:
        "https://chooseacacia.com/wp-content/uploads/2024/01/tab-bg-sourcing-advisory.jpg",
    },
    {
      title: "Talent Solutions",
      content1: "Talent Solutions",
      content2:
        "We have the executive placement and staffing expertise to match you with the right technology professionals for your mission. Our approach delivers highly skilled resources who fit, embracing your culture, lowering attrition risk, and ensuring your team delivers on your growth objectives.",
      image:
        "https://chooseacacia.com/wp-content/uploads/2024/01/tab-bg-talent-solutions.jpg",
    },
  ];

  return (
    <div className="container-fluid my-6 hidden md:flex h-[35rem]">
      <div className="md:w-2/5 flex justify-center items-center bg-gradient-to-br from-cyan-900 to-cyan-500">
        <ul className="w-full px-12">
          {accordionData.map((item, index) => (
            <li
              key={index}
              className={`py-2 px-4 cursor-pointer text-white ${
                openIndex === index ? "text-white" : "text-gray-700"
              }`}
              onClick={() => setOpenIndex(index)}
            >
              <div
                className={`flex items-center justify-start gap-4 ${
                  openIndex === index ? "" : ""
                }`}
              >
                <div
                  className={`w-1 h-10 bg-yellow-500 ${
                    openIndex === index ? "opacity-100" : " opacity-50"
                  }`}
                ></div>
                <span
                  className={`text-2xl text-white ${
                    openIndex === index ? "font-bold" : ""
                  }`}
                >
                  {item.title}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="md:w-3/5 h-full">
        {accordionData.map((item, index) => (
          <div
            key={index}
            className={`h-full bg-cyan-800 ${
              openIndex === index ? "block" : "hidden"
            } transition-opacity duration-1000 ease-in-out `}
          >
            <div className="w-full relative h-full">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col gap-2 justify-end p-20 bg-black bg-opacity-40">
                <div className="text-white text-4xl font-semibold">
                  {item.content1}
                </div>
                <div className="text-white text-xl tracking-tight">
                  {item.content2}
                </div>
                <div className="w-28">
                  <CustomButton buttonText="Learn More" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
