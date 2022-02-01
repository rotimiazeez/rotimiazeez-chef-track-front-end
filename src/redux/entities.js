import { combineReducers } from '@reduxjs/toolkit';
import cheffs from './slices/cheffs';
import cities from './slices/cities';
import reservation from './slices/reservation';

const entities = combineReducers({
  reservation,
  cities,
  cheffs,
});

export default entities;
