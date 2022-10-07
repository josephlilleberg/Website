import React, { useEffect, useState, Fragment } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { LinkIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion"; 




const BlogCard = (prop) => {
  // Props: {image, title, last}
  return (
    <div className="group flex h-[4.25rem] w-[90vw] items-center ">
      <div className="flex items-center p-1">
        <img
          src={prop.image}
          className={` h-12 w-14 rounded-xl border  border-lm-primary/30 shadow-md group-hover:shadow-lm-primary/50`} alt=""
        />
      </div>

      <div className="flex w-full justify-between pl-2 ">
        <div className={`h-full w-full ${!prop.last ? "border-b" : ""} py-3`}>
          <p className="text-[.6rem] text-zinc-300">Aug 2022</p>
          <p className="text-xs line-clamp-2">{prop.title}</p>
        </div>
        <div
          className={` flex items-center ${!prop.last ? "border-b" : ""} py-3`}
        >
          <a href="https://www.google.com/" target="_blank" rel="noreferrer">
            <ArrowRightIcon className="h-6 w-6 text-zinc-500  group-hover:text-lm-primary" />
          </a>
        </div>
      </div>
    </div>
  );
};

const IOSCard = (prop) => {
  return (
    <motion.div
      whileHover={{ scale: 1.025 }}
      whileTap={{ scale: 0.975 }}
      className="group flex h-[4.25rem] w-[90vw] items-center rounded-2xl bg-white p-1 shadow shadow-zinc-200"
    >
      <div className="flex items-center px-2">
        <img
          src={prop.image}
          className={` h-12 w-auto rounded-xl border  border-zinc-800/5 shadow-md`}
          alt=""
        />
      </div>

      <div className="flex w-full justify-between px-2 ">
        <div className={`h-full w-full  py-2`}>
          <p className="text-[.6rem] text-xs text-zinc-300">{prop.date}</p>
          <p className="mt-1 text-xs line-clamp-2"> xd {prop.title}</p>
        </div>
        <div className={` flex items-center  py-3 px-4`}>
          <a href="https://www.google.com/" target="_blank" rel="noreferrer">
            <ArrowRightIcon className="h-6 w-6 text-zinc-500  group-hover:text-lm-primary" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export {
  IOSCard,
  BlogCard
};
