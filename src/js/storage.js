// src/js/storage.js

const LOCAL_STORAGE_KEY = 'db_client';

/**
 * Retrieve data from localStorage.
 * @returns {Array} Parsed data from localStorage, or an empty array if none exists.
 */
export const getLocalStorage = () => {
  const data = localStorage.getItem(LOCAL_STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

/**
 * Save data to localStorage.
 * @param {Array} data - The array of client data to store.
 */
export const setLocalStorage = (data) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
};
