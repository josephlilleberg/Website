import React from "react";
import BlogLanding from "../page-components/blog/landing";
import Navbar from "../page-components/navbar";
import Blog from "../page-components/blog/blog";

const BlogPage = () => {
  return (
    <>
      <Navbar />
          <BlogLanding />
          <Blog />
    </>
  );
};

export default BlogPage;
