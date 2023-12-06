// src/slices/weatherSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../store';

interface WeatherState {
  city: string;
  weatherData: any; // Replace 'any' with the actual type of your data
  loading: boolean;
  error: string | null;
}

const initialState: WeatherState = {
  city: '',
  weatherData: null,
  loading: false,
  error: null,
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
    setWeatherData: (state, action: PayloadAction<any>) => {
      state.weatherData = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setCity, setWeatherData, setLoading, setError } = weatherSlice.actions;
export default weatherSlice.reducer;

