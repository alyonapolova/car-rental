import { createSlice } from '@reduxjs/toolkit';
import { getAllCars, getCars } from './operations';

const initialState = {
  cars: [],
  isLoading: false,
  error: null,
  favList: [],
  page: 1,
  limit: 12,
  totalPages: null,
};

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    setPage(state, action) {
      state.page = action.payload;
    },
    addToFavorites: (state, action) => {
      const carInList = state.favList.find(car => car.id === action.payload.id);
      if (!carInList) {
        state.favList.push(action.payload);
      }
    },
    removeFromFavorites: (state, action) => {
      const indexToRemove = state.favList.findIndex(
        item => item.id === action.payload.id
      );
      if (indexToRemove !== -1) {
        state.favList.splice(indexToRemove, 1);
      }
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getAllCars.pending, state => {
        state.isLoading = true;
      })
      .addCase(getAllCars.fulfilled, (state, action) => {
        if (state.page > 1) {
          state.cars.push(...action.payload);
          return;
        }

        state.cars = action.payload;
      })
      .addCase(getAllCars.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(getCars.fulfilled, (state, action) => {
        state.totalPages = Math.ceil(action.payload.length / state.limit);
      });
  },
});

export const { setPage, addToFavorites, removeFromFavorites } =
  carsSlice.actions;
export const carsReducer = carsSlice.reducer;
