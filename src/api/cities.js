/* eslint-disable no-return-await */
import http from '../services/httpService';
import { BASE_URL } from '../utils/constants';

export const getCitiesAsync = async () => await http.get(`${BASE_URL}/cities`);
export const getCityAsync = async (cityId) => await http.get(`${BASE_URL}/cities/${cityId}`);
