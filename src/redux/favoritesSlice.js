import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';



const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: { entities: [] },
    reducers: {
      toggleFavorite(state, action) {
        let findIndex = state.entities.findIndex(car => car.id === action.payload.id);


        if (findIndex === -1) {
          state.entities.push(action.payload);
        } else {
          state.entities.splice(findIndex, 1);
        }


          // if (state.entities.length === 0) {
          //   state.entities.push(action.payload);
          // } if (state.entities.length > 0) {
            
          // } else {
          // }
          

        },
        removeFavorites(state, action) {
            
        }
        
  }
});

const persistConfig = {
  key: 'favorites',
  storage,
};

export const favoritesReducer = persistReducer(persistConfig,favoritesSlice.reducer);

export const { toggleFavorite, removeFavorites } = favoritesSlice.actions;


