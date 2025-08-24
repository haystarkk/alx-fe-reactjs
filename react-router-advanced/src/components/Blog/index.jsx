import { useParams, Link } from 'react-router-dom';

const Blog = () => {
  const { postId } = useParams();
  
  // Sample blog posts data
  const blogPosts = [
    { id: 1, title: 'Getting Started with React Router', excerpt: 'Learn the basics of routing in React applications.' },
    { id: 2, title: 'Advanced Routing Techniques', excerpt: 'Explore nested routes, protected routes, and more.' },
    { id: 3, title: 'Dynamic Routing in Depth', excerpt: 'Master dynamic route parameters and URL patterns.' },
  ];

  if (postId) {
    const post = blogPosts.find(p => p.id === parseInt(postId));
    
    if (!post) {
      return (
        <div className="card">
          <h1 className="page-title">Post Not Found</h1>
          <p>The requested blog post could not be found.</p>
          <Link to="/blog" className="btn btn-primary">Back to Blog</Link>
        </div>
      );
    }

    return (
      <div className="card">
        <h1 className="page-title">{post.title}</h1>
        <p>This is the detailed view of blog post #{postId}.</p>
        <p>{post.excerpt}</p>
        <div style={{ marginTop: '2rem' }}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget ultricies ultricies, nunc nisl aliquam nunc, eget aliquam nisl nunc eget nisl.</p>
          <p>Sed vitae nisl eget nunc aliquam ultricies. Nullam euismod, nisl eget ultricies ultricies, nunc nisl aliquam nunc, eget aliquam nisl nunc eget nisl.</p>
        </div>
        <Link to="/blog" className="btn btn-primary" style={{ marginTop: '1rem' }}>Back to Blog</Link>
      </div>
    );
  }

  return (
    <div className="card">
      <h1 className="page-title">Blog Posts</h1>
      <p>Welcome to our blog. Here are our latest posts:</p>
      
      <ul className="blog-list">
        {blogPosts.map(post => (
          <li key={post.id} className="blog-item">
            <Link to={`/blog/${post.id}`} className="blog-link">
              <h3 className="blog-title">{post.title}</h3>
              <p className="blog-excerpt">{post.excerpt}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
