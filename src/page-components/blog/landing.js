import React  from "react";

const BlogLanding = () => {
  return (
    <div className="mx-auto flex max-w-screen-xl items-center justify-center smmd:justify-start">
      <div className="mb-4 mt-[10vh] sm:mt-[15vh] px-[30px]">
        <div className="flex select-none flex-col gap-y-2 text-center smmd:text-left md:gap-y-2 lg:gap-y-4">
          <p className="text-3xl font-light  sm:text-5xl md:text-6xl lg:text-7xl">
            Blog
          </p>
          <p className="text-sm font-extralight  text-zinc-600 sm:text-base md:text-lg">
            A compilation of all articles i've written
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogLanding;

