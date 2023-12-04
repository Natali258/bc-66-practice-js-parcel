import storage from './storage';

const form = document.querySelector('.js-contact-form');

initPage();

const handleChange = evt => {
  const { name, value } = evt.target;
  const saveData = storage.load('feedbackForm') || {};
  saveData[name] = value;

  storage.save('feedbackForm', saveData);
};

const onSubmit = e => {
  e.preventDefault();
  const { name, email, message } = e.target.elements;
  console.log({ name: name.value, email: email.value, message: message.value });
  localStorage.removeItem('feedbackForm');
  e.target.reset();
};

form.addEventListener('input', handleChange);
form.addEventListener('submit', onSubmit);

function initPage() {
  let saveData = storage.load('feedbackForm');
  if (saveData) {
    Object.entries(saveData).forEach(([key, value]) => {
      form.elements[key].value = value;
    });
  }
}
