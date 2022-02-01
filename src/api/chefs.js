/* eslint-disable no-return-await */
import http from '../services/httpService';
import { BASE_URL } from '../utils/constants';

export const getChefsAsync = async () => await http.get(`${BASE_URL}/chefs`);
export const deleteChefAsync = async (chefId) => await http.delete(`${BASE_URL}/chefs/${chefId}`);
