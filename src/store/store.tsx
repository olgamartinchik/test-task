import { configureStore } from '@reduxjs/toolkit';
import currenciesReducer from './currencies/currenciesSlice';
import { combineReducers } from '@reduxjs/toolkit';
import { currenciesApi } from './currencies/currenciesApi';

const rootReducer = combineReducers({
  currencies: currenciesReducer,
  [currenciesApi.reducerPath]: currenciesApi.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(currenciesApi.middleware),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
