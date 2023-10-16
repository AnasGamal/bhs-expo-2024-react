import React from "react";
import { Blogs, BlogsContent} from "../../../components/index"
import { useEffect, useState } from "react"
import { getPostBySlug } from '../../../services/sanity'
import { useParams } from "react-router-dom";
const BlogContentPage= ({blogs}) => {
  var { slug } = useParams();
  const [post, setPost] = useState([]);
  
  useEffect(() => {
    async function fetchData() {
        const fetchedPost = await getPostBySlug(slug);
        setPost(fetchedPost);
    }

    fetchData();
  }, [slug]); // Empty dependency array ensures the effect runs once after initial render

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
