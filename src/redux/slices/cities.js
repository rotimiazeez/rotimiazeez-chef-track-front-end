/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const cities = createSlice({
  name: 'cities',
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {
    citiesRequested: (state) => {
      state.loading = true;
    },
    setCities: (state, action) => {
      state.list = action.payload.data;
      state.loading = false;
    },
    setCitiesFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { citiesRequested, setCities, setCitiesFailure } = cities.actions;
export default cities.reducer;
