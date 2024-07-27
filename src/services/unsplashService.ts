import axios from 'axios';

// Fetch the Unsplash API key from environment variables
const UNSPLASH_ACCESS_KEY = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;

if (!UNSPLASH_ACCESS_KEY) {
  throw new Error('Missing Unsplash Access Key');
}

export const fetchImages = async (query: string, page: number) => {
  try {
    // Fetch images from Unsplash API
    const response = await axios.get(
      `https://api.unsplash.com/search/photos?page=${page}&query=${query}&client_id=${UNSPLASH_ACCESS_KEY}`
    );
    console.log(response.data); // Log the response data for debugging
    return response.data; // Return the data from the API
  } catch (error) {
    console.error('Error fetching images:', error); // Log any errors
    return { results: [] }; // Return an empty array in case of error
  }
};
