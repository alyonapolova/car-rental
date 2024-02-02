import { createSlice } from '@reduxjs/toolkit';
import { getAllCars } from './operations';

const initialState = {
  cars: null,
  isLoading: false,
  error: null,
  favList: [],
};

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
  addToFavorites: (state, action) => {
    const carInList = state.favList.find(car => car.id === action.payload.id);
    if (!carInList) {
      state.favList.push(action.payload);
    }
  },
  removeFromFavorites: (state, action) => {
    state.favList = state.list.filter(item => item.id !== action.payload.id);
  },

},
  extraReducers: builder => {
    builder
      .addCase(getAllCars.pending, state => {
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

export const { addToFavorites, removeFromFavorites } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
