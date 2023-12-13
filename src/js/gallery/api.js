import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com';
axios.defaults.headers.common['Authorization'] =
  'Client-ID 4dc0c9edd3f8399861773bf78562a506e26384e3c5d582c06359e3e1c4b70c33';

export const getPhotos = async (query, page) => {
  const params = {
    query,
    page,
    per_page: 20,
    color: 'black_and_white',
    orientation: 'portrait',
  };
  const { data } = await axios.get('/search/photos', { params });
  return data;
};
