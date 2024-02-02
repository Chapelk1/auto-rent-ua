import { createSlice } from "@reduxjs/toolkit";
import {fetchCars} from './operationsCars'



const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    entities: [],
    isLoading: false,
    error: null,
    page: 1,
    noFound: true,
  },
  reducers: {
    removePage(state) {
      state.page = 1;
      state.entities = [];
    },
    setFound(state) {
      state.noFound = false;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCars.pending, (state, action) => {
        state.isLoading = true;
        
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.entities = [...state.entities, ...action.payload];
        if (action.payload.length < 12) {
          state.noFound = false;
        } else {
          state.noFound = true;
          state.page = state.page + 1;
        }

        
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        
      });
  },
});



export const carsSliceReducer = carsSlice.reducer;
export const { removePage, setFound } = carsSlice.actions;








