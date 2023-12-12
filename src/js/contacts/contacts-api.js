// https://6578508af08799dc8044e406.mockapi.io/contacts
export const getContacts = () => {
  return fetch('https://6578508af08799dc8044e406.mockapi.io/contacts').then(
    res => {
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      return res.json();
    }
  );
};
export const createContact = contact => {
  const options = {
    method: 'POST',
    body: JSON.stringify(contact),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  };
  return fetch(
    'https://6578508af08799dc8044e406.mockapi.io/contacts',
    options
  ).then(res => {
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    return res.json();
  });
};

export const deleteContact = id => {
  const options = {
    method: 'DELETE',
  };
  return fetch(
    `https://6578508af08799dc8044e406.mockapi.io/contacts/${id}`,
    options
  ).then(res => {
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    return res.json();
  });
};
