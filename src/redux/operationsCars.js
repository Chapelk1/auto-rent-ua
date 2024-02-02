import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL =
  'https://65baceefb4d53c066553a276.mockapi.io/api';




export const fetchCars = createAsyncThunk(
  'cars/fetchAll',
  async (params, thunkAPI) => {
    const options = {
      params, 
    };

    try {
      const response = await axios.get('/adverts', options);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

