import { Notify } from 'notiflix/build/notiflix-notify-aio';
import 'material-icons/iconfont/material-icons.css';
import { fetchWeatherByCityName } from './weatherApi';
import { createMarckup } from './createMarckup';

const refs = {
  form: document.querySelector('.js-search-form'),
  weatherWrapper: document.querySelector('.weather__wrapper'),
};

const handleSumbit = event => {
  event.preventDefault();
  const { value } = event.target.elements.user_country;

  if (!value) {
    return Notify.failure('Please, Enter City Name');
  }
  fetchWeatherByCityName(value)
    .then(data => {
      const markup = createMarckup(data)
      refs.weatherWrapper.innerHTML = markup
    })
    .catch(error => {
      Notify.failure(`Weather for ${value} not found`)
    })
    
};

refs.form.addEventListener('submit', handleSumbit);
