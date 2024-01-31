import { createSlice } from "@reduxjs/toolkit";
import { getMakes } from "./operations";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    makes: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMakes.fulfilled, (state, action) => {
        state.makes = action.payload;
      })
      .addCase(getMakes.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const filtersReducer = filtersSlice.reducer;
