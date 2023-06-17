import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './api/apiSlice';
import authSlice from '../features/auth/authSlice';
import notificationSlice from './notification/notificationSlice';
import { rtkQueryErrorLogger } from './api/rtkQueryErrorLogger';
import localStorageSlice from './localStorage/localStorage.slice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    notification: notificationSlice,
    localStorage: localStorageSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: getDefaultMiddleware => 
    getDefaultMiddleware().concat(apiSlice.middleware).concat(rtkQueryErrorLogger),
  devTools: true
});
