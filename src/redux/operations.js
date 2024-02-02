import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://65b95d65b71048505a8abdeb.mockapi.io/api/v1';

export const getAllCars = createAsyncThunk(
  'cars/getAllCars',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/advert', {
        params: { page: 1, limit: 12 },
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getMakes = createAsyncThunk(
  'cars/getMakes',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/makes');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
