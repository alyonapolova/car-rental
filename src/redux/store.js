import { configureStore } from "@reduxjs/toolkit";
import { favoritesReducer } from "./favoritesSlice";
import { filtersReducer } from "./filtersSlice";
import { carsReducer } from "./slice";

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    favorites: favoritesReducer,
    filters: filtersReducer,
  },
});
