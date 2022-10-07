import React from "react";
import { motion } from "framer-motion";
import data from "../../data/projects";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const allProjects = data["All"];

const ArchiveCard = (prop) => {
  return (
    <a href={prop.link} target="_blank" rel="noreferrer">
      <motion.div
        whileHover={{ scale: 1.025 }}
        whileTap={{ scale: 0.975 }}
        transition={{ type: "spring", stiffness: 400, damping: 7, bounce: 0.2 }}
        className={`my-2 h-52 max-w-[600px] select-none rounded-xl bg-white p-4 py-4 shadow shadow-zinc-200 ring-lm-primary hover:ring-1`}
      >
        <div className="flex justify-between">
          <div className="ml-2 flex h-12 w-12 items-center justify-center rounded-full ring-1 ring-zinc-800/5 ring-offset-[6px]">
            <img className="rounded-full" src={prop.image} alt="" />
          </div>
          <div className="mt-1 flex text-xs text-zinc-500">
            <p className="w-full font-extralight text-zinc-600">{prop.date}</p>
          </div>
        </div>

        <div className="mt-2 flex  flex-col justify-between p-2 text-xs subpixel-antialiased">
          <div className="leading-5 tracking-tighter subpixel-antialiased">
            <p className="mt-4 text-sm font-medium leading-5">{prop.title}</p>
            <p className="mt-2 text-xs font-extralight leading-4 tracking-tight line-clamp-4">
              {prop.description}
            </p>
          </div>
        </div>
      </motion.div>
    </a>
  );
};

const ArchiveMobileCard = (prop) => {
  return (
    <a href={prop.link} target="_blank" rel="noreferrer">
      <motion.div
        whileHover={{ scale: 1.025 }}
        whileTap={{ scale: 0.975 }}
        transition={{ type: "spring", stiffness: 400, damping: 7, bounce: 0.2 }}
        className="group flex max-h-[4.25rem]  select-none items-center rounded-2xl bg-white p-1 shadow shadow-zinc-200 ring-lm-primary hover:ring-1"
      >
        <div className="flex items-center px-2">
          <img
            src={prop.image}
            className={` h-12 w-14 rounded-xl border  border-zinc-800/5 shadow-md`}
            alt=""
          />
        </div>

        <div className="flex w-full justify-between px-2 ">
          <div className={`h-full w-full  py-3`}>
            <p className="text-[.6rem] text-xs font-extralight text-zinc-500">
              {prop.date}
            </p>
            <p className="mt-1 text-xs font-medium line-clamp-2">
              {prop.title}
            </p>
          </div>
          <div className={` flex items-center  py-3 px-2`}>
            <a href="https://www.google.com/" rel="noreferrer">
              <ArrowRightIcon className="h-6 w-6 text-zinc-500  group-hover:text-lm-primary" />
            </a>
          </div>
        </div>
      </motion.div>
    </a>
  );
};

const ArchiveSection = () => {
  return (
    <>
      {" "}
      <div className="hidden grid-cols-1 justify-items-center p-4 sm:grid sm:grid-cols-1 sm:gap-0 smmd:grid-cols-2 smmd:gap-3 md:grid-cols-3 lg:grid-cols-4">
        {allProjects.map((item) => (
          <ArchiveCard
            title={item.title}
            date={item.date}
            image={item.image}
            description={item.description}
            link={item.link}
          />
        ))}
      </div>
      <div className="grid-col-1 grid gap-2 p-2 sm:hidden">
        {allProjects.map((item) => (
          <ArchiveMobileCard
            title={item.title}
            date={item.date}
            image={item.image}
            link={item.link}
          />
        ))}
      </div>
    </>
  );
};

const Archive = () => {
  return (
    <>
      <div className="z-0 mx-auto max-w-screen-xl bg-zinc-50 pt-[4px] ">
        <ArchiveSection />
      </div>
    </>
  );
};

export default Archive;
