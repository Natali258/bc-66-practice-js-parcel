import { createClient } from 'pexels';

const client = createClient(
  '563492ad6f9170000100000108dc2880626e4436b3634ce1cf6b4d74'
);
const randomNumber = max => {
  return Math.floor(Math.random() * max);
};
const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
export const setBackground = query => {
  client.photos
    .search({ query, orientation: 'landscape', size: 'large', per_page: 50 })
    .then(({ photos }) => {
      const index = randomNumber(photos.length);
      const url = photos[index]?.src?.landscape || defaultImg;
      document.body.style = `background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9)),
  url('${url}') center fixed; background-size: cover;`;
    });
};
