import Notiflix, { Notify } from 'notiflix';
import { createContact, deleteContact, getContacts } from './contacts-api';
import { createListMarkup } from './create-markup';

const refs = {
  form: document.querySelector('.js-contact-form'),
  list: document.querySelector('.js-list'),
};

getContacts().then(data => {
  const markup = createListMarkup(data);
  refs.list.innerHTML = markup;
});

const handleSubmit = event => {
  event.preventDefault();
  const contact = {};
  const formData = new FormData(event.target);
  formData.forEach((value, key) => {
    contact[key] = value;
  });
  createContact(contact).then(data => {
    const markup = createListMarkup([data]);
    refs.list.insertAdjacentHTML('afterbegin', markup);
  });
};

refs.form.addEventListener('submit', handleSubmit);

const onDeleteContact = event => {
  if (event.target.nodeName !== 'BUTTON') return;
  const oldElem = event.target.closest('LI');
  deleteContact(event.target.dataset.id).then(data => {
    oldElem.remove();
    Notify.success(`${data.name} deleted`);
  });
};
refs.list.addEventListener('click', onDeleteContact);
