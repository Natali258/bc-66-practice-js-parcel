import Notiflix, { Notify } from 'notiflix';
import {
  createContact,
  deleteContact,
  getContacts,
  getContactById,
} from './contacts-api';
import { createListMarkup, createContactInfo } from './create-markup';

const refs = {
  form: document.querySelector('.js-contact-form'),
  list: document.querySelector('.js-list'),
  backDrop: document.querySelector('.js-backdrop'),
  closeModalBtn: document.querySelector('.modal-close-btn'),
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
    event.target.reset();
  });
};

refs.form.addEventListener('submit', handleSubmit);

const onClickContact = event => {
  if (event.target.nodeName === 'UL') return;

  const item = event.target.closest('LI');

  if (event.target.nodeName === 'BUTTON') {
    deleteContact(item.dataset.id).then(data => {
      item.remove();
      Notify.success(`${data.name} deleted`);
    });
    return;
  }

  getContactById(item.dataset.id).then(data => {
    // console.log(data);
    refs.backDrop.classList.remove('is-hidden');
    document.addEventListener('keydown', onEscButtonPress);
    refs.backDrop.innerHTML = createContactInfo(data);
  });
};
refs.list.addEventListener('click', onClickContact);

refs.backDrop.addEventListener('click', onCloseModal);
function onCloseModal({ target, currentTarget }) {
  const isButtonClose = target.classList.contains('modal-close-btn');

  if (isButtonClose || target === currentTarget) {
    hideBackdrope();
  }
}

function onEscButtonPress(e) {
  if (e.code === 'Escape') {
    hideBackdrope();
  }
}

function hideBackdrope() {
  refs.backDrop.classList.add('is-hidden');
  document.removeEventListener('keydown', onEscButtonPress);
}
// console.log(refs.closeModalBtn);
