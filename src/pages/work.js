import React from "react";
import Navbar from "../page-components/navbar";
import WorkFeatured from "../page-components/work/featured";
import WorkLanding from "../page-components/work/landing";

const WorkPage = () => {
    return (
      <>
        <Navbar />
        <WorkLanding />
        <WorkFeatured />
      </>
    );
}

export default WorkPage;