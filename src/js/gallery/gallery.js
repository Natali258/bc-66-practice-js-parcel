import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { getPhotos } from './api';
import { createMarkup } from './createMarkup.js';

let page = 1;
let query = '';
const form = document.querySelector('.js-search-form');
const gallery = document.querySelector('.js-gallery');
const btnLoadMore = document.querySelector('.js-load-more');

const handleSubmit = e => {
  e.preventDefault();
  const { value } = e.target.elements.query;
  if (!value) {
    Notify.failure('Please, input some text!');
    return;
  }
  page = 1;
  query = value;

  gallery.innerHTML = '';
  btnLoadMore.classList.add('is-hidden');

  getPhotos(query, page)
    .then(data => {
      if (data.total === 0) {
        throw new Error('we not find any photos');
      }
      const markup = createMarkup(data.results);
      gallery.insertAdjacentHTML('beforeend', markup);

      if (page < Math.ceil(data.total / 20)) {
        btnLoadMore.classList.remove('is-hidden');
      }
    })
    .catch(error => {
      Notify.failure(error.message);
      btnLoadMore.classList.add('is-hidden');
    });
};

form.addEventListener('submit', handleSubmit);

const handLoadMore = () => {
  page += 1;

  getPhotos(query, page)
    .then(data => {
      const markup = createMarkup(data.results);
      gallery.insertAdjacentHTML('beforeend', markup);

      if (page === Math.ceil(data.total / 20)) {
        btnLoadMore.classList.add('is-hidden');
      }
    })
    .catch(error => {
      Notify.failure(error.message);
      btnLoadMore.classList.add('is-hidden');
    });
};

btnLoadMore.addEventListener('click', handLoadMore);
