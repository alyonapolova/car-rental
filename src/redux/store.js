import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { favoritesReducer } from './favoritesSlice';
import { filtersReducer } from './filtersSlice';
import { carsReducer } from './slice';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig1 = {
  key: 'root',
  storage,
};
const persistConfig2 = {
  key: 'fav',
  storage,
};

const reducer = combineReducers({
  cars: persistReducer(persistConfig1, carsReducer),
  favorites: persistReducer(persistConfig2, favoritesReducer),
  filters: filtersReducer,
});

export const store = configureStore({
  reducer: reducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
