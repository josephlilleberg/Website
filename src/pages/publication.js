import React from "react";
import Navbar from "../page-components/navbar";
import Publication from "../page-components/publication/publication";
import PublicationLanding from "../page-components/publication/landing";

const PublicationPage = () => {
  return (
    <>
      <Navbar />
      <PublicationLanding />
      <Publication />
    </>
  );
};

export default PublicationPage;
