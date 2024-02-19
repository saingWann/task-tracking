// apiSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';
import { api } from '../Api';

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export const fetchData = createAsyncThunk('data/fetchData', async () => {
  const response = await api.get(`/todolist`);
  return response.data;
});

export const addData = createAsyncThunk('data/addData', async (newItem) => {
  const response = await api.post(`/todolist`, newItem);
  return response.data;
});

export const updateData = createAsyncThunk('data/updateData', async (updatedItem) => {
  const response = await api.patch(`/todolist/${updatedItem.id}`, updatedItem);
  return response.data;
});

export const deleteData = createAsyncThunk('data/deleteData', async (id) => {
  await api.delete(`/todolist`);
  return id;
});

const taskDataSlice = createSlice({
  name: 'api',
  initialState,
  reducers: {
    // No additional reducers needed for CRUD operations
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addData.fulfilled, (state, action) => {
        state.data.push(action.payload);
      })
      .addCase(updateData.fulfilled, (state, action) => {
        const index = state.data.findIndex(item => item.id === action.payload.id);
        if (index !== -1) {
          state.data[index] = action.payload;
        }
      })
      .addCase(deleteData.fulfilled, (state, action) => {
        state.data = state.data.filter(item => item.id !== action.payload);
      });
  },
});


export default taskDataSlice.reducer;
