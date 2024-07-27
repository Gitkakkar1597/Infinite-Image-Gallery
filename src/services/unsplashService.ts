import axios from 'axios';

const UNSPLASH_ACCESS_KEY = 'N2vtRILymH8yMoozZfwq-QLDYyyRU0nn6KSO-Padwx0'; // Unsplash API access key

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
