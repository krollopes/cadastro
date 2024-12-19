// src/js/table.js
import { readClient } from './client.js';

const clearTable = () => {
  const rows = document.querySelectorAll('#tableClient>tbody tr');
  rows.forEach(row => row.remove());
};

const createRow = (client, index) => {
  const newRow = document.createElement('tr');
  newRow.innerHTML = `
    <td>${client.name}</td>
    <td>${client.email}</td>
    <td>${client.phone}</td>
    <td>
      <button type="button" class="btn btn-secondary" id="edit-${index}">Editar</button>
      <button type="button" class="btn btn-danger" id="delete-${index}">Excluir</button>
    </td>
  `;
  document.querySelector('#tableClient>tbody').appendChild(newRow);
};

export const updateTable = () => {
  const dbClient = readClient();
  clearTable();
  dbClient.forEach(createRow);
};
