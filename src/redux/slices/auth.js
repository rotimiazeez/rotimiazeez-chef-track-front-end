/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const auth = createSlice({
  name: 'auth',
  initialState: {
    currentUser: null,
    loading: false,
    error: null,
  },
  reducers: {
    authRequestStarted: (state) => {
      state.loading = true;
    },
    setUser: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    authRequestFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearAuthData: (state) => {
      state.currentUser = null;
      state.loading = false;
      state.error = null;
    },
  },
});

export const {
  authRequestFailed, authRequestStarted, clearAuthData, setUser,
} = auth.actions;
export default auth.reducer;
