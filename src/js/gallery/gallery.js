import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { getPhotos } from './api';
import { createMarkup } from './createMarkup.js';
import { spinnerPlay, spinnerStop } from './spinner';

let page = 1;
let query = '';
const form = document.querySelector('.js-search-form');
const gallery = document.querySelector('.js-gallery');

let options = {
  root: null,
  rootMargin: '100px',
  threshold: 1.0,
};

let callback = (entries, observer) => {
  entries.forEach(async entry => {
    if (entry.isIntersecting) {
      observer.unobserve(entry.target);
      page += 1;

      spinnerPlay();

      try {
        const data = await getPhotos(query, page);
        const markup = createMarkup(data.results);
        gallery.insertAdjacentHTML('beforeend', markup);

        hasMorePhotos(data.total);
      } catch (error) {
        Notify.failure(error.message);
      } finally {
        spinnerStop();
      }
    }
  });
};

let observer = new IntersectionObserver(callback, options);

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

  spinnerPlay();

  try {
    const data = await getPhotos(query, page);

    if (data.total === 0) {
      throw new Error('we not find any photos');
    }

    const markup = createMarkup(data.results);
    gallery.insertAdjacentHTML('beforeend', markup);

    hasMorePhotos(data.total);
  } catch (error) {
    Notify.failure(error.message);
  } finally {
    spinnerStop();
  }
};

form.addEventListener('submit', handleSubmit);

function hasMorePhotos(total) {
  if (page < Math.ceil(total / 20)) {
    const item = document.querySelector('.gallery__item:last-child');
    observer.observe(item);
  }
}
