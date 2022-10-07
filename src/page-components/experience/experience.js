import React from "react";
import { ExclamationCircleIcon } from "@heroicons/react/20/solid";

const CertificationData = [
  {
    specialization: "Deep Learning Specialization",
    company: "Deeplearning.AI",
    courses: [
      {
        title: "Neural Networks and Deep Learning",
        link: "https://www.coursera.org/account/accomplishments/certificate/AUB8KWAMQ9J4",
      },
      {
        title:
          "Improving Deep Neural Networks: Hyperparameter Tuning, Regularization, and Optimization",
        link: "https://www.coursera.org/account/accomplishments/certificate/L3REUMPS5YZS",
      },
      {
        title: "Structuring Machine Learning Projects",
        link: "https://www.coursera.org/account/accomplishments/certificate/X6R7ZMT4YVBK",
      },
      {
        title: "Convolutional Neural Networks",
        link: "https://www.coursera.org/account/accomplishments/certificate/NVKRZ5FM5QJ9",
      },
      {
        title: "Sequence Models",
        link: "https://www.coursera.org/account/accomplishments/certificate/HXXEVAD624FU",
      },
    ],
  },
  {
    specialization: "Generative Adversarial Networks",
    company: "DeepLearning.AI",
    courses: [
      {
        title: "Build Basic Generative Adversarial Networks",
        link: "https://www.coursera.org/account/accomplishments/certificate/CYTNNH7RJCMG",
      },
      {
        title: "Build Better Generative Adversarial Networks",
        link: "https://www.coursera.org/account/accomplishments/certificate/LMVAGTFZAZC8",
      },
      {
        title: "Apply Generative Adversarial Networks",
        link: "https://www.coursera.org/account/accomplishments/certificate/A38RZK7VKDB2",
      },
    ],
  },
  {
    specialization: "TensorFlow: Data and Deployment",
    company: "DeepLearning.AI",
    courses: [
      {
        title: "Browser-based Models with TensorFlow.js",
        link: "https://www.coursera.org/account/accomplishments/certificate/Q83AVBA35FXH",
      },
      {
        title: "Device-based Models with TensorFlow Lite",
        link: "https://www.coursera.org/account/accomplishments/certificate/Y4FG83EEDA6J",
      },
      {
        title: "Data Pipelines with TensorFlow Data Services",
        link: "https://www.coursera.org/account/accomplishments/certificate/PGLVBQH4RYCM",
      },
      {
        title: "Advanced Deployment Scenarios with TensorFlow",
        link: "https://www.coursera.org/account/accomplishments/certificate/JCY7F6AKKQUF",
      },
    ],
  },
  {
    specialization: "TensorFlow Developer Professional Certification",
    company: "DeepLearning.AI",
    courses: [
      {
        title:
          "Introduction to TensorFlow for Artificial Intelligence, Machine Learning, and Deep Learning",
        link: "https://www.coursera.org/account/accomplishments/certificate/4ZNQFJ9LBKJP",
      },
      {
        title: "Convolutional Neural Networks in TensorFlow",
        link: "https://www.coursera.org/account/accomplishments/certificate/ACG7CFJK7H2Q",
      },
      {
        title: "Natural Language Processing in TensorFlow",
        link: "https://www.coursera.org/account/accomplishments/certificate/X2PPU98N64LX",
      },
      {
        title: "Sequences, Time Series, and Prediction",
        link: "https://www.coursera.org/account/accomplishments/certificate/SGLB3JHSQ9V5",
      },
    ],
  },
  {
    specialization: "Natural Language Processing",
    company: "DeepLearning.AI",
    courses: [
      {
        title:
          "Natural Language Processing with Classification and Vector Spaces",
        link: "https://www.coursera.org/account/accomplishments/certificate/AKW3HTUGGE5V",
      },
      {
        title: "Natural Language Processing with Probabilistic Models",
        link: "https://www.coursera.org/account/accomplishments/certificate/ETK34GM68P2U",
      },
      {
        title: "Natural Language Processing with Sequence Models",
        link: "https://www.coursera.org/account/accomplishments/certificate/ST7TV53B9746",
      },
      {
        title: "Natural Language Processing with Attention Models",
        link: "https://www.coursera.org/account/accomplishments/certificate/JZ3KGLJ22B9V",
      },
    ],
  },
  {
    specialization: "TensorFlow: Advanced Techniques",
    company: "DeepLearning.AI",
    courses: [
      {
        title: "Custom Models, Layers, and Loss Functions with TensorFlow",
        link: "https://www.coursera.org/account/accomplishments/certificate/Y68MFPUUH65Q",
      },
      {
        title: "Custom and Distributed Training with TensorFlow",
        link: "https://www.coursera.org/account/accomplishments/certificate/P99TCZMD7444",
      },
      {
        title: "Advanced Computer Vision with TensorFlow",
        link: "https://www.coursera.org/account/accomplishments/certificate/MRQHZC94YETK",
      },
      {
        title: "Generative Deep Learning with TensorFlow",
        link: "https://www.coursera.org/account/accomplishments/certificate/H8KPG6NXNVBF",
      },
    ],
  },
  {
    specialization: "Machine Learning Engineering for Production (MLOps)",
    company: "DeepLearning.AI",
    courses: [
      {
        title: "Introduction to Machine Learning in Production",
        link: "https://www.coursera.org/account/accomplishments/certificate/WQQBY8HCPSP7",
      },
      {
        title: "Machine Learning Data Lifecycle in Production",
        link: "https://www.coursera.org/account/accomplishments/certificate/BVJXE5AU482Z",
      },
      {
        title: "Machine Learning Modeling Pipelines in Production",
        link: "https://www.coursera.org/account/accomplishments/certificate/RT439MAE8R5V",
      },
      {
        title: "Deploying Machine Learning Models in Production",
        link: "https://www.coursera.org/account/accomplishments/certificate/93FL4DV28BS4",
      },
    ],
  },
  {
    specialization: "Practical Data Science on the AWS Cloud",
    company: "DeepLearning.AI",
    courses: [
      {
        title: "Analyze Datasets and Train ML Models using AutoML",
        link: "https://www.coursera.org/account/accomplishments/certificate/ULUSZXG5TXBA",
      },
      {
        title: "Build, Train, and Deploy ML Pipelines using BERT",
        link: "https://www.coursera.org/account/accomplishments/certificate/UHT9CQTR5LPE",
      },
      {
        title: "Optimize ML Models and Deploy Human-in-the-Loop Pipelines",
        link: "https://www.coursera.org/account/accomplishments/certificate/G7UB4KNWWTHD",
      },
    ],
  },
];

