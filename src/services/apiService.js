import axios from 'axios';

const API_URL = 'https://reqres.in/api/users';

export const fetchUsers = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data.data; // Return the array of users
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error; // Rethrow the error for handling in the component
  }
};
