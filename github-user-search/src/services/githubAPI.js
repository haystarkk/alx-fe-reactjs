import axios from 'axios'

export const searchUsers = async (query) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_APP_GITHUB_API_URL}/search/users?q=${query}`
    )
    return response.data.items
  } catch (error) {
    console.error('Error fetching users:', error)
    return []
  }
}
