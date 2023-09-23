import React from "react";
import { Blogs, BlogsContent} from "../../../components/index"



const BlogContentPage= ({blogs}) => {
  return (
    <div>
      <BlogsContent  blogs = {blogs}/>
    </div>
  );
};

export default BlogContentPage;
