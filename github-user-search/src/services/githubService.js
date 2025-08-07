import axios from 'axios';

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${username}`  // Direct URL instead of env variable
    );
    return { data: response.data, error: null };
  } catch (error) {
    return { data: null, error: "Looks like we cant find the user" };
  }
};
