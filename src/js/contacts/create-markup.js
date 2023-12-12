export const createListMarkup = data => {
  return data
    .map(
      contact => `<li class="contacts-item">
      <span>${contact.id}</span>
    <p>${contact.name}</p>
        <p>${contact.email}</p>
        <p>${contact.number}</p>
      
        <button type="button" data-id="${contact.id}">Delete</button>
        </li>`
    )
    .join('');
};