const Experience = () => {
  return (
    <>
      <div className="mx-auto flex max-w-screen-xl items-center justify-center smmd:justify-start">
        <div className="divide-y-1 mx-[30px] mt-6 mb-4 flex select-none flex-col gap-4">
          <div id="education-section" className="divide-y divide-zinc-400">
            <p className="text-lg font-light sm:text-xl smmd:text-2xl">
              Education
            </p>
            <div>
              <ul className="my-4 flex flex-col gap-4 text-xs sm:text-sm smmd:text-base">
                <li className="flex flex-col gap-2">
                  <div>
                    <p className="font-medium">
                      M.S. Computer Science in Programming Languages, Compilers,
                      & Software Engineering
                    </p>
                    <p className="mt-1 text-xs text-zinc-600">
                      <span className="text-lm-primary-soft">@</span> University
                      of California, San Diego
                    </p>
                    <div className="mt-1 flex flex-col gap-1">
                      <p className="mt-1 text-xs text-zinc-600">
                        &#x2014; UC San Diego's graduate CSE program is ranked
                        11
                        <sup>th</sup> nationally in U.S. News and World Report
                        Graduate Program Rankings as of 2022.
                      </p>
                      <p className="mt-1 text-xs text-zinc-600">
                        &#x2014; UC San Diego is ranked overall 34
                        <sup>th</sup> nationally and 62<sup>nd</sup> globally in
                        U.S. News and World Report Graduate Program Rankings as
                        of 2022.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="flex flex-col gap-4">
                  <div>
                    <p className="font-medium  ">
                      B.S. Computer Science, B.A. Mathematics
                    </p>
                    <p className="mt-1 text-xs text-zinc-600">
                      <span className="text-lm-primary-soft">@</span> Southwest
                      Minnesota State University
                    </p>
                    <div>
                      <p className="mt-2 text-xs text-zinc-800 smmd:mt-3">
                        &#x2014;{" "}
                        <span className="underline decoration-lm-primary-soft sm:text-sm">
                          Notable Achievements
                        </span>
                      </p>
                      <ul className="items-inside ml-6 flex list-disc flex-col gap-2 py-2 text-zinc-600 smmd:gap-1 smmd:py-1">
                        <li className="text-xs">
                          ACM-International Collegiate Programing Contest:
                          Honorable Mention (2013, 2014, and 2015).
                        </li>
                        <li className="text-xs">
                          Honors student (2012 - 2016).
                        </li>
                        <li className="text-xs">
                          Dean's List every semester (2012 - 2016).
                        </li>
                      </ul>
                    </div>
                    <div>
                      <p className="mt-2 text-xs text-zinc-800">
                        &#x2014;{" "}
                        <span className="underline decoration-lm-primary-soft sm:text-sm">
                          Mathematics Professor Hiring Selection Committee
                        </span>
                      </p>
                      <ul className="items-inside ml-6 flex list-disc flex-col gap-2 py-2 text-zinc-600 smmd:gap-1 smmd:py-1">
                        <li className="text-xs">
                          Selected as the sole student to work with faculty from
                          the Mathematics Department to hire and fill a vacant
                          mathematics faculty position.
                        </li>
                      </ul>
                    </div>
                    <div>
                      <p className="mt-2 text-xs text-zinc-800">
                        &#x2014;{" "}
                        <span className="underline decoration-lm-primary-soft sm:text-sm">
                          Math and Computer Science Club
                        </span>
                      </p>
                      <ul className="items-inside ml-6 flex list-disc flex-col gap-2 py-2 text-zinc-600 smmd:gap-1 smmd:py-1">
                        <li className="text-xs">
                          President: Collaborated with Mathematics and Computer
                          Science department to to upgrade current techonolgies
                          including 3D printing and VR. Organized events and
                          activities including competitions at other
                          universities, managed club responsibilites, and
                          involved in recuirtment of additional members. (2014 -
                          2016).
                        </li>
                        <li className="text-xs">
                          Vice President: Assisted in organizing events and
                          activities, mananging club responsibilites, and in
                          recuirtment of additional members. ( 2013 - 2014).
                        </li>
                        <li className="text-xs">
                          Member: Participated in club activities (Aug. 2012 -
                          May 2013).
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div id="internship-section" className="divide-y divide-zinc-400">
            <p className="text-lg font-light sm:text-xl smmd:text-2xl">
              Internships
            </p>
            <div>
              <div className="my-2 flex flex-col gap-1 text-zinc-600">
                <div className="flex gap-2">
                  <ExclamationCircleIcon className="h-4 w-4 text-lm-primary-soft" />
                  <p className="text-xs">
                    Research Undergraduate Experiences (REUs) are prestigious
                    and a gold standard in providing research experience to
                    undergraduates.
                  </p>
                </div>

                <div className="flex gap-2">
                  <ExclamationCircleIcon className="h-4 w-4 text-lm-primary-soft" />
                  <p className="text-xs">
                    REUs are extremely competitive, usually only having
                    acceptance rates of 8%, with each hosting organization or
                    school usually only having a limited number of available
                    positions of usually 8-10 participants.
                  </p>
                </div>
              </div>
              <ul className="my-4 flex flex-col gap-4 text-xs sm:text-sm smmd:text-base">
                <li className="flex flex-col gap-2">
                  <div>
                    <p className="font-medium">
                      NSF funded research internship in Computer Security
                    </p>
                    <p className="mt-1 text-xs text-zinc-600">
                      <span className="text-lm-primary-soft">@</span> University
                      of North Texas
                    </p>
                  </div>
                  <p className="text-xs font-light text-zinc-600 sm:text-sm">
                    &#x2014; Researched the potential role that brain wave
                    scanners can play in computer security.
                  </p>
                  <p className="text-xs font-light text-zinc-600 sm:text-sm">
                    &#x2014; Developed an application that uses changes in EEG
                    wave patterns to detect subconscious recognition for
                    preventing malicious attacks.
                  </p>
                </li>
                <li className="flex flex-col gap-2">
                  <div>
                    <p className="font-medium  ">
                      NSF funded research internship in High Performance Data
                      Mining
                    </p>
                    <p className="mt-1 text-xs text-zinc-600">
                      <span className="text-lm-primary-soft">@</span> Georgia
                      State University
                    </p>
                  </div>
                  <p className="text-sm font-light text-zinc-600">
                    &#x2014; Researched text classification utilizing Google's
                    Word2Vec which was published 2013.
                  </p>
                  <p className="text-sm font-light text-zinc-600">
                    &#x2014; Classified 18,000 documents with 89.73% accuracy
                    using an aggregate model of wod2vec weighted by tf-idf w/o
                    stopwords and tf-idf without stop words.
                  </p>
                  <p className="text-sm font-light text-zinc-600">
                    &#x2014; Demonstrated the effectiveness of word2vec by
                    showing that tf-idf and word2vec combined can outperform
                    tf-idf because word2vec provides complementary features
                    (e.g. semantics that tf-idf can't capture) to tf-idf.
                  </p>
                  <p className="text-sm font-light text-zinc-600">
                    &#x2014; Showed that the combination of word2vec weighted by
                    tf-idf and tf-idf does not outperform tf-idf consistently
                    but is consistent enough to say the combination of the two
                    can outperform either individually.
                  </p>
                  <p className="text-sm font-light text-zinc-600">
                    &#x2014; Published a research paper in IEEE, a gold standard
                    for research papers, as first author. I was the only student
                    in the program to achieve a publication.
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div id="certifications-section" className="divide-y divide-zinc-400">
            <p className="text-lg font-light sm:text-xl smmd:text-2xl">
              Certifications
            </p>
            <div>
              <ul className="my-4 flex flex-col gap-4 text-xs sm:text-sm smmd:text-base">
                {CertificationData.map((item) => (
                  <li className="flex flex-col gap-2">
                    <div>
                      <p className="font-medium  ">{item.specialization}</p>
                      <p className="mt-1 text-xs text-zinc-600">
                        <span className="text-lm-primary-soft">@</span>{" "}
                        {item.company}
                      </p>
                    </div>
                    <div>
                      {item.courses.map((course, index) => (
                        <a href={course.link} target="_blank" rel="noreferrer">
                          <p className="text-sm font-light text-zinc-600 hover:text-lm-primary-soft">
                            &#x2014; Course {index + 1}: {course.title}
                          </p>
                        </a>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
