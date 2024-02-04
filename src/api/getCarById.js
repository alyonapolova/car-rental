import axios from 'axios';

axios.defaults.baseURL = 'https://65b95d65b71048505a8abdeb.mockapi.io/api/v1';

export const getCarById = async ({ id }) => {
  const { data } = await axios.get(`/advert/${id}`);
  return data;
};
