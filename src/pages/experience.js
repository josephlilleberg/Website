import React from "react";
import Navbar from "../page-components/navbar";
import Experience from "../page-components/experience/experience";
import ExperienceLanding from "../page-components/experience/landing";

const ExperiencePage = () => {
  return (
    <>
      <Navbar />
          <ExperienceLanding />
          <Experience />
    </>
  );
};

export default ExperiencePage;
