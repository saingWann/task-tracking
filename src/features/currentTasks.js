import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import { api } from '../Api';

export const fetchCurrentData = createAsyncThunk('currentTasks/fetchData', async () => {
    const response = await api.get(`/todolist`);
    return response.data;
  });

  export const addData = createAsyncThunk('currentTasks/addData', async (newItem) => {
    const response = await api.post(`/todolist`, newItem);
    return response.data;
  });
  
  export const moveToBin = createAsyncThunk('currentTasks/moveToBin', async (action) => {
    // console.log(action.id)
     const response = await api.patch(`/todoList/${action.id}`, { moveToTrash: !action.moveToTrash });
    
    return response.data
  });

  export const handleComplete = createAsyncThunk('currentTasks/handleComplete', async (action) => {
    // console.log(action)
     const response = await api.patch(`/todoList/${action.id}`, { complete: !action.complete });
    
    return response.data
  });

  export const updateData = createAsyncThunk('currentTasks/updateData', async (id,currentState) => {
    console.log(id,currentState)
    alert("Task has been moved to trash bin.")
     const response = await api.patch(`/todoList/${id}`, currentState);
    return response.data
  });
  
  


  export const deleteData = createAsyncThunk('currentTasks/deleteData', async (id) => {
     
       const response = await api.delete(`/todolist/${id}`);
       return response.data
  });

  
const currentTasksSlice = createSlice ({
    name: 'currentTasks',
    initialState: {currentTasks: [],loading: false,error:null,renderByCategory:[]},
    reducers: {
        renderByType: (state,action) => {
            let filterData;
            
            if (action.payload === "All") {
             
              filterData = state.currentTasks.filter(
                  (task) => task.moveToTrash !== true && task.complete === false
                )
        
            } else if (action.payload === "Trash bin") {
              filterData = state.currentTasks.filter(
                (task) => task.moveToTrash === true
              )
            } else if (action.payload === "Done") {
              filterData = state.currentTasks.filter((task) => task.complete === true);
            } else {
              filterData = state.currentTasks.filter(
                (task) =>
                  task.type === action.payload &&
                  task.moveToTrash === false &&
                  task.complete === false
                  ); 
            }
            // console.log({...state,renderByCategory:filterData})
            return  {...state,renderByCategory:filterData}
          }
        },
       
          extraReducers: (builder) => {
            builder
              .addCase(fetchCurrentData.pending, (state) => {
                state.loading = true;
              })
              .addCase(fetchCurrentData.fulfilled, (state, action) => {
                state.loading = false;
                state.currentTasks = action.payload;
                state.renderByCategory = action.payload
              })
              .addCase(fetchCurrentData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
              })
              .addCase(addData.fulfilled, (state, action) => {
                state.currentTasks.push(action.payload);
              })
              .addCase(moveToBin.fulfilled, (state, action) => {
                const index = state.currentTasks.findIndex(item => item.id === action.payload.id);
                if (index !== -1) {
                    console.log(state.currentTasks[index].moveToTrash)
                    console.log(action.payload)
                  state.currentTasks[index].moveToTrash = action.payload.moveToTrash;
                }
              })
              .addCase(handleComplete.fulfilled, (state, action) => {
                const index = state.currentTasks.findIndex(item => item.id === action.payload.id);
                if (index !== -1) {
                    console.log(state.currentTasks[index].complete)
                    console.log(action.payload)
                  state.currentTasks[index].complete = action.payload.complete;
                }
              })
              .addCase(deleteData.fulfilled, (state, action) => {
                state.currentTasks = state.currentTasks.filter(item => item.id !== action.payload);
              });
          },
            
    })
    
    
export const {renderByType} = currentTasksSlice.actions
export default currentTasksSlice.reducer