import React from "react";

const BlogCard = ({ text, imageSrc }) => {
  return (
    <div className="w-full sm:w-1/3 bg-white rounded-t-md hover:cursor-pointer hover:-translate-y-4 duration-300">
      <div>
        <img
          className="rounded-md h-48 w-full object-cover center"
          src={imageSrc}
          alt=""
        />
      </div>
      <div className="flex flex-col justify-center items-start py-6 ">
        <p className="font-bold tracking-wider text-cyan-500">BLOG</p>
        <p className="text-neutral-800 pb-2 text-sm">{text}</p>
      </div>
    </div>
  );
};

const Blogs = () => {
  return (
    <div className="w-full flex justify-center py-4">
      <div className="w-full md:w-3/4 px-4 flex justify-center flex-col sm:flex-row gap-6">
        <BlogCard
          text={
            "Taking Flight: How Lessons Learned From Aviation Can Propel Business Success"
          }
          imageSrc={
            "https://chooseacacia.com/wp-content/uploads/2024/04/doug-flying-opinion.png"
          }
        />
        <BlogCard
          text={"Looking Ahead: Emerging AI Trends and How to Prepare"}
          imageSrc={
            "https://chooseacacia.com/wp-content/uploads/2024/04/ai-future-trends.png"
          }
        />
        <BlogCard
          text={"Measuring Success: Key Metrics and KPIs for AI Initiatives"}
          imageSrc={
            "https://chooseacacia.com/wp-content/uploads/2024/04/ai-metrics.png"
          }
        />
      </div>
    </div>
  );
};

export default Blogs;
