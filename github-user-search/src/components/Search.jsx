import { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username.trim()) return;
    
    setLoading(true);
    setError(null);
    
    const { data, error } = await fetchUserData(username);
    
    setLoading(false);
    if (error) {
      setError("Looks like we cant find the user");
      setUserData(null);
    } else {
      setUserData(data);
    }
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Searching...' : 'Search'}
        </button>
      </form>

      {loading && <p className="status-message">Loading...</p>}
      {error && <p className="status-message error">{error}</p>}

      {/* Example of map usage - adjust according to your actual data structure */}
      {Array.isArray(userData) && userData.map((user) => (
        <div key={user.id} className="user-result">
          <img src={user.avatar_url} alt={user.login} width="100" />
          <h2>{user.name || user.login}</h2>
          <p>{user.bio || 'No bio available'}</p>
          <a href={user.html_url} target="_blank" rel="noopener noreferrer">
            View Profile
          </a>
        </div>
      ))}
      
      {/* For single user result */}
      {userData && !Array.isArray(userData) && (
        <div className="user-result">
          <img src={userData.avatar_url} alt={userData.login} width="100" />
          <h2>{userData.name || userData.login}</h2>
          <p>{userData.bio || 'No bio available'}</p>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;
