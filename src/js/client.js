import { getLocalStorage, setLocalStorage } from './storage.js';

export const readClient = () => getLocalStorage();

export const createClient = (client) => {
  const dbClient = getLocalStorage();
  dbClient.push(client);
  setLocalStorage(dbClient);
};

export const updateClient = (index, client) => {
  const dbClient = readClient();
  dbClient[index] = client;
  setLocalStorage(dbClient);
};

export const deleteClient = (index) => {
  const dbClient = readClient();
  dbClient.splice(index, 1);
  setLocalStorage(dbClient);
};

export const saveClient = () => {
  const form = document.getElementById('form');
  if (!form.checkValidity()) {
    form.classList.add('was-validated');
    return;
  }

  const client = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value,
  };

  const index = document.getElementById('name').dataset.index;

  if (index === 'new') {
    createClient(client);
  } else {
    updateClient(index, client);
  }

  clearFields();
};

export const editClient = (index) => {
  const client = readClient()[index];
  client.index = index;

  document.getElementById('name').value = client.name;
  document.getElementById('email').value = client.email;
  document.getElementById('phone').value = client.phone;
  document.getElementById('name').dataset.index = index;

  const modal = new bootstrap.Modal(document.getElementById('staticBackdrop'));
  modal.show();
};

const clearFields = () => {
  const fields = document.querySelectorAll('.form-control');
  fields.forEach(field => field.value = '');
  document.getElementById('name').dataset.index = 'new';
};

