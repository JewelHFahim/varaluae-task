import React from "react";
import Blog from "./Blog/Blog";
import "./BlogFooter.css";
import Contact from "./Contact/Contact";

const BlogFooter = () => {
  return (
    <div className="blogfooter">
      <Blog></Blog>
      <Contact></Contact>
    </div>
  );
};

export default BlogFooter;
