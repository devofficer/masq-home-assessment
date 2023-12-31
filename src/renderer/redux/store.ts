// src/store.ts
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import weatherReducer from './slices/weatherSlice';

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
