export const getPhotos = (query, page) => {
  const BASE_URL = 'https://api.unsplash.com';
  const params = new URLSearchParams({
    query,
    page,
    per_page: 20,
    color: 'black_and_white',
    orientation: 'portrait',
    client_id: 'LxvKVGJqiSe6NcEVZOaLXC-f2JIIWZaq_o0WrF8mwJc',
  });
  return fetch(`${BASE_URL}/search/photos?${params}`).then(res => {
    if (res.ok) return res.json();
    throw new Error(res.statusText);
  });
};
