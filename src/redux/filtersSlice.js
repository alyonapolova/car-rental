import { createSlice } from '@reduxjs/toolkit';
import { getMakes } from './operations';

const initialState = {
  makes: null,
  error: null,
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {},
  extraReducers: builder => {
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
