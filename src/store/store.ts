import { configureStore } from '@reduxjs/toolkit/';
import bookApi from '../services/bookService';
import pageReducer from './slices/pageSlice';
import searchReducer from './slices/searchSlice';

const store = configureStore({
  reducer: {
    page: pageReducer,
    search: searchReducer,
    [bookApi.reducerPath]: bookApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bookApi.middleware),
});

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store['getState']>;
