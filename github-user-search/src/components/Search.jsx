import { useState } from 'react';
import { searchUsers, getUserDetails } from '../services/githubService';

const Search = () => {
  const [searchParams, setSearchParams] = useState({
    username: '',
    location: '',
    minRepos: ''
  });
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { data, error } = await searchUsers(searchParams);
    
    if (error) {
      setError(error);
      setUsers([]);
    } else {
      // Fetch additional details for each user
      const detailedUsers = await Promise.all(
        data.map(async (user) => {
          const { data: details } = await getUserDetails(user.login);
          return { ...user, ...details };
        })
      );
      setUsers(detailedUsers);
    }
    setLoading(false);
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <form onSubmit={handleSearch} className="space-y-4 bg-white p-6 rounded-lg shadow">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              value={searchParams.username}
              onChange={(e) => setSearchParams({...searchParams, username: e.target.value})}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Location</label>
            <input
              type="text"
              value={searchParams.location}
              onChange={(e) => setSearchParams({...searchParams, location: e.target.value})}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Min Repos</label>
            <input
              type="number"
              value={searchParams.minRepos}
              onChange={(e) => setSearchParams({...searchParams, minRepos: e.target.value})}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
            />
          </div>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-blue-300"
        >
          {loading ? 'Searching...' : 'Search'}
        </button>
      </form>

      {loading && <p className="text-center py-4">Loading...</p>}
      {error && <p className="text-red-500 text-center py-4">{error}</p>}

      <div className="mt-8 space-y-4">
        {users.map((user) => (
          <div key={user.id} className="bg-white p-4 rounded-lg shadow">
            <div className="flex items-center space-x-4">
              <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
              <div>
                <h3 className="font-bold">{user.name || user.login}</h3>
                <p>{user.bio || 'No bio available'}</p>
                <div className="flex space-x-4 mt-2 text-sm text-gray-600">
                  <span>📍 {user.location || 'Unknown'}</span>
                  <span>📦 {user.public_repos} repos</span>
                  <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-600">
                    View Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
