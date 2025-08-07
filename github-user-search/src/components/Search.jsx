import { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [location, setLocation] = useState(''); // Add location state

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username.trim()) return;
    
    setLoading(true);
    setError(null);
    
    // Include location in the API call
    const { data, error } = await fetchUserData(username, location); // Pass location
    
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
        {/* Add location input field */}
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Filter by location (optional)"
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Searching...' : 'Search'}
        </button>
      </form>

      {loading && <p className="status-message">Loading...</p>}
      {error && <p className="status-message error">{error}</p>}

      {userData && (
        <div className="user-result">
          <img src={userData.avatar_url} alt={userData.login} width="100" />
          <h2>{userData.name || userData.login}</h2>
          {/* Display location if available */}
          {userData.location && <p>📍 {userData.location}</p>}
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
