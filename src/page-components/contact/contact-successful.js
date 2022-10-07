import React from "react";
import { motion } from "framer-motion";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { navigate } from "gatsby";

const ContactSuccess = () => {
  return (
    <>
      <div className="z-0 mx-auto  flex h-screen  max-w-screen-xl bg-zinc-50 ">
        <div className="relative flex w-full items-center justify-center">
          <div className="flex w-[90vw] max-w-[400px] flex-col items-center divide-y divide-zinc-300 rounded-lg bg-white px-8 py-4 shadow">
            <div className="my-1">
              <div className="flex w-full justify-center">
                <CheckCircleIcon className="h-12 w-12 text-lm-primary-soft" />
              </div>
              <p className="text- my-2 font-light sm:text-lg smmd:text-xl">
                Email sucessfully sent! 😊
              </p>
            </div>
            <div className="my-1 w-full">
              <p className="my-4 text-xs font-light sm:text-sm ">
                Thank you for contacting me. An email has been sent verifying
                that I have recieved your email. 
              </p>
              <motion.div
                whileHover={{ scale: 1.025 }}
                whileTap={{ scale: 0.975 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 7,
                  bounce: 0.2,
                }}
                onClick={() => navigate("/contact/")}
                className="cursor-pointer rounded-lg bg-lm-primary-soft p-2 text-center text-xs shadow sm:text-sm smmd:text-base"
              >
                Continue
              </motion.div>
              <div className="flex w-full justify-center">
                <div className="mt-2 h-[1px] w-1/2 bg-zinc-300 sm:mt-3 md:mt-4"></div>
              </div>

              <div className="mt-3 text-xs font-light ">
                If you have not recieved any email, please feel free to contact
                me directly at{" "}
                <a
                  href="mailto:jjglilleberg@gmail.com"
                  className="text-lm-primary-soft"
                >
                  jjglilleberg@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactSuccess;
