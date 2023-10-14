import { useState, useEffect } from 'react';
import { getPosts } from '../services/sanity';

function useSanity(functionName) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const postsData = await functionName();
        setPosts(postsData);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }

    fetchData();
  }, []); // Empty dependency array ensures the effect runs once after initial render

  return { posts, loading, error };
}

export default useSanity;
