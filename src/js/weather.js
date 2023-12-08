import { Notify } from 'notiflix/build/notiflix-notify-aio';
import 'material-icons/iconfont/material-icons.css';

const refs = {
  form: document.querySelector('.js-search-form'),
};

const handleSumbit = event => {
  event.preventDefault();
  const { value } = event.target.elements.user_country;

  if (!value) {
    return Notify.failure('Please, Enter City Name');
  }
  console.log(value);
};

refs.form.addEventListener('submit', handleSumbit);
