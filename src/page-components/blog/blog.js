import React from "react";
import data from "../../data/blogs";

const allBlogs = data["All"];

const BlogCard = (prop) => {
  return (
    <div className="flex select-none flex-col gap-2 py-2 sm:w-[90vw] md:max-w-[800px] md:flex-row ">
      <p className="w-[200px] border-l-2 border-zinc-200 pl-2 text-[14px] font-light text-zinc-400 sm:pl-4 md:border-none">
        {prop.date}
      </p>
      <p className="flex flex-col gap-2 md:w-3/4 ">
        <p className="text-sm font-semibold sm:text-base">{prop.title}</p>
        <p className="text-xs text-zinc-500 sm:text-sm">{prop.description}</p>
        <a href={prop.link} target="_blank" rel="noreferrer">
          <p className="text-xs text-lm-primary-soft hover:underline sm:text-sm">
            Read article
          </p>
        </a>
      </p>
    </div>
  );
};

const Blog = () => {
  return (
    <>
      <div className="mx-auto flex max-w-screen-xl items-center justify-center smmd:justify-start ">
        <div className="mx-[30px] mt-6 mb-4 flex flex-col gap-8 border-zinc-200 md:border-l">
          {allBlogs.map((item) => (
            <BlogCard
              date={item.date}
              title={item.title}
              description={item.description}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;
