export const createListMarkup = data => {
  return data
    .map(
      contact => `<li class="contacts-item"  data-id="${contact.id}">
      <span>${contact.id}</span>
    <p>${contact.name}</p>
        <p>${contact.email}</p>
        <p>${contact.number}</p>
      
        <button type="button">Delete</button>
        </li>`
    )
    .join('');
};

export const createContactInfo = ({ id, name, email, number }) => {
  return `<div class="modal-item"  data-id="${id}">
  <button class="modal-close-btn">X</button>
      <span>${id}</span>
    <p>${name}</p>
        <p>${email}</p>
        <p>${number}</p>
        </div>`;
};
