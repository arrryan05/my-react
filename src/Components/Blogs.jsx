import React from "react";

const Blogs = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full md:w-3/4 p-6 flex justify-center flex-col sm:flex-row gap-6">
        <div className="w-full sm:w-1/3 bg-white rounded-t-lg">
          <a href="#">
            <img
              className="rounded-lg h-48 w-full object-cover"
              src="https://chooseacacia.com/wp-content/uploads/2024/04/ai-future-trends.png"
              alt=""
            />
          </a>
          <div className="flex flex-col justify-center items-start py-8 ">
            <p className="text-xl font-bold tracking-wider text-cyan-500">
              BLOG
            </p>
            <p className="text-gray-700 text-xl pb-2">
              Looking Ahead: Emerging AI Trends and How to Prepare
            </p>
          </div>
        </div>
        <div className="w-full sm:w-1/3 bg-white rounded-t-lg">
          <a href="#">
            <img
              className="rounded-lg h-48 w-full object-cover"
              src="https://chooseacacia.com/wp-content/uploads/2024/04/ai-future-trends.png"
              alt=""
            />
          </a>
          <div className="flex flex-col justify-center items-start py-8 ">
            <p className="text-xl font-bold tracking-wider text-cyan-500">
              BLOG
            </p>
            <p className="text-gray-700 text-xl pb-2">
              Measuring Success: Key Metrics and KPIs for AI Initiatives
            </p>
          </div>
        </div>
        <div className="w-full sm:w-1/3 bg-white rounded-t-lg">
          <a href="#">
            <img
              className="rounded-lg h-48 w-full object-cover"
              src="https://chooseacacia.com/wp-content/uploads/2024/04/ai-future-trends.png"
              alt=""
            />
          </a>
          <div className="flex flex-col justify-center items-start py-8 ">
            <p className="text-xl font-bold tracking-wider text-cyan-500">
              BLOG
            </p>
            <p className="text-gray-700 text-xl pb-2">
              Scaling AI: From Pilot to Enterprise-Wide Adoption
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
