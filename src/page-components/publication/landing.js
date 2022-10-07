import React from "react";

const PublicationLanding = () => {
  return (
    <div className="mx-auto flex max-w-screen-xl items-center justify-center smmd:justify-start">
      <div className="mb-4 mt-[10vh] px-[30px] sm:mt-[15vh]">
        <div className="flex select-none flex-col gap-y-2 text-center smmd:text-left md:gap-y-2 lg:gap-y-4">
          <p className="text-3xl font-light  sm:text-5xl md:text-6xl lg:text-7xl">
            Publication
          </p>
          <p className="text-sm font-extralight  text-zinc-600 sm:text-base md:text-lg">
            A very short list of my sole publication
          </p>
        </div>
      </div>
    </div>
  );
};

export default PublicationLanding;
