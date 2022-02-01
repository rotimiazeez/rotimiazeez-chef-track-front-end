/* eslint-disable no-return-await */
import http from '../services/httpService';
import { BASE_URL } from '../utils/constants';

export const getReservationsAsync = async () => await http.get(`${BASE_URL}/reservations`);
export const getReservationAsync = async (id) => await http.get(`${BASE_URL}/reservations/${id}`);
export const createReservationAsync = async (reservation) => await
http.post(`${BASE_URL}/reservations`, reservation);
