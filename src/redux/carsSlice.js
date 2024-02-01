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
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchCars.pending, (state, action) => {
                state.isLoading = true;
                console.log('pending');
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
                
                console.log('fulfilled');
                
            })
            .addCase(fetchCars.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
                console.log('rejected');
            })
  }
});



export const carsSliceReducer = carsSlice.reducer;
export const { removePage } = carsSlice.actions;








