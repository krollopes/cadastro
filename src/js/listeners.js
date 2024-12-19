// src/js/listeners.js
import { saveClient, editClient, deleteClient, readClient } from './client.js';
import { updateTable } from './table.js';
import { closeModal, closeModal2 } from './modals.js';

export const setupEventListeners = () => {
  // Save client form submission
  document.getElementById('save').addEventListener('click', (event) => {
    event.preventDefault();
    const form = document.getElementById('form');
    if (form.checkValidity()) {
      saveClient();
      updateTable();
      closeModal(); // Close the modal after saving the client
    } else {
      form.classList.add('was-validated');
    }
  });

  // Edit or delete client via table actions
  document.querySelector('#tableClient>tbody').addEventListener('click', (event) => {
    const [action, index] = event.target.id.split('-');
    if (action === 'edit') {
      editClient(index);
    } else if (action === 'delete') {
      const client = readClient()[index];
      document.querySelector('#avisoDelete').textContent = `Deseja realmente excluir o cliente ${client.name}?`;

      const modal = new bootstrap.Modal(document.getElementById('modal2'));
      modal.show();

      document.getElementById('delete').onclick = () => {
        deleteClient(index);
        updateTable();
        closeModal2();
      };
    }
  });

  // Close modals
  document.getElementById('cancel').addEventListener('click', closeModal);
  document.getElementById('cancelDelete').addEventListener('click', closeModal2);

  // Open registration modal
  document.getElementById('registerClient').addEventListener('click', () => {
    const modal = new bootstrap.Modal(document.getElementById('staticBackdrop'));
    modal.show();
  });
};
