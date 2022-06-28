import { configureStore, combineReducers } from '@reduxjs/toolkit';
import countryReducer from './country/countrySlice';

const allReducer = combineReducers({
    countryReducer,
  });
  const store = configureStore({
    reducer: allReducer,
  });
  export default store;