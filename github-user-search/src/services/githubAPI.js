import axios from 'axios';

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_APP_GITHUB_API_URL}/users/${username}`
    );
    return { data: response.data, error: null };
  } catch (error) {
    return { data: null, error: error.response?.status === 404 
      ? "User not found" 
      : "An error occurred" };
  }
};
