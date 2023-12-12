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
