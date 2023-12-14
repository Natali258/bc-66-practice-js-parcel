// https://6578508af08799dc8044e406.mockapi.io/contacts
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://6578508af08799dc8044e406.mockapi.io',
});
export const getContacts = async () => {
  const { data } = await instance.get('/contacts');
  return data;
};
export const createContact = async contact => {
  const { data } = await instance.post('/contacts', contact);

  return data;
};

export const deleteContact = async id => {
  const { data } = await instance.delete(`/contacts/${id}`);
  return data;
};

export const getContactById = async id => {
  const { data } = await instance.get(`/contacts/${id}`);
  return data;
};
