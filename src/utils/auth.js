import _ from 'lodash';
import axios from 'axios';

import storage from '../services/storageService';

export const updateToken = (token = null) => {
  if (_.isEmpty(token)) {
    storage.removeAuthToken();
    return delete axios.defaults.headers.common.Authorization;
  }
  storage.setAuthToken(token);
  axios.defaults.headers.common.Authorization = token;
  return token;
};

export const whaterver = () => {
  console.log('whatever');
};
