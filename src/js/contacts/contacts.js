import { getContacts } from './contacts-api';
import { createListMarkup } from './create-markup';

const refs = {
  list: document.querySelector('.js-list'),
};
getContacts().then(data => {
  const markup = createListMarkup(data);
  refs.list.innerHTML = markup;
});
