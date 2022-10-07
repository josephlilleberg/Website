import React from "react";
import Navbar from "../page-components/navbar";
import Archive from "../page-components/archive/archive";
import ArchiveLanding from "../page-components/archive/landing";

const ArchivePage = () => {
  return (
    <>
      <Navbar />
      <ArchiveLanding />
      <Archive />
    </>
  );
};

export default ArchivePage;
