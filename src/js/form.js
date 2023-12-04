import storage from './storage';

const form = document.querySelector('.js-contact-form');

initPage();

const handleChange = evt => {
  const { name, value } = evt.target;
  const saveData = storage.load('feedbackForm') || {};
  saveData[name] = value;

  storage.save('feedbackForm', saveData);
};

form.addEventListener('input', handleChange);

function initPage() {
  let saveData = storage.load('feedbackForm');
  if (saveData) {
    Object.entries(saveData).forEach(([key, value]) => {
      form.elements[key].value = value;
    });
  }
}
