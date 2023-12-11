import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { getPhotos } from './api';
import { createMarkup } from './createMarkup.js';

const form = document.querySelector('.js-search-form');
const gallery = document.querySelector('.js-gallery');
const handleSubmit = e => {
  e.preventDefault();
  const { value } = e.target.elements.query;
  if (!value) {
    Notify.failure('Please, input some text!');
    return;
  }
  getPhotos(value, 1).then(data => {
    const markup = createMarkup(data.results);
    gallery.insertAdjacentHTML('beforeend', markup);
  });
};

form.addEventListener('submit', handleSubmit);
