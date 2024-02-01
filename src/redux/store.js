import { configureStore } from '@reduxjs/toolkit';
import { favoritesReducer } from './favoritesSlice';
import {carsSliceReducer} from './carsSlice'
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';




export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    cars: carsSliceReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
