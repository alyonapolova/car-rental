import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL =
  "https://65b95d65b71048505a8abdeb.mockapi.io/api/v1/advert";

export const getAllCars = createAsyncThunk(
  "cars/getAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("/");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
