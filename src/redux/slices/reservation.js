/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const reservation = createSlice({
  name: 'reservation',
  initialState: {
    list: [],
    loading: false,
    error: '',
  },
  reducers: {
    reservationRequest: (state) => {
      state.loading = true;
    },
    setReservation: (state, action) => {
      state.list = action.payload.data;
      state.loading = false;
    },
    reservationCreated: (state, action) => {
      state.list.push(action.payload.data);
      state.loading = false;
    },
    reservationFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const {
  reservationRequest,
  setReservation,
  reservationFailure,
  reservationCreated,
} = reservation.actions;
export default reservation.reducer;
