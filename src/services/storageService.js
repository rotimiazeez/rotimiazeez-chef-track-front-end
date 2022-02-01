import { AUTH_TOKEN } from '../utils/constants';

const storage = {
  get: (key) => JSON.parse(localStorage.getItem(key)),
  set: (key, value) => localStorage.setItem(key, JSON.stringify(value)),
  remove: (key) => localStorage.removeItem(key),
  getAuthToken: () => JSON.parse(localStorage.getItem(AUTH_TOKEN)),
  setAuthToken: (token) => localStorage.setItem(AUTH_TOKEN, JSON.stringify(token)),
  removeAuthToken: () => localStorage.removeItem(AUTH_TOKEN),
};

export default storage;
