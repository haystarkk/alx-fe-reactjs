import { useQuery } from 'react-query';
import { useState } from 'react';

// Function to fetch posts from API
const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const PostsComponent = () => {
  const [showPosts, setShowPosts] = useState(true);
  const { data, isLoading, isError, error, refetch, isFetching } = useQuery(
    'posts',
    fetchPosts,
    {
      staleTime: 5000, // Data becomes stale after 5 seconds
      cacheTime: 30000, // Cache persists for 30 seconds
      refetchOnWindowFocus: false,
      keepPreviousData: true
    }
  );

  const togglePosts = () => {
    setShowPosts(!showPosts);
  };

  if (isLoading) return <div className="loading">Loading posts...</div>;
  
  if (isError) return <div className="error">Error: {error.message}</div>;

  return (
    <div className="posts-container">
      <div className="controls">
        <button onClick={togglePosts} className="toggle-btn">
          {showPosts ? 'Hide Posts' : 'Show Posts'}
        </button>
        <button onClick={refetch} className="refetch-btn" disabled={isFetching}>
          {isFetching ? 'Refreshing...' : 'Refresh Data'}
        </button>
      </div>

      {showPosts && (
        <div className="posts-list">
          <h2>Posts ({data.length})</h2>
          <div className="cache-info">
            {isFetching ? 'Updating...' : 'Data is cached. Try hiding and showing again!'}
          </div>
          <ul>
            {data.slice(0, 10).map((post) => (
              <li key={post.id} className="post-item">
                <h3>{post.title}</h3>
                <p>{post.body}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PostsComponent;
