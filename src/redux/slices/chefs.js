import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const apiLink = 'https://cheftrack.herokuapp.com/api/v1/';

const initialState = {
  allChefs: [],
};

export const fetchChefsDataAsync = createAsyncThunk(
  'chefs/fetchAll',
  async () => {
    let chefData = await fetch(`${apiLink}/chefs`);
    chefData = await chefData.json();
    return chefData.data;
  },
);

const chefSlice = createSlice({
  name: 'chefs',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchChefsDataAsync.fulfilled, (state, action) => {
      const { allChefs } = state;
      action.payload.forEach((chef) => {
        allChefs.push(chef);
      });
    });
  },
});

export const chefsSelector = (state) => state.chefs.allChefs;
export default chefSlice.reducer;
