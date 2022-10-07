import React from "react";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const Publication = () => {
  return (
    <>
      <div className="mx-auto flex max-w-screen-xl items-center justify-center smmd:justify-start">
        <div className="mb-4 mt-6 px-[30px] lg:w-[75vw]">
          <div className="select-none divide-y divide-zinc-300">
            <div className="flex flex-col gap-4 py-6">
              <div className="flex flex-col gap-1 ">
                <p className="font-light sm:text-base smmd:text-lg lg:text-2xl">
                  Support vector machines and Word2vec for text classification
                  with semantic features
                </p>
                <p className="text-xs font-medium  sm:text-sm smmd:text-base ">
                  Publisher: IEEE
                </p>
              </div>
              <a
                href="https://ieeexplore.ieee.org/document/7259377"
                target="_blank"
                rel="noreferrer"
              >
                <motion.div
                  whileHover={{ scale: 1.025 }}
                  whileTap={{ scale: 0.975 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 7,
                    bounce: 0.2,
                  }}
                  className="flex w-fit items-center gap-2 rounded-lg border bg-white p-2 shadow-lg hover:border-lm-primary-soft hover:text-lm-primary-soft"
                >
                  <p className="py-1 text-xs font-medium  sm:text-sm">
                    Read Publication
                  </p>
                  <ArrowRightCircleIcon className="h-4 w-4 smmd:h-5 smmd:w-5" />
                </motion.div>
              </a>

              <div className="flex flex-col gap-3 text-xs sm:text-sm md:gap-2">
                <p className="my-1">
                  <a
                    href="https://ieeexplore.ieee.org/author/37085644869"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-lm-primary-soft hover:underline"
                  >
                    Joseph Lilleberg
                  </a>
                  ;
                  <a
                    href="https://ieeexplore.ieee.org/author/38552005000"
                    target="_blank"
                    rel="noreferrer"
                    className="ml-1 hover:text-lm-primary-soft hover:underline"
                  >
                    Yun Zhu
                  </a>
                  ;
                  <a
                    href="https://ieeexplore.ieee.org/author/37279972600"
                    target="_blank"
                    rel="noreferrer"
                    className="ml-1 hover:text-lm-primary-soft hover:underline"
                  >
                    Yanqing Zhang
                  </a>
                </p>
                <div className="flex gap-4">
                  <div className="rounded-lg border border-lm-primary-soft bg-white p-4 shadow-lg">
                    <p>186</p>
                    <p>Paper</p>
                    <p>Citations</p>
                  </div>

                  <div className="rounded-lg border border-lm-primary-soft bg-white p-4 shadow-lg">
                    <p>5100+</p>
                    <p>Full</p>
                    <p>Text Views</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col gap-4 py-4 sm:flex-row">
              <div className="w-full ">
                <p className="text-sm font-semibold  md:text-lg">
                  Document sections
                </p>
                <ul className="mt-1 flex flex-col gap-2 text-xs font-light md:text-sm ">
                  <li className="flex">
                    <p>I.</p>
                    <p className="ml-3">Introduction</p>
                  </li>
                  <li className="flex">
                    <p>II.</p>
                    <p className="ml-3">Word2Vec and TF-IDF</p>
                  </li>
                  <li className="flex">
                    <p>III.</p>
                    <p className="ml-3">Our Work</p>
                  </li>
                  <li className="flex">
                    <p>IV.</p>
                    <p className="ml-3">Results</p>
                  </li>
                  <li className="flex">
                    <p>V.</p>
                    <p className="ml-3">Conclusion</p>
                  </li>
                </ul>
              </div>
              <div className="md:ml-4">
                <div>
                  <p className="text-sm font-semibold md:text-lg">Abstract:</p>
                  <p className="text-xs font-light leading-7 smmd:text-sm lg:text-base">
                    With the rapid expansion of new available information
                    presented to us online on a daily basis, text classification
                    becomes imperative in order to classify and maintain it.
                    Word2vec offers a unique perspective to the text mining
                    community. By converting words and phrases into a vector
                    representation, word2vec takes an entirely new approach on
                    text classification. Based on the assumption that word2vec
                    brings extra semantic features that helps in text
                    classification, our work demonstrates the effectiveness of
                    word2vec by showing that tf-idf and word2vec combined can
                    outperform tf-idf because word2vec provides complementary
                    features (e.g. semantics that tf-idf can't capture) to
                    tf-idf. Our results show that the combination of word2vec
                    weighted by tf-idf and tf-idf does not outperform tf-idf
                    consistently. It is consistent enough to say the combination
                    of the two can outperform either individually.
                  </p>
                </div>
                <div className="">
                  <p className="my-4 text-xs smmd:text-sm">
                    <span className=" font-semibold">Published in:</span>{" "}
                    <a
                      href="https://ieeexplore.ieee.org/xpl/conhome/7235859/proceeding"
                      target="_blank"
                      rel="noreferrer"
                      className="ml-1 hover:text-lm-primary-soft hover:underline"
                    >
                      2015 IEEE 14th International Conference on Cognitive
                      Informatics & Cognitive Computing (ICCI*CC)
                    </a>
                  </p>
                  <div className="grid grid-cols-1 gap-2 text-xs sm:grid-cols-2 md:text-sm">
                    <div className="flex flex-col gap-2">
                      <p>
                        <span className="font-semibold">
                          Date of Conference:
                        </span>{" "}
                        <span className="font-light">06-08 July 2015</span>
                      </p>
                      <p>
                        <span className="font-semibold">
                          Date Added to IEEE Xplore:
                        </span>{" "}
                        <span className="font-light">14 September 2015</span>
                      </p>
                      <div>
                        <p>
                          <span className="font-semibold">
                            ISBN Information:
                          </span>
                        </p>
                        <div className="mt-1 flex flex-col gap-1 pl-1 sm:pl-2 md:pl-4">
                          <p>
                            <span className="font-semibold">
                              Electronic ISBN:
                            </span>{" "}
                            <span className="font-light">
                              978-1-4673-7290-9
                            </span>
                          </p>
                          <p>
                            <span className="font-semibold">CD:</span>{" "}
                            <span className="font-light">
                              978-1-4673-7289-3
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <p>
                        <span className="font-semibold">
                          INSPEC Accession Number:
                        </span>{" "}
                        <span className="font-light">15455133</span>
                      </p>
                      <p>
                        <span className="font-semibold">DOI:</span>{" "}
                        <span className="font-light">
                          10.1109/ICCI-CC.2015.7259377
                        </span>
                      </p>
                      <p>
                        <span className="font-semibold">Publisher:</span>{" "}
                        <span className="font-light">IEEE</span>
                      </p>
                      <p>
                        <span className="font-semibold">
                          Conference Location:
                        </span>{" "}
                        <span className="font-light">Beijing, China</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Publication;
