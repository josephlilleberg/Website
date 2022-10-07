/* Functionality */
import React from "react";
import { Router } from "@reach/router";
import IndexPage from "./index";
import WorkPage from "./work";
import ContactPage from "./contact";
import ArchivePage from "./archive";
import BlogPage from "./blog";
import ExperiencePage from "./experience";
import PublicationPage from "./publication";
import ContactSuccessfulPage from "./contact-successful";
import ContactFailurePage from "./contact-failure";

const App = () => (
  <Router basepath="/app">
    <IndexPage path="/" component={IndexPage} />
    <ExperiencePage path="/experience" component={ExperiencePage} />
    <WorkPage path="/work" component={WorkPage} />
    <ArchivePage path="/archive" component={ArchivePage} />
    <PublicationPage path="/publication" component={PublicationPage} />
    <BlogPage path="/blog" component={BlogPage} />
    <ContactPage path="/contact" component={ContactPage} />
    <ContactSuccessfulPage
      path="/contact-successful"
      component={ContactSuccessfulPage}
    />
    <ContactFailurePage
      path="/contact-failure"
      component={ContactFailurePage}
    />
  </Router>
);

export default App;
