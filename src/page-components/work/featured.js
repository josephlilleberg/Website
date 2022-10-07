import React from "react";
import { motion } from "framer-motion";
import data from "../../data/projects";

const allProjects = data["All"];
const featuredProjects = data["Featured"];

const DesktopCardFeatured = (prop) => {
  return (
    <a href={prop.link} target="_blank" rel="noreferrer">
      <motion.div
        whileHover={{ scale: 1.025 }}
        whileTap={{ scale: 0.975 }}
        transition={{ type: "spring", stiffness: 400, damping: 7, bounce: 0.2 }}
        className={`h-56 max-w-[600px] select-none rounded-xl bg-white p-4 py-4 shadow shadow-zinc-200 ring-lm-primary hover:ring-1`}
      >
        <div className="flex justify-between">
          <div className="ml-2 flex h-12 w-12 items-center justify-center rounded-full ring-1 ring-zinc-800/5 ring-offset-[6px]">
            <img className="rounded-full" src={prop.image} alt="" />
          </div>
          <div className="mt-1 flex text-xs text-zinc-500">
            <p className="w-full font-extralight text-zinc-600">{prop.date}</p>
          </div>
        </div>

        <div className="mt-2 flex flex-col justify-between p-2  subpixel-antialiased">
          <div className="">
            <p className="text-xs font-light text-lm-primary smmd:text-sm ">
              Featured
            </p>
            <p className="mt-2 text-sm font-medium smmd:text-base md:text-sm lg:text-base">
              {allProjects[0].title}
            </p>
            <p className="mt-2 text-xs font-extralight  leading-5 tracking-tight smmd:text-sm md:text-xs lg:text-sm ">
              {prop.description}
            </p>
          </div>
        </div>
      </motion.div>
    </a>
  );
};

const MobileCardFeatured = (prop) => {
  return (
    <a href={prop.link} target="_blank" rel="noreferrer">
      <motion.div
        whileHover={{ scale: 1.025 }}
        whileTap={{ scale: 0.975 }}
        transition={{ type: "spring", stiffness: 400, damping: 7, bounce: 0.2 }}
        className={`my-2 w-[80vw] min-w-[260px] max-w-[350px] select-none rounded-xl bg-white p-4 py-4 shadow shadow-zinc-200 ring-lm-primary hover:ring-1`}
      >
        <div className="flex justify-between">
          <div className="ml-2 flex h-12 w-12 items-center justify-center rounded-full ring-1 ring-zinc-800/5 ring-offset-[6px]">
            <img className="rounded-full" src={prop.image} alt="" />
          </div>
          <div className="mt-1 flex text-xs text-zinc-400">
            <p className="w-full font-extralight text-zinc-500">{prop.date}</p>
          </div>
        </div>

        <div className="mt-2 flex  flex-col justify-between p-2 text-xs subpixel-antialiased">
          <div className="leading-5 tracking-tighter subpixel-antialiased">
            <p className="text-sm font-light text-lm-primary">Featured</p>
            <p className="mt-2 text-sm font-medium leading-5">{prop.title}</p>
            <p className="mt-2 text-xs font-extralight leading-4 tracking-tight ">
              {prop.description}
            </p>
          </div>
        </div>
      </motion.div>
    </a>
  );
};

const FeaturedSection = () => {
  return (
    <>
      <ul className="relative flex w-full snap-x snap-mandatory gap-4 overflow-x-auto px-[2.5vw] sm:hidden">
        {featuredProjects.map((item) => (
          <li className="snap-center snap-always">
            <MobileCardFeatured
              title={item.title}
              date={item.date}
              image={item.image}
              description={item.description}
              link={item.link}
            />
          </li>
        ))}
      </ul>
      <ul className="hidden grid-cols-1 justify-items-center gap-4 p-4 sm:grid md:grid-cols-3">
        {featuredProjects.map((item) => (
          <DesktopCardFeatured
            title={item.title}
            date={item.date}
            image={item.image}
            description={item.description}
            link={item.link}
          />
        ))}
      </ul>
    </>
  );
};

const WorkFeatured = () => {
  return (
    <>
      <div className="z-0 mx-auto max-w-screen-xl bg-zinc-50 pt-[4px] ">
        <FeaturedSection />
      </div>
    </>
  );
};

export default WorkFeatured;
