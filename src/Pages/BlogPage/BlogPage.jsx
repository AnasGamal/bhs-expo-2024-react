import React from "react";
import { Blogs } from "../../components/index";


const BlogPage = ({blogs}) => {
  return (
    <div>
        <Blogs blogs= {blogs? blogs: ""} />
    </div>
  );
};

export default BlogPage;
