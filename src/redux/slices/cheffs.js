/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const cheffs = createSlice({
  name: 'cheffs',
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {
    chefsRequested: (state) => {
      state.loading = true;
    },
    setChefs: (state, action) => {
      state.list = action.payload.data;
      state.loading = false;
    },
    setChefsFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },

});

export const { chefsRequested, setChefs, setChefsFailure } = cheffs.actions;
export default cheffs.reducer;
