import React from "react";
import { Blogs } from "../../components/index";
import { useEffect, useState } from "react"
import { getPosts } from '../../services/sanity'

const BlogPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
        const fetchedPosts = await getPosts();
        setPosts(fetchedPosts);
    }

    fetchData();
  }, []); // Empty dependency array ensures the effect runs once after initial render

  return (
    <div>
        <Blogs posts={posts} />
    </div>
  );
};

export default BlogPage;
