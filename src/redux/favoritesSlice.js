import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    favList: [],
  },
  reducers: {
    addToFavorites: (state, action) => {
      state.favList.push(action.payload);
    },
    removeFromFavorites: (state, action) => {
      state.favList = state.list.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
