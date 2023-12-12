export const createListMarkup = data => {
  return data
    .map(
      contact => `<li class="contacts-item">
    <p>${contact.name}</p>
        <p>${contact.email}</p>
        <p>${contact.number}</p>
        <button type="button">Delete</button>
        </li>`
    )
    .join('');
};
