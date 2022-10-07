import { motion } from "framer-motion";
import React from "react";
import { navigate } from "gatsby";

const social = [
  {
    name: "GitHub",
    href: "https://github.com/jlilleberg",
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "Kaggle",
    href: "https://www.kaggle.com/littleotter",
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 32 32" {...props}>
        <path
          fillRule="evenodd"
          d="M 10.351562 4 C 10.117563 4 10 4.1165625 10 4.3515625 L 10 27.644531 C 10 27.878531 10.116563 27.996094 10.351562 27.996094 L 12.648438 27.996094 C 12.882437 27.996094 13.001953 27.879531 13.001953 27.644531 L 13.001953 22.808594 L 14.810547 21.085938 L 20.048828 27.75 C 20.190828 27.915 20.354922 28 20.544922 28 L 23.716797 28 C 23.882797 28 23.977 27.952422 24 27.857422 L 23.933594 27.498047 L 17.023438 18.910156 L 23.650391 12.498047 C 23.773391 12.370047 23.730438 12 23.398438 12 L 20.117188 12 C 19.951187 12 19.785141 12.085953 19.619141 12.251953 L 13 18.974609 L 13 4.3515625 C 13 4.1165625 12.883437 4 12.648438 4 L 10.351562 4 z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "Medium",
    href: "https://jjglilleberg.medium.com",
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 30 30" {...props}>
        <path
          fillRule="evenodd"
          d="M8.5 7A8.5 8.5 0 108.5 24 8.5 8.5 0 108.5 7zM22 8A4 7.5 0 1022 23 4 7.5 0 1022 8zM28.5 9A1.5 6.5 0 1028.5 22 1.5 6.5 0 1028.5 9z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "Twitter",
    href: "https://twitter.com/LillebergDS",
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
      </svg>
    ),
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/jjglilleberg/",
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 30 30" {...props}>
        <path
          fillRule="evenodd"
          d="M9,25H4V10h5V25z M6.501,8C5.118,8,4,6.879,4,5.499S5.12,3,6.501,3C7.879,3,9,4.121,9,5.499C9,6.879,7.879,8,6.501,8z M27,25h-4.807v-7.3c0-1.741-0.033-3.98-2.499-3.98c-2.503,0-2.888,1.896-2.888,3.854V25H12V9.989h4.614v2.051h0.065 c0.642-1.18,2.211-2.424,4.551-2.424c4.87,0,5.77,3.109,5.77,7.151C27,16.767,27,25,27,25z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "IEEE",
    href: "https://ieeexplore.ieee.org/author/37085644869",
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 64 64" {...props}>
        <path
          fillRule="evenodd"
          d="M31.195 63.506a1.83 1.83 0 0 1-.506-.233c-.4-.273-1.023-.977-1.412-1.575-.535-.825-2.418-3.325-3.918-5.197-3.07-3.848-5.795-6.93-8.94-10.108-3.784-3.83-6.754-6.44-10.114-8.9-1.017-.744-3.005-2.07-3.546-2.36-1.4-.75-2.465-1.773-2.7-2.558-.1-.33-.087-1.08.017-1.442.203-.698 1.104-1.505 2.476-2.215 1.796-.93 3.825-2.418 6.5-4.772C13.67 20.108 20.68 12.87 26.144 6.512c1.657-1.924 2.523-3.034 3-3.854.738-1.244 1.4-1.947 1.994-2.162a3.08 3.08 0 0 1 1.418 0 2.08 2.08 0 0 1 .523.256c.4.273 1.116 1.075 1.535 1.715l.523.802c.186.273 2.563 3.25 3.5 4.377C45 15.272 51.3 21.718 56.492 25.862c2.284 1.82 4.685 3.46 6.074 4.133.6.296 1.163.78 1.32 1.15.157.36.15 1.064-.012 1.5-.15.4-.715.988-1.244 1.302-1.273.744-5.528 3.988-8.196 6.25-6.5 5.5-12.23 11.358-17.118 17.496-1.093 1.378-2.947 3.865-3.203 4.296a5.4 5.4 0 0 1-1.14 1.273c-.453.314-1.168.413-1.78.244zm1.75-8.027c2.244-.884 8.138-5.807 13.88-11.602 3.453-3.482 5.894-6.336 7.266-8.48.482-.76 1.035-1.883 1.163-2.377.157-.57.128-1.256-.064-1.86-.825-2.57-3.982-6.702-8.98-11.765-5.5-5.563-10.754-9.725-13.404-10.608-1-.33-1.482-.296-2.5.192C25.65 11.214 13.054 23.473 9.3 29.414c-.465.744-.9 1.628-1.058 2.145-.3.953.023 1.953 1.15 3.7 3.575 5.528 15.706 16.98 20.903 19.746 1.215.645 1.907.773 2.64.482zm-.948-1.2c-.837-.174-3.127-1.674-5.55-3.616-7.388-5.923-15.712-14.73-16.834-17.8-.215-.6-.186-.85.227-1.668 1.465-2.935 6.923-9.114 13.1-14.8 3.197-2.947 6.353-5.423 7.93-6.202.692-.35 1-.36 1.72-.08 4.325 1.716 15.77 12.496 19.903 18.74 1.215 1.837 1.668 2.96 1.5 3.697-.4 1.78-3.284 5.476-8.115 10.352-5.522 5.58-11.602 10.7-13.532 11.393-.07.023-.233.023-.36-.006zm1.866-6.946c-.017-.186-.105-2.412-.192-4.94l-.157-4.6H31.84c-.924 0-1.674.017-1.674.047a1862.95 1862.95 0 0 1-.349 4.778l-.35 4.9v.157h4.43zm.634-10.306c2.04-.145 3.743-.482 5.144-1.017a19.98 19.98 0 0 0 2.848-1.436c.738-.482 1.32-1.07 1.575-1.587a1.45 1.45 0 0 0 .198-.843c0-.942-.494-1.535-2.174-2.58-.14-.087-.227-.18-.203-.203.03-.03.267-.1.53-.18s.477-.145.465-.15a253.14 253.14 0 0 0-6.243-1.744c-.017.017.15.564.366 1.22l.4 1.197.378-.006c.2 0 .692-.023 1.075-.047l.698-.047.395.2c.535.285 1.314.872 1.598 1.2.692.83.703 1.5.035 2.226-.802.854-2.017 1.36-4.458 1.86a26.37 26.37 0 0 1-6.045.564c-2.162-.047-3.767-.33-5.307-.942-1.93-.76-2.883-1.57-2.9-2.44-.012-.982 1.436-2.087 3.918-2.988l.767-.285-.605-.35-1.738-1.023-1.133-.663-.75.262c-2.186.76-3.842 1.668-4.807 2.627-.64.645-.83 1.006-.854 1.662-.023.558.07.85.448 1.366.703.965 2.453 1.965 5.15 2.935 1.54.558 4.482 1.023 7.615 1.2a43.76 43.76 0 0 0 3.604-.017zm-1.174-2.83l-.262-8.98c.023-.023.674-.052 1.447-.058l1.4-.017-2.133-5.04-2.162-5.07c-.017-.017-.767 2.226-1.674 4.982L28.265 25.1c-.023.052.215.07 1.075.07.6 0 1.122.017 1.133.047.023.035-.18 6.522-.273 8.748l-.035.854h3.185z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
];

