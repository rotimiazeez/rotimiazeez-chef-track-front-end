import { combineReducers } from '@reduxjs/toolkit';
import entities from './entities';
import auth from './slices/auth';
import chefs from './slices/chefs';
import addchefs from './chefs/chefs';

const reducer = combineReducers({
  auth,
  chefs,
  entities,
  addchefs,
});

export default reducer;
