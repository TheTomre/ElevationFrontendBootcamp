import axios from 'axios';

const API_URL = 'https://api.potterdb.com/v1/characters';

export const fetchCharacters = async () => {
  const response = await axios.get(API_URL);
  return response.data.data;
};