const IndexLanding = () => {
  return (
    <>
      <div className="mx-auto flex h-screen w-[95vw] max-w-screen-xl items-center  py-8 sm:justify-start">
        <div className="flex flex-col px-[2vw] md:w-3/4">
          <div className="flex w-3/4 select-none flex-col gap-4 font-light">
            <p className="text-4xl sm:text-5xl smmd:text-6xl md:text-7xl lg:text-8xl">
              Hello,
            </p>
            <p className="text-4xl sm:text-5xl smmd:text-6xl md:text-7xl lg:text-8xl">
              I'm{" "}
              <span className="underline decoration-lm-primary-soft decoration-2 lg:decoration-[6px]">
                Joseph
              </span>
              .
            </p>
            <p className="text-zinc-600 smmd:text-lg md:text-xl lg:text-2xl">
              &#x2014; Machine learning engineer
            </p>
            <p className="text-xs smmd:text-base">
              Resolving the ambiguity in language and gaining insight into its
              potential is a creative problem is a passion I c
            </p>
          </div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="mt-12 w-fit cursor-pointer rounded-md bg-lm-primary-soft px-10 py-3 text-center text-xl font-light shadow-lg"
            onClick={() => navigate("/contact/")}
          >
            <p className="text-sm sm:text-base smmd:text-lg md:text-xl">
              Get in touch
            </p>
          </motion.div>
          <div className="mt-6 flex gap-[.6rem] smmd:gap-3 lg:gap-4">
            {social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon
                  className="h-[1.2rem] w-[1.2rem]"
                  aria-hidden="true"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default IndexLanding;

/*
<div className="flex">
          <div className="flex flex-col gap-y-4"> 
            <div className="text-primary-darker dark:text-primary-lighter flex flex-col items-center gap-y-2 text-4xl font-semibold sm:items-start sm:text-5xl md:text-6xl lg:text-8xl">
              <div className="flex font-sans">
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  Hello,
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ rotate: [0, 30, 0, 30, 0, 30, 0], opacity: 1 }}
                  transition={{ duration: 1.5, delay: 1.75 }}
                  className="ml-4"
                >
                  👋
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                I'm <span className="text-lm-primary">Joseph</span>.
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
              >
                AI Enthusiast
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="text-primary-dark dark:text-primary-light text-xs sm:text-sm md:text-lg lg:text-xl"
            >
              I'm a machine learning engineer who specializes
            </motion.div>
          </div>
        </div>
        */
