import { configureStore } from '@reduxjs/toolkit';
import authSlice from './reducers/authReducer';
import transactionSlice from './reducers/transactionReducer';
import filterSlice from './reducers/filterReducer';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    transactions: transactionSlice,
    filters: filterSlice,
  },
});

export default store;
