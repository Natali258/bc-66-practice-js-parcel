const form = document.querySelector('.js-contact-form');

const handleChange = evt => {
  const { name, value } = evt.target;
  let saveData = localStorage.getItem('feedbackForm');
  console.log(saveData);
  saveData = saveData ? JSON.parse(saveData) : {};
  saveData[name] = value;

  localStorage.setItem('feedbackForm', JSON.stringify(saveData));
};

form.addEventListener('input', handleChange);
