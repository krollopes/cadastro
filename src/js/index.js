import { setupEventListeners } from './listeners.js';
import { updateTable } from './table.js';

// Entry point
document.addEventListener('DOMContentLoaded', () => {
  setupEventListeners(); // Bind event listeners
  updateTable(); // Render the client table in the DOM
});