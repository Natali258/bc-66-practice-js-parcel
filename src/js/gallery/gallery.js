import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { getPhotos } from './api';
import { createMarkup } from './createMarkup.js';
import { spinnerPlay, spinnerStop } from './spinner';

let page = 1;
let query = '';
const form = document.querySelector('.js-search-form');
const gallery = document.querySelector('.js-gallery');
const btnLoadMore = document.querySelector('.js-load-more');

const handleSubmit = async e => {
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

  spinnerPlay();

  try {
    const data = await getPhotos(query, page);

    if (data.total === 0) {
      throw new Error('we not find any photos');
    }

    const markup = createMarkup(data.results);
    gallery.insertAdjacentHTML('beforeend', markup);

    if (page < Math.ceil(data.total / 20)) {
      btnLoadMore.classList.remove('is-hidden');
    }
  } catch (error) {
    Notify.failure(error.message);
    btnLoadMore.classList.add('is-hidden');
  } finally {
    spinnerStop();
  }
};

form.addEventListener('submit', handleSubmit);

const handLoadMore = async () => {
  page += 1;

  spinnerPlay();

  try {
    const data = await getPhotos(query, page);
    const markup = createMarkup(data.results);
    gallery.insertAdjacentHTML('beforeend', markup);

    if (page === Math.ceil(data.total / 20)) {
      btnLoadMore.classList.add('is-hidden');
    }
  } catch (error) {
    Notify.failure(error.message);
    btnLoadMore.classList.add('is-hidden');
  } finally {
    spinnerStop();
  }
};

btnLoadMore.addEventListener('click', handLoadMore);
