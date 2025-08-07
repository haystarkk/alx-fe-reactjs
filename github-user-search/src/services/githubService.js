import axios from 'axios';

export const searchUsers = async ({ username, location, minRepos }) => {
  try {
    let query = `${username || ''}`;
    if (location) query += `+location:${location}`;
    if (minRepos) query += `+repos:>${minRepos}`;

    const response = await axios.get(
      `https://api.github.com/search/users?q=${query}&per_page=10`
    );
    return { data: response.data.items, error: null };
  } catch (error) {
    return { data: null, error: "Failed to fetch users" };
  }
};

export const getUserDetails = async (username) => {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${username}`
    );
    return { data: response.data, error: null };
  } catch (error) {
    return { data: null, error: "User details not found" };
  }
};
