// apiSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';
import { api } from '../Api';

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export const fetchData = createAsyncThunk('tasks/fetchData', async () => {
  const response = await api.get(`/todolist`);
  return response.data;
});

export const addData = createAsyncThunk('tasks/addData', async (newItem) => {
  const response = await api.post(`/todolist`, newItem);
  return response.data;
});

export const updateData = createAsyncThunk('tasks/updateData', async (id,currentState) => {
  console.log(id,currentState)
   const response = await api.patch(`/todoList/${id}`, { moveToTrash: !currentState });
  return response.data
});

export const deleteData = createAsyncThunk('tasks/deleteData', async (id) => {
    if (confirm("You sure!This task will be remove permently!")) {
      await api.delete(`/todolist/${id}`);
    }
    return;
});

const taskDataSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {

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
