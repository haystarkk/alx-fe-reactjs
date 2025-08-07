import { useState } from 'react'
import { searchUsers } from './services/githubAPI'
import SearchBar from './components/SearchBar'
import UserCard from './components/UserCard'
import './index.css'

function App() {
  const [users, setUsers] = useState([])

  const handleSearch = async (query) => {
    const results = await searchUsers(query)
    setUsers(results)
  }

  return (
    <div className="app">
      <h1>GitHub User Search</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="users-grid">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  )
}

export default App
