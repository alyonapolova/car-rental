import { createSlice } from "@reduxjs/toolkit";
import { getAllCars } from "./operations";

const initialState = {
  cars: null,
  isLoading: false,
  error: null,
};

const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllCars.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllCars.fulfilled, (state, action) => {
        state.cars = action.payload;
        state.isLoading = false;
      })
      .addCase(getAllCars.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const carsReducer = carsSlice.reducer;