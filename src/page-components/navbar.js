import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { useResizeDetector } from "react-resize-detector";
import { Squeeze as Hamburger } from "hamburger-react";
import { navigate } from "gatsby";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const { width, ref } = useResizeDetector();

  function navigateTo(link) {
    enableBodyScroll(ref);
    navigate(link);
  }

  const navItems = [
    {
      page: "Home",
      route: <div onClick={() => navigateTo("/")}>Home</div>,
    },
    {
      page: "Experience",
      route: <div onClick={() => navigateTo("/experience")}>Experience</div>,
    },
    {
      page: "Work",
      route: <div onClick={() => navigateTo("/work")}>Work</div>,
    },
    {
      page: "Archive",
      route: <div onClick={() => navigateTo("/archive")}>Archive</div>,
    },
    {
      page: "Publication",
      route: <div onClick={() => navigateTo("/publication")}>Publication</div>,
    },
    {
      page: "Blog",
      route: <div onClick={() => navigateTo("/blog")}>Blog</div>,
    },

    {
      page: "Contact",
      route: <div onClick={() => navigateTo("/contact")}>Contact</div>,
    },
  ];

  const dropdown = {
    visible: {
      height: "100vh",
      display: "block",
      transition: { duration: 0.45, ease: "backInOut" },
    },
    hidden: {
      height: 0,
      display: "none",
      transition: {
        duration: 0.45,
        ease: "backInOut",
        display: { delay: 0.45 },
      },
    },
  };

  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.03,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.015,
        staggerDirection: -1,
      },
    },
  };

  const item = {
    visible: {
      opacity: 1,
    },
    hidden: {
      opacity: 0,
    },
  };

  useEffect(() => {
    if (width >= 834 && isActive) {
      setIsActive(false);
      enableBodyScroll(ref);
    }

    isActive ? disableBodyScroll(ref) : enableBodyScroll(ref);
  }, [isActive, width, ref]);

  return (
    <>
      <div className="fixed z-10 w-screen">
        <div className="z-40 md:hidden">
          <div
            ref={ref}
            className={`absolute z-50 flex h-[44px] w-full justify-between border-b border-zinc-200 bg-zinc-50`}
          >
            <div className="x-4 flex items-center justify-center text-lm-black">
              {/* Logo goes here*/}
            </div>
            <div className="z-50 flex items-center justify-center px-2">
              <div className="useAnimationIconColor cursor-pointer">
                <Hamburger
                  toggled={isActive}
                  toggle={setIsActive}
                  size={16}
                  label="Show menu"
                />
              </div>
            </div>
          </div>
          <motion.div
            initial={false}
            animate={isActive ? "visible" : "hidden"}
            variants={dropdown}
            className="relative  flex h-screen w-full justify-center bg-zinc-50"
          >
            <div className="h-[44px] bg-transparent"></div>
            <div className="w-full max-w-[664px] ">
              <motion.ul
                initial={false}
                animate={isActive ? "visible" : "hidden"}
                className=" flex flex-col divide-y divide-zinc-300 px-[40px] py-4 pt-[10px] pb-[8px] text-lm-black"
                variants={list}
              >
                {navItems.map((navItem) => (
                  <motion.li
                    key={`navbar-mobile-${navItem.route}`}
                    className="justify-left flex h-[44px] w-full items-center font-light"
                    variants={item}
                  >
                    {navItem.route}
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </motion.div>
        </div>

        <div className="hidden md:block">
          <div className="absolute  flex h-[44px] w-full justify-center  border-b border-zinc-200 bg-zinc-50">
            <div className="flex w-full max-w-screen-lg items-center justify-between px-4">
              <div>{/* Left Content */}</div>
              <div>
                <ul className="flex gap-6 text-base font-light">
                  {navItems.map((navItem) => (
                    <li key={`navbar-desktop-${navItem.page}`} className="cursor-pointer">
                      {navItem.route}
                    </li>
                  ))}
                </ul>
              </div>
              <div>{/* Right Content */}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
