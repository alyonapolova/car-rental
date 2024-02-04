import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Notiflix from 'notiflix';

axios.defaults.baseURL = 'https://65b95d65b71048505a8abdeb.mockapi.io/api/v1';

export const getCars = createAsyncThunk(
  'cars/getCars',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/advert');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getAllCars = createAsyncThunk(
  'cars/getAllCars',
  async (params, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/advert', { params });
      return data;
    } catch (error) {
      Notiflix.Notify.info(
        "Sorry, we don't have any cars matching your request :("
      );
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
