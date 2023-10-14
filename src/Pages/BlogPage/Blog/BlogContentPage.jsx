import React from "react";
import { Blogs, BlogsContent} from "../../../components/index"
import { useEffect, useState } from "react"
import { getPostById } from '../../../services/sanity'
import { useParams } from "react-router-dom";
const BlogContentPage= ({blogs}) => {
  var { id } = useParams();
  const [post, setPost] = useState([]);
  
  useEffect(() => {
    async function fetchData() {
        const fetchedPost = await getPostById(id);
        setPost(fetchedPost);
    }

    fetchData();
  }, [id]); // Empty dependency array ensures the effect runs once after initial render

  console.log(id)
  console.log(post)

  if (!post) {
    return
  }

  return (
    <div>
      <BlogsContent  title = {post.title} content={post.content} />
    </div>
  );
};

export default BlogContentPage;
